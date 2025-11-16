# 🚀 Deploy to Vercel - Quick Steps

## Option 1: Deploy via Vercel Dashboard (Easiest)

### 1. Push to GitHub (if not already done)
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Deploy on Vercel
1. Visit [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository: `tashiro-corporation`
4. Vercel will auto-detect settings:
   - ✅ Framework: Vite
   - ✅ Build Command: `npm run build`
   - ✅ Output Directory: `dist`
5. Click **"Deploy"**

**Done!** Your site will be live in ~2 minutes at:
`https://tashiro-corporation.vercel.app`

---

## Option 2: Deploy via CLI

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Deploy
```bash
vercel
```

Follow prompts, then for production:
```bash
vercel --prod
```

---

## ✅ Configuration Files Created

- ✅ `vercel.json` - Routing configuration for React Router
- ✅ `vite.config.js` - Updated for Vercel (root path)
- ✅ All build settings configured

---

## 📝 After Deployment

1. **Update URLs** in:
   - `public/sitemap.xml` - Replace with your Vercel URL
   - `public/robots.txt` - Update sitemap URL

2. **Test your site**:
   - Check all pages load correctly
   - Test navigation
   - Verify animations work
   - Test on mobile

3. **Optional - Custom Domain**:
   - Go to Vercel Dashboard → Settings → Domains
   - Add your custom domain
   - Follow DNS setup instructions

---

## 🎉 That's it!

Your Tashiro Corporation website is now live on Vercel!

