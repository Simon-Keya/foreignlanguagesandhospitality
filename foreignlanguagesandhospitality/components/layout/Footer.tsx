// src/components/common/Footer.tsx

import Link from 'next/link';

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Media", href: "/news" },
  { label: "Career Services", href: "/career-opportunities" },
  { label: "Student Voices", href: "/student-voices" },
];

const programs = [
  { label: "German Language (A1–B2)", href: "/programs" },
  { label: "English Language", href: "/programs" },
  { label: "French & Spanish", href: "/programs" },
  { label: "Hospitality Management", href: "/programs/hospitality" },
  { label: "Nursing Preparation", href: "/career-opportunities" },
];

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Newline Building, Narok, Kenya",
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "+254 723 104 680",
    href: "tel:+254723104680",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "+254 705 704 554",
    href: "tel:+254705704554",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "info@foreignlanguagesandhospitality.com",
    href: "mailto:info@foreignlanguagesandhospitality.com",
  },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/61574315371972", icon: "📘" },
  { label: "Instagram", href: "#", icon: "📷" },
  { label: "WhatsApp", href: "https://wa.me/254723104680", icon: "💬" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary font-black text-xl shadow-inner">
                IIF
              </div>
              <div>
                <p className="font-bold text-lg leading-none">International Institute</p>
                <p className="text-xs text-white/70">Foreign Languages & Hospitality Management</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed max-w-sm">
              Empowering students with knowledge, language skills, and hospitality expertise 
              to build meaningful global careers — from Narok to the world.
            </p>

            <div className="mt-10">
              <p className="uppercase text-xs tracking-widest text-accent/80 mb-3">Follow Us</p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-primary rounded-xl flex items-center justify-center text-xl transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-sm uppercase tracking-widest text-accent mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/70 hover:text-white transition-colors block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-sm uppercase tracking-widest text-accent mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/70 hover:text-white transition-colors block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-sm uppercase tracking-widest text-accent mb-6">Contact Us</h3>
            <ul className="space-y-6 text-sm">
              {contactItems.map(({ icon, label, href }, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-accent mt-0.5">{icon}</span>
                  {href ? (
                    <a href={href} className="text-white/70 hover:text-white transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span className="text-white/70">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 pt-10 pb-8">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-white/60 text-sm mb-4">
              Subscribe for the latest intakes, success stories, and campus news.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 bg-white/10 border border-white/30 rounded-2xl px-5 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
              />
              <button className="btn btn-secondary px-8">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} International Institute of Foreign Languages and Hospitality Management. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}