"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Careers", href: "/career-opportunities" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // NEW COLOR: Lighter Navy (#112D4E)
  const lighterNavy = "bg-[#112D4E]"; 

  return (
    <>
      <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-[#112D4E] sticky top-0 z-[70] w-full" />

      <nav
        className={`sticky top-1 z-50 transition-all duration-300 ${
          scrolled 
            ? `${lighterNavy}/95 backdrop-blur-md py-2 shadow-lg border-b border-white/5` 
            : `${lighterNavy} py-4`
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
              <span className="text-[#112D4E] font-black text-base tracking-tighter">IFL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[15px] text-white leading-tight">International Institute</span>
              <span className="text-yellow-400 text-[9px] font-bold uppercase tracking-widest">Languages & Hospitality</span>
            </div>
          </Link>

          {/* Optimized Link Sizes */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-semibold text-white/80 hover:text-white transition-all"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="h-4 w-px bg-white/10 mx-3" />

            <Link
              href="/admissions"
              className="bg-yellow-400 text-[#112D4E] px-5 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider hover:bg-white transition-all shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile View */}
        <div className={`lg:hidden absolute top-full left-0 w-full ${lighterNavy} border-t border-white/5 transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-screen border-b' : 'max-h-0'}`}>
          <div className="px-6 py-8 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                onClick={() => setMobileOpen(false)}
                className="text-lg font-bold text-white/90"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}