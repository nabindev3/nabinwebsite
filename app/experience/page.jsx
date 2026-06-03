// Route stub — content is rendered once by <FullPage> in app/layout.jsx.

const title = 'Experience';
const description = 'AI/ML research at Nepal Academy of Science & Technology (GAN-based earthquake early warning), data engineering at Shailung Investment Group (30% efficiency gain), and operational leadership at Nobu Hotel Toronto.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/experience' },
  openGraph: {
    title: `${title} · Nabin Prasad Dev`,
    description,
    url: 'https://nabinpdev.com/experience',
    type: 'profile'
  },
  twitter: { title: `${title} · Nabin Prasad Dev`, description }
};

export default function Page() { return null; }
