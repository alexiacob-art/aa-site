// Generează site-ul static în ./dist
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://aaindustrialsystems.ro';
const TEL = '+40 754 531 194';
const TEL_HREF = '+40754531194';
const MAIL = 'andrei.horhogea@aaindustrialsystems.ro';

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'assets/fonts'), { recursive: true });

// ---------- assets ----------
const fp = (p) => path.join(ROOT, 'node_modules', p);
const fonts = {
  'bricolage-latin.woff2': '@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2',
  'bricolage-latin-ext.woff2': '@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-ext-wght-normal.woff2',
  'plex-400-latin.woff2': '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2',
  'plex-400-latin-ext.woff2': '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-ext-400-normal.woff2',
  'plex-500-latin.woff2': '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2',
  'plex-500-latin-ext.woff2': '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-ext-500-normal.woff2',
};
for (const [out, src] of Object.entries(fonts)) fs.copyFileSync(fp(src), path.join(DIST, 'assets/fonts', out));
fs.copyFileSync(path.join(ROOT, 'src/styles.css'), path.join(DIST, 'assets/styles.css'));
fs.copyFileSync(path.join(ROOT, 'src/main.js'), path.join(DIST, 'assets/main.js'));
for (const f of ['og.png', 'logo.png']) if (fs.existsSync(path.join(ROOT, 'src', f))) fs.copyFileSync(path.join(ROOT, 'src', f), path.join(DIST, 'assets', f));
if (fs.existsSync(path.join(ROOT, 'src/img')))fs.cpSync(path.join(ROOT, 'src/img'), path.join(DIST, 'assets/img'), { recursive: true });

// ---------- logo ----------
let uid = 0;
function mark({ top = '#0A1628', bottom = '#3BA7E0', draw = false, cls = '' } = {}) {
  const id = `m${++uid}`;
  const A = 'M18 212 L178 17 L338 212';
  const B = 'M18 120 L178 314 L338 120';
  const common = 'fill="none" stroke-width="38" stroke-linecap="round" stroke-linejoin="round"';
  const pl = draw ? ' pathLength="1"' : '';
  return `<svg class="${cls}" viewBox="-2 -2 360 336" role="img" aria-label="A&amp;A Industrial Systems" xmlns="http://www.w3.org/2000/svg">
<defs><mask id="${id}" maskUnits="userSpaceOnUse" x="-40" y="-40" width="440" height="420"><rect x="-40" y="-40" width="440" height="420" fill="#fff"/><path d="${B}" fill="none" stroke="#000" stroke-width="62" stroke-linecap="round" stroke-linejoin="round"/></mask></defs>
<path class="a" mask="url(#${id})" d="${A}" stroke="${top}" ${common}${pl}/>
<path class="b" d="${B}" stroke="${bottom}" ${common}${pl}/></svg>`;
}
const brand = (dark = false) => `<a class="brand" href="/" aria-label="A&amp;A Industrial Systems, pagina principală">${mark({ top: dark ? '#fff' : '#0A1628' })}<span class="brand-text"><b>A&amp;A</b><span>Industrial Systems</span></span></a>`;

