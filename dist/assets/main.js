(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var calc = document.getElementById('calc');
  if (calc) {
    var out = document.getElementById('calc-out');
    calc.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = calc.elements, mp = parseFloat(f.mp.value);
      if (!(mp > 0)) { out.innerHTML = '<h3>Rezultat</h3><p>Introdu suprafața spațiului.</p>'; f.mp.focus(); return; }
      var h = parseFloat(f.h.value) || 2.7;
      var w = mp * parseFloat(f.tip.value) * (h / 2.7) * parseFloat(f.iz.value) * parseFloat(f.sol.value)
        + (parseInt(f.pers.value, 10) || 0) * 100 + parseFloat(f.ech.value);
      var kw = w / 1000, btu = w * 3.412;
      var lo = Math.round(kw * 0.9 * 10) / 10, hi = Math.round(kw * 1.1 * 10) / 10;
      out.innerHTML = '<h3>Rezultat orientativ</h3><p style="font-size:1.4rem;margin:0 0 6px"><strong>' + kw.toFixed(1).replace('.', ',') + ' kW</strong> răcire</p>' +
        '<p style="margin:0;color:var(--muted)">Interval ' + String(lo).replace('.', ',') + ' – ' + String(hi).replace('.', ',') + ' kW · aprox. ' + Math.round(btu / 100) * 100 + ' BTU/h</p>' +
        '<p style="margin:14px 0 0"><a href="/contact/">Cere ofertă pentru acest spațiu</a></p>';
    });
  }

  var form = document.getElementById('quote-form');
  if (!form) return;
  var msg = document.getElementById('form-msg');
  var submit = form.querySelector('button[type=submit]');

  function show(kind, html) {
    msg.className = 'form-msg ' + kind;
    msg.innerHTML = html;
    msg.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = v; });
    if (data.website) return; // honeypot
    submit.disabled = true;
    submit.textContent = 'Se trimite…';
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok) throw new Error(res.j && res.j.error || 'eroare');
        form.reset();
        show('ok', 'Mesajul a fost trimis. Revenim cu un răspuns cât mai curând.');
      })
      .catch(function () {
        var body = encodeURIComponent(
          'Nume: ' + (data.nume || '') + '\nTelefon: ' + (data.telefon || '') +
          '\nTip lucrare: ' + (data.tip || '') + '\n\n' + (data.mesaj || '')
        );
        show('err',
          'Mesajul nu a putut fi trimis. Ne poți scrie direct la ' +
          '<a href="mailto:andrei.horhogea@aaindustrialsystems.ro?subject=Cerere%20ofert%C4%83&body=' + body + '">andrei.horhogea@aaindustrialsystems.ro</a>' +
          ' sau ne poți suna la <a href="tel:+40754531194">+40 754 531 194</a>.');
      })
      .then(function () {
        submit.disabled = false;
        submit.textContent = 'Trimite cererea';
      });
  });
})();
