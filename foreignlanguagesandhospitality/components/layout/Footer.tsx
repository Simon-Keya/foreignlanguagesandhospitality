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
    <footer className="bg-[#0A192F] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-[#0A192F] font-black text-2xl tracking-tighter">IFL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-tight">International Institute</span>
                <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.3em]">Global Standards • Local Heart</span>
              </div>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Empowering the next generation of global professionals through linguistic mastery and specialized vocational training.
            </p>
            <div className="flex gap-4">
               {/* Simplified Social Icons Placeholder */}
               {['FB', 'WA', 'IG', 'LI'].map((s) => (
                 <div key={s} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black hover:bg-yellow-400 hover:text-primary transition-all cursor-pointer">
                   {s}
                 </div>
               ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">University</h4>
              <ul className="space-y-4">
                {footerNav.navigation.map((n) => (
                  <li key={n.name}><Link href={n.href} className="text-white/50 hover:text-white transition-colors text-sm font-medium">{n.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Curriculum</h4>
              <ul className="space-y-4">
                {footerNav.specializations.map((s) => (
                  <li key={s.name}><Link href={s.href} className="text-white/50 hover:text-white transition-colors text-sm font-medium">{s.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-span-full md:col-span-1">
              <h4 className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Headquarters</h4>
              <address className="not-italic text-sm text-white/50 space-y-4 leading-relaxed">
                <p>Newline Building, Narok,<br/>Kenya</p>
                <p className="text-white font-bold">+254 723 104 680</p>
                <p>info@ifl.ac.ke</p>
              </address>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-md text-center lg:text-left">
              <h3 className="text-2xl font-black mb-2">Subscribe to Global Career News</h3>
              <p className="text-white/50 text-sm">Get the latest on German Ausbildung and international opportunities.</p>
            </div>
            <form className="flex w-full lg:w-auto gap-2">
              <input 
                type="email" 
                placeholder="university@email.com" 
                className="bg-black/20 border border-white/10 px-6 py-4 rounded-2xl flex-1 lg:w-80 outline-none focus:border-yellow-400 transition-colors"
              />
              <button className="bg-yellow-400 text-[#0A192F] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} International Institute of Foreign Languages. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-white/20">
             <Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-yellow-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}