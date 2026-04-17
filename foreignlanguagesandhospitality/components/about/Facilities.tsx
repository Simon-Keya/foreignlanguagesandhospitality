import SectionTitle from "@/components/common/SectionTitle";

const facilities = [
  {
    title: "State-of-the-Art Training Kitchens",
    desc: "Professional-grade equipment and modern cooking facilities that mirror real industry environments.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
    number: "01",
  },
  {
    title: "Mock Hotel Rooms",
    desc: "Realistic training rooms for practising housekeeping, guest relations, and room management.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20V10a2 2 0 012-2h16a2 2 0 012 2v10" />
        <path d="M2 14h20" />
        <path d="M6 14V8" />
        <path d="M2 20h20" />
      </svg>
    ),
    number: "02",
  },
  {
    title: "Language Labs",
    desc: "Advanced technology for immersive language learning including headsets, software, and listening stations.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    number: "03",
  },
  {
    title: "Conference Centre",
    desc: "Modern facilities for professional events, presentations, and practical hospitality training exercises.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    number: "04",
  },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Faint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="World-Class Facilities"
          subtitle="Our campus features modern facilities designed for hands-on learning"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {facilities.map(({ title, desc, icon, number }) => (
            <div
              key={number}
              className="group relative bg-white rounded-3xl border border-base-200 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden cursor-default"
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: "linear-gradient(135deg, #0A2540 0%, #051B2E 100%)" }}
              />

              <div className="relative z-10 p-8 flex flex-col gap-5">
                {/* Number */}
                <span
                  className="text-xs font-black tracking-[0.2em] group-hover:text-white/40 transition-colors duration-300"
                  style={{ color: "#E30613" }}
                >
                  {number}
                </span>

                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/15 group-hover:text-white"
                  style={{ background: "#F2C12C22", color: "#0A2540" }}
                >
                  {icon}
                </div>

                <div>
                  <h3
                    className="font-bold text-lg leading-snug mb-2 group-hover:text-white transition-colors duration-300"
                    style={{ color: "#0A2540" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500 group-hover:text-white/70 transition-colors duration-300">
                    {desc}
                  </p>
                </div>

                {/* Arrow reveal on hover */}
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "#F2C12C" }}
                  >
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