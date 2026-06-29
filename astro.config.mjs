import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://junze-anju.pages.dev',
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});