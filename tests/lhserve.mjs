// Server static cu gzip pentru Lighthouse (preferă fișierul .html față de folderul cu același nume)
import { createServer } from 'http'; import { readFile, stat } from 'fs/promises'; import { join, extname } from 'path'; import { gzipSync } from 'zlib';
const dist = process.argv[2] || 'dist'; const port = +(process.argv[3] || 4330);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.pdf': 'application/pdf', '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon', '.json': 'application/json' };
createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  const cands = [join(dist, p + '.html'), join(dist, p), join(dist, p, 'index.html')]; let f = null;
  for (const c of cands) { try { if ((await stat(c)).isFile()) { f = c; break; } } catch {} }
  if (!f) { res.statusCode = 404; res.end('nf'); return; }
  const d = await readFile(f); const ext = extname(f); res.setHeader('content-type', mime[ext] || 'application/octet-stream'); res.setHeader('cache-control', 'public, max-age=31536000');
  if (/^(\.html|\.css|\.js|\.svg|\.xml|\.txt|\.json)$/.test(ext) && /gzip/.test(req.headers['accept-encoding'] || '')) { res.setHeader('content-encoding', 'gzip'); res.end(gzipSync(d)); } else res.end(d);
}).listen(port, () => console.log('serving', dist, 'on', port));
