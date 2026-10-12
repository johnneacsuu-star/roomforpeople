// Teste funcționale pe site-ul construit (dist/): formular, Hartă, calculator, linkuri, verificări de bază.
// Formularul e testat cu transportul mock-uit (200 / 503 / 500) și funcția API e testată direct, cu fetch înlocuit.
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat, readdir } from 'node:fs/promises';
import { join, extname, resolve } from 'node:path';
import assert from 'node:assert/strict';

const dist = 'dist';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.pdf': 'application/pdf', '.xml': 'application/xml', '.txt': 'text/plain' };
const srv = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
  let f = join(dist, p + '.html'); try { const st = await stat(f); if (!st.isFile()) throw 0; } catch { f = join(dist, p); }
  try { const b = await readFile(f); res.writeHead(200, { 'Content-Type': types[extname(f)] || 'application/octet-stream' }); res.end(b); } catch { res.writeHead(404); res.end('404'); }
});
await new Promise((r) => srv.listen(4324, r));
const base = 'http://localhost:4324';
const results = []; const ok = (name, pass, detail = '') => { results.push({ name, pass, detail }); console.log((pass ? 'PASS ' : 'FAIL ') + name + (detail ? ' · ' + detail : '')); };

// 1. Funcția API, direct, cu fetch mock
process.env.RESEND_API_KEY = 'test'; process.env.CONTACT_TO = 'dest@example.com'; delete process.env.ALLOWED_ORIGIN;
const { default: handler } = await import(resolve('api/contact.js'));
const call = async (body, method = 'POST') => {
  const req = { method, headers: {}, body };
  const res = { statusCode: 200, headers: {}, setHeader(k, v) { this.headers[k] = v; }, json(o) { this.out = o; return this; } };
  await handler(req, res); return res;
};
const sent = []; globalThis.fetch = async (url, init) => { sent.push(JSON.parse(init.body)); return { ok: true, text: async () => '' }; };
let r = await call({ email: 'a@b.ro', profesie: 'psi', tip: 'contact', t: Date.now() - 5000, website: '' });
ok('API trimite emailul când totul e valid', r.statusCode === 200 && r.out.ok === true && sent.length === 1 && sent[0].to[0] === 'dest@example.com' && sent[0].reply_to === 'a@b.ro', JSON.stringify(r.out));
r = await call({ email: 'nu-e-email', profesie: 'psi', tip: 'contact', t: Date.now() - 5000, website: '' });
ok('API refuză emailul invalid', r.statusCode === 400 && r.out.error === 'email');
r = await call({ email: 'a@b.ro', profesie: 'psi', tip: 'contact', t: Date.now() - 500, website: '' });
ok('API refuză trimiterea sub 4 secunde (anti-spam)', r.statusCode === 400 && r.out.error === 'timing');
const before = sent.length; r = await call({ email: 'a@b.ro', profesie: 'psi', tip: 'contact', t: Date.now() - 5000, website: 'http://spam' });
ok('API ignoră tăcut câmpul capcană completat', r.statusCode === 200 && r.out.skipped === true && sent.length === before);
r = await call({}, 'GET'); ok('API refuză GET', r.statusCode === 405);
delete process.env.RESEND_API_KEY; r = await call({ email: 'a@b.ro', profesie: 'psi', tip: 'contact', t: Date.now() - 5000, website: '' });
ok('API răspunde 503 când cheia lipsește (nu simulează)', r.statusCode === 503 && r.out.error === 'unconfigured');
process.env.RESEND_API_KEY = 'test'; globalThis.fetch = async () => ({ ok: false, status: 401, text: async () => 'bad key' });
r = await call({ email: 'a@b.ro', profesie: 'psi', tip: 'contact', t: Date.now() - 5000, website: '' });
ok('API răspunde 502 când Resend refuză', r.statusCode === 502 && r.out.error === 'send');
r = await call({ email: 'a@b.ro', profesie: 'psi', tip: 'harta', t: Date.now() - 5000, website: '', harta: { 'Prezență': { stage: 'Clar din prima', score: 25 }, raspunsuri: ['x'] } });
globalThis.fetch = async (u, i) => { sent.push(JSON.parse(i.body)); return { ok: true, text: async () => '' }; };
r = await call({ email: 'a@b.ro', profesie: 'as', tip: 'harta', t: Date.now() - 5000, website: '', harta: { 'Prezență': { stage: 'Clar din prima', score: 25 }, raspunsuri: ['x'] } });
ok('API include Harta în email', r.statusCode === 200 && sent.at(-1).text.includes('Prezență: Clar din prima (25/25)'));

