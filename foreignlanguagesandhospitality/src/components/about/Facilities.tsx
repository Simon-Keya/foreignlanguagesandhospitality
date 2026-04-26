import SectionTitle from "@/components/common/SectionTitle";

const facilities = [
  {
    number: "01",
    title: "Training Kitchens",
    desc: "Professional-grade equipment that mirrors real-world European hospitality environments and safety standards.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Mock Hotel Rooms",
    desc: "Realistic suites for hands-on training in housekeeping, front-of-house management, and guest relations.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-4 0v2" /><line x1="2" y1="14" x2="22" y2="14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Language Labs",
    desc: "Immersive digital stations designed specifically for German language phonetic training and fluency.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Conference Centre",
    desc: "Modern multi-purpose facilities used for professional seminars, guest lectures, and graduation events.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />
      
      {/* Institutional Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)", backgroundSize: "50px 50px" }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="World-Class Facilities"
          subtitle="Our campus features modern infrastructure designed for professional growth"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {facilities.map(({ number, title, desc, icon }) => (
            <div
              key={number}
              className="group relative bg-white rounded-[2.5rem] border border-neutral-200 p-8 flex flex-col hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background takeover */}
              <div className="absolute inset-0 bg-navy-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-xs font-black text-secondary group-hover:text-accent tracking-widest block mb-6">
                  FACILITY {number}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center text-primary group-hover:bg-white/10 group-hover:text-white transition-all duration-500 mb-8">
                  {icon}
                </div>

                <h3 className="font-black text-xl text-primary mb-4 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-white/70 transition-colors">
                  {desc}
                </p>

                <div className="mt-10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 16 16" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5}>
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