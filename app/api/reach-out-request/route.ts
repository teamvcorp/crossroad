import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Define the type for the form submission
type HelpRequestFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  description: string;
  bestTime: string;
};

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  // Parse the request body as the form data
  const formData: HelpRequestFormData = await req.json();

  try {
    // Construct the email body from the form data
    const emailBody = `
      Help Request Form Submission:

      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}

      Address:
      ${formData.streetAddress}
      ${formData.city}, ${formData.state} ${formData.zip}

      Description of Help Needed:
      ${formData.description}

      Best Time to Reach: ${formData.bestTime}
    `;

    // Use Resend to send the email
    const data = await resend.emails.send({
      from: 'noreply@rbttoolkit.com', // Replace with a verified sender email
      to: 'teamvcorp@thevacorp.com', // Replace with the recipient's email
      subject: '@Help Request Form Submission',
      text: emailBody, // Body of the email containing the form data
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Error sending email.' }, { status: 500 });
  }
}
