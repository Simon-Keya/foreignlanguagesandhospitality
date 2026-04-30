"use client";

import Link from "next/link";

export default function Hero() {
  // Logic to handle the download from the local /docs folder
  const handleDownload = () => {
    // This points to public/docs/brochure.pdf
    const link = document.createElement('a');
    link.href = '/docs/brochure.pdf';
    link.download = 'IFL_Brochure.pdf'; // Suggests a filename for the user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#0A2540]">
      {/* 1. THE IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-bg scale-105" />
        
        {/* Subtle Darkening: Clearer visibility for the image while protecting text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/80 via-[#0A2540]/30 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-1 bg-secondary" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/90">
              Narok, Kenya · Est. 2024
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
            Your Gateway to <br />
            <span className="text-secondary">Global</span> Careers
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-xl font-medium">
            World-class language training and hospitality education. We prepare 
            African youth for safe, legal, and meaningful careers in 
            Germany, Austria, and Switzerland.
          </p>

          {/* CTAs - ENHANCED VISIBILITY */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-16">
            {/* 1. Apply Now - The Primary Lead */}
            <Link
              href="/admissions"
              className="w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Apply Now
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>

            {/* 2. Explore Programs - Solid White for maximum visibility */}
            <Link
              href="/academics"
              className="w-full sm:w-auto bg-white text-[#0A2540] px-10 py-5 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-xl hover:bg-[#f8f8f8] transition-all text-center active:scale-95"
            >
              Explore Programs
            </Link>

            {/* 3. Download Brochure - Outlined & Grouped with Icon */}
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all text-[11px] font-black uppercase tracking-widest group"
            >
              <svg className="w-5 h-5 text-secondary group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Brochure
            </button>
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 md:flex items-center gap-8 md:gap-12 pt-10 border-t border-white/10">
            {[
              { value: "3", label: "Core Programs" },
              { value: "6+", label: "Languages" },
              { value: "100+", label: "Placements" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-tight max-w-[60px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-white/20 to-transparent z-30" />
    </div>
  );
}