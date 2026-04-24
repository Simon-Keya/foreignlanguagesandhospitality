"use client";

import { submitToFormspree } from "@/lib/formspree";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const SUBJECT_OPTIONS = [
  "Admission Inquiry",
  "Program Information",
  "Financial Aid",
  "General Enquiry",
  "Other",
] as const;

const contactSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.enum(SUBJECT_OPTIONS, {
    message: "Please select a subject",
  }),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-base-300 text-sm text-neutral-800 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-neutral-400";

const inputError =
  "border-secondary focus:border-secondary focus:ring-secondary/10";

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-bold text-primary mb-1.5">
    {children}
  </label>
);

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "Admission Inquiry",
      message: "",
    },
  });

  // ✅ FIX: Properly typed handler
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitToFormspree(data, "contact");

      if (!result.ok) {
        throw new Error(result.message || "Failed to send");
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-4xl p-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              d="M20 6L9 17l-5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="text-2xl font-black text-[#0A192F]">
          Message Received!
        </h3>

        <p className="text-neutral-600 mt-3 max-w-xs mx-auto">
          Our team will get back to you shortly.
        </p>

        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-primary font-black uppercase tracking-widest text-xs hover:text-accent transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-4xl border border-neutral-100 shadow-xl p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <FieldLabel>Full Name</FieldLabel>
            <input
              {...register("fullName")}
              placeholder="John Doe"
              className={`${inputBase} ${
                errors.fullName ? inputError : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-[10px] font-bold text-secondary uppercase tracking-tight mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <FieldLabel>Phone Number</FieldLabel>
            <input
              {...register("phone")}
              placeholder="+254 7XX XXX XXX"
              className={`${inputBase} ${errors.phone ? inputError : ""}`}
            />
            {errors.phone && (
              <p className="text-[10px] font-bold text-secondary uppercase tracking-tight mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <FieldLabel>Email Address</FieldLabel>
          <input
            {...register("email")}
            placeholder="name@example.com"
            className={`${inputBase} ${errors.email ? inputError : ""}`}
          />
          {errors.email && (
            <p className="text-[10px] font-bold text-secondary uppercase tracking-tight mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <FieldLabel>Subject of Inquiry</FieldLabel>
          <select
            {...register("subject")}
            className={`${inputBase} ${errors.subject ? inputError : ""}`}
          >
            {SUBJECT_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {errors.subject && (
            <p className="text-[10px] font-bold text-secondary uppercase tracking-tight mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <FieldLabel>Your Detailed Message</FieldLabel>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="How can we help you today?"
            className={`${inputBase} resize-none ${
              errors.message ? inputError : ""
            }`}
          />

          {errors.message && (
            <p className="text-[10px] font-bold text-secondary uppercase tracking-tight mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0A192F] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-primary transition-all disabled:opacity-50"
        >
          {isSubmitting ? "Processing..." : "Submit Inquiry"}
        </button>

        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-center">
            <p className="text-secondary text-xs font-bold uppercase tracking-widest">
              {error}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}