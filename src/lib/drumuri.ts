import { SITE } from '../config';
export const DRUMURI = [
  {
    id: 'prezenta', nr: 1, name: 'Prezență', locuri: 'afară', path: '/prezenta', price: SITE.prices.prezenta,
    problema: 'Omul te caută la 22:00 și găsește un profil vechi, un site vag sau nimic. Nu alege pe cel mai bun. Alege pe cel pe care îl înțelege.',
    livrabile: ['Un site de 3 până la 5 pagini, pe domeniul tău, cu textul scris din interviul cu tine', 'Profilul Google la zi, cu aceleași cuvinte ca site-ul', 'Verificarea „ce vede un asistent AI despre tine”, înainte și după'],
    rezultat: 'Un străin înțelege în 30 de secunde cu cine lucrezi, unde și cum începe.',
    pentru: 'pentru cine n-are site, are unul vechi sau are unul care nu spune nimic',
  },
  {
    id: 'sistem', nr: 2, name: 'Sistem', locuri: 'la ușă și înăuntru', path: '/sistem', price: SITE.prices.sistem,
    problema: 'Totul trece prin tine: confirmări, reprogramări, „cât costă?”, factura. A doua tură începe la 20:00 și nu o plătește nimeni.',
    livrabile: ['Răspunsul la primul contact, în tonul tău, cu pașii următori și cu numărul 112', 'Programări cu confirmare și reamintire automată, după regulile tale de anulare', 'O fișă de primire și legătura cu factura, pe uneltele tale sau alese împreună'],
    rezultat: 'Ce nu cere un om pleacă singur. Tu aprobi excepțiile. La predare primești cheile.',
    pentru: 'pentru cine are cabinetul plin și serile pline de administrativ',
  },
  {
    id: 'voce', nr: 3, name: 'Voce', locuri: 'pe raft', path: '/voce', price: SITE.prices.voce,
    problema: 'Știi ce ai de spus. Ai spus-o de o sută de ori în cabinet. Seara nu mai ai energie să o scrii, și pagina rămâne goală.',
    livrabile: ['Două înregistrări pe lună cu tine, de 20 de minute, pe o temă aleasă împreună', 'Din ele: două articole, un newsletter, patru postări, în vocea ta', 'Tu aprobi fiecare cuvânt înainte să plece. Nimic despre clienți, niciodată'],
    rezultat: 'Ești citit în vocea ta, nu în vocea unui model. Ideile, experiența și judecata rămân ale tale.',
    pentru: 'pentru cine are ce spune și nu are când să scrie',
  },
] as const;
