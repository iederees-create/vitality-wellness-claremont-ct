/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#fcf8f0',
          500: '#e5d9c5',
          900: '#4a4235',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e5ede5',
          500: '#8ba78b',
          900: '#2c3a2c',
        },
        gold: {
          500: '#d4af37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
