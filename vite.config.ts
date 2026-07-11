import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo name as the GitHub Pages base path.
  base: '/vitality-wellness-claremont-ct/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        disclaimer: resolve(__dirname, 'disclaimer.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
})
