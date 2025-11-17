# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form submissions to **sansika.sansikx@gmail.com**.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email provider)
4. Follow the setup instructions:
   - For Gmail: Connect your Gmail account
   - Authorize EmailJS to send emails on your behalf
5. Note your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS Dashboard
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** Contact Form Inquiry

**Subject:** New Contact Form Inquiry: {{subject}}

**Content:**
```
You have received a new contact form inquiry from Tashiro Corporation website.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Tashiro Corporation contact form.
Reply to: {{reply_to}}
```

4. Set **To Email** to: `sansika.sansikx@gmail.com`
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{reply_to}}`
7. Click **Save**
8. Note your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy it

## Step 5: Add Environment Variables

### Option A: For Local Development

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Option B: For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `VITE_EMAILJS_SERVICE_ID` = your_service_id
   - `VITE_EMAILJS_TEMPLATE_ID` = your_template_id
   - `VITE_EMAILJS_PUBLIC_KEY` = your_public_key
4. Redeploy your site

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check `sansika.sansikx@gmail.com` for the email

## Troubleshooting

### Emails not sending?
- Check that all environment variables are set correctly
- Verify EmailJS service is connected
- Check EmailJS dashboard for error logs
- Make sure you haven't exceeded the free tier limit (200 emails/month)

### Template variables not working?
- Make sure variable names match exactly (case-sensitive)
- Use double curly braces: `{{variable_name}}`

### Need more emails?
- EmailJS free tier: 200 emails/month
- Paid plans start at $15/month for 1,000 emails

## Alternative: Formspree (Simpler Option)

If you prefer a simpler setup:

1. Go to [Formspree.io](https://formspree.io)
2. Sign up and create a form
3. Get your form endpoint (e.g., `https://formspree.io/f/xxxxx`)
4. Update `Contact.jsx` to use Formspree instead

Let me know if you'd like me to set up Formspree instead!

