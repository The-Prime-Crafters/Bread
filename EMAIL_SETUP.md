# 📧 Email Setup with Nodemailer

## ✅ What's Configured:

1. **Nodemailer installed** ✓
2. **API route created** at `app/api/signup/route.ts` ✓
3. **EmailCapture component updated** ✓

---

## 🔧 Setup Instructions (5 minutes):

### **Step 1: Create `.env.local` file**

Create a file named `.env.local` in the root of your project:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

### **Step 2: Get Gmail App Password**

**Important:** You need an **App Password**, NOT your regular Gmail password!

1. Go to: https://myaccount.google.com/apppasswords
2. You may need to enable 2-Factor Authentication first
3. Select **"Mail"** and **"Other (Custom name)"**
4. Name it: "Birth & Brodo Website"
5. Click **Generate**
6. Copy the 16-character password (looks like: `xxxx xxxx xxxx xxxx`)
7. Paste it in `.env.local` (remove spaces)

### **Step 3: Update `.env.local`**

```env
EMAIL_USER=youremail@gmail.com
EMAIL_PASSWORD=abcdabcdabcdabcd
```

### **Step 4: Restart the dev server**

```bash
# Stop current server (Ctrl+C)
npm run dev
```

---

## 📬 What Happens When Someone Signs Up:

### **1. You receive an email notification:**
- Subject: "🎉 New Birth & Brodo Signup: [self/gift]"
- Contains: Email, signup type, timestamp
- Sent to: Your email

### **2. User receives a welcome email:**
- Beautiful branded email
- Personalized based on signup type (self vs gift)
- Sets expectations for Spring 2026 launch
- Professional design matching your brand

---

## 🎨 Email Features:

✅ **Beautiful HTML templates** with your brand colors
✅ **Personalized messages** for "self" vs "gift" signups
✅ **Professional design** with Birth & Brodo branding
✅ **Mobile responsive** emails
✅ **Instant notifications** to you

---

## 🔄 Alternative Email Services:

If you don't want to use Gmail, you can use:

### **Outlook/Hotmail:**
```javascript
service: 'outlook'
```

### **Yahoo:**
```javascript
service: 'yahoo'
```

### **Custom SMTP:**
```javascript
host: 'smtp.yourprovider.com',
port: 587,
secure: false,
auth: { user: '...', pass: '...' }
```

---

## 🧪 Testing:

1. Make sure `.env.local` exists with your credentials
2. Restart dev server: `npm run dev`
3. Go to http://localhost:3000
4. Scroll to email signup form
5. Enter your email and submit
6. Check your inbox (both yours and the test email)

---

## ⚠️ Important Notes:

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use App Password** - Regular password won't work
3. **Gmail limits:** 500 emails/day (free tier)
4. **For production:** Consider upgrading to SendGrid, AWS SES, or Resend for higher limits

---

## 🚀 Current Status:

✅ Nodemailer installed
✅ API route created  
✅ Form connected
⏳ **Need:** Add your email credentials to `.env.local`
⏳ **Need:** Restart dev server

---

## 📊 Data Collected:

Each signup captures:
- Email address
- Signup type (self/gift/not specified)
- Timestamp
- You get a notification for every signup!

---

## 💡 Next Steps:

After validation phase, you might want to:
1. Export all emails to Mailchimp/ConvertKit
2. Set up automated email sequences
3. Create segmented campaigns (self vs gift)

---

Need help? The setup is complete, you just need to add your email credentials! 🎉
