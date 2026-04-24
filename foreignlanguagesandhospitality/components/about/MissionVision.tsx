import SectionTitle from "@/components/common/SectionTitle";

const cards = [
  {
    label: "Mission",
    number: "01",
    heading: "Our Mission",
    body: "To equip individuals with practical language skills and hospitality expertise that empower them to thrive in global environments and enhance career opportunities.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    bar: "bg-secondary",
  },
  {
    label: "Vision",
    number: "02",
    heading: "Our Vision",
    body: "To be a renowned institution recognized for excellence in Language Training, shaping globally competent professionals for the international industry.",
    iconBg: "bg-accent/15",
    iconColor: "text-accent-dark",
    bar: "bg-accent",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle title="Mission & Vision" subtitle="The guiding standards of our institution" />

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {cards.map(({ label, number, heading, body, iconBg, iconColor, bar }) => (
            <div key={label} className="group relative bg-white rounded-[3rem] border border-neutral-200 p-12 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className={`absolute top-0 left-0 w-full h-1.5 ${bar}`} />
              <div className="absolute inset-0 bg-navy-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <span className="text-xs font-black text-neutral-300 group-hover:text-white/30 tracking-widest">PHASE {number}</span>
                  <div className={`w-16 h-16 rounded-2xl ${iconBg} group-hover:bg-white/10 flex items-center justify-center ${iconColor} group-hover:text-accent transition-all duration-500`}>
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-3xl font-black text-primary group-hover:text-white mb-6 transition-colors">{heading}</h3>
                <p className="text-lg text-neutral-500 group-hover:text-white/70 leading-relaxed transition-colors mb-10 font-medium">
                  {body}
                </p>
                
                <div className={`h-1 w-12 ${bar} group-hover:bg-accent group-hover:w-full transition-all duration-700`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}