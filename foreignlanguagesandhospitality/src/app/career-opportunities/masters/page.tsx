// src/app/career-opportunities/masters/page.tsx

import SectionTitle from '@/components/common/SectionTitle';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Master’s Degree Programs in Germany | IIFLHM',
  description: 'Postgraduate studies in Germany – requirements, APS certificate, and application guidance for Kenyan students.',
};

export default function MastersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Postgraduate Studies</h1>
          <p className="text-3xl">Master’s Degree Programs in Germany</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link href="/career-opportunities" className="inline-flex items-center gap-2 text-secondary hover:text-red-600 mb-10">
          ← Back to Career Opportunities
        </Link>

        <SectionTitle 
          title="Advance Your Career with a Master’s Degree in Germany" 
        />

        <div className="prose prose-lg max-w-none mb-16">
          <p>
            Whether you want English-taught or German-taught programs, we provide complete guidance for Kenyan students pursuing master’s degrees in Germany.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-10">Master’s Degree Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-4">1. Bachelor’s Degree</h3>
                <p className="text-neutral-700">Recognized undergraduate degree (preferably Second Class Upper or equivalent) in a related field.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-4">2. Language Proficiency</h3>
                <p><strong>English-taught:</strong> IELTS 6.0–6.5 or TOEFL iBT 80+</p>
                <p><strong>German-taught:</strong> TestDaF / DSH / Goethe B2–C1</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-6">Required Documents</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li>Passport</li>
                <li>Bachelor’s degree certificate & transcripts</li>
                <li>CV and Letter of Motivation</li>
                <li>Two recommendation letters</li>
                <li>APS Certificate (mandatory for Kenyans)</li>
                <li>Language test results</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Financial Requirements */}
        <div className="bg-base-200 p-12 rounded-3xl mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Financial Requirements</h2>
          <p className="text-lg mb-6">
            To get a student visa, you must show proof of financial resources:
          </p>
          <div className="bg-white p-8 rounded-2xl">
            <p className="font-semibold">Blocked Account (Sperrkonto):</p>
            <p className="text-2xl font-bold text-primary mt-2">€11,904 per year (2025 requirement)</p>
            <p className="text-sm text-neutral-500 mt-4">≈ KES 1,650,000 per year</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Master’s Journey?</h2>
          <Link href="/contact" className="btn btn-secondary btn-lg px-12">
            Book Your Career Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}