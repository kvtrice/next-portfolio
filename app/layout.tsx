import type { Metadata } from 'next';
import './globals.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeProvider from './ThemeProvider';
import AskKat from './AskKat';
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
    default: 'Katrice Mountford | AI Product Engineer',
    template: '%s | Katrice Mountford',
  },
  description:
    'AI Product Engineer based in Melbourne. 9+ years building across product, AI and design — from 0→1 startup work to enterprise SaaS to AI products at Aurecon. Drawn to health tech and tricky problems.',
  keywords: [
    'AI Product Engineer',
    'Product Engineer',
    'Product Manager',
    'Product Management',
    'AI',
    'GenAI',
    'Software Engineering',
    'UX Design',
    'Health Tech',
    '0 to 1',
    'Builder',
    'Melbourne',
    'Katrice Mountford',
  ],
  authors: [{ name: 'Katrice Mountford', url: 'https://katmountford.com' }],
  openGraph: {
    title: 'Katrice Mountford | AI Product Engineer',
    description:
      'Building products across product, AI and design. 9+ years across PM, startup founding, and AI product work. Based in Melbourne.',
    url: 'https://katmountford.com',
    siteName: 'Katrice Mountford',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katrice Mountford | AI Product Engineer',
    description:
      'Building products across product, AI and design. 9+ years across PM, startup founding, and AI product work. Based in Melbourne.',
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
          <AskKat />
        </ThemeProvider>
      </body>
    </html>
  );
}
