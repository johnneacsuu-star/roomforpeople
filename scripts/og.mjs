// Cardurile de distribuire (1200 × 630): unul pentru site și câte unul pentru fiecare articol publicat, din aceeași matriță.
// Titlu cu marker, desenul casei în dreapta, sigla sus. Rulează: node scripts/og.mjs → public/og.png și public/og/jurnal-<slug>.png
import { chromium } from 'playwright';
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const art = (n) => readFileSync(`src/assets/art/${n}.svg`, 'utf8').replace(/<text class="hw"/g, '<text class="hw" font-family="Hanken"');
const lockup = readFileSync('src/assets/lockup-plum.svg', 'utf8').replace(/ width="\d+" height="\d+"/, '').replace(/<rect x="0\.000" y="-85\.212"[^>]*\/>/, '').replace('<svg ', '<svg style="width:230px;height:auto" ');
const fonts = (p) => 'file://' + resolve('node_modules/' + p);

function card({ label, title, drawing, foot, wide = false }) {
  return `<!doctype html><html lang="ro"><head><meta charset="utf-8"><style>
  @font-face { font-family: 'Bricolage'; src: url('${fonts('@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-ext-wght-normal.woff2')}') format('woff2-variations'); font-weight: 200 800; unicode-range: U+0100-024F; }
  @font-face { font-family: 'Bricolage'; src: url('${fonts('@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2')}') format('woff2-variations'); font-weight: 200 800; }
  @font-face { font-family: 'Hanken'; src: url('${fonts('@fontsource/hanken-grotesk/files/hanken-grotesk-latin-ext-500-normal.woff2')}') format('woff2'); font-weight: 500; unicode-range: U+0100-024F; }
  @font-face { font-family: 'Hanken'; src: url('${fonts('@fontsource/hanken-grotesk/files/hanken-grotesk-latin-500-normal.woff2')}') format('woff2'); font-weight: 500; }
  @font-face { font-family: 'Mono'; src: url('${fonts('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-ext-500-normal.woff2')}') format('woff2'); font-weight: 500; unicode-range: U+0100-024F; }
  @font-face { font-family: 'Mono'; src: url('${fonts('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2')}') format('woff2'); font-weight: 500; }
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body { background: #F2EEE8; color: #141216; font-family: Hanken, sans-serif; position: relative; }
  .grain { position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(53,34,79,.025) 0 1px, transparent 1px 3px); pointer-events: none; }
  .left { position: absolute; left: 64px; top: 56px; width: ${wide ? 1072 : 600}px; bottom: 56px; display: flex; flex-direction: column; }
  .label { font-family: Mono; font-size: 17px; letter-spacing: .08em; text-transform: uppercase; color: #5E5566; margin-top: 44px; }
  h1 { font-family: Bricolage; font-weight: 800; font-size: ${wide ? 60 : 56}px; line-height: 1.04; letter-spacing: -0.03em; margin-top: 14px; max-width: ${wide ? 1000 : 580}px; }
  .mk { position: relative; display: inline-block; white-space: nowrap; z-index: 0; }
  .mk::after { content: ""; position: absolute; left: -.06em; right: -.04em; bottom: -.02em; height: .5em; z-index: -1; background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20' preserveAspectRatio='none'><path d='M1 5 C 30 2, 70 7, 110 4 C 150 1, 185 5, 199 3 L 198 16 C 170 19, 130 14, 90 17 C 50 20, 15 16, 2 18 Z' fill='%23D6FF55'/></svg>") no-repeat center/100% 100%; transform: rotate(-.8deg); transform-origin: left center; }
  .foot { margin-top: auto; font-size: 20px; color: #5E5566; }
  .foot b { color: #35224F; font-weight: 500; }
  .right { position: absolute; right: 56px; top: 50%; transform: translateY(-50%); width: 470px; }
  .art { width: 100%; height: auto; overflow: visible; display: block; }
  .art .ink { fill: none; stroke: #35224F; stroke-width: 2.2px; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
  .art .mkr { fill: none; stroke: #D6FF55; stroke-linecap: round; stroke-linejoin: round; mix-blend-mode: multiply; vector-effect: non-scaling-stroke; }
  .art .hw { fill: #35224F; font-family: Hanken; }
  .art .leaf-fill { fill: #D6FF55; }
  .art .halo { paint-order: stroke; stroke: #F2EEE8; stroke-width: 6px; stroke-linejoin: round; }
  .edge { position: absolute; left: 0; right: 0; bottom: 0; height: 10px; background: #35224F; }
  </style></head><body><div class="grain"></div>
  <div class="left">${lockup}<p class="label">${label}</p><h1>${title}</h1><p class="foot">${foot}</p></div>
  ${drawing ? `<div class="right">${drawing}</div>` : ''}<div class="edge"></div></body></html>`;
}

// Articolele publicate: titlu, desen și pilon din antet.
function posts() {
  return readdirSync('src/content/jurnal').filter((f) => f.endsWith('.md')).map((f) => {
    const src = readFileSync(`src/content/jurnal/${f}`, 'utf8'); const fm = src.split('---')[1] || '';
    const g = (k) => { const m = fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]*)"?`, 'm')); return m ? m[1].trim() : ''; };
    return { slug: f.replace(/\.md$/, ''), title: g('title'), art: g('art') || 'plan', pillar: g('pillar'), draft: g('draft') !== 'false' };
  }).filter((p) => !p.draft);
}

const cards = [
  { out: 'public/og.png', html: card({ label: 'Pentru psihologi, psihoterapeuți, asistenți sociali și coachi', title: 'Lucrezi cu oameni. <span class="mk">Restul</span> ar trebui să meargă singur.', drawing: art('plan'), foot: '<b>roomforpeople.ro</b> · Oameni în față, sistem în spate' }) },
  ...posts().map((p) => ({ out: `public/og/jurnal-${p.slug}.png`, html: card({ label: `Jurnal · ${p.pillar}`, title: p.title, drawing: art(p.art), foot: '<b>roomforpeople.ro</b> · Jurnal' }) })),
];

mkdirSync('public/og', { recursive: true });
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const pg = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const c of cards) {
  writeFileSync('/tmp/og-card.html', c.html);
  await pg.goto('file:///tmp/og-card.html', { waitUntil: 'networkidle' });
  await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: c.out, type: 'png' });
  console.log('og:', c.out);
}
await b.close();