// ---------- content ----------
const services = [
  {
    slug: 'vrf-climatizare',
    name: 'Sisteme VRF și climatizare',
    short: 'Montaj și punere în funcțiune pentru clădiri publice, birouri și spații comerciale.',
    title: 'Instalare sisteme VRF și climatizare în Cluj și Transilvania',
    desc: 'Montăm și punem în funcțiune sisteme VRF și de climatizare: unități interioare și exterioare, trasee frigorifice, probe și predare. A&A Industrial Systems, Florești, Cluj.',
    h1: 'Instalare VRF și climatizare pentru clădiri publice și comerciale',
    lead: 'Montăm sisteme VRF complete: unități exterioare și interioare, trasee frigorifice din cupru, condens, alimentare electrică și comunicație. Predăm instalația probată și funcțională.',
    include: [
      'Montaj unități exterioare și interioare (casete, canalizabile, de perete)',
      'Trasee frigorifice din cupru izolat, cu distribuitoare și ramificații',
      'Probă de presiune cu azot, vidare și încărcare cu agent frigorific',
      'Scurgere condens, suporți și fixări',
      'Cablaj de comunicație și configurarea sistemului',
      'Punere în funcțiune și instruirea utilizatorilor',
    ],
    side: {
      h: 'Echipamente cu care lucrăm',
      items: ['LG Multi V', 'Samsung DVM S', 'Daikin', 'Midea', 'Hitachi', 'Hisense'],
      p: 'Montăm și alte mărci, la cererea beneficiarului sau după specificațiile proiectului.',
    },
    need: ['Planșele cu amplasarea unităților și a traseelor', 'Lista de echipamente sau cantitățile din proiect', 'Caietul de sarcini, dacă există', 'Locația și termenul dorit'],
    faq: [
      ['Lucrați doar cu manoperă sau și cu materiale?', 'Ambele. Putem executa doar manopera (montaj, conectare, punere în funcțiune) sau lucrarea completă, cu echipamente și materiale. Ofertăm clar fiecare variantă.'],
      ['Cine face încărcarea cu agent frigorific?', 'Operațiile cu agenți frigorifici fluorurați sunt făcute de personal atestat F-gaz.'],
      ['Cât durează montajul unui sistem VRF?', 'Depinde de numărul de unități și de lungimea traseelor. Stabilim graficul după analiza planșelor, nu estimăm fără ele.'],
      ['Se poate lucra într-o clădire aflată în funcțiune?', 'Da, planificăm lucrările pe etape și discutăm programul cu beneficiarul.'],
    ],
  },
  {
    slug: 'ventilatie-cta',
    name: 'Ventilație și centrale de tratare a aerului',
    short: 'Centrale CTA, tubulatură și accesorii, cu reglarea debitelor și predare.',
    title: 'Ventilație și montaj CTA (centrale de tratare a aerului)',
    desc: 'Montaj centrale de tratare a aerului (CTA), tubulatură ALP și tablă zincată, plenumuri, grile și reglarea debitelor. A&A Industrial Systems, Cluj.',
    h1: 'Ventilație și montaj CTA pentru clădiri publice, școli și săli de sport',
    lead: 'Montăm centrale de tratare a aerului (CTA), tubulatură și accesorii, apoi reglăm debitele și predăm sistemul funcțional.',
    include: [
      'Montaj CTA, inclusiv racordare hidraulică și electrică',
      'Tubulatură ALP și din tablă zincată',
      'Cutii plenum, grile, difuzoare și clapete de debit',
      'Izolații și fixări',
      'Reglarea și echilibrarea debitelor de aer',
      'Punere în funcțiune și predare',
    ],
    side: {
      h: 'Unde montăm',
      items: ['Școli și creșe', 'Săli de sport', 'Spitale', 'Muzee și clădiri publice', 'Birouri și hale'],
      p: 'Lucrăm cu CTA de la producători precum ATREA și AL-KO și cu alte mărci, conform proiectului.',
    },
    need: ['Planșele de ventilație', 'Lista de echipamente și accesorii', 'Caietul de sarcini', 'Locația, accesul pe șantier și termenul'],
    faq: [
      ['Ce este tubulatura ALP?', 'Tubulatură din panouri preizolate cu aluminiu pe ambele fețe. Se montează rapid și nu are nevoie de izolație separată.'],
      ['Preluați doar manopera de montaj tubulatură?', 'Da. Putem lucra doar pe manoperă, cu materialele livrate de beneficiar sau de constructorul general, sau cu material și manoperă.'],
      ['Înlocuiți filtrele CTA?', 'Da. Înlocuim filtrele (cu sau fără furnizarea lor) și igienizăm unitățile. Periodicitatea depinde de clasa filtrului și de mediul din clădire.'],
      ['Reglați debitele după montaj?', 'Da. Măsurăm și echilibrăm debitele conform proiectului, înainte de predare.'],
    ],
  },
  {
    slug: 'pompe-de-caldura-chillere',
    name: 'Pompe de căldură și chillere',
    short: 'Montaj, racorduri hidraulice și punere în funcțiune pentru încălzire și răcire centralizată.',
    title: 'Montaj pompe de căldură și chillere',
    desc: 'Montăm pompe de căldură și chillere: poziționare, racorduri hidraulice și electrice, probe și punere în funcțiune. A&A Industrial Systems, Cluj.',
    h1: 'Montaj pompe de căldură și chillere pentru încălzire și răcire centralizată',
    lead: 'Montăm pompe de căldură și chillere: poziționare, racorduri hidraulice și electrice, probe și punere în funcțiune.',
    include: [
      'Montaj pe fundații sau suporți, cu amortizoare de vibrații',
      'Racorduri hidraulice: conducte, vane, pompe, vas de expansiune',
      'Conectare electrică și comenzi',
      'Umplere, purjare și probe de presiune',
      'Montaj ventiloconvectoare și baterii de încălzire sau răcire',
      'Punere în funcțiune cu verificarea parametrilor',
    ],
    side: {
      h: 'Echipamente cu care lucrăm',
      items: ['Hidros', 'Daikin', 'Midea', 'Hitachi', 'Hisense'],
      p: 'Executăm după proiectul beneficiarului și ne coordonăm cu proiectantul când este nevoie.',
    },
    need: ['Schema hidraulică și planul de amplasare', 'Fișele tehnice ale echipamentelor', 'Caietul de sarcini', 'Locația și termenul dorit'],
    faq: [
      ['Care e diferența dintre chiller și pompă de căldură?', 'Chillerul produce apă răcită. Pompa de căldură aer-apă produce apă caldă pentru încălzire, iar modelele reversibile fac și răcire.'],
      ['Livrați și echipamentele?', 'Putem livra echipamentele și materialele sau putem executa doar montajul. Ofertăm separat fiecare variantă.'],
      ['Lucrați după proiectul altui proiectant?', 'Da. Executăm după proiectul beneficiarului și semnalăm din timp neconcordanțele.'],
    ],
  },
  {
    slug: 'automatizari-bms',
    name: 'Automatizări și BMS',
    short: 'Automatizarea CTA, VRF, chillere și integrarea într-un sistem de monitorizare.',
    title: 'Automatizări HVAC și BMS pentru clădiri',
    desc: 'Automatizări pentru CTA, VRF, chillere și centrale termice, cu integrare într-un sistem BMS de monitorizare. A&A Industrial Systems, Cluj.',
    h1: 'Automatizări HVAC și BMS pentru clădiri',
    lead: 'Automatizăm CTA-uri, sisteme VRF, chillere și centrale termice și le integrăm într-un sistem de monitorizare și comandă.',
    include: [
      'Automatizarea CTA: sonde, clapete motorizate, ventile cu trei căi',
      'Tablouri de automatizare și cablaj',
      'Programarea și parametrizarea controlerelor',
      'Integrare în BMS prin protocoale uzuale, în funcție de echipament',
      'Teste funcționale împreună cu beneficiarul',
      'Documentație de predare',
    ],
    side: {
      h: 'Ce rezolvă',
      items: ['Control centralizat al instalațiilor', 'Alarme la defecte', 'Programe orare și scenarii', 'Monitorizarea parametrilor'],
      p: 'Instalațiile existente pot fi adesea automatizate, după verificarea echipamentelor și a interfețelor disponibile.',
    },
    need: ['Schemele de automatizare sau lista de puncte', 'Fișele tehnice ale echipamentelor', 'Cerințele beneficiarului privind monitorizarea', 'Locația și termenul dorit'],
    faq: [
      ['Ce înseamnă BMS?', 'Building Management System: un sistem care monitorizează și comandă instalațiile unei clădiri dintr-un singur loc.'],
      ['Se poate adăuga automatizare la o instalație existentă?', 'De obicei da. Verificăm mai întâi echipamentele și interfețele de comunicație disponibile.'],
      ['Predați documentație?', 'Da. La predare livrăm schemele și documentația sistemului automatizat.'],
    ],
  },
  {
    slug: 'service-mentenanta',
    name: 'Service și mentenanță',
    short: 'Contracte de mentenanță pentru split, VRF, CTA, chillere și pompe de căldură.',
    title: 'Service și mentenanță HVAC pe bază de contract',
    desc: 'Contracte de mentenanță pentru unități split, VRF, CTA, chillere și pompe de căldură: verificări periodice, filtre, igienizare, intervenții. Cluj și Transilvania.',
    h1: 'Service și mentenanță HVAC pe bază de contract',
    lead: 'Contracte de mentenanță pentru unități split, VRF, CTA, chillere și pompe de căldură. Prețul se stabilește pe unitate și este scris în contract.',
    include: [
      'Verificări periodice ale tuturor unităților din contract',
      'Înlocuirea filtrelor și igienizarea unităților interioare',
      'Curățarea schimbătoarelor de căldură',
      'Verificarea presiunilor și a etanșeității circuitului frigorific',
      'Verificarea scurgerii condensului și a părții electrice',
      'Raport după fiecare intervenție și intervenții la defecte',
    ],
    side: {
      h: 'Ce preluăm',
      items: ['Unități split și multi-split', 'Sisteme VRF', 'Centrale de tratare a aerului', 'Chillere și pompe de căldură'],
      p: 'Începem cu un inventar al echipamentelor, apoi facem oferta.',
    },
    need: ['Lista echipamentelor (tip, număr, locație)', 'Frecvența dorită a verificărilor', 'Programul de acces în clădire', 'Contractele sau garanțiile existente'],
    faq: [
      ['Cum se calculează prețul?', 'Pe unitate, în funcție de tip și număr. Facem oferta după inventarul echipamentelor.'],
      ['Ce se întâmplă la un defect?', 'Contractul stabilește modul de anunțare și timpul de răspuns. Le discutăm înainte de semnare.'],
      ['Puteți face doar înlocuire de filtre sau igienizare?', 'Da. Facem și intervenții punctuale: înlocuire filtre CTA, igienizare unități interioare, service la cerere.'],
      ['Preluați echipamente montate de altcineva?', 'Da, după o verificare inițială a stării lor.'],
    ],
  },
];

