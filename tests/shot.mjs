// Capturi de ecran pe toate paginile din dist, la 1400 și 390 px. Folosire: node tests/shot.mjs [dist] [outdir] [page1,page2]
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
const dist = process.argv[2] || 'dist', out = process.argv[3] || 'tests/shots', only = (process.argv[4] || '').split(',').filter(Boolean);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.pdf': 'application/pdf', '.xml': 'application/xml', '.txt': 'text/plain' };
const srv = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  let f = join(dist, p + '.html');
  try { const st = await stat(f); if (!st.isFile()) throw 0; } catch { f = join(dist, p); }
  try { const b = await readFile(f); res.writeHead(200, { 'Content-Type': types[extname(f)] || 'application/octet-stream' }); res.end(b); }
  catch { res.writeHead(404); res.end('404'); }
});
await new Promise((r) => srv.listen(4321, r));
await mkdir(out, { recursive: true });
const pages = only.length ? only : ['/', '/prezenta', '/sistem', '/voce', '/radiografia', '/cine', '/harta', '/calculator', '/resurse', '/oglinda', '/confidentialitate', '/contact', '/jurnal', '/404'];
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const summary = [];
for (const [name, w, h] of [['desk', 1400, 900], ['mob', 390, 844]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  for (const p of pages) {
    const pg = await ctx.newPage(); const errs = [];
    pg.on('pageerror', (e) => errs.push(String(e))); pg.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    const r = await pg.goto('http://localhost:4321' + p, { waitUntil: 'networkidle' });
    const slug = p === '/' ? 'index' : p.replace(/\//g, '_').replace(/^_/, '');
    await pg.evaluate(async () => { const h = document.documentElement.scrollHeight; for (let y = 0; y < h; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } window.scrollTo(0, 0); });
    await pg.evaluate(async () => { const imgs = [...document.querySelectorAll('img')]; imgs.forEach((i) => { i.loading = 'eager'; }); await Promise.all(imgs.map((i) => i.decode().catch(() => {}))); document.querySelectorAll('.art').forEach((d) => d.classList.add('on')); });
    await pg.waitForTimeout(2000);
    const hgt = await pg.evaluate(() => document.documentElement.scrollHeight);
    await pg.screenshot({ path: `${out}/${name}_${slug}.png`, fullPage: true });
    summary.push({ p, name, status: r.status(), height: hgt, errs });
    await pg.close();
  }
  await ctx.close();
}
await b.close(); srv.close();
console.log(JSON.stringify(summary, null, 0));
