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
      <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Newline Building, Narok, Kenya",
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2..." />
      </svg>
    ),
    label: "+254 723 104 680",
    href: "tel:+254723104680",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white relative overflow-hidden">

      {/* TOP BAR */}
      <div className="h-1 bg-tribar" />

      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-grid-pattern" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 relative">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-12 gap-10 mb-14">

          {/* BRAND */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                <span className="text-primary font-black">IFL</span>
              </div>
              <div>
                <p className="font-black text-white">International Institute</p>
                <p className="text-xs text-neutral-300">
                  Foreign Languages & Hospitality
                </p>
              </div>
            </Link>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm mb-6">
              Empowering students with global language skills and hospitality expertise.
            </p>

            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-2">
            <h3 className="text-accent text-sm font-black uppercase mb-5 tracking-eyebrow">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-neutral-300 hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="md:col-span-3">
            <h3 className="text-accent text-sm font-black uppercase mb-5 tracking-eyebrow">
              Programs
            </h3>
            <ul className="flex flex-col gap-2">
              {programs.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-neutral-300 hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-3">
            <h3 className="text-accent text-sm font-black uppercase mb-5 tracking-eyebrow">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 text-neutral-300 text-sm">
              {contactItems.map(({ icon, label, href }) => (
                <li key={label} className="flex gap-3">
                  <span className="text-accent">{icon}</span>
                  {href ? (
                    <a href={href} className="hover:text-white">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="border-t border-white/20 pt-10 mb-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-black text-lg text-white">Stay Updated</h3>
              <p className="text-sm text-neutral-300">
                Get updates on programs and opportunities.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-neutral-400 focus:outline-none focus:border-accent"
              />
              <button className="btn btn-secondary px-6 font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} International Institute. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}