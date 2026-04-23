"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M5 8l6 6" />
        <path d="M4 14l6-6 2-3" />
        <path d="M2 5h12" />
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
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
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
    window.addEventListener("scroll", onScroll);
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* Top strip */}
      <div className="h-1 bg-tribar sticky top-0 z-[60]" />

      <nav
        className={`bg-navy-gradient text-white sticky top-1 z-50 transition-all duration-300 ${
          scrolled ? "shadow-2xl backdrop-blur-md" : "shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md">
                <span className="text-primary font-black text-sm">IFL</span>
              </div>
              <div className="hidden lg:block">
                <p className="font-black text-sm leading-none">
                  International Institute
                </p>
                <p className="text-xs text-white/70">
                  Foreign Languages & Hospitality
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2 text-sm">

              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-accent transition"
                >
                  {link.label}
                </Link>
              ))}

              {/* Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setProgramsOpen(!programsOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-accent transition"
                >
                  Programs <ChevronIcon open={programsOpen} />
                </button>

                {programsOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-80 bg-white text-neutral-800 rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-scale-in">

                    <div className="h-1 bg-tribar" />

                    <div className="p-5 space-y-5">
                      {programsDropdown.map((group) => (
                        <div key={group.group}>
                          <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs uppercase tracking-eyebrow">
                            {group.icon}
                            {group.group}
                          </div>

                          {group.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setProgramsOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-neutral-600 hover:bg-primary hover:text-white transition"
                            >
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="p-4">
                      <Link
                        href="/academics"
                        className="block text-center bg-primary text-white py-2 rounded-xl font-bold hover:bg-primary-dark transition"
                      >
                        View All Programs
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-accent transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex gap-3">
              <Link href="/admissions" className="btn btn-secondary px-6 font-bold shadow-glow">
                Apply Now
              </Link>
              <Link href="/contact" className="btn border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary px-6">
                Contact
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile */}
        {mobileOpen && (
          <div className="md:hidden bg-primary-dark px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}