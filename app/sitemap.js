// Next.js file-based sitemap. Auto-emitted at /sitemap.xml in the static export.
// Update lastModified when the site's content materially changes.

const BASE = 'https://nabinpdev.com';
const LAST_MODIFIED = new Date('2026-06-02');

const routes = [
  { path: '',           priority: 1.0, changeFrequency: 'monthly' },
  { path: '/about',     priority: 0.9, changeFrequency: 'monthly' },
  { path: '/projects',  priority: 0.9, changeFrequency: 'monthly' },
  { path: '/skills',    priority: 0.8, changeFrequency: 'monthly' },
  { path: '/experience',priority: 0.8, changeFrequency: 'monthly' },
  { path: '/research',  priority: 0.7, changeFrequency: 'monthly' },
  { path: '/education', priority: 0.6, changeFrequency: 'yearly'  },
  { path: '/photos',    priority: 0.5, changeFrequency: 'monthly' },
  { path: '/contact',   priority: 0.6, changeFrequency: 'yearly'  }
];

export default function sitemap() {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority
  }));
}
