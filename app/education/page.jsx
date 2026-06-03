// Route stub — content is rendered once by <FullPage> in app/layout.jsx.

const title = 'Education';
const description = 'Postgraduate Certificate in AI/ML — Lambton College Toronto (2024). BTech in Computer Science & Engineering — KIIT University (2021). Deep Learning Specialization (DeepLearning.AI), AWS ML, Google Data Analytics.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/education' },
  openGraph: {
    title: `${title} · Nabin Prasad Dev`,
    description,
    url: 'https://nabinpdev.com/education',
    type: 'profile'
  },
  twitter: { title: `${title} · Nabin Prasad Dev`, description }
};

export default function Page() { return null; }
