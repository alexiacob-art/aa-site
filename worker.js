// Cloudflare Worker: servește site-ul static din ./dist și răspunde la POST /api/contact.
// Variabile necesare (Settings → Variables and secrets): RESEND_API_KEY, CONTACT_TO, MAIL_FROM.
import { onRequestPost } from './functions/api/contact.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method === 'POST') return onRequestPost({ request, env, ctx });
      return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
    }
    return env.ASSETS.fetch(request);
  },
};
