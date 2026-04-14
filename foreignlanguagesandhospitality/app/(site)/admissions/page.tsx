// src/app/(site)/admissions/page.tsx

import { Metadata } from 'next';
import AdmissionForm from '@/components/admissions/AdmissionForm';
import SectionTitle from '@/components/common/SectionTitle';
import { Calendar, Award, Users, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admissions | Apply Now to IIFLHM',
  description: 'Apply for our June 2025 intake. Join our Diploma, Certificate, and Language programs at the International Institute of Foreign Languages and Hospitality Management.',
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our June 2025 Intake
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Take the first step toward your international career in Hospitality, Languages, or Nursing.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Upcoming Intake: June 15, 2025</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Side - Information */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <SectionTitle 
                title="Why Apply to IIFLHM?" 
                subtitle="Your gateway to global opportunities"
              />
              
              <div className="grid grid-cols-1 gap-8 mt-10">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-primary">Accredited & Recognized</h3>
                    <p className="text-neutral-600 mt-2">Programs meet international standards with pathways to Germany, Austria & Switzerland.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-primary">Global Career Pathways</h3>
                    <p className="text-neutral-600 mt-2">Strong focus on German language and practical skills for international job markets.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-primary">Hands-on Training</h3>
                    <p className="text-neutral-600 mt-2">State-of-the-art facilities with real industry partnerships and internships.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-base-100 border border-base-300 rounded-3xl p-8">
              <h3 className="font-bold text-primary text-2xl mb-6">Important Dates</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-secondary font-mono text-sm">15 JUN</div>
                  <div>
                    <p className="font-medium">June 2025 Intake Begins</p>
                    <p className="text-sm text-neutral-500">Classes start</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-secondary font-mono text-sm">31 MAY</div>
                  <div>
                    <p className="font-medium">Early Application Deadline</p>
                    <p className="text-sm text-neutral-500">Limited spaces available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-base-300 rounded-3xl p-10 md:p-14 shadow-xl">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-primary mb-3">Start Your Application</h2>
                <p className="text-neutral-600">
                  Fill out the form below. Our admissions team will contact you within 48 hours.
                </p>
              </div>

              <AdmissionForm />
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-primary py-16 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions about the application process?</h2>
          <p className="text-lg opacity-90 mb-8">
            Speak directly with our admissions advisor for personalized guidance.
          </p>
          <a 
            href="tel:+254723104680" 
            className="btn btn-secondary btn-lg inline-flex items-center gap-3"
          >
            Call Admissions: +254 723 104 680
          </a>
        </div>
      </div>
    </div>
  );
}