# Tashiro Corporation - Business Expansion Portfolio

A modern React portfolio website for Tashiro Corporation, showcasing business expansion opportunities into IT services, Tea Services, and Import/Export operations.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🎭 Three.js 3D animations and interactive elements
- 🚀 SEO-optimized with React Helmet
- ♿ Accessibility features (ARIA labels, keyboard navigation)
- 📱 Fully responsive for mobile and desktop
- ⚡ Performance optimized with lazy loading

## Tech Stack

- React 18
- React Router DOM
- Three.js with React Three Fiber
- Tailwind CSS
- Vite
- React Helmet Async

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### GitHub Pages

1. Update `homepage` in `package.json` to your GitHub Pages URL
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
4. Run: `npm run deploy`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or connect your GitHub repository directly on [Vercel](https://vercel.com).

## Project Structure

```
tashiro-corporation/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   ├── AnimatedBackground.jsx
│   │   └── SEO.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── TashiroIT.jsx
│   │   ├── TeaServices.jsx
│   │   ├── ImportExport.jsx
│   │   └── Contact.jsx
│   ├── theme/
│   │   └── theme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme. The default theme uses:
- Primary Green: `#228B22`
- Accent Green: `#90EE90`
- Background: `#FFFFFF`

### Content

Update content in individual page components located in `src/pages/`.

## License

© 2024 Tashiro Corporation. All rights reserved.

