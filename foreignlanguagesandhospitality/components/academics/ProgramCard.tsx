import Image from "next/image";
import Link from "next/link";

export type Program = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  level?: string;
  category?: string;
  image?: string;
  facilities?: string[];
  accentColor?: "primary" | "secondary" | "accent";
};

type Props = {
  program: Program;
};

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const barColors = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

export default function ProgramCard({ program }: Props) {
  const bar = barColors[program.accentColor ?? "primary"];

  return (
    <div className="group bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition overflow-hidden flex flex-col">
      
      {/* Accent bar */}
      <div className={`h-1.5 ${bar}`} />

      {/* Image */}
      {program.image && (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs">
          {program.category && <span className="text-secondary font-bold">{program.category}</span>}
          {program.level && <span className="text-neutral-400">{program.level}</span>}
        </div>

        {/* Title */}
        <h2 className="font-black text-lg text-primary">{program.title}</h2>

        {/* Description */}
        <p className="text-sm text-neutral-500 line-clamp-3 flex-1">
          {program.description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <ClockIcon />
          {program.duration}
        </div>

        {/* CTA */}
        <Link
          href={`/academics/${program.slug}`}
          className="flex items-center justify-between font-bold text-sm text-primary hover:text-secondary"
        >
          View Details
          <ArrowIcon />
        </Link>

      </div>
    </div>
  );
}