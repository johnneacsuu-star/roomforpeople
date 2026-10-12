# Room for People · instrucțiuni pentru Claude

Acest fișier se încarcă automat în orice sesiune Claude Code deschisă pe acest depozit. E memoria de lucru a proiectului. Chat-ul nu e memorie: orice decizie, constatare, idee sau întrebare deschisă intră în `docs/`, în aceeași sesiune în care apare.

## Ce este proiectul

Room for People (roomforpeople.ro): servicii digitale și AI pentru psihologi, psihoterapeuți, asistenți sociali independenți și coachi din România. Poziționare: „AI la ușă, nu în cameră”. Marca: „Oameni în față · sistem în spate”.

Echipa: Ionuț Neacșu (practica, relația, livrarea; asistent social de 23 de ani, absolvent de psihologie, niciodată „psiholog”) și Andrei N. (partea tehnică și AI; creatorul blackstonerepair.co.uk). Despre Andrei se scrie doar atât. „O echipă mică, dedicată cu totul.”

Site-ul: Astro static, cod în acest depozit, publicat automat pe Vercel la fiecare push pe `main`. Previzualizare publică: https://roomforpeople.vercel.app (noindex automat pe orice host în afara roomforpeople.ro). Domeniul real nu e încă legat.

## Regulile casei, valabile și pentru Claude

1. Nicio informație despre vreun client al vreunui cabinet nu intră în vreun instrument AI. Nici la noi, nici la ei. Nici „anonimizată”.
2. Nu inventăm: testimoniale, studii de caz, membri de echipă, fotografii prezentate ca reale, statistici, garanții, afirmații de conformitate. Ce nu e verificat se marchează „DE CONFIRMAT” în cod și în `docs/de-confirmat.md`.
3. Nu simulăm trimiterea. Formularul trimite prin `api/contact.js` (Resend) sau spune cinstit că nu e configurat (503).
4. Nu modificăm DNS, nu activăm servicii plătite, nu publicăm documente juridice neconfirmate (confidențialitate, consimțământ) fără acordul lui Ionuț. Crearea unei chei Resend sau a unui proiect nou pe un serviciu extern cere acordul lui.
5. Adresa personală de email a lui Ionuț nu apare pe site. Adresa publică (`SITE.email`) e DE CONFIRMAT.
6. Păstrăm o versiune de siguranță înainte de schimbări mari (git e suficient; `../rfp-site/index.v16.bak.html` e vechiul site).
7. Repair Lab și Family Repair Lab nu apar pe acest site.
8. Nu oferim niciodată plată sau reducere pentru testimoniale.
9. Fotografie doar pentru oameni și locuri reale. Fără fotografii de stoc, fără imagini generate prezentate ca reale. Ideile se desenează (vezi `docs/brand-si-voce.md`).
10. Ce nu oferim ca serviciu: AI care înregistrează ședințe sau scrie note clinice, chatboți care discută cu clienții, scoruri sau screening clinic, analiza emoțiilor, prelucrarea dosarelor, linie telefonică automată, aplicații native ca prim produs, social media și reclame.

## Limba și tonul

Română directă, propoziții scurte, fără cratimă sau linie de dialog în interiorul propoziției (se folosesc virgula, punctul, „·”). Vorbim cu „tu” către profesionist. „Eu” când vorbește Ionuț, „noi” când lucrăm amândoi; persoana a treia doar în biografia de presă. Limitele se spun o dată, tare; nu se repetă în fiecare secțiune. Nume proprii ale casei: Harta cabinetului, Radiografia, cele trei Drumuri (Prezență, Sistem, Voce), Regula casei, A doua tură. Pe prima pagină rămân doar acestea; Protocolul semafor, Filtrul deontologic, Oglinda AI, Pragul stau pe paginile interioare.

## Cum se lucrează

- Întâi citește `docs/README.md` (harta cunoașterii), apoi `docs/de-confirmat.md` și ultimele rânduri din `docs/decizii.md`.
- Comenzi: `npm install`, `npm run dev`, `npm run build`, `npm test` (cere `dist/`; Playwright cu `executablePath` spre Chromium-ul preinstalat), `node tests/shot.mjs dist tests/shots` (capturi), `node scripts/og.mjs` (carduri de distribuire), `node scripts/art.mjs` (desene), `node scripts/pdf.mjs` (afișul Regula casei).
- Lighthouse: `node tests/lhserve.mjs dist 4330` apoi `npx lighthouse@12 http://localhost:4330/ --form-factor=mobile` cu `CHROME_PATH` spre Chromium. Ținta: ≥ 90 la toate, de obicei 97+.
- Publicare: `git push origin main` → Vercel construiește singur (≈ 1 minut). Nu există alt pas. Verifică apoi https://roomforpeople.vercel.app.
- Ordinea obligatorie pentru lucrări mari: backup → fundație tehnică → conținut → vizual → teste → raport. Raportul către Ionuț în categoriile: A implementat · B îmbunătățit · C testat · D blocat (ce și de ce) · E dezvoltare viitoare.
- Definition of Done: build curat, `npm test` trece, capturi verificate pe desktop și mobil, Lighthouse ≥ 90, nimic DE CONFIRMAT publicat ca sigur, `docs/` actualizat.
- La final de sesiune: notează în `docs/decizii.md` ce s-a decis, în `docs/de-confirmat.md` ce a rămas deschis, în `docs/istoric.md` ce s-a livrat.

## Unde sunt lucrurile

- `src/config.ts`: email, LinkedIn, prețuri, echipa, timp de răspuns, praguri. Tot ce e DE CONFIRMAT e marcat în comentarii.
- `src/pages/`: paginile. `src/pages/index.astro` are 7 secțiuni (hero, Aceeași seară de două ori, Harta, Regula casei, Trei drumuri, Din Jurnal, Scrie-mi).
- `src/components/Harta.astro` + `src/lib/harta.ts`: Harta cabinetului (8 întrebări, 4 pași, rezultat pe loc, fără email).
- `src/lib/drumuri.ts`, `src/lib/ziua.ts`: cele trei drumuri și scenariile „Ziua ta”.
- `src/content/jurnal/*.md`: articolele; `draft: false` publică; vezi `src/content/JURNAL-cum-publici.md`.
- `src/assets/art/*.svg`: desenele (sistemul „Atelierul”: linie prună, marker verde, desenare secvențială la intrarea în ecran).
- `api/contact.js`: formularul (Resend). Variabile: `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`, `ALLOWED_ORIGIN`.
- `drafts/`: materiale nepublicate (consimțământul). `BACKLOG.md`: ce rămâne pentru site. `docs/`: cunoașterea proiectului.
- `README.md`: operare (local, Vercel, preview pentru artifact).

## Ce nu face Claude singur

Decizii comerciale (prețuri noi, servicii noi pe site), juridice (texte de confidențialitate, consimțământ, afirmații despre AI Act sau GDPR) și orice acces extern nou. Le pregătește, le pune în `docs/de-confirmat.md` și le prezintă lui Ionuț. Restul implementează fără să întrebe.
