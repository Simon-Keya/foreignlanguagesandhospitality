// src/components/home/Testimonials.tsx
import SectionTitle from '@/components/common/SectionTitle';

const alumni = [
  {
    name: "Sempeyo",
    role: "Nursing Ausbildung, Berlin",
    quote: "If you want to be a nurse in Germany, you must at least have attained a B1 Level. I came through the International Institute of Foreign Languages and Hospitality Management.",
  },
  {
    name: "Saitoti",
    role: "Dairy Farm Ausbildung, Lilienthal",
    quote: "Learning the German language will help you connect and find your way to Germany. I came through this institute from Narok South.",
  },
  {
    name: "Hilda",
    role: "Social Work, Flensburg University",
    quote: "Learning German at B1 or B2 level made my Anerkennung process much smoother. The institute played a key role in my journey.",
  },
  {
    name: "Kasaine",
    role: "Master's Student, Germany",
    quote: "The support from the International Institute of Foreign Languages and Hospitality Management enabled me to pursue my master's degree in Germany.",
  },
  {
    name: "Damaris",
    role: "Master's Student, Flensburg University",
    quote: "The German language training I received was essential for my university admission. It laid the foundation for my successful academic journey.",
  },
  {
    name: "Zablon Ledama Kimong'o",
    role: "Professional Chef, Germany",
    quote: "From Transmara to Germany as a chef — the language skills and hospitality training from this institute transformed my future.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Success Stories from Our Alumni" 
          subtitle="Real journeys of transformation — from Narok to Germany and beyond" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {alumni.map((person, index) => (
            <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="text-6xl mb-6">“</div>
                <p className="italic text-neutral-700 leading-relaxed mb-8">
                  {person.quote}
                </p>
                <div>
                  <p className="font-bold text-primary">{person.name}</p>
                  <p className="text-sm text-secondary">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/student-voices" className="btn btn-secondary btn-lg">
            Begin Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
}