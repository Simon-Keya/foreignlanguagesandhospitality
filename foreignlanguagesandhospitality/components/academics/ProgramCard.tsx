import Link from "next/link";
import Image from "next/image";

export type Program = {
  slug:         string;
  title:        string;
  description:  string;
  duration:     string;
  level?:       string;
  category?:    string;
  image?:       string;
  facilities?:  string[];
  accentColor?: "primary" | "secondary" | "accent";
};

type Props = {
  program: Program;
};

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const barColors = {
  primary:   "bg-primary",
  secondary: "bg-secondary",
  accent:    "bg-accent",
};

export default function ProgramCard({ program }: Props) {
  const bar = barColors[program.accentColor ?? "primary"];

  return (
    <div className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col">
      {/* Top accent bar */}
      <div className={`h-1.5 w-full ${bar} rounded-t-3xl flex-shrink-0`} />

      {/* Image */}
      {program.image && (
        <div className="relative h-44 w-full overflow-hidden flex-shrink-0">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-hero-overlay opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-7 flex flex-col gap-4 flex-1">
        {/* Category + level badges */}
        <div className="flex items-center gap-2 flex-wrap">
          {program.category && (
            <span className="text-xs font-bold uppercase tracking-eyebrow text-secondary">
              {program.category}
            </span>
          )}
          {program.category && program.level && (
            <span className="text-neutral-300">·</span>
          )}
          {program.level && (
            <span className="text-xs text-neutral-400 font-medium">{program.level}</span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-black text-lg text-primary leading-snug group-hover:text-primary transition-colors">
          {program.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3 flex-1">
          {program.description}
        </p>

        {/* Duration badge */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
          <ClockIcon />
          <span>{program.duration}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-base-300" />

        {/* CTA */}
        <Link
          href={`/academics/${program.slug}`}
          className="flex items-center justify-between gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors duration-200 group/link"
        >
          View Program Details
          <span className="w-8 h-8 rounded-full bg-base-200 group-hover/link:bg-secondary group-hover/link:text-white flex items-center justify-center transition-all duration-200">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}