PROMPT PENTRU CLAUDE
ROOM FOR PEOPLE | EXECUTION & IMPLEMENTATION DIRECTIVE
1. ROLUL TĂU

Claude, în acest moment îți schimbi rolul.

Nu mai acționezi ca auditor, consultant sau evaluator.

Devii Principal Product Engineer, Senior UX/UI Designer, Creative Director și Technical Implementation Lead pentru Room for People.

Ai primit auditul strategic complet al website-ului, realizat la 11 octombrie 2026.

Auditul reprezintă documentul de referință pentru acest proces.

Misiunea ta este să EXECUȚI recomandările, să implementezi secțiunile lipsă, să corectezi problemele identificate și să transformi website-ul existent într-un produs digital complet, funcțional și pregătit pentru lansare.

Nu îți cer:

Un nou audit.
O nouă prezentare strategică.
Un document cu recomandări.
O listă de idei fără implementare.
Un redesign generic realizat de la zero.

Îți cer să lucrezi efectiv asupra website-ului.

Trebuie să produci modificări reale în cod, în arhitectura paginilor, în funcționalități și în experiența utilizatorului.

2. PRIMA SARCINĂ: VERIFICĂ CE EXISTĂ ȘI CE LIPSEȘTE

Înainte de a modifica website-ul:

Citește integral auditul strategic.
Inspectează toate fișierele proiectului actual.
Identifică toate paginile și secțiunile deja implementate.
Verifică funcționalitățile existente.
Compară starea actuală cu recomandările auditului.
Identifică exact ce este implementat, ce este implementat parțial și ce lipsește.

Auditul se referă la versiunea 16 a fișierului index.html.

Este posibil ca unele elemente să fi fost deja modificate.

Nu presupune automat că toate problemele din audit sunt încă prezente. Verifică situația actuală.

Creează un inventar intern cu trei categorii:

IMPLEMENTED: există și funcționează.
PARTIALLY IMPLEMENTED: există, dar necesită modificări.
OUTSTANDING: lipsește sau nu funcționează.

După verificare, începe implementarea.

Nu te opri pentru a-mi prezenta o nouă analiză, decât dacă descoperi o problemă critică ce împiedică lucrul.

3. PRIORITATE ABSOLUTĂ: FUNCTIONAL FOUNDATION
P0. Corectează toate funcționalitățile critice

Auditul identifică faptul că website-ul are o problemă fundamentală: vizitatorul nu poate transmite o solicitare reală.

Aceasta este prima prioritate.

3.1. Contact form

Implementează un formular real și funcțional.

Formularul trebuie:

Să permită trimiterea unei solicitări.
Să valideze corect câmpurile.
Să utilizeze un serviciu real de transmitere.
Să afișeze o confirmare numai dacă trimiterea a reușit.
Să trateze erorile.
Să includă protecție anti-spam.
Să colecteze numai informațiile necesare.
Să ofere informații clare despre prelucrarea datelor.

Dacă serviciul de email sau destinatarul nu sunt configurate, implementează tot ceea ce este posibil și solicită-mi doar informațiile necesare finalizării conexiunii.

Nu simula trimiterea.

Nu prezenta o funcționalitate demonstrativă drept una activă.

3.2. Direct contact

Implementează o cale directă de contact cu fondatorul.

Aceasta poate include:

Adresă de email vizibilă.
Formular de contact.
Posibilitatea programării unei discuții de 30 de minute.

Dacă nu există un calendar configurat, pregătește integrarea, dar nu inventa un link de programare.

3.3. Privacy & GDPR

Creează pagina dedicată:

Politica de confidențialitate

Pagina trebuie să explice clar ce date sunt colectate, de ce, unde sunt transmise, cât timp sunt păstrate și ce drepturi are utilizatorul.

Verifică serviciile reale utilizate înainte de a formula aceste informații.

Nu afirma că datele sunt stocate în UE, că website-ul este complet conform GDPR sau că există anumite măsuri de securitate fără dovezi tehnice.

Dacă lipsesc date despre operator, furnizori sau perioadele de retenție, marchează-le pentru confirmarea mea, fără a publica informații inventate.

