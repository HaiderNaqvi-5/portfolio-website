import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [mdx(), react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  output: 'static',
  site: 'https://portfolio-website.pages.dev',
});
