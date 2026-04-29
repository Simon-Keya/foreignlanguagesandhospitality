"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Student Voices", href: "/student-voices" },
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
          ? "bg-[#0A2540]/95 backdrop-blur-xl py-2 shadow-2xl border-b border-white/10" 
          : "bg-[#0A2540] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Identity - Sharp Edges & Full Name */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white overflow-hidden shadow-xl transition-transform group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="International Institute Logo" 
              fill
              className="object-cover" 
              priority
            />
          </div>
          
          <div className="flex flex-col border-l border-white/20 pl-4">
            <span className="font-black text-[10px] md:text-sm text-white leading-tight uppercase tracking-tight max-w-[180px] md:max-w-none">
              International Institute of Foreign <br className="hidden md:block" /> Languages & Hospitality Management
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Removed Yellow, Added Secondary Red */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-white/10 mx-3" />

          <Link
            href="/admissions"
            className="bg-secondary text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95"
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
            <span className={`h-0.5 w-full bg-secondary transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown - Matching Navy Theme */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#0A2540] border-t border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
          mobileOpen ? 'max-h-[100vh] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 py-10 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              onClick={() => setMobileOpen(false)}
              className="text-lg font-black text-white/90 hover:text-secondary transition-colors flex items-center justify-between group"
            >
              {link.label}
              <div className="w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
          
          <Link 
            href="/admissions" 
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-secondary text-white py-4 rounded-2xl text-center font-black uppercase tracking-widest text-sm shadow-xl"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}