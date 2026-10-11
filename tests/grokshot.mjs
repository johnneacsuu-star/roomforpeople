import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const [name, w, h] of [['desk', 1400, 900], ['mob', 390, 844]]) {
  for (const f of ['acasa', 'jurnal']) {
    const pg = await b.newPage({ viewport: { width: w, height: h } });
    await pg.goto('file:///tmp/claude-0/-home-claude/55a65443-f7ad-5ba7-99dd-4ea477463456/scratchpad/grok/' + f + '.html', { waitUntil: 'load' });
    await pg.evaluate(async () => { const H = document.documentElement.scrollHeight; for (let y = 0; y < H; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); });
    await pg.waitForTimeout(3500);
    const H = await pg.evaluate(() => document.documentElement.scrollHeight);
    await pg.screenshot({ path: `../grok/${name}_${f}.png`, fullPage: true });
    console.log(name, f, H);
    await pg.close();
  }
}
await b.close();
