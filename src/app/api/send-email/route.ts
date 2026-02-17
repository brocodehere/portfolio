import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Prepare email data
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_TO_EMAIL,
      subject: subject || `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <div style="margin-bottom: 20px;">
              <strong style="color: #333; display: block; margin-bottom: 5px;">From:</strong>
              <span style="color: #666;">${name} (${email})</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333; display: block; margin-bottom: 5px;">Subject:</strong>
              <span style="color: #666;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333; display: block; margin-bottom: 5px;">Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; color: #333; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #999;">
              <p>This message was sent from your portfolio contact form.</p>
              <p>Sent at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
