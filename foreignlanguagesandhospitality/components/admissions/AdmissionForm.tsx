"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const admissionSchema = z.object({
  fullName:        z.string().min(3, "Full name must be at least 3 characters"),
  email:           z.string().email("Please enter a valid email address"),
  phone:           z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth:     z.string().optional(),
  nationality:     z.string().min(2, "Nationality is required"),
  program:         z.string().min(1, "Please select a program"),
  educationLevel:  z.string().min(1, "Please select your education level"),
  experience:      z.string().optional(),
  motivation:      z.string().min(30, "Please tell us why you want to join (min 30 characters)"),
  preferredIntake: z.string().min(1, "Please select your preferred intake"),
  howDidYouHear:   z.string().optional(),
  document:        z.instanceof(File).optional(),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

const programs = [
  "German Language Course (A1 – Beginner)",
  "German Language Course (A2 – Elementary)",
  "German Language Course (B1/B2 – Intermediate)",
  "Diploma in Hospitality Management",
  "Diploma in Front Office Operations & Administration",
  "Diploma in Food & Beverage Management",
  "Diploma in House Keeping & Laundry Operation",
  "Nursing Career Preparation",
  "Other / Not Sure Yet",
];

const intakes = [
  "June 2025 Intake",
  "September 2025 Intake",
  "January 2026 Intake",
];

const educationLevels = ["KCPE", "KCSE / O-Level", "Certificate", "Diploma", "Degree", "Postgraduate"];

const hearAboutUs = [
  "Friend / Family",
  "Social Media",
  "Google Search",
  "WhatsApp",
  "Community Event",
  "Other",
];

// ── Reusable sub-components ──────────────────────────────────────

const FieldLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <label className="block text-sm font-bold text-primary mb-1.5">
    {children}
    {required && <span className="text-secondary ml-1">*</span>}
  </label>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <div className="flex items-center gap-1.5 mt-1.5">
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-secondary flex-shrink-0" fill="currentColor">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 5zm0 8a1 1 0 110-2 1 1 0 010 2z" />
      </svg>
      <p className="text-xs font-medium text-secondary">{message}</p>
    </div>
  ) : null;

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-base-300 text-sm text-neutral-800 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-neutral-400";

const inputError =
  "border-secondary focus:border-secondary focus:ring-secondary/10";

// ── Step indicator ───────────────────────────────────────────────

const steps = ["Personal Info", "Program & Education", "Motivation"];

const StepIndicator = ({ current }: { current: number }) => (
  <div className="flex items-center gap-0 mb-10">
    {steps.map((label, i) => {
      const done = i < current;
      const active = i === current;
      return (
        <div key={label} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black transition-all duration-300 ${
                done
                  ? "bg-primary text-white"
                  : active
                  ? "bg-secondary text-white shadow-glow"
                  : "bg-base-200 text-neutral-400 border border-base-300"
              }`}
            >
              {done ? (
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l3.5 3.5L13 4" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span className={`text-xs font-semibold hidden sm:block ${active ? "text-secondary" : done ? "text-primary" : "text-neutral-400"}`}>
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 mb-5 rounded-full transition-colors duration-300 ${done ? "bg-primary" : "bg-base-300"}`} />
          )}
        </div>
      );
    })}
  </div>
);

// ── Main component ───────────────────────────────────────────────

