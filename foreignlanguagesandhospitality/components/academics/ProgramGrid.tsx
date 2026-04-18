import ProgramCard, { Program } from "./ProgramCard";

type Props = {
  programs: Program[];
};

const EmptyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </svg>
);

export default function ProgramGrid({ programs }: Props) {
  if (!programs || programs.length === 0) {
    return (
      <div className="text-center py-20 px-6">
        <EmptyIcon />
        <h3 className="font-bold text-primary text-lg mb-2">No Programs Found</h3>
        <p className="text-sm text-neutral-500 max-w-xs mx-auto leading-relaxed">
          No programs are available in this category at the moment. Check back soon or contact us for more information.
        </p>
        
          href="/contact"
          className="btn btn-secondary btn-sm gap-2 mt-6 inline-flex"
        >
          Contact Us
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
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