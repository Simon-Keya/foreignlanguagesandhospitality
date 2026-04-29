import Link from 'next/link';

const footerNav = {
  navigation: [
    { name: "About the Institute", href: "/about" },
    { name: "Academic Programs", href: "/academics" },
    { name: "Admissions Office", href: "/admissions" },
    { name: "Student Life", href: "/student-voices" },
    { name: "Career Services", href: "/career-opportunities" },
  ],
  specializations: [
    { name: "German (A1-B2)", href: "/academics/german-language" },
    { name: "Hospitality Management", href: "/academics/hospitality-management" },
    { name: "Nursing Career Prep", href: "/academics/nursing-preparation" },
    { name: "English Proficiency", href: "/academics" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white pt-24 pb-12 relative overflow-hidden">
      {/* Soft Glow Ambient Background - No hard lines */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-105">
                <span className="text-primary font-black text-2xl tracking-tighter">IFL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-tight leading-none uppercase">International Institute</span>
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mt-2">Empowering Local & Global Careers</span>
              </div>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-md font-medium">
              Transforming futures in Narok through world-class language training and hospitality education focused on German standards.
            </p>
            <div className="flex gap-4">
               {['FB', 'WA', 'IG', 'LI'].map((s) => (
                 <div key={s} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black hover:bg-accent hover:text-primary transition-all cursor-pointer">
                    {s}
                 </div>
               ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-accent text-[11px] font-black uppercase tracking-[0.25em] mb-8">Navigation</h4>
              <ul className="space-y-4">
                {footerNav.navigation.map((n) => (
                  <li key={n.name}>
                    <Link href={n.href} className="text-white/50 hover:text-accent transition-colors text-sm font-bold">
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-accent text-[11px] font-black uppercase tracking-[0.25em] mb-8">Specializations</h4>
              <ul className="space-y-4">
                {footerNav.specializations.map((s) => (
                  <li key={s.name}>
                    <Link href={s.href} className="text-white/50 hover:text-accent transition-colors text-sm font-bold">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-full md:col-span-1">
              <h4 className="text-accent text-[11px] font-black uppercase tracking-[0.25em] mb-8">Contact</h4>
              <address className="not-italic text-sm text-white/50 space-y-4 leading-relaxed">
                <p className="font-bold text-white">Newline Building, Narok Road,<br/>Narok, Kenya</p>
                <p className="text-secondary font-black text-lg">+254 723 104 680</p>
                <p className="font-bold hover:text-white transition-colors">info@ifl.ac.ke</p>
              </address>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-primary-dark/30 border border-white/5 rounded-[2.5rem] p-10 lg:p-14 mb-20 shadow-inner">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-md text-center lg:text-left">
              <h3 className="text-2xl font-black mb-3">Stay Updated</h3>
              <p className="text-white/50 text-sm font-medium">Join our community to receive updates on intakes, German visa guides, and local career news.</p>
            </div>
            <form className="flex w-full lg:w-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-black/20 border border-white/10 px-6 py-4 rounded-2xl flex-1 lg:w-80 text-sm outline-none focus:border-accent transition-all font-medium"
              />
              <button className="bg-accent text-primary px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95">
                Join Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} International Institute of Foreign Languages & Hospitality Management.
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-white/30">
             <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
             <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}