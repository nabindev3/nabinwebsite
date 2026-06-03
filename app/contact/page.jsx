// Route stub — content is rendered once by <FullPage> in app/layout.jsx.

const title = 'Contact';
const description = 'Open to AI/ML Engineering roles in Toronto and remote. Reach out for collaborations on interpretability research, LLM routing systems, or civic-technology projects.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `${title} · Nabin Prasad Dev`,
    description,
    url: 'https://nabinpdev.com/contact',
    type: 'website'
  },
  twitter: { title: `${title} · Nabin Prasad Dev`, description }
};

export default function Page() { return null; }
