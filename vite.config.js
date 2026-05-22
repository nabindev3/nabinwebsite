import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to the repo name so GitHub Pages serves assets from the right path.
// If a custom domain (CNAME) is added later, change this back to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/nabinwebsite/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1500
  }
});
