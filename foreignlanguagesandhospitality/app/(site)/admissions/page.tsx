import AdmissionForm from "@/components/admissions/AdmissionForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admissions | Apply Now — IIFLHM Narok",
  description:
    "Apply for our next intake. Join Diploma, Certificate, and Language programs.",
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* WhatsApp nudge */}
      <a
        href="https://wa.me/254723104680"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-5"
      >
        <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center">
          WhatsApp
        </div>
        <div>
          <p className="text-sm font-bold text-green-800">
            Questions? Chat on WhatsApp
          </p>
        </div>
      </a>

      {/* CTA FIX */}
      <a
        href="tel:+254723104680"
        className="btn btn-secondary"
      >
        Call: +254 723 104 680
      </a>

      <Link href="/contact">
        Send a Message
      </Link>

      <AdmissionForm />

    </div>
  );
}