import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Define types for ParentInfo and Child
type Child = {
  name: string;
  age: string;
  dob: string;
  medicalConditions: string;
};

type ParentInfo = {
  name: string;
  address: string;
  cell: string;
  email: string;
  age: string;
  option: string;
};

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { parentInfo, children }: { parentInfo: ParentInfo; children: Child[] } = await req.json(); // Parse the request body

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
      ${children
        .map((child, index) => `
        Child ${index + 1}:
        Name: ${child.name}
        Age: ${child.age}
        Date of Birth: ${child.dob}
        Medical Conditions: ${child.medicalConditions}
      `)
        .join('\n')}
    `;

    // Use Resend to send the email
    const data = await resend.emails.send({
      from: 'noreply@rbttoolkit.com', // Replace with a verified sender email
      to: 'teamvcorp@thevacorp.com', // Replace with the recipient's email
      subject: '#contract Parent and Children Information Submission',
      text: emailBody, // Body of the email containing the parent and children data
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Error is unknown.' }, { status: 500 });
  }
}
