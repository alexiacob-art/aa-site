// POST /api/cariere  (multipart/form-data): trimite candidatura și CV-ul pe email prin Resend.
// Folosește aceleași variabile ca formularul de contact: RESEND_API_KEY, CONTACT_TO, MAIL_FROM.
// Opțional: JOBS_TO (adresă separată pentru candidaturi; dacă lipsește se folosește CONTACT_TO).

const MAX_BYTES = 5 * 1024 * 1024;

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function kind(bytes) {
  const b = new Uint8Array(bytes.slice(0, 8));
  if (b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46) return 'pdf'; // %PDF
  if (b[0] === 0x50 && b[1] === 0x4b) return 'docx'; // zip
  if (b[0] === 0xd0 && b[1] === 0xcf && b[2] === 0x11 && b[3] === 0xe0) return 'doc'; // OLE
  return null;
}

function b64(buf) {
  const bytes = new Uint8Array(buf);
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s);
}

export async function onRequestPost({ request, env }) {
  let f;
  try {
    f = await request.formData();
  } catch {
    return json({ error: 'Cerere invalidă.' }, 400);
  }
  if (f.get('website')) return json({ ok: true }); // honeypot

  const nume = String(f.get('nume') || '').trim().slice(0, 120);
  const telefon = String(f.get('telefon') || '').trim().slice(0, 40);
  const email = String(f.get('email') || '').trim().slice(0, 160);
  const post = String(f.get('post') || '').trim().slice(0, 120);
  const mesaj = String(f.get('mesaj') || '').trim().slice(0, 3000);
  const cv = f.get('cv');

  if (!nume || !telefon || !email) return json({ error: 'Completează numele, telefonul și emailul.' }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Adresa de email nu este validă.' }, 400);
  if (!f.get('gdpr')) return json({ error: 'Bifează acordul pentru prelucrarea datelor.' }, 400);
  if (!cv || typeof cv === 'string' || !cv.size) return json({ error: 'Atașează CV-ul (PDF, DOC sau DOCX).' }, 400);
  if (cv.size > MAX_BYTES) return json({ error: 'CV-ul depășește 5 MB.' }, 400);

  const buf = await cv.arrayBuffer();
  const k = kind(buf);
  if (!k) return json({ error: 'Formatul CV-ului trebuie să fie PDF, DOC sau DOCX.' }, 400);
  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.MAIL_FROM) return json({ error: 'Trimiterea nu este configurată.' }, 503);

  const safeName = (String(cv.name || 'CV').replace(/[^\w.\- ]+/g, '_').slice(0, 80)) || `CV.${k}`;
  const html = `
    <h2>Candidatură nouă — aaindustrialsystems.ro</h2>
    <p><b>Post:</b> ${esc(post) || '—'}<br>
    <b>Nume:</b> ${esc(nume)}<br>
    <b>Telefon:</b> ${esc(telefon)}<br>
    <b>Email:</b> ${esc(email)}</p>
    <p style="white-space:pre-wrap">${esc(mesaj) || '(fără mesaj)'}</p>
    <p>CV atașat: ${esc(safeName)}</p>`;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [env.JOBS_TO || env.CONTACT_TO],
      reply_to: email,
      subject: `Candidatură: ${post || 'aplicare spontană'} — ${nume}`,
      html,
      attachments: [{ filename: safeName, content: b64(buf) }],
    }),
  });
  if (!r.ok) return json({ error: 'Trimiterea a eșuat.' }, 502);
  return json({ ok: true });
}
