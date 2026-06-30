import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://junze-anju.pages.dev',
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      configPath: 'wrangler.toml',
    },
  }),
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
