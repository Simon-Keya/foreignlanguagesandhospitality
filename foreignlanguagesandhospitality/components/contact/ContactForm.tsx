"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email:    z.string().email("Please enter a valid email address"),
  phone:    z.string().min(10, "Please enter a valid phone number"),
  subject:  z.enum(
    ["Admission Inquiry", "Program Information", "Financial Aid", "General Enquiry", "Other"],
    { required_error: "Please select a subject" }
  ),
  message:  z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  "Admission Inquiry",
  "Program Information",
  "Financial Aid",
  "General Enquiry",
  "Other",
];

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

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [error, setError]               = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint) throw new Error("Formspree endpoint is not configured");

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `New Contact Form: ${data.subject}`,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative bg-white rounded-3xl border border-base-300 shadow-lg overflow-hidden p-12 text-center">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />
        <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-4" />
        <h3 className="text-2xl font-black text-primary mb-3">Message Sent!</h3>
        <p className="text-neutral-600 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. Our team will get back to you within{" "}
          <strong className="text-primary">24–48 hours</strong>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/254723104680" target="_blank" rel="noopener noreferrer"
            className="btn btn-secondary gap-2">
            Chat on WhatsApp
          </a>
          <button onClick={() => setIsSubmitted(false)}
            className="btn border border-base-300 bg-white text-primary hover:bg-base-200">
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-3xl border border-base-300 shadow-lg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />

      <div className="p-8 md:p-10">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

          {/* Name + Phone */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <FieldLabel required>Full Name</FieldLabel>
              <input type="text" {...register("fullName")}
                placeholder="Jane Doe"
                className={`${inputBase} ${errors.fullName ? inputError : ""}`} />
              <FieldError message={errors.fullName?.message} />
            </div>
            <div>
              <FieldLabel required>Phone Number</FieldLabel>
              <input type="tel" {...register("phone")}
                placeholder="+254 700 000 000"
                className={`${inputBase} ${errors.phone ? inputError : ""}`} />
              <FieldError message={errors.phone?.message} />
            </div>
          </div>

          {/* Email */}
          <div>
            <FieldLabel required>Email Address</FieldLabel>
            <input type="email" {...register("email")}
              placeholder="your.email@example.com"
              className={`${inputBase} ${errors.email ? inputError : ""}`} />
            <FieldError message={errors.email?.message} />
          </div>

          {/* Subject */}
          <div>
            <FieldLabel required>Subject</FieldLabel>
            <select {...register("subject")}
              className={`${inputBase} ${errors.subject ? inputError : ""}`}>
              <option value="">Select a subject…</option>
              {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <FieldError message={errors.subject?.message} />
          </div>

          {/* Message */}
          <div>
            <FieldLabel required>Message</FieldLabel>
            <textarea {...register("message")} rows={6}
              placeholder="Write your message here…"
              className={`${inputBase} resize-none ${errors.message ? inputError : ""}`} />
            <div className="flex items-center justify-between mt-1">
              <FieldError message={errors.message?.message} />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" disabled={isSubmitting}
            className="btn btn-secondary w-full gap-2 font-bold text-base mt-1">
            {isSubmitting ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send Message
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 1.5L1 8l5 2m8.5-8.5L8 13l-2-5m8.5-8.5L6 10" />
                </svg>
              </>
            )}
          </button>

          {error && (
            <div className="flex items-center gap-3 bg-secondary/10 border border-secondary/20 rounded-xl px-4 py-3">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-sm text-secondary font-medium">{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}