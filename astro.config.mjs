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
    plugins: [
      {
        name: 'remove-tailwind-utilities-directive',
        enforce: 'post',
        transform(code, id) {
          if (id.endsWith('.css') && code.includes('@tailwind utilities')) {
            return { code: code.replace(/@tailwind\s+utilities\s*;/g, ''), map: null };
          }
        },
      },
    ],
  },
});
