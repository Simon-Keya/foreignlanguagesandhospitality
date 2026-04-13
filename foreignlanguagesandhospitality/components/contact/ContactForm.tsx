// src/components/contact/ContactForm.tsx

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.enum(["Admission Inquiry", "Program Information", "Financial Aid", "Other"], {
    required_error: "Please select a subject",
  }),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

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
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (!formspreeEndpoint) {
        throw new Error("Formspree endpoint is not configured");
      }

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Contact Form Submission: ${data.subject}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        // Auto hide success message after 6 seconds
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Message Sent Successfully!</h3>
          <p className="text-green-700">
            Thank you for reaching out. Our team will get back to you within 24-48 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              {...register("fullName")}
              className="input input-bordered w-full focus:border-secondary focus:ring-secondary"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              {...register("email")}
              className="input input-bordered w-full focus:border-secondary focus:ring-secondary"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="input input-bordered w-full focus:border-secondary focus:ring-secondary"
              placeholder="+254 700 000 000"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Subject *
            </label>
            <select
              {...register("subject")}
              className="select select-bordered w-full focus:border-secondary focus:ring-secondary"
            >
              <option value="">Select a subject</option>
              <option value="Admission Inquiry">Admission Inquiry</option>
              <option value="Program Information">Program Information</option>
              <option value="Financial Aid">Financial Aid</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Message *
            </label>
            <textarea
              {...register("message")}
              rows={6}
              className="textarea textarea-bordered w-full focus:border-secondary focus:ring-secondary resize-y min-h-[140px]"
              placeholder="Write your message here..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-secondary w-full text-lg font-medium py-4 disabled:opacity-70 flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner loading-md"></span>
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send size={20} />
              </>
            )}
          </button>

          {error && (
            <p className="text-red-500 text-center mt-4">{error}</p>
          )}
        </form>
      )}
    </>
  );
}