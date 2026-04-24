import CoreValues from '@/components/about/CoreValues';
import Facilities from '@/components/about/Facilities';
import FacultyGrid from '@/components/about/FacultyGrid';
import FounderBio from '@/components/about/FounderBio';
import MissionVision from '@/components/about/MissionVision';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Institute | Global Hospitality & Language Excellence',
  description: 'Discover the International Institute of Foreign Languages and Hospitality Management. Leading hospitality education in Kenya under the visionary leadership of Soila Lasoi.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section: Institutional Excellence */}
      <section className="relative bg-[#0A192F] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-yellow-400 font-black uppercase tracking-[0.3em] text-xs mb-6 block">
            ESTABLISHED FOR GLOBAL EXCELLENCE
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Bridging Potential with <br/> <span className="text-yellow-400 underline decoration-white/10">Global Opportunity.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            We are more than an institute; we are a gateway. From the heart of Narok to the hospitality hubs of Europe, we prepare leaders for a world without borders.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="#founder" className="bg-white text-[#0A192F] px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-yellow-400 transition-all shadow-xl">
              The Founder's Vision
            </a>
            <a href="/admissions" className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              Join the Next Intake
            </a>
          </div>
        </div>
      </section>

      {/* Strategic Foundation */}
      <div className="relative z-20 -mt-10">
        <MissionVision />
      </div>

      <CoreValues />

      {/* Campus Experience */}
      <div className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-[#0A192F] tracking-tight">World-Class Facilities</h2>
              <p className="text-neutral-500 mt-4 text-lg">Our campus is designed to mirror the luxury hospitality environments our students will eventually lead.</p>
            </div>
            <div className="h-px flex-1 bg-neutral-200 hidden md:block mx-10 mb-4" />
          </div>
          <Facilities />
        </div>
      </div>

      <FounderBio />

      {/* Faculty Section */}
      <section id="faculty" className="py-24 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Our Distinguished Faculty</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-medium">
              A blend of international industry veterans and specialized academic experts dedicated to your professional mastery.
            </p>
          </div>
          <FacultyGrid />
        </div>
      </section>

      {/* Final Institutional CTA */}
      <section className="bg-yellow-400 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[#0A192F] mb-6 tracking-tight">Your International Career Starts Here.</h2>
          <p className="text-[#0A192F]/70 text-lg mb-10 font-bold uppercase tracking-widest">Enrollment for the Upcoming Semester is Now Open</p>
          <a href="/admissions" className="bg-[#0A192F] text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform shadow-2xl">
            Secure Your Spot Today
          </a>
        </div>
      </section>
    </div>
  );
}