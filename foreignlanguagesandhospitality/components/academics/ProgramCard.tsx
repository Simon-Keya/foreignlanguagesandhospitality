import Link from "next/link";

export type Program = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  image?: string;
  facilities?: string[];
};

type Props = {
  program: Program;
};

export default function ProgramCard({ program }: Props) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      {program.image && (
        <figure>
          <img
            src={program.image}
            alt={program.title}
            className="h-48 w-full object-cover"
          />
        </figure>
      )}

      <div className="card-body">
        <h2 className="card-title">{program.title}</h2>

        <p className="text-sm text-gray-600 line-clamp-3">
          {program.description}
        </p>

        <div className="mt-2">
          <span className="badge badge-outline">{program.duration}</span>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link
            href={`/academics/${program.slug}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}