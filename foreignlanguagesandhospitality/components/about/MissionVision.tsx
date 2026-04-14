// src/components/about/MissionVision.tsx
import SectionTitle from '@/components/common/SectionTitle';

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Our Mission & Vision" 
          subtitle="Guiding Principles That Define Us" 
        />

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Mission */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed text-neutral-700">
              To equip individuals with practical language skills and hospitality expertise 
              that empower them to thrive in global environments, foster cultural understanding, 
              and enhance career opportunities in the international job market.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
              🌍
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed text-neutral-700">
              To be a renowned institution recognized for excellence in Language Training 
              and Hospitality Management, shaping globally competent professionals who 
              contribute to international understanding and industry growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}