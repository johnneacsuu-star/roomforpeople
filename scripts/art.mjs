// Generatorul desenelor casei: aceeași peniță pentru coperțile din Jurnal și pentru desenele de pagină.
// Primitive simple (linie, dreptunghi, cerc, arc, text, marker) trecute printr-un tremur mic de mână,
// scrise în același format ca desenele existente (.ink / .mkr / .hw, pathLength="1", --d pe fiecare element).
// Rulează: node scripts/art.mjs  → scrie src/assets/art/<nume>.svg

import { writeFileSync, mkdirSync } from 'node:fs';

function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

class Pen {
  constructor(seed, { amp = 0.9, step = 7 } = {}) { this.r = rng(seed); this.amp = amp; this.step = step; this.paths = []; this.texts = []; this.markers = []; this.t = 0; }
  // Catmull-Rom → cubic Bézier, cu puncte tremurate.
  smooth(pts) {
    if (pts.length < 2) return '';
    const P = (i) => pts[Math.max(0, Math.min(pts.length - 1, i))];
    let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return d;
  }
  wobble(pts, amp = this.amp) {
    // Eșantionează fiecare segment la pas fix și adaugă un tremur lent, perpendicular pe direcție.
    const out = []; let drift = 0;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
      const len = Math.hypot(x2 - x1, y2 - y1); const n = Math.max(1, Math.round(len / this.step));
      const nx = -(y2 - y1) / (len || 1), ny = (x2 - x1) / (len || 1);
      for (let k = (i === 0 ? 0 : 1); k <= n; k++) {
        const t = k / n; drift = drift * 0.6 + (this.r() - 0.5) * amp;
        const end = (i === 0 && k === 0) || (i === pts.length - 2 && k === n);
        const w = end ? 0 : drift;
        out.push([x1 + (x2 - x1) * t + nx * w, y1 + (y2 - y1) * t + ny * w]);
      }
    }
    return out;
  }
  delay(step = 0.05) { const d = this.t; this.t = +(this.t + step).toFixed(2); return d.toFixed(2); }
  poly(pts, { closed = false, amp, dt } = {}) { const p = closed ? [...pts, pts[0]] : pts; this.paths.push({ d: this.smooth(this.wobble(p, amp)), dt: this.delay(dt) }); return this; }
  line(x1, y1, x2, y2, o) { return this.poly([[x1, y1], [x2, y2]], o); }
  rect(x, y, w, h, o) { return this.poly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { closed: true, ...o }); }
  circle(cx, cy, r, { a0 = -90, a1 = 270, amp, dt } = {}) {
    const pts = []; const n = Math.max(12, Math.round((Math.abs(a1 - a0) / 360) * r * 1.2));
    for (let i = 0; i <= n; i++) { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
    const w = this.wobble(pts, amp ?? this.amp * 0.6);
    this.paths.push({ d: this.smooth(w), dt: this.delay(dt) }); return this;
  }
  arc(cx, cy, r, a0, a1, o) { return this.circle(cx, cy, r, { a0, a1, ...o }); }
  scribble(x, y, w, n = 3, gap = 9) { for (let i = 0; i < n; i++) { const len = w * (0.6 + this.r() * 0.4); this.poly([[x, y + i * gap], [x + len, y + i * gap + (this.r() - 0.5) * 2]], { amp: 2.2 }); } return this; }
  text(x, y, str, { size = 20, mono = false, anchor = 'start', rot = (this.r() - 0.5) * 2.4, weight = 500, dt } = {}) {
    this.texts.push({ x, y, str, size, mono, anchor, rot: rot.toFixed(1), weight, dt: this.delay(dt ?? 0.08) }); return this;
  }
  marker(pts, width = 10, { dt } = {}) { this.markers.push({ d: this.smooth(this.wobble(pts, 0.7)), width, dt: (dt ?? this.t).toFixed(2) }); return this; }
  svg({ w, h, cls, label, rot = -1.2 }) {
    const mks = this.markers.map((m) => `<path class="mkr" d="${m.d}" pathLength="1" style="--d:${m.dt}s;stroke-width:${m.width}px"/>`).join('');
    const inks = this.paths.map((p) => `<path class="ink" d="${p.d}" pathLength="1" style="--d:${p.dt}s"/>`).join('');
    const txs = this.texts.map((t) => `<text class="hw" x="${t.x}" y="${t.y}" font-size="${t.size}" font-weight="${t.weight}" text-anchor="${t.anchor}"${t.mono ? ' font-family="IBM Plex Mono"' : ''} transform="rotate(${t.rot} ${t.x} ${t.y})" style="--d:${t.dt}s">${t.str}</text>`).join('');
    return `<svg class="art ${cls}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}"><g transform="rotate(${rot} ${(w / 2).toFixed(1)} ${(h / 2).toFixed(1)})"><g class="mks">${mks}</g><g class="inks">${inks}</g><g class="txs">${txs}</g></g></svg>\n`;
  }
}

