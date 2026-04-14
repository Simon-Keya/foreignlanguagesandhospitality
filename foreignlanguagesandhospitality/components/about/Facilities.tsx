// src/components/about/Facilities.tsx
import SectionTitle from '@/components/common/SectionTitle';

const facilities = [
  {
    title: "State-of-the-Art Training Kitchens",
    desc: "Professional-grade equipment and modern cooking facilities",
    icon: "🍳",
  },
  {
    title: "Mock Hotel Rooms",
    desc: "Realistic training environment for hospitality students",
    icon: "🛏️",
  },
  {
    title: "Language Labs",
    desc: "Advanced technology for immersive language learning",
    icon: "🗣️",
  },
  {
    title: "Conference Center",
    desc: "Modern facilities for events and practical training",
    icon: "📋",
  },
];

export default function Facilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="World-Class Facilities" 
          subtitle="Our campus features modern facilities designed for hands-on learning" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {facilities.map((facility, index) => (
            <div key={index} className="card bg-base-100 border border-base-300 shadow-md hover:shadow-xl transition-all">
              <div className="card-body">
                <div className="text-6xl mb-6">{facility.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{facility.title}</h3>
                <p className="text-neutral-600">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}