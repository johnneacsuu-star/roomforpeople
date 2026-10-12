// Harta cabinetului: patru locuri, opt întrebări, trei trepte pe loc. Fără răspuns greșit.
// Aceleași patru nume ca în planul desenat și în drumuri: Prezență, Primul contact, Programări, Voce.
// Treptele descriu locul, nu omul.
export const DIRECTII = [
  { id: 'prezenta', name: 'Prezență', loc: 'afară', stages: ['Semnul de afară lipsește', 'Semnul există, dar nu se citește de pe stradă', 'Semnul se vede din prima'],
    opreste: 'Omul care te caută nu ajunge până la ușă.',
    tips: [
      'Primul pas: o pagină cu trei propoziții: cu cine lucrezi, unde, cum începe. Azi, nu luna viitoare.',
      'Primul pas: scrie specializarea și orașul în prima propoziție a site-ului. Asistenții AI citesc exact asta.',
      'Ține-o la zi: o verificare pe lună în Google și într-un asistent AI, cu întrebarea reală a unui client.',
    ], drum: '/prezenta' },
  { id: 'contact', name: 'Primul contact', loc: 'la ușă', stages: ['Seara, la ușă nu răspunde nimeni', 'La ușă răspunde un mesaj oarecare', 'La ușă răspunde vocea ta, cu pașii următori'],
    opreste: 'Omul ajunge la ușă. Seara, acolo nu răspunde nimeni.',
    tips: [
      'Primul pas: un mesaj automat cu preț, program, cum arată prima întâlnire și numărul 112. Scris de tine, o singură dată.',
      'Primul pas: rescrie răspunsul automat în vocea ta, cu pasul următor concret. Generic înseamnă „nu știu dacă m-a citit”.',
      'Măsoară: câți dintre cei care scriu ajung la prima întâlnire. Cifra asta e tot marketingul tău.',
    ], drum: '/sistem' },
  { id: 'programari', name: 'Programări', loc: 'înăuntru', stages: ['Calendarul se ține de mână', 'Calendarul e online, dar tot tu confirmi', 'Calendarul merge singur'],
    opreste: 'Omul intră. Calendarul se ține încă de mână.',
    tips: [
      'Primul pas: un link de programare cu regulile tale de anulare. Reprogramările dus-întors dispar în prima săptămână.',
      'Primul pas: confirmarea și reamintirea pleacă singure, la ora aleasă de tine. Tu doar aprobi excepțiile.',
      'Verifică o dată pe trimestru ce se poate opri. Un sistem bun e unul pe care îl poți închide.',
    ], drum: '/sistem' },
  { id: 'voce', name: 'Voce', loc: 'pe raft', stages: ['Raftul e gol și regula casei nu e scrisă', 'Pe raft, câte ceva; regula e în cap, nu pe hârtie', 'Raftul se umple în vocea ta, cu regula scrisă'],
    opreste: 'Cabinetul merge. Pe raft nu e încă nimic în vocea ta.',
    tips: [
      'Primul pas: regula casei, scrisă, pe o foaie: nicio informație despre un client nu intră într-un instrument AI. Apoi un singur text, în vocea ta: cum începe o colaborare cu tine.',
      'Primul pas: scrie regula înainte de următorul text. Apoi un articol pe lună, din ce spui oricum în cabinet.',
      'Următorul pas: un ritm. Două texte pe lună, din notițele tale, cu AI la structură și tu la sens.',
    ], drum: '/voce' },
] as const;

export const TOTUL_MERGE = 'Cabinetul merge singur. Rămâne de ținut la zi.';

export const INTREBARI = [
  { d: 0, q: 'Un străin deschide site-ul tău. În 30 de secunde știe cui te adresezi și care e pasul următor?', opts: [['Nu am site, doar Facebook', 2], ['Am site, dar e vag și vechi', 7], ['Da, și apar și în căutările cu AI', 12]] },
  { d: 0, q: 'Dacă cineva caută pe Google „psiholog în orașul tău” sau întreabă un asistent AI, ce găsește despre tine?', opts: [['Nimic, sau un profil vechi', 2], ['Profilul Google, fără site la zi', 7], ['Site, profil și recenzii, toate la zi', 13]] },
  { d: 1, q: 'Ce primește omul în primele 10 minute după ce îți scrie?', opts: [['Nimic, răspund eu când pot', 2], ['Un răspuns automat generic', 7], ['O confirmare în tonul meu, cu pașii următori', 12]] },
  { d: 1, q: 'Când cineva întreabă „cât costă și cum începem?”, de unde vine răspunsul?', opts: [['Îl scriu de fiecare dată de la zero', 2], ['Am un text pe care îl copiez', 7], ['O pagină sau un mesaj automat răspunde pentru mine', 13]] },
  { d: 2, q: 'Câte ore pe săptămână pleacă pe programări, confirmări și facturi?', opts: [['Peste 6 ore', 2], ['Între 3 și 6 ore', 7], ['Sub 3, mare parte automat', 12]] },
  { d: 2, q: 'O reprogramare: cum se întâmplă, de obicei?', opts: [['Mesaje dus-întors, le scriu eu', 2], ['Calendar online, dar tot eu confirm', 7], ['Omul își alege intervalul, confirmarea pleacă singură', 13]] },
  { d: 3, q: 'Ce citește cine nu te cunoaște încă: un articol, o pagină, un newsletter?', opts: [['Nimic, pagina e goală', 2], ['Câte ceva, când apuc', 7], ['Scriu regulat, în vocea mea', 12]] },
  { d: 3, q: 'Ai o regulă scrisă despre ce intră și ce nu intră într-un instrument AI?', opts: [['Nu m-am gândit la asta', 2], ['O am în cap, nu pe hârtie', 7], ['Da, scrisă, și o respect', 13]] },
] as const;

export const PASI = [
  { title: 'Afară: cum te găsește omul', dir: 0 },
  { title: 'La ușă: ce primește când îți scrie', dir: 1 },
  { title: 'Înăuntru: cum se face o programare', dir: 2 },
  { title: 'Pe raft: ce citește cine nu te cunoaște', dir: 3 },
];
