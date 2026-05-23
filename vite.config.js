import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Site is served from a custom domain (nabinpdev.com), so assets resolve from root.
// If reverting to the bare github.io/<repo>/ URL, change base back to '/nabinwebsite/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1500
  }
});
