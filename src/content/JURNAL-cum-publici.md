# Cum publici un articol în Jurnal

1. Creezi un fișier `.md` în acest folder. Numele fișierului devine adresa: `omul-care-scrie-la-22.md` → `/jurnal/omul-care-scrie-la-22`.
2. Completezi antetul (frontmatter): `title`, `description` (o propoziție, apare în listă și în Google), `date` (AAAA-LL-ZZ), `pillar` (unul din: Pragul, A doua tură, Atelierul, Cum te vede lumea, Din cameră), `profesii` (psi, as, co), `sources` (opțional).
3. `draft: true` ține articolul nepublicat; nici nu se construiește. Când e verificat, pui `draft: false`.
4. Site-ul se reconstruiește singur la fiecare modificare în depozit. Pagina principală arată secțiunea „Din Jurnal” doar când sunt cel puțin 3 articole publicate.

5. Imaginea: `art` alege una din coperțile desenate (noapte, prag, semn, tura, caiet, plan, flux, harta, usa-1, usa-2, usa-3). Pentru un obiect nou, se adaugă în `scripts/art.mjs` și se rulează `node scripts/art.mjs`. Regula imaginilor: linie desenată pentru idei; fotografie doar pentru oameni și locuri reale (`image`, `imageAlt`, `credit`). Fără fotografii de stoc.

Regula casei se aplică și aici: nicio informație despre un client, nici anonimizată. Exemplele sunt compuse și se spune că sunt compuse.
