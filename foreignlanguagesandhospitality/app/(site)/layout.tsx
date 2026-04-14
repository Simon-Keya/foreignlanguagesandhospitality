// src/app/(site)/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IIFLHM - International Institute of Foreign Languages and Hospitality Management',
  description: 'Premier institute offering German Language, Hospitality Management and Nursing Career Preparation in Narok, Kenya.',
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}