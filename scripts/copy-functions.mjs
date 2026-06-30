import { mkdirSync, existsSync, readdirSync, copyFileSync } from 'node:fs';

// Copy CSS from _astro to dist/styles for admin pages
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

console.log('Copy complete!');
