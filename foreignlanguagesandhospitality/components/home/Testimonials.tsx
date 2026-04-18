import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";

const alumni = [
  {
    name: "Sempeyo",
    role: "Nursing Ausbildung",
    location: "Berlin, Germany",
    initials: "SE",
    quote:
      "If you want to be a nurse in Germany, you must at least have attained a B1 Level. I came through the International Institute of Foreign Languages and Hospitality Management.",
  },
  {
    name: "Saitoti",
    role: "Dairy Farm Ausbildung",
    location: "Lilienthal, Germany",
    initials: "SA",
    quote:
      "Learning the German language will help you connect and find your way to Germany. I came through this institute from Narok South.",
  },
  {
    name: "Hilda",
    role: "Social Work",
    location: "Flensburg University",
    initials: "HI",
    quote:
      "Learning German at B1 or B2 level made my Anerkennung process much smoother. The institute played a key role in my journey.",
  },
  {
    name: "Kasaine",
    role: "Master's Student",
    location: "Germany",
    initials: "KA",
    quote:
      "The support from the International Institute of Foreign Languages and Hospitality Management enabled me to pursue my master's degree in Germany.",
  },
  {
    name: "Damaris",
    role: "Master's Student",
    location: "Flensburg University",
    initials: "DA",
    quote:
      "The German language training I received was essential for my university admission. It laid the foundation for my successful academic journey.",
  },
  {
    name: "Zablon Ledama",
    role: "Professional Chef",
    location: "Germany",
    initials: "ZL",
    quote:
      "From Transmara to Germany as a chef — the language skills and hospitality training from this institute transformed my future completely.",
  },
];

const avatarPalettes = [
  { bg: "#0A2540", text: "#FFFFFF" },
  { bg: "#E30613", text: "#FFFFFF" },
  { bg: "#F2C12C", text: "#0A2540" },
  { bg: "#0A2540", text: "#F2C12C" },
  { bg: "#E30613", text: "#FFFFFF" },
  { bg: "#0A2540", text: "#FFFFFF" },
];

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const FlagIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Tribar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

      {/* Navy dot background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #0A2540 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative navy half-circle top right */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/[0.04] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="Success Stories from Our Alumni"
          subtitle="Real journeys of transformation — from Narok to Germany and beyond"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {alumni.map((person, index) => {
            const palette = avatarPalettes[index % avatarPalettes.length];
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col"
              >
                {/* Top bar alternates navy/red/gold */}
                <div
                  className="h-1.5 w-full rounded-t-3xl flex-shrink-0"
                  style={{ background: palette.bg }}
                />

                <div className="p-7 flex flex-col gap-5 flex-1">
                  {/* Quote icon */}
                  <div className="text-accent/30 group-hover:text-accent/60 transition-colors duration-300">
                    <QuoteIcon />
                  </div>

                  {/* Quote text */}
                  <p className="italic text-neutral-600 leading-relaxed text-sm flex-1">
                    {person.quote}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-base-300" />

                  {/* Person */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                      style={{ background: palette.bg, color: palette.text }}
                    >
                      {person.initials}
                    </div>
                    <div>
                      <p className="font-bold text-primary text-base">{person.name}</p>
                      <p className="text-xs font-semibold text-secondary">{person.role}</p>
                      <div className="flex items-center gap-1.5 mt-0.5 text-neutral-400">
                        <FlagIcon />
                        <span className="text-xs">{person.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/admissions" className="btn btn-secondary btn-lg gap-2 shadow-glow hover:scale-105 transition-transform duration-300">
            Begin Your Success Story
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}