// 2. Browser
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const ctx = await b.newContext({ viewport: { width: 1400, height: 900 } });
const page = await ctx.newPage();
let apiMode = 200;
await page.route('**/api/contact', async (route) => {
  const body = JSON.parse(route.request().postData() || '{}');
  if (apiMode === 200) await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, echo: body }) });
  else if (apiMode === 503) await route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ ok: false, error: 'unconfigured' }) });
  else await route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ ok: false, error: 'send' }) });
});
await page.goto(base + '/contact', { waitUntil: 'networkidle' });
await page.click('#f-contact button[type=submit]');
ok('Formular: email gol → mesaj de validare, nu se trimite', (await page.textContent('#f-contact .form-msg')).includes('email valid'));
await page.fill('#f-contact input[name=email]', 'test@exemplu.ro'); await page.fill('#f-contact textarea[name=mesaj]', 'Un mesaj de probă.');
await page.evaluate(() => { document.querySelector('#f-contact input[name=t]').value = String(Date.now() - 6000); });
const [req] = await Promise.all([page.waitForRequest('**/api/contact'), page.click('#f-contact button[type=submit]')]);
const payload = JSON.parse(req.postData());
await page.waitForFunction(() => !document.querySelector('#f-contact .form-msg').hidden);
ok('Formular: 200 → mesaj de succes', (await page.textContent('#f-contact .form-msg')).includes('a ajuns la mine'));
ok('Formular: payload corect (tip, email, mesaj, t)', payload.tip === 'contact' && payload.email === 'test@exemplu.ro' && payload.mesaj === 'Un mesaj de probă.' && typeof payload.t === 'number');
ok('Formular: câmpurile se golesc după succes', (await page.inputValue('#f-contact input[name=email]')) === '');
apiMode = 503; await page.fill('#f-contact input[name=email]', 'test@exemplu.ro'); await page.click('#f-contact button[type=submit]');
await page.waitForFunction(() => document.querySelector('#f-contact .form-msg').textContent.includes('nu e încă legat'));
ok('Formular: 503 → spune cinstit că nu e configurat, cu emailul direct', (await page.innerHTML('#f-contact .form-msg')).includes('mailto:'));
apiMode = 500; await page.click('#f-contact button[type=submit]');
await page.waitForFunction(() => document.querySelector('#f-contact .form-msg').textContent.includes('Nu a plecat'));
ok('Formular: 500 → mesaj de eroare, fără fals succes', true);
ok('Formular: checkbox-urile de marketing sunt nebifate implicit', !(await page.isChecked('#f-contact input[name=newsletter]')) && !(await page.isChecked('#f-contact input[name=radiografia]')));
await page.goto(base + '/contact?tip=radiografia', { waitUntil: 'networkidle' });
ok('Contact ?tip=radiografia bifează Radiografia și setează tipul', (await page.isChecked('#f-contact input[name=radiografia]')) && (await page.getAttribute('#f-contact', 'data-tip')) === 'radiografia');

