import type { Metadata } from 'next';
import './globals.css';
import Navbar from './Navbar';
import Footer from './Footer';

import { Bricolage_Grotesque, Poppins } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
  // specify weights you actually use
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Katrice Mountford',
  description:
    'Katrice Mountford is a tech professional with a background in UX/UI Design, Product Management, Software Engineering and Customer Experience, she specializes in building engaging, accessible, and high-performing web experiences. She thrives on collaboration, design-driven development, and continuous learning to create seamless, impactful digital products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme=''>
      <body className={`${bricolage.variable} ${poppins.variable} font-body`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
