# Cunoașterea proiectului · harta

Tot ce trebuie să știe cineva (Ionuț, Andrei, un colaborator, Claude într-o sesiune nouă) ca să continue Room for People fără să recitească conversațiile. Regula: chat-ul nu e memorie. Ce contează se scrie aici, în aceeași zi.

| Fișier | Ce conține | Când se citește |
| --- | --- | --- |
| `../CLAUDE.md` | Regulile casei, tonul, cum se lucrează, unde sunt lucrurile | Primul, în orice sesiune |
| `decizii.md` | Jurnalul deciziilor, cu data și motivul | Înainte de a schimba ceva ce pare ciudat |
| `de-confirmat.md` | Tot ce așteaptă un răspuns de la Ionuț | La începutul fiecărei sesiuni |
| `istoric.md` | Ce s-a livrat, pe zile | Când vrei să știi unde suntem |
| `audit-2026-10-12.md` | Auditul site-ului din 12 octombrie, cu stadiul fiecărui punct | Când se lucrează pe site |
| `servicii.md` | Catalogul de servicii: ce e pe site, ce e pe listă, ce nu facem, cu prețurile propuse | Când se discută oferta |
| `brand-si-voce.md` | Direcția vizuală „Atelierul”, vocabularul casei, regulile de scris | Înainte de orice text sau desen nou |
| `proiect-claude-instructiuni.md` | Textul de pus în instrucțiunile unui Project Claude.ai | O dată, la crearea proiectului |
| `../BACKLOG.md` | Ce rămâne de construit pe site, cu condiția de pornire | Când se planifică |
| `../README.md` | Operare: local, Vercel, preview | Când se publică |
| `../arhiva/` | Documentele originale, cu data în nume: directiva, auditurile, cataloagele, conceptele, istoricul | Când ai nevoie de textul exact |

## Cum se ține la zi

- O decizie luată în chat sau în ședință → un rând în `decizii.md`, cu data.
- O întrebare pentru Ionuț → un rând în `de-confirmat.md`; când primește răspuns, se mută în `decizii.md`.
- Un document nou primit (audit, catalog, prompt, concept) → copie în `../arhiva/` cu data în nume, plus un rând în `istoric.md`.
- O idee pentru site → `BACKLOG.md`, cu condiția la care se construiește.
- O idee de serviciu → `servicii.md`, în lista potrivită.

## Unde mai există informație

- Depozitul GitHub `johnneacsuu-star/roomforpeople` (privat): codul și acest folder. E sursa adevărului.
- Site-ul live: https://roomforpeople.vercel.app (previzualizare, noindex). Domeniul roomforpeople.ro nu e încă legat.
- Vercel: proiectul `roomforpeople` în echipa „john's projects”. Publicare automată din `main`.
- Documentele Claude din conversațiile anterioare (planul de conținut, auditul strategic din 11 octombrie) au copii PDF sau text în `../arhiva/`.
