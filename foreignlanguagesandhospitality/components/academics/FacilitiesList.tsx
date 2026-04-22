
const CheckIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="w-4 h-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8l3.5 3.5L13 4" />
  </svg>
);

type Props = {
  facilities?: string[];
};

export default function FacilitiesList({ facilities }: Props) {
  if (!facilities?.length) return null;

  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-px bg-secondary" />
        <h3 className="text-xs font-black uppercase tracking-eyebrow text-secondary">
          Facilities & Resources
        </h3>
      </div>

      {/* List */}
      <div className="grid sm:grid-cols-2 gap-3">
        {facilities.map((facility) => (
          <div
            key={facility}
            className="flex items-start gap-3 bg-base-100 border border-base-300 rounded-xl px-4 py-3 hover:border-primary hover:shadow-sm transition"
          >
            <span className="text-primary mt-0.5">
              <CheckIcon />
            </span>
            <span className="text-sm text-neutral-700 font-medium leading-snug">
              {facility}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}