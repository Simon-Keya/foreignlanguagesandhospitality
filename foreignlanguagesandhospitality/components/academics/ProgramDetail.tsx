import Link from "next/link";
import Image from "next/image";
import FacilitiesList from "./FacilitiesList";
import { Program } from "./ProgramCard";

type Props = {
  program: Program;
};

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 8H3M7 4L3 8l4 4" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function ProgramDetail({ program }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* Back link */}
      <Link
        href="/academics"
        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200 mb-8 group"
      >
        <BackIcon />
        All Programs
      </Link>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* ── Main content ── */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* Hero image */}
          {program.image && (
            <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-hero-overlay opacity-30" />

              {/* Category pill over image */}
              {program.category && (
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-bold uppercase tracking-eyebrow bg-secondary text-white px-3 py-1.5 rounded-full shadow">
                    {program.category}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Tribar rule */}
          <div className="h-1 w-full bg-tribar rounded-full" />

          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-primary leading-tight mb-3">
              {program.title}
            </h1>
            {program.level && (
              <p className="text-sm text-neutral-500 font-medium">{program.level}</p>
            )}
          </div>

          {/* Description */}
          <div className="prose prose-sm max-w-none text-neutral-600 leading-relaxed">
            <p className="text-base">{program.description}</p>
          </div>

          {/* Facilities */}
          <FacilitiesList facilities={program.facilities} />
        </div>

        {/* ── Sidebar ── */}
        <aside className="flex flex-col gap-5">

          {/* Quick info card */}
          <div className="relative bg-white rounded-3xl border border-base-300 shadow-sm overflow-hidden">
            <div className="h-1.5 bg-tribar" />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xs font-black uppercase tracking-eyebrow text-primary">
                Program Details
              </h3>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Duration</p>
                  <p className="text-neutral-800 font-bold text-sm">{program.duration}</p>
                </div>
              </div>

              {program.level && (
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-accent/15 text-accent-dark flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-medium">Level</p>
                    <p className="text-neutral-800 font-bold text-sm">{program.level}</p>
                  </div>
                </div>
              )}

              <div className="h-px bg-base-300" />

              {/* CTAs */}
              <Link href="/admissions"
                className="btn btn-secondary w-full gap-2 font-bold">
                Apply for This Program
                <ArrowIcon />
              </Link>
              <Link href="/contact"
                className="btn border border-base-300 bg-white text-primary hover:bg-base-200 w-full gap-2 font-bold">
                Ask a Question
                <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* WhatsApp nudge */}
          
            href="https://wa.me/254723104680"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-green-800">Have questions?</p>
              <p className="text-xs text-green-700 mt-0.5">Chat with us on WhatsApp</p>
            </div>
          </a>
        </aside>
      </div>
    </div>
  );
}