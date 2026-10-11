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
| Articole noi, cu fotografii în loc de desene | `image:` în frontmatter | fotografii cu licență |
