import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center" />

      {/* Navy overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Subtle dot pattern over overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Tribar bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-tribar" />

      {/* Gold decorative ring */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[48px] border-accent/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border-[32px] border-secondary/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-accent">
              Narok, Kenya · Est. 2024
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Your Gateway to{" "}
            <span className="text-accent">Global</span>{" "}
            Careers
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            World-class language training and hospitality education in the heart
            of Narok. We prepare African youth for safe, legal, and meaningful
            careers in Germany, Austria, Switzerland, and beyond.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/admissions"
              className="btn btn-secondary btn-lg gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Apply Now
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/docs/brochure.pdf"
              target="_blank"
              className="btn btn-lg border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm gap-2 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Brochure
            </Link>
            <Link
              href="/academics"
              className="btn btn-lg border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300"
            >
              Explore Programs
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center gap-6">
            {[
              { value: "3", label: "Core Programs" },
              { value: "6+", label: "Languages Taught" },
              { value: "100+", label: "Students Placed Abroad" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <p className="text-3xl font-black text-accent">{value}</p>
                <p className="text-xs text-white/60 leading-tight max-w-[80px]">{label}</p>
                <div className="w-px h-8 bg-white/20 last:hidden" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}