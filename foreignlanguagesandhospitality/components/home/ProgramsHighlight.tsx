// src/components/home/ProgramsHighlight.tsx
import SectionTitle from '@/components/common/SectionTitle';
import Link from 'next/link';

const languagePrograms = [
  "German Language Course (Beginner to Intermediate)",
  "Kiswahili Language Course (Beginner to Advanced)",
  "English Language Course (Beginner to Advanced)",
  "Spanish Language Course (Beginner to Intermediate)",
  "French Language Course (Beginner to Advanced)",
  "Mandarin Chinese Course (Beginner to Advanced)",
];

const hospitalityPrograms = [
  "Diploma in Hospitality Management",
  "Diploma in Front Office Operations & Administration",
  "Diploma in Food & Beverage Management",
  "Diploma in House Keeping & Laundry Operation",
  "Certificate in Front Office Operations",
];

export default function ProgramsHighlight() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Our Programs" 
          subtitle="Discover our comprehensive range of professional programs designed to help you excel in your career" 
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Foreign Languages */}
          <div className="card bg-base-100 border border-base-300 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">🗣️</div>
                <div>
                  <h3 className="text-3xl font-bold text-primary">Foreign Languages</h3>
                  <p className="text-neutral-600">Master new languages with comprehensive programs for all proficiency levels</p>
                </div>
              </div>

              <ul className="space-y-4">
                {languagePrograms.map((program, index) => (
                  <li key={index} className="flex items-start gap-3 text-neutral-700">
                    <span className="text-secondary mt-1">•</span>
                    {program}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex gap-4">
                <Link href="/programs" className="btn btn-secondary flex-1">
                  View All 6 Language Courses
                </Link>
              </div>
            </div>
          </div>

          {/* Hospitality Management */}
          <div className="card bg-base-100 border border-base-300 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">🏨</div>
                <div>
                  <h3 className="text-3xl font-bold text-primary">Hospitality Management</h3>
                  <p className="text-neutral-600">Develop essential skills for the hospitality industry</p>
                </div>
              </div>

              <ul className="space-y-4">
                {hospitalityPrograms.map((program, index) => (
                  <li key={index} className="flex items-start gap-3 text-neutral-700">
                    <span className="text-secondary mt-1">•</span>
                    {program}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex gap-4">
                <Link href="/programs" className="btn btn-secondary flex-1">
                  View All 5 Hospitality Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}