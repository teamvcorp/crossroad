import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  // Parse the incoming request body
  const { name, phone, message } = await req.json();

  try {
    // Construct email body from the form data
    const emailBody = `
      You have a new message from your website:

      Name: ${name}
      Phone: ${phone}
      Message: 
      ${message}
    `;

    // Use Resend to send the email
    const data = await resend.emails.send({
      from: 'noreply@rbttoolkit.com', // Replace with a verified sender email
      to: 'teamvcorp@thevacorp.com', // Replace with the recipient's email
      subject: 'New Contact Form Submission',
      text: emailBody, // Body of the email containing the form data
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Error sending email.' }, { status: 500 });
  }
}
