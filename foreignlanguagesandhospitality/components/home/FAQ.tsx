'use client';

import SectionTitle from "@/components/common/SectionTitle";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "What are the admission requirements?",
    a: "Requirements vary by program. For language courses, you need a KCSE certificate (minimum C plain) or equivalent...",
  },
  {
    q: "Are there scholarship opportunities available?",
    a: "We offer need-based fee reduction and fully-funded Ausbildung placements for qualified students...",
  },
  {
    q: "How long are the programs?",
    a: "Language courses run from 3–12 months. Hospitality diplomas are 12–24 months...",
  },
  {
    q: "Do you offer internship or job placements?",
    a: "Yes. We partner with employers in Germany, Austria, and Switzerland...",
  },
  {
    q: "Can I study while working?",
    a: "Yes. We offer evening, weekend, and online classes...",
  },
  {
    q: "What career support services do you provide?",
    a: "We provide CV writing, Bewerbung coaching, interview prep, and visa guidance...",
  },
  {
    q: "Are the programs internationally recognized?",
    a: "Yes. Our language programs follow CEFR standards...",
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    viewBox="0 0 24 24"
    className="w-5 h-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </motion.svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // ✅ auto-close others
  };

  return (
    <section className="py-24 bg-base-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

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
                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-black tracking-eyebrow shrink-0 ${
                        isOpen ? "text-secondary" : "text-neutral-300"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`font-bold text-base ${
                        isOpen ? "text-primary" : "text-neutral-700"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>

                  <ChevronIcon open={isOpen} />
                </button>

                {/* ANSWER (Animated) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-6">
                        <div className="pl-5 border-l-2 border-accent">
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-white rounded-3xl border border-base-300 shadow-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-primary text-lg">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              Our admissions team is available Monday–Friday, 8 AM–6 PM EAT.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="btn btn-secondary gap-2">
              Contact Us
            </Link>

            <a
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