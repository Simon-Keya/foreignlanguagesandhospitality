import SectionTitle from "@/components/common/SectionTitle";

const cards = [
  {
    label: "Mission",
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="22" />
        <line x1="2" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="22" y2="12" />
      </svg>
    ),
    heading: "Our Mission",
    body: "To equip individuals with practical language skills and hospitality expertise that empower them to thrive in global environments, foster cultural understanding, and enhance career opportunities in the international job market.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    bar: "bg-secondary",
    tag: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    label: "Vision",
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    heading: "Our Vision",
    body: "To be a renowned institution recognized for excellence in Language Training and Hospitality Management, shaping globally competent professionals who contribute to international understanding and industry growth.",
    iconBg: "bg-accent/15",
    iconColor: "text-accent-dark",
    bar: "bg-accent",
    tag: "bg-accent/15 text-accent-dark border-accent/30",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Tribar top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

      {/* Faint dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] bg-dot-pattern bg-dot-md"
        style={{ backgroundSize: "32px 32px" }}
      />

      {/* Decorative navy circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/[0.04] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="Our Mission & Vision"
          subtitle="Guiding Principles That Define Us"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {cards.map(({ label, number, icon, heading, body, iconBg, iconColor, bar, tag }) => (
            <div
              key={label}
              className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col"
            >
              {/* Top colour bar */}
              <div className={`h-1 w-full ${bar} rounded-t-3xl`} />

              {/* Hover navy overlay */}
              <div className="absolute inset-0 bg-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className="relative z-10 p-10 flex flex-col gap-6 flex-1">
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-eyebrow text-neutral-300 group-hover:text-white/30 transition-colors duration-300">
                    {number}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg} ${iconColor} group-hover:bg-white/15 group-hover:text-white transition-all duration-300`}>
                    {icon}
                  </div>
                </div>

                {/* Eyebrow tag */}
                <span className={`text-xs font-bold uppercase tracking-eyebrow px-3 py-1 rounded-full border w-fit ${tag} group-hover:bg-white/15 group-hover:text-white/80 group-hover:border-white/20 transition-all duration-300`}>
                  {label}
                </span>

                {/* Heading */}
                <h3 className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                  {heading}
                </h3>

                {/* Body */}
                <p className="text-base leading-relaxed text-neutral-600 group-hover:text-white/75 transition-colors duration-300 flex-1">
                  {body}
                </p>

                {/* Animated underline */}
                <div className={`h-0.5 w-0 group-hover:w-16 transition-all duration-500 rounded-full ${bar} group-hover:bg-accent`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}