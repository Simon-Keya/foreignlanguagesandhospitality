import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* 1. THE IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-bg scale-105" />
        
        {/* THE SHADING: 
            Gradually fades from solid Navy (left) to 0% transparency (right).
            This ensures the image is 100% visible on the right half.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          
          {/* Eyebrow - Using Secondary Red from your config */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-secondary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">
              Narok, Kenya · Est. 2024
            </span>
          </div>

          {/* Headline - Using Accent Yellow highlight */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Your Gateway to <br />
            <span className="text-accent">Global</span> Careers
          </h1>

          {/* Subheadline - Sized for readability */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl font-medium">
            World-class language training and hospitality education. We prepare 
            African youth for safe, legal, and meaningful careers in 
            Germany, Austria, and Switzerland.
          </p>

          {/* CTAs - Using your full theme palette */}
          <div className="flex flex-wrap gap-5 mb-16">
            <Link
              href="/admissions"
              className="bg-accent text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-white transition-all duration-300 flex items-center gap-3 hover:-translate-y-1"
            >
              Apply Now
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>

            <Link
              href="/academics"
              className="px-10 py-5 rounded-2xl border-2 border-white/10 bg-white/5 text-white font-black text-xs uppercase tracking-widest hover:bg-secondary hover:border-secondary backdrop-blur-md transition-all duration-300 flex items-center gap-2"
            >
              Explore Programs
            </Link>
          </div>

          {/* Trust bar - Balanced Sizing */}
          <div className="flex flex-wrap items-center gap-12 pt-12 border-t border-white/10">
            {[
              { value: "3", label: "Core Programs" },
              { value: "6+", label: "Languages" },
              { value: "100+", label: "Placements" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <p className="text-3xl font-black text-accent">{value}</p>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-tight max-w-[70px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Signature Tribar - Matching your theme config gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-tribar z-30" />
    </div>
  );
}