const projects = [
  {
    slug: 'muzeul-mutra',
    name: 'Muzeul Mutra, Florești',
    status: 'Finalizat, octombrie 2026',
    desc: 'Montaj și punere în funcțiune centrale de tratare a aerului (CTA).',
    tags: ['CTA', 'Ventilație'],
  },
  {
    slug: 'cresa-vetis',
    name: 'Creșa Vetiș, Satu Mare',
    status: 'În execuție din septembrie 2026',
    desc: 'Montaj tubulatură de ventilație și trasee frigorifice pentru sistemul VRF.',
    tags: ['Ventilație', 'VRF'],
  },
];

const nav = [
  ['/servicii/', 'Servicii'],
  ['/proiecte/', 'Proiecte'],
  ['/despre-noi/', 'Despre noi'],
  ['/contact/', 'Contact'],
];

const ldBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  '@id': `${SITE}/#organizatie`,
  name: 'A&A Industrial Systems',
  legalName: 'A&A Industrial Systems S.R.L.',
  url: SITE,
  logo: `${SITE}/assets/logo.png`,
  image: `${SITE}/assets/og.png`,
  telephone: TEL_HREF,
  email: MAIL,
  taxID: '51659678',
  description: 'Instalare, punere în funcțiune și mentenanță pentru sisteme HVAC: VRF, ventilație și CTA, chillere, pompe de căldură și automatizări.',
  address: { '@type': 'PostalAddress', streetAddress: 'Str. Răzoare nr. 206C', addressLocality: 'Florești', addressRegion: 'Cluj', addressCountry: 'RO' },
  areaServed: [{ '@type': 'AdministrativeArea', name: 'Cluj' }, { '@type': 'AdministrativeArea', name: 'Transilvania' }],
  knowsAbout: ['VRF', 'Centrale de tratare a aerului', 'Ventilație', 'Chillere', 'Pompe de căldură', 'Automatizări BMS', 'Mentenanță HVAC'],
};

