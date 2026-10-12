# Room for People · site

Cunoașterea proiectului (reguli, decizii, întrebări deschise, istoric, servicii, surse): `CLAUDE.md` și `docs/README.md`. Chat-ul nu e memorie; ce contează se scrie acolo.

Site static pe Astro, pentru roomforpeople.ro. Formularul trimite printr-o funcție Vercel (`api/contact.js`) prin Resend.

## Local
```
npm install
npm run dev          # http://localhost:4321
npm run build        # dist/
npm test             # build-ul trebuie să existe; rulează testele funcționale (Playwright)
node tests/shot.mjs  # capturi de ecran la 1400 și 390 px, în tests/shots
```

## Publicare pe Vercel
1. Depozit pe GitHub, proiect Vercel legat de el (Framework: Astro). `vercel.json` e gata (cleanUrls, antete).
2. Variabile de mediu (Settings → Environment Variables): `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`, `ALLOWED_ORIGIN`. Vezi `.env.example`. Fără ele formularul răspunde 503 și pagina spune cinstit că nu e configurat.
3. Domeniul roomforpeople.ro: se adaugă în Vercel, se schimbă DNS-ul la registrar. Nu se face fără acordul lui Ionuț.
4. Analytics: Vercel Web Analytics se activează din dashboard (Project → Analytics → Enable); scriptul e deja în pagină și se încarcă doar pe domeniul real (roomforpeople.ro), nu pe previzualizarea vercel.app.
5. Resend: până e verificat roomforpeople.ro, `CONTACT_FROM` rămâne `onboarding@resend.dev`, care livrează doar către adresa contului Resend. După verificare: `salut@roomforpeople.ro` și, dacă se dorește, trimiterea Hărții către vizitator (`SITE.resultEmailToVisitor`).

## Preview (artifact claude.ai)
```
LINK_MODE=relative npm run build   # dist-preview/, cu linkuri relative
node scripts/preview.mjs           # rescrie căile absolute și pregătește fragmentul pentru artifact
```

## Unde se schimbă lucrurile
- `src/config.ts`: email, LinkedIn, prețuri, echipa, timpul de răspuns. Ce e marcat DE CONFIRMAT se verifică înainte de lansare.
- `src/content/jurnal/*.md`: articolele. `draft: false` publică. Vezi `src/content/JURNAL-cum-publici.md`.
- `src/lib/harta.ts`: întrebările, treptele și primii pași din Harta cabinetului.
- `src/lib/ziua.ts`: scenariile „Ziua ta” pe profesie. `src/lib/drumuri.ts`: cele trei drumuri.
- `src/pages/confidentialitate.astro`: textul are marcaje „de confirmat”; `confirmat = true` scoate bannerul și noindex-ul.
- `drafts/`: materiale nepublicate (consimțământul). `BACKLOG.md`: ce rămâne pentru Fazele 3 și 4.


## Cardurile de distribuire

`node scripts/og.mjs` generează `public/og.png` (site) și `public/og/jurnal-<slug>.png` pentru fiecare articol publicat, din aceeași matriță: titlu cu marker, desenul casei, sigla. Se rulează după ce apare un articol nou. Desenele se generează cu `node scripts/art.mjs` (vezi `src/content/JURNAL-cum-publici.md`).
