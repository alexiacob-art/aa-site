// Articole blog. Fără cifre inventate: prețurile și duratele depind de proiect și se confirmă în ofertă.
export const articles = [
  {
    slug: 'ce-putere-trebuie-sa-aiba-aerul-conditionat',
    title: 'Ce putere (BTU/kW) trebuie să aibă aerul condiționat pentru camera ta',
    desc: 'Cum alegi puterea unui aparat de aer condiționat: ce înseamnă BTU și kW, de ce suprafața singură nu ajunge, ce mărește sarcina termică și ce se întâmplă dacă alegi prea mic sau prea mare.',
    img: 'split-living',
    imgAlt: 'Unitate interioară de aer condiționat într-un living',
    date: '2026-11-09',
    min: 5,
    service: 'vrf-climatizare',
    answer: 'Puterea potrivită depinde de sarcina termică a încăperii, nu doar de metrii pătrați: contează geamurile și orientarea, etajul și acoperișul, izolația, numărul de persoane și aparatele care produc căldură. Pentru conversie: 1 kW = 3.412 BTU/h, deci 9.000 BTU/h înseamnă cam 2,6 kW, 12.000 BTU/h cam 3,5 kW, iar 18.000 BTU/h cam 5,3 kW. Un aparat prea mic nu ține pasul vara, unul prea mare pornește și se oprește des. Pentru o estimare rapidă folosește calculatorul nostru, iar pentru spații mari sau comerciale cere un calcul de la un proiectant.',
    body: `
<h2>BTU și kW: aceeași mărime, unități diferite</h2>
<p>Puterea de răcire a unui aparat se dă fie în kW, fie în BTU/h. Sunt unități pentru aceeași mărime, iar conversia este fixă: <b>1 kW = 3.412 BTU/h</b>. Aparatele din comerț au dimensiuni standard, iar tabelul de mai jos arată cam ce înseamnă fiecare în kW.</p>
<table>
<thead><tr><th>BTU/h</th><th>kW (aprox.)</th></tr></thead>
<tbody>
<tr><td>9.000</td><td>2,6</td></tr>
<tr><td>12.000</td><td>3,5</td></tr>
<tr><td>18.000</td><td>5,3</td></tr>
<tr><td>24.000</td><td>7,0</td></tr>
</tbody></table>
<p>Valorile sunt rotunjite. Fișa tehnică a aparatului dă puterea nominală exactă.</p>

<h2>De ce suprafața singură nu e suficientă</h2>
<p>Regulile de tipul „atâția BTU pe metru pătrat” dau o idee de început, dar două camere de aceeași mărime pot avea nevoie de puteri foarte diferite. Aparatul trebuie să scoată din cameră căldura care intră sau se produce acolo. Cele mai importante surse sunt:</p>
<ul>
<li><b>Geamurile:</b> suprafața lor, orientarea (sud și vest încălzesc cel mai mult după-amiaza) și dacă au jaluzele sau folie.</li>
<li><b>Etajul și acoperișul:</b> o cameră de la ultimul etaj, sub terasă sau mansardă, primește mult mai multă căldură decât una de la mijlocul clădirii.</li>
<li><b>Izolația pereților și a acoperișului.</b></li>
<li><b>Înălțimea camerei:</b> volumul de aer de răcit contează, nu doar podeaua.</li>
<li><b>Persoanele:</b> fiecare persoană degajă căldură, iar într-o sală cu mulți oameni se simte clar.</li>
<li><b>Aparatele electrice:</b> calculatoare, iluminat, cuptoare, echipamente de birou sau de bucătărie.</li>
<li><b>Aerul proaspăt:</b> dacă se aduce aer din exterior, el trebuie răcit și el.</li>
</ul>

<h2>Ce se întâmplă dacă alegi greșit</h2>
<ul>
<li><b>Prea mic:</b> în zilele cele mai calde aparatul merge continuu și nu atinge temperatura dorită.</li>
<li><b>Prea mare:</b> costă mai mult, iar la sarcini mici pornește și se oprește des, ceea ce înseamnă confort mai slab și uzură mai mare. Un aparat mai mare nu este automat mai bun.</li>
</ul>
<p>Scopul este o putere apropiată de sarcina reală, cu o mică rezervă.</p>

<h2>Cum o estimezi în câțiva pași</h2>
<ol>
<li>Notează suprafața, înălțimea și etajul camerei.</li>
<li>Notează geamurile: câte, cât de mari, spre ce parte.</li>
<li>Numără persoanele care stau de obicei în cameră și aparatele care produc căldură.</li>
<li>Introdu datele în <a href="/calculator-hvac/">calculatorul HVAC</a>. Primești o estimare în kW și în BTU/h.</li>
<li>Alege din gama de aparate pe cea mai apropiată putere, de preferat cu inverter, care își reglează singură puterea.</li>
</ol>
<p>Estimarea de pe site este orientativă. Pentru un spațiu mare, o clădire publică sau un sistem cu mai multe unități interioare, dimensionarea se face prin calcul de sarcină termică, cu datele reale ale clădirii.</p>

<h2>Contează și montajul</h2>
<p>Un aparat bine ales poate da rezultate slabe dacă este montat prost: trasee prea lungi, pante greșite la condens, unitatea exterioară într-un loc fără aer sau lipsa vidării circuitului. Montajul făcut de un instalator care respectă tehnologia contează cât alegerea puterii.</p>
`,
    faq: [
      ['Câți BTU îmi trebuie pentru o cameră?', 'Depinde de sarcina termică a camerei: geamuri, orientare, etaj, izolație, persoane și aparate. Suprafața dă doar o primă idee. Pentru o estimare, folosește calculatorul HVAC de pe site.'],
      ['Cât înseamnă 12.000 BTU în kW?', 'Cam 3,5 kW, pentru că 1 kW este 3.412 BTU/h.'],
      ['Este mai bine să aleg un aparat mai puternic, „să fiu sigur”?', 'Nu neapărat. Un aparat prea mare pornește și se oprește des, costă mai mult și poate da un confort mai slab. Alege o putere apropiată de necesar, cu o mică rezervă.'],
      ['Când este nevoie de calcul de proiectant?', 'Pentru încăperi mari, clădiri publice, spații cu mulți oameni sau cu aport mare de aer proaspăt și când se montează un sistem cu mai multe unități interioare.']
    ]
  },
  {
    slug: 'filtre-aer-centrala-tratare-aer-clase-iso-16890',
    title: 'Filtre pentru centrala de tratare a aerului: clase, ISO 16890 și când se schimbă',
    desc: 'Ce înseamnă clasele de filtre G4, M5, F7 și noile grupe ISO 16890 (ePM1, ePM2,5, ePM10), cum se corelează orientativ și cum stabilești când se schimbă filtrele unei CTA.',
    img: 'cta-ventas-acoperis-1',
    imgAlt: 'Centrală de tratare a aerului montată pe acoperiș',
    date: '2026-11-09',
    min: 5,
    service: 'ventilatie-cta',
    answer: 'Standardul ISO 16890 a înlocuit EN 779:2012 pentru filtrele de ventilație generală. Filtrele se clasifică după eficiența pe particule PM1, PM2,5 și PM10, iar un filtru intră într-o grupă (ePM1, ePM2,5, ePM10) doar dacă atinge cel puțin 50%. Corespondența cu vechile clase G, M, F este orientativă, nu directă. Momentul schimbării depinde de căderea de presiune și de condițiile locului, nu de un calendar fix: urmărești diferența de presiune pe filtru și cerințele producătorului.',
    body: `
<h2>De la G4, M5, F7 la ISO 16890</h2>
<p>Ani la rând, filtrele de aer pentru ventilație se numeau G4, M5, F7 și așa mai departe, după standardul EN 779. Acesta a fost înlocuit de <b>ISO 16890</b>, care măsoară eficiența filtrului pe masa de particule de diferite mărimi. Pe fișele tehnice vei întâlni în continuare ambele denumiri, de aceea e util să le știi pe amândouă.</p>

<h2>Grupele ISO 16890</h2>
<p>Particulele se grupează după mărime: PM10 (cele mai mari dintre cele considerate), PM2,5 și PM1 (cele mai fine). Un filtru trebuie să rețină cel puțin 50% dintr-o fracțiune ca să intre în grupa ei:</p>
<table>
<thead><tr><th>Grupă</th><th>Ce înseamnă</th></tr></thead>
<tbody>
<tr><td>ISO Coarse</td><td>Reține sub 50% din PM10. Filtre grosiere, de protecție.</td></tr>
<tr><td>ISO ePM10</td><td>Cel puțin 50% din PM10</td></tr>
<tr><td>ISO ePM2,5</td><td>Cel puțin 50% din PM2,5</td></tr>
<tr><td>ISO ePM1</td><td>Cel puțin 50% din PM1</td></tr>
</tbody></table>
<p>Pe filtru sau în fișa tehnică vezi și procentul, de exemplu „ePM1 60%”. Procentele se dau din 5 în 5.</p>

<h2>Corespondența cu clasele vechi</h2>
<p>Nu există o echivalență directă, pentru că metodele de încercare sunt diferite. Tabelul de mai jos este orientativ și provine din datele publicate de producători. Pentru un filtru concret contează valoarea din fișa lui tehnică.</p>
<table>
<thead><tr><th>Clasă veche</th><th>Aproximativ în ISO 16890</th></tr></thead>
<tbody>
<tr><td>G3, G4</td><td>ISO Coarse (în jur de 80–90%)</td></tr>
<tr><td>M5</td><td>ePM10 cel puțin 50%</td></tr>
<tr><td>M6</td><td>ePM2,5 cel puțin 50%</td></tr>
<tr><td>F7</td><td>ePM1 cel puțin 50%, ePM2,5 cel puțin 65%</td></tr>
<tr><td>F8</td><td>ePM1 cel puțin 65%</td></tr>
<tr><td>F9</td><td>ePM1 cel puțin 80%</td></tr>
</tbody></table>
<p>De exemplu, un filtru F7 poate fi înlocuit cu unul marcat „ISO ePM1 60%”, dacă producătorul CTA acceptă.</p>

<h2>Cum alegi clasa potrivită</h2>
<ul>
<li>Respecți ce cere <b>proiectul</b> și <b>producătorul centralei</b>. Ventilatorul și carcasa sunt calculate pentru anumite filtre.</li>
<li>Un filtru mai fin înseamnă rezistență mai mare la trecerea aerului. Dacă pui o clasă mai fină decât a fost prevăzută, debitul și consumul se schimbă.</li>
<li>Pentru școli, creșe și săli de sport, un etaj de prefiltrare și unul de filtrare fină, ca în multe proiecte, protejează centrala și aerul din clase.</li>
</ul>

<h2>Când se schimbă filtrele</h2>
<p>Nu există o dată universală. Un filtru se schimbă când a ajuns la căderea de presiune finală indicată de producător, sau mai devreme dacă este deteriorat, ud ori vizibil colmatat. Practic:</p>
<ol>
<li>Măsoară căderea de presiune pe fiecare etaj de filtrare, cu manometru sau presostat diferențial.</li>
<li>Compară cu valoarea finală din fișa filtrului.</li>
<li>Inspectează vizual filtrele la fiecare vizită de mentenanță.</li>
<li>Notează data și clasa montată în fișa echipamentului.</li>
</ol>
<p>Locul contează: lângă trafic intens, în perioada polenului sau în zone cu praf, filtrele se colmatează mai repede.</p>

<h2>Ce se întâmplă cu filtrele prea vechi</h2>
<ul>
<li>Crește rezistența, scade debitul de aer și, la unele sisteme, crește consumul ventilatorului.</li>
<li>Schimbătoarele de căldură și bateriile se murdăresc, iar randamentul scade.</li>
<li>Un filtru rupt sau montat strâmb lasă aerul să treacă pe lângă el.</li>
</ul>
<p>În clădirile publice, schimbarea filtrelor la timp se face cel mai simplu printr-un <a href="/servicii/service-mentenanta/">contract de mentenanță</a> cu verificări programate.</p>
`,
    faq: [
      ['Ce înseamnă ePM1 pe un filtru?', 'Că filtrul reține cel puțin 50% din particulele fine din fracțiunea PM1, conform ISO 16890. Procentul exact este scris lângă, de exemplu ePM1 60%.'],
      ['Un filtru F7 este același lucru cu ePM1?', 'Nu exact. Corespondența este orientativă, pentru că metodele de încercare diferă. Un F7 se apropie de un filtru ePM1 cu cel puțin 50%. Verifică fișa tehnică.'],
      ['La cât timp se schimbă filtrele unei CTA?', 'Nu există un interval valabil pentru toate. Se schimbă când ajung la căderea de presiune finală dată de producător sau când sunt deteriorate. Se verifică la fiecare vizită de mentenanță.'],
      ['Pot pune un filtru mai fin decât cel din proiect?', 'Doar dacă centrala permite. Un filtru mai fin crește rezistența și poate scădea debitul. Confirmă cu proiectantul sau cu producătorul.']
    ]
  },
  {
    slug: 'verificarea-pierderilor-de-agent-frigorific-f-gaz',
    title: 'Verificarea pierderilor de agent frigorific (F-gaz): cât de des și cine o poate face',
    desc: 'Regulamentul european F-gaz impune verificări periodice ale pierderilor de agent frigorific. Pragurile, frecvențele, cine are voie să le facă și ce să ceri în scris după verificare.',
    img: 'lg-unitate-exterioara-pif',
    imgAlt: 'Unitate exterioară VRF LG la punerea în funcțiune',
    date: '2026-11-05',
    min: 5,
    service: 'service-mentenanta',
    answer: 'Dacă un echipament de climatizare, pompă de căldură sau frigorific conține cel puțin 5 tone CO2 echivalent de gaz fluorurat, Regulamentul (UE) 2024/573 cere verificarea periodică a pierderilor. Frecvența crește odată cu cantitatea de agent: cel puțin la 12 luni sub 50 t CO2e, la 6 luni între 50 și 500 t și la 3 luni peste 500 t. Verificarea o face doar o persoană certificată. Responsabil de ea este operatorul, adică cel care folosește echipamentul.',
    body: `
<h2>Despre ce regulament vorbim</h2>
<p>Gazele fluorurate cu efect de seră (F-gaz) sunt reglementate în Uniunea Europeană prin <a href="https://eur-lex.europa.eu/legal-content/RO/TXT/PDF/?uri=OJ:L_202400573" rel="noopener">Regulamentul (UE) 2024/573</a>. Se aplică direct și în România. Articolul 5 stabilește când și cum se verifică pierderile de agent frigorific la echipamentele fixe: climatizare, pompe de căldură, instalații frigorifice și altele.</p>

<h2>Cum afli dacă echipamentul tău intră sub regulament</h2>
<p>Contează cantitatea de agent frigorific exprimată în tone CO2 echivalent (CO2e). Se calculează așa:</p>
<p><b>tone CO2e = cantitatea de agent în kg × GWP al agentului ÷ 1.000</b></p>
<p>GWP-ul este potențialul de încălzire globală al gazului. Îl găsești pe fișa agentului sau în anexele regulamentului. Exemplu de calcul cu un GWP de 2.000, ales doar pentru ilustrare:</p>
<ul>
<li>2,4 kg de agent înseamnă 4,8 t CO2e, sub pragul de 5 t.</li>
<li>8 kg înseamnă 16 t CO2e, peste prag, în prima categorie.</li>
<li>30 kg înseamnă 60 t CO2e, în a doua categorie.</li>
</ul>
<p>Valoarea reală pentru echipamentul tău o confirmă instalatorul, pe baza agentului și a încărcăturii de pe plăcuță.</p>

<h2>Cât de des se verifică</h2>
<table>
<thead><tr><th>Cantitatea de agent</th><th>Verificare la</th><th>Cu sistem de detecție a scurgerilor</th></tr></thead>
<tbody>
<tr><td>Între 5 și 50 t CO2e</td><td>cel puțin 12 luni</td><td>cel puțin 24 luni</td></tr>
<tr><td>Între 50 și 500 t CO2e</td><td>cel puțin 6 luni</td><td>cel puțin 12 luni</td></tr>
<tr><td>Peste 500 t CO2e</td><td>cel puțin 3 luni</td><td>cel puțin 6 luni</td></tr>
</tbody></table>
<p>Echipamentele ermetice etichetate ca atare sunt scutite sub 10 t CO2e. În clădirile de locuit, echipamentele ermetice cu sub 3 kg de agent sunt și ele scutite. Un sistem de detecție a scurgerilor este obligatoriu la echipamentele cu cel puțin 500 t CO2e.</p>

<h2>De ce sistemele VRF intră de regulă sub regulament</h2>
<p>Un sistem VRF pentru o clădire publică are, de obicei, mulți kilograme de agent frigorific în circuit. Mai multe unități exterioare și trasee lungi înseamnă o încărcătură mare. De aceea, sistemele VRF intră de regulă într-una dintre primele două categorii. Calculul exact se face pe fiecare sistem, cu încărcătura reală.</p>

<h2>Cine are voie să facă verificarea</h2>
<ul>
<li>Verificările pierderilor la echipamentele fixe le face o persoană certificată conform articolului 10 din regulament.</li>
<li>Firmele care instalează, repară sau întrețin echipamentele trebuie să fie certificate la rândul lor.</li>
</ul>
<p>Cere instalatorului să-ți arate certificarea persoanei și a firmei. Verificarea făcută de cineva necertificat nu îndeplinește obligația.</p>

<h2>Cine răspunde</h2>
<p>Obligația aparține operatorului, adică persoanei sau instituției care exercită controlul efectiv asupra funcționării echipamentului. Pentru o școală, o creșă sau o sală de sport, operatorul este de regulă instituția care o administrează. Un contract de mentenanță cu un executant certificat rezolvă obligația în mod organizat.</p>

<h2>Ce ar trebui să primești după o verificare</h2>
<ul>
<li>Un raport scris cu data, echipamentul verificat și rezultatul.</li>
<li>Numele și certificarea persoanei care a făcut verificarea.</li>
<li>Locurile cu scurgeri, dacă au fost găsite, și remedierea făcută.</li>
<li>Cantitatea de agent adăugată, dacă a fost nevoie.</li>
</ul>
<p>Păstrează rapoartele într-un dosar al echipamentului. Ele dovedesc că obligația a fost respectată.</p>

<h2>Ce se întâmplă dacă se găsește o scurgere</h2>
<p>Scurgerea trebuie reparată fără întârziere, iar după reparație se face o nouă verificare. O scurgere ignorată costă mai mult: pierzi agent frigorific, scade performanța, iar compresorul lucrează în condiții nefavorabile.</p>

<h2>Sursa</h2>
<p>Pragurile și frecvențele din acest articol sunt luate din articolul 5 al Regulamentului (UE) 2024/573. Pentru situații speciale (echipamente mobile, alte tipuri de agenți, reguli naționale de aplicare), verifică textul complet sau cere o confirmare scrisă de la un executant certificat.</p>`,
    faq: [
      ['Se aplică regulamentul și la aerul condiționat de tip split?', 'Da, dacă încărcătura de agent ajunge la cel puțin 5 t CO2e. Un split mic poate fi sub prag, iar în clădirile de locuit echipamentele ermetice cu sub 3 kg sunt scutite. Se calculează pe fiecare echipament.'],
      ['Cine plătește verificarea, executantul sau beneficiarul?', 'Obligația aparține operatorului echipamentului, deci beneficiarul. Costul verificării se stabilește în ofertă sau în contractul de mentenanță.'],
      ['Putem face verificarea cu personalul propriu?', 'Doar dacă persoana este certificată conform regulamentului. Altfel, verificarea trebuie făcută de o firmă și o persoană certificate.'],
      ['Ce documente trebuie păstrate?', 'Rapoartele verificărilor, cu data, echipamentul, rezultatul și certificarea persoanei care a făcut controlul. Ține-le împreună cu dosarul instalației.'],
    ],
  },
  {
    slug: 'cat-costa-montajul-unui-sistem-vrf',
    title: 'Cât costă montajul unui sistem VRF într-o clădire publică',
    desc: 'De ce nu există un preț unic pe metru pătrat pentru VRF, ce intră în ofertă și cum compari două oferte corect: material, manoperă, probe și punere în funcțiune.',
    img: 'sistem-vrf-lg-atrea',
    imgAlt: 'Unități exterioare LG Multi V montate la o clădire publică',
    date: '2026-10-30',
    min: 5,
    service: 'vrf-climatizare',
    answer: 'Nu există un preț corect pe metru pătrat pentru un sistem VRF. Costul se stabilește pe proiect și depinde mai ales de numărul și tipul unităților interioare, de lungimea traseelor frigorifice, de accesul pe șantier și de ce include oferta: doar manoperă sau material și manoperă. Un preț serios pleacă de la planșe și de la lista de echipamente, nu de la suprafață.',
    body: `
<h2>De ce nu merge un preț pe metru pătrat</h2>
<p>Două clădiri de aceeași suprafață pot avea costuri foarte diferite. O școală cu săli mari și puține unități interioare costă altfel decât un birou compartimentat, cu multe unități mici și trasee lungi. Prețul pe metru pătrat ascunde exact lucrurile care contează.</p>

<h2>Ce influențează costul de montaj</h2>
<table>
<thead><tr><th>Factor</th><th>De ce contează</th></tr></thead>
<tbody>
<tr><td>Număr și tip de unități interioare</td><td>Fiecare unitate înseamnă montaj, racord frigorific, scurgere de condens și cablaj de comunicație.</td></tr>
<tr><td>Lungimea și complexitatea traseelor</td><td>Mai multă țeavă de cupru, mai multe ramificații, mai mult izolant și mai multe suporți.</td></tr>
<tr><td>Accesul pe șantier</td><td>Montajul peste tavane false, la înălțime sau cu macara cere echipă și timp în plus.</td></tr>
<tr><td>Etapizarea lucrării</td><td>Dacă ne coordonăm cu instalatorii electrici și cu constructorul, ritmul se schimbă.</td></tr>
<tr><td>Ce intră în ofertă</td><td>Doar manoperă sau material și manoperă. Diferența apare la furnizarea echipamentelor, a țevii și a izolației.</td></tr>
<tr><td>Probe și punere în funcțiune</td><td>Proba de presiune, vidarea, încărcarea cu agent frigorific și parametrarea sistemului.</td></tr>
</tbody></table>

<h2>Ce ar trebui să conțină o ofertă de VRF</h2>
<ul>
<li>Lista echipamentelor, cu model și cantitate, pe unități exterioare și interioare.</li>
<li>Traseele frigorifice: diametre, lungimi aproximative, izolație și ramificații.</li>
<li>Scurgerea condensului, suporții și fixările.</li>
<li>Cablajul de comunicație și configurarea sistemului.</li>
<li>Proba de presiune cu azot, vidarea și încărcarea cu agent frigorific.</li>
<li>Punerea în funcțiune, instruirea utilizatorilor și predarea.</li>
</ul>
<p>Când o ofertă nu spune clar ce nu include, diferența apare mai târziu, în șantier.</p>

<h2>Cum compari două oferte</h2>
<p>Verifică întâi dacă ambele acoperă același lucru. O ofertă mai ieftină poate lăsa în afara ei suporții, izolația, proba de presiune sau punerea în funcțiune. Cere prețurile defalcate pe echipamente și pe activități, cu materialele și manopera separate. Așa vezi imediat unde diferă.</p>

<h2>Ce să trimiți ca să primești un preț real</h2>
<ul>
<li>Planșele cu amplasarea unităților și a traseelor.</li>
<li>Lista de echipamente sau cantitățile din proiect.</li>
<li>Caietul de sarcini, dacă există.</li>
<li>Locația și termenul dorit.</li>
</ul>
<p>Pe baza lor facem o ofertă detaliată, cu materiale și manoperă separate.</p>`,
    faq: [
      ['Se poate estima rapid un cost de VRF fără proiect?', 'Doar orientativ. Pentru o ofertă corectă este nevoie de planșe, de lista de echipamente și de locația lucrării. Fără ele, orice cifră pe metru pătrat poate fi greșită în ambele sensuri.'],
      ['Care e diferența între o ofertă cu manoperă și una cu material și manoperă?', 'În oferta doar cu manoperă, beneficiarul sau constructorul furnizează echipamentele și materialele. În oferta cu material și manoperă, furnizăm și țeava, izolația și accesoriile, iar echipamentele după caz.'],
      ['Ce intră în punerea în funcțiune a unui VRF?', 'Proba de presiune, vidarea, încărcarea cu agent frigorific, configurarea unităților și a comunicației, verificarea parametrilor de funcționare și instruirea utilizatorilor.'],
    ],
  },
  {
    slug: 'punerea-in-functiune-a-unei-cta',
    title: 'Ce include punerea în funcțiune a unei centrale de tratare a aerului (CTA)',
    desc: 'Pornirea unei CTA nu înseamnă punere în funcțiune. Lista verificărilor, măsurătorilor și a documentelor pe care ar trebui să le primești la predare.',
    img: 'cta-ventas-acoperis-1',
    imgAlt: 'Centrale de tratare a aerului Ventas montate pe acoperiș',
    date: '2026-10-30',
    min: 5,
    service: 'ventilatie-cta',
    answer: 'Punerea în funcțiune a unei CTA înseamnă verificarea montajului, măsurarea debitelor și a parametrilor, reglarea automatizării și predarea unui raport. Pornirea ventilatoarelor este doar un pas. Fără măsurători și reglaje, instalația poate merge, dar nu face ce a fost proiectată să facă.',
    body: `
<h2>Pornirea nu este punere în funcțiune</h2>
<p>O CTA care pornește și face zgomot nu e neapărat o CTA reglată. Punerea în funcțiune dovedește că instalația livrează ce cere proiectul: debite, temperaturi, presiuni și funcționare corectă a automatizării.</p>

<h2>Etapele punerii în funcțiune</h2>
<ol>
<li><b>Verificarea montajului.</b> Nivelarea și fixarea unității, racordurile la tubulatură, racordurile hidraulice sau frigorifice, scurgerea condensului, accesul la filtre și la secțiuni.</li>
<li><b>Verificări electrice și de automatizare.</b> Alimentări, protecții, sensul de rotație al ventilatoarelor, senzori, actuatoare, clapete și comunicația cu sistemul de automatizare.</li>
<li><b>Probe la secțiunile active.</b> Bateriile de încălzire și de răcire, recuperatorul, ventilatoarele și clapetele, pe rând, apoi împreună.</li>
<li><b>Măsurători.</b> Debite de aer pe ramuri, presiuni, temperaturi și, unde e cazul, parametri electrici. Se fac cu aparate de măsură calibrate.</li>
<li><b>Echilibrarea.</b> Se reglează clapetele și turațiile până când debitele se apropie de cele din proiect.</li>
<li><b>Regimuri de funcționare.</b> Se verifică logica automatizării: programe orare, regimuri de vară și de iarnă, alarme și protecții.</li>
<li><b>Predarea.</b> Raportul cu măsurători, observații și eventuale reziduuri, plus instruirea persoanei care folosește instalația.</li>
</ol>

<h2>Ce documente ar trebui să primești</h2>
<ul>
<li>Raport tehnic cu valorile măsurate.</li>
<li>Lista parametrilor reglați în automatizare.</li>
<li>Observațiile și remedierile necesare, dacă există.</li>
<li>Instrucțiuni de bază pentru utilizare și pentru schimbarea filtrelor.</li>
</ul>

<h2>Ce se întâmplă când etapa se sare</h2>
<p>Instalațiile nereglate dau, de obicei, aceleași simptome: zone prea calde sau prea reci, zgomot, filtre care se colmatează repede, consum mare de energie sau alarme repetate. Remedierea după predare costă mai mult decât punerea în funcțiune făcută la timp.</p>`,
    faq: [
      ['Cine face punerea în funcțiune a unei CTA?', 'De obicei executantul instalației, împreună cu furnizorul de automatizare. La proiectele cu mai mulți executanți, coordonarea cu electricienii și cu automatistul este esențială.'],
      ['Care sunt semnele unei CTA nereglate?', 'Debite diferite față de proiect, zone cu confort slab, zgomot, consum ridicat și alarme repetate. Se confirmă doar prin măsurători.'],
      ['Primesc un raport scris la predare?', 'Da. La lucrările noastre predăm instalația probată și funcțională, cu raport de măsurători atunci când beneficiarul îl cere sau proiectul îl impune.'],
    ],
  },
  {
    slug: 'mentenanta-cta-scoli-cresa-sali-de-sport',
    title: 'Mentenanța CTA la școli, creșe și săli de sport: ce se verifică și de ce',
    desc: 'Ce se întâmplă cu o centrală de tratare a aerului fără mentenanță, ce lucrări se fac periodic și cum se stabilește frecvența pentru o clădire publică.',
    img: 'diagnostic-placa-inverter',
    imgAlt: 'Verificarea electronicii unui echipament HVAC la mentenanță',
    date: '2026-10-30',
    min: 5,
    service: 'service-mentenanta',
    answer: 'Mentenanța unei CTA înseamnă, în principal, schimbarea filtrelor, curățarea secțiunilor, verificarea ventilatoarelor, a curelelor, a bateriilor și a automatizării. Frecvența depinde de producător, de clasa filtrelor și de mediul în care funcționează clădirea. În spații cu mulți utilizatori, ca școlile și creșele, filtrele sunt cea mai importantă verificare.',
    body: `
<h2>De ce contează la școli, creșe și săli de sport</h2>
<p>În aceste clădiri, aerul proaspăt vine aproape în întregime din CTA. Filtrele colmatate scad debitul, cresc consumul de energie și duc la un aer mai prost. Cu cât mai mulți oameni folosesc spațiul, cu atât se vede mai repede.</p>

<h2>Ce se verifică la o vizită de mentenanță</h2>
<table>
<thead><tr><th>Componentă</th><th>Ce se face</th></tr></thead>
<tbody>
<tr><td>Filtre</td><td>Verificare și înlocuire. Se urmărește căderea de presiune și starea vizuală.</td></tr>
<tr><td>Ventilatoare și motoare</td><td>Zgomot, vibrații, rulmenți, curele și curent absorbit.</td></tr>
<tr><td>Baterii de încălzire și răcire</td><td>Curățare, verificarea lamelelor și a racordurilor, scurgerea condensului.</td></tr>
<tr><td>Recuperator de căldură</td><td>Curățare și verificarea etanșeității.</td></tr>
<tr><td>Clapete și actuatoare</td><td>Mișcare liberă, poziții corecte, comandă.</td></tr>
<tr><td>Automatizare</td><td>Senzori, programe orare, alarme și setările de funcționare.</td></tr>
<tr><td>Igienizare</td><td>Curățarea secțiunilor interioare, unde e cazul.</td></tr>
</tbody></table>

<h2>Cât de des</h2>
<p>Nu există o frecvență valabilă pentru toate. Se pornește de la recomandările producătorului, apoi se ajustează după clasa filtrelor, după praful din zonă, după programul de funcționare și după observațiile din teren. Pentru o clădire publică, un contract de mentenanță cu vizite programate evită defecțiunile apărute în sezonul de vârf.</p>

<h2>Semne că o CTA are nevoie urgent de service</h2>
<ul>
<li>Debit de aer mai slab decât de obicei.</li>
<li>Zgomote sau vibrații noi.</li>
<li>Apă care curge din unitate sau urme de condens.</li>
<li>Alarme repetate pe automatizare.</li>
<li>Consum de energie în creștere fără altă explicație.</li>
</ul>

<h2>Contract de mentenanță sau intervenții la cerere</h2>
<p>Intervențiile la cerere par mai ieftine, dar costă mai mult când apare o defecțiune în plin sezon. Un contract stabilește de la început lista verificărilor, frecvența și ce se întâmplă în caz de avarie. Îl poți negocia pe baza echipamentelor existente.</p>`,
    faq: [
      ['La cât timp se schimbă filtrele unei CTA?', 'Depinde de producător, de clasa filtrului și de mediu. Se stabilește din recomandările echipamentului și din măsurarea căderii de presiune pe filtre, nu dintr-un interval fix.'],
      ['Poate face mentenanța personalul clădirii?', 'Schimbarea filtrelor, da, dacă are acces și este instruit. Verificările electrice, ale automatizării și ale bateriilor cer personal specializat.'],
      ['Ce informații îți trebuie pentru o ofertă de mentenanță?', 'Lista echipamentelor, modelul și vârsta lor, programul clădirii și, dacă există, dosarul de predare al instalației.'],
    ],
  },
  {
    slug: 'vrf-sau-chiller-cum-alegi',
    title: 'VRF sau chiller: cum alegi sistemul potrivit pentru o clădire',
    desc: 'Diferența dintre VRF și chiller, criteriile de alegere pentru clădiri publice și comerciale și întrebările de pus proiectantului înainte de decizie.',
    img: 'chillere-hidros',
    imgAlt: 'Chillere Hidros montate la o clădire',
    date: '2026-10-30',
    min: 5,
    service: 'pompe-de-caldura-chillere',
    answer: 'Un sistem VRF circulă agent frigorific direct către unitățile interioare. Un chiller răcește apă, care circulă prin conducte către unități terminale. VRF-ul se potrivește de obicei clădirilor cu multe zone controlate separat. Chillerul se potrivește clădirilor mari, cu sarcini termice mari și rețea hidronică. Alegerea se face din proiect, nu din preferințe.',
    body: `
<h2>Cum funcționează fiecare</h2>
<p><b>VRF</b> înseamnă debit variabil de agent frigorific. Unitățile exterioare trimit agent frigorific prin țeavă de cupru către mai multe unități interioare, iar fiecare unitate își reglează singură puterea.</p>
<p><b>Chillerul</b> răcește apă (sau amestec apă-glicol). Apa merge prin conducte către ventiloconvectoare, CTA sau alte unități terminale, iar acolo se face schimbul de căldură.</p>

<h2>Comparație pe criterii</h2>
<table>
<thead><tr><th>Criteriu</th><th>VRF</th><th>Chiller</th></tr></thead>
<tbody>
<tr><td>Agent de transport</td><td>Agent frigorific</td><td>Apă sau apă-glicol</td></tr>
<tr><td>Control pe zone</td><td>Foarte bun, pe fiecare unitate</td><td>Depinde de unitățile terminale</td></tr>
<tr><td>Traseele</td><td>Țeavă de cupru izolată, cu limite de lungime și de diferență de nivel</td><td>Conducte de apă, mai tolerante la distanțe mari</td></tr>
<tr><td>Cantitatea de agent frigorific</td><td>Mare, distribuită în clădire</td><td>Concentrată în centrala frigorifică</td></tr>
<tr><td>Potrivit pentru</td><td>Birouri, clădiri compartimentate, săli cu zone diferite</td><td>Clădiri mari, spitale, centre comerciale, procese tehnologice</td></tr>
<tr><td>Combinație cu CTA</td><td>Prin baterii DX și kituri de comunicație</td><td>Prin baterii cu apă</td></tr>
</tbody></table>

<h2>Întrebări de pus înainte să alegi</h2>
<ul>
<li>Câte zone trebuie controlate separat și cât de diferite sunt sarcinile lor?</li>
<li>Cât de lungi sunt traseele și cât de mare e diferența de nivel?</li>
<li>Există deja o rețea hidronică sau spațiu pentru una?</li>
<li>Ce reguli de siguranță și de agent frigorific se aplică la clădirea respectivă?</li>
<li>Cine va face mentenanța și ce echipamente poate deservi?</li>
<li>Cum se integrează în automatizarea clădirii?</li>
</ul>

<h2>Cine decide</h2>
<p>Decizia aparține proiectantului, pe baza calculului termic. Noi executăm sistemul ales și putem semnala, din experiența de șantier, aspecte practice: accesul la echipamente, traseele dificile sau costul de mentenanță.</p>`,
    faq: [
      ['Care e mai ieftin, VRF sau chiller?', 'Nu există un răspuns general. Costul depinde de dimensiunea clădirii, de trasee, de echipamentele terminale și de ce există deja în clădire. Se compară pe proiect.'],
      ['Se pot combina VRF și chiller în aceeași clădire?', 'Da. Unele clădiri folosesc chiller pentru zonele mari și VRF pentru zone cu program sau cerințe diferite. Decizia vine din proiect.'],
      ['Ce întreținere cere fiecare sistem?', 'Ambele cer verificări periodice. La VRF se urmăresc unitățile exterioare, filtrele și presiunile. La chiller, circuitul hidraulic, pompele, schimbătoarele și protecțiile.'],
    ],
  },
  {
    slug: 'manopera-sau-material-si-manopera',
    title: 'Ofertă doar cu manoperă sau cu material și manoperă: ce alegi la o lucrare de HVAC',
    desc: 'Diferențele dintre cele două tipuri de ofertă, avantajele și riscurile fiecăreia și lista de verificat înainte să semnezi un contract de montaj HVAC.',
    img: 'tubulatura-spiro-sala',
    imgAlt: 'Tubulatură circulară montată într-o sală',
    date: '2026-10-30',
    min: 4,
    service: 'ventilatie-cta',
    answer: 'La o ofertă doar cu manoperă, constructorul sau beneficiarul furnizează materialele și echipamentele, iar executantul montează. La o ofertă cu material și manoperă, executantul furnizează și materialele. Prima dă control asupra achizițiilor, a doua dă un singur responsabil. Alegerea depinde de cine are mai bun acces la materiale și de cât risc de coordonare vrei să preiei.',
    body: `
<h2>Ce înseamnă fiecare</h2>
<table>
<thead><tr><th></th><th>Doar manoperă</th><th>Material și manoperă</th></tr></thead>
<tbody>
<tr><td>Materiale și echipamente</td><td>Le furnizează constructorul sau beneficiarul</td><td>Le furnizează executantul (echipamentele, după caz)</td></tr>
<tr><td>Responsabilitate</td><td>Împărțită: executantul răspunde de montaj, achizitorul de materiale</td><td>Un singur responsabil pentru livrare și montaj</td></tr>
<tr><td>Control asupra prețului materialelor</td><td>Mare, la achizitor</td><td>Mai mic, dar cu preț stabilit în ofertă</td></tr>
<tr><td>Riscul de întârzieri</td><td>Depinde de livrarea materialelor la timp</td><td>Executantul gestionează furnizorii</td></tr>
</tbody></table>

<h2>Când are sens doar manopera</h2>
<ul>
<li>Constructorul are contracte-cadru cu furnizori și prețuri bune.</li>
<li>Materialele sunt deja pe șantier sau sunt impuse prin proiect.</li>
<li>Vrei să controlezi marca și calitatea fiecărui material.</li>
</ul>

<h2>Când are sens materialul și manopera</h2>
<ul>
<li>Vrei un singur partener pentru livrare și montaj.</li>
<li>Termenul e strâns și nu vrei să depinzi de livrări separate.</li>
<li>Nu ai echipă de achiziții pentru HVAC.</li>
</ul>

<h2>Ce să verifici în orice ofertă</h2>
<ol>
<li>Lista activităților și a cantităților, preferabil după lista din proiect.</li>
<li>Ce nu este inclus: macara, schele, găuriri, sigilări antifoc, probe, punere în funcțiune.</li>
<li>Cine asigură transportul și depozitarea materialelor pe șantier.</li>
<li>Termenele și etapele, cu legătura la lucrările altor specialități.</li>
<li>Cum se recepționează lucrarea și ce documente se predau.</li>
</ol>

<h2>La noi</h2>
<p>Ofertăm în ambele variante, cu materialele și manopera defalcate. Poți compara cele două variante pe aceeași listă de cantități și alegi ce se potrivește șantierului.</p>`,
    faq: [
      ['Pot cere ofertă în ambele variante?', 'Da. Pe aceeași listă de cantități facem o variantă doar cu manoperă și una cu material și manoperă, ca să le poți compara.'],
      ['Cine răspunde dacă materialele furnizate de constructor nu se potrivesc?', 'Acest lucru trebuie stabilit în contract. De obicei, executantul semnalează neconformitățile la recepția materialelor, iar achizitorul le remediază.'],
      ['Intră punerea în funcțiune în oferta de manoperă?', 'Depinde de ofertă. Trebuie scris explicit dacă proba de presiune, reglajele și punerea în funcțiune sunt incluse.'],
    ],
  },
  {
    slug: 'greseli-frecvente-la-montajul-tubulaturii',
    title: 'Greșeli frecvente la montajul tubulaturii de ventilație',
    desc: 'Cele mai des întâlnite probleme la tubulatura de ventilație pe șantier: etanșare, suporți, izolare, acces la clapete și coordonare. Cum le eviți.',
    img: 'tubulatura-spiro-perete',
    imgAlt: 'Tubulatură circulară fixată pe perete cu suporți',
    date: '2026-10-30',
    min: 4,
    service: 'ventilatie-cta',
    answer: 'Cele mai frecvente probleme sunt etanșarea slabă a îmbinărilor, suporții prea rari sau nepotriviți, izolația deteriorată, lipsa accesului la clapete și la piese de inspecție și coordonarea slabă cu alte specialități. Toate se pot preveni cu verificări simple, făcute în timpul montajului, nu la recepție.',
    body: `
<h2>1. Îmbinări neetanșe</h2>
<p>Pierderile de aer scad debitul care ajunge în încăperi și cresc consumul ventilatorului. Se previn prin utilizarea garniturilor și a sigilanților potriviți și prin verificarea îmbinărilor înainte de a închide traseul.</p>

<h2>2. Suporți prea rari sau nepotriviți</h2>
<p>Tubulatura care se lasă sau vibrează produce zgomot și uzură. Distanțele între suporți și tipul lor se stabilesc după diametru, greutate și material. Suporții se fixează pe structură, nu pe elemente care nu suportă sarcina.</p>

<h2>3. Izolație tăiată sau neetanșă</h2>
<p>Izolația deteriorată duce la condens și pierderi termice. Se verifică îmbinările de izolație, locurile de trecere prin pereți și racordurile la echipamente.</p>

<h2>4. Lipsa accesului la clapete și la puncte de inspecție</h2>
<p>O clapetă de reglaj sau antifoc ascunsă după un tavan fix nu poate fi verificată. Locul pentru acces se prevede înainte de montaj și se coordonează cu cine face tavanele.</p>

<h2>5. Racorduri forțate</h2>
<p>Un racord flexibil prea lung, răsucit sau comprimat reduce debitul și face zgomot. Racordurile se fac scurte, drepte și fixate.</p>

<h2>6. Coordonare slabă cu celelalte specialități</h2>
<p>Traseele se întâlnesc cu cele electrice, sanitare și de stingere incendii. Fără o coordonare pe șantier, apar demontări și refaceri. Se verifică planșele comune și se marchează traseele înainte de montaj.</p>

<h2>7. Interior murdar sau capete nesigilate</h2>
<p>Praful de șantier ajunge în tubulatură dacă capetele rămân deschise. Se sigilează capetele pe durata lucrărilor și se verifică interiorul înainte de punerea în funcțiune.</p>

<h2>Lista de verificat la recepție</h2>
<ul>
<li>Îmbinări sigilate și suporți fixați la distanțele din proiect.</li>
<li>Izolație continuă, fără rupturi.</li>
<li>Clapete și piese de inspecție accesibile.</li>
<li>Racorduri scurte și fixate.</li>
<li>Interior curat, capete protejate.</li>
</ul>`,
    faq: [
      ['Se testează etanșeitatea tubulaturii?', 'Pe proiectele unde proiectul o cere, da, cu probe de etanșeitate pe tronsoane. Pe celelalte, se face verificare vizuală și măsurarea debitelor la punerea în funcțiune.'],
      ['Cine decide distanța dintre suporți?', 'Proiectul sau producătorul sistemului de suporți. Executantul o respectă și semnalează dacă locul de fixare nu permite.'],
      ['Ce faci dacă traseul din proiect se suprapune cu alte instalații?', 'Se semnalează proiectantului și constructorului înainte de montaj, ca să se stabilească o soluție. Se evită improvizațiile pe șantier.'],
    ],
  },
];
