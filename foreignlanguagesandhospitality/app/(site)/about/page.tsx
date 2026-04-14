// src/app/(site)/about/page.tsx

import CoreValues from '@/components/about/CoreValues';
import Facilities from '@/components/about/Facilities';
import FacultyGrid from '@/components/about/FacultyGrid';
import FounderBio from '@/components/about/FounderBio';
import MissionVision from '@/components/about/MissionVision';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | International Institute of Foreign Languages and Hospitality Management',
  description: 'Learn about our mission, vision, founder Soila Lasoi, core values, world-class facilities, and expert faculty.',
  keywords: ['about us', 'Soila Lasoi', 'hospitality education Kenya', 'German language training', 'Narok institute'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Shaping the Future of Hospitality Education
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            With world-class faculty, innovative programs, and industry partnerships, 
            we are committed to developing the next generation of hospitality leaders.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#founder" 
               className="btn btn-secondary text-white px-8 py-3 text-lg font-medium">
              Watch Our Story
            </a>
            <a href="/admissions" 
               className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-medium">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Core Values */}
      <CoreValues />

      {/* World-Class Facilities */}
      <Facilities />

      {/* Meet the Founder */}
      <FounderBio />

      {/* Our Expert Faculty */}
      <div id="faculty" className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Expert Faculty</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Dedicated professionals committed to your success
            </p>
          </div>

          <FacultyGrid />
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-primary py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Build Your Global Future?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our community and take the first step toward a successful international career.
          </p>
          <a href="/admissions" 
             className="btn btn-secondary btn-lg text-lg px-10">
            Apply Now – June Intake Open
          </a>
        </div>
      </div>
    </div>
  );
}