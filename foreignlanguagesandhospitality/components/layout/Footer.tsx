import Link from "next/link";

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
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Newline Building, Narok, Kenya",
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "+254 723 104 680",
    href: "tel:+254723104680",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "+254 705 704 554",
    href: "tel:+254705704554",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
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
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white relative overflow-hidden">
      {/* Tribar top */}
      <div className="h-1 bg-tribar" />

      {/* Faint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative rings */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full border-12 border-white/3 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-8 border-accent/6 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative">

        {/* ── Main grid ── */}
        <div className="grid md:grid-cols-12 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 group mb-6 w-fit">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <span className="text-primary font-black text-sm">IFL</span>
              </div>
              <div className="leading-tight">
                <p className="font-black text-base">International Institute</p>
                <p className="text-xs text-white/60 mt-0.5">Foreign Languages & Hospitality</p>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-xs mb-6">
              Empowering students with the knowledge, language skills, and
              hospitality expertise to build meaningful global careers — from
              Narok to the world.
            </p>

            {/* Gold rule */}
            <div className="w-10 h-1 bg-accent rounded-full mb-6" />

            {/* Socials */}
            <div>
              <p className="text-xs font-bold uppercase tracking-eyebrow text-white/50 mb-3">
                Follow Us
              </p>
              <div className="flex gap-2">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="font-black text-sm uppercase tracking-eyebrow text-accent mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary group-hover:bg-accent transition-colors flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-3">
            <h3 className="font-black text-sm uppercase tracking-eyebrow text-accent mb-5">
              Programs
            </h3>
            <ul className="flex flex-col gap-2">
              {programs.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary group-hover:bg-accent transition-colors flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-black text-sm uppercase tracking-eyebrow text-accent mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              {contactItems.map(({ icon, label, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors duration-200 group"
                    >
                      <span className="text-accent group-hover:text-white transition-colors mt-0.5">
                        {icon}
                      </span>
                      <span className="leading-snug">{label}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-sm text-white/65">
                      <span className="text-accent mt-0.5">{icon}</span>
                      <span className="leading-snug">{label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Newsletter ── */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-black text-lg text-white mb-1">Stay Updated</h3>
              <p className="text-sm text-white/60">
                Subscribe for the latest program updates, success stories, and campus news.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent focus:bg-white/15 transition-all duration-200"
              />
              <button className="btn btn-secondary px-6 font-bold flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} International Institute of Foreign Languages & Hospitality Management. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>

          <p className="text-xs text-white/40">
            Built for Kenya&apos;s Future Global Leaders
          </p>
        </div>
      </div>
    </footer>
  );
}