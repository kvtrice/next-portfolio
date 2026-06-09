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
    default: 'Katrice Mountford | Product Manager',
    template: '%s | Katrice Mountford',
  },
  description:
    'Product Manager based in Melbourne, with experience across health tech, enterprise SaaS, and early-stage startups. Technical depth in AI, engineering and design. Passionate about work that makes a real difference.',
  keywords: [
    'Product Manager',
    'Product Management',
    'Health Tech',
    'AI Products',
    'GenAI',
    'Startup',
    '0 to 1',
    'Software Engineering',
    'UX Design',
    'Melbourne',
    'Katrice Mountford',
  ],
  authors: [{ name: 'Katrice Mountford', url: 'https://katmountford.com' }],
  openGraph: {
    title: 'Katrice Mountford | Product Manager',
    description:
      'Product manager with a startup mindset and technical depth across AI, engineering and design. Experience in health tech, enterprise SaaS, and 0→1 builds. Based in Melbourne.',
    url: 'https://katmountford.com',
    siteName: 'Katrice Mountford',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katrice Mountford | Product Manager',
    description:
      'Product manager with a startup mindset and technical depth across AI, engineering and design. Experience in health tech, enterprise SaaS, and 0→1 builds. Based in Melbourne.',
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
