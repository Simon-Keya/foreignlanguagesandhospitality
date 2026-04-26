import SectionTitle from "@/components/common/SectionTitle";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    label: "Our Vision",
    color: "text-accent",
    bg: "bg-accent/10 border-accent/20",
    body: "To be a renowned institution recognized for excellence in Language Training and Hospitality Management, shaping globally competent professionals who contribute to international understanding and industry growth.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="9" /><line x1="12" y1="15" x2="12" y2="22" />
        <line x1="2" y1="12" x2="9" y2="12" /><line x1="15" y1="12" x2="22" y2="12" />
      </svg>
    ),
    label: "Our Mission",
    color: "text-secondary",
    bg: "bg-secondary/10 border-secondary/20",
    body: "To equip individuals with practical language skills and hospitality expertise that empower them to thrive in global environments, foster cultural understanding, and enhance career opportunities in the international job market.",
  },
];

export default function EmpoweringSection() {
  return (
    <section className="py-24 bg-base-200 relative overflow-hidden">
      {/* Tribar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

      {/* Decorative rings */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full border-[32px] border-primary/[0.05] pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full border-[24px] border-accent/[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="Empowering Future Leaders in Hospitality"
          subtitle="World-class education combining theory and practical experience"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">

          {/* Left — editorial text block */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-eyebrow text-secondary">
                Who We Are
              </span>
            </div>

            <p className="text-xl leading-relaxed text-neutral-700 font-medium">
              We are dedicated to providing world-class education in hospitality
              and languages, preparing our students for successful careers in the
              global hospitality industry.
            </p>

            <p className="text-base leading-relaxed text-neutral-500">
              Our comprehensive programs combine theoretical knowledge with
              practical experience, ensuring our graduates are ready to excel in
              their chosen fields — whether in Kenya, Germany, Austria, or
              anywhere across the globe.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { value: "2024", label: "Year Founded" },
                { value: "Narok", label: "Based In" },
                { value: "Germany", label: "Primary Destination" },
                { value: "B1/B2", label: "Language Target" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-base-300 shadow-sm"
                >
                  <p className="text-2xl font-black text-primary">{value}</p>
                  <p className="text-xs text-neutral-500 mt-1 font-medium uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — vision + mission cards */}
          <div className="flex flex-col gap-5">
            {pillars.map(({ icon, label, color, bg, body }) => (
              <div
                key={label}
                className="group bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-lg transition-all duration-400 overflow-hidden"
              >
                {/* Accent top bar */}
                <div
                  className={`h-1 w-full ${label === "Our Vision" ? "bg-accent" : "bg-secondary"}`}
                />
                <div className="p-8 flex gap-5">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 ${bg} ${color} group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-lg mb-2">{label}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}