Textul final trebuie să poată fi revizuit înainte de lansare.

3.4. Technical foundation

Corectează problemele tehnice identificate:

Limba documentului: lang="ro".
Canonical URL.
Open Graph image cu adresă absolută.
Meta title și meta description.
Meta description fără poziționarea inițială ca agenție AI.
Fonturi găzduite local, unde este posibil.
Responsive design.
Dimensiuni adecvate ale elementelor interactive.
Accessibility.
SEO technical foundations.
Sitemap și robots.txt.
Structured data corecte și relevante.
Gestionarea formularelor și a mesajelor de eroare.

Configurează o soluție de analytics adecvată, care respectă cerințele aplicabile de confidențialitate.

Verifică performanța mobilă și urmărește un scor Lighthouse de minimum 90, dacă acesta este realizabil fără compromisuri asupra funcționalității.

Domeniul vizat este roomforpeople.ro, conform auditului.

Nu presupune că domeniul este activ sau că ai acces la configurarea lui. Dacă nu ai acces la hosting, pregătește implementarea pentru publicare și precizează ce rămâne de configurat.

4. RECONSTRUIE HOMEPAGE-UL CONFORM AUDITULUI

Auditul recomandă o nouă structură a homepage-ului, cu 11 secțiuni.

Aceasta este structura pe care vreau să o implementezi.

Nu este suficient să schimbi ordinea elementelor.

Trebuie să reconstruiești experiența vizitatorului, păstrând identitatea Room for People.

SECTION 01: HERO

Folosește direcția recomandată în audit:

„Lucrezi cu oameni. Restul ar trebui să meargă singur.”

Mesajul secundar trebuie să explice imediat:

Cui ne adresăm.
Ce servicii oferim.
Ce rezultat poate obține clientul.
De ce avem experiența necesară.

Include profesiile vizate:

Psihologi, psihoterapeuți, asistenți sociali și coachi.

Integrează vizual conceptul de zi profesională, cu momentul 22:40, conform direcției creative „Atelierul”.

CTA principal:

„Îmi fac Harta cabinetului”

Explică în apropierea butonului că este gratuită, durează aproximativ patru minute și oferă un rezultat imediat.

Trebuie să existe un singur CTA principal, cu o ierarhie vizuală clară.

SECTION 02: CE IEI ACASĂ

Construiește secțiunea pe cele trei promisiuni:

Seara e a ta.

Vocea e a ta.

Datele rămân la tine.

Fiecare trebuie însoțită de o explicație concretă, nu doar de un slogan.

Designul trebuie să fie curat, aerisit și memorabil.

SECTION 03: ZIUA TA

Păstrează conceptul existent.

Scurtează prezentarea la aproximativ cinci momente relevante.

Păstrează scena de la 22:40.

Această secțiune trebuie să creeze recunoaștere și conexiune emoțională.

Nu o transforma într-o poveste artificial dramatică.

Trebuie să vorbească atât profesionistului suprasolicitat, cât și celui care dorește să își dezvolte activitatea.

SECTION 04: CELE TREI DRUMURI

Mută această secțiune mult mai sus în homepage.

Vizitatorul trebuie să înțeleagă rapid că Room for People oferă servicii concrete.

Implementează trei prezentări distincte:

PREZENȚĂ

Website și prezență digitală.

De la 2.900 lei.

SISTEM

Primul contact, programări, confirmări și integrarea proceselor administrative.

De la 3.400 lei.

VOCE

Conținut profesional, articole, newsletter și comunicare.

De la 2.400 lei.

Pentru fiecare:

Explică problema rezolvată.
Prezintă livrabilele concrete.
Explică rezultatul așteptat.
Afișează prețul de pornire.
Include un CTA.
Creează o legătură către pagina dedicată serviciului.

Foarte important: fiecare dintre aceste trei servicii trebuie să aibă propria pagină funcțională.

Nu doar un card pe homepage.

SECTION 05: CINE CONSTRUIEȘTE

Prezintă fondatorul și experiența sa profesională.

Folosește o biografie la persoana a treia, coerentă cu restul website-ului.

