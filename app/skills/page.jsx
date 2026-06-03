// Route stub — content is rendered once by <FullPage> in app/layout.jsx.

const title = 'Skills';
const description = 'Mechanistic interpretability (SAEs, patching), Time-Series Foundation Models, distributed inference routing, FAISS semantic search, FastAPI MLOps, and operational risk auditing.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/skills' },
  openGraph: {
    title: `${title} · Nabin Prasad Dev`,
    description,
    url: 'https://nabinpdev.com/skills',
    type: 'website'
  },
  twitter: { title: `${title} · Nabin Prasad Dev`, description }
};

export default function Page() { return null; }
