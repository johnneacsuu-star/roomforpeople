# Brand și voce · „Atelierul”

## Identitate

- Nume: Room for People. Marcă: „Oameni în față · sistem în spate”. Poziționare: „AI la ușă, nu în cameră”. Fraza de poziție: „Toată industria pune AI-ul în ședință. Eu îl țin la ușă.”
- Logo: ușa (foaia verde, tocul prună) și wordmark-ul. Foaia ușii se deschide la hover pe logo.
- Culori (tokens în `src/styles/global.css`): ink #141216, night #1C1626, plum #35224F, paper #F2EEE8, mist #DCD6E6, signal #D6FF55 (markerul), alert #E4472B. Raze de 2 px; butoanele și pastilele sunt rotunde.
- Fonturi, locale (Fontsource): Bricolage Grotesque Variable (titluri), Hanken Grotesk 400/500/600 (text), IBM Plex Mono 400/500 (etichete, puțin). Text ≥ 13 px, etichete ≥ 12 px.

## Desenul (sistemul „Atelierul”, preluat din versiunea Grok pe 11.10)

- O singură peniță: linie prună 2,2 px, capete rotunde, `vector-effect: non-scaling-stroke`; markerul verde cu `mix-blend-mode: multiply`; textul scris de mână în fontul de text (`.hw`).
- Fiecare desen se trasează pe rând când intră în ecran (`html.draw` + `.art.on`, `pathLength="1"`, `--d` pe element). Nimic nu pornește înainte să ajungă omul la el. Cu `prefers-reduced-motion` desenele sunt gata de la început.
- Ușile (`.door`) se deschid singure la 1,4 s după ce intră în ecran, și la hover pe desktop.
- Desenele existente (`src/assets/art/`): plan (ziua de marți), flux, harta (planul cabinetului), usa-1, usa-2, usa-3, caiet, noapte, prag, semn, tura. Se generează cu `node scripts/art.mjs`.
- Desenele sunt ușor rotite, ies puțin din chenar. Reguli de mișcare (din audit): un singur lucru se mișcă pe ecran; mișcarea răspunde la un gest (derulare, atingere, răspuns); 600 până la 900 ms; nimic în buclă; markerul e singura culoare care se mișcă.

## Fotografia

- Fotografie doar pentru oameni și locuri reale. Niciun stoc, nicio imagine generată prezentată ca reală. Ideile se desenează.
- Portretele: ramă subțire prună fără latura de jos, bara de marker înclinată dedesubt (`.portrait .frame`). Următoarea ședință foto: „la lucru”, aceeași lumină, același fundal; și mâna care desenează planul.
- Cardurile de distribuire (og) se generează din aceeași matriță: titlu cu marker, desenul casei, sigla (`node scripts/og.mjs`).

## Vocabularul casei

Harta cabinetului (gratuită, 8 întrebări, 4 direcții: prezența, primul contact, programările, vocea), Radiografia (diagnostic plătit), cele trei Drumuri (Prezență, Sistem, Voce), Regula casei (nicio informație despre un client nu intră într-un instrument AI), Protocolul semafor (verde, galben, roșu), Filtrul deontologic, A doua tură (administrația de seară), Oglinda AI, Pragul. Pe prima pagină rămân patru: A doua tură, Harta, Radiografia, Regula casei.

Cele patru locuri din plan poartă același nume peste tot: în desen, în întrebări, în rezultat și în ofertă.

## Cum scriem

- Română directă, propoziții scurte. Fără cratimă sau linie de dialog în interiorul propoziției; se folosesc virgula, punctul și „·”.
- „Tu” către profesionist. „Eu” când vorbește Ionuț, „noi” când lucrăm amândoi. Persoana a treia doar în biografia de presă.
- Problema înaintea soluției. Descriem locul, nu etichetăm omul: „Semnul de afară lipsește”, nu „Nu ești de găsit”; fără note din 100.
- Limitele se spun o dată, tare. Nu repetăm negațiile în fiecare secțiune.
- Prețuri la vedere, în lei, cu „de la” unde e cazul. Fiecare preț se poate explica în ședințe de 250 lei.
- Nu promitem clienți, poziții în Google sau recomandări de la asistenți AI. Nu spunem „nimeni nu face asta”.
- Fiecare răspuns automat de prim contact spune că nu e serviciu de urgență și trimite la 112.
- Ionuț: „asistent social de 23 de ani, absolvent de psihologie”. Niciodată „psiholog”. Andrei N.: „partea tehnică și AI”, creatorul blackstonerepair.co.uk, atât.
- Fapte din biografie doar cu sursă (vezi `decizii.md`, 11.10).

## Profesiile

`PROFESII` în `src/config.ts`: psiholog / psihoterapeut (CPR), asistent social independent (CNASR), coach. Alegerea se face o dată, sus, în hero, și se ține minte în browser (`rfp-profesie`); schimbă scenariile „Ziua ta” și câmpul „Lucrez ca” din formular. Scriem diferit pentru cele două coduri; agențiile tratează „terapeuții” la grămadă.
