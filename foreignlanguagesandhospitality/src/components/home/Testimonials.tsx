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

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Institutional Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />

      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
             <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
              Global Success <br /> Starts Here
            </h2>
          </div>
          <Link 
            href="/admissions" 
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-xl hover:shadow-primary/10 active:scale-95"
          >
            Begin Your Journey
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((person, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 border border-slate-200/60 rounded-2xl p-8 flex flex-col transition-all duration-500 hover:bg-white hover:border-accent/50 hover:shadow-[0_20px_50px_rgba(10,37,64,0.1)] hover:-translate-y-2"
            >
              {/* Decorative Quote Mark */}
              <div className="mb-6 text-accent opacity-30 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 origin-left">
                <QuoteIcon />
              </div>

              <p className="text-sm md:text-base leading-relaxed text-primary opacity-90 mb-10 flex-1 font-medium italic">
                &quot;{person.quote}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                {/* Avatar Badge */}
                <div className="w-12 h-12 bg-white border-2 border-accent text-primary flex items-center justify-center font-black text-base rounded-xl shadow-md transition-transform duration-500 group-hover:rotate-[10deg]">
                  {person.initials}
                </div>
                
                <div>
                  <p className="font-black text-primary text-lg leading-tight">
                    {person.name}
                  </p>
                  <p className="text-secondary text-[10px] font-black uppercase tracking-widest mt-0.5">
                    {person.role}
                  </p>
                  <p className="text-[10px] font-bold text-primary/50 mt-1">
                    {person.location}
                  </p>
                </div>
              </div>

              {/* Animated Bottom Line */}
              <div className="mt-8 h-1 w-12 rounded-full bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}