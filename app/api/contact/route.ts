import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = (await req.json()) as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "SafarSafe Beta <onboarding@resend.dev>",
      to: "teamsafarsafe@gmail.com",
      replyTo: email,
      subject: `New Beta Request from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 20px;font-size:18px">New Beta Request</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#555;width:80px"><strong>Name</strong></td>
              <td style="padding:8px 0">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#555"><strong>Email</strong></td>
              <td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#555;vertical-align:top"><strong>Message</strong></td>
              <td style="padding:8px 0">${message || "(no message)"}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
