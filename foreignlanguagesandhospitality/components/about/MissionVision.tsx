import SectionTitle from "@/components/common/SectionTitle";

const cards = [
  {
    label: "Mission",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="22" />
        <line x1="2" y1="12" x2="8" y2="12" />
        <line x1="16" y1="12" x2="22" y2="12" />
      </svg>
    ),
    accentClass: "text-secondary bg-secondary/10 border-secondary/20",
    barClass: "bg-secondary",
    heading: "Our Mission",
    body: "To equip individuals with practical language skills and hospitality expertise that empower them to thrive in global environments, foster cultural understanding, and enhance career opportunities in the international job market.",
  },
  {
    label: "Vision",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    accentClass: "text-accent bg-accent/10 border-accent/20",
    barClass: "bg-accent",
    heading: "Our Vision",
    body: "To be a renowned institution recognized for excellence in Language Training and Hospitality Management, shaping globally competent professionals who contribute to international understanding and industry growth.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: "#0A2540" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-[0.04]"
          style={{ background: "#E30613" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="Our Mission & Vision"
          subtitle="Guiding Principles That Define Us"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {cards.map(({ label, icon, accentClass, barClass, heading, body }) => (
            <div
              key={label}
              className="group relative bg-white rounded-3xl p-10 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${barClass} rounded-t-3xl`} />

              {/* Hover background tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-base-100 to-base-200 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 flex flex-col gap-6">
                {/* Icon pill */}
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${accentClass} group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>

                {/* Label tag */}
                <span className={`text-xs font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full border w-fit ${accentClass}`}>
                  {label}
                </span>

                <h3 className="text-2xl font-bold" style={{ color: "#0A2540" }}>
                  {heading}
                </h3>

                <p className="text-base leading-[1.85] text-neutral-600">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}