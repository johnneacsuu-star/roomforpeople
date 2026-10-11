// Pregătește dist-preview/ pentru artifact-ul claude.ai: căi relative peste tot, iar index.html devine fragment (artifact-ul îl înfășoară singur).
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
const root = 'dist-preview';
async function walk(d) { const out = []; for (const e of await readdir(d, { withFileTypes: true })) { const p = join(d, e.name); out.push(...(e.isDirectory() ? await walk(p) : [p])); } return out; }
const files = await walk(root);
for (const f of files) {
  const rel = relative(root, f); const depth = rel.split('/').length - 1; const up = depth ? '../'.repeat(depth) : './';
  if (f.endsWith('.html')) {
    let s = await readFile(f, 'utf8');
    s = s.replace(/(href|src)="\/(?!\/)/g, `$1="${up}`).replace(/content="\/(?!\/)/g, `content="${up}`);
    s = s.replace(/data-api="\/api\/contact"/g, 'data-api="./api/contact"');
    if (rel === 'index.html') {
      const head = s.match(/<head>([\s\S]*?)<\/head>/)[1];
      const body = s.match(/<body[^>]*>([\s\S]*)<\/body>/)[1];
      s = head.trim() + '\n' + body.trim() + '\n';
    }
    await writeFile(f, s);
  } else if (f.endsWith('.css')) {
    let s = await readFile(f, 'utf8'); s = s.replace(/url\(\/a\//g, 'url(./'); await writeFile(f, s);
  } else if (f.endsWith('.js')) {
    let s = await readFile(f, 'utf8'); s = s.replace(/"\/a\//g, '"./'); await writeFile(f, s);
  }
}
console.log('preview ready:', files.length, 'files');
