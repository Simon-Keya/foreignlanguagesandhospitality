"use client";

type Props = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => {
        const isActive = cat === active;

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
              ${
                isActive
                  ? "bg-primary text-white shadow-glow"
                  : "bg-base-200 text-neutral-600 hover:bg-primary/10 hover:text-primary"
              }
            `}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}