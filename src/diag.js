(function () {
  var root = document.getElementById('diag');
  if (!root) return;

  var EQ = [
    ['ac', 'Aer condiționat (split, multisplit)'],
    ['ac', 'Pompă de căldură'],
    ['ac', 'VRF / VRV'],
    ['ind', 'Rooftop'],
    ['ind', 'Chiller'],
    ['ind', 'CTA / ventilație'],
    ['cent', 'Centrală termică'],
    ['ac', 'Nu știu']
  ];
  var SYM = [
    ['pornire', 'Nu pornește'],
    ['temp', 'Nu răcește / nu încălzește suficient'],
    ['zgomot', 'Zgomot sau vibrații'],
    ['apa', 'Scurgeri de apă sau gheață'],
    ['eroare', 'Afișează un cod de eroare sau alarmă'],
    ['miros', 'Miros neplăcut'],
    ['consum', 'Consum mare sau porniri dese']
  ];
  var WHEN = [
    ['brusc', 'A apărut brusc'],
    ['des', 'Apare din când în când'],
    ['lent', 'S-a agravat în timp'],
    ['dupa', 'După o lucrare, o furtună sau o pană de curent']
  ];
  var MNT = [
    ['recent', 'Sub 12 luni'],
    ['vechi', 'Peste 12 luni'],
    ['nu', 'Niciodată sau nu știu']
  ];

  var CAUZE = {
    pornire: {
      ac: ['Siguranța sau întrerupătorul echipamentului a declanșat.', 'Lipsă de comunicație între unitatea interioară și cea exterioară.', 'Placă electronică sau protecție activată (presiune, tensiune).'],
      ind: ['Protecții declanșate în tablou (relee termice, siguranțe).', 'Alarmă activă care blochează pornirea sau lipsa comenzii din automatizare.', 'Defect la contactor, variator sau senzor.'],
      cent: ['Presiunea apei din instalație este sub valoarea minimă.', 'Lipsă de gaz, sau programul / termostatul nu cere căldură.', 'Eroare de aprindere sau de evacuare a gazelor arse.']
    },
    temp: {
      ac: ['Filtre sau schimbătoare de căldură murdare.', 'Unitatea exterioară blocată, murdară sau cu aer recirculat.', 'Pierdere de agent frigorific (scurgere pe traseu).', 'Echipament subdimensionat pentru spațiu.'],
      ind: ['Filtre colmatate sau debit de aer scăzut.', 'Baterii murdare sau debit de apă scăzut (pompă, vană, aer în circuit).', 'Setpoint sau secvență greșită în automatizare.', 'Pierdere de agent frigorific.'],
      cent: ['Aer în instalație sau radiatoare nebalansate.', 'Pompă de circulație slabă sau blocată.', 'Calcar pe schimbător sau presiune prea mică.']
    },
    zgomot: {
      ac: ['Ventilator dezechilibrat sau obiect în unitatea exterioară.', 'Suporți sau tuburi care vibrează pe perete.', 'Compresor sau motor ventilator uzat.'],
      ind: ['Rulmenți uzați sau ventilator dezechilibrat.', 'Curele sau cuplaje slăbite.', 'Clapete sau tubulatură care vibrează la debit mare.'],
      cent: ['Pompă de circulație cu aer sau rulmenți uzați.', 'Calcar sau depuneri în schimbător.', 'Presiune sau debit în afara valorilor normale.']
    },
    apa: {
      ac: ['Tub de condens înfundat sau fără pantă.', 'Filtre murdare, care duc la îngheț și apoi la scurgeri.', 'Izolație lipsă pe tuburile frigorifice.'],
      ind: ['Tavă de condens sau sifon înfundat.', 'Izolație deteriorată pe conducte reci.', 'Racord hidraulic neetanș.'],
      cent: ['Racord, robinet sau garnitură neetanșă.', 'Presiune prea mare și supapa de siguranță descarcă.', 'Vas de expansiune defect.']
    },
    eroare: {
      ac: ['Cod de eroare de comunicație, senzor sau protecție.', 'Eroare repetată după repornire: de obicei o defecțiune reală, nu o simplă blocare.'],
      ind: ['Alarmă de presiune, debit, temperatură sau senzor.', 'Alarmă repetată: cauza trebuie găsită, nu resetată.'],
      cent: ['Cod de eroare de aprindere, presiune sau senzor.', 'Eroare repetată după resetare: necesită verificare tehnică.']
    },
    miros: {
      ac: ['Filtre sau baterii murdare, cu mucegai.', 'Apă stagnantă în tava de condens.'],
      ind: ['Filtre, baterii sau tavă de condens murdare.', 'Aer reîntors dintr-o zonă cu mirosuri.'],
      cent: ['Ardere incompletă sau evacuare defectă.', 'Posibilă scurgere de gaz.']
    },
    consum: {
      ac: ['Filtre sau unitate exterioară murdare.', 'Pierdere de agent frigorific.', 'Setări sau program care forțează funcționarea.'],
      ind: ['Filtre și baterii colmatate.', 'Reglaj de automatizare sau ventilatoare supraturate.', 'Pierdere de agent frigorific sau debit hidraulic scăzut.'],
      cent: ['Calcar sau depuneri în schimbător.', 'Aer sau presiune greșită în instalație.', 'Termostat sau program setat incorect.']
    }
  };

  var VERIF = {
    pornire: ['Verifică dacă e alimentare și dacă siguranța nu e căzută. O singură repornire, nu mai multe.', 'Notează ce arată afișajul sau ledurile.'],
    temp: ['Verifică dacă filtrele sunt curate.', 'Verifică dacă unitatea exterioară nu e blocată sau acoperită.', 'Verifică modul și temperatura setate.'],
    zgomot: ['Oprește echipamentul dacă zgomotul e metalic sau puternic.', 'Verifică dacă nu sunt obiecte în apropierea ventilatorului.'],
    apa: ['Pune un vas sub scurgere și oprește echipamentul dacă apa ajunge lângă prize sau tablouri.', 'Nu încerca să spargi gheața, las-o să se dezghețe.'],
    eroare: ['Notează codul exact și modelul echipamentului (de pe etichetă).', 'Poți reseta o singură dată. Dacă revine, oprește.'],
    miros: ['Oprește echipamentul și aerisește spațiul.'],
    consum: ['Curăță sau verifică filtrele.', 'Notează de când a crescut consumul.']
  };

  var step = 0, ans = {};
  var title = document.getElementById('diag-title');
  var body = document.getElementById('diag-body');
  var bar = document.getElementById('diag-bar');
  var count = document.getElementById('diag-count');
  var back = document.getElementById('diag-back');

  function opt(group, list, key) {
    var h = '<div class="diag-opts" role="radiogroup" aria-labelledby="diag-title">';
    list.forEach(function (o, i) {
      h += '<button type="button" class="diag-opt" role="radio" aria-checked="false" data-k="' + key + '" data-i="' + i + '">' + o[1] + '</button>';
    });
    return h + '</div>';
  }

  function render() {
    back.hidden = step === 0 || step > 3;
    if (step <= 3) {
      count.textContent = 'Pas ' + (step + 1) + ' din 4';
      bar.style.width = ((step + 1) * 25) + '%';
      var cfg = [
        ['Ce tip de echipament ai?', EQ, 'eq'],
        ['Ce se întâmplă cu el?', SYM, 'sym'],
        ['Cum a apărut problema?', WHEN, 'when'],
        ['Când a fost ultima revizie?', MNT, 'mnt']
      ][step];
      title.textContent = cfg[0];
      body.innerHTML = opt(null, cfg[1], cfg[2]);
      body.querySelector('.diag-opt').focus();
    } else {
      result();
    }
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function result() {
    bar.style.width = '100%';
    count.textContent = 'Rezultat';
    var grp = EQ[ans.eq][0], eqName = EQ[ans.eq][1];
    var sym = SYM[ans.sym][0], symName = SYM[ans.sym][1];
    var when = WHEN[ans.when][0], mnt = MNT[ans.mnt][0];
    title.textContent = 'Evaluare orientativă';
    var causes = (CAUZE[sym][grp] || CAUZE[sym].ac).slice();
    var checks = VERIF[sym].slice();
    var extra = [];
    if (when === 'dupa') extra.push('Problema a apărut după o lucrare sau o pană de curent: verifică întâi alimentarea și tabloul electric.');
    if (when === 'lent') extra.push('Agravarea în timp indică de obicei uzură sau murdărire, nu o defecțiune bruscă.');
    if (mnt !== 'recent') extra.push('Revizia nu e la zi. Filtrele murdare și bateriile necurățate cauzează mare parte din probleme.');
    var urgent = sym === 'miros' || (grp === 'cent' && (sym === 'pornire' || sym === 'apa'));
    var safety = '';
    if (urgent) {
      safety = '<div class="note warn"><h3>Atenție</h3><p>Dacă simți miros de gaz: nu aprinde nimic și nu folosi întrerupătoare, aerisește, ieși din spațiu și sună la 112 sau la distribuitorul de gaze. Dacă miroase a ars: oprește echipamentul din siguranță și nu-l mai porni.</p></div>';
    }
    var wa = 'Bună ziua, am o problemă la un echipament.\nTip: ' + eqName + '\nProblema: ' + symName + '\nApariție: ' + WHEN[ans.when][1] + '\nUltima revizie: ' + MNT[ans.mnt][1];
    var h = safety +
      '<p class="diag-sum"><strong>' + esc(eqName) + '</strong> · ' + esc(symName) + '</p>' +
      '<h3>Cauze frecvente</h3><ul class="list">' + causes.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ul>' +
      '<h3 style="margin-top:22px">Ce poți verifica în siguranță</h3><ul class="list">' + checks.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ul>' +
      (extra.length ? '<h3 style="margin-top:22px">De reținut</h3><ul class="list">' + extra.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ul>' : '') +
      '<p class="diag-disc">Rezultatul e orientativ și se bazează doar pe răspunsurile tale. Nu înlocuiește verificarea echipamentului de un tehnician autorizat. Nu deschide echipamentele și nu umbla la instalația electrică sau frigorifică.</p>' +
      '<div class="actions"><a class="btn" href="tel:+40754531194">Sună: +40 754 531 194</a>' +
      '<a class="btn ghost" href="https://wa.me/40754531194?text=' + encodeURIComponent(wa) + '" rel="noopener">Trimite pe WhatsApp</a>' +
      '<a class="btn ghost" href="/contact/">Cere ofertă</a>' +
      '<button type="button" class="btn ghost" id="diag-restart">Reia diagnosticul</button></div>';
    body.innerHTML = h;
    var r = document.getElementById('diag-restart');
    r.addEventListener('click', function () { step = 0; ans = {}; render(); });
    title.setAttribute('tabindex', '-1'); title.focus();
  }

  body.addEventListener('click', function (e) {
    var b = e.target.closest('.diag-opt');
    if (!b) return;
    ans[b.getAttribute('data-k')] = parseInt(b.getAttribute('data-i'), 10);
    step++;
    render();
  });
  back.addEventListener('click', function () { if (step > 0) { step--; render(); } });
  render();
})();
