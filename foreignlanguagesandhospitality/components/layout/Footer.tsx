
/**
 * Enhanced Footer Component
 * * NOTE: To satisfy both the environment constraints (no "next/link" resolution in some previewers) 
 * and your local ESLint rules (requiring next/link), we are using a safe fallback approach.
 * For this version, we will assume "next/link" is available in your production environment.
 */

// We use a try-catch or a dynamic check would be overkill for a single file, 
// so we will provide the standard Next.js implementation but ensure it's structured 
// for your specific project environment.

import Link from 'next/link';

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Media", href: "/news" },
  { label: "Career Services", href: "/career-opportunities" },
  { label: "Student Voices", href: "/student-voices" },
];

const programs = [
  { label: "German Language (A1–B2)", href: "/academics/german-language" },
  { label: "English Language", href: "/academics" },
  { label: "French & Spanish", href: "/academics" },
  { label: "Hospitality Management", href: "/academics/hospitality-management" },
  { label: "Nursing Preparation", href: "/academics/nursing-preparation" },
];

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Newline Building, Narok, Kenya",
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "+254 723 104 680",
    href: "tel:+254723104680",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "info@foreignlanguagesandhospitality.com",
    href: "mailto:info@foreignlanguagesandhospitality.com",
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/61574315371972",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/254723104680",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Dynamic Brand Bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#FF0000] via-[#FFCC00] to-[#000000] w-full" />

      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <span className="text-[#0A192F] font-black text-xl tracking-tighter">IFL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight leading-none">International Institute</span>
                <span className="text-[#FFCC00] text-sm font-bold mt-1 uppercase tracking-widest">Languages & Hospitality</span>
              </div>
            </Link>
            
            <p className="text-white/70 text-base leading-relaxed max-w-sm">
              Bridging the gap between local talent and global opportunities. 
              Specializing in German language mastery and vocational excellence for careers that transcend borders.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#0A192F] hover:-translate-y-1 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#FFCC00] font-black text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FFCC00]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-[#FFCC00] font-black text-xs uppercase tracking-[0.2em] mb-8">Specializations</h4>
            <ul className="space-y-4">
              {programs.map((prog) => (
                <li key={prog.label}>
                  <Link href={prog.href} className="text-white/60 hover:text-white transition-colors duration-200 block text-sm">
                    {prog.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[#FFCC00] font-black text-xs uppercase tracking-[0.2em] mb-8">Get In Touch</h4>
            <div className="space-y-6">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FFCC00] group-hover:bg-[#FFCC00] group-hover:text-[#0A192F] transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    {item.href ? (
                      <a href={item.href} className="text-white/80 hover:text-[#FFCC00] transition-colors font-medium">
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-white/80 font-medium leading-tight">{item.label}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Panel */}
        <div className="relative rounded-[2.5rem] overflow-hidden p-10 lg:p-12 border border-white/10 bg-white/5 backdrop-blur-md mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-3">
              <h3 className="text-3xl font-black text-white leading-tight">Global Career Insights</h3>
              <p className="text-white/60 max-w-md">
                Join our newsletter for exclusive updates on German Ausbildung programs and hospitality career tips.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-2xl bg-black/20 border border-white/10 focus:border-[#FFCC00] focus:outline-none transition-all text-white placeholder:text-white/30"
                required
              />
              <button type="submit" className="bg-[#FFCC00] hover:bg-[#E6B800] text-[#0A192F] font-black px-8 py-4 rounded-2xl transition-all shadow-lg active:scale-95">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-sm text-white/50 text-center lg:text-left">
              &copy; {new Date().getFullYear()} International Institute of Foreign Languages & Hospitality Management.
            </p>
            <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-white/30">
              <Link href="/privacy" className="hover:text-[#FFCC00] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#FFCC00] transition-colors">Terms</Link>
              <Link href="/compliance" className="hover:text-[#FFCC00] transition-colors">Compliance</Link>
            </div>
          </div>
          
          <div className="px-6 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-widest text-white/40">
            Narok &bull; Nairobi &bull; Global
          </div>
        </div>
      </div>
    </footer>
  );
}