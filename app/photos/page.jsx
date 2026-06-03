// Route stub — content is rendered once by <FullPage> in app/layout.jsx.

const title = 'Photos';
const description = 'Through my lens — Toronto, Montréal, Kathmandu. A visual notebook of the cities that shape how I think about urban systems and civic technology.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/photos' },
  openGraph: {
    title: `${title} · Nabin Prasad Dev`,
    description,
    url: 'https://nabinpdev.com/photos',
    type: 'website'
  },
  twitter: { title: `${title} · Nabin Prasad Dev`, description }
};

export default function Page() { return null; }
