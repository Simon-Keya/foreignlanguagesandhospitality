import Link from "next/link";

const alumni = [
  {
    name: "Sempeyo",
    role: "Nursing Ausbildung",
    location: "Berlin, Germany",
    initials: "SE",
    quote: "If you want to be a nurse in Germany, you must at least have attained a B1 Level. I came through the International Institute of Foreign Languages and Hospitality Management.",
  },
  {
    name: "Saitoti",
    role: "Dairy Farm Ausbildung",
    location: "Lilienthal, Germany",
    initials: "SA",
    quote: "Learning the German language will help you connect and find your way to Germany. I came through this institute from Narok South.",
  },
  {
    name: "Hilda",
    role: "Social Work",
    location: "Flensburg University",
    initials: "HI",
    quote: "Learning German at B1 or B2 level made my Anerkennung process much smoother. The institute played a key role in my journey.",
  },
  {
    name: "Kasaine",
    role: "Master's Student",
    location: "Germany",
    initials: "KA",
    quote: "The support from the International Institute of Foreign Languages and Hospitality Management enabled me to pursue my master's degree in Germany.",
  },
  {
    name: "Damaris",
    role: "Master's Student",
    location: "Flensburg University",
    initials: "DA",
    quote: "The German language training I received was essential for my university admission. It laid the foundation for my successful academic journey.",
  },
  {
    name: "Zablon Ledama",
    role: "Professional Chef",
    location: "Germany",
    initials: "ZL",
    quote: "From Transmara to Germany as a chef — the language skills and hospitality training from this institute transformed my future completely.",
  },
];

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const FlagIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#051B2E] text-white relative overflow-hidden">
      {/* Decorative Radial Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F2C12C 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-white/10 pb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Global Success <br />Stories</h2>
            <p className="text-white/60 font-medium">Tracing the impact of our training across the European healthcare and hospitality sectors.</p>
          </div>
          <Link href="/admissions" className="px-8 py-4 bg-accent hover:bg-accent-dark text-primary font-black rounded-xl transition-all hover:scale-105">
            Begin Your Success Story
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((person, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col hover:bg-white/10 transition-all group"
            >
              <div className="mb-8 text-accent">
                <QuoteIcon />
              </div>

              <p className="text-white/80 italic leading-relaxed mb-10 flex-1 font-medium">
                &quot;{person.quote}&quot;
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                <div className="w-14 h-14 bg-accent flex items-center justify-center text-primary font-black text-lg rounded-xl shadow-lg shadow-accent/20">
                  {person.initials}
                </div>
                <div>
                  <p className="font-black text-white text-lg leading-none mb-1">{person.name}</p>
                  <p className="text-secondary-light text-xs font-black uppercase tracking-widest mb-1">{person.role}</p>
                  <div className="flex items-center gap-2 text-white/40">
                    <FlagIcon />
                    <span className="text-[10px] font-bold">{person.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}