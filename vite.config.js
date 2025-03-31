import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/business': {
        target: 'http://83.219.243.82:8080', // 👉 теперь всё через gateway
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/business/, '/business'),
      },
      '/client': {
        target: 'http://83.219.243.82:8080', // 👉 сюда тоже
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/client/, '/client'),
      },
    },
  },
});