const W = 480, H = 270;
const covers = {};

// 1. noapte · Omul care îți scrie la 22:00: o veioză, telefonul cu un mesaj, masa. Markerul e lumina veiozei.
{
  const p = new Pen(11);
  p.marker([[70, 214], [250, 214]], 14, { dt: 0.9 });
  p.line(24, 216, 456, 218); // masa
  // veioza
  p.line(118, 214, 118, 120); p.circle(118, 214, 22, { a0: 180, a1: 360 });
  p.poly([[70, 120], [166, 120], [148, 74], [88, 74]], { closed: true });
  // telefonul, ușor înclinat, cu ecranul aprins
  p.poly([[262, 100], [340, 92], [352, 214], [274, 222]], { closed: true });
  p.poly([[272, 110], [332, 104], [342, 204], [282, 210]], { closed: true, amp: 0.5 });
  // bula mesajului
  p.poly([[284, 128], [330, 124], [332, 158], [300, 160], [292, 170], [290, 161], [286, 160]], { closed: true });
  p.scribble(292, 136, 30, 2, 8);
  p.text(380, 118, '22:40', { size: 26, mono: true });
  p.text(372, 150, 'cât costă', { size: 19 });
  p.text(372, 174, 'prima ședință?', { size: 19 });
  covers.noapte = p.svg({ w: W, h: H, cls: 'art-noapte', label: 'O veioză aprinsă, un telefon cu un mesaj nou pe masă, la 22:40.' });
}

// 2. prag · AI-ul la ușă, nu în cameră: tocul ușii cu pragul, înăuntru un scaun, afară un laptop cu AI pe el.
{
  const p = new Pen(23);
  p.marker([[196, 232], [312, 232]], 12, { dt: 1.1 }); // pragul
  p.line(20, 232, 460, 234); // podeaua
  p.poly([[200, 232], [200, 44], [308, 44], [308, 232]]); // tocul
  p.line(216, 232, 216, 60); p.line(292, 232, 292, 60); p.line(216, 60, 292, 60); // canatul
  // scaunul, înăuntru
  p.line(244, 118, 244, 232); p.line(244, 172, 286, 172); p.line(286, 172, 286, 232); p.line(244, 118, 262, 120);
  // laptopul, afară
  p.poly([[70, 232], [86, 176], [168, 176], [152, 232]], { closed: true });
  p.rect(82, 182, 76, 44, { amp: 0.6 });
  p.text(112, 212, 'AI', { size: 24, anchor: 'middle', weight: 600 });
  p.text(110, 120, 'la ușă', { size: 22, anchor: 'middle' });
  p.text(390, 120, 'nu în', { size: 22, anchor: 'middle' });
  p.text(390, 148, 'cameră', { size: 22, anchor: 'middle' });
  covers.prag = p.svg({ w: W, h: H, cls: 'art-prag', label: 'Un toc de ușă cu pragul marcat: afară un laptop cu AI, înăuntru un scaun gol.' });
}

