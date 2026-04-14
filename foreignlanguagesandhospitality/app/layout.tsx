// src/app/layout.tsx

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IIFLHM - International Institute of Foreign Languages and Hospitality Management',
  description: 'World-class education in German Language, Hospitality Management & Nursing pathways in Narok, Kenya. Your gateway to careers in Germany, Austria & Switzerland.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}