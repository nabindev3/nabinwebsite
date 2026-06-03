// Route stub — content is rendered once by <FullPage> in app/layout.jsx.

const title = 'Projects';
const description = 'Cascade Engine (multi-tier LLM inference router with CD-TS), FM Difficulty Probe (cross-modal SAE interpretability across Pythia & Chronos-T5), Hotel Revenue ML Platform, IoT traffic-signal Vision Zero system, and more.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: `${title} · Nabin Prasad Dev`,
    description,
    url: 'https://nabinpdev.com/projects',
    type: 'website'
  },
  twitter: { title: `${title} · Nabin Prasad Dev`, description }
};

export default function Page() { return null; }
