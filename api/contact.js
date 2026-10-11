// Funcție Vercel (Node) pentru formularele de pe site. Nu simulează nimic:
// fără RESEND_API_KEY și CONTACT_TO răspunde 503 și pagina afișează o eroare cinstită, cu emailul direct.
// Nu stochează nimic. Trimite un singur email către Ionuț, cu reply-to pe adresa vizitatorului.

const MAX = { nume: 120, email: 200, mesaj: 4000, subiect: 60 };
const PROFESII = new Set(['psi', 'as', 'co', 'alta', '']);
const TIPURI = new Set(['contact', 'primul-pas', 'radiografia', 'harta', 'oglinda', 'prezenta', 'sistem', 'voce']);

function clean(v, max) {
  if (typeof v !== 'string') return '';
  return v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function readBody(req) {
  return new Promise((resolve) => {
    if (req.body && typeof req.body === 'object') return resolve(req.body);
    if (typeof req.body === 'string') { try { return resolve(JSON.parse(req.body)); } catch { return resolve({}); } }
    let data = '';
    req.on('data', (c) => { data += c; if (data.length > 20000) req.destroy(); });
    req.on('end', () => { try { resolve(JSON.parse(data || '{}')); } catch { resolve({}); } });
    req.on('error', () => resolve({}));
  });
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.statusCode = 405; return res.json({ ok: false, error: 'method' }); }

  const allowed = process.env.ALLOWED_ORIGIN;
  const origin = req.headers.origin || '';
  if (allowed && origin && !allowed.split(',').map((s) => s.trim()).includes(origin)) {
    res.statusCode = 403; return res.json({ ok: false, error: 'origin' });
  }

  const b = await readBody(req);

  // Anti-spam fără cookie-uri: câmp capcană gol și cel puțin 4 secunde de la afișarea formularului.
  if (clean(b.website, 50)) { res.statusCode = 200; return res.json({ ok: true, skipped: true }); }
  const t = Number(b.t || 0);
  if (!t || Date.now() - t < 4000 || Date.now() - t > 6 * 60 * 60 * 1000) {
    res.statusCode = 400; return res.json({ ok: false, error: 'timing' });
  }

  const email = clean(b.email, MAX.email);
  const nume = clean(b.nume, MAX.nume);
  const mesaj = clean(b.mesaj, MAX.mesaj);
  const profesie = clean(b.profesie, 10);
  const tip = clean(b.tip, 20) || 'contact';
  const radiografia = b.radiografia === true;
  const newsletter = b.newsletter === true;
  const harta = b.harta && typeof b.harta === 'object' ? b.harta : null;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { res.statusCode = 400; return res.json({ ok: false, error: 'email' }); }
  if (!PROFESII.has(profesie)) { res.statusCode = 400; return res.json({ ok: false, error: 'profesie' }); }
  if (!TIPURI.has(tip)) { res.statusCode = 400; return res.json({ ok: false, error: 'tip' }); }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || 'Room for People <onboarding@resend.dev>';
  if (!key || !to) { res.statusCode = 503; return res.json({ ok: false, error: 'unconfigured' }); }

  const titlu = {
    'contact': 'Mesaj de pe site',
    'primul-pas': 'Primul pas',
    'radiografia': 'Cerere de Radiografie',
    'harta': 'Harta cabinetului, trimisă de un vizitator',
    'oglinda': 'Cerere pentru Oglinda AI',
    'prezenta': 'Întrebare despre Prezență',
    'sistem': 'Întrebare despre Sistem',
    'voce': 'Întrebare despre Voce',
  }[tip];
  const prof = { psi: 'psiholog / psihoterapeut', as: 'asistent social independent', co: 'coach', alta: 'altă profesie', '': 'neprecizat' }[profesie];

  const lines = [
    `Tip: ${titlu}`,
    `Nume: ${nume || '(nespecificat)'}`,
    `Email: ${email}`,
    `Profesie: ${prof}`,
    radiografia ? 'Vrea și Radiografia (690 lei): DA. Bifarea nu e o achiziție; urmează discuția.' : '',
    newsletter ? 'Acceptă emailul la două săptămâni: DA (consimțământ separat, nebifat implicit).' : '',
    mesaj ? `\nMesaj:\n${mesaj}` : '',
  ].filter(Boolean);

  if (harta) {
    lines.push('\nHarta cabinetului:');
    for (const d of ['Prezență', 'Primul contact', 'Administrare', 'Pregătire pentru AI']) {
      if (harta[d]) lines.push(`  ${d}: ${clean(String(harta[d].stage), 60)} (${clean(String(harta[d].score), 10)}/25)`);
    }
    if (Array.isArray(harta.raspunsuri)) {
      lines.push('  Răspunsuri:');
      harta.raspunsuri.slice(0, 8).forEach((r, i) => lines.push(`  ${i + 1}. ${clean(String(r), 160)}`));
    }
  }

  const text = lines.join('\n');
  const html = `<pre style="font:14px/1.5 Menlo,monospace;white-space:pre-wrap">${esc(text)}</pre>`;

  try {
    const r = await fetch(process.env.RESEND_API_URL || 'https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `[roomforpeople.ro] ${titlu} · ${prof}`, text, html }),
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('resend', r.status, detail.slice(0, 300));
      res.statusCode = 502; return res.json({ ok: false, error: 'send' });
    }
    res.statusCode = 200; return res.json({ ok: true });
  } catch (e) {
    console.error('resend-exception', e && e.message);
    res.statusCode = 502; return res.json({ ok: false, error: 'send' });
  }
}