Subliniază experiența profesională în asistență socială și pregătirea academică în psihologie.

Nu transforma secțiunea într-un CV.

Scopul este să explici de ce Room for People înțelege nevoile acestor profesioniști.

Pregătește locul pentru o fotografie reală a fondatorului.

Nu folosi un portret generat artificial.

Dacă fotografia nu este disponibilă, utilizează temporar compoziția grafică existentă, fără a prezenta un personaj generat drept fondator.

SECTION 06: REGULA CASEI

Aceasta reprezintă unul dintre cele mai valoroase elemente ale website-ului.

Păstreaz-o.

Păstrează și Protocolul semafor.

Integrează principiul:

„Profesionistul rămâne autorul. Nimic nu pleacă în numele tău fără să-l fi citit.”

Regula privind neintroducerea informațiilor despre clienți în instrumente AI trebuie formulată clar și susținută de modul în care sunt construite efectiv serviciile.

Nu elimina această secțiune pentru a face pagina mai comercială.

SECTION 07: HARTA CABINETULUI

Aceasta este o componentă esențială.

Auditul arată că instrumentul există, dar experiența este prea lungă pe telefon și rezultatele nu sunt păstrate.

Reproiectează-l.

Cerințe:

Păstrează cele opt întrebări relevante.
Grupează-le câte două pe ecran.
Patru pași pe telefon.
Navigare înainte și înapoi.
Indicator de progres.
Rezultate prezentate imediat.
Vizualizare clară a principalelor zone de îmbunătățire.
Recomandări personalizate, dar fără promisiuni inventate.

Pregătește posibilitatea generării unui PDF cu rezultatul.

Dacă există infrastructura necesară, implementează și trimiterea voluntară a rezultatului prin email.

Vizitatorul trebuie să își poată vedea rezultatul gratuit, fără a fi obligat să își introducă adresa de email.

Folosește peste tot numele:

Harta cabinetului

Elimină confuziile dintre „scor”, „test”, „fișă” și „hartă”.

SECTION 08: RADIOGRAFIA

Mută serviciul Radiografia după Harta cabinetului.

Prețul identificat în audit este 690 lei.

Explică:

Ce reprezintă.
Pentru cine este.
Ce primește clientul.
Cum se desfășoară procesul.
Ce se întâmplă după finalizare.

Folosește livrabilele detaliate în audit.

Creează o pagină dedicată.

Nu inventa rezultate, garanții sau termene care nu sunt confirmate de mine.

SECTION 09: DIN JURNAL

Construiește infrastructura necesară pentru publicarea articolelor.

Jurnalul trebuie să fie o componentă educațională reală, nu o secțiune decorativă.

Pregătește:

Pagina principală a Jurnalului.
Structura articolelor.
Categorii de conținut.
Afișarea datei publicării.
Navigarea între articole.
Posibilitatea de a adăuga articole noi fără modificarea manuală a homepage-ului.

Poți pregăti articole în format draft.

Nu afișa pe homepage trei articole ca fiind publicate dacă ele nu există.

Secțiunea „Din Jurnal” trebuie să apară numai după publicarea a minimum trei articole reale.

Elimină promisiunile de tip „în pregătire” care nu aduc valoare vizitatorului.

SECTION 10: UN OM, NU UN SISTEM

Construiește o secțiune scurtă și personală.

Aceasta trebuie să elimine ultima barieră de încredere.

Vizitatorul trebuie să înțeleagă că în spatele Room for People se află un profesionist real.

Include:

Fondatorul.
O invitație la dialog.
Emailul direct.
Posibilitatea de programare a unei discuții.

Nu inventa o echipă sau o structură organizațională care nu există.

SECTION 11: PRIMUL PAS

Reconstruiește secțiunea finală de conversie.

Trebuie să fie simplă, clară și funcțională.

Vizitatorul trebuie să știe exact ce se întâmplă după ce trimite formularul.

Dacă există opțiunea de solicitare a Radiografiei, explică faptul că este un serviciu plătit, iar bifarea nu reprezintă efectuarea unei achiziții.

Separă eventualul consimțământ pentru newsletter de cererea de contact.

