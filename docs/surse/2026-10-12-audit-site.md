Audit · 12 octombrie 2026 · roomforpeople.vercel.app

# Site-ul e bun. Clienta încă nu se vede în el.

Am parcurs 12 pagini, pe desktop și pe telefon. Am făcut Harta până la rezultat și am citit codul desenelor. Mai jos: ce ține, ce e stricat, cum devine clientul eroul paginii și cum prind viață hărțile.

[Verdict](#verdict)[Ce ține](#tine)[Defecte](#defecte)[Clientul ca erou](#erou)[Harta vie](#harta)[Imagistica](#imagini)[Vocea](#voce)[Ordinea de lucru](#ordine)

Verdict

## Calitatea nu e problema. Trei lucruri îl țin jos.

Site-ul e cinstit, clar și rapid. Nu are nevoie de încă o lună de lucru. Are nevoie de trei mutări și de câteva reparații care se fac într-o zi.

**Unu.** Clienta citește despre ea, dar nu se vede. Soluția apare înaintea problemei, iar rezultatul Hărții îi dă o notă.

**Doi.** Harta e decor, nu instrument. E aceeași pentru toată lumea și nu răspunde la nimic.

**Trei.** Imaginile vorbesc în mai multe limbi: desen de mână, fotografie de stoc, machetă lucioasă, grafic.

Claritatea ofertei

ține

Încrederea

ține

Viteza paginilor

ține

Sistemul vizual

ține

Clientul ca erou

pe jumătate

Imagistica

patru limbi

Lungimea paginii

23 de ecrane

Harta

decor

Rezultatul Hărții

stricat

Cardul de distribuire

gol

Ce ține

## Opt lucruri de care nu te atingi.

- **Titlul.** „Lucrezi cu oameni. Restul ar trebui să meargă singur.” Se înțelege în trei secunde.
- **Marți, 22:40.** Un moment precis, pe care îl recunoaște oricine din breaslă. E cea mai bună idee de pe site.
- **Regula casei și semaforul.** Pui limita înaintea ofertei. Rândul cu 112 din fiecare răspuns arată că ai stat în cameră.
- **Prețuri, limite și garanție la vedere.** Pagina „Cine” spune ce nu ești și ce nu garantezi. Rar și convingător.
- **Sistemul vizual.** Hârtie, mov închis, marker verde, ușa din logo, linia de mână. E al tău și se recunoaște.
- **Titlurile din Jurnal.** Acolo ești cel mai curajos. „Toată industria pune AI-ul în ședință. Eu îl țin la ușă.”
- **Dai înainte să ceri.** Harta fără email, calculatorul „A doua tură”, afișul cu Regula casei.
- **Meșteșugul.** Pagini ușoare, imagini mici, text alternativ scris cu grijă, mișcarea redusă respectată.

Defecte

## Șase lucruri stricate. Se repară primele.

Sunt verificate în pagină și în cod. Niciunul nu cere o decizie de design.

azi

### Rezultatul Hărții apare fără stil.

După opt întrebări, lista cu cele patru direcții iese ca text lipit: „PrezențăNu ești de găsit · 9/25”. Barele au înălțime zero. Eticheta „începe de aici” nu apare. E ecranul pentru care clienta a răspuns patru minute.

Cauza: lista e creată din JavaScript, iar stilurile din Astro sunt legate de componentă și nu ajung la elementele create așa. Am verificat: elementele `li` nu poartă atributul componentei.

**Reparația.** Mută regulile pentru `.rez-list` într-un bloc global (`is:global`). Același defect intră și în PDF-ul descărcat.

Captură din pagina Harta: rezultatul apare ca text simplu, fără bare și fără evidențierea direcției slabe.

/harta, după ultimul pas. Așa arată acum.

azi

### Cardul de distribuire e gol.

Imaginea `og.png` are sigla pe o bandă îngustă, sus. Restul de 80% e alb. Asta apare când pui linkul pe LinkedIn, pe Facebook sau pe WhatsApp. Pentru canalele tale, e imaginea cea mai văzută a brandului.

**Reparația.** Un card de 1200 × 630 cu titlul și cu planul desenat. Apoi câte unul pentru fiecare articol, din aceeași matriță.

Imaginea og.png: o bandă mov cu sigla Room for People sus și restul suprafeței alb.

og.png, întreagă. Am verificat pixelii: sub bandă e alb plin.

azi

### Pe telefon, hero-ul nu are nicio imagine.

La 375 × 812, desenul zilei de marți începe la 712 px. Primul ecran e doar text. Până pornește desenul se văd câteva puncte rătăcite: capetele rotunde ale liniilor încă nedesenate.

**Reparația.** Ascunde liniile până pornește desenul. Adu un fragment din desen lângă titlu sau imediat sub el, înaintea listei cu trei garanții.

Primul ecran al paginii principale pe telefon: titlu, text și buton, fără desen; jos se văd două puncte izolate.

Primul ecran, pe telefon.

azi

### Desenele se termină înainte să ajungă cineva la ele.

Scriptul aprinde toate desenele din pagină după patru secunde, oriunde s-ar afla. Cine derulează găsește planul din secțiunea 07 și cele trei uși gata desenate. În practică se vede mișcare doar în hero. De aici vine senzația ta că hărțile nu sunt destul de dinamice.

**Reparația.** Scoate temporizatorul. Lasă fiecare desen să pornească atunci când intră în ecran. Păstrează aprinderea directă doar pentru browserele fără observator.

azi

### Aceleași patru locuri au trei rânduri de nume.

| Unde | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| Planul desenat | prezența | primul contact | programări | voce |
| Rezultatul Hărții | Prezență | Primul contact | Administrare | Pregătire pentru AI |
| Drumurile | Prezență | Sistem | Voce |  |

**Reparația.** Alege un singur rând și folosește-l în desen, în întrebări, în rezultat și în ofertă. Planul promite „voce”, iar rezultatul măsoară altceva.

înainte de lansare

### Trei mărunte.

Pe busola din rezultat, eticheta „CONTACT” e acoperită de punct. Așa a ieșit în testul meu.

Cele trei uși se deschid doar când treci cu mouse-ul peste ele. Pe telefon nu se deschid niciodată.

Formularul are pregătit mesajul „nu e încă legat la email”. Trimite un mesaj de probă înainte să arăți site-ul cuiva. Eu nu am trimis nimic prin el.

Clientul ca erou

## Eroul are o problemă înainte să aibă o soluție.

Pagina vorbește aproape numai cu „tu”. Asta e bine. Dar povestea e pusă în ordinea ofertei, nu în ordinea ei. Cinci mutări o întorc.

### 1. Pune problema înaintea soluției.

Desenul din hero arată ziua deja rezolvată. Apoi vin trei promisiuni. Abia a treia secțiune arată telefonul de la 22:40. Clienta primește răspunsul înainte să fi simțit întrebarea. Harta, primul ei pas, vine a șaptea, după prețuri.

### Acum, 11 secțiuni

1. Titlu și ziua rezolvată
2. Trei promisiuni
3. Problema: marți, 22:40
4. Trei drumuri și prețuri
5. Cine construiește
6. Regula casei
7. Harta
8. Radiografia
9. Jurnal
10. Un om, nu un sistem
11. Primul pas

### Propus, 7 secțiuni

1. Ea și tensiunea: titlu, 22:40, un singur buton
2. Aceeași seară, înainte și după
3. Harta: primul pas, gratuit
4. Cine o ghidează și Regula casei
5. Trei drumuri pe scurt, cu Radiografia
6. Jurnal
7. Scrie-mi

Pe telefon pagina are acum 18.600 px, adică 23 de ecrane. Cardurile cu drumuri ocupă singure aproape patru. Ținta: 10 până la 12 ecrane. Detaliile fiecărui drum stau deja pe pagina lui.

### 2. Scoate-te din a doua propoziție.

Deasupra butonului sunt două propoziții. A doua e despre tine. Ghidul apare după ce eroul și-a recunoscut problema, nu înainte.

Acum

Site, primul contact, programări și materiale, puse la lucru în cabinetul tău, ca seara să fie a ta. Construite de un asistent social cu 23 de ani lângă oameni, care le-a folosit întâi pe el.

Propus

E marți, 22:40. Trei mesaje așteaptă un răspuns de la tine. Le scrii o singură dată, în cuvintele tale. De acolo pleacă singure.

Sub buton, mic: „Construit de un asistent social, după 23 de ani lângă oameni.”

### 3. Descrie locul, nu omul.

Rezultatul Hărții spune „46 din 100” și „Nu ești de găsit · 9/25”. O notă o pune pe clientă în banca elevului. Breasla asta e deja evaluată destul. Știi regula din meserie: descrii situația, nu etichetezi omul.

| Acum, despre ea | Propus, despre loc |
| --- | --- |
| 46 din 100 | Omul care te caută ajunge până la ușă. |
| Nu ești de găsit | Semnul de afară lipsește. |
| Totul trece prin tine | Seara, la ușă nu răspunde nimeni. |
| A doua tură, în fiecare seară | Calendarul se ține de mână. |
| Fără reguli, fără unelte | Regula casei nu e încă scrisă. |

### 4. Ține minte cine e.

Alegerea profesiei există doar în secțiunea 03. Restul paginii uită. Las-o să aleagă o dată, sus, chiar în rândul „Pentru psihologi, psihoterapeuți, asistenți sociali și coachi”. Apoi se schimbă mesajele din telefon, exemplele și câmpul „Lucrez ca” din formular. Alegerea se păstrează în browser, cum faci deja cu răspunsurile Hărții.

### 5. Arată produsul.

Vinzi un răspuns scris o singură dată. E descris în mai multe locuri. Mesajul întreg nu apare pe nicio pagină pe care am citit-o. Arată-l, în seara în care sosește. Cine îl citește își spune: aș fi vrut să fie al meu.

Marți

22:40

Mesaje · 22:40Bună seara, cât costă o ședință? Și dacă lucrați și online?

22:41 · scris de tine, o singură datăBună seara. Sunt Andreea P., psihoterapeut. Îți mulțumesc că mi-ai scris. O ședință durează 50 de minute și costă 250 de lei. Lucrez în Cluj și online. Prima întâlnire e o discuție de 30 de minute, în care vedem dacă ne potrivim. Îți poți alege ora din linkul de mai jos. Citesc mesajul tău mâine, la 9:00. Dacă ești în pericol, sună acum la 112.

23:10

Seara e a ta.

Exemplu cu un cabinet fictiv.

Schița face două lucruri deodată. Arată produsul. Și folosește noaptea ca culoare: ai deja tonul în paletă, iar pagina de azi trece prin 22:40 pe același fundal de hârtie ca restul.

### Și dovada.

Nu ai încă un cabinet client. Nu inventa unul. Ai trei dovezi cinstite la îndemână. Un raport de Radiografie pe un cabinet fictiv, cu paginile la vedere. Oglinda AI făcută pe propriul tău site, cu capturile. Și contorul „primele 10 cabinete”, afișat abia când cifra e reală.

Harta vie

## Clienta ține creionul.

Ai dreptate că hărțile nu sunt destul de dinamice. Animația e doar o parte. Planul e același pentru toată lumea și nu răspunde la nimic. Iar rezultatul celor opt întrebări nu e o hartă. E o busolă cu bare.

Propunerea: fiecare răspuns desenează o bucată din cabinetul ei. La final are planul ei și vede unde se oprește omul care o caută. Schița de mai jos e desenată din cod și merge. Schimbă răspunsurile.

- lipsește
- există, trece prin tine
- merge singur

Exemplu · un cabinet fictiv

Afară. Cum te găsește omul? Nu am site, doar Facebook Am site, dar e vag Clar din prima

La ușă. Ce primește când îți scrie seara? Nimic, răspund când pot Un răspuns automat generic Un răspuns în tonul meu, cu pașii următori

Înăuntru. Cum se face o programare? Mesaje dus-întors Calendar online, dar confirm tot eu Omul își alege ora singur

Pe raft. Ce citește cine nu te cunoaște? Nimic Câte ceva, când apuc Scriu regulat, în vocea mea

Ce face schița și site-ul nu face încă. Locul care lipsește e desenat în creion, punctat. Omul se oprește la el. Textul vorbește despre loc, nu despre ea. Cabinetul rămâne neatins în orice variantă, cu scaunul gol care îl așteaptă pe om.

De ce contează pentru afacere. Un plan cu numele cabinetului ei e un lucru pe care îl salvează și îl arată unei colege. O notă din 100 nu o arată nimănui.

- **Rezultatul devine planul ei.** Ca în schiță, cu numele cabinetului și cu data. Se descarcă drept imagine. Cifrele rămân într-un rând „vezi detaliile”.

  o săptămână
- **Planul se desenează în timpul întrebărilor.** Progresul e desenul, nu bara cu patru segmente.

  inclus mai sus
- **Hero: ziua pornește din starea de azi.** 22:40 încercuit, seara plină. La o atingere, markerul taie și scrie „seara e a ta”. Tabelul azi și cu sistem din secțiunea 03 devine același obiect.

  o zi
- **Ușile se deschid când intră în ecran.** În spatele fiecăreia se vede bucata ei din plan: semnul, masa cu telefonul, raftul. Ușile și planul devin aceeași lume.

  o zi
- **Telefonul de la 22:40, desenat cu aceeași linie.** Mesajele sosesc pe rând, la 22:40, 22:41 și 22:52, pe măsură ce derulează.

  o zi
- **Planul casei ca reper de orientare.** Un plan mic care arată unde ești în pagină, în locul numerelor 02 până la 11.

  după lansare

### Cinci reguli de mișcare, ca să rămână liniștit.

Un singur lucru se mișcă pe ecran. Mișcarea răspunde la un gest al ei: derulare, atingere, răspuns. Un desen durează între 600 și 900 de milisecunde. Nimic nu se repetă în buclă. Markerul e singura culoare care se mișcă.

Imagistica

## O singură peniță. Fotografie doar pentru oameni reali.

Linia de mână cu marker e a ta și e destul de puternică să ducă tot site-ul. Acum împarte pagina cu alte trei limbi.

### Fotografiile din Jurnal sunt de stoc și se vede.

Trei articole au fotografii de stoc, creditate ca atare, întunecate și portocalii. În prima, lângă veioză, sunt cărți cu titluri în chineză sau japoneză. Unui psiholog din Cluj îi spune pe loc „imagine luată de undeva”. Celelalte două articole refolosesc desenul din hero și o ușă.

Pe pagina Prezență scrii că nu folosești imagini generate pentru cabinetul clientului. Aceeași grijă se cuvine propriului tău Jurnal.

Detaliu din coperta primului articol din Jurnal: o veioză mică și un teanc de cărți cu titluri în caractere est-asiatice pe cotor.

/jurnal, coperta primului articol. Detaliu.

### Încă patru constatări.

**Portretele.** Două fotografii, două stiluri. Sacou bleumarin și fundal neclar de interior la tine. Mâna sub bărbie și privirea în lateral la Andrei. Spun „consultant”. Textul de lângă vorbește despre stradă, adăpost și protecția copilului.

**Telefonul.** O machetă lucioasă, cu umbră, înclinată pe desktop. Lângă un plan desenat de mână, pare adus din alt site.

**Radiografia și Voce nu au nicio imagine.** Radiografia e primul lucru plătit. Promite „harta zilei tale, desenată” și nu arată niciuna.

**Seara nu se vede.** Problema are un telefon. Răsplata, „seara e a ta”, există doar ca text.

### Ce propun.

- **O regulă.** Linie pentru idei. Fotografie doar pentru oameni și locuri reale. Niciun stoc.

  decizie
- **Coperți desenate pentru Jurnal.** Un obiect pe articol, aceeași peniță, un singur accent de marker. Aceeași copertă devine cardul de distribuire al articolului. Schița e mai jos.

  o zi
- **Telefonul desenat și noaptea ca culoare.** Secțiunea de la 22:40 pe fundal închis, apoi hârtie pentru seara liberă. Temperatura se simte fără niciun cuvânt.

  o zi
- **Mâna.** O fotografie, sau opt secunde filmate, cu mâna ta desenând planul pe o foaie, la lumină de zi. Leagă desenul de un om. Scrii deja că desenezi harta la fiecare Radiografie. Arat-o.

  un telefon și o foaie
- **Portrete la lucru.** Aceeași lumină, același fundal. Tu cu pixul deasupra hărții. Andrei la ecran. Fără sacou de conferință.

  o ședință foto
- **Raportul exemplu.** Trei pagini răsfirate din Radiografia unui cabinet fictiv: harta zilei, primele trei automatizări cu orele lor, filtrul deontologic în roșu și verde. E imaginea care vinde primul produs plătit.

  două zile
- **Seara, desenată.** O veioză, o cană, o carte, telefonul cu fața în jos. Aceeași linie, markerul doar pe lumină.

  o oră
- **Hârtia.** Fundalul e o culoare plată. Un grăunte fin și desene care ies puțin din chenar. O foaie pe birou, nu un card.

  o oră

### Schiță: cinci coperți din aceeași peniță.

Desenate din cod, în câteva linii, ca să arate direcția. Varianta finală merită mâna ta sau trusa de desene pe care o are deja site-ul.

Vocea

## Mai puțină apărare. O singură persoană.

### Eu, el și noi, pe aceeași pagină.

„Răspunde Ionuț, personal.” „Îți răspund personal.” „Lucrăm cu materialele tale publice.” Pagina „Cine” e toată la persoana a treia: „Pentru că asta știe.” Alege „eu” când vorbești cu ea și „noi” când lucrați amândoi. Persoana a treia rămâne pentru biografia de presă. În hero, „care le-a folosit întâi pe el” se poticnește la citit.

### Pagina se apără.

Pe pagina principală, 24 de fraze încep cu o negație: nu, niciun, nicio, fără. Limitele sunt puterea ta. Spuse o dată, tare, sunt o poziție. Repetate în fiecare secțiune, sună a scuză. Fraza cu „nu există departament de vânzări și nu există robot” apare de două ori pe aceeași pagină.

### Linia cea mai curajoasă e ascunsă în Jurnal.

„Toată industria pune AI-ul în ședință. Eu îl țin la ușă.” Asta e poziția ta. Urc-o pe pagina principală, ca titlu al Regulii casei. Titlul de acum spune regula. Fraza asta spune de ce contează.

### Nouă nume proprii la prima vizită.

Harta, Radiografia, Drumurile, Regula casei, Protocolul semafor, Filtrul deontologic, Oglinda AI, Pragul, A doua tură. Sunt bune și sunt ale tale. Pe pagina principală păstrează patru: A doua tură, Harta, Radiografia, Regula casei. Celelalte își au locul pe paginile din interior.

Ordinea de lucru

## Trei liste. Primele două fac site-ul gata de arătat.

### Azi, două până la trei ore

1. Stilurile listei din rezultatul Hărții, mutate în global.
2. Temporizatorul de patru secunde scos. Liniile nedesenate ascunse.
3. Un singur rând de nume pentru cele patru locuri.
4. Un mesaj de probă trimis prin formular.
5. Eticheta „CONTACT” de pe busolă.

### Săptămâna asta, înainte de lansare

6. Cardul de distribuire, cu titlu și plan.
7. Ordinea paginii: problema înaintea promisiunilor, Harta înaintea prețurilor. Din 11 secțiuni rămân 7.
8. Textul din hero, despre ea. Semnătura ta, sub buton.
9. Rezultatul Hărții vorbește despre loc. Fără note.
10. Secțiunea 22:40 pe fundal de noapte, cu răspunsul arătat întreg.
11. Coperți desenate în locul fotografiilor de stoc.
12. O singură persoană: eu și noi.

### După primele trei discuții cu oameni din breaslă

13. Harta vie completă, cu descărcare.
14. Raportul exemplu al Radiografiei.
15. Portretele la lucru și mâna care desenează.
16. Ușile care se deschid spre plan. Telefonul desenat.

A treia listă are nevoie de ce îți spun oamenii, nu de ce credem noi doi. Dacă trei practicieni se uită la rezultatul Hărții și nu îl salvează, planul desenat se schimbă înainte să fie construit.

Cum am lucrat. Am citit paginile acasă, harta, radiografia, cine, jurnal, un articol, contact, prezență, sistem, voce, calculator și resurse. Am completat Harta cu răspunsuri de probă și apoi am șters răspunsurile din browser. Am citit foile de stil și scripturile. Ce nu am făcut: nu am trimis formularul, nu am testat pe un iPhone real, nu am măsurat viteza cu un instrument. Layoutul de desktop l-am văzut la 1000 până la 1366 px, într-un panou micșorat.