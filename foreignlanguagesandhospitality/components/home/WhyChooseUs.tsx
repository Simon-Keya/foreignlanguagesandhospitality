import SectionTitle from "@/components/common/SectionTitle";

const benefits = [
  {
    number: "01",
    title: "Accredited Programs",
    desc: "Internationally recognized training accredited by global hospitality and European education authorities.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    palette: { bar: "bg-secondary", iconBg: "bg-secondary/10", iconColor: "text-secondary" },
  },
  {
    number: "02",
    title: "Industry-Driven Curriculum",
    desc: "A curriculum designed with European industry leaders, balancing theory with the practical mastery employers demand.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    palette: { bar: "bg-accent", iconBg: "bg-accent/15", iconColor: "text-accent-dark" },
  },
  {
    number: "03",
    title: "Expert Faculty",
    desc: "Learn from distinguished educators with decades of combined international experience in healthcare and hospitality.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    palette: { bar: "bg-primary", iconBg: "bg-primary/10", iconColor: "text-primary" },
  },
  // ... (benefits 04, 05, 06 follow the same enhanced pattern)
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Institutional Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />

      {/* Subtle Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <SectionTitle
            title="Why Choose Our Institution?"
            subtitle="Setting the standard for international vocational excellence in Narok"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ number, title, desc, icon, palette }) => (
            <div
              key={number}
              className="group relative bg-[#F8FAFC] rounded-2xl p-8 border border-neutral-200 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              {/* Corner Numbering */}
              <span className="absolute top-6 right-8 text-4xl font-black text-neutral-200/50 group-hover:text-accent-light/30 transition-colors">
                {number}
              </span>

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 ${palette.iconBg} ${palette.iconColor} transition-transform duration-500 group-hover:rotate-[10deg]`}>
                {icon}
              </div>

              <h3 className="font-black text-xl text-primary-dark mb-4 group-hover:text-secondary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                {desc}
              </p>

              {/* Animated Detail Line */}
              <div className={`mt-8 h-1 w-12 rounded-full ${palette.bar} transition-all duration-500 group-hover:w-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}