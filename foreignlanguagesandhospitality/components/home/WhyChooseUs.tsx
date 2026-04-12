// src/components/home/WhyChooseUs.tsx
import SectionTitle from '@/components/common/SectionTitle';

const benefits = [
  {
    icon: "🏆",
    title: "Accredited Programs",
    desc: "Our programs are internationally recognized and accredited by leading hospitality and education authorities.",
  },
  {
    icon: "🔗",
    title: "Industry-Driven Curriculum",
    desc: "Curriculum designed in collaboration with industry leaders, combining theory with practical skills employers seek.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Faculty",
    desc: "Learn from experienced professionals who bring real-world expertise to the classroom.",
  },
  {
    icon: "🌍",
    title: "Global Opportunities",
    desc: "Strong industry partnerships provide international internships and job placements worldwide.",
  },
  {
    icon: "💼",
    title: "Career Support",
    desc: "Comprehensive career services including CV workshops, interview preparation, and alumni network.",
  },
  {
    icon: "🏢",
    title: "Modern Facilities",
    desc: "State-of-the-art training kitchens, mock hotel rooms, and advanced language labs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Why Choose Our Institution?" 
          subtitle="We combine modern standards with cutting-edge technology to prepare you for global success" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="card-title text-primary text-2xl mb-4">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}