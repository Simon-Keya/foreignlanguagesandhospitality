// src/components/about/CoreValues.tsx
import SectionTitle from '@/components/common/SectionTitle';

const values = [
  {
    title: "Excellence",
    description: "Committed to delivering the highest quality education and maintaining exceptional standards across all programs.",
    icon: "⭐",
  },
  {
    title: "Innovation",
    description: "Embracing new technologies and teaching methods to prepare students for the future of hospitality.",
    icon: "💡",
  },
  {
    title: "Diversity",
    description: "Celebrating different cultures and perspectives, creating an inclusive learning environment.",
    icon: "🌍",
  },
  {
    title: "Practical Learning",
    description: "Combining theoretical knowledge with hands-on experience for comprehensive skill development.",
    icon: "🛠️",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Our Core Values" 
          subtitle="These principles guide everything we do" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((value, index) => (
            <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="card-title text-primary text-2xl mb-3">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}