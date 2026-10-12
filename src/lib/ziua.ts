// Ziua ta: cinci momente, aceeași zi, două seri. Un scenariu pe profesie. Fără dramă; recunoaștere.
export type Moment = { ora: string; azi: string; aziNota: string; sistem: string; sistemNota: string };
export type Scenariu = { id: 'psi' | 'as' | 'co'; label: string; lead: string; momente: Moment[]; phone: [string, string][]; raspuns: { ora: string; text: string } };
// `raspuns` e produsul: răspunsul scris o singură dată de profesionist, care pleacă singur seara. Exemple cu cabinete fictive.

export const ZIUA: Scenariu[] = [
  {
    id: 'psi', label: 'Psiholog / psihoterapeut',
    lead: 'Ședințele nu se ating. Nici relația, nici judecata ta. Se schimbă doar ce se întâmplă în jurul lor.',
    momente: [
      { ora: '07:40', azi: 'Patru confirmări, scrise de mână', aziNota: 'Aceleași cuvinte, a patra oară săptămâna asta.', sistem: 'Confirmările au plecat singure', sistemNota: 'La ora aleasă de tine, în tonul tău.' },
      { ora: '13:10', azi: 'O reprogramare, trei mesaje dus-întors', aziNota: 'Între două ședințe, cu telefonul sub masă.', sistem: 'Omul și-a ales singur alt interval', sistemNota: 'Din linkul tău, cu regulile tale de anulare.' },
      { ora: '20:30', azi: 'Postarea amânată', aziNota: 'Știi ce vrei să spui. Nu mai ai energie să o scrii.', sistem: 'Postarea te așteaptă pentru aprobare', sistemNota: 'Pornită din notițele tale, în vocea ta.' },
      { ora: '22:40', azi: '„Cât costă prima ședință?”', aziNota: 'Răspunzi acum sau mâine? Dacă mâine, poate scrie altcuiva.', sistem: 'Răspuns la logistică, fără tine', sistemNota: 'Preț, program, cum arată prima întâlnire, scrise de tine dinainte. Niciun AI nu citește mesajul. Fiecare răspuns conține: „Dacă ești în pericol, sună acum la 112.”' },
      { ora: '23:10', azi: 'Factura de luna trecută', aziNota: 'Și tabelul cu plățile.', sistem: 'Seara e a ta', sistemNota: 'Nimic de recuperat.' },
    ],
    phone: [['22:40', 'Bună seara, cât costă o ședință? Și dacă lucrați și online?'], ['22:41', 'Scuze că scriu târziu. Pot muta joi la 18?'], ['22:52', 'Ne-ați fost recomandată. Mai primiți clienți noi?']],
    raspuns: { ora: '22:41', text: 'Bună seara. Sunt Andreea P., psihoterapeut. Îți mulțumesc că mi-ai scris. O ședință durează 50 de minute și costă 250 de lei. Lucrez în Cluj și online. Prima întâlnire e o discuție de 30 de minute, în care vedem dacă ne potrivim. Îți poți alege ora din linkul de mai jos. Citesc mesajul tău mâine, la 9:00. Dacă ești în pericol, sună acum la 112.' },
  },
  {
    id: 'as', label: 'Asistent social independent',
    lead: 'Vizitele nu se ating. Nici evaluarea, nici decizia ta. Se schimbă doar ce se întâmplă în jurul lor.',
    momente: [
      { ora: '07:30', azi: 'Trimiterea de aseară, recopiată din WhatsApp în dosar', aziNota: 'A treia săptămâna asta. Fără confirmare către cine a trimis-o.', sistem: 'Trimiterea a intrat singură în registru', sistemNota: 'Cu confirmare către partener și cu pasul următor, în cuvintele tale.' },
      { ora: '13:20', azi: 'Școala sună să întrebe ce oferiți, concret', aziNota: 'A patra explicație a aceleiași fișe de servicii.', sistem: 'Fișa de servicii a plecat singură, la zi', sistemNota: 'O pagină: publicul, aria de lucru, cum începe o colaborare.' },
      { ora: '20:30', azi: 'Raportul de scris', aziNota: 'Structura, de la zero, cu ochii închiși.', sistem: 'Structura raportului te așteaptă', sistemNota: 'Pregătită din notele tale dictate, fără nicio dată de caz în vreun instrument AI.' },
      { ora: '22:40', azi: 'Un părinte scrie: „mă puteți ajuta?”', aziNota: 'Răspunzi acum sau mâine? Mâine poate nu mai scrie.', sistem: 'Răspuns cu pașii și limitele serviciului', sistemNota: 'Ce oferi, cui, cum începe, scrise de tine dinainte. Niciun AI nu citește mesajul. Fiecare răspuns conține numărul 112 pentru urgențe.' },
      { ora: '23:10', azi: 'Facturile către două organizații', aziNota: 'Și tabelul cu orele.', sistem: 'Seara e a ta', sistemNota: 'Nimic de recuperat.' },
    ],
    phone: [['22:40', 'Bună seara, sunt de la școală. Avem o familie, puteți prelua? Ce acte trebuie?'], ['22:46', 'Mă puteți ajuta? Nu știu cu cine să vorbesc.'], ['22:58', 'Raportul pentru primărie e gata? Îl trebuie mâine la 9.']],
    raspuns: { ora: '22:41', text: 'Bună seara. Sunt Mihai D., asistent social. Mulțumesc pentru mesaj. Lucrez cu familii și cu școli din județul Argeș. Primul pas e o discuție de 20 de minute, pe care o puteți alege din linkul de mai jos; apoi vă trimit fișa de servicii și acordul. Vă rog să nu scrieți aici nume sau detalii despre familie. Citesc mesajul mâine, la 9:00. Dacă un copil e în pericol acum, sunați la 112.' },
  },
  {
    id: 'co', label: 'Coach',
    lead: 'Sesiunile nu se ating. Nici procesul, nici întrebările tale. Se schimbă doar ce se întâmplă în jurul lor.',
    momente: [
      { ora: '07:45', azi: 'Materialele sesiunii 3, trimise manual', aziNota: 'Pentru fiecare client, pe rând, din memorie.', sistem: 'Materialele au plecat singure', sistemNota: 'La ora stabilită, pentru fiecare etapă a programului.' },
      { ora: '13:15', azi: '„Ce include, concret, programul?”', aziNota: 'Al treilea om săptămâna asta care nu a înțeles pagina.', sistem: 'Pagina de program a răspuns clar', sistemNota: 'Pentru cine, tema, formatul, primul pas. Omul și-a rezervat singur discuția.' },
      { ora: '20:30', azi: 'Newsletterul început în iunie', aziNota: 'Știi ce vrei să spui. Nu mai ai energie să o scrii.', sistem: 'Ciorna te așteaptă pentru aprobare', sistemNota: 'Din notițele tale după sesiuni, în vocea ta, fără nimic despre clienți.' },
      { ora: '22:40', azi: 'O cerere de discuție, fără context', aziNota: 'Răspunzi acum sau mâine? Mâine poate scrie altcuiva.', sistem: 'Confirmare plus trei întrebări de pregătire', sistemNota: 'Scrise de tine dinainte; niciun AI nu citește mesajul. Omul vine la discuție știind ce explorați.' },
      { ora: '23:10', azi: 'Factura și recapitularea', aziNota: 'Pentru clientul de la 16:00.', sistem: 'Seara e a ta', sistemNota: 'Nimic de recuperat.' },
    ],
    phone: [['22:40', 'Am văzut pagina programului. Ce include, mai exact?'], ['22:43', 'Nu am primit materialele de la sesiunea 3.'], ['22:57', 'Putem vorbi 15 minute săptămâna asta? Nu știu dacă e pentru mine.']],
    raspuns: { ora: '22:41', text: 'Bună seara. Sunt Ioana R., coach. Mulțumesc că mi-ai scris. Programul are șase sesiuni de 60 de minute, online, și costă 1.800 de lei. Începem cu o discuție de 30 de minute, fără cost, ca să vedem dacă e pentru tine. Îți alegi ora din linkul de mai jos. Citesc mesajul tău mâine, la 9:00. Dacă ești în pericol, sună acum la 112.' },
  },
];
