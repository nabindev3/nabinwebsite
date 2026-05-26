import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Cursor from '../components/Cursor.jsx';
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

export const metadata = {
  metadataBase: new URL('https://nabinpdev.com'),
  title: {
    default: 'Nabin Prasad Dev — AI/ML Engineer',
    template: '%s · Nabin Prasad Dev'
  },
  description: 'AI/ML Engineer and Operational Leader bridging Data Intelligence with Premium User Experience.',
  openGraph: {
    title: 'Nabin Prasad Dev — AI/ML Engineer',
    description: 'Bridging Data Intelligence with Premium User Experience.',
    type: 'website',
    url: 'https://nabinpdev.com'
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=4', sizes: 'any' },
      { url: '/favicon-32.png?v=4', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png?v=4', type: 'image/png', sizes: '16x16' }
    ],
    apple: [{ url: '/apple-touch-icon.png?v=4', sizes: '180x180' }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Cursor />
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
