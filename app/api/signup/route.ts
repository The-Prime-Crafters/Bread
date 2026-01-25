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
              
              <div style="background: #FEF3C7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
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

      // Optional: Welcome email to USER - PERSONALIZED based on signup type
      const isForSelf = signupType === 'self';
      const subjectLine = isForSelf 
        ? "Welcome to Your Recovery Journey with Birth & Brodo 🤰" 
        : "Thank You for This Thoughtful Gift! 🎁";
      
      const heroMessage = isForSelf
        ? "Your Recovery Journey Starts Here"
        : "What a Thoughtful Gift!";
      
      const mainMessage = isForSelf
        ? "Thank you for prioritizing your postpartum recovery. We are building something special to support you during the fourth trimester, and we are honored you want to be part of it from the beginning."
        : "Thank you for being such a thoughtful friend/partner/family member. Birth & Brodo is designed to support new mothers during their most vulnerable time, and your gift will make a real difference in someone's recovery journey.";
      
      const specificContent = isForSelf
        ? `
          <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #dd7409;">
            <h3 style="color: #dd7409; font-size: 20px; margin-bottom: 15px;">What to Expect for Your Recovery</h3>
            <ul style="color: #4a3728; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li><strong>Nutrient-dense meals</strong> designed specifically for postpartum healing</li>
              <li><strong>Zero effort required</strong> - delivered ready to eat when you need it most</li>
              <li><strong>Warming, restorative foods</strong> to support your energy and recovery</li>
              <li><strong>Founding member pricing</strong> as a thank you for believing in us early</li>
            </ul>
          </div>
          <div style="background: #FEF3C7; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
            <p style="color: #4a3728; font-size: 16px; line-height: 1.6; margin: 0;">
              <strong>💡 Tip:</strong> We recommend ordering for your first week postpartum. You will be able to choose from packs like "The First 7 Days" and "C-Section Recovery Pack" when we launch.
            </p>
          </div>
        `
        : `
          <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #dd7409;">
            <h3 style="color: #dd7409; font-size: 20px; margin-bottom: 15px;">Why Birth & Brodo Makes the Perfect Gift</h3>
            <ul style="color: #4a3728; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li><strong>Takes care of one major concern</strong> - what to eat during recovery</li>
              <li><strong>More meaningful than flowers</strong> - practical support when it matters most</li>
              <li><strong>Shows you truly understand</strong> the challenges of the fourth trimester</li>
              <li><strong>Gift cards available</strong> so they can choose their preferred packs</li>
            </ul>
          </div>
          <div style="background: #FEF3C7; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
            <p style="color: #4a3728; font-size: 16px; line-height: 1.6; margin: 0;">
              <strong>💝 Gift Tip:</strong> We recommend "The First 7 Days" pack as a baby shower gift, or our "Night Feed Support" pack for those late-night feeding sessions.
            </p>
          </div>
        `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: subjectLine,
        html: `
          <div style="font-family: 'Georgia', serif; padding: 20px; background-color: #fffbf5;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #dd7409; font-size: 32px; margin-bottom: 10px;">${heroMessage}</h1>
                <p style="color: #4a3728; font-size: 18px; margin: 0;">Birth & Brodo - Nourishment for the fourth trimester</p>
              </div>
              
              <div style="background: linear-gradient(to bottom, #FEF3C7, #FCD34D); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
                <h2 style="color: #1a1511; font-size: 24px; margin-bottom: 15px;">You are on the list! ✨</h2>
                <p style="color: #4a3728; font-size: 16px; line-height: 1.6; margin: 0;">
                  ${mainMessage}
                </p>
              </div>
              
              ${specificContent}
              
              <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 30px; border: 2px solid #FEF3C7;">
                <h3 style="color: #dd7409; font-size: 20px; margin-bottom: 15px;">What Happens Next?</h3>
                <ul style="color: #4a3728; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px;">
                  <li>We will send you launch updates as we get closer to Spring 2026</li>
                  <li>You will get <strong>exclusive founding-member pricing</strong></li>
                  <li>You will be <strong>first to access</strong> our recovery packs</li>
                  ${isForSelf 
                    ? '<li>We will share tips and resources for postpartum preparation</li>' 
                    : '<li>We will send you gifting guides and recommendations</li>'}
                </ul>
              </div>
              
              <div style="text-align: center; padding-top: 20px; border-top: 2px solid #FEF3C7;">
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
