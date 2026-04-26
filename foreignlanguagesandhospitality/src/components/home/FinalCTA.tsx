export default function FinalCTA() {
  return (
    <section className="py-24 bg-navy-gradient text-white relative overflow-hidden">
      {/* Brand Tri-Bar Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-tribar" />
      
      {/* Decorative Brand Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-[0.05] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-accent font-black text-xs uppercase tracking-[0.4em] block mb-6">
          Enroll Now
        </span>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          Enroll Now and <br />Transform Your <span className="text-secondary-light">Future</span>
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join our community of successful graduates and start your journey towards a rewarding career in hospitality and global opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/admissions" 
            className="px-12 py-5 bg-secondary hover:bg-secondary-dark text-white font-black text-lg rounded-2xl shadow-2xl transition-all hover:-translate-y-1"
          >
            Apply Now
          </a>
          <a 
            href="/contact" 
            className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-black text-lg rounded-2xl backdrop-blur-sm transition-all"
          >
            Request Information
          </a>
        </div>
      </div>
    </section>
  );
}