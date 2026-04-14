// src/components/layout/Navbar.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary text-3xl font-bold shadow-inner transition-transform group-hover:scale-105">
              IIF
            </div>
            <div className="hidden md:block leading-tight">
              <p className="font-bold text-lg tracking-tight">International Institute</p>
              <p className="text-xs text-white/80 -mt-0.5">Foreign Languages & Hospitality Management</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>

            {/* Programs Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="flex items-center gap-1 hover:text-accent transition-colors focus:outline-none"
              >
                Programs 
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block pt-4">
                <div className="bg-white text-neutral-800 rounded-2xl shadow-2xl py-6 px-8 w-80">
                  <div className="mb-4">
                    <p className="font-semibold text-primary mb-3">Language Courses</p>
                    <Link href="/programs" className="block py-2 hover:text-secondary transition-colors">
                      All Language Courses
                    </Link>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-3">Hospitality Management</p>
                    <Link href="/programs/hospitality" className="block py-2 hover:text-secondary transition-colors">
                      Hospitality Management Programs
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/career-opportunities" className="hover:text-accent transition-colors">Careers</Link>
            <Link href="/student-voices" className="hover:text-accent transition-colors">Student Voices</Link>
            <Link href="/news" className="hover:text-accent transition-colors">News</Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/admissions" 
              className="btn btn-secondary text-sm font-medium px-8 py-2.5"
            >
              Apply Now
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-sm font-medium px-8 py-2.5"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-3xl p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-8 border-t border-white/20 bg-primary">
            <div className="flex flex-col gap-6 text-lg px-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="py-2">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="py-2">About Us</Link>

              {/* Mobile Programs Dropdown */}
              <div>
                <button 
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                  className="flex items-center justify-between w-full py-2"
                >
                  Programs
                  <ChevronDown className={`w-5 h-5 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProgramsOpen && (
                  <div className="pl-6 mt-2 space-y-4 text-base">
                    <Link href="/programs" onClick={() => setIsOpen(false)} className="block py-1">All Language Courses</Link>
                    <Link href="/programs/hospitality" onClick={() => setIsOpen(false)} className="block py-1">Hospitality Management</Link>
                  </div>
                )}
              </div>

              <Link href="/career-opportunities" onClick={() => setIsOpen(false)} className="py-2">Careers</Link>
              <Link href="/student-voices" onClick={() => setIsOpen(false)} className="py-2">Student Voices</Link>
              <Link href="/news" onClick={() => setIsOpen(false)} className="py-2">News</Link>

              <div className="pt-6 border-t border-white/20 flex flex-col gap-4">
                <Link 
                  href="/admissions" 
                  onClick={() => setIsOpen(false)}
                  className="btn btn-secondary text-center"
                >
                  Apply Now
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}