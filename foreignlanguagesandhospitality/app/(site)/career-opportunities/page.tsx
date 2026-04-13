// src/app/(site)/career-opportunities/page.tsx

import SectionTitle from '@/components/common/SectionTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Opportunities in Germany | International Institute of Foreign Languages and Hospitality Management',
  description: 'Explore apprenticeship programs, undergraduate and master\'s degrees in Germany. Your gateway to international education and career success.',
  keywords: ['career opportunities Germany', 'Ausbildung Germany', 'study in Germany', 'apprenticeship Kenya', 'German education'],
};

export default function CareerOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Opportunity Hub
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4">
            Your Gateway to Germany
          </p>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            For High School Graduates, University Graduates, and Alumni
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a href="#paths" 
               className="btn btn-secondary text-lg px-10 py-4">
              Explore Programs
            </a>
            <a href="/contact" 
               className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4">
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Why Germany Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Why Germany?" 
            subtitle="A world-class destination for education and career growth" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              "World-class education with internationally recognized universities",
              "Affordable or tuition-free education at public institutions",
              "Strong focus on research, innovation, and practical training",
              "Excellent career prospects and post-study work opportunities",
              "Safe, welcoming environment for international students",
              "Diverse range of English-taught programs",
              "Dual education system (earn while you learn)",
              "High demand for skilled professionals"
            ].map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-base-300 hover:border-secondary transition-colors">
                <div className="text-4xl mb-4">🇩🇪</div>
                <p className="text-neutral-700 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Personalized pathways to success in Germany" 
          />

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {/* Apprenticeship Programs */}
            <div className="card bg-base-100 border border-base-300 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="text-5xl mb-6">🔧</div>
                <h3 className="card-title text-2xl text-primary">Apprenticeship Programs</h3>
                <p className="text-neutral-600 mt-4">
                  Vocational training programs that combine classroom learning with on-the-job experience in German companies.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">✓ Dual education system recognized worldwide</li>
                  <li className="flex items-start gap-2">✓ Earn while you learn with competitive stipends</li>
                  <li className="flex items-start gap-2">✓ Direct pathway to employment in Germany</li>
                </ul>
              </div>
            </div>

            {/* Undergraduate Degrees */}
            <div className="card bg-base-100 border border-base-300 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="text-5xl mb-6">🎓</div>
                <h3 className="card-title text-2xl text-primary">Undergraduate Degrees</h3>
                <p className="text-neutral-600 mt-4">
                  Bachelor&apos;s degree programs at top-ranked German universities and universities of applied sciences.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">✓ Tuition-free or low-cost education</li>
                  <li className="flex items-start gap-2">✓ Wide range of English-taught programs</li>
                  <li className="flex items-start gap-2">✓ Opportunity to learn German alongside studies</li>
                </ul>
              </div>
            </div>

            {/* Master&apos;s Degrees */}
            <div className="card bg-base-100 border border-base-300 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="text-5xl mb-6">📚</div>
                <h3 className="card-title text-2xl text-primary">Master&apos;s Degrees</h3>
                <p className="text-neutral-600 mt-4">
                  Advanced degree programs designed to enhance your expertise and career prospects.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">✓ One to two-year internationally recognized programs</li>
                  <li className="flex items-start gap-2">✓ Research opportunities with leading experts</li>
                  <li className="flex items-start gap-2">✓ Post-study work visa options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Begin Your Journey - Main Paths */}
      <section id="paths" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Begin Your Journey" 
            subtitle="Select your path and take the first step toward your international career"
            titleClass="text-white"
            subtitleClass="text-white/80"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Apprenticeship Card */}
            <div className="card bg-white text-neutral-900 shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="card-body">
                <div className="text-6xl mb-6">🔧</div>
                <h3 className="text-2xl font-bold mb-3">Apprenticeship Programs</h3>
                <p className="text-neutral-600 mb-8">
                  Combine work and study in a German company through the renowned dual education system.
                </p>
                <a href="/career-opportunities/apprenticeship" 
                   className="btn btn-secondary w-full">
                  Explore Apprenticeship Programs
                </a>
              </div>
            </div>

            {/* Undergraduate Card */}
            <div className="card bg-white text-neutral-900 shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="card-body">
                <div className="text-6xl mb-6">🎓</div>
                <h3 className="text-2xl font-bold mb-3">Undergraduate Degrees</h3>
                <p className="text-neutral-600 mb-8">
                  Pursue a bachelor&apos;s degree at top German universities and universities of applied sciences.
                </p>
                <a href="/career-opportunities/undergraduate" 
                   className="btn btn-secondary w-full">
                  Explore Bachelor&apos;s Programs
                </a>
              </div>
            </div>

            {/* Master's Card */}
            <div className="card bg-white text-neutral-900 shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="card-body">
                <div className="text-6xl mb-6">📘</div>
                <h3 className="text-2xl font-bold mb-3">Master&apos;s Degrees</h3>
                <p className="text-neutral-600 mb-8">
                  Advance your education with specialized master&apos;s programs in Germany.
                </p>
                <a href="/career-opportunities/masters" 
                   className="btn btn-secondary w-full">
                  Explore Master&apos;s Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-neutral-600 mb-10">
            Book a consultation with our experts to create your personalized pathway to Germany.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" 
               className="btn btn-secondary btn-lg text-lg px-12">
              Schedule Your Consultation
            </a>
            <a href="#paths" 
               className="btn btn-outline btn-lg text-lg px-12">
              Select Your Path
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}