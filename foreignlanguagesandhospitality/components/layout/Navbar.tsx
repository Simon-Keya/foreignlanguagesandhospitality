"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const programsDropdown = [
  {
    group: "Language Training",
    links: [
      { label: "All Language Courses", href: "/academics" },
      { label: "German Language (A1–B2)", href: "/academics/german-language" },
      { label: "French & Spanish", href: "/academics" },
    ],
  },
  {
    group: "Vocational Excellence",
    links: [
      { label: "Hospitality Management", href: "/academics/hospitality-management" },
      { label: "Nursing Preparation", href: "/academics/nursing-preparation" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Institutional Top Bar */}
      <div className="h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-black sticky top-0 z-[70] w-full" />

      <nav
        className={`sticky top-1.5 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#0A192F]/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10" 
            : "bg-[#0A192F] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Identity */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-lg">
              <span className="text-[#0A192F] font-black text-lg tracking-tighter">IFL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg text-white leading-none tracking-tight">International Institute</span>
              <span className="text-yellow-400 text-[10px] font-black mt-1 uppercase tracking-[0.2em]">Languages & Hospitality</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-white/10 mx-4" />

            <Link
              href="/admissions"
              className="bg-yellow-400 text-[#0A192F] px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white transition-colors shadow-lg shadow-yellow-400/10"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0A192F] border-t border-white/5 transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-[100vh] border-b' : 'max-h-0'}`}>
          <div className="p-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-black text-white/80 hover:text-yellow-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/admissions" 
              className="bg-yellow-400 text-[#0A192F] p-5 rounded-2xl text-center font-black uppercase tracking-widest"
            >
              Start Application
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}