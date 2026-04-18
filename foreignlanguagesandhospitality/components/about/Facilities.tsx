import SectionTitle from "@/components/common/SectionTitle";

const facilities = [
  {
    number: "01",
    title: "State-of-the-Art Training Kitchens",
    desc: "Professional-grade equipment and modern cooking facilities that mirror real industry environments and standards.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Mock Hotel Rooms",
    desc: "Realistic training rooms for practising housekeeping, front-of-house, guest relations, and room management.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-4 0v2" />
        <line x1="2" y1="14" x2="22" y2="14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Language Labs",
    desc: "Advanced technology for immersive language learning — headsets, digital workstations, and listening stations.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Conference Centre",
    desc: "Modern facilities used for professional events, presentations, and practical hospitality training exercises.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h10M7 11h6" />
      </svg>
    ),
  },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Tribar top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-12 right-0 w-80 h-80 rounded-full bg-accent/[0.06] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-12 left-0 w-56 h-56 rounded-full bg-secondary/[0.05] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="World-Class Facilities"
          subtitle="Our campus features modern facilities designed for hands-on learning"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {facilities.map(({ number, title, desc, icon }) => (
            <div
              key={number}
              className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-2xl transition-all duration-400 overflow-hidden cursor-default"
            >
              {/* Hover fill — full navy takeover */}
              <div className="absolute inset-0 bg-navy-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 p-8 flex flex-col gap-5">
                {/* Number */}
                <span className="text-xs font-black tracking-eyebrow text-secondary group-hover:text-white/40 transition-colors duration-300">
                  {number}
                </span>

                {/* Icon circle */}
                <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center text-primary group-hover:bg-white/15 group-hover:text-white transition-all duration-300">
                  {icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-lg text-primary leading-snug mb-2 group-hover:text-white transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                    {desc}
                  </p>
                </div>

                {/* Arrow — appears on hover */}
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="#0A2540" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
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