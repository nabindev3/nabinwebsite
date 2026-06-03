// Route stub — content is rendered once by <FullPage> in app/layout.jsx.

const title = 'About';
const description = 'AI/ML Engineer with 7+ years across hospitality operations, ML research, and data engineering. Computer Science background with a postgrad certificate in AI/ML from Lambton College Toronto.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `${title} · Nabin Prasad Dev`,
    description,
    url: 'https://nabinpdev.com/about',
    type: 'profile'
  },
  twitter: { title: `${title} · Nabin Prasad Dev`, description }
};

export default function Page() { return null; }
