import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Cursor from '../components/Cursor.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';
import FullPage from '../components/FullPage.jsx';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-head',
  display: 'swap'
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap'
});

const SITE_URL = 'https://nabinpdev.com';
const SITE_NAME = 'Nabin Prasad Dev';
const DEFAULT_TITLE = 'Nabin Prasad Dev — AI/ML Engineer';
const DEFAULT_DESC = 'AI/ML Engineer with 7+ years of operational leadership — building Computer Vision, NLP, and LLM-routing systems for urban policy, hospitality, and public safety. Toronto, Canada.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s · Nabin Prasad Dev'
  },
  description: DEFAULT_DESC,
  applicationName: SITE_NAME,
  authors: [{ name: 'Nabin Prasad Dev', url: SITE_URL }],
  creator: 'Nabin Prasad Dev',
  publisher: 'Nabin Prasad Dev',
  keywords: [
    'Nabin Prasad Dev',
    'AI/ML Engineer',
    'Machine Learning Engineer Toronto',
    'Computer Vision',
    'NLP',
    'LLM Routing',
    'Mechanistic Interpretability',
    'Sparse Autoencoders',
    'MLOps',
    'Hospitality AI',
    'Urban Policy AI',
    'Civic Technology',
    'Python', 'PyTorch', 'TensorFlow'
  ],
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: 'Bridging Data Intelligence with Premium User Experience. AI/ML Engineer · Researcher · Urban Thinker.',
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_CA',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Nabin Prasad Dev — AI/ML Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: 'AI/ML Engineer · Researcher · Urban Thinker. Bridging Data Intelligence with Premium User Experience.',
    images: ['/og-cover.png'],
    creator: '@nabinpdev'
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=4', sizes: 'any' },
      { url: '/favicon-32.png?v=4', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png?v=4', type: 'image/png', sizes: '16x16' }
    ],
    apple: [{ url: '/apple-touch-icon.png?v=4', sizes: '180x180' }]
  },
  category: 'technology'
};

export const viewport = {
  themeColor: '#121414',
  colorScheme: 'dark'
};

// JSON-LD: Person + WebSite + ProfilePage schema for rich Knowledge Graph signals.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Nabin Prasad Dev',
      alternateName: ['Nabin Dev', 'Nabin Prasad'],
      url: SITE_URL,
      image: `${SITE_URL}/nn.jpeg`,
      jobTitle: 'AI/ML Engineer',
      description: DEFAULT_DESC,
      worksFor: { '@type': 'Organization', name: 'Nobu Hotel Toronto' },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Lambton College', address: 'Toronto, ON, Canada' },
        { '@type': 'CollegeOrUniversity', name: 'KIIT University',  address: 'Bhubaneswar, India' }
      ],
      knowsAbout: [
        'Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing',
        'Mechanistic Interpretability', 'Sparse Autoencoders', 'LLM Routing',
        'Time-Series Foundation Models', 'MLOps', 'Hospitality AI', 'Urban Policy', 'Civic Technology'
      ],
      knowsLanguage: ['English', 'Nepali', 'French'],
      nationality: { '@type': 'Country', name: 'Nepal' },
      address: { '@type': 'PostalAddress', addressLocality: 'Toronto', addressRegion: 'ON', addressCountry: 'CA' },
      sameAs: [
        'https://github.com/nabindev3',
        'https://www.linkedin.com/in/nabin-prasad-dev/'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESC,
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-CA'
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: DEFAULT_TITLE,
      mainEntity: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-CA'
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        {/* Structured data: Person + WebSite + ProfilePage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Cursor />
        <ScrollProgress />
        <Navbar />
        {/* Per-route page.jsx is now an empty stub used only for metadata.
            FullPage renders every section once and stays mounted across routes
            so scrolling is continuous and canvases don't re-init on nav. */}
        {children}
        <FullPage />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
