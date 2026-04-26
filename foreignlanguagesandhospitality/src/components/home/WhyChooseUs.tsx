import SectionTitle from "@/components/common/SectionTitle";

const benefits = [
  {
    number: "01",
    title: "Accredited Programs",
    desc: "Our programs are internationally recognized and accredited by leading hospitality and education authorities.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    palette: { bar: "bg-secondary", iconBg: "bg-secondary/10", iconColor: "text-secondary" },
  },
  {
    number: "02",
    title: "Industry-Driven Curriculum",
    desc: "Curriculum designed with industry leaders, balancing theory with the practical skills employers actually seek.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    palette: { bar: "bg-accent", iconBg: "bg-accent/15", iconColor: "text-accent-dark" },
  },
  {
    number: "03",
    title: "Expert Faculty",
    desc: "Learn from experienced professionals who bring real-world expertise and international experience to every lesson.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    palette: { bar: "bg-primary", iconBg: "bg-primary/10", iconColor: "text-primary" },
  },
  {
    number: "04",
    title: "Global Opportunities",
    desc: "Strong partnerships with employers in Germany, Austria, and Switzerland provide real international pathways.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    palette: { bar: "bg-secondary", iconBg: "bg-secondary/10", iconColor: "text-secondary" },
  },
  {
    number: "05",
    title: "Career Support",
    desc: "CV workshops, interview preparation, visa guidance, and a growing alumni network across Europe.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-4 0v2" />
        <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    palette: { bar: "bg-accent", iconBg: "bg-accent/15", iconColor: "text-accent-dark" },
  },
  {
    number: "06",
    title: "Modern Facilities",
    desc: "State-of-the-art training kitchens, mock hotel rooms, language labs, and a professional conference centre.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    palette: { bar: "bg-primary", iconBg: "bg-primary/10", iconColor: "text-primary" },
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Institutional Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />

      {/* Subtle Blueprint Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="Why Choose Our Institution?"
          subtitle="We combine modern standards with practical training to prepare you for global success"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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

              <h3 className="font-black text-xl text-primary leading-tight mb-4 group-hover:text-secondary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                {desc}
              </p>

              {/* Animated detail line */}
              <div className={`mt-8 h-1 w-12 rounded-full ${palette.bar} transition-all duration-500 group-hover:w-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}