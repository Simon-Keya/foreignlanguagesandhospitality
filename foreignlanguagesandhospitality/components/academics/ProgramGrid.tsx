import Link from "next/link";
import ProgramCard, { Program } from "./ProgramCard";

type Props = {
  programs: Program[];
};

export default function ProgramGrid({ programs }: Props) {
  // ─────────────────────────────────────────────
  // Empty State
  // ─────────────────────────────────────────────
  if (!programs || programs.length === 0) {
    return (
      <div className="text-center py-20 px-6">
        <h3 className="font-bold text-lg text-primary mb-2">
          No Programs Found
        </h3>

        <p className="text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
          There are currently no programs available. Please check back later
          or contact us for more information.
        </p>

        <Link
          href="/contact"
          className="btn btn-secondary mt-6 inline-flex items-center gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
        >
          Contact Us
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
        </Link>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // Programs Grid
  // ─────────────────────────────────────────────
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {programs.map((program) => (
        <ProgramCard
          key={program.slug}
          program={program}
        />
      ))}
    </div>
  );
}