import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const astroDir = join(fileURLToPath(import.meta.url), '..', '..', 'dist', '_astro');
const files = readdirSync(astroDir);

for (const file of files) {
  if (file.endsWith('.css')) {
    const filePath = join(astroDir, file);
    let content = readFileSync(filePath, 'utf-8');
    if (content.includes('@tailwind utilities')) {
      content = content.replace(/@tailwind\s+utilities\s*;/g, '');
      writeFileSync(filePath, content, 'utf-8');
      console.log(`Cleaned: ${file}`);
    }
  }
}
