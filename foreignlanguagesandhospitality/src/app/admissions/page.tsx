import AdmissionForm from "@/components/admissions/AdmissionForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Enroll at IIFLHM",
  description: "Start your professional journey. Apply for German Language, Hospitality, and Nursing Preparation programs.",
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Admission Header */}
      <section className="bg-[#0A192F] pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-yellow-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Application Portal</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Begin Your Journey</h1>
          <p className="text-white/50 mt-6 max-w-xl mx-auto">Fill out the form below to initiate your admission process. Our officers will contact you within 24 hours.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Application Form Sidebar */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-neutral-100">
            <div className="mb-10 pb-6 border-b border-neutral-100">
              <h2 className="text-2xl font-black text-[#0A192F]">Enrollment Form</h2>
              <p className="text-neutral-400 text-sm mt-1">Please ensure all details match your national ID/Passport.</p>
            </div>
            <AdmissionForm />
          </div>

          {/* Support Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-neutral-100 shadow-sm">
              <h3 className="font-black text-[#0A192F] uppercase tracking-widest text-xs mb-6">Need Assistance?</h3>
              
              <div className="space-y-4">
                <a href="https://wa.me/254723104680" target="_blank" className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold shrink-0">WA</div>
                  <div>
                    <p className="text-xs font-black text-green-800 uppercase tracking-widest">WhatsApp Support</p>
                    <p className="text-sm font-bold text-green-700">Instant Chat</p>
                  </div>
                </a>

                <a href="tel:+254723104680" className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#0A192F] flex items-center justify-center text-white font-bold shrink-0">TEL</div>
                  <div>
                    <p className="text-xs font-black text-blue-800 uppercase tracking-widest">Admissions Desk</p>
                    <p className="text-sm font-bold text-blue-700">+254 723 104 680</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[#0A192F] p-8 rounded-[2rem] text-white">
              <h3 className="font-black text-yellow-400 uppercase tracking-widest text-xs mb-4">Required Documents</h3>
              <ul className="text-sm space-y-3 text-white/70 font-medium">
                <li className="flex gap-2"><span>•</span> National ID / Birth Certificate</li>
                <li className="flex gap-2"><span>•</span> KCSE Result Slip / Certificate</li>
                <li className="flex gap-2"><span>•</span> 2 Passport Size Photos</li>
                <li className="flex gap-2"><span>•</span> Relevant Academic Transcripts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}