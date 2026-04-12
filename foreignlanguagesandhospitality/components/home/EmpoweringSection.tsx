// src/components/home/EmpoweringSection.tsx
import SectionTitle from '@/components/common/SectionTitle';

export default function EmpoweringSection() {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Empowering Future Leaders in Hospitality" 
          subtitle="World-class education combining theory and practical experience" 
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="prose prose-lg max-w-none text-neutral-700">
            <p className="text-xl leading-relaxed">
              We are dedicated to providing world-class education in hospitality and languages, 
              preparing our students for successful careers in the global hospitality industry.
            </p>
            <p>
              Our comprehensive programs combine theoretical knowledge with practical experience, 
              ensuring our graduates are ready to excel in their chosen fields.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold text-primary text-xl mb-3">Our Vision</h4>
              <p className="text-neutral-700">
                To be a renowned institution recognized for excellence in Language Training and Hospitality Management, 
                shaping globally competent professionals who contribute to international understanding and industry growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold text-primary text-xl mb-3">Our Mission</h4>
              <p className="text-neutral-700">
                To equip individuals with practical language skills and hospitality expertise that empower them 
                to thrive in global environments, foster cultural understanding, and enhance career opportunities 
                in the international job market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}