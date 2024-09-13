import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

// Export the POST method as a named export
export async function POST(req: NextRequest) {
  const { parentInfo, children } = await req.json(); // Since NextRequest needs async parsing

  try {
    // Construct email body from form data
    const emailBody = `
      Parent Information:
      Name: ${parentInfo.name}
      Address: ${parentInfo.address}
      Cell: ${parentInfo.cell}
      Email: ${parentInfo.email}
      Age: ${parentInfo.age}
      Selected Option: ${parentInfo.option}

      Children Information:
      ${children.map((child: any, index: number) => `
        Child ${index + 1}:
        Name: ${child.name}
        Age: ${child.age}
        Date of Birth: ${child.dob}
        Medical Conditions: ${child.medicalConditions}
      `).join('\n')}
    `;

    // Use Resend to send the email
    const data = await resend.emails.send({
      from: 'noreply@rbttoolkit.com', // Replace with a verified sender email
      to: 'teamvcorp@thevacorp.com', // Replace with the recipient's email
      subject: 'Parent and Children Information Submission',
      text: emailBody, // Body of the email containing the parent and children data
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Error is unknown.' }, { status: 500 });
  }
}