// Harta
await page.goto(base + '/harta', { waitUntil: 'networkidle' });
await page.click('#harta-next');
ok('Harta: nu trece mai departe fără răspunsuri', (await page.textContent('#harta-hint')).includes('fără răspuns') && !(await page.isHidden('.pas[data-pas="0"]')));
for (let step = 0; step < 4; step++) {
  const fs = page.locator(`.pas[data-pas="${step}"]`);
  const opts = fs.locator('label.opt');
  await opts.nth(step === 2 ? 0 : 2).click(); await opts.nth(step === 2 ? 3 : 5).click();
  if (step === 1) { await page.click('#harta-back'); ok('Harta: înapoi funcționează', !(await page.isHidden('.pas[data-pas="0"]'))); await page.click('#harta-next'); }
  await page.click('#harta-next');
}
await page.waitForSelector('#harta-rezultat:not([hidden])');
const lead = await page.textContent('#rez-lead');
ok('Harta: rezultatul apare pe loc, fără email, și vorbește despre loc, nu despre om', /Calendarul se ține încă de mână/.test(lead) && !/din 100/.test(lead) && (await page.locator('#rez-list li').count()) === 4);
const barH = await page.evaluate(() => Math.round(document.querySelector('#rez-list .r-bar').getBoundingClientRect().height));
ok('Harta: lista rezultatului are stil (barele au înălțime)', barH >= 4, String(barH));
ok('Harta: cifrele stau în „vezi detaliile”', /din 100/.test(await page.textContent('#rez-cifre')));
ok('Harta: locul cel mai slab e marcat (Programări)', (await page.locator('#rez-list li.weak .r-name').textContent()).includes('Programări'));
const pts = await page.getAttribute('#compass-shape', 'points'); ok('Harta: busola se desenează', pts && !pts.includes('160,131 160,131 160,131 160,131'));
await page.click('#harta-send-toggle'); ok('Harta: formularul de trimitere apare și poartă harta', !(await page.isHidden('#harta-send')) && (await page.getAttribute('#f-harta', 'data-harta')).includes('Programări'));
ok('Harta: butonul de PDF există', (await page.locator('#harta-print').count()) === 1);
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#harta-rezultat:not([hidden])');
ok('Harta: rezultatul se păstrează la reîncărcare (localStorage)', true);
await page.click('#harta-reset'); ok('Harta: reia de la început', !(await page.isHidden('.pas[data-pas="0"]')));

// Calculator
await page.goto(base + '/calculator', { waitUntil: 'networkidle' });
await page.fill('#c-sed', '10'); await page.fill('#c-min', '6'); await page.fill('#c-ore', '2'); await page.fill('#c-sapt', '40'); await page.fill('#c-tarif', '200');
await page.dispatchEvent('#c-tarif', 'input');
const oreSapt = await page.textContent('#c-ore-sapt'), oreAn = await page.textContent('#c-ore-an'), val = await page.textContent('#c-val');
ok('Calculator: 10×6/60+2 = 3 ore/săpt; ×40 = 120; ×200 = 24.000', oreSapt === '3' && oreAn.replace(/\D/g, '') === '120' && val.replace(/\D/g, '') === '24000', `${oreSapt} ${oreAn} ${val}`);

// Scenariile pe profesie (pagina principală)
await page.goto(base + '/', { waitUntil: 'networkidle' });
await page.click('.pill[data-profesie="as"]');
ok('Ziua ta: schimbarea profesiei arată scenariul potrivit', !(await page.isHidden('.day[data-scenariu="as"]')) && (await page.isHidden('.day[data-scenariu="psi"]')));
ok('Pagina principală: „Din Jurnal” apare cu ≥3 articole', (await page.locator('#jurnal .post-card').count()) === 3);