export default function AdmissionForm() {
  const [step, setStep]                     = useState(0);
  const [isSubmitting, setIsSubmitting]     = useState(false);
  const [isSuccess, setIsSuccess]           = useState(false);
  const [error, setError]                   = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      nationality:     "Kenyan",
      preferredIntake: "June 2025 Intake",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      setValue("document", file);
    }
  };

  const nextStep = async () => {
    const fields: Record<number, (keyof AdmissionFormData)[]> = {
      0: ["fullName", "email", "phone", "nationality"],
      1: ["program", "educationLevel", "preferredIntake"],
    };
    const valid = await trigger(fields[step]);
    if (valid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ADMISSIONS;
      if (!endpoint) throw new Error("Formspree endpoint not configured");

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value && key !== "document") formData.append(key, value as string);
      });
      if (data.document instanceof File) formData.append("document", data.document);

      const res = await fetch(endpoint, { method: "POST", body: formData });
      if (!res.ok) throw new Error("Submission failed");

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Success state ──────────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="relative bg-white rounded-3xl border border-base-300 shadow-lg overflow-hidden p-12 text-center">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />
        <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-4" />
        <h3 className="text-2xl font-black text-primary mb-3">Application Received!</h3>
        <p className="text-neutral-600 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for applying. Our admissions team will review your application and contact you within <strong className="text-primary">48 hours</strong>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/254723104680" target="_blank" rel="noopener noreferrer"
            className="btn btn-secondary gap-2">
            Chat on WhatsApp
          </a>
          <a href="/" className="btn border border-base-300 bg-white text-primary hover:bg-base-200">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-3xl border border-base-300 shadow-lg overflow-hidden">
      {/* Tribar top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />

      <div className="p-8 md:p-10">
        <StepIndicator current={step} />

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* ── Step 0 — Personal Information ── */}
          {step === 0 && (
            <div className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Full Name</FieldLabel>
                  <input {...register("fullName")} placeholder="Jane Doe"
                    className={`${inputBase} ${errors.fullName ? inputError : ""}`} />
                  <FieldError message={errors.fullName?.message} />
                </div>
                <div>
                  <FieldLabel required>Phone Number</FieldLabel>
                  <input {...register("phone")} placeholder="+254 700 123 456"
                    className={`${inputBase} ${errors.phone ? inputError : ""}`} />
                  <FieldError message={errors.phone?.message} />
                </div>
              </div>

              <div>
                <FieldLabel required>Email Address</FieldLabel>
                <input type="email" {...register("email")} placeholder="your@email.com"
                  className={`${inputBase} ${errors.email ? inputError : ""}`} />
                <FieldError message={errors.email?.message} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <FieldLabel>Date of Birth</FieldLabel>
                  <input type="date" {...register("dateOfBirth")}
                    className={inputBase} />
                </div>
                <div>
                  <FieldLabel required>Nationality</FieldLabel>
                  <input {...register("nationality")}
                    className={`${inputBase} ${errors.nationality ? inputError : ""}`} />
                  <FieldError message={errors.nationality?.message} />
                </div>
              </div>

              <div>
                <FieldLabel>How did you hear about us?</FieldLabel>
                <select {...register("howDidYouHear")} className={inputBase}>
                  <option value="">Select…</option>
                  {hearAboutUs.map((h) => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>
          )}

          {/* ── Step 1 — Program & Education ── */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <div>
                <FieldLabel required>Program of Interest</FieldLabel>
                <select {...register("program")}
                  className={`${inputBase} ${errors.program ? inputError : ""}`}>
                  <option value="">Select a program…</option>
                  {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                <FieldError message={errors.program?.message} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Preferred Intake</FieldLabel>
                  <select {...register("preferredIntake")}
                    className={`${inputBase} ${errors.preferredIntake ? inputError : ""}`}>
                    {intakes.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <FieldLabel required>Highest Education Level</FieldLabel>
                  <select {...register("educationLevel")}
                    className={`${inputBase} ${errors.educationLevel ? inputError : ""}`}>
                    <option value="">Select…</option>
                    {educationLevels.map((e) => <option key={e} value={e}>{e}</option>)}
                  </select>
                  <FieldError message={errors.educationLevel?.message} />
                </div>
              </div>

              <div>
                <FieldLabel>Relevant Experience (optional)</FieldLabel>
                <textarea {...register("experience")} rows={3}
                  placeholder="Any relevant work experience, previous language training, or hospitality background…"
                  className={`${inputBase} resize-none`} />
              </div>

              {/* File upload */}
              <div>
                <FieldLabel>Supporting Document (optional)</FieldLabel>
                <label className={`flex flex-col items-center justify-center w-full h-28 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${
                  uploadedFileName
                    ? "border-primary bg-primary/5"
                    : "border-base-300 bg-base-100 hover:border-primary hover:bg-primary/5"
                }`}>
                  {uploadedFileName ? (
                    <div className="flex items-center gap-2 text-primary">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span className="text-sm font-semibold">{uploadedFileName}</span>
                    </div>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" className="w-7 h-7 text-neutral-400 mb-1" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span className="text-sm text-neutral-500">Click to upload PDF, JPG, or PNG</span>
                    </>
                  )}
                  <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" />
                </label>
              </div>
            </div>
          )}

          {/* ── Step 2 — Motivation ── */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <div>
                <FieldLabel required>Why do you want to join?</FieldLabel>
                <p className="text-xs text-neutral-400 mb-2">
                  Tell us about your goals, why you chose this program, and what you hope to achieve.
                </p>
                <textarea {...register("motivation")} rows={7}
                  placeholder="I want to join because…"
                  className={`${inputBase} resize-none ${errors.motivation ? inputError : ""}`} />
                <FieldError message={errors.motivation?.message} />
              </div>

              {/* Summary card */}
              <div className="bg-base-200 rounded-2xl border border-base-300 p-5">
                <p className="text-xs font-black uppercase tracking-eyebrow text-primary mb-3">
                  Application Summary
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    ["Nationality", "nationality"],
                    ["Program", "program"],
                    ["Intake", "preferredIntake"],
                    ["Education", "educationLevel"],
                  ].map(([label]) => (
                    <div key={label}>
                      <p className="text-xs text-neutral-400 font-medium">{label}</p>
                      <p className="text-neutral-700 font-semibold truncate text-xs mt-0.5">—</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 mt-3">
                  Review your details before submitting. You can go back to edit.
                </p>
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="mt-0.5 w-4 h-4 rounded border-base-300 accent-primary flex-shrink-0" />
                <span className="text-xs text-neutral-500 leading-relaxed">
                  I confirm that the information provided is accurate and I agree to be contacted by the International Institute of Foreign Languages and Hospitality Management regarding my application.
                </span>
              </label>
            </div>
          )}

          {/* ── Navigation buttons ── */}
          <div className={`flex gap-3 mt-8 ${step > 0 ? "justify-between" : "justify-end"}`}>
            {step > 0 && (
              <button type="button" onClick={prevStep}
                className="btn border border-base-300 bg-white text-primary hover:bg-base-200 gap-2 font-bold">
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 8H3M7 4L3 8l4 4" />
                </svg>
                Back
              </button>
            )}

            {step < 2 ? (
              <button type="button" onClick={nextStep}
                className="btn btn-primary gap-2 font-bold ml-auto">
                Continue
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            ) : (
              <button type="submit" disabled={isSubmitting}
                className="btn btn-secondary gap-2 font-bold min-w-[180px]">
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Application
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>

          {error && (
            <div className="mt-4 flex items-center gap-3 bg-secondary/10 border border-secondary/20 rounded-xl px-4 py-3">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-sm text-secondary font-medium">{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}