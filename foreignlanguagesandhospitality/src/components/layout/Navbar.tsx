"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Student Voices", href: "/student-voices" }, // Added
  { label: "Careers", href: "/career-opportunities" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-primary/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5" 
          : "bg-primary py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg transform group-hover:-rotate-3 transition-transform">
            <span className="text-primary font-black text-base tracking-tighter uppercase">IFL</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-base text-white leading-none tracking-tight">International Institute</span>
            <span className="text-accent text-[9px] font-black uppercase tracking-[0.2em] mt-1">Languages & Hospitality</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-white/10 mx-4" />

          {/* Core CTA remains prominent */}
          <Link
            href="/admissions"
            className="bg-accent text-primary px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-accent transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-primary-dark/98 backdrop-blur-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          mobileOpen ? 'max-h-[100vh] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 py-12 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              onClick={() => setMobileOpen(false)}
              className="text-xl font-black text-white/90 hover:text-accent transition-colors flex items-center justify-between group"
            >
              {link.label}
              <div className="w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
          
          <Link 
            href="/admissions" 
            onClick={() => setMobileOpen(false)}
            className="mt-6 bg-accent text-primary py-5 rounded-2xl text-center font-black uppercase tracking-widest text-sm shadow-2xl active:scale-95"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}