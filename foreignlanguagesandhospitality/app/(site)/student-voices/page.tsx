import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Voices | Success Stories from Our Alumni — IIFLHM",
  description:
    "Hear real stories from students and alumni who have successfully pursued careers and studies in Germany and beyond through IIFLHM Narok.",
  keywords: [
    "student stories",
    "success stories",
    "alumni Germany",
    "study in Germany Kenya",
    "hospitality success Narok",
  ],
};

const testimonials = [
  {
    name: "Sempeyo",
    role: "Nursing Ausbildung",
    location: "Berlin, Germany",
    initials: "SE",
    quote:
      "If you want to be a nurse in Germany, you must at least have attained a B1 Level. I came through the International Institute of Foreign Languages and Hospitality Management and it changed everything for me.",
  },
  {
    name: "Saitoti",
    role: "Dairy Farm Ausbildung",
    location: "Lilienthal, Germany",
    initials: "SA",
    quote:
      "Learning the German language will help you connect and find your way to Germany. I came through this institute from Narok South and I am living proof that it works.",
  },
  {
    name: "Hilda",
    role: "Social Work",
    location: "Flensburg University",
    initials: "HI",
    quote:
      "Learning German at B1 or B2 level made my Anerkennung process much smoother. The institute played a key role in my journey to Germany.",
  },
  {
    name: "Kasaine",
    role: "Master's Student",
    location: "Germany",
    initials: "KA",
    quote:
      "The support from the International Institute of Foreign Languages and Hospitality Management enabled me to pursue my master's degree in Germany. I am forever grateful.",
  },
  {
    name: "Damaris",
    role: "Master's Student",
    location: "Flensburg University",
    initials: "DA",
    quote:
      "The German language training I received was essential for my university admission. It laid the foundation for my successful academic journey and broadened my global outlook.",
  },
  {
    name: "Zablon Ledama",
    role: "Professional Chef",
    location: "Germany",
    initials: "ZL",
    quote:
      "Coming from Transmara to Germany as a chef — the language skills and hospitality training from this institute truly transformed my future. I strongly urge others to take this opportunity.",
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

const FlagIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const stats = [
  { value: "100+", label: "Students Placed Abroad" },
  { value: "3+", label: "Years of Impact" },
  { value: "Germany", label: "Primary Destination" },
];

export default function StudentVoicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="relative bg-navy-gradient text-white overflow-hidden">
        {/* Tribar top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Decorative rings */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[48px] border-white/[0.04] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border-[32px] border-accent/[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              Real Journeys · Real Results
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Our Students&apos; Stories
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-12">
            Hear directly from the people who took the leap — from Narok to Germany,
            from dreams to careers.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-black text-accent">{value}</p>
                <p className="text-xs text-white/60 mt-1 font-medium uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="btn btn-secondary btn-lg gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Start Your Journey
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300"
            >
              Share Your Story
            </Link>
          </div>
        </div>

        {/* Tribar bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-tribar" />
      </div>

      {/* ── Chef Spotlight / Video ── */}
      <section className="py-24 bg-base-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-[40px] border-primary/[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="In the Kitchen"
            title="Chef Spotlight"
            subtitle="Watch our professional chefs in action at our state-of-the-art culinary training facilities"
          />

          <div className="mt-14 max-w-4xl mx-auto">
            <div className="relative bg-primary-dark rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />

              <div className="aspect-video flex items-center justify-center relative">
                {/* Placeholder — swap for actual <video> or YouTube embed */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle, #F2C12C 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative text-center z-10">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-9 h-9 text-white"
                      fill="currentColor"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <p className="text-white text-xl font-bold">
                    Master Chef in Training
                  </p>
                  <p className="text-white/50 text-sm mt-2">
                    State-of-the-Art Training Kitchens · Narok, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0A2540 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionTitle
            eyebrow="Alumni Voices"
            title="Voices of Success"
            subtitle="Real stories from our students now thriving in Germany and beyond"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {testimonials.map((person, index) => {
              const palette = avatarPalettes[index % avatarPalettes.length];
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col"
                >
                  {/* Top bar */}
                  <div
                    className="h-1.5 w-full rounded-t-3xl flex-shrink-0"
                    style={{ background: palette.bg }}
                  />

                  <div className="p-7 flex flex-col gap-5 flex-1">
                    {/* Quote icon */}
                    <div className="text-accent/25 group-hover:text-accent/50 transition-colors duration-300">
                      <QuoteIcon />
                    </div>

                    {/* Quote */}
                    <p className="italic text-neutral-600 leading-relaxed text-sm flex-1">
                      {person.quote}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-base-300" />

                    {/* Person */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm"
                        style={{ background: palette.bg, color: palette.text }}
                      >
                        {person.initials}
                      </div>
                      <div>
                        <p className="font-bold text-primary text-base">
                          {person.name}
                        </p>
                        <p className="text-xs font-semibold text-secondary">
                          {person.role}
                        </p>
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[48px] border-white/[0.04] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              Your Turn
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Ready to Write Your<br />
            <span className="text-accent">Success Story?</span>
          </h2>

          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Join our community of ambitious learners. Your journey from Narok to
            the world starts with a single step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="btn btn-secondary btn-lg gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Apply Now
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}