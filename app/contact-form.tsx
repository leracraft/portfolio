"use client";

import { useState, type FormEvent } from "react";
import { contactLimits } from "@/lib/contact";

export function ContactForm({ configured }: { configured: boolean }) {
  const [status, setStatus] = useState<{ kind: "idle" | "sending" | "success" | "error"; message: string }>({
    kind: "idle",
    message: "",
  });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!configured || status.kind === "sending") return;

    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    setStatus({ kind: "sending", message: "Sending message…" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const { message } = await response.json();
      if (response.ok) form.reset();
      setStatus({ kind: response.ok ? "success" : "error", message });
    } catch {
      setStatus({ kind: "error", message: "Your message could not be sent. Try again or use the direct email link." });
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <fieldset disabled={status.kind === "sending"}>
        <div className="contact-fields">
          <label>Name<input name="name" autoComplete="name" required maxLength={contactLimits.name} /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required maxLength={contactLimits.email} /></label>
          <label className="message-field">Message<textarea name="message" rows={4} required maxLength={contactLimits.message} /></label>
        </div>
        <div hidden>
          <label>Leave this blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <button className="button primary" type="submit" disabled={!configured}>
          {status.kind === "sending" ? "Sending…" : "Send Message"}
        </button>
      </fieldset>
      {!configured && <p className="form-note">Form preview. Please use the direct email link to get in touch.</p>}
      <p className="form-note" role="status">{status.kind !== "error" && status.message}</p>
      <p className="form-error" role="alert">{status.kind === "error" && status.message}</p>
    </form>
  );
}
