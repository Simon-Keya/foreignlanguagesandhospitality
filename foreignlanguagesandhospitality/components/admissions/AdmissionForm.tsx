// src/components/admissions/AdmissionForm.tsx

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Loader2, Send, Upload } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const admissionSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.string().optional(),
  nationality: z.string().min(2, "Nationality is required"),
  program: z.string().min(1, "Please select a program"),
  educationLevel: z.string().min(1, "Please select your education level"),
  experience: z.string().optional(),
  motivation: z.string().min(30, "Please tell us why you want to join"),
  preferredIntake: z.string().min(1, "Please select your preferred intake"),
  howDidYouHear: z.string().optional(),
  // File upload (optional)
  document: z.any().optional(),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

const programs = [
  "German Language Course", "Diploma in Hospitality Management", 
  "Diploma in Front Office Operations", "Diploma in House Keeping & Laundry",
  "Diploma in Travel and Tourism Management", "Certificate in Food Production",
  "Nursing Career Preparation", "Other"
];

const intakes = ["June 2025 Intake", "September 2025 Intake", "January 2026 Intake"];

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      nationality: "Kenya",
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

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ADMISSIONS;
      if (!endpoint) throw new Error("Formspree endpoint not configured");

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value as string);
      });

      // Append file if exists
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput?.files?.[0]) {
        formData.append("document", fileInput.files[0]);
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setUploadedFileName(null);
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-green-800 mb-3">Application Received!</h3>
          <p className="text-green-700">Thank you! Our team will contact you within 48 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Name, Email, Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input {...register("fullName")} className="input input-bordered w-full" placeholder="John Doe" />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input {...register("phone")} className="input input-bordered w-full" placeholder="+254 700 123 456" />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address *</label>
            <input type="email" {...register("email")} className="input input-bordered w-full" placeholder="your@email.com" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Program & Intake */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Program *</label>
              <select {...register("program")} className="select select-bordered w-full">
                <option value="">Select Program</option>
                {programs.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Intake *</label>
              <select {...register("preferredIntake")} className="select select-bordered w-full">
                {intakes.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Highest Education Level *</label>
              <select {...register("educationLevel")} className="select select-bordered w-full">
                <option value="">Select Level</option>
                <option value="KCSE">KCSE</option>
                <option value="Certificate">Certificate</option>
                <option value="Diploma">Diploma</option>
                <option value="Degree">Degree</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nationality</label>
              <input {...register("nationality")} className="input input-bordered w-full" defaultValue="Kenya" />
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload Supporting Document (Optional)</label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-base-300 rounded-2xl cursor-pointer hover:border-secondary transition-colors">
              <Upload className="w-8 h-8 text-neutral-400 mb-2" />
              <span className="text-sm text-neutral-600">Click to upload KCSE certificate, ID, or other documents</span>
              <input 
                type="file" 
                className="hidden" 
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </label>
            {uploadedFileName && (
              <p className="text-sm text-green-600 mt-2">✓ Uploaded: {uploadedFileName}</p>
            )}
          </div>

          {/* Motivation */}
          <div>
            <label className="block text-sm font-medium mb-2">Why do you want to join IIFLHM? *</label>
            <textarea 
              {...register("motivation")} 
              rows={5} 
              className="textarea textarea-bordered w-full" 
              placeholder="Tell us about your goals..."
            />
            {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-secondary w-full py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting Application...
              </>
            ) : (
              <>
                Submit Application <Send className="w-5 h-5" />
              </>
            )}
          </button>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      )}
    </>
  );
}