import { cpSync } from 'node:fs';

cpSync('functions', 'dist/functions', { recursive: true });
console.log('Copied functions/ to dist/functions/');
