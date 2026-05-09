import type { Metadata } from 'next';
import './globals.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeProvider from './ThemeProvider';
import { Bricolage_Grotesque, Poppins, Paprika } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

const paprika = Paprika({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
});

export const metadata: Metadata = {
  title: {
    default: 'Katrice Mountford | Product Manager',
    template: '%s | Katrice Mountford',
  },
  description:
    'Product Manager with 8+ years across software engineering, AI and product design. Specialising in 0→1 builds, health tech, and translating complex problems into simple solutions. Based in Melbourne.',
  keywords: [
    'Product Manager',
    'Product Management',
    'UX Design',
    'Software Engineering',
    'AI',
    'Health Tech',
    'Melbourne',
    'Katrice Mountford',
    'GenAI',
    '0 to 1',
  ],
  authors: [{ name: 'Katrice Mountford', url: 'https://katmountford.com' }],
  openGraph: {
    title: 'Katrice Mountford | Product Manager',
    description:
      'Product Manager with 8+ years across software engineering, AI and product design. Based in Melbourne.',
    url: 'https://katmountford.com',
    siteName: 'Katrice Mountford',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katrice Mountford | Product Manager',
    description:
      'Product Manager with 8+ years across software engineering, AI and product design. Based in Melbourne.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${bricolage.variable} ${poppins.variable} ${paprika.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
