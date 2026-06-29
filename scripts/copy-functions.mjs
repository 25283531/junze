import { cpSync, mkdirSync, existsSync, readdirSync, copyFileSync } from 'node:fs';

cpSync('functions', 'dist/functions', { recursive: true });
console.log('Copied functions/ to dist/functions/');

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
