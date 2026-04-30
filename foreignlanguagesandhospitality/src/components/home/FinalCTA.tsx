"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-20 bg-[#0A2540] text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative Brand Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Eyebrow */}
        <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.4em] block mb-6">
          Future-Proof Your Career
        </span>

        {/* Headline - Standardized size */}
        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-[1.15] tracking-tight">
          Enroll Now and Transform <br className="hidden md:block" />
          Your <span className="text-white underline decoration-secondary decoration-4 underline-offset-8">Global Future</span>
        </h2>

        {/* Subheadline - Standardized size */}
        <p className="text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join a community of successful graduates working across Germany, Austria, and Switzerland. 
          Start your journey with world-class training today.
        </p>

        {/* Action Area: Subscriber + CTAs */}
        <div className="flex flex-col items-center gap-10">
          
          {/* Subscription Box */}
          <div className="w-full max-w-md">
            {status === "success" ? (
              <div className="bg-white/5 border border-secondary/30 p-4 rounded-xl animate-in fade-in zoom-in duration-300">
                <p className="text-secondary font-bold text-sm uppercase tracking-wider">✓ Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative group">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for updates"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl outline-none focus:border-secondary transition-all text-sm font-medium placeholder:text-white/20"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-white text-[#0A2540] rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all disabled:opacity-50"
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
            )}
            <p className="text-[10px] text-white/30 mt-3 uppercase tracking-widest font-bold">Get program dates & scholarship alerts</p>
          </div>

          <div className="w-full h-px bg-white/10 max-w-xs" />

          {/* Primary Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="/admissions"
              className="px-10 py-4 bg-secondary text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-xl shadow-xl hover:brightness-110 hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              Apply Now
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="/contact"
              className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-xl backdrop-blur-sm transition-all active:scale-95 text-center"
            >
              Request Information
            </a>
          </div>
        </div>
      </div>

      {/* Brand Tri-Bar Bottom - Subtle touch */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-white/20 to-transparent opacity-50" />
    </section>
  );
}