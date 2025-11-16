/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#228B22',
          dark: '#1a6b1a',
          light: '#32a832',
        },
        accent: {
          DEFAULT: '#90EE90',
          light: '#b4f5b4',
          dark: '#6ce66c',
        },
        background: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