Nu folosi checkbox-uri preselectate pentru marketing.

5. PAGINI NOI OBLIGATORII

Pe lângă homepage, creează următoarele pagini, dacă nu există deja.

A. PREZENȚĂ

O pagină completă despre construirea unui website profesional.

Include:

Pentru cine este.
Ce problemă rezolvă.
Ce include serviciul.
Etapele colaborării.
Prețul de pornire.
Un exemplu ilustrativ, marcat clar dacă nu este un proiect real.
Un CTA funcțional.
B. SISTEM

O pagină completă despre integrarea proceselor administrative.

Explică printr-un exemplu concret:

Ce se întâmplă când cineva contactează cabinetul?

Cum funcționează confirmarea?

Cum se gestionează programările?

Ce rămâne sub controlul profesionistului?

Creează o reprezentare vizuală a procesului.

Folosește un exemplu fictiv, identificat clar, fără date reale despre clienți.

C. VOCE

O pagină despre crearea și administrarea conținutului profesional.

Explică foarte clar că ideile, experiența și judecata profesională aparțin clientului.

Sistemele pot ajuta la structurare și redactare, dar profesionistul aprobă materialele.

D. RADIOGRAFIA

O pagină dedicată procesului de analiză.

Prezintă toate livrabilele menționate în audit.

E. CINE SUNTEM / FILOZOFIA

O pagină care dezvoltă povestea Room for People.

Trebuie să răspundă la:

De ce există?

Ce valori are?

De ce lucrează exclusiv sau prioritar cu profesioniști care lucrează cu oameni?

Ce diferențiază experiența fondatorului?

Care sunt limitele asumate?

F. CONFIDENȚIALITATE

O pagină reală, adaptată serviciilor și infrastructurii efective.

G. JURNAL

Infrastructura editorială pregătită pentru publicare.

H. CONTACT

O pagină simplă, profesională și complet funcțională.

6. DIRECȚIA VIZUALĂ: ATELIERUL

Auditul recomandă explicit direcția C: Atelierul.

Implementeaz-o.

Nu schimba inutil identitatea vizuală existentă.

Păstrează:

Logoul.
Paleta de culori.
Pruna.
Fundalurile inspirate de hârtie.
Markerul.
Metafora ușii.
Limbajul grafic desenat.

Dar ridică execuția vizuală la nivel profesional.

Vreau un website cu personalitate proprie, nu un template de AI agency.

Cerințe vizuale
Tipografie mult mai lizibilă.
Text principal confortabil de citit pe telefon.
Minimum 13 px pentru textul obișnuit secundar și 12 px pentru etichete.
Mai puține etichete monospace cu majuscule.
Mai mult spațiu între secțiuni.
Ierarhie vizuală clară.
Eliminarea imaginilor generate cu camere goale.
Patru ilustrații principale coerente: planul zilei, harta, primul contact și cele trei drumuri.
Un limbaj grafic unitar pentru personaje și elementele desenate.
Animații discrete, care nu compromit accesibilitatea sau performanța.

Respectă preferințele de mișcare redusă ale utilizatorului.

Păstrează interacțiunile principale recomandate:

Ușa care se deschide.
Desenele care se completează progresiv.

Nu adăuga animații doar pentru a crea impresia de sofisticare.

Standardul vizual trebuie să fie cel al unui studio digital internațional, dar cu identitatea specifică Room for People.

7. IMPLEMENTEAZĂ ȘI ELEMENTELE OUTSTANDING CU VALOARE IMEDIATĂ

Auditul identifică câteva oportunități care pot fi dezvoltate fără a construi o platformă complexă.

Vreau să le tratezi ca funcționalități concrete, nu doar ca idei.

7.1. Calculatorul „A doua tură”

Construiește un calculator interactiv prin care un profesionist poate estima timpul consumat de activitățile administrative.

Folosește valori introduse de utilizator.

Afișează clar ipotezele și modul de calcul.

Nu prezenta timpul calculat drept timp garantat economisit.

Calculatorul trebuie să ofere o experiență interesantă și utilă.

7.2. Resursa „Regula casei”

