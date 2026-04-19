import AdmissionForm from "@/components/admissions/AdmissionForm";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Apply Now — IIFLHM Narok",
  description:
    "Apply for our next intake. Join Diploma, Certificate, and Language programs at the International Institute of Foreign Languages and Hospitality Management in Narok, Kenya.",
};

const whyApply = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Accredited & Recognized",
    desc: "Programs aligned with international standards and CEFR-certified language levels accepted by German employers.",
    palette: { iconBg: "bg-secondary/10", iconColor: "text-secondary" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Global Career Pathways",
    desc: "Strong focus on German language and practical skills that open real doors to employment across Europe.",
    palette: { iconBg: "bg-accent/15", iconColor: "text-accent-dark" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Hands-On Training",
    desc: "State-of-the-art facilities including training kitchens, mock hotel rooms, and language labs.",
    palette: { iconBg: "bg-primary/10", iconColor: "text-primary" },
  },
];

const importantDates = [
  {
    date: "31 MAY",
    event: "Early Application Deadline",
    note: "Priority consideration · Limited spaces",
  },
  {
    date: "15 JUN",
    event: "June 2025 Intake Begins",
    note: "Orientation and first classes",
  },
  {
    date: "01 SEP",
    event: "September 2025 Intake",
    note: "Applications open now",
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function AdmissionsPage() {
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
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[48px] border-white/[0.04] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              Applications Now Open
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Join Our June 2025 Intake
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
            Take the first step toward your international career in Hospitality,
            Languages, or Nursing. Spaces are limited — apply early.
          </p>

          {/* Intake badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full">
            <CalendarIcon />
            <span className="text-sm font-bold">
              Upcoming Intake: June 15, 2025
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-tribar" />
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* Left — Info sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-10">

            {/* Why apply */}
            <div>
              <SectionTitle
                title="Why Apply to IIFLHM?"
                subtitle="Your gateway to global opportunities"
                centered={false}
              />

              <div className="flex flex-col gap-5 mt-8">
                {whyApply.map(({ icon, title, desc, palette }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${palette.iconBg} ${palette.iconColor}`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-base leading-tight mb-1">
                        {title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important dates */}
            <div className="relative bg-white rounded-3xl border border-base-300 shadow-sm overflow-hidden">
              <div className="h-1.5 bg-tribar" />
              <div className="p-7">
                <h3 className="font-black text-primary text-lg mb-6">
                  Important Dates
                </h3>
                <div className="flex flex-col gap-5">
                  {importantDates.map(({ date, event, note }) => (
                    <div key={date} className="flex items-start gap-4">
                      <div className="bg-secondary/10 text-secondary rounded-xl px-3 py-2 text-center flex-shrink-0 min-w-[60px]">
                        <p className="text-xs font-black tracking-wider leading-none">
                          {date}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm">{event}</p>
                        <p className="text-xs text-neutral-400 mt-0.5">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp nudge */}
            
              href="https://wa.me/254723104680"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-green-800">
                  Questions? Chat on WhatsApp
                </p>
                <p className="text-xs text-green-700 mt-0.5">
                  +254 723 104 680 · We reply within minutes
                </p>
              </div>
            </a>
          </div>

          {/* Right — Application form */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-secondary" />
                <span className="text-xs font-bold uppercase tracking-eyebrow text-secondary">
                  Step-by-Step Application
                </span>
              </div>
              <h2 className="text-3xl font-black text-primary leading-tight">
                Start Your Application
              </h2>
              <p className="text-neutral-500 text-sm mt-2">
                Takes less than 5 minutes. Our admissions team will contact you within 48 hours.
              </p>
            </div>

            <AdmissionForm />
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="relative bg-navy-gradient py-16 text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl font-black text-white mb-4 leading-tight">
            Questions about the application process?
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Speak directly with our admissions advisor for personalised guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              href="tel:+254723104680"
              className="btn btn-secondary gap-2 font-bold shadow-glow hover:scale-105 transition-transform duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              Call: +254 723 104 680
            </a>
            <Link
              href="/contact"
              className="btn btn-lg border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}