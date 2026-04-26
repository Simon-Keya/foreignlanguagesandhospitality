import SectionTitle from "@/components/common/SectionTitle";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Career Opportunities in Germany | International Institute of Foreign Languages and Hospitality Management",
  description:
    "Explore apprenticeship programs, undergraduate and master's degrees in Germany. Your gateway to international education and career success from Narok, Kenya.",
  keywords: [
    "career opportunities Germany",
    "Ausbildung Germany",
    "study in Germany",
    "apprenticeship Kenya",
    "German education Narok",
  ],
};

const whyGermany = [
  {
    title: "Tuition-Free Education",
    desc: "Public universities in Germany charge minimal or zero tuition fees — even for international students.",
  },
  {
    title: "Dual Education System",
    desc: "Earn while you learn through Germany's renowned Ausbildung apprenticeship model.",
  },
  {
    title: "High Demand for Skills",
    desc: "Germany actively recruits skilled professionals in healthcare, hospitality, and engineering.",
  },
  {
    title: "Post-Study Work Visa",
    desc: "Graduates can stay up to 18 months to find work after completing their studies.",
  },
  {
    title: "Safe & Welcoming",
    desc: "Germany is consistently ranked among the safest countries in the world for international students.",
  },
  {
    title: "English-Taught Programs",
    desc: "Hundreds of programs are taught in English, while learning German opens even more doors.",
  },
  {
    title: "World-Class Universities",
    desc: "Home to some of the world's best research universities with globally recognized degrees.",
  },
  {
    title: "Strong Kenya–Germany Links",
    desc: "Growing bilateral ties mean dedicated pathways for Kenyan professionals and students.",
  },
];

const pathways = [
  {
    number: "01",
    title: "Apprenticeship Programs",
    subtitle: "Ausbildung",
    desc: "Vocational training programs combining classroom learning with on-the-job experience in German companies.",
    features: [
      "Dual education system recognized worldwide",
      "Earn a competitive stipend while training",
      "Direct pathway to permanent employment",
      "Requires B1–B2 German language level",
    ],
    href: "/career-opportunities/apprenticeship",
    barColor: "bg-secondary",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Undergraduate Degrees",
    subtitle: "Bachelor's Programs",
    desc: "Bachelor's degree programs at top-ranked German universities and universities of applied sciences.",
    features: [
      "Low-cost or tuition-free public universities",
      "Wide range of English-taught programs",
      "Learn German alongside your studies",
      "Access to EU job market on graduation",
    ],
    href: "/career-opportunities/undergraduate",
    barColor: "bg-accent",
    iconBg: "bg-accent/15",
    iconColor: "text-accent-dark",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Master's Degrees",
    subtitle: "Postgraduate Programs",
    desc: "Advanced degree programs designed to enhance your expertise and unlock senior career prospects.",
    features: [
      "1–2 year internationally recognized programs",
      "Research opportunities with leading academics",
      "Post-study 18-month work visa eligibility",
      "Pathway to German permanent residency",
    ],
    href: "/career-opportunities/masters",
    barColor: "bg-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l3.5 3.5L13 4" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function CareerOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="relative bg-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-12 border-white/4 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border-9 border-accent/5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              For High School and University Graduates
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-3">
            Opportunity Hub
          </h1>
          <p className="text-2xl font-light text-white/80 mb-6">
            Your Gateway to Germany
          </p>
          <p className="text-base text-white/65 max-w-2xl mx-auto leading-relaxed mb-12">
            We guide Kenyan graduates through every step — from language
            training to Ausbildung placement, undergraduate study, and
            master&apos;s admission in Germany.
          </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#paths"
                className="btn btn-secondary btn-lg gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
              >
                Explore Pathways
                <ArrowIcon />
              </a>
              <Link
                href="/contact"
                className="btn btn-lg border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-tribar" />
      </div>

      {/* ── Why Germany ── */}
      <section className="py-24 bg-base-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
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
            eyebrow="Why Germany?"
            title="A World-Class Destination"
            subtitle="Germany offers some of the best education and career opportunities for African graduates"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {whyGermany.map(({ title, desc }, index) => {
              const accents = [
                "border-l-secondary",
                "border-l-accent",
                "border-l-primary",
                "border-l-secondary",
                "border-l-accent",
                "border-l-primary",
                "border-l-secondary",
                "border-l-accent",
              ];
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl border border-base-300 border-l-4 ${accents[index]} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 p-6`}
                >
                  <h3 className="font-black text-primary text-base leading-snug mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Three Pathways ── */}
      <section id="paths" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Choose Your Path"
            title="What We Offer"
            subtitle="Three proven pathways from Kenya to a career in Germany — we guide you through each one"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {pathways.map(({ number, title, subtitle, desc, features, href, barColor, iconBg, iconColor, icon }) => (
              <div
                key={number}
                className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col"
              >
                <div className={`h-1.5 w-full ${barColor} rounded-t-3xl`} />

                <div className="p-8 flex flex-col gap-5 flex-1">
                  {/* Number */}
                  <span className="text-xs font-black tracking-eyebrow text-neutral-300">
                    {number}
                  </span>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg} ${iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>

                  {/* Title */}
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-eyebrow ${iconColor} mb-1`}>
                      {subtitle}
                    </p>
                    <h3 className="text-xl font-black text-primary leading-tight">
                      {title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {desc}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 flex-1">
                    {features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-xs text-neutral-600 ${iconColor}`}>
                        <CheckIcon />
                        <span className="leading-snug text-neutral-700">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="h-px bg-base-300" />

                  <Link
                    href={href}
                    className="flex items-center justify-between gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors duration-200 group/link"
                  >
                    Explore This Pathway
                    <span className="w-8 h-8 rounded-full bg-base-200 group-hover/link:bg-secondary group-hover/link:text-white flex items-center justify-center transition-all duration-200">
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Navy CTA ── */}
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
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-12 border-white/4 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              Take the First Step
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Ready to Transform<br />
            <span className="text-accent">Your Future?</span>
          </h2>

          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a consultation with our career advisors to create a
            personalised pathway from Narok to Germany — step by step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-secondary btn-lg gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Schedule Your Consultation
              <ArrowIcon />
            </Link>
            <a
              href="#paths"
              className="btn btn-lg border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300"
            >
              Review All Pathways
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}