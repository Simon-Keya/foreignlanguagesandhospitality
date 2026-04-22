import ProgramGrid from "@/components/academics/ProgramGrid";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Programs | Foreign Languages & Hospitality | IIFLHM Narok",
  description: "Discover our Diploma, Certificate, and Language programs designed for career success in hospitality, nursing, and international opportunities.",
  keywords: [
    "diploma programs Narok",
    "hospitality diploma Kenya",
    "German language Narok",
    "nursing preparation Kenya",
    "language certificate programs",
  ],
};

const programs = [
  {
    slug: "german-language",
    title: "German Language (A1–B2)",
    description: "Complete German language training for Ausbildung programs and university study in Germany",
    duration: "6-12 months",
    level: "Beginner to Intermediate",
    category: "Languages"
  },
  {
    slug: "hospitality-management",
    title: "Diploma in Hospitality Management",
    description: "Comprehensive training for hotel operations, restaurant service, and tourism careers",
    duration: "18 months",
    level: "Diploma",
    category: "Hospitality"
  },
  {
    slug: "nursing-preparation",
    title: "Nursing & Healthcare Preparation",
    description: "Foundation for nursing assistant roles and Ausbildung programs in German healthcare",
    duration: "12 months",
    level: "Certificate",
    category: "Healthcare"
  },
  {
    slug: "english-language",
    title: "Advanced English Communication",
    description: "IELTS preparation and professional English for international hospitality careers",
    duration: "6 months",
    level: "Intermediate-Advanced",
    category: "Languages"
  }
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero */}
      <div className="relative bg-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-12 border-white/4 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border-9 border-accent/5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              Academic Excellence
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-3">
            Our Programs
          </h1>
          <p className="text-2xl font-light text-white/80 mb-6">
            Languages · Hospitality · Global Careers
          </p>
          <p className="text-base text-white/65 max-w-2xl mx-auto leading-relaxed mb-12">
            Expert-led diploma and certificate programs designed for practical skills and international career pathways — from Narok to Germany and beyond.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="btn btn-secondary btn-lg gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Apply Now
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="#programs"
              className="btn btn-lg border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300"
            >
              View Programs
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-tribar" />
      </div>

      {/* Why Study With Us */}
      <section className="py-24 bg-base-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionTitle
            eyebrow="Why Choose IIFLHM"
            title="Practical Career Training"
            subtitle="Programs built for real-world success in hospitality, healthcare, and international service industries"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="group bg-white rounded-2xl p-8 border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-black text-lg text-primary mb-3 leading-tight">Industry Recognized</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Certificates accredited for international pathways including Ausbildung and university progression</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 3H9l-3-3H2" />
                </svg>
              </div>
              <h3 className="font-black text-lg text-primary mb-3 leading-tight">Small Classes</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Maximum 15 students per class for personalized instruction and hands-on practice</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-black text-lg text-primary mb-3 leading-tight">Modern Facilities</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Professional training kitchens, language labs, and career counseling center</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="font-black text-lg text-primary mb-3 leading-tight">Career Support</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Job placement assistance and international recruitment partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section id="programs" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Diploma & Certificate Programs"
            title="Choose Your Pathway"
            subtitle="Select from language mastery, hospitality operations, or healthcare preparation programs"
          />

          <div className="mt-16">
            <ProgramGrid programs={[
              {
                slug: "german-language",
                title: "German Language (A1–B2)",
                description: "Complete German language training for Ausbildung programs and university study in Germany",
                duration: "6-12 months",
                level: "Beginner to Intermediate",
                category: "Languages"
              },
              {
                slug: "hospitality-management",
                title: "Diploma in Hospitality Management",
                description: "Comprehensive training for hotel operations, restaurant service, and tourism careers",
                duration: "18 months",
                level: "Diploma",
                category: "Hospitality"
              },
              {
                slug: "nursing-preparation",
                title: "Nursing & Healthcare Preparation",
                description: "Foundation for nursing assistant roles and Ausbildung programs in German healthcare",
                duration: "12 months",
                level: "Certificate",
                category: "Healthcare"
              },
              {
                slug: "english-language",
                title: "Advanced English Communication",
                description: "IELTS preparation and professional English for international hospitality careers",
                duration: "6 months",
                level: "Intermediate-Advanced",
                category: "Languages"
              }
            ]} />
                duration: "6-12 months",
                level: "Beginner to Intermediate",
                category: "Languages"
              },
              {
                slug: "hospitality-management",
                title: "Diploma in Hospitality Management",
                description: "Comprehensive training for hotel operations, restaurant service, and tourism careers",
                duration: "18 months",
                level: "Diploma",
                category: "Hospitality"
              },
              {
                slug: "nursing-preparation",
                title: "Nursing & Healthcare Preparation",
                description: "Foundation for nursing assistant roles and Ausbildung programs in German healthcare",
                duration: "12 months",
                level: "Certificate",
                category: "Healthcare"
              },
              {
                slug: "english-language",
                title: "Advanced English Communication",
                description: "IELTS preparation and professional English for international hospitality careers",
                duration: "6 months",
                level: "Intermediate-Advanced",
                category: "Languages"
              }
            ]} />
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-base-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Learning Environment"
            title="Modern Training Facilities"
            subtitle="Professional spaces designed for hands-on skill development"
          />

          <div className="mt-16">
            <FacilitiesList />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              Ready to Start?
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Begin Your Journey<br />
            <span className="text-accent">Today</span>
          </h2>

          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Take the first step toward your international career. Limited seats for June 2025 intake.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="btn btn-secondary btn-lg gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Apply Now
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}