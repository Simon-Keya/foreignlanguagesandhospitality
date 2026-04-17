import ProgramCard, { Program } from "./ProgramCard";

type Props = {
  programs: Program[];
};

export default function ProgramGrid({ programs }: Props) {
  if (!programs || programs.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No programs available at the moment.
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