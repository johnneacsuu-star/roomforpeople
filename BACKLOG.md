# Backlog · ce rămâne pentru Fazele 3 și 4 din audit

Nu se construiesc înainte de condițiile din audit (poarta 2: opt articole publicate și prima Radiografie vândută; poarta 3: primul drum livrat și o recomandare cu nume). Arhitectura de acum le permite fără reconstrucție: pagini noi în `src/pages`, colecții noi în `src/content`, funcții noi în `api/`.

| Element | Unde ar intra | Condiție |
| --- | --- | --- |
| Comunitatea profesională (grup) | pagină `/comunitate` + link din Jurnal | 20 de oameni care au trecut prin Hartă |
| Agentul AI de primul contact, ca demonstrație cu reguli afișate | pagina Sistem, secțiune nouă | trei instalări reale de Sistem |
| Aplicații complexe la comandă | pagină de serviciu nouă | colaborator pe cod |
| Oferta pentru echipe (2–5 colegi) | pagină `/echipe` | zece clienți în română |
| Studiul real „Un cabinet, 30 de zile” | articol lung în Jurnal + pagină | primul drum livrat, acord scris |
| Platforma educațională (curs „Cabinetul cu sistem”) | subdomeniu sau `/invata` | zece cabinete prin drumuri |
| Biblioteca completă de 30 de situații cu semafor | colecție `src/content/semafor` | surse pe fiecare rând |
| Versiunea internațională (.com, engleză) | folder `src/pages/en` sau proiect separat | româna produce bani |
| Oglinda AI ca serviciu separat, cu termen | pagina `/oglinda` (există, marcată inactivă) | proces operațional definit |
| Șablonul de consimțământ, publicat | `/resurse` (draftul e în `drafts/consimtamant.md`) | verificare juridică |
| Trimiterea Hărții pe emailul vizitatorului | `api/contact.js` (pregătit, `SITE.resultEmailToVisitor`) | roomforpeople.ro verificat în Resend |
| Calendar de programare pe pagina Contact | `SITE.calendarUrl` | un calendar real |
| Fotografie din atelier, în lumină naturală | `public/img/ionut.webp` | ședința foto |
| Articole noi, cu fotografii doar pentru oameni și locuri reale | `image:` în frontmatter | fotografii proprii, fără stoc |


## Din auditul de pe 12 octombrie · după primele trei discuții cu oameni din breaslă

Lista a treia din audit: are nevoie de ce spun oamenii, nu de ce credem noi.

| Element | Unde ar intra | Condiție |
| --- | --- | --- |
| Harta vie: fiecare răspuns desenează o bucată din cabinetul ei; locul care lipsește apare punctat, omul se oprește acolo; se descarcă ca imagine, cu numele cabinetului și data | `Harta.astro` + un desen nou în `scripts/art.mjs` | trei practicieni care salvează rezultatul de acum |
| Planul se desenează în timpul întrebărilor; progresul e desenul, nu bara | `Harta.astro` | odată cu Harta vie |
| Raportul exemplu al Radiografiei: trei pagini răsfirate, pe un cabinet fictiv | pagina Radiografia + `public/fisiere` | prima Radiografie vândută |
| Portrete la lucru (aceeași lumină, același fundal) și mâna care desenează planul | `public/img` | ședința foto, un telefon și o foaie |
| Ușile se deschid spre bucata ei din plan; telefonul de la 22:40 desenat cu aceeași linie, mesajele sosesc pe rând | `index.astro`, `scripts/art.mjs` | după Harta vie |
| Planul casei ca reper de orientare în pagină, în locul numerelor | `Base.astro` | după lansare |
| Hârtia: un grăunte fin pe fundal, desene care ies puțin din chenar | `global.css` | o oră, când se decide direcția |

## Catalogul de servicii

Analiza celor două cataloage (Grok, Atlas), lista celor 20 de servicii potrivite, idei și ce nu oferim: `docs/servicii.md`. Deciziile comerciale care lipsesc: `docs/de-confirmat.md`, rândurile 13 până la 17.
