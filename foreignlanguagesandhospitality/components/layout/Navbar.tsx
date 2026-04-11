// src/components/common/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-2xl font-bold">
              IIF
            </div>
            <div className="hidden md:block">
              <p className="font-bold text-lg leading-tight">International Institute</p>
              <p className="text-xs -mt-1 opacity-90">Foreign Languages & Hospitality</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
            <Link href="/programs" className="hover:text-accent transition-colors">Programs</Link>
            <Link href="/career-opportunities" className="hover:text-accent transition-colors">Careers</Link>
            <Link href="/student-voices" className="hover:text-accent transition-colors">Student Voices</Link>
            <Link href="/news" className="hover:text-accent transition-colors">News</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button href="/admissions" variant="secondary" size="md">
              Apply Now
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-3xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-8 border-t border-white/20">
            <div className="flex flex-col gap-6 text-lg">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/programs" onClick={() => setIsOpen(false)}>Programs</Link>
              <Link href="/career-opportunities" onClick={() => setIsOpen(false)}>Career Opportunities</Link>
              <Link href="/student-voices" onClick={() => setIsOpen(false)}>Student Voices</Link>
              <Link href="/news" onClick={() => setIsOpen(false)}>News</Link>
              
              <div className="pt-6 border-t border-white/20 flex flex-col gap-4">
                <Button href="/admissions" variant="secondary">Apply Now</Button>
                <Button href="/contact" variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}