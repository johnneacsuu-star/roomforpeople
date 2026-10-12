// Un singur loc pentru datele care se pot schimba. Ce e marcat DE CONFIRMAT nu e încă verificat de Ionuț.
export const SITE = {
  url: 'https://roomforpeople.ro',
  name: 'Room for People',
  tagline: 'Oameni în față · sistem în spate',
  founder: 'Ionuț Neacșu',
  team: [
    { name: 'Ionuț Neacșu', role: 'Practica, relația, livrarea', img: '/img/ionut.webp', line: 'Asistent social de 23 de ani, absolvent de psihologie. Vorbește cu tine, desenează harta, scrie raportul, răspunde la email.' },
    { name: 'Andrei N.', role: 'Partea tehnică și AI', img: '/img/andrei.webp', line: 'Expert pe partea tehnică a AI-ului. Creatorul și omul din spatele blackstonerepair.co.uk. Construiește ce rămâne în spate și se asigură că merge singur.', url: 'https://blackstonerepair.co.uk' },
  ],
  email: 'salut@roomforpeople.ro', // DE CONFIRMAT: adresa trebuie creată pe domeniu sau înlocuită
  linkedin: 'https://www.linkedin.com/in/ionutneacsu', // DE CONFIRMAT
  calendarUrl: '', // gol până există un calendar real; nu inventăm un link
  responseTime: 'de obicei în două zile lucrătoare', // DE CONFIRMAT de Ionuț
  prices: { radiografia: 690, radiografiaDupa: 990, prezenta: 2900, sistem: 3400, voce: 2400 },
  journalMinPublished: 3,
  resultEmailToVisitor: false, // devine true doar după ce roomforpeople.ro e verificat în Resend
};

export const PROFESII = [
  { id: 'psi', label: 'Psiholog / psihoterapeut', scurt: 'Psiholog / psihoterapeut', plural: 'psihologi și psihoterapeuți' },
  { id: 'as', label: 'Asistent social independent', scurt: 'Asistent social', plural: 'asistenți sociali independenți' },
  { id: 'co', label: 'Coach', scurt: 'Coach', plural: 'coachi' },
] as const;
