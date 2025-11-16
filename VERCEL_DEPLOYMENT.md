# Deploy to Vercel - Quick Guide

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub
1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/tashiro-corporation.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**

That's it! Your site will be live in ~2 minutes.

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
From your project directory:
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No**
- Project name? (Press Enter for default: `tashiro-corporation`)
- Directory? (Press Enter for `./`)
- Override settings? **No**

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## Post-Deployment

### Update URLs
After deployment, update these files with your Vercel URL:

1. **public/sitemap.xml** - Replace `yourusername.github.io` with your Vercel URL
2. **public/robots.txt** - Update sitemap URL
3. **src/components/SEO.jsx** - Update default URL if needed

### Environment Variables (Optional)
If you need environment variables (e.g., for Formspree):

1. Go to your project on Vercel Dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add variables (e.g., `VITE_FORMSPREE_ID`)
4. Redeploy

### Custom Domain (Optional)
1. Go to **Settings** > **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL

---

## Troubleshooting

### Routes not working?
- Make sure `vercel.json` is in the root directory
- The rewrites configuration handles React Router client-side routing

### Build fails?
- Check Node.js version (Vercel uses Node 18 by default)
- Verify all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### 404 errors on refresh?
- The `vercel.json` rewrites should handle this
- If issues persist, check that all routes are properly configured

---

## Your Site URL
After deployment, your site will be available at:
`https://tashiro-corporation.vercel.app`

Or with a custom domain if configured.

