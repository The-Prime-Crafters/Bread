import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, signupType, timestamp } = body;

    // Get user info for tracking
    const userAgent = request.headers.get('user-agent') || '';
    const forwarded = request.headers.get('x-forwarded-for');
    const ipAddress = forwarded ? forwarded.split(',')[0] : 'unknown';

    // 1. SAVE TO DATABASE FIRST
    const result = await pool.query(
      `INSERT INTO signups (email, signup_type, user_agent, ip_address) 
       VALUES ($1, $2, $3, $4) 
       RETURNING id`,
      [email, signupType, userAgent, ipAddress]
    );

    const signupId = result.rows[0].id;
    console.log(`✅ Saved signup #${signupId} to database:`, email);

    // 2. SEND EMAILS (Don't fail if this fails)
    try {
      // Create transporter using Gmail (you can use any email service)
      const transporter = nodemailer.createTransport({
        service: 'gmail', // or 'outlook', 'yahoo', etc.
        auth: {
          user: process.env.EMAIL_USER, // Your email
          pass: process.env.EMAIL_PASSWORD, // Your email app password
        },
      });

      // Email to YOU (notification)
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Your email to receive signups
        subject: `🎉 New Birth & Brodo Signup #${signupId}: ${signupType || 'Not specified'}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #fffbf5;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #dd7409; margin-bottom: 20px;">New Early Access Signup! 🎉</h2>
              
              <div style="background: #fef9ed; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 10px 0;"><strong>Signup ID:</strong> #${signupId}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 10px 0;"><strong>Signup Type:</strong> ${signupType === 'self' ? '🤰 For Myself' : signupType === 'gift' ? '🎁 To Gift' : '❓ Not specified'}</p>
                <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date(timestamp).toLocaleString()}</p>
                <p style="margin: 10px 0; font-size: 12px; color: #666;"><strong>IP:</strong> ${ipAddress}</p>
              </div>
              
              <p style="color: #666;">Keep building something amazing! 💪</p>
            </div>
          </div>
        `,
      });

      // Optional: Welcome email to USER
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "You are on the Birth & Brodo Early Access List! 🎉",
        html: `
          <div style="font-family: 'Georgia', serif; padding: 20px; background-color: #fffbf5;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #dd7409; font-size: 32px; margin-bottom: 10px;">Welcome to Birth & Brodo</h1>
                <p style="color: #4a3728; font-size: 18px; margin: 0;">Nourishment for the fourth trimester</p>
              </div>
              
              <div style="background: linear-gradient(to bottom, #fef9ed, #fff8e7); padding: 30px; border-radius: 10px; margin-bottom: 30px; border-left: 4px solid #dd7409;">
                <h2 style="color: #1a1511; font-size: 24px; margin-bottom: 15px;">You are on the list! ✨</h2>
                <p style="color: #4a3728; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                  Thank you for joining our early access list. We are building something special for the postpartum journey, and we are honored you want to be part of it.
                </p>
                <p style="color: #4a3728; font-size: 16px; line-height: 1.6; margin: 0;">
                  ${signupType === 'self' 
                    ? 'We will make sure you have everything you need for your recovery journey.' 
                    : signupType === 'gift' 
                    ? 'What a thoughtful gift! We will help you support someone during their postpartum journey.' 
                    : 'We will keep you updated as we get closer to launch.'}
                </p>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 30px; border: 2px solid #fef9ed;">
                <h3 style="color: #dd7409; font-size: 20px; margin-bottom: 15px;">What is Next?</h3>
                <ul style="color: #4a3728; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px;">
                  <li>We will send you updates as we get closer to launch</li>
                  <li>You will get exclusive founding-member pricing</li>
                  <li>You will be first to access our recovery packs</li>
                </ul>
              </div>
              
              <div style="text-align: center; padding-top: 20px; border-top: 2px solid #fef9ed;">
                <p style="color: #4a3728; font-size: 14px; margin-bottom: 10px;">
                  <strong>Launching Spring 2026</strong>
                </p>
                <p style="color: #4a3728; opacity: 0.7; font-size: 14px; margin: 0;">
                  No spam. No pressure. Just updates on our progress.
                </p>
              </div>
            </div>
            
            <div style="max-width: 600px; margin: 20px auto; text-align: center;">
              <p style="color: #4a3728; opacity: 0.6; font-size: 12px;">
                Birth & Brodo | Postpartum Recovery Meals
              </p>
            </div>
          </div>
        `,
      });

      console.log(`✅ Sent emails for signup #${signupId}`);
    } catch (emailError) {
      console.error('⚠️ Email sending failed (but signup saved):', emailError);
      // Don't fail the request if email fails - data is already saved!
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Signup saved successfully!',
      signupId 
    });

  } catch (error) {
    console.error('❌ Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to save signup' }, 
      { status: 500 }
    );
  }
}
