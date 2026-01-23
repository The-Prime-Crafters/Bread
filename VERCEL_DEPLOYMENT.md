# 🚀 Vercel Deployment Guide - Birth & Brodo

## ❌ 404 Error? Here's How to Fix It:

### **Issue:** Getting 404: NOT_FOUND on Vercel

This happens because environment variables are missing or routing isn't configured.

---

## ✅ **Step-by-Step Fix:**

### **1. Set Environment Variables on Vercel**

Go to your Vercel project dashboard:
1. Click on your project
2. Go to **Settings** → **Environment Variables**
3. Add these THREE variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
DATABASE_URL=postgresql://neondb_owner:npg_LfsGgrMBP71o@ep-winter-hall-ahpur9hv-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

**IMPORTANT:** 
- Make sure DATABASE_URL is on ONE line (no line breaks!)
- Set for "Production", "Preview", and "Development" environments

---

### **2. Redeploy**

After adding environment variables:
1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **"Redeploy"** button
4. OR push a new commit to trigger rebuild

---

### **3. Check Build Logs**

If still failing:
1. Go to **Deployments**
2. Click on the failed deployment
3. Check the build logs for errors
4. Look for:
   - Missing environment variables
   - Build errors
   - Image optimization errors

---

## 🔍 **Common Issues & Fixes:**

### **Issue 1: Environment Variables Not Set**
**Symptom:** 404 or blank page
**Fix:** Add all 3 env vars in Vercel dashboard

### **Issue 2: Database Connection Error**
**Symptom:** API routes fail
**Fix:** 
- Ensure DATABASE_URL is correct
- Make sure Neon database allows connections
- Check Neon is not sleeping (free tier)

### **Issue 3: Image Optimization Error**
**Symptom:** Images not loading
**Fix:** Already configured in `next.config.ts` ✓

### **Issue 4: Build Timeout**
**Symptom:** Build fails after long time
**Fix:** 
- Check if any dependencies are too large
- Optimize images before deploying

---

## 📋 **Deployment Checklist:**

Before deploying, make sure:

- [ ] ✅ `vercel.json` exists (created)
- [ ] ✅ Environment variables set in Vercel
- [ ] ✅ `next.config.ts` has image config
- [ ] ✅ Database is accessible from Vercel
- [ ] ✅ Email credentials are valid
- [ ] ✅ No syntax errors in code
- [ ] ✅ Build works locally (`npm run build`)

---

## 🎯 **Verify Deployment:**

After deploying, test these:

1. **Homepage:** Should load with all images
2. **Navigation:** Header links should work
3. **Email form:** Should accept submissions
4. **Database:** Signups should save
5. **Emails:** Should send (check spam folder)

---

## 🔧 **Manual Deployment:**

If automatic deployment isn't working:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 📊 **Environment Variables Format:**

Make sure they look EXACTLY like this in Vercel:

**Name:** `EMAIL_USER`  
**Value:** `youremail@gmail.com`

**Name:** `EMAIL_PASSWORD`  
**Value:** `abcdabcdabcdabcd` (16 chars, no spaces)

**Name:** `DATABASE_URL`  
**Value:** `postgresql://neondb_owner:npg_LfsGgrMBP71o@ep-winter-hall-ahpur9hv-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require` (ONE LINE!)

---

## 🚨 **Troubleshooting:**

### **Still getting 404?**

1. Check Vercel build logs for errors
2. Verify all env vars are set
3. Try deleting the project and redeploying
4. Check if `app/page.tsx` exists
5. Make sure no `.vercelignore` is blocking files

### **Database not connecting?**

1. Check Neon dashboard - is database active?
2. Verify connection string is correct
3. Make sure Neon allows external connections
4. Check if IP whitelist is configured (Neon free tier has none by default)

### **Emails not sending?**

1. Check EMAIL_USER and EMAIL_PASSWORD are set
2. Verify Gmail app password is correct
3. Check spam folder
4. Try sending test email locally first

---

## 📞 **Quick Commands:**

```bash
# Test build locally
npm run build

# Test production locally
npm run build && npm start

# Check for errors
npm run lint

# Deploy to Vercel
vercel --prod
```

---

## 💡 **Pro Tips:**

1. **Always test locally first:** `npm run build`
2. **Check environment variables** before every deployment
3. **Monitor Vercel logs** for errors
4. **Set up Vercel notifications** for failed deployments
5. **Use Preview deployments** to test before production

---

## 🎉 **After Successful Deployment:**

1. Test the live site thoroughly
2. Submit a test signup
3. Check database for the test entry
4. Verify emails arrive
5. Share your beautiful landing page!

---

**Your live URL will be:** `https://your-project-name.vercel.app`

Need help? Check Vercel build logs or contact support!
