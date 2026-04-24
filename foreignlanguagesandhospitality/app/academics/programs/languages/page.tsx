// src/app/(site)/programs/language courses/page.tsx

import SectionTitle from '@/components/common/SectionTitle';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Language Courses | Learn German, English, French & More | IIFLHM',
  description: 'Master new languages with professional courses at the International Institute of Foreign Languages and Hospitality Management in Narok, Kenya.',
};

const languageCourses = [
  { name: "German Language Course", level: "Beginner to Intermediate", status: "Available", popular: true },
  { name: "English Language Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Spanish Language Course", level: "Beginner to Intermediate", status: "Available" },
  { name: "French Language Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Mandarin Chinese Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Kiswahili Language Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Arabic Language Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Italian Language Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Japanese Language Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Portuguese Language Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Russian Language Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Dutch Language Course", level: "Beginner to Advanced", status: "Available" },
  { name: "Turkish Language Course", level: "Beginner to Advanced", status: "Available" },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master New Languages
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Embark on a journey of language discovery with our comprehensive courses. 
            Learn from expert instructors and join a community of passionate language learners.
          </p>

          <div className="mt-12">
            <a href="#courses" className="btn btn-secondary btn-lg px-10">
              Explore Courses
            </a>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b bg-base-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All Languages', 'European', 'Asian', 'African', 'Middle Eastern', 'Global'].map((filter) => (
              <button 
                key={filter}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'All Languages' 
                    ? 'bg-primary text-white' 
                    : 'bg-white border border-base-300 hover:border-primary hover:text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Language Courses */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="All Language Courses" 
            subtitle="Choose from a wide range of languages and proficiency levels" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {languageCourses.map((course, index) => (
              <div 
                key={index} 
                className="card bg-white border border-base-300 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="card-body">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {course.name}
                      </h3>
                      <p className="text-neutral-600 mt-1">{course.level}</p>
                    </div>
                    {course.popular && (
                      <span className="badge badge-secondary text-xs">Popular</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-10">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    {course.status}
                  </div>

                  <div className="flex gap-3">
                    <Link 
                      href={`/programs/${course.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="btn btn-primary flex-1"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Why Learn With Us?" 
            subtitle="Quality education with expert guidance and real results" 
          />

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="text-center">
              <div className="text-6xl mb-6">🧑‍🏫</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Certified Instructors</h3>
              <p className="text-neutral-600">
                Learn from native speakers and certified language experts with years of teaching experience.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Structured Curriculum</h3>
              <p className="text-neutral-600">
                Our courses follow a proven learning path from beginner to advanced levels.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">👥</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Community Learning</h3>
              <p className="text-neutral-600">
                Join study groups, language exchanges, and cultural events with fellow learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Master a New Language?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Start your language journey today and open doors to global opportunities, education, and careers abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#courses" className="btn btn-secondary btn-lg px-12">
              Browse All Courses
            </a>
            <a href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg px-12">
              Speak with an Advisor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}