Pregătește o resursă descărcabilă, cu o identitate vizuală coerentă.

Poate include Regula casei și Protocolul semafor.

Nu atribui automat clasificărilor semaforului statut de recomandări juridice universale.

7.3. Șablonul de consimțământ

Pregătește structura unei resurse educaționale despre consimțământul pentru utilizarea instrumentelor digitale.

Diferențiază cerințele profesionale relevante.

Nu o prezenta ca document juridic definitiv.

Lasă conținutul pentru verificare și aprobare înainte de publicare.

7.4. Oglinda AI

Auditul recomandă transformarea acesteia într-un serviciu manual.

Nu construi acum un agent complex.

Pregătește prezentarea serviciului, procesul și posibilitatea de solicitare.

Dacă nu există încă un proces operațional definit, marchează serviciul ca neactiv și nu promite livrare în 48 de ore.

8. CE NU TREBUIE SĂ IMPLEMENTEZI ACUM

Nu transforma această etapă într-un proiect imposibil de finalizat.

Următoarele apar în audit ca dezvoltări ulterioare și trebuie păstrate într-un backlog separat:

Comunitatea profesională.
Agentul AI de primul contact pentru clienții cabinetelor.
Aplicațiile complexe la comandă.
Oferta dedicată echipelor.
Studiul real „Un cabinet, 30 de zile”.
Platforma educațională extinsă.
Biblioteca completă de 30 de situații cu semafor.
Versiunea internațională a businessului.

Nu construi aceste funcționalități înainte de validarea condițiilor menționate în audit.

Totuși, arhitectura website-ului trebuie să permită integrarea lor ulterior, fără reconstrucție completă.

Nu introduce secțiuni goale sau promisiuni de funcționalități inexistente.

9. REGULI DE EXECUȚIE

Aceste reguli sunt obligatorii.

Nu distruge ce funcționează

Auditul identifică elemente foarte valoroase ale brandului.

Nu le elimina fără un motiv concret.

Nu inventa

Nu crea:

Testimoniale fictive.
Studii de caz inexistente.
Membri ai echipei inexistenți.
Fotografii prezentate drept reale.
Statistici de performanță inventate.
Rezultate financiare fictive.
Garanții neaprobate.
Certificări sau declarații de conformitate nejustificate.
Nu transforma site-ul într-o agenție AI generică

Room for People este construit în jurul relației umane.

Această diferențiere trebuie să fie evidentă în design, conținut și interacțiuni.

Nu publica automat conținut nou

Poți redacta materiale și construi pagini.

Dar conținutul care include afirmații juridice, profesionale, comerciale sau autobiografice trebuie verificat înainte de publicare.

Nu amâna execuția pentru lucruri neesențiale

Dacă lipsește o fotografie reală, continuă dezvoltarea.

Dacă lipsește o integrare externă, pregătește infrastructura.

Dacă trebuie confirmat un text, creează-l ca draft.

Nu opri întregul proiect pentru o singură informație lipsă.

Nu compromite siguranța datelor

Nu introduce date reale despre clienți în instrumente AI.

Folosește date fictive în exemple.

Nu activa colectarea sau transmiterea datelor fără a înțelege traseul lor și fără măsuri adecvate.

Nu face modificări ireversibile fără confirmare

Păstrează o versiune de siguranță a proiectului.

Nu modifica DNS, nu activa servicii plătite și nu publica documente juridice neconfirmate fără acordul meu.

10. ORDINEA OBLIGATORIE DE EXECUȚIE

Respectă următoarea ordine:

ETAPA 1: FUNCȚIONALITATE

Repară formularul, contactul, confidențialitatea și problemele tehnice esențiale.

ETAPA 2: STRUCTURĂ

Reorganizează homepage-ul, serviciile și navigația.

ETAPA 3: PAGINI NOI

Creează paginile individuale pentru Prezență, Sistem, Voce, Radiografia, Cine suntem și Contact.

ETAPA 4: EXPERIENȚĂ

Reproiectează Harta cabinetului și implementează funcționalitățile interactive fezabile.

ETAPA 5: DESIGN

Aplică direcția Atelierul și corectează experiența vizuală pe desktop și mobil.

