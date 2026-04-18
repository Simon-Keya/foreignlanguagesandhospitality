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
    <section className="py-24 bg-base-200 relative overflow-hidden">
      {/* Tribar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="Why Choose Our Institution?"
          subtitle="We combine modern standards with practical training to prepare you for global success"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {benefits.map(({ number, title, desc, icon, palette }) => (
            <div
              key={number}
              className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden"
            >
              {/* Top bar */}
              <div className={`h-1.5 w-full ${palette.bar} rounded-t-3xl`} />

              {/* Left accent — grows on hover */}
              <div className={`absolute left-0 top-8 bottom-8 w-1 rounded-r-full ${palette.bar} transition-all duration-300 group-hover:top-0 group-hover:bottom-0 group-hover:rounded-none`} />

              <div className="p-7 flex flex-col gap-4">
                {/* Number */}
                <span className="text-xs font-black tracking-eyebrow text-neutral-300">
                  {number}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${palette.iconBg} ${palette.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-black text-lg text-primary leading-tight mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
                </div>

                {/* Animated underline */}
                <div className={`h-0.5 w-0 group-hover:w-10 transition-all duration-500 rounded-full ${palette.bar}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}