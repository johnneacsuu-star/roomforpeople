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

## Catalogul de servicii · idei care se potrivesc, pentru listă, nu pentru site acum

Din cele două cataloage primite pe 12 octombrie (Grok, 65 de servicii; Atlasul, 89 de servicii). Regula de selecție: AI la ușă, nu în cameră; nicio dată de client în vreun instrument; livrabil în două săptămâni sau mai puțin; Ionuț singur sau cu Andrei. Prețurile sunt propunerile din cataloage, de confirmat.

**Intră natural în cele trei drumuri de acum (module, nu pagini noi)**

| Serviciu | Drum | Preț propus în catalog | De ce se potrivește |
| --- | --- | --- | --- |
| Ușa de seară: textul de prim contact, patru variante (WhatsApp, email, formular, vocal), cu fraza 112 | Sistem, ca produs de intrare | 390 lei | E exact răspunsul arătat pe prima pagină. Livrare în 2–3 zile. |
| Profilul Google, pus la punct | Prezență | 490 lei | Cea mai ieftină creștere de vizibilitate; aceleași cuvinte ca site-ul. |
| Testul asistenților AI: ce spun trei asistenți despre cabinet, cu capturi | Prezență (e Oglinda AI de acum, cu preț) | 290 lei | Există deja ca pagină inactivă; devine serviciu mic. |
| Programări online în 48 de ore | Sistem | 690 lei | Primul pas din rezultatul Hărții la „Programări”. |
| Confirmări, remindere și reprogramare fără mesaje | Sistem | 990 lei | Deja promis în drumul Sistem; poate fi vândut și separat. |
| Lista de așteptare corectă | Sistem | 990 lei | Pentru cabinetele pline; lipsește din oferta de acum. |
| Patru texte de temelie (cu cine, unde, cum începe, ce nu fac) | Voce | 2.400 lei | Rândul clar din coperta „semn”. |
| Filtrul deontologic la abonament, 48 de ore pe text | Voce | 390 lei/lună | Verificare pe text public după CPR/CNASR; nu atinge date de client. |

**Serviciu nou, cu avantaj clar al lui Ionuț**

| Serviciu | Preț propus | Observație |
| --- | --- | --- |
| Kitul Regula casei: afișul, politica de folosire AI a cabinetului, textul de informare pentru clienți | 149 lei, produs digital | Afișul există deja gratuit; politica și textul de informare cer verificare juridică (draftul e în `drafts/consimtamant.md`). |
| Politica de folosire AI a cabinetului | 690 lei | Gol de piață în România, după catalog; livrare în 5 zile. |
| Atelierul „AI la ușă, nu în cameră”, 3 ore | 290 lei/persoană · 2.400 lei/echipă | Un efort, mulți participanți; construiește lista de email. Titlul e deja pe prima pagină. |
| Alfabetizare AI pentru echipe (AI Act, art. 4) | 3.900 lei/zi | Obligație legală pentru organizații; buget existent la ONG-uri și servicii sociale. |
| Schelete de rapoarte fără date de caz, pentru asistenți sociali | 1.200 / 4.900 lei | Avantajul unic: 23 de ani de rapoarte și anchete sociale. Deschide linia pentru ONG-uri. |
| Radiografia în trepte: express (3 zile), standard, echipă, ONG | 390 / 790 / 1.900+ / 2.900+ lei | Radiografia de acum e „standard”; express ar scădea pragul de intrare. |
| Grijă: mentenanță lunară | 190 / 290 lei/lună | Venit recurent după primul drum livrat. |

**Idei de ținut minte (ambele cataloage le marchează ca idei, nu ca servicii validate)**

- Semnul „AI la ușă”: un standard public, scurt, pe care cabinetele îl afișează pe site; se spune clar că e o declarație proprie, nu un aviz.
- Simularea primului contact cu șapte situații fictive (preț, anulare, nepotrivire, urgență, email lung): profesionistul își verifică singur ușa.
- Garanția de portabilitate: la predare, clientul primește domeniul, sursele, documentația, exportul și parolele; e deja practica din drumul Sistem („primești cheile”), merită scrisă ca listă publică.
- Ghid pentru clienți despre chatboți în momente grele, dat de profesionist clientului: ce poate, ce nu poate, când ceri ajutor uman, 112.
- Raportul anual „A doua tură în România”: un studiu anonim despre timpul administrativ al profesiilor; aduce presă și credibilitate; se prezintă cu limitele lui.
- Busola GEO a profesiilor: un monitor trimestrial despre cum descriu asistenții AI profesiile, în română.

**Ce rămâne în afara ofertei, după ambele cataloage și după Regula casei**

Instrumente care înregistrează ședințe sau scriu note clinice; chatboți care discută cu clienții despre problemele lor; screening sau scoruri clinice; analiza emoțiilor; prelucrarea dosarelor, chiar „anonimizate”; testimoniale clinice; promisiuni de clienți sau de poziții în Google; linia vocală automată pentru programări (risc în situații de criză; catalogul însuși spune „poate fi mai bine să nu existe”); aplicații native ca prim produs.
