"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const subjects = [
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
  subject: z.enum(subjects, { errorMap: () => ({ message: "Please select a subject" }) }),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Shared styles to match the Admission Form
const inputBase = "w-full px-4 py-3 rounded-xl border border-base-300 text-sm text-neutral-800 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-neutral-400";
const inputError = "border-secondary focus:border-secondary focus:ring-secondary/10";

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-bold text-primary mb-1.5">{children}</label>
);

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint) throw new Error("Configuration missing");

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3}><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3 className="text-xl font-bold text-primary">Message Sent!</h3>
        <p className="text-neutral-600 text-sm mt-2">Thank you for reaching out. We will get back to you shortly.</p>
        <button onClick={() => setIsSubmitted(false)} className="mt-6 text-primary font-bold text-sm hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-base-300 shadow-sm p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <FieldLabel>Full Name</FieldLabel>
            <input {...register("fullName")} placeholder="Jane Doe" className={`${inputBase} ${errors.fullName ? inputError : ""}`} />
            {errors.fullName && <p className="text-xs text-secondary mt-1">{errors.fullName.message}</p>}
          </div>
          <div>
            <FieldLabel>Phone Number</FieldLabel>
            <input {...register("phone")} placeholder="+254..." className={`${inputBase} ${errors.phone ? inputError : ""}`} />
            {errors.phone && <p className="text-xs text-secondary mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <FieldLabel>Email Address</FieldLabel>
          <input {...register("email")} placeholder="your@email.com" className={`${inputBase} ${errors.email ? inputError : ""}`} />
          {errors.email && <p className="text-xs text-secondary mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <FieldLabel>Subject</FieldLabel>
          <select {...register("subject")} className={`${inputBase} ${errors.subject ? inputError : ""}`}>
            <option value="">How can we help?</option>
            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.subject && <p className="text-xs text-secondary mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <FieldLabel>Your Message</FieldLabel>
          <textarea {...register("message")} rows={4} placeholder="Type your message here..." className={`${inputBase} resize-none ${errors.message ? inputError : ""}`} />
          {errors.message && <p className="text-xs text-secondary mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full py-4 h-auto text-lg">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {error && <p className="text-center text-secondary text-sm font-medium">{error}</p>}
      </form>
    </div>
  );
}