// 3. semn · Invizibil pentru că ești neclar: un panou cu scris ilizibil, un om cu semn de întrebare, dedesubt rândul clar.
{
  const p = new Pen(37);
  p.line(20, 236, 460, 238); // strada
  p.line(150, 236, 150, 70); // stâlpul
  p.rect(70, 50, 180, 70); // panoul
  p.scribble(86, 70, 150, 3, 16);
  // omul
  p.circle(416, 104, 14); p.line(416, 118, 416, 176); p.line(416, 176, 398, 236); p.line(416, 176, 436, 236); p.line(416, 134, 388, 150); p.line(416, 134, 444, 118);
  p.text(386, 82, '?', { size: 40, weight: 600, anchor: 'middle' });
  p.marker([[166, 206], [352, 206]], 12, { dt: 1.2 });
  p.text(168, 212, 'cu cine · unde · cum începe', { size: 17 });
  covers.semn = p.svg({ w: W, h: H, cls: 'art-semn', label: 'Un panou cu un scris ilizibil, un om care se întreabă ce scrie, și dedesubt rândul clar: cu cine, unde, cum începe.' });
}

// 4. tura · A doua tură: un ceas la 20:00, cu markerul pe orele serii, și un teanc de hârtii cu un pix.
{
  const p = new Pen(41);
  p.circle(150, 136, 78);
  for (let i = 0; i < 12; i++) { const a = i * 30 * Math.PI / 180; p.line(150 + 70 * Math.sin(a), 136 - 70 * Math.cos(a), 150 + 76 * Math.sin(a), 136 - 76 * Math.cos(a), { amp: 0.3, dt: 0.02 }); }
  p.line(150, 136, 150, 86); p.line(150, 136, 110, 160); // 20:00
  p.marker(Array.from({ length: 10 }, (_, i) => { const a = (-120 + i * 10) * Math.PI / 180; return [150 + 92 * Math.sin(a), 136 - 92 * Math.cos(a)]; }), 11, { dt: 1.0 }); // 20 → 23
  // teancul
  p.rect(300, 92, 120, 150); p.rect(312, 80, 120, 150, { amp: 0.6 }); p.rect(324, 68, 120, 150, { amp: 0.6 });
  p.scribble(340, 92, 90, 4, 14);
  p.line(296, 258, 396, 250); p.line(396, 250, 404, 246); p.line(296, 258, 300, 262); // pixul
  p.text(150, 236, '20:00', { size: 24, mono: true, anchor: 'middle' });
  p.text(224, 60, 'a doua tură', { size: 21, anchor: 'middle' });
  covers.tura = p.svg({ w: W, h: H, cls: 'art-tura', label: 'Un ceas arată 20:00, cu orele serii marcate, lângă un teanc de hârtii și un pix.' });
}

// 5. caiet · AI-ul nu îți fură vocea: un caiet deschis, un pix, o bulă de vorbire cu „în vocea ta”.
{
  const p = new Pen(53);
  p.poly([[60, 92], [230, 80], [232, 230], [62, 240]], { closed: true }); p.poly([[232, 80], [402, 92], [400, 240], [232, 230]], { closed: true });
  p.line(232, 80, 232, 230, { amp: 0.4 });
  for (let i = 0; i < 5; i++) p.line(84, 118 + i * 22, 210, 112 + i * 22, { amp: 1.4, dt: 0.03 });
  p.scribble(256, 116, 110, 2, 22);
  p.line(300, 150, 360, 150, { amp: 1.4 }); p.line(256, 174, 360, 174, { amp: 1.4 });
  p.line(262, 224, 376, 160); p.line(376, 160, 382, 167); p.line(262, 224, 268, 230); // pixul
  // bula
  p.poly([[300, 20], [460, 20], [460, 66], [352, 66], [338, 82], [338, 66], [300, 66]], { closed: true });
  p.marker([[344, 56], [430, 56]], 10, { dt: 1.0 });
  p.text(380, 52, 'în vocea ta', { size: 22, anchor: 'middle' });
  covers.caiet = p.svg({ w: W, h: H, cls: 'art-caiet', label: 'Un caiet deschis, un pix și o bulă de vorbire cu cuvintele „în vocea ta”.' });
}

mkdirSync('src/assets/art', { recursive: true });
for (const [name, svg] of Object.entries(covers)) { writeFileSync(`src/assets/art/${name}.svg`, svg); console.log('art:', name, svg.length, 'bytes'); }
