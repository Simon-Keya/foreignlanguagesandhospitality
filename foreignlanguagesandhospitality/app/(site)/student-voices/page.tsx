// src/app/(site)/student-voices/page.tsx

import SectionTitle from '@/components/common/SectionTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Voices | Success Stories from Our Alumni',
  description: 'Hear real stories from our students and alumni who have successfully pursued careers and studies in Germany and beyond.',
  keywords: ['student stories', 'success stories', 'alumni Germany', 'study in Germany Kenya', 'hospitality success'],
};

const testimonials = [
  {
    name: "Damaris",
    role: "Student Studying in Germany",
    quote: "Studying in Germany has been a life-changing experience. The comprehensive language training and cultural immersion through the Institution of Foreign Language and Hospitality Management have broadened my global outlook and communication skills immensely.",
    image: "👩‍🎓",
  },
  {
    name: "Daniel",
    role: "Student Studying in Germany",
    quote: "Studying in Germany has been an incredible journey. I strongly encourage others to learn languages through the Institution of Foreign Language and Hospitality Management—it has helped me immensely in adapting, communicating, and thriving in a new environment.",
    image: "👨‍🎓",
  },
  {
    name: "Zablon Ledama Kimong'o",
    role: "Professional Chef in Germany",
    quote: "Coming from Kenya to Germany, my journey has been truly life-changing. The Institution of Foreign Language and Hospitality Management gave me the language skills and hospitality training that opened doors to work abroad. I'm now working in Germany as a chef, and I strongly urge others to take this opportunity—it can transform your future.",
    image: "👨‍🍳",
  },
];

export default function StudentVoicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Students&apos; Stories
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Hear directly from our students about their transformative journeys and how our institute helped shape their careers.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <button className="btn btn-secondary text-lg px-10 py-3.5">
              Watch Stories
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-3.5">
              Share Your Story
            </button>
          </div>
        </div>
      </div>

      {/* Chef Spotlight */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-3">Chef Spotlight</h2>
            <p className="text-lg text-neutral-600">
              Watch our professional chefs in action at our state-of-the-art culinary facilities
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto">
            <div className="aspect-video bg-neutral-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-6">👨‍🍳</div>
                <p className="text-white text-2xl font-medium">Master Chef in Training</p>
                <p className="text-neutral-400 mt-2">State-of-the-Art Training Kitchens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices of Success */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Voices of Success" 
            subtitle="Real stories from our students who are now thriving in Germany and beyond"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card bg-base-100 border border-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
              >
                <div className="card-body">
                  <div className="text-6xl mb-6 opacity-80">{testimonial.image}</div>
                  
                  <blockquote className="text-lg leading-relaxed text-neutral-700 italic mb-8">
                    “{testimonial.quote}”
                  </blockquote>

                  <div className="mt-auto">
                    <p className="font-bold text-primary text-xl">{testimonial.name}</p>
                    <p className="text-secondary font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join our community of ambitious learners and future hospitality leaders. 
            Your journey to excellence starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="/admissions" 
              className="btn btn-secondary btn-lg text-lg px-12"
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary btn-lg text-lg px-12"
            >
              Request Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}