ETAPA 6: CONȚINUT ȘI RESURSE

Pregătește Jurnalul, resursele educaționale și calculatorul.

ETAPA 7: TESTARE

Testează întreaga experiență.

Poți pregăti local etapele care nu depind de servicii externe în timp ce aștepți configurările necesare. Totuși, nu considera prima etapă finalizată până când formularul nu a fost testat real și publicarea pe domeniu nu a fost verificată.

Respectă porțile de validare din audit. Nu declara Fazele 3 și 4 finalizate în lipsa condițiilor comerciale cerute.

11. DEFINITION OF DONE

Nu considera proiectul finalizat doar pentru că website-ul arată mai bine.

Vreau să verifici:

Funcționalitate

Formularele trimit cu adevărat.
Mesajele de succes și eroare sunt corecte.
Linkurile funcționează.
Navigarea între pagini funcționează.
CTA-urile duc la destinația promisă.
Instrumentele interactive produc rezultate reale.

Experiență

Homepage-ul explică ce face businessul încă din primul ecran.
Serviciile sunt ușor de identificat.
Există o cale de contact vizibilă.
Navigarea mobilă este clară.
Harta cabinetului poate fi completată ușor.

Design

Aspectul este consecvent.
Tipografia este lizibilă.
Elementele vizuale sunt coerente.
Nu există imagini generice care contrazic identitatea brandului.
Interfața se adaptează corect la dimensiuni diferite.

Încredere

Există o politică de confidențialitate adecvată.
Nu există promisiuni nejustificate.
Prețurile sunt prezentate transparent.
Fondatorul este prezentat corect.
Limitele utilizării AI sunt clare.

Testează cel puțin la 390 px și 1400 px, dimensiunile utilizate în audit.

Dacă poți utiliza un browser automatizat, inspectează vizual paginile și realizează capturi înainte și după.

Dacă ai acces la instrumentele de testare, rulează verificările relevante.

Nu declara un test reușit dacă nu l-ai efectuat.

12. CUM VREAU SĂ RAPORTEZI REZULTATUL

După implementare, prezintă un raport scurt și verificabil.

Folosește următoarele categorii:

A. IMPLEMENTED

Ce ai implementat efectiv și unde.

B. IMPROVED

Ce exista și ai îmbunătățit.

C. TESTED

Ce ai testat și care sunt rezultatele.

D. BLOCKED

Ce nu ai putut finaliza, de ce și ce informații sau acces ai nevoie de la mine.

E. FUTURE DEVELOPMENT

Ce rămâne pentru Fazele 3 și 4 ale auditului.

Include lista fișierelor create sau modificate și, unde este posibil, capturi de ecran.

Dacă există un repository, păstrează modificările organizate și ușor de verificat.

Nu raporta drept implementată o funcționalitate care există doar în cod, dar nu poate fi utilizată efectiv.

13. INSTRUCȚIUNEA FINALĂ

Claude, aceasta nu mai este o etapă de brainstorming.

Auditul a fost făcut.

Direcția strategică a fost stabilită.

Acum trebuie să transformi recomandările în realitate.

Vreau să acționezi cu autonomia și atenția unui senior product engineer care răspunde direct de calitatea produsului.

Nu mă întreba dacă vreau să implementezi fiecare recomandare în parte. Ai acordul meu să implementezi modificările care nu necesită decizii comerciale, juridice sau acces extern suplimentar.

Întreabă-mă doar când este necesară o informație pe care nu o poți determina în mod verificabil.

Dacă întâmpini un blocaj, continuă cu celelalte activități independente.

Nu înlocui implementarea cu explicații despre cum ar trebui făcută.

Nu crea un website diferit de Room for People.

Construiește pe ceea ce există.

Păstrează identitatea.

Corectează slăbiciunile.

Ridică standardul de execuție.

Scopul nu este să bifăm recomandările auditului. Scopul este să avem un website care funcționează impecabil, arată excepțional și oferă o experiență distinctă profesioniștilor cărora ne adresăm.

Începe acum cu inspecția codului actual, apoi execută lucrările în ordinea stabilită.