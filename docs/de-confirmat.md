# De confirmat · așteaptă un răspuns de la Ionuț

Când un rând primește răspuns, se mută în `decizii.md` cu data. Nimic de aici nu se publică drept sigur.

## Blochează lansarea pe domeniu

| # | Întrebare | Unde se aplică | Ce facem până atunci |
| --- | --- | --- | --- |
| 1 | Adresa publică de email a cabinetului (acum `salut@roomforpeople.ro`, neexistentă) | `src/config.ts` → `SITE.email`; pagina Contact; mesajul 503 al formularului | Formularul spune cinstit că nu e legat la email |
| 2 | Cheia Resend și adresa de destinație (`RESEND_API_KEY`, `CONTACT_TO`): le creează Ionuț sau dă acordul să le creăm | Vercel → Environment Variables | Formularul răspunde 503, fără simulare |
| 3 | Verificarea domeniului roomforpeople.ro în Resend (după cheie), ca `CONTACT_FROM` să fie adresa reală | `.env.example`, README | `onboarding@resend.dev` livrează doar către contul Resend |
| 4 | Acordul pentru legarea domeniului roomforpeople.ro la Vercel și schimbarea DNS la registrar | Vercel → Domains | Site-ul trăiește pe vercel.app, cu noindex |
| 5 | Entitatea juridică (SRL, PFA, nume, CUI), sediul, perioada de păstrare a mesajelor, DPO dacă există | `src/pages/confidentialitate.astro` (`confirmat = false` ține bannerul și noindex) | Pagina e publică, dar marcată „de confirmat” și neindexată |
| 6 | Un mesaj de probă trimis prin formular, după configurare (auditul îl cere înainte de a arăta site-ul cuiva) | `api/contact.js` | Testele automate acoperă API-ul cu un Resend simulat |

## Afectează textul de pe site

| # | Întrebare | Unde se aplică |
| --- | --- | --- |
| 7 | Timpul de răspuns real (acum „de obicei în două zile lucrătoare”) | `SITE.responseTime`, pagina Contact, formular |
| 8 | Linkul de LinkedIn (acum `linkedin.com/in/ionutneacsu`, neverificat) | `SITE.linkedin`, footer, JSON-LD |
| 9 | Voce: forma finală a ofertei. Pe site: 2.400 lei „pentru prima lună”. Catalogul propune Voce ușoară 990 lei pe lună și „Patru texte de temelie” 2.400 lei o dată | `src/lib/drumuri.ts`, `src/pages/voce.astro`, `SITE.prices.voce` |
| 10 | Prețurile de lansare rămân „pentru primele 10 cabinete”? De la ce dată începe numărătoarea? | `index.astro` (secțiunea Drumuri), paginile drumurilor |
| 11 | Un calendar real de programare (Cal.com sau altul) pentru pagina Contact | `SITE.calendarUrl` |
| 12 | Fotografii: ședința foto „la lucru” (aceeași lumină, același fundal) și mâna care desenează planul. Până atunci rămân portretele de acum | `public/img/ionut.webp`, `public/img/andrei.webp` |

## Oferta (decizii comerciale)

| # | Întrebare | Unde se aplică |
| --- | --- | --- |
| 13 | Treapta de intrare pe site: care dintre serviciile mici din `servicii.md` (Testul asistenților AI, Ușa de seară, Profil Google, Programări în 48 de ore, Politica AI, Auditul deontologic) și la ce prețuri | pagină nouă `/servicii-mici` sau secțiune în Drumuri |
| 14 | Radiografia în trepte (express 390, standard 690/790, echipă, ONG) sau rămâne una singură | `radiografia.astro`, `SITE.prices` |
| 15 | Atelierul „AI la ușă, nu în cameră”: o dată, un preț, o platformă (Zoom) | pagină nouă `/ateliere` |
| 16 | Pagina pentru echipe și ONG-uri (schelete de rapoarte, alfabetizare AI, măsurarea celei de-a doua ture) | pagină nouă `/echipe` |
| 17 | Oglinda AI: devine „Testul asistenților AI”, serviciu plătit (290 lei), sau rămâne inactivă | `oglinda.astro` (noindex, marcată inactivă) |

## Juridic (cer jurist sau DPO înainte de publicare)

| # | Întrebare | Unde se aplică |
| --- | --- | --- |
| 18 | Șablonul de consimțământ și informare despre instrumente digitale și AI | `drafts/consimtamant.md` → `/resurse` |
| 19 | Politica de folosire AI a cabinetului, ca serviciu (text de bază revizuit juridic o dată) | `servicii.md` |
| 20 | Formularea exactă a obligației de alfabetizare AI (AI Act, art. 4) înainte de a o scrie pe site | `servicii.md`, viitoarea pagină `/echipe` |

## Mărunte

| # | Întrebare |
| --- | --- |
| 21 | Creditul fotografului pentru imaginile scoase nu mai e necesar (fotografiile Unsplash au fost eliminate pe 12 octombrie). Dacă revin fotografii, doar proprii |
| 22 | Vercel Web Analytics: se activează din dashboard când site-ul trece pe domeniu (Project → Analytics → Enable) |
