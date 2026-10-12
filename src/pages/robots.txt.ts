import type { APIRoute } from 'astro';

// Pe domeniul real: permite indexarea. Pe previzualizări (vercel.app): blochează tot.
const onRealDomain = /(^|\.)roomforpeople\.ro$/.test(process.env.VERCEL_PROJECT_PRODUCTION_URL || '');
const preview = !!process.env.VERCEL && !onRealDomain;

export const GET: APIRoute = () => {
  const body = preview
    ? 'User-agent: *\nDisallow: /\n'
    : 'User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: https://roomforpeople.ro/sitemap-index.xml\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
