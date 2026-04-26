import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

const languagePrograms = [
  "German Language Course (Beginner to Intermediate)",
  "Kiswahili Language Course (Beginner to Advanced)",
  "English Language Course (Beginner to Advanced)",
  "Spanish Language Course (Beginner to Intermediate)",
  "French Language Course (Beginner to Advanced)",
  "Mandarin Chinese Course (Beginner to Advanced)",
];

const hospitalityPrograms = [
  "Diploma in Hospitality Management",
  "Diploma in Front Office Operations & Administration",
  "Diploma in Food & Beverage Management",
  "Diploma in House Keeping & Laundry Operation",
  "Certificate in Front Office Operations",
];

const LanguageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 6" /><path d="M4 14l6-6 2-3" /><path d="M2 5h12" />
    <path d="M7 2h1" /><path d="M22 22l-5-10-5 10" /><path d="M14 18h6" />
  </svg>
);

const HospitalityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l3.5 3.5L13 4" />
  </svg>
);

interface ProgramCardProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  subtitle: string;
  programs: string[];
  count: number;
  type: string;
  href: string;
  barColor: string;
  iconBg: string;
  iconColor: string;
  checkColor: string;
  btnClass: string;
}

function ProgramCard({
  icon, category, title, subtitle, programs,
  count, type, href, barColor, iconBg, iconColor, checkColor, btnClass,
}: ProgramCardProps) {
  return (
    <div className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col">
      {/* Top bar */}
      <div className={`h-1.5 w-full ${barColor} rounded-t-3xl`} />

      <div className="p-8 flex flex-col gap-6 flex-1">
        {/* Header */}
        <div className="flex items-start gap-5">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${iconBg} ${iconColor} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
            {icon}
          </div>
          <div>
            <span className={`text-xs font-bold uppercase tracking-eyebrow ${iconColor} block mb-1`}>
              {category}
            </span>
            <h3 className="text-2xl font-black text-primary leading-tight">{title}</h3>
            <p className="text-sm text-neutral-500 mt-1">{subtitle}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-base-300" />

        {/* Program list */}
        <ul className="flex flex-col gap-3 flex-1">
          {programs.map((program) => (
            <li key={program} className={`flex items-start gap-3 text-sm text-neutral-700 ${checkColor}`}>
              <CheckIcon />
              <span className="leading-snug">{program}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={href}
          className={`btn ${btnClass} w-full gap-2 mt-2`}
        >
          View All {count} {type} Courses
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ProgramsHighlight() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Tribar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/[0.05] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/[0.04] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle
          title="Our Programs"
          subtitle="Comprehensive professional programs designed to help you excel in your career"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <ProgramCard
            icon={<LanguageIcon />}
            category="Language Training"
            title="Foreign Languages"
            subtitle="Master new languages for all proficiency levels"
            programs={languagePrograms}
            count={6}
            type="Language"
            href="/academics"
            barColor="bg-primary"
            iconBg="bg-primary/10"
            iconColor="text-primary"
            checkColor="text-primary"
            btnClass="btn-primary"
          />
          <ProgramCard
            icon={<HospitalityIcon />}
            category="Hospitality Education"
            title="Hospitality Management"
            subtitle="Essential skills for the global hospitality industry"
            programs={hospitalityPrograms}
            count={5}
            type="Hospitality"
            href="/academics"
            barColor="bg-secondary"
            iconBg="bg-secondary/10"
            iconColor="text-secondary"
            checkColor="text-secondary"
            btnClass="btn-secondary"
          />
        </div>

        {/* Bottom nudge */}
        <div className="mt-10 text-center">
          <p className="text-sm text-neutral-500">
            Also offering{" "}
            <span className="font-semibold text-primary">Nursing Career Preparation</span>
            {" "}— high-demand pathway into German healthcare.{" "}
            <Link href="/academics" className="text-secondary underline underline-offset-2 hover:text-secondary-dark transition-colors">
              Learn more →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}