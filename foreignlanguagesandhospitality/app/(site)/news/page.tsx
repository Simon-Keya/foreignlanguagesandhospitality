import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | International Institute of Foreign Languages and Hospitality Management",
  description:
    "Stay updated with the latest news, intakes, events, and achievements from IIFLHM in Narok, Kenya.",
  keywords: [
    "June 2025 intake",
    "hospitality news Kenya",
    "German language intake",
    "institute updates Narok",
  ],
};

const categories = [
  "All",
  "Admissions",
  "Programs",
  "Events",
  "Achievements",
  "Partnerships",
];

const newsItems = [
  {
    badge: "Admissions",
    badgeColor: "bg-secondary text-white",
    date: "June 1, 2025",
    title: "June 2025 Intake Now Open for Applications",
    excerpt:
      "We're now accepting applications for our June 2025 intake across all hospitality and language programs. Limited spaces available — apply early.",
    href: "#",
  },
  {
    badge: "Events",
    badgeColor: "bg-accent text-primary",
    date: "Coming Soon",
    title: "Open Day — Visit Our Campus in Narok",
    excerpt:
      "We're planning our next open day event. Prospective students and parents are welcome to tour the campus, meet faculty, and learn about programs.",
    href: "#",
  },
];

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

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="relative bg-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[48px] border-white/[0.04] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              Latest from IIFLHM
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            School News & Updates
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
            Stay informed about the latest happenings, intakes, and achievements
            in our hospitality education community.
          </p>

          
            href="#newsletter"
            className="btn btn-secondary btn-lg gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
          >
            Subscribe to Updates
            <ArrowIcon />
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-tribar" />
      </div>

      {/* ── Featured article ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Featured"
            title="Latest Announcement"
          />

          <div className="mt-14 max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl border border-base-300 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-400">
              <div className="h-1.5 bg-tribar" />

              <div className="p-10 md:p-14">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-eyebrow bg-secondary text-white px-3 py-1.5 rounded-full">
                    Admissions
                  </span>
                  <div className="flex items-center gap-1.5 text-neutral-400 text-sm">
                    <CalendarIcon />
                    June 1, 2025
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight mb-6">
                  June 2025 Intake Now Open for Applications
                </h2>

                <p className="text-base text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                  We&apos;re now accepting applications for our June 2025 intake
                  across all hospitality and language programs. Don&apos;t miss
                  this opportunity to join our vibrant learning community in
                  Narok.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/admissions"
                    className="btn btn-secondary gap-2 font-bold"
                  >
                    Apply Now
                    <ArrowIcon />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn border border-base-300 bg-white text-primary hover:bg-base-200 gap-2 font-bold"
                  >
                    Ask a Question
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video — Meet Our Staff ── */}
      <section className="py-24 bg-base-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border-[40px] border-primary/[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Video placeholder */}
            <div className="lg:col-span-7">
              <div className="relative bg-primary-dark rounded-3xl overflow-hidden shadow-xl border border-white/10">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />
                <div className="aspect-video flex items-center justify-center relative">
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #F2C12C 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <button className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 shadow-glow hover:scale-110 transition-transform duration-300">
                      <PlayIcon />
                    </button>
                    <p className="text-white font-bold text-lg">
                      Meet Our Dedicated Staff
                    </p>
                    <p className="text-white/50 text-sm mt-2">
                      3:45 min · Published May 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-secondary" />
                <span className="text-xs font-bold uppercase tracking-eyebrow text-secondary">
                  Faculty Feature
                </span>
              </div>

              <h3 className="text-3xl font-black text-primary leading-tight mb-5">
                Hear Directly from Our Faculty and Staff
              </h3>

              <p className="text-neutral-600 leading-relaxed mb-8">
                In these interviews, they share their passion for education and
                the unique learning environment we&apos;ve created together at
                our campus in Narok.
              </p>

              <button className="btn border border-primary text-primary hover:bg-primary hover:text-white gap-2 font-bold transition-all duration-300">
                Watch Full Interviews
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── All News ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Browse All"
            title="All News"
            subtitle="Filter by category to find what matters most to you"
          />

          {/* Category pills */}
          <div className="flex flex-wrap gap-3 justify-center mt-10 mb-14">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-bold border transition-all duration-200 ${
                  i === 0
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary border-base-300 hover:border-primary hover:bg-primary hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {newsItems.map(({ badge, badgeColor, date, title, excerpt, href }) => (
              <div
                key={title}
                className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col"
              >
                <div className="h-1.5 bg-tribar rounded-t-3xl" />

                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-eyebrow px-3 py-1.5 rounded-full ${badgeColor}`}
                    >
                      {badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
                      <CalendarIcon />
                      {date}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-primary leading-snug">
                    {title}
                  </h3>

                  <p className="text-sm text-neutral-500 leading-relaxed flex-1">
                    {excerpt}
                  </p>

                  <div className="h-px bg-base-300" />

                  <Link
                    href={href}
                    className="flex items-center justify-between gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors duration-200 group/link"
                  >
                    Read Full Story
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

      {/* ── Newsletter ── */}
      <section
        id="newsletter"
        className="py-24 bg-navy-gradient text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              Stay Connected
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          <h2 className="font-display text-4xl font-black text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/70 text-base mb-10 max-w-md mx-auto">
            Subscribe to receive the latest news, intake announcements, and
            success stories directly to your inbox.
          </p>

          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent focus:bg-white/15 transition-all duration-200"
            />
            <button className="btn btn-secondary px-6 font-bold flex-shrink-0">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-white/40 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}