// src/app/(site)/career-opportunities/apprenticeship/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/components/common/SectionTitle';

export const metadata: Metadata = {
  title: 'Healthcare Apprenticeships in Germany | IIFLHM',
  description: 'Nursing & Medical Radiology Ausbildung programs in Germany for Kenyan students. B2 German required.',
};

export default function ApprenticeshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Healthcare Apprenticeships
          </h1>
          <p className="text-2xl md:text-3xl font-light">Nursing & Medical Radiology Apprenticeships in Germany</p>
          <p className="mt-4 text-xl opacity-90">Empowering Kenyan Youth for Global Healthcare Careers</p>
          
          <div className="mt-10 inline-block bg-white/10 backdrop-blur-md px-8 py-3 rounded-full text-lg">
            Applications for the next intake will open soon
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link href="/career-opportunities" className="inline-flex items-center gap-2 text-secondary hover:text-red-600 mb-10">
          ← Back to Career Opportunities
        </Link>

        <SectionTitle 
          title="Your Pathway to a Rewarding Healthcare Career in Germany" 
          subtitle="Are you a Kenyan high school graduate passionate about healthcare? This is your chance." 
        />

        <div className="prose prose-lg max-w-none text-neutral-700 mb-16">
          <p>
            If you have B2-level German proficiency, you can launch a life-changing international career as a nurse or medical radiologist in Germany.
          </p>
        </div>

        {/* Why German Healthcare Apprenticeships */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8">Why German Healthcare Apprenticeships?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-base-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">About Ausbildungen</h3>
              <p className="text-neutral-700">
                In Germany, Ausbildungen are formal apprenticeship programs that combine academic training with hands-on work experience. 
                You will be employed part-time by a hospital or healthcare institution while receiving classroom instruction.
              </p>
              <p className="mt-4 text-neutral-700">
                Training usually runs for three years, during which you receive a monthly salary to support your living expenses.
              </p>
            </div>
            <div className="bg-base-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-neutral-700">
                <li>✓ Earn while you learn (monthly stipend)</li>
                <li>✓ Internationally recognized qualification</li>
                <li>✓ Direct pathway to permanent employment</li>
                <li>✓ High demand for healthcare professionals in Germany</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8">Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-xl mb-6">Academic Requirements</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  German Language Certificate – Level B2 (Issued within the past year)
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  KCSE Certificate – Minimum Grade C (Lower grades may be considered with strong B2 German)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-6">Personal Requirements</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  Age: 18 – 29 years
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  Strong interest in healthcare (nursing or medical radiology)
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  Motivated and ready to adapt to German culture and work environment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* After Selection */}
        <div className="bg-base-200 p-12 rounded-3xl mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">After Selection</h2>
          <p className="text-lg mb-8">
            Successful applicants will enroll in a preparatory course at IIFLHM before departure:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl">Intercultural Training – Adjusting to life and work in Germany</div>
            <div className="bg-white p-6 rounded-2xl">German Medical Terminology – Essential vocabulary</div>
            <div className="bg-white p-6 rounded-2xl">Basic Nursing Skills – Foundation in professional healthcare</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-medium text-primary mb-8">Application for the next intake will open soon</p>
          <Link href="/contact" className="btn btn-secondary btn-lg px-12">
            Express Interest & Get Notified
          </Link>
        </div>
      </div>
    </div>
  );
}