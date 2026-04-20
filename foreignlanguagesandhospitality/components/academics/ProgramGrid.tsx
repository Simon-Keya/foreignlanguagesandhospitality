import Link from "next/link";
import ProgramCard, { Program } from "./ProgramCard";

type Props = {
  programs: Program[];
};

export default function ProgramGrid({ programs }: Props) {
  if (!programs || programs.length === 0) {
    return (
      <div className="text-center py-20 px-6">

        <h3 className="font-bold text-lg mb-2">No Programs Found</h3>

        <p className="text-sm text-neutral-500 max-w-xs mx-auto">
          No programs available right now.
        </p>

        {/* ✅ FIXED */}
        <Link
          href="/contact"
          className="btn btn-secondary mt-6 inline-flex gap-2"
        >
          Contact Us
        </Link>

      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {programs.map((program) => (
        <ProgramCard key={program.slug} program={program} />
      ))}
    </div>
  );
}