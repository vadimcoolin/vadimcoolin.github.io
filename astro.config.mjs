// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://vadimcoolin.github.io',
  base: '/portfolio',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@content': path.resolve(__dirname, 'src/content'),
      },
    },
  },

  integrations: [mdx()],
});
