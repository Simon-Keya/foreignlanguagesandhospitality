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
  // Lighter Navy Shade: Refined and professional
  const brandNavy = "bg-[#112D4E]";

  return (
    <footer className={`${brandNavy} text-white pt-20 pb-10 relative overflow-hidden`}>
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info - Sizable & Aesthetic */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-xl transform transition-transform group-hover:-rotate-3">
                <span className="text-[#112D4E] font-black text-xl tracking-tighter">IFL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight leading-none">International Institute</span>
                <span className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.25em] mt-1.5">Global Standards • Local Heart</span>
              </div>
            </Link>
            <p className="text-white/60 text-base leading-relaxed max-w-md font-light">
              Empowering the next generation of global professionals through linguistic mastery and specialized vocational training.
            </p>
            <div className="flex gap-3">
               {['FB', 'WA', 'IG', 'LI'].map((s) => (
                 <div key={s} className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[9px] font-black hover:bg-yellow-400 hover:text-[#112D4E] transition-all cursor-pointer">
                    {s}
                 </div>
               ))}
            </div>
          </div>

          {/* Links Grid - preserved original content */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">University</h4>
              <ul className="space-y-3">
                {footerNav.navigation.map((n) => (
                  <li key={n.name}>
                    <Link href={n.href} className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Curriculum</h4>
              <ul className="space-y-3">
                {footerNav.specializations.map((s) => (
                  <li key={s.name}>
                    <Link href={s.href} className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-full md:col-span-1">
              <h4 className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Headquarters</h4>
              <address className="not-italic text-sm text-white/50 space-y-3 leading-relaxed">
                <p>Newline Building, Narok,<br/>Kenya</p>
                <p className="text-white font-bold">+254 723 104 680</p>
                <p>info@ifl.ac.ke</p>
              </address>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Refined Proportions */}
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-center lg:text-left">
              <h3 className="text-xl font-black mb-1.5">Subscribe to Global Career News</h3>
              <p className="text-white/50 text-sm">Get the latest on German Ausbildung and international opportunities.</p>
            </div>
            <form className="flex w-full lg:w-auto gap-2">
              <input 
                type="email" 
                placeholder="university@email.com" 
                className="bg-black/20 border border-white/10 px-5 py-3 rounded-xl flex-1 lg:w-72 text-sm outline-none focus:border-yellow-400 transition-colors"
              />
              <button className="bg-yellow-400 text-[#112D4E] px-7 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} International Institute of Foreign Languages. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
             <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}