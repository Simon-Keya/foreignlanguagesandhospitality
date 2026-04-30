'use client';

import SectionTitle from "@/components/common/SectionTitle";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "What are the admission requirements?",
    a: "Requirements vary by program. For language courses, you need a KCSE certificate (minimum C plain) or equivalent to qualify for international placement standards.",
  },
  {
    q: "Are there scholarship opportunities available?",
    a: "We offer need-based fee reduction and fully-funded Ausbildung placements for qualified students through our European partner networks.",
  },
  {
    q: "How long are the programs?",
    a: "Language courses run from 3–12 months depending on the level (A1 to B2). Hospitality diplomas typically range from 12–24 months.",
  },
  {
    q: "Do you offer internship or job placements?",
    a: "Yes. We partner directly with employers in Germany, Austria, and Switzerland to ensure safe and legal transition into the workforce.",
  },
  {
    q: "Can I study while working?",
    a: "Yes. We offer flexible learning modules including evening, weekend, and hybrid online classes for working professionals.",
  },
  {
    q: "What career support services do you provide?",
    a: "We provide comprehensive CV writing, Bewerbung coaching, interview prep, and full visa guidance as part of our placement package.",
  },
  {
    q: "Are the programs internationally recognized?",
    a: "Yes. Our language programs strictly follow the CEFR (Common European Framework of Reference for Languages) standards.",
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    viewBox="0 0 24 24"
    className="w-4 h-4 shrink-0 opacity-60"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </motion.svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our programs and global career placements"
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-xl overflow-hidden ${
                  isOpen ? "bg-[#F8FAFC] ring-1 ring-[#0A2540]/10" : "bg-white border border-neutral-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-5">
                    <span className={`text-[10px] font-black tracking-widest transition-colors ${isOpen ? 'text-secondary' : 'text-[#0A2540]/30'}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-bold text-base md:text-[17px] tracking-tight ${isOpen ? 'text-[#0A2540]' : 'text-[#0A2540]/70'}`}>
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
                      <div className="px-6 pb-6 ml-[3.25rem]">
                        <p className="text-sm md:text-base text-neutral-600 leading-relaxed border-l-2 border-secondary/30 pl-5">
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

        {/* Admissions Help Desk Card - Standardized size and Navy colors */}
        <div className="mt-16 bg-[#0A2540] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 text-white shadow-xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 blur-[50px]" />
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <h4 className="text-xl font-black mb-2">Can&apos;t find an answer?</h4>
            <p className="text-sm text-white/50 max-w-sm">Our admissions team is available Mon–Fri for one-on-one placement guidance.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
             <Link href="/contact" className="px-6 py-3 bg-secondary text-white text-[11px] font-black uppercase tracking-widest rounded-lg hover:brightness-110 transition-all text-center">
               Contact Us
             </Link>
             <a href="https://wa.me/254723104680" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-white/5 text-center">
               WhatsApp
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}