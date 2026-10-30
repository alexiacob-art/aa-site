// Cloudflare Pages Function: POST /api/contact
// Trimite cererea de ofertă pe email prin Resend (https://resend.com).
// Variabile necesare (Pages → Settings → Environment variables):
//   RESEND_API_KEY  cheia API Resend
//   CONTACT_TO      adresa care primește cererile (ex. andrei.horhogea@aaindustrialsystems.ro)
//   MAIL_FROM       expeditor verificat în Resend (ex. "Site A&A <site@aaindustrialsystems.ro>")

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export async function onRequestPost({ request, env }) {
  let d;
  try {
    d = await request.json();
  } catch {
    return json({ error: 'Cerere invalidă.' }, 400);
  }

  if (d.website) return json({ ok: true }); // honeypot: boții completează câmpul ascuns

  const nume = String(d.nume || '').trim().slice(0, 120);
  const telefon = String(d.telefon || '').trim().slice(0, 40);
  const email = String(d.email || '').trim().slice(0, 160);
  const tip = String(d.tip || '').trim().slice(0, 80);
  const mesaj = String(d.mesaj || '').trim().slice(0, 4000);

  if (!nume || (!telefon && !email) || !mesaj) {
    return json({ error: 'Completează numele, un contact (telefon sau email) și mesajul.' }, 400);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Adresa de email nu este validă.' }, 400);
  }
  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.MAIL_FROM) {
    return json({ error: 'Trimiterea nu este configurată.' }, 503);
  }

  const html = `
    <h2>Cerere nouă de ofertă — aaindustrialsystems.ro</h2>
    <p><b>Nume:</b> ${esc(nume)}<br>
    <b>Telefon:</b> ${esc(telefon) || '—'}<br>
    <b>Email:</b> ${esc(email) || '—'}<br>
    <b>Tip lucrare:</b> ${esc(tip) || '—'}</p>
    <p style="white-space:pre-wrap">${esc(mesaj)}</p>`;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [env.CONTACT_TO],
      reply_to: email || undefined,
      subject: `Cerere ofertă: ${tip || 'general'} — ${nume}`,
      html,
    }),
  });

  if (!r.ok) return json({ error: 'Trimiterea a eșuat.' }, 502);
  return json({ ok: true });
}
