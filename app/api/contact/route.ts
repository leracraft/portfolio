import { createHmac } from "node:crypto";
import { Resend } from "resend";
import { contactLimits } from "@/lib/contact";

const maxBytes = 24_000;
const limitScript = `
  local count = redis.call('INCR', KEYS[1])
  if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end
  return count
`;

function reply(message: string, status: number, headers?: HeadersInit) {
  return Response.json({ message }, { status, headers });
}

async function readFields(request: Request) {
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    throw new Error("Expected JSON");
  }

  const reader = request.body?.getReader();
  if (!reader) throw new Error("Missing body");

  const decoder = new TextDecoder("utf-8", { fatal: true });
  let body = "";
  let bytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > maxBytes) {
      await reader.cancel();
      throw new Error("Body too large");
    }
    body += decoder.decode(value, { stream: true });
  }
  return JSON.parse(body + decoder.decode());
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  const protocol = process.env.VERCEL === "1" ? "https:" : new URL(request.url).protocol;
  if (!host || origin !== `${protocol}//${host}`) {
    return reply("Please submit the form from this site.", 403);
  }

  let fields;
  try {
    fields = await readFields(request);
  } catch {
    return reply("Please submit a valid message within the form limits.", 400);
  }

  if (!fields || typeof fields !== "object" || Array.isArray(fields)) {
    return reply("Please submit a valid message.", 400);
  }

  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  if (!name || name.length > contactLimits.name || /[\r\n]/.test(name) ||
      email.length > contactLimits.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !message || message.length > contactLimits.message) {
    return reply("Enter your name, a valid email address, and a message within the form limits.", 400);
  }

  if (fields.website !== "") {
    return reply("This submission was blocked. You can use the direct email link.", 400);
  }

  const { RESEND_API_KEY, CONTACT_FROM, CONTACT_TO, CONTACT_REDIS_URL,
    CONTACT_REDIS_TOKEN, CONTACT_RATE_SECRET } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM || !CONTACT_TO || !CONTACT_REDIS_URL ||
      !CONTACT_REDIS_TOKEN || !CONTACT_RATE_SECRET) {
    return reply("This form is in preview. Please use the direct email link.", 503);
  }

  // Vercel sets this header at ingress. Other environments share a fallback bucket.
  const ip = process.env.VERCEL === "1"
    ? request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
    : undefined;
  const key = createHmac("sha256", CONTACT_RATE_SECRET).update(ip || "fallback").digest("hex");
  const failure = "Your message could not be sent. Your text is still here. Try again or use the direct email link.";

  try {
    const rateResponse = await fetch(CONTACT_REDIS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CONTACT_REDIS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(["EVAL", limitScript, 1, `suanara:contact:${key}`, 600]),
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    });
    if (!rateResponse.ok) return reply(failure, 503);
    const { result } = await rateResponse.json();
    if (!Number.isInteger(result) || result < 1) return reply(failure, 503);
    if (result > 5) {
      return reply("Too many attempts. Try again in a few minutes or use the direct email link.", 429,
        { "Retry-After": "600" });
    }

    const { data, error } = await new Resend(RESEND_API_KEY).emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: "New Suanara portfolio inquiry",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error || !data?.id) return reply(failure, 502);
    return reply("Your message was accepted for delivery.", 200);
  } catch {
    return reply(failure, 503);
  }
}
