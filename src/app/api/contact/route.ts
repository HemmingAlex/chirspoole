import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, eventType, message } = body;

    // Configure for Outlook
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL, // your outlook email
        pass: process.env.EMAIL_PASSWORD // your outlook password
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    const mailData = {
      from: process.env.EMAIL,
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL, // where you want to receive emails
      subject: `New ${eventType} Event Inquiry - Shades Band`,
      html: `
        <h2>New Event Inquiry</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}