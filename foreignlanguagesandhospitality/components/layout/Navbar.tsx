"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface ProgramLink {
  label: string;
  href: string;
}

interface ProgramGroup {
  group: string;
  icon: React.ReactNode;
  links: ProgramLink[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const programsDropdown: ProgramGroup[] = [
  {
    group: "Language Training",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8l6 6" />
        <path d="M4 14l6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="M22 22l-5-10-5 10" />
        <path d="M14 18h6" />
      </svg>
    ),
    links: [
      { label: "All Language Courses", href: "/academics" },
      { label: "German Language (A1–B2)", href: "/academics/german-language" },
    ],
  },
  {
    group: "Hospitality & Healthcare",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    links: [
      { label: "Hospitality Management", href: "/academics/hospitality-management" },
      { label: "Nursing Career Preparation", href: "/academics/nursing-preparation" },
    ],
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* Brand Bar */}
      <div className="h-1.5 bg-linear-to-r from-[#FF0000] via-[#FFCC00] to-[#000000] sticky top-0 z-60 w-full" />

      <nav
        className={`sticky top-1.5 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#0A192F]/95 backdrop-blur-md py-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/5" 
            : "bg-[#0A192F] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group shrink-0">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <span className="text-[#0A192F] font-black text-sm tracking-tighter">IFL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white leading-none tracking-tight">International Institute</span>
                <span className="text-[#FFCC00] text-[10px] font-black mt-1 uppercase tracking-widest opacity-80">Languages & Hospitality</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 text-sm font-bold">
              {navLinks.slice(0, 2).map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="px-4 py-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {label}
                </Link>
              ))}

              {/* Programs Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setProgramsOpen((o) => !o)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    programsOpen ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Programs
                  <ChevronIcon open={programsOpen} />
                </button>

                {programsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-[#0F223D] text-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
                    <div className="h-1 bg-linear-to-r from-[#FFCC00] to-[#FF9900]" />
                    <div className="p-6 grid gap-8">
                      {programsDropdown.map(({ group, icon, links }) => (
                        <div key={group} className="space-y-4">
                          <div className="flex items-center gap-2.5 opacity-40">
                            <span className="text-[#FFCC00]">{icon}</span>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em]">{group}</p>
                          </div>
                          <div className="grid gap-1">
                            {links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setProgramsOpen(false)}
                                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]/20 group-hover:bg-[#FFCC00] transition-colors" />
                                <span className="text-sm font-medium text-white/70 group-hover:text-white">{link.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-white/5 border-t border-white/5">
                      <Link
                        href="/academics"
                        onClick={() => setProgramsOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-[#FFCC00] text-[#0A192F] text-xs font-black uppercase tracking-widest py-3.5 rounded-xl hover:bg-white transition-all duration-300"
                      >
                        Explore All Curriculums
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(3).map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="px-4 py-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/admissions"
                className="px-6 py-3 bg-[#FFCC00] text-[#0A192F] text-xs font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-12 h-12 rounded-2xl bg-white/5 flex flex-col items-center justify-center gap-1.5 border border-white/10"
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#0A192F] border-t border-white/5 overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="p-6 space-y-2 pb-12">
            {navLinks.slice(0, 2).map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setMobileOpen(false)} className="block p-4 text-xl font-black text-white/70 hover:text-[#FFCC00] transition-colors">
                {label}
              </Link>
            ))}
            <div className="py-2">
              <button onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)} className="flex items-center justify-between w-full p-4 text-xl font-black text-white/70">
                Programs <ChevronIcon open={mobileProgramsOpen} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileProgramsOpen ? "max-h-96" : "max-h-0"}`}>
                <div className="mt-2 ml-4 space-y-6 border-l border-white/10 pl-6">
                  {programsDropdown.map(({ group, links }) => (
                    <div key={group} className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#FFCC00] opacity-50">{group}</p>
                      {links.map((link) => (
                        <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block text-sm text-white/60 hover:text-white">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.slice(3).map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setMobileOpen(false)} className="block p-4 text-xl font-black text-white/70 hover:text-[#FFCC00] transition-colors">
                {label}
              </Link>
            ))}
            <div className="pt-8 flex flex-col gap-4">
              <Link href="/admissions" onClick={() => setMobileOpen(false)} className="w-full py-5 bg-[#FFCC00] text-[#0A192F] font-black text-center rounded-2xl">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}