import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:4000'
    }
  },
  resolve: {
    alias: {
      '@reviewsense/types': '/packages/types/src',
      '@reviewsense/utils': '/packages/utils/src',
      '@reviewsense/ui': '/packages/ui/src'
    }
  }
});
