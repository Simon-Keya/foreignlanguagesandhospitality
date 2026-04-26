// src/app/(site)/career-opportunities/undergraduate/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/components/common/SectionTitle';

export const metadata: Metadata = {
  title: 'Undergraduate Studies in Germany | IIFLHM',
  description: 'Bachelor’s degree programs in Germany for Kenyan students – guidance, requirements and support.',
};

export default function UndergraduatePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Undergraduate Studies</h1>
          <p className="text-3xl">Study Bachelor’s Programs in Germany</p>
          <p className="mt-4 text-xl opacity-90">World-class education with low or no tuition fees</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link href="/career-opportunities" className="inline-flex items-center gap-2 text-secondary hover:text-red-600 mb-10">
          ← Back to Career Opportunities
        </Link>

        <SectionTitle 
          title="Your Gateway to World-Class Undergraduate Education in Germany" 
        />

        <div className="prose prose-lg max-w-none mb-16">
          <p>
            Germany offers excellent education at very low or no tuition fees. At IIFLHM, we provide expert guidance to help Kenyan students successfully apply for bachelor’s programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Admission Pathways</h3>
            <div className="space-y-8">
              <div className="bg-base-100 p-8 rounded-2xl">
                <h4 className="font-semibold text-xl mb-4">Direct Admission</h4>
                <p>KCSE with minimum required grades for direct entry into degree programs.</p>
              </div>
              <div className="bg-base-100 p-8 rounded-2xl">
                <h4 className="font-semibold text-xl mb-4">Indirect Admission</h4>
                <p>Foundation year (Studienkolleg) + language preparation.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Core Requirements</h3>
            <ol className="space-y-6 list-decimal pl-6">
              <li>
                <strong>High School Certificate (KCSE)</strong><br />
                Minimum grade of C+ recommended
              </li>
              <li>
                <strong>German Language Proficiency</strong><br />
                English-taught: A1–A2<br />
                German-taught: Minimum B1/B2
              </li>
              <li>
                <strong>Financial Proof</strong><br />
                Blocked account (€11,904 for 2025) or scholarship
              </li>
            </ol>
          </div>
        </div>

        <div className="text-center bg-base-200 py-16 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Book a personal consultation with our advisors for tailored guidance on course selection, language preparation, and university applications.
          </p>
          <Link href="/contact" className="btn btn-secondary btn-lg px-12">
            Book Your Career Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}