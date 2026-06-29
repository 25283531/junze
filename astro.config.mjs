import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://junze-anju.pages.dev',
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },
});
