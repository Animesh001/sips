import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, board, percentage, message } = body;

    if (!name || !phone || !board || !percentage) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const smtpUser = process.env.BREVO_SMTP_USER;
    const smtpPass = process.env.BREVO_SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error('BREVO_SMTP_USER or BREVO_SMTP_PASS is not set');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
        <div style="background: #6c3fc5; padding: 24px 28px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Admission Inquiry — SIPS</h1>
          <p style="color: #e0d0ff; margin: 6px 0 0; font-size: 14px;">Submitted via sipssiliguri.in</p>
        </div>
        <div style="background: #ffffff; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; width: 40%;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px;">Phone Number</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 14px; font-weight: 600;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px;">Email Address</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 14px; font-weight: 600;">${email || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px;">Board of Education</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 14px; font-weight: 600;">${board}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px;">Class XII % (PCB/PCM)</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 14px; font-weight: 600;">${percentage}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message / Query</td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">${message || 'No message provided'}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 14px 18px; background: #f3f0ff; border-radius: 6px; border-left: 4px solid #6c3fc5;">
            <p style="margin: 0; color: #5b21b6; font-size: 13px;">Please follow up with this applicant within 24 working hours.</p>
          </div>
        </div>
        <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">SIPS — Siliguri Institute of Paramedical Sciences</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"SIPS Admissions Portal" <${smtpUser}>`,
      to: 'sips.siliguricampus@gmail.com',
      replyTo: email ? `"${name}" <${email}>` : undefined,
      subject: `New Admission Inquiry from ${name} — SIPS`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Apply route error:', error);
    return NextResponse.json({ error: 'Failed to send email. Please try again or contact us directly.' }, { status: 500 });
  }
}
