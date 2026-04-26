"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import * as z from "zod";

const admissionSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.string().optional(),
  nationality: z.string().min(2, "Nationality is required"),
  program: z.string().min(1, "Please select a program"),
  educationLevel: z.string().min(1, "Please select your education level"),
  experience: z.string().optional(),
  motivation: z.string().min(30, "Please tell us why you want to join (min 30 characters)"),
  preferredIntake: z.string().min(1, "Please select your preferred intake"),
  howDidYouHear: z.string().optional(),
  document: z.instanceof(File).optional(),
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

const intakes = ["June 2025 Intake", "September 2025 Intake", "January 2026 Intake"];
const educationLevels = ["KCPE", "KCSE / O-Level", "Certificate", "Diploma", "Degree", "Postgraduate"];
const hearAboutUs = ["Friend / Family", "Social Media", "Google Search", "WhatsApp", "Community Event", "Other"];

// --- Reusable sub-components ---
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
const inputError = "border-secondary focus:border-secondary focus:ring-secondary/10";

const StepIndicator = ({ current }: { current: number }) => {
  const steps = ["Personal Info", "Program & Education", "Motivation"];
  return (
    <div className="flex items-center gap-0 mb-10">
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black transition-all duration-300 ${done ? "bg-primary text-white" : active ? "bg-secondary text-white shadow-glow" : "bg-base-200 text-neutral-400 border border-base-300"}`}>
                {done ? <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M3 8l3.5 3.5L13 4" /></svg> : i + 1}
              </div>
              <span className={`text-xs font-semibold hidden sm:block ${active ? "text-secondary" : done ? "text-primary" : "text-neutral-400"}`}>{label}</span>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 mb-5 rounded-full transition-colors duration-300 ${done ? "bg-primary" : "bg-base-300"}`} />}
          </div>
        );
      })}
    </div>
  );
};

export default function AdmissionForm() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const { register, handleSubmit, setValue, trigger, control, formState: { errors } } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
    defaultValues: { nationality: "Kenyan", preferredIntake: "June 2025 Intake" },
  });

  const watchedValues = useWatch({ control });

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
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally { setIsSubmitting(false); }
  };

  if (isSuccess) return (
    <div className="relative bg-white rounded-3xl border border-base-300 shadow-lg p-12 text-center">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />
      <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
      </div>
      <h3 className="text-2xl font-black text-primary mb-3">Application Received!</h3>
      <p className="text-neutral-600 text-sm max-w-sm mx-auto">We'll contact you within <strong className="text-primary">48 hours</strong>.</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="https://wa.me/254723104680" target="_blank" className="btn btn-secondary">Chat on WhatsApp</a>
        <a href="/" className="btn border border-base-300 bg-white text-primary">Return Home</a>
      </div>
    </div>
  );

  return (
    <div className="relative bg-white rounded-3xl border border-base-300 shadow-lg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />
      <div className="p-8 md:p-10">
        <StepIndicator current={step} />
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {step === 0 && (
            <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Full Name</FieldLabel>
                  <input {...register("fullName")} placeholder="Jane Doe" className={`${inputBase} ${errors.fullName ? inputError : ""}`} />
                  <FieldError message={errors.fullName?.message} />
                </div>
                <div>
                  <FieldLabel required>Phone Number</FieldLabel>
                  <input {...register("phone")} placeholder="+254 700 123 456" className={`${inputBase} ${errors.phone ? inputError : ""}`} />
                  <FieldError message={errors.phone?.message} />
                </div>
              </div>
              <div>
                <FieldLabel required>Email Address</FieldLabel>
                <input type="email" {...register("email")} placeholder="your@email.com" className={`${inputBase} ${errors.email ? inputError : ""}`} />
                <FieldError message={errors.email?.message} />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div><FieldLabel>Date of Birth</FieldLabel><input type="date" {...register("dateOfBirth")} className={inputBase} /></div>
                <div>
                  <FieldLabel required>Nationality</FieldLabel>
                  <input {...register("nationality")} className={`${inputBase} ${errors.nationality ? inputError : ""}`} />
                  <FieldError message={errors.nationality?.message} />
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4">
              <div>
                <FieldLabel required>Program of Interest</FieldLabel>
                <select {...register("program")} className={`${inputBase} ${errors.program ? inputError : ""}`}>
                  <option value="">Select a program…</option>
                  {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                <FieldError message={errors.program?.message} />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Preferred Intake</FieldLabel>
                  <select {...register("preferredIntake")} className={inputBase}>{intakes.map((i) => <option key={i} value={i}>{i}</option>)}</select>
                </div>
                <div>
                  <FieldLabel required>Highest Education Level</FieldLabel>
                  <select {...register("educationLevel")} className={`${inputBase} ${errors.educationLevel ? inputError : ""}`}>
                    <option value="">Select…</option>
                    {educationLevels.map((e) => <option key={e} value={e}>{e}</option>)}
                  </select>
                  <FieldError message={errors.educationLevel?.message} />
                </div>
              </div>
              <div>
                <FieldLabel>Supporting Document (optional)</FieldLabel>
                <label className={`flex flex-col items-center justify-center w-full h-28 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${uploadedFileName ? "border-primary bg-primary/5" : "border-base-300 bg-base-100 hover:border-primary"}`}>
                  <span className="text-sm font-semibold text-primary">{uploadedFileName || "Click to upload PDF, JPG, or PNG"}</span>
                  <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" />
                </label>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4">
              <div>
                <FieldLabel required>Why do you want to join?</FieldLabel>
                <textarea {...register("motivation")} rows={5} className={`${inputBase} resize-none ${errors.motivation ? inputError : ""}`} />
                <FieldError message={errors.motivation?.message} />
              </div>
              <div className="bg-base-200 rounded-2xl border border-base-300 p-5">
                <p className="text-xs font-black uppercase text-primary mb-3">Application Summary</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    ["Nationality", watchedValues.nationality],
                    ["Program", watchedValues.program],
                    ["Intake", watchedValues.preferredIntake],
                    ["Education", watchedValues.educationLevel],
                  ].map(([label, val]) => (
                    <div key={label}>
                      <p className="text-xs text-neutral-400 font-medium">{label}</p>
                      <p className="text-neutral-700 font-semibold truncate text-xs">{val || "—"}</p>
                    </div>
                  ))}
                </div>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 w-4 h-4 accent-primary" />
                <span className="text-xs text-neutral-500">I confirm that the information provided is accurate.</span>
              </label>
            </div>
          )}

          <div className={`flex gap-3 mt-8 ${step > 0 ? "justify-between" : "justify-end"}`}>
            {step > 0 && <button type="button" onClick={() => setStep(step - 1)} className="btn border border-base-300 bg-white text-primary">Back</button>}
            {step < 2 ? (
              <button type="button" onClick={nextStep} className="btn btn-primary">Continue</button>
            ) : (
              <button type="submit" disabled={isSubmitting} className="btn btn-secondary min-w-[180px]">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            )}
          </div>
          {error && <p className="mt-4 text-sm text-secondary font-medium text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}