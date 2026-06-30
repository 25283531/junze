import { cpSync, mkdirSync, existsSync, readdirSync, copyFileSync } from 'node:fs';

// Copy admin API functions to dist/functions/api/admin/
const adminFunctions = ['settings.js', 'services.js', 'faq.js', 'cases.js', 'login.js', 'upload.js', 'get-image.js'];
const publicApis = ['business.js', 'services.js', 'cases.js', 'faq.js'];

// Ensure dist/functions/api/admin exists
mkdirSync('dist/functions/api/admin', { recursive: true });
console.log('Created dist/functions/api/admin/');

// Copy admin functions
for (const fn of adminFunctions) {
  const src = `functions/api/admin/${fn}`;
  if (existsSync(src)) {
    copyFileSync(src, `dist/functions/api/admin/${fn}`);
    console.log(`Copied ${src} to dist/functions/api/admin/${fn}`);
  }
}

// Copy public API functions
mkdirSync('dist/functions/api', { recursive: true });
for (const fn of publicApis) {
  const src = `functions/api/${fn}`;
  if (existsSync(src)) {
    copyFileSync(src, `dist/functions/api/${fn}`);
    console.log(`Copied ${src} to dist/functions/api/${fn}`);
  }
}

// Copy CSS
if (!existsSync('dist/styles')) {
  mkdirSync('dist/styles', { recursive: true });
}

const astroDir = 'dist/_astro';
if (existsSync(astroDir)) {
  const files = readdirSync(astroDir);
  const cssFile = files.find(f => f.endsWith('.css'));
  if (cssFile) {
    copyFileSync(`${astroDir}/${cssFile}`, 'dist/styles/global.css');
    console.log(`Copied ${cssFile} to dist/styles/global.css`);
  }
}

console.log('Functions copy complete!');
