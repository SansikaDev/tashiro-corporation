# Deployment Guide

This guide covers deploying the Tashiro Corporation website to GitHub Pages or Vercel.

## GitHub Pages Deployment

### Option 1: Using gh-pages package

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/tashiro-corporation/', // Replace with your repo name
  // ... rest of config
})
```

4. Update `public/sitemap.xml` and `public/robots.txt` with your actual domain.

5. Deploy:
```bash
npm run deploy
```

### Option 2: Using GitHub Actions

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Enable GitHub Pages in your repository settings (Settings > Pages > Source: GitHub Actions).

## Vercel Deployment

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts. For production:
```bash
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Vite and configure the build settings
4. Click Deploy

### Vercel Configuration

Create `vercel.json` (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## Environment Variables

If you need environment variables (e.g., for Formspree):

1. Create `.env`:
```
VITE_FORMSPREE_ID=your_form_id_here
```

2. Update contact form to use:
```javascript
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
```

## Post-Deployment Checklist

- [ ] Update `homepage` in `package.json` with your actual URL
- [ ] Update `sitemap.xml` with your actual domain
- [ ] Update `robots.txt` with your actual domain
- [ ] Test all pages and links
- [ ] Verify SEO meta tags
- [ ] Test contact form (integrate with Formspree or your backend)
- [ ] Test responsive design on mobile devices
- [ ] Verify Three.js animations load correctly
- [ ] Check accessibility with screen readers

## Formspree Integration

To integrate the contact form with Formspree:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `src/pages/Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    setSubmitStatus('success')
    // Reset form
  } else {
    setSubmitStatus('error')
  }
  
  setIsSubmitting(false)
}
```

## Custom Domain (Optional)

### GitHub Pages
1. Add `CNAME` file in `public/` with your domain
2. Configure DNS records as per GitHub Pages instructions

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS as per Vercel instructions

