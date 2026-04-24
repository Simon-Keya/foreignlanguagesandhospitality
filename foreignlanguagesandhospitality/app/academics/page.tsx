import FacilitiesList from "@/components/academics/FacilitiesList";
import { Program } from "@/components/academics/ProgramCard";
import ProgramGrid from "@/components/academics/ProgramGrid";
import SectionTitle from "@/components/common/SectionTitle";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic Programs | IIFLHM Narok",
  description: "Explore diploma and certificate programs for international careers.",
};

const programs: Program[] = [
  {
    slug: "german-language",
    title: "German Language (A1–B2)",
    description: "Complete German training for Ausbildung and university.",
    duration: "6–12 months",
    category: "Languages",
    accentColor: "secondary",
  },
  {
    slug: "hospitality-management",
    title: "Diploma in Hospitality Management",
    description: "Hotel and tourism career training.",
    duration: "18 months",
    category: "Hospitality",
    accentColor: "primary",
  },
  {
    slug: "nursing-preparation",
    title: "Nursing Preparation",
    description: "Healthcare pathway for Germany.",
    duration: "12 months",
    category: "Healthcare",
    accentColor: "accent",
  },
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-navy-gradient text-white text-center">
        <h1 className="text-5xl font-black mb-4">Academic Programs</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Build your career through structured diploma and language programs.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/admissions" className="btn btn-secondary">
            Apply Now
          </Link>
          <Link href="#programs" className="btn border">
            View Programs
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Programs"
            title="Choose Your Path"
            subtitle="Language, hospitality, and healthcare pathways"
          />

          <div className="mt-12">
            <ProgramGrid programs={programs} />
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Facilities"
            title="Our Training Environment"
            subtitle="Hands-on learning spaces"
          />

          <FacilitiesList
            facilities={[
              "Modern language labs",
              "Hospitality training kitchens",
              "Simulation rooms",
              "Career advisory center",
            ]}
          />
        </div>
      </section>

    </div>
  );
}