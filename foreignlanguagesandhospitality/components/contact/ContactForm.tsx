"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

/* ✅ FIX: define enum properly */
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

  /* ✅ FIXED ENUM */
  subject: z.enum(subjects),

  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (!endpoint) throw new Error("Missing Formspree endpoint");

      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <div className="p-6 text-green-600">Message sent!</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      <input
        {...register("fullName")}
        placeholder="Full Name"
        className="input"
      />
      <p>{errors.fullName?.message}</p>

      <input
        {...register("email")}
        placeholder="Email"
        className="input"
      />
      <p>{errors.email?.message}</p>

      <input
        {...register("phone")}
        placeholder="Phone"
        className="input"
      />
      <p>{errors.phone?.message}</p>

      <select {...register("subject")} className="input">
        <option value="">Select subject</option>
        {subjects.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <p>{errors.subject?.message}</p>

      <textarea
        {...register("message")}
        placeholder="Message"
        className="input"
      />
      <p>{errors.message?.message}</p>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}