export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, company } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const resumePath = path.join(process.cwd(), 'public', 'resume.pdf');
    
    // Check if file actually exists before sending
    if (!fs.existsSync(resumePath)) {
      console.error("File not found at:", resumePath);
      return NextResponse.json({ error: "Resume file missing on server" }, { status: 500 });
    }

    const resumeBuffer = fs.readFileSync(resumePath);

    await prisma.resumeDownload.create({
  data: { 
    email: email,
    company: company || null, // Store company if provided, else null
  }
});

    const response = await resend.emails.send({
      from: "Lerabari <onboarding@resend.dev>",
      to: [email], // Wrap in array
      subject: `Resume Download Test - ${Date.now()}`, // Unique subject
      html: `<p>Testing attachment at ${new Date().toLocaleTimeString()}</p>`,
      attachments: [
        {
          filename: 'Resume.pdf',
          content: resumeBuffer,
        },
      ],
    });

    console.log("Resend API Response:", response); // Look at your terminal!

    return NextResponse.json({ success: true, debug: response });
  } catch (error: any) {
    console.error("Full Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}