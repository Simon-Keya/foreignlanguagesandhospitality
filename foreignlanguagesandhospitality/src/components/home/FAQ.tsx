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

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our programs, admissions, and student life"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-2xl ${
                  isOpen ? "bg-[#F8FAFC] border-2 border-primary" : "bg-white border border-neutral-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-black transition-colors ${isOpen ? 'text-secondary' : 'text-neutral-400'}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-black text-lg leading-tight ${isOpen ? 'text-primary' : 'text-neutral-700'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 ml-[3.5rem]">
                        <p className="text-neutral-600 leading-loose border-l-4 border-accent-light pl-6 py-2">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Admissions Help Desk Card */}
        <div className="mt-20 bg-primary rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 text-white shadow-2xl">
          <div className="flex-1">
            <h4 className="text-2xl font-black mb-2">Can&apos;t find what you&apos;re looking for?</h4>
            <p className="text-white/60">Our admissions team is available Monday–Friday, 8 AM–6 PM EAT for one-on-one guidance.</p>
          </div>
          <div className="flex gap-4">
             <Link href="/contact" className="px-6 py-3 bg-secondary font-black rounded-xl hover:scale-105 transition-transform">
               Contact Us
             </Link>
             <a href="https://wa.me/254723104680" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 font-black rounded-xl hover:bg-white/10">
               WhatsApp
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}