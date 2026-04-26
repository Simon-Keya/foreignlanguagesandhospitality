// src/app/layout.tsx

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import WhatsAppFAB from '@/components/layout/WhatsAppFab';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "International School Kenya", 
    "German language Narok", 
    "Ausbildung Germany", 
    "IIFLHM", 
    "hospitality management Kenya"
  ],
  authors: [{ name: "IIFLHM" }],
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [{ url: '/images/hero-bg.jpg' }],
    siteName: SITE_CONFIG.shortName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="institute">
      <body className="antialiased bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB/>
      </body>
    </html>
  );
}