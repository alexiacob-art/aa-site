// Articole blog. Fără cifre inventate: prețurile și duratele depind de proiect și se confirmă în ofertă.
export const articles = [
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
