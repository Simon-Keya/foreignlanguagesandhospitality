import SectionTitle from "@/components/common/SectionTitle";

const values = [
  {
    title: "Excellence",
    description:
      "Committed to delivering the highest quality education and maintaining exceptional standards across all programs.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    accent: "#E30613",
    bg: "#E3061308",
  },
  {
    title: "Innovation",
    description:
      "Embracing new technologies and teaching methods to prepare students for the future of hospitality.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6L15 17H9l-.7-2C6.3 13.7 5 11.5 5 9a7 7 0 017-7z" />
      </svg>
    ),
    accent: "#F2C12C",
    bg: "#F2C12C10",
  },
  {
    title: "Diversity",
    description:
      "Celebrating different cultures and perspectives, creating an inclusive and welcoming learning environment.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    accent: "#0A2540",
    bg: "#0A254010",
  },
  {
    title: "Practical Learning",
    description:
      "Combining theoretical knowledge with hands-on experience for comprehensive, real-world skill development.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    accent: "#E30613",
    bg: "#E3061308",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#F8F9FA" }}>
      {/* Decorative navy band across the top */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{ background: "linear-gradient(90deg, #0A2540 0%, #E30613 50%, #F2C12C 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Our Core Values"
          subtitle="These principles guide everything we do"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {values.map(({ title, description, icon, accent, bg }, index) => (
            <div
              key={title}
              className="group relative bg-white rounded-3xl border border-base-200 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300 group-hover:top-0 group-hover:bottom-0 group-hover:rounded-none"
                style={{ background: accent }}
              />

              <div className="p-8 flex flex-col gap-5">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg, color: accent }}
                >
                  {icon}
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="text-lg font-black mb-2 leading-tight"
                    style={{ color: "#0A2540" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Animated underline on hover */}
                <div
                  className="h-0.5 w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                  style={{ background: accent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}