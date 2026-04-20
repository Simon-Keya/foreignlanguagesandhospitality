import Image from "next/image";
import Link from "next/link";
import FacilitiesList from "./FacilitiesList";
import { Program } from "./ProgramCard";

type Props = {
  program: Program;
};

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M13 8H3M7 4L3 8l4 4" />
  </svg>
);

export default function ProgramDetail({ program }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      <Link href="/academics" className="inline-flex items-center gap-2 mb-8">
        <BackIcon />
        All Programs
      </Link>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Main */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {program.image && (
            <div className="relative h-64 rounded-3xl overflow-hidden">
              <Image src={program.image} alt={program.title} fill className="object-cover" />
            </div>
          )}

          <h1 className="text-3xl font-black">{program.title}</h1>

          <p>{program.description}</p>

          <FacilitiesList facilities={program.facilities} />
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-5">

          <div className="bg-white border rounded-3xl p-6">
            <p className="text-sm font-bold mb-2">Duration</p>
            <p>{program.duration}</p>

            <div className="mt-4 flex flex-col gap-2">
              <Link href="/admissions" className="btn btn-secondary">
                Apply
                <ArrowIcon />
              </Link>

              <Link href="/contact" className="btn border">
                Ask Question
                <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* ✅ FIXED WhatsApp */}
          <a
            href="https://wa.me/254723104680"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-50 border rounded-2xl p-5"
          >
            <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-xl shrink-0">
              W
            </div>
            <div>
              <p className="font-bold">Have questions?</p>
              <p className="text-sm">Chat on WhatsApp</p>
            </div>
          </a>

        </aside>
      </div>
    </div>
  );
}