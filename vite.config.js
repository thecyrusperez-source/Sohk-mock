import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Build assets under /Sohk-mock/ so GitHub Pages (project site) loads them.
// Override with VITE_BASE=/ for root-domain hosts like Vercel/Netlify.
const base = process.env.VITE_BASE ?? '/Sohk-mock/';

export default defineConfig({
  base,
  plugins: [react()],
  server: { host: true, port: 5173 },
});
