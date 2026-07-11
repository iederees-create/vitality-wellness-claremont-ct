/** @type {import('tailwindcss').Config} */

// Standard Tailwind pattern for CSS-variable-backed colors that still
// support opacity modifiers (e.g. `text-sage-900/70`). The CSS variables
// themselves must hold space-separated "R G B" channel values (see
// src/index.css / src/context/ThemeContext.tsx) rather than hex strings.
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

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
        // These reference CSS custom properties swapped per-theme via the
        // [data-theme] attribute (see src/context/ThemeContext.tsx) so the
        // whole site re-colors when a buyer changes `activeTheme` in
        // siteConfig.ts.
        sage: {
          50: withOpacity('--color-primary-50'),
          100: withOpacity('--color-primary-100'),
          500: withOpacity('--color-primary-500'),
          900: withOpacity('--color-primary-900'),
        },
        gold: {
          500: withOpacity('--color-accent-500'),
          600: withOpacity('--color-accent-600'),
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
