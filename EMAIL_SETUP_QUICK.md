# Quick Email Setup - Contact Form to sansika.sansikx@gmail.com

## ✅ What's Already Done
- ✅ EmailJS package added to dependencies
- ✅ Contact form updated to send emails
- ✅ Email will be sent to: **sansika.sansikx@gmail.com**

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up EmailJS (Free)

1. **Sign up at EmailJS**: https://www.emailjs.com/
   - Free account allows 200 emails/month

2. **Add Email Service**:
   - Dashboard → Email Services → Add New Service
   - Choose **Gmail**
   - Connect your Gmail account (sansika.sansikx@gmail.com)
   - Copy your **Service ID** (looks like: `service_xxxxxxx`)

3. **Create Email Template**:
   - Dashboard → Email Templates → Create New Template
   - **Template Name**: Contact Form
   - **To Email**: `sansika.sansikx@gmail.com`
   - **Subject**: `New Contact: {{subject}}`
   - **Content**:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
   - **Reply To**: `{{reply_to}}`
   - Save and copy your **Template ID** (looks like: `template_xxxxxxx`)

4. **Get Public Key**:
   - Dashboard → Account → General
   - Copy your **Public Key**

### Step 3: Add Environment Variables

**For Local Development:**
Create `.env` file in project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**For Vercel:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add these 3 variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy

### Step 4: Test
1. Fill out the contact form
2. Submit
3. Check `sansika.sansikx@gmail.com` inbox!

## 📧 Email Format
When someone submits the form, you'll receive an email with:
- Sender's name
- Sender's email (you can reply directly)
- Phone number (if provided)
- Subject
- Message content

## ✅ Done!
Your contact form is now fully functional!

