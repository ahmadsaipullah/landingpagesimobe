import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Site URL for SEO - SIMOBE brand
  site: 'https://simobe.dalova.co.id',
  
  // Integrations
  integrations: [
    react(),
  ],
  
  // Output static files (SSG)
  output: 'static',
  
  // Build options
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  
  // Vite config for performance with Tailwind v4
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: true,
    },
  },
});
