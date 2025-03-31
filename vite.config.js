import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/business': {
        target: 'http://83.219.243.82:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})