// ---------- layout ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pages = [];

function layout({ url, title, desc, body, ld = [], current = '', noindex = false }) {
  const full = title.includes('A&A') ? title : `${title} | A&A Industrial Systems`;
  const canon = SITE + url;
  const ldAll = [ldBusiness, ...ld].map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  const html = `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canon}">
${noindex ? '<meta name="robots" content="noindex">' : '<meta name="robots" content="index,follow,max-image-preview:large">'}
<meta name="theme-color" content="#0A1628">
<meta property="og:type" content="website"><meta property="og:locale" content="ro_RO">
<meta property="og:site_name" content="A&amp;A Industrial Systems">
<meta property="og:title" content="${esc(full)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canon}"><meta property="og:image" content="${SITE}/assets/og.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/bricolage-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/plex-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/styles.css">
${ldAll}
</head>
<body>
<a class="skip" href="#continut">Sari la conținut</a>
<header class="site-header"><div class="wrap">
${brand()}
<button class="menu-btn" aria-label="Meniu" aria-expanded="false" aria-controls="nav"><span></span></button>
<nav class="nav" id="nav" aria-label="Principal">
${nav.map(([h, l]) => `<a href="${h}"${current === h ? ' aria-current="page"' : ''}>${l}</a>`).join('\n')}
<a class="btn" href="/contact/">Cere ofertă</a>
</nav>
</div></header>
<main id="continut">
${body}
</main>
<footer class="site-footer"><div class="wrap">
<div class="fgrid">
<div>${brand(true)}<p>Instalații HVAC pentru clădiri publice și industriale. Punct de lucru în Florești, jud. Cluj.</p></div>
<div><h3>Servicii</h3><ul>${services.map((s) => `<li><a href="/servicii/${s.slug}/">${s.name}</a></li>`).join('')}</ul></div>
<div><h3>Companie</h3><ul><li><a href="/proiecte/">Proiecte</a></li><li><a href="/calculator-hvac/">Calculator HVAC</a></li><li><a href="/despre-noi/">Despre noi</a></li><li><a href="/contact/">Contact</a></li><li><a href="/politica-confidentialitate/">Politica de confidențialitate</a></li></ul></div>
<div><h3>Contact</h3><ul><li><a href="tel:${TEL_HREF}">${TEL}</a></li><li><a href="mailto:${MAIL}">${MAIL}</a></li><li>Str. Răzoare nr. 206C, Florești, jud. Cluj</li></ul></div>
</div>
<div class="legalrow"><span>© 2026 A&amp;A Industrial Systems S.R.L.</span><span>CUI 51659678, Reg. Com. J2025028230008. Sediu social: Str. Prefect Gavril Tudorașcu nr. 21, Bl. B6, Sc. A, Et. 3, Ap. 7, Suceava.</span></div>
</div></footer>
<script src="/assets/main.js" defer></script>
</body></html>`;
  pages.push({ url, html, noindex });
}

const crumbs = (items) => `<nav class="crumbs" aria-label="Navigare">${items.map(([h, l]) => (h ? `<a href="${h}">${l}</a>` : `<span>${l}</span>`)).join(' / ')}</nav>`;
const ctaBand = (h = 'Ai planșele sau caietul de sarcini?', p = 'Trimite-le și revenim cu o ofertă detaliată, cu materiale și manoperă separate.') => `
<section class="cta"><div class="wrap">
<div><h2>${h}</h2><p>${p}</p></div>
<div class="actions"><a class="btn light" href="/contact/">Cere ofertă</a><a class="btn outline-light" href="tel:${TEL_HREF}">${TEL}</a></div>
</div></section>`;

function projVisual(slug) {
  const img = ['jpg', 'jpeg', 'webp', 'png'].map((e) => `src/img/${slug}.${e}`).find((p) => fs.existsSync(path.join(ROOT, p)));
  if (img) return `<img src="/assets/img/${path.basename(img)}" alt="" loading="lazy">`;
  return `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="640" height="400" fill="#0A1628"/>
<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="26"><path d="M180 270 L320 90 L460 270" stroke="#fff" opacity=".92"/><path d="M180 190 L320 370 L460 190" stroke="#3BA7E0"/></g>
<g stroke="#3BA7E0" stroke-opacity=".25" stroke-width="2"><path d="M0 60H640M0 340H640"/></g></svg>`;
}

const svcPhotos = {
  'pompe-de-caldura-chillere': ['chillere-hidros', 'Chillere și pompe de căldură montate în exterior'],
  'ventilatie-cta': ['rooftop-ett', 'Unitate rooftop montată pe acoperiș'],
  'service-mentenanta': ['diagnostic-placa-inverter', 'Verificarea secțiunii electrice a unei unități exterioare'],
};
const svcPhoto = (slug) => (svcPhotos[slug] ? `<section class="photo-sec"><div class="wrap"><figure class="photo"><img src="/assets/img/${svcPhotos[slug][0]}.jpg" alt="${svcPhotos[slug][1]}" loading="lazy"><figcaption>${svcPhotos[slug][1]}</figcaption></figure></div></section>` : '');