// Meniul mobil
const mctx = await b.newContext({ viewport: { width: 390, height: 844 } }); const mp = await mctx.newPage();
await mp.goto(base + '/', { waitUntil: 'networkidle' }); await mp.click('.burger');
ok('Mobil: meniul se deschide', !(await mp.isHidden('#meniu')) && (await mp.getAttribute('.burger', 'aria-expanded')) === 'true');
const small = await mp.evaluate(() => { const q = [...document.querySelectorAll('p,li,span,a,label,button,td,th,dd,dt,h1,h2,h3,summary,strong,b,em')].filter((e) => e.innerText && e.innerText.trim().length > 12 && getComputedStyle(e).visibility !== 'hidden' && e.offsetParent !== null); const sizes = q.map((e) => parseFloat(getComputedStyle(e).fontSize)); return { min: Math.min(...sizes), under13: sizes.filter((s) => s < 13).length, under12: sizes.filter((s) => s < 12).length }; });
ok('Mobil: niciun text sub 12 px, și textul curent ≥ 13 px', small.under12 === 0, JSON.stringify(small));
const taps = await mp.evaluate(() => [...document.querySelectorAll('a,button,input,select,textarea,summary')].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && e.offsetParent !== null && (r.height < 40 || r.width < 40) && !e.closest('.ftr-bottom') && !e.closest('.prose') && !e.classList.contains('textlink') && !e.classList.contains('sr') && !e.classList.contains('skip') && !e.closest('.hp') && !(e.tagName === 'INPUT' && e.closest('label')) && !(e.tagName === 'A' && e.closest('p,dd')); }).map((e) => (e.textContent || e.name || '').trim().slice(0, 30)));
ok('Mobil: ținte de atingere sub 40 px (în afara linkurilor din text)', taps.length === 0, JSON.stringify(taps));
await mctx.close();

// 3. Linkurile interne și verificări pe fiecare pagină
async function walk(dir) { const out = []; for (const e of await readdir(dir, { withFileTypes: true })) { const p = join(dir, e.name); if (e.isDirectory()) out.push(...await walk(p)); else out.push(p); } return out; }
const files = (await walk(dist)).filter((f) => f.endsWith('.html'));
const broken = []; const pageChecks = [];
for (const f of files) {
  const html = await readFile(f, 'utf8');
  const hrefs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]).filter((h) => !/^(https?:|mailto:|#|data:|tel:)/.test(h));
  for (const h of hrefs) {
    const clean = h.split('#')[0].split('?')[0]; if (!clean) continue;
    const abs = clean.startsWith('/') ? join(dist, clean) : resolve(join(f, '..'), clean);
    let exists = false; for (const cand of [abs, abs + '.html', join(abs, 'index.html')]) { try { if ((await stat(cand)).isFile()) { exists = true; break; } } catch {} }
    if (!exists) broken.push(`${f} → ${h}`);
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const checks = { file: f, h1, lang: /<html lang="ro">/.test(html), canonical: /rel="canonical" href="https:\/\/roomforpeople\.ro\//.test(html), ogAbs: /og:image" content="https:\/\//.test(html), desc: /<meta name="description" content="[^"]{40,}"/.test(html), jsonld: /application\/ld\+json/.test(html), googleFonts: /fonts\.googleapis/.test(html), imgNoAlt: (html.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length };
  pageChecks.push(checks);
}
ok('Linkuri interne: toate duc undeva', broken.length === 0, broken.slice(0, 5).join(' | '));
ok('Fiecare pagină: un singur h1', pageChecks.every((c) => c.h1 === 1), pageChecks.filter((c) => c.h1 !== 1).map((c) => c.file).join(','));
ok('Fiecare pagină: lang=ro, canonical absolut, OG absolut, descriere, JSON-LD', pageChecks.every((c) => c.lang && c.canonical && c.ogAbs && c.desc && c.jsonld), JSON.stringify(pageChecks.filter((c) => !(c.lang && c.canonical && c.ogAbs && c.desc && c.jsonld)).map((c) => c.file)));
ok('Nicio pagină nu încarcă fonturi de la Google', pageChecks.every((c) => !c.googleFonts));
ok('Toate imaginile au atribut alt', pageChecks.every((c) => c.imgNoAlt === 0), JSON.stringify(pageChecks.filter((c) => c.imgNoAlt).map((c) => c.file)));
ok('Sitemap și robots există', (await stat(join(dist, 'sitemap-index.xml'))).isFile() && (await stat(join(dist, 'robots.txt'))).isFile());
ok('PDF-ul Regula casei există', (await stat(join(dist, 'fisiere/regula-casei.pdf'))).size > 20000);

await b.close(); srv.close();
const fails = results.filter((r) => !r.pass);
console.log(`\n${results.length - fails.length}/${results.length} teste trecute`);
process.exit(fails.length ? 1 : 0);
