"use client";

import { useState } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";

const faqs = [
  {
    q: "What are the admission requirements?",
    a: "Requirements vary by program. For language courses, you need a KCSE certificate (minimum C plain) or equivalent. For Hospitality Management and Nursing Preparation, specific subject requirements apply. Visit our Admissions page for the full breakdown per program.",
  },
  {
    q: "Are there scholarship opportunities available?",
    a: "We offer need-based fee reduction for qualifying students. Additionally, some of our German employer partners offer fully-funded Ausbildung placements that cover tuition and living expenses once you reach B1/B2 level. Contact us to learn more.",
  },
  {
    q: "How long are the programs?",
    a: "Language courses run from 3 to 12 months depending on the starting level and target proficiency. Hospitality diplomas are 12–24 months. Nursing Career Preparation is a structured 6–9 month pathway to meet German Anerkennung requirements.",
  },
  {
    q: "Do you offer internship or job placements?",
    a: "Yes. We have active partnerships with employers in Germany, Austria, and Switzerland. Our career consultant works with students throughout the program to align their training with specific employer requirements and visa pathways.",
  },
  {
    q: "Can I study while working?",
    a: "We offer flexible scheduling including evening and weekend classes, designed specifically for working students. Online German language sessions are also available for those who cannot attend in person.",
  },
  {
    q: "What career support services do you provide?",
    a: "Our career services include CV writing workshops, German-style application (Bewerbung) coaching, interview preparation, visa and documentation guidance, and ongoing alumni network support after graduation.",
  },
  {
    q: "Are the programs internationally recognized?",
    a: "Our German language programs are aligned with the Common European Framework of Reference (CEFR) — the international standard recognized by German universities and employers. Hospitality programs follow industry-standard curricula.",
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-base-200 relative overflow-hidden">
      {/* Tribar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

      {/* Decorative ring */}
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full border-[48px] border-primary/[0.04] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about our programs, admissions, and student life"
        />

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary shadow-md"
                    : "border-base-300 shadow-sm hover:shadow-md hover:border-primary/30"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {/* Number + Question */}
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-black tracking-eyebrow flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? "text-secondary" : "text-neutral-300"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-bold text-base transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-neutral-700"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>

                  {/* Chevron */}
                  <span
                    className={`transition-colors duration-300 flex-shrink-0 ${
                      isOpen ? "text-secondary" : "text-neutral-400"
                    }`}
                  >
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-400 ease-smooth ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-6">
                      {/* Gold left rule */}
                      <div className="pl-5 border-l-2 border-accent">
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-white rounded-3xl border border-base-300 shadow-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-primary text-lg">Can&apos;t find what you&apos;re looking for?</p>
            <p className="text-sm text-neutral-500 mt-1">
              Our admissions team is available Monday–Friday, 8 AM–6 PM EAT.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="btn btn-secondary gap-2"
            >
              Contact Us
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            
              href="https://wa.me/254723104680"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost border border-base-300 gap-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}