const gallery = [
  ['chillere-hidros', 'Chillere și pompe de căldură, montaj exterior'],
  ['rooftop-ett', 'Unitate rooftop pe acoperiș'],
  ['daikin-restaurant', 'Unitate interioară într-un spațiu HoReCa'],
  ['split-exterior', 'Unitate exterioară montată la fațadă'],
  ['daikin-intrare', 'Unitate exterioară Daikin la intrarea în clădire'],
  ['split-interior', 'Unitate interioară montată pe perete'],
];

// ---------- pagini ----------
// Acasă
layout({
  url: '/',
  title: 'A&A Industrial Systems | Instalații HVAC, VRF, CTA și mentenanță în Cluj și Transilvania',
  desc: 'Montăm, punem în funcțiune și întreținem sisteme VRF, centrale de tratare a aerului, chillere, pompe de căldură și automatizări. Florești, Cluj. Lucrăm în Transilvania.',
  current: '/',
  body: `
<section class="hero" style="padding:0"><div class="wrap">
<div>
<h1>Instalații HVAC pentru clădiri publice și industriale</h1>
<p class="lead">Montăm, punem în funcțiune și întreținem sisteme VRF, centrale de tratare a aerului, chillere și automatizări. Lucrăm în Transilvania.</p>
<div class="actions"><a class="btn" href="/contact/">Cere ofertă</a><a class="btn ghost" href="tel:${TEL_HREF}">${TEL}</a></div>
</div>
<div class="hero-mark" aria-hidden="true">${mark({ draw: true })}</div>
</div>
<dl class="facts">
<div><dt>Experiență</dt><dd>9 ani de HVAC în echipa de execuție</dd></div>
<div><dt>Domenii</dt><dd>VRF, CTA, ventilație, chillere, pompe de căldură, automatizări</dd></div>
<div><dt>Zonă</dt><dd>Transilvania, cu punct de lucru în Florești, Cluj</dd></div>
</dl>
</section>

<section><div class="wrap">
<div class="sec-head"><h2>Ce executăm</h2><p>Cinci domenii, de la montaj la mentenanță. Fiecare lucrare se predă probată și funcțională.</p></div>
<ul class="svc">
${services.map((s) => `<li><a href="/servicii/${s.slug}/"><h3>${s.name}</h3><p>${s.short}</p><span class="go">Detalii</span></a></li>`).join('\n')}
</ul>
</div></section>

<section class="alt"><div class="wrap">
<div class="sec-head"><h2>Cum decurge o lucrare</h2><p>Un proces simplu, cu un singur interlocutor de la ofertă până la predare.</p></div>
<ol class="steps">
<li><h3>Analiză</h3><p>Primim planșele și caietul de sarcini. Verificăm cantitățile și clarificăm ce intră în ofertă.</p></li>
<li><h3>Ofertă</h3><p>Preț detaliat pe echipament și activitate, cu materiale și manoperă separate.</p></li>
<li><h3>Montaj</h3><p>Execuție pe etape, coordonată cu ceilalți executanți de pe șantier.</p></li>
<li><h3>Punere în funcțiune</h3><p>Probe, reglaje și verificarea parametrilor. Predăm instalația funcțională.</p></li>
<li><h3>Mentenanță</h3><p>Contract de mentenanță, dacă beneficiarul dorește continuitate.</p></li>
</ol>
</div></section>

<section class="dark"><div class="wrap">
<div class="sec-head"><h2>Pentru cine lucrăm</h2><p>Lucrăm direct cu beneficiarii și ca subcontractor pentru constructori generali.</p></div>
<div class="aud">
<div><h3>Instituții publice</h3><p>Școli, creșe, săli de sport, spitale, muzee. Ofertăm pentru achiziții directe.</p></div>
<div><h3>Constructori generali</h3><p>Preluăm instalațiile HVAC ca subcontractor: doar manoperă sau material și manoperă.</p></div>
<div><h3>Spații comerciale și industriale</h3><p>Birouri, hale și spații tehnice, cu sisteme VRF, ventilație și automatizări.</p></div>
<div><h3>Beneficiari cu echipamente existente</h3><p>Mentenanță, înlocuire de filtre, igienizare și service la unități deja montate.</p></div>
</div>
</div></section>

<section><div class="wrap">
<div class="sec-head"><h2>Proiecte</h2><p>Lucrări executate și în curs de execuție.</p></div>
<div class="proj-grid">
${projects.map((p) => `<a class="proj" href="/proiecte/"><div class="vis">${projVisual(p.slug)}</div><span class="tag">${p.status}</span><h3>${p.name}</h3><p>${p.desc}</p></a>`).join('\n')}
</div>
</div></section>
${ctaBand()}`,
});

