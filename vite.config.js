import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2015',
    outDir: 'dist',
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://backend:3000'
    }
  }
});