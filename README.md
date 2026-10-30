# Site A&A Industrial Systems

Site static, în română, fără framework și fără cookie-uri. Se generează cu `node build.mjs` în `dist/`.

## Structură
- `build.mjs` — conținutul paginilor (servicii, proiecte, texte) și șabloanele. Aici se editează textele.
- `src/styles.css`, `src/main.js` — design și formular.
- `src/img/` — fotografii de proiect. Numește fișierul ca slug-ul proiectului: `muzeul-mutra.jpg`, `cresa-vetis.jpg`. Apar automat în carduri.
- `functions/api/contact.js` — trimite formularul pe email (Cloudflare Pages Function, prin Resend).

## Publicare pe Cloudflare Pages (gratuit)
1. Pune folderul într-un repo GitHub al firmei.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm install && node build.mjs` · Output directory: `dist`.
4. Settings → Environment variables (Production):
   - `RESEND_API_KEY` — cheia din contul Resend
   - `CONTACT_TO` — adresa care primește cererile
   - `MAIL_FROM` — ex. `Site A&A <site@aaindustrialsystems.ro>` (domeniul se verifică în Resend)
5. Custom domains → adaugă `aaindustrialsystems.ro` și `www.aaindustrialsystems.ro`.

## Mutarea domeniului (ROTLD → Cloudflare DNS)
1. În Cloudflare adaugă domeniul (plan Free). Cloudflare importă recordurile existente.
2. Compară cu zona DNS din Hostinger și asigură-te că **MX, SPF (TXT), DKIM și DMARC** sunt identice. Altfel emailurile se opresc.
3. În ROTLD schimbă doar nameserverele cu cele date de Cloudflare.
4. Adaugă recordurile Resend (DKIM/SPF) în Cloudflare, pentru formular.
5. Redirect `www` → domeniul fără www: Cloudflare → Rules → Redirect Rules.

## Înainte de publicare
- Înlocuiește cardurile-placeholder cu fotografii reale.
- Verifică textele tehnice (servicii) cu Andrei.
- Verifică numele proiectelor afișate (client nenominalizat = nu apare).
- Adaugă numerele certificatelor F-gaz / autorizărilor când le ai.