// Servicii hub
layout({
  url: '/servicii/',
  title: 'Servicii HVAC: VRF, ventilație, CTA, chillere, automatizări, mentenanță',
  desc: 'Servicii HVAC complete: instalare VRF și climatizare, ventilație și CTA, pompe de căldură și chillere, automatizări BMS, service și mentenanță.',
  current: '/servicii/',
  ld: [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Acasă', item: SITE + '/' }, { '@type': 'ListItem', position: 2, name: 'Servicii', item: SITE + '/servicii/' }] }],
  body: `
<div class="page-head"><div class="wrap">${crumbs([['/', 'Acasă'], [null, 'Servicii']])}
<h1>Servicii HVAC</h1><p class="lead">De la montaj și punere în funcțiune până la mentenanță. Lucrăm cu material și manoperă sau doar cu manoperă.</p></div></div>
<section><div class="wrap"><ul class="svc">
${services.map((s) => `<li><a href="/servicii/${s.slug}/"><h3>${s.name}</h3><p>${s.short}</p><span class="go">Detalii</span></a></li>`).join('\n')}
</ul></div></section>
${ctaBand()}`,
});

// Pagini servicii
for (const s of services) {
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: s.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  const svcLd = { '@context': 'https://schema.org', '@type': 'Service', name: s.name, serviceType: s.name, description: s.desc, provider: { '@id': `${SITE}/#organizatie` }, areaServed: 'Transilvania, România' };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Acasă', item: SITE + '/' }, { '@type': 'ListItem', position: 2, name: 'Servicii', item: SITE + '/servicii/' }, { '@type': 'ListItem', position: 3, name: s.name, item: `${SITE}/servicii/${s.slug}/` }] };
  layout({
    url: `/servicii/${s.slug}/`,
    title: s.title,
    desc: s.desc,
    current: '/servicii/',
    ld: [faqLd, svcLd, bc],
    body: `
<div class="page-head"><div class="wrap">${crumbs([['/', 'Acasă'], ['/servicii/', 'Servicii'], [null, s.name]])}
<h1>${s.h1}</h1><p class="lead">${s.lead}</p>
<div class="actions"><a class="btn" href="/contact/">Cere ofertă</a><a class="btn ghost" href="tel:${TEL_HREF}">${TEL}</a></div></div></div>
${svcPhoto(s.slug)}<section><div class="wrap two">
<div><h2>Ce includem</h2><ul class="list">${s.include.map((i) => `<li>${i}</li>`).join('')}</ul></div>
<div><h2>${s.side.h}</h2><ul class="list">${s.side.items.map((i) => `<li>${i}</li>`).join('')}</ul><p style="margin-top:18px;color:var(--muted)">${s.side.p}</p>
<div class="note"><h3>Ce ne trebuie ca să ofertăm</h3><ul>${s.need.map((n) => `<li>${n}</li>`).join('')}</ul></div></div>
</div></section>
<section class="alt"><div class="wrap">
<h2>Întrebări frecvente</h2>
<div class="faq">${s.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
<h3 style="margin-top:44px">Alte servicii</h3>
<div class="rel">${services.filter((x) => x.slug !== s.slug).map((x) => `<a href="/servicii/${x.slug}/">${x.name}</a>`).join('')}</div>
</div></section>
${ctaBand()}`,
  });
}

// Proiecte
layout({
  url: '/proiecte/',
  title: 'Proiecte HVAC executate de A&A Industrial Systems',
  desc: 'Proiecte HVAC realizate și în execuție: centrale de tratare a aerului, ventilație și sisteme VRF pentru clădiri publice din Transilvania.',
  current: '/proiecte/',
  body: `
<div class="page-head"><div class="wrap">${crumbs([['/', 'Acasă'], [null, 'Proiecte']])}
<h1>Proiecte</h1><p class="lead">Lucrări executate și în curs de execuție pentru clădiri publice din Transilvania.</p></div></div>
<section><div class="wrap"><div class="proj-grid">
${projects.map((p) => `<article class="proj"><div class="vis">${projVisual(p.slug)}</div><span class="tag">${p.status}</span><h3>${p.name}</h3><p>${p.desc}</p></article>`).join('\n')}
</div></div></section>
<section class="alt"><div class="wrap"><h2>Din teren</h2><p class="lead" style="max-width:60ch">Fotografii de la lucrări executate de echipa noastră.</p>
<div class="gallery">${gallery.map(([f, c]) => `<figure><img src="/assets/img/${f}.jpg" alt="${c}" loading="lazy"><figcaption>${c}</figcaption></figure>`).join('')}</div></div></section>
${ctaBand('Ai o lucrare similară?', 'Spune-ne ce ai de montat sau de întreținut și revenim cu o ofertă.')}`,
});

// Calculator
layout({
  url: '/calculator-hvac/',
  title: 'Calculator HVAC: estimare capacitate de răcire | A&A Industrial Systems',
  desc: 'Estimează orientativ capacitatea de răcire necesară pentru un spațiu (kW și BTU/h). Rezultat orientativ, nu înlocuiește calculul de sarcină termică.',
  current: '/servicii/',
  body: `
<div class="page-head"><div class="wrap">${crumbs([['/', 'Acasă'], [null, 'Calculator HVAC']])}
<h1>Calculator capacitate de răcire</h1><p class="lead">Estimare rapidă pentru un spațiu. Rezultatul este orientativ și nu înlocuiește calculul de sarcină termică făcut de un proiectant.</p></div></div>
<section><div class="wrap two">
<form id="calc" class="calc" novalidate>
<label>Suprafață (m²)<input name="mp" type="number" min="5" max="20000" step="1" inputmode="decimal" required placeholder="ex. 45"></label>
<label>Înălțime (m)<input name="h" type="number" min="2" max="15" step="0.1" value="2.7"></label>
<label>Tip spațiu<select name="tip"><option value="95">Rezidențial</option><option value="105">Birou</option><option value="120">Comercial</option><option value="150">HoReCa</option><option value="130">Industrial / tehnic</option></select></label>
<label>Izolație<select name="iz"><option value="0.9">Bună</option><option value="1" selected>Medie</option><option value="1.2">Slabă</option></select></label>
<label>Expunere solară<select name="sol"><option value="0.95">Redusă</option><option value="1" selected>Normală</option><option value="1.15">Mare</option></select></label>
<label>Număr persoane<input name="pers" type="number" min="0" max="2000" step="1" value="0"></label>
<label>Echipamente electrice mari<select name="ech"><option value="0">Nu</option><option value="1500">Da</option></select></label>
<div class="actions"><button class="btn" type="submit">Calculează</button></div>
</form>
<div><div class="note" id="calc-out" aria-live="polite"><h3>Rezultat</h3><p style="color:var(--muted);margin:0">Completează suprafața și apasă „Calculează”.</p></div>
<p style="margin-top:18px;color:var(--muted)">Estimarea pornește de la valori medii pe m² și le corectează după izolație, expunere, persoane și echipamente. Pentru sisteme VRF, CTA sau chillere dimensionarea se face pe baza planșelor.</p></div>
</div></section>
${ctaBand('Vrei dimensionare corectă?', 'Trimite planșele sau datele spațiului și revenim cu o ofertă.')}`,
});

// Despre noi
layout({
  url: '/despre-noi/',
  title: 'Despre noi: echipa A&A Industrial Systems',
  desc: 'A&A Industrial Systems S.R.L.: firmă de instalații HVAC cu punct de lucru în Florești, Cluj. Echipă cu 9 ani de experiență în execuție HVAC.',
  current: '/despre-noi/',
  body: `
<div class="page-head"><div class="wrap">${crumbs([['/', 'Acasă'], [null, 'Despre noi']])}
<h1>Despre noi</h1><p class="lead">Firmă de instalații HVAC cu punct de lucru în Florești, jud. Cluj. Lucrăm predominant în Transilvania.</p></div></div>
<section><div class="wrap two">
<div><h2>Cum lucrăm</h2>
<p class="measure">Executăm instalații HVAC pentru clădiri publice, comerciale și industriale: sisteme VRF, ventilație și CTA, chillere, pompe de căldură și automatizări. Lucrăm direct cu beneficiarii și ca subcontractor pentru constructori generali.</p>
<p class="measure">Oferta este detaliată pe echipament și activitate. Materialele și manopera apar separat, ca să știi exact ce plătești.</p>
<p class="measure">Execuția este condusă de o echipă cu 9 ani de experiență în instalații HVAC. Operațiile cu agenți frigorifici sunt făcute de personal atestat F-gaz.</p></div>
<div><h2>Conducere</h2>
<ul class="list"><li><b>Andrei Horhogea</b>, administrator. Execuție și partea tehnică.</li><li><b>Alexandru Iacob</b>, administrator. Oferte, contracte și relația cu clienții.</li></ul>
<h2 style="margin-top:36px">Date firmă</h2>
<ul class="list"><li>A&amp;A Industrial Systems S.R.L.</li><li>CUI 51659678, Reg. Com. J2025028230008</li><li>Punct de lucru: Str. Răzoare nr. 206C, Florești, jud. Cluj</li></ul></div>
</div></section>
${ctaBand('Hai să discutăm lucrarea ta', 'Trimite-ne detaliile și revenim cu o ofertă.')}`,
});

// Contact
layout({
  url: '/contact/',
  title: 'Contact și cerere de ofertă HVAC',
  desc: 'Cere o ofertă pentru instalații HVAC: VRF, ventilație, CTA, chillere, pompe de căldură, automatizări sau mentenanță. A&A Industrial Systems, Florești, Cluj.',
  current: '/contact/',
  body: `
<div class="page-head"><div class="wrap">${crumbs([['/', 'Acasă'], [null, 'Contact']])}
<h1>Cere o ofertă</h1><p class="lead">Descrie pe scurt lucrarea. Dacă ai planșe sau caiet de sarcini, scrie-ne pe email și le atașezi acolo.</p></div></div>
<section><div class="wrap contact-grid">
<form class="q" id="quote-form" novalidate>
<div class="f2"><label>Nume<input name="nume" autocomplete="name" required></label>
<label>Telefon<input name="telefon" type="tel" autocomplete="tel"></label></div>
<label>Email<input name="email" type="email" autocomplete="email"></label>
<label>Tip lucrare<select name="tip">
<option>Sisteme VRF și climatizare</option><option>Ventilație și CTA</option><option>Pompe de căldură și chillere</option><option>Automatizări și BMS</option><option>Service și mentenanță</option><option>Altceva</option></select></label>
<label>Mesaj<textarea name="mesaj" required placeholder="Ce trebuie montat sau întreținut, unde și până când."></textarea></label>
<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
<label class="check"><input type="checkbox" name="gdpr" required><span>Sunt de acord ca datele introduse să fie folosite pentru a primi un răspuns. Detalii în <a href="/politica-confidentialitate/">politica de confidențialitate</a>.</span></label>
<div id="form-msg" class="form-msg" role="status" tabindex="-1"></div>
<div><button class="btn" type="submit">Trimite cererea</button></div>
</form>
<aside class="info"><dl>
<dt>Telefon</dt><dd><a href="tel:${TEL_HREF}">${TEL}</a></dd>
<dt>Email</dt><dd><a href="mailto:${MAIL}">${MAIL}</a></dd>
<dt>Punct de lucru</dt><dd>Str. Răzoare nr. 206C, Florești, jud. Cluj</dd>
<dt>Sediu social</dt><dd>Str. Prefect Gavril Tudorașcu nr. 21, Bl. B6, Sc. A, Et. 3, Ap. 7, Suceava</dd>
<dt>Zonă de lucru</dt><dd>Predominant Transilvania. Analizăm lucrări și în alte zone.</dd>
</dl></aside>
</div></section>`,
});

// Politică
layout({
  url: '/politica-confidentialitate/',
  title: 'Politica de confidențialitate',
  desc: 'Cum folosim datele personale transmise prin formularul de contact al site-ului A&A Industrial Systems.',
  body: `
<div class="page-head"><div class="wrap">${crumbs([['/', 'Acasă'], [null, 'Politica de confidențialitate']])}<h1>Politica de confidențialitate</h1></div></div>
<section class="legal"><div class="wrap measure">
<h2>Operatorul datelor</h2><p>A&amp;A Industrial Systems S.R.L., CUI 51659678, Reg. Com. J2025028230008, sediu social în Str. Prefect Gavril Tudorașcu nr. 21, Bl. B6, Sc. A, Et. 3, Ap. 7, Suceava. Contact: <a href="mailto:${MAIL}">${MAIL}</a>.</p>
<h2>Ce date colectăm</h2><p>Doar datele pe care le completezi în formularul de contact: nume, telefon, email și mesaj.</p>
<h2>De ce le folosim</h2><p>Pentru a răspunde cererii tale de ofertă sau de informații. Baza legală este interesul tău de a primi un răspuns și, după caz, demersurile precontractuale.</p>
<h2>Cât le păstrăm</h2><p>Cât este necesar pentru a răspunde cererii și, dacă se încheie un contract, pe durata prevăzută de lege pentru documentele comerciale.</p>
<h2>Cui le transmitem</h2><p>Mesajul este trimis pe email către echipa A&amp;A printr-un furnizor de transmitere a emailurilor. Nu vindem și nu transmitem datele în scopuri de marketing.</p>
<h2>Cookie-uri</h2><p>Site-ul nu folosește cookie-uri de urmărire sau de publicitate.</p>
<h2>Drepturile tale</h2><p>Ai dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție. Ne poți scrie la adresa de email de mai sus. Te poți adresa și Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).</p>
</div></section>`,
});

// 404
layout({
  url: '/404.html',
  title: 'Pagina nu a fost găsită',
  desc: 'Pagina căutată nu există.',
  noindex: true,
  body: `<div class="page-head"><div class="wrap"><h1>Pagina nu a fost găsită</h1><p class="lead">Adresa nu există sau a fost mutată.</p><div class="actions"><a class="btn" href="/">Acasă</a><a class="btn ghost" href="/servicii/">Servicii</a></div></div></div>`,
});

// ---------- scriere ----------
for (const p of pages) {
  const out = p.url.endsWith('.html') ? path.join(DIST, p.url) : path.join(DIST, p.url, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, p.html);
}

const today = '2026-10-30';
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter((p) => !p.noindex).map((p) => `<url><loc>${SITE}${p.url}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE}/sitemap.xml\n`);
fs.writeFileSync(path.join(DIST, 'favicon.svg'), mark({ top: '#0A1628', bottom: '#3BA7E0' }).replace('role="img" aria-label="A&amp;A Industrial Systems" ', ''));
fs.writeFileSync(path.join(DIST, '_headers'), `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
/assets/*
  Cache-Control: public, max-age=31536000, immutable
`);
// versiune albă a logo-ului pentru OG / social
fs.writeFileSync(path.join(ROOT, 'og-source.html'), `<!doctype html><meta charset=utf-8><style>@font-face{font-family:B;src:url(dist/assets/fonts/bricolage-latin.woff2)}body{margin:0;width:1200px;height:630px;background:#0A1628;display:flex;align-items:center;gap:56px;padding:0 96px;box-sizing:border-box;font-family:B}svg{width:300px;flex:none}h1{color:#fff;font-size:76px;line-height:1.02;margin:0;font-weight:800;letter-spacing:-2px}p{color:#3BA7E0;font:600 30px B;margin:22px 0 0}</style>${mark({ top: '#fff' })}<div><h1>A&amp;A Industrial Systems</h1><p>Instalații HVAC, VRF, CTA, mentenanță</p></div>`);
fs.writeFileSync(path.join(ROOT, 'logo-source.html'), `<!doctype html><meta charset=utf-8><body style="margin:0;background:transparent;width:512px;height:512px;display:grid;place-items:center"><div style="width:440px">${mark({ top: '#0A1628' })}</div>`);
console.log(`OK: ${pages.length} pagini în dist/`);
