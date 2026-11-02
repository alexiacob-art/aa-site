// Cloudflare Worker: servește site-ul static din ./dist și răspunde la POST /api/contact și /api/cariere.
// Variabile necesare (Settings → Variables and secrets): RESEND_API_KEY, CONTACT_TO, MAIL_FROM. Opțional: JOBS_TO.
import { onRequestPost as contact } from './functions/api/contact.js';
import { onRequestPost as cariere } from './functions/api/cariere.js';

const routes = { '/api/contact': contact, '/api/cariere': cariere };

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const handler = routes[url.pathname];
    if (handler) {
      if (request.method === 'POST') return handler({ request, env, ctx });
      return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
    }
    return env.ASSETS.fetch(request);
  },
};
