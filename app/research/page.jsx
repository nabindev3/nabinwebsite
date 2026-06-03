// Route stub — content is rendered once by <FullPage> in app/layout.jsx.

const title = 'Research';
const description = 'GAN-based earthquake early warning (NAST Nepal), urban green-space governance analysis (Kathmandu → Toronto), AI ethics in luxury hospitality, and applied readings on civic technology.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/research' },
  openGraph: {
    title: `${title} · Nabin Prasad Dev`,
    description,
    url: 'https://nabinpdev.com/research',
    type: 'website'
  },
  twitter: { title: `${title} · Nabin Prasad Dev`, description }
};

export default function Page() { return null; }
