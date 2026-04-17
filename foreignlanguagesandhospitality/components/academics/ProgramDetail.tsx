import Link from "next/link";
import FacilitiesList from "./FacilitiesList";
import { Program } from "./ProgramCard";

type Props = {
  program: Program;
};

export default function ProgramDetail({ program }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Image */}
      {program.image && (
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {program.title}
      </h1>

      {/* Duration */}
      <div className="mb-4">
        <span className="badge badge-primary">
          Duration: {program.duration}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-6">
        {program.description}
      </p>

      {/* Facilities */}
      <FacilitiesList facilities={program.facilities} />

      {/* CTA */}
      <div className="mt-8 flex gap-4">
        <Link href="/admissions" className="btn btn-primary">
          Apply Now
        </Link>

        <Link href="/contact" className="btn btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  );
}