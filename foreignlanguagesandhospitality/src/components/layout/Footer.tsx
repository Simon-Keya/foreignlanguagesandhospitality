"use client";

import Image from "next/image";
import Link from "next/link";

const footerNav = {
  navigation: [
    { name: "About the Institute", href: "/about" },
    { name: "Academic Programs", href: "/academics" },
    { name: "Admissions Office", href: "/admissions" },
    { name: "Student Life", href: "/student-voices" },
    { name: "Career Services", href: "/career-opportunities" },
  ],
  specializations: [
    { name: "German (A1–B2)", href: "/academics/german-language" },
    { name: "Hospitality Management", href: "/academics/hospitality-management" },
    { name: "Nursing Career Prep", href: "/academics/nursing-preparation" },
    { name: "English Proficiency", href: "/academics" },
  ],
};

const socials = [
  { 
    label: "Facebook", 
    href: "https://www.facebook.com/61574315371972",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  },
  { 
    label: "WhatsApp", 
    href: "https://wa.me/254723104680",
    icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  },
  { 
    label: "Instagram", 
    href: "#",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    )
  },
  { 
    label: "LinkedIn", 
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    )
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-5 group w-fit">
              <div className="relative w-16 h-16 bg-white shadow-2xl transition-transform group-hover:scale-105">
                <Image src="/logo.png" alt="IFL Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl md:text-2xl uppercase tracking-tight leading-none text-white">
                  International Institute
                </span>
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.25em] mt-2">
                  Foreign Languages & Hospitality
                </span>
              </div>
            </Link>

            <p className="text-white/80 text-lg leading-relaxed max-w-md font-medium">
              Transforming futures in Narok through world-class language training
              and hospitality education focused on German standards.
            </p>

            {/* REAL ICONS SOCIALS */}
            <div className="flex gap-4">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary hover:-translate-y-1 transition-all duration-300 group"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 fill-none stroke-current group-hover:text-white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-secondary text-[12px] font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-2 inline-block">
                Navigation
              </h4>
              <ul className="space-y-4">
                {footerNav.navigation.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href} className="text-white/80 hover:text-accent transition-colors text-sm font-bold block">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-secondary text-[12px] font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-2 inline-block">
                Specializations
              </h4>
              <ul className="space-y-4">
                {footerNav.specializations.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href} className="text-white/80 hover:text-accent transition-colors text-sm font-bold block">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-full md:col-span-1">
              <h4 className="text-secondary text-[12px] font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-2 inline-block">
                Contact
              </h4>
              <address className="not-italic text-sm space-y-4">
                <p className="text-white font-bold leading-relaxed">
                  Newline Building, Narok Road,<br />
                  Narok, Kenya
                </p>

                <div className="space-y-3">
                  <a href="tel:+254723104680" className="block text-accent font-black text-xl hover:text-white transition-all">
                    +254 723 104 680
                  </a>
                  <a href="tel:+254705704554" className="block text-accent font-black text-xl hover:text-white transition-all">
                    +254 705 704 554
                  </a>
                </div>

                <a 
                  href="mailto:info@foreignlanguagesandhospitality.com" 
                  className="block pt-2 text-white font-bold hover:text-accent transition-colors break-words text-sm border-t border-white/5 mt-4"
                >
                  info@foreignlanguagesandhospitality.com
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] max-w-md">
            © {new Date().getFullYear()} International Institute of Foreign Languages & Hospitality Management.
          </p>
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-widest">
            <Link href="/privacy" className="text-white/50 hover:text-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/50 hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}