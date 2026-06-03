// Next.js file-based robots.txt. Auto-emitted at /robots.txt in the static export.

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/']
      }
    ],
    sitemap: 'https://nabinpdev.com/sitemap.xml',
    host: 'https://nabinpdev.com'
  };
}
