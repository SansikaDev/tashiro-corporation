# Quick Start Guide

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

Build the production bundle:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
tashiro-corporation/
├── public/              # Static assets
│   ├── robots.txt      # SEO robots file
│   └── sitemap.xml     # SEO sitemap
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   ├── AnimatedBackground.jsx
│   │   └── SEO.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── TashiroIT.jsx
│   │   ├── TeaServices.jsx
│   │   ├── ImportExport.jsx
│   │   └── Contact.jsx
│   ├── theme/          # Theme configuration
│   │   └── theme.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md
```

## Customization

### Changing Colors

Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: {
    DEFAULT: '#228B22',  // Change this
    // ...
  },
  accent: {
    DEFAULT: '#90EE90',  // Change this
    // ...
  },
}
```

### Updating Content

- **Home Page**: Edit `src/pages/Home.jsx`
- **About Page**: Edit `src/pages/About.jsx`
- **Expansion Pages**: Edit files in `src/pages/`
- **Contact Form**: Edit `src/pages/Contact.jsx` and integrate with Formspree (see DEPLOYMENT.md)

### Adding Images

Replace placeholder Unsplash URLs with your own images:
- Place images in `public/images/`
- Update image paths in page components
- Ensure images are optimized for web

### SEO Configuration

Update SEO settings in:
- `src/components/SEO.jsx` - Default meta tags
- Individual page components - Page-specific SEO
- `public/sitemap.xml` - Sitemap URLs
- `public/robots.txt` - Robots configuration

## Troubleshooting

### Three.js animations not loading
- Ensure all dependencies are installed: `npm install`
- Check browser console for errors
- Verify WebGL support in your browser

### Build errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (requires Node 16+)

### Routing issues
- For GitHub Pages, ensure `base` in `vite.config.js` matches your repo name
- For Vercel, routing should work automatically

## Next Steps

1. Customize content and images
2. Integrate contact form with Formspree or your backend
3. Update SEO meta tags with your actual information
4. Deploy to GitHub Pages or Vercel (see DEPLOYMENT.md)

