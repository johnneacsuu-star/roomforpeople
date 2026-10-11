import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// LINK_MODE=relative builds a preview that works from any folder (the claude.ai artifact).
// Default (clean) builds for roomforpeople.ro on Vercel, with cleanUrls in vercel.json.
const relative = process.env.LINK_MODE === 'relative';

export default defineConfig({
  site: 'https://roomforpeople.ro',
  trailingSlash: 'never',
  build: { format: 'file', assets: 'a' },
  outDir: relative ? './dist-preview' : './dist',
  integrations: [
    sitemap({ filter: (page) => !/\/(oglinda|confidentialitate|404)$/.test(page) }),
  ],
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
