// Linkuri interne. În modul „relative” (preview-ul din artifact) devin căi relative cu .html;
// în modul implicit rămân curate (/prezenta), servite de Vercel cu cleanUrls.
const relative = process.env.LINK_MODE === 'relative';

export function link(path: string, currentPath = '/'): string {
  if (!relative) return path;
  const [p, hash] = path.split('#');
  const depth = Math.max(0, currentPath.replace(/\/$/, '').split('/').filter(Boolean).length - 1);
  const up = depth > 0 ? '../'.repeat(depth) : './';
  let file: string;
  if (p === '/' || p === '') file = 'index.html';
  else file = p.replace(/^\//, '') + '.html';
  return up + file + (hash ? '#' + hash : '');
}

export function asset(path: string, currentPath = '/'): string {
  if (!relative) return path;
  const depth = Math.max(0, currentPath.replace(/\/$/, '').split('/').filter(Boolean).length - 1);
  const up = depth > 0 ? '../'.repeat(depth) : './';
  return up + path.replace(/^\//, '');
}
