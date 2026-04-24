const focusAreas = ["Language Training", "Hospitality Education", "Career Preparation"];
const stats = [
  { value: "3", label: "Core Programs" },
  { value: "2", label: "Countries" },
  { value: "100+", label: "Success Stories" },
];

export default function FounderBio() {
  return (
    <section id="founder" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />
      <div className="absolute left-0 top-0 bottom-0 w-5/12 hidden lg:block bg-navy-gradient" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT - Quote & Professional Profile */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-neutral-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[6rem]" />
              
              <div className="text-8xl font-serif text-accent opacity-40 leading-none mb-4">&ldquo;</div>
              <p className="text-2xl font-medium italic text-primary leading-snug mb-10">
                Language skills can open doors to new countries, cultures, careers, and a future once thought impossible.
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-neutral-100">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-xl">SL</div>
                <div>
                  <p className="font-black text-primary text-lg">Soila Lasoi</p>
                  <p className="text-secondary font-bold text-xs uppercase tracking-widest">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-[#F8FAFC] rounded-3xl p-6 text-center border border-neutral-100 shadow-sm">
                  <p className="text-3xl font-black text-secondary">{value}</p>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-tighter mt-1 leading-none">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Narrative Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-secondary rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-secondary">Leadership Perspective</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-[1.15]">
              Bridging Talent with <span className="text-secondary">Global Opportunity</span>
            </h2>

            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-medium">
              <p>
                Welcome! I’m <span className="text-primary font-bold">Soila Lasoi</span>. With a background in International Studies and hands-on professional experience in Kenya and Germany, I established this institute to bridge the gap between local talent and international opportunity.
              </p>
              <p>
                My experience supporting youth integration in Germany inspired our mission: to help African youth access safe, legal, and meaningful pathways abroad through education.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {focusAreas.map((area) => (
                  <span key={area} className="px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30 text-primary font-bold text-xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 p-8 border-l-4 border-accent bg-[#F8FAFC] rounded-r-3xl">
              <p className="font-black text-2xl text-primary">Soila Lasoi</p>
              <p className="text-neutral-500 font-bold">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}