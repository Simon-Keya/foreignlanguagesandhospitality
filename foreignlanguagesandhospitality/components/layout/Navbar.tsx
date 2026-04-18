"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const programsDropdown = [
  {
    group: "Language Training",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8l6 6" /><path d="M4 14l6-6 2-3" /><path d="M2 5h12" />
        <path d="M7 2h1" /><path d="M22 22l-5-10-5 10" /><path d="M14 18h6" />
      </svg>
    ),
    links: [
      { label: "All Language Courses", href: "/academics" },
      { label: "German Language (A1–B2)", href: "/academics/german-language" },
      { label: "English, French & More", href: "/academics" },
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

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection for shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Tribar top strip */}
      <div className="h-1 bg-tribar sticky top-0 z-[60]" />

      <nav
        className={`bg-primary text-white sticky top-1 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-2xl" : "shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-18">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                <span className="text-primary font-black text-sm leading-none">IFL</span>
              </div>
              <div className="hidden lg:block leading-tight">
                <p className="font-black text-base tracking-tight leading-none">
                  International Institute
                </p>
                <p className="text-xs text-white/65 mt-0.5 font-medium">
                  Foreign Languages & Hospitality
                </p>
              </div>
            </Link>

            {/* ── Desktop nav links ── */}
            <div className="hidden md:flex items-center gap-1 text-sm font-medium">
              {navLinks.slice(0, 2).map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-accent transition-all duration-200"
                >
                  {label}
                </Link>
              ))}

              {/* Programs dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setProgramsOpen((o) => !o)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-accent transition-all duration-200"
                >
                  Programs
                  <ChevronIcon open={programsOpen} />
                </button>

                {programsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white text-neutral-800 rounded-2xl shadow-2xl border border-base-300 overflow-hidden z-50 animate-scale-in">
                    {/* Gold top bar */}
                    <div className="h-1 bg-tribar" />

                    <div className="p-5 flex flex-col gap-5">
                      {programsDropdown.map(({ group, icon, links }) => (
                        <div key={group}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary">{icon}</span>
                            <p className="text-xs font-black uppercase tracking-eyebrow text-primary">
                              {group}
                            </p>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            {links.map(({ label, href }) => (
                              <Link
                                key={label}
                                href={href}
                                onClick={() => setProgramsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-neutral-600 hover:bg-primary hover:text-white transition-all duration-200 group"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 group-hover:bg-accent transition-colors" />
                                {label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="px-5 pb-4">
                      <Link
                        href="/academics"
                        onClick={() => setProgramsOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-white text-sm font-bold py-2.5 rounded-xl hover:bg-primary-dark transition-colors duration-200"
                      >
                        View All Programs
                        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(3).map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-accent transition-all duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* ── Desktop CTAs ── */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Link
                href="/admissions"
                className="btn btn-secondary btn-sm px-6 font-bold shadow-glow hover:scale-105 transition-transform duration-200"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="btn btn-sm border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-200 px-6"
              >
                Contact
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-smooth ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/15 bg-primary-dark px-6 py-6 flex flex-col gap-1">

            {navLinks.slice(0, 2).map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10 hover:text-accent transition-all duration-200"
              >
                {label}
              </Link>
            ))}

            {/* Mobile programs accordion */}
            <div>
              <button
                onClick={() => setMobileProgramsOpen((o) => !o)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10 transition-all duration-200"
              >
                Programs
                <ChevronIcon open={mobileProgramsOpen} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-smooth ${
                  mobileProgramsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mx-4 mb-2 mt-1 bg-white/5 rounded-xl overflow-hidden">
                  {programsDropdown.map(({ group, links }) => (
                    <div key={group} className="px-4 py-3 border-b border-white/10 last:border-0">
                      <p className="text-xs font-black uppercase tracking-eyebrow text-accent mb-2">
                        {group}
                      </p>
                      {links.map(({ label, href }) => (
                        <Link
                          key={label}
                          href={href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 py-1.5 text-sm text-white/75 hover:text-white transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(3).map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10 hover:text-accent transition-all duration-200"
              >
                {label}
              </Link>
            ))}

            {/* Mobile CTAs */}
            <div className="mt-4 pt-4 border-t border-white/15 flex flex-col gap-3">
              <Link
                href="/admissions"
                onClick={() => setMobileOpen(false)}
                className="btn btn-secondary w-full font-bold"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn w-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}