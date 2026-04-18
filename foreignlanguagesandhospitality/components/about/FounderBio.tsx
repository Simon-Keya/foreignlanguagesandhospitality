const focusAreas = [
  "Language Training",
  "Hospitality Education",
  "Nursing Career Preparation",
];

const stats = [
  { value: "3", label: "Core Programs" },
  { value: "2", label: "Countries" },
  { value: "100+", label: "Students Supported" },
];

export default function FounderBio() {
  return (
    <section id="founder" className="py-24 relative overflow-hidden" style={{ background: "#F1F5F9" }}>
      {/* Tribar top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tribar" />

      {/* Navy decorative slab — left third, desktop only */}
      <div className="absolute left-0 top-0 bottom-0 w-5/12 hidden lg:block bg-navy-gradient" />

      {/* Faint grid on navy slab */}
      <div
        className="absolute left-0 top-0 bottom-0 w-5/12 hidden lg:block pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT — Quote card + stats */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Quote card */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-base-300 relative overflow-hidden">
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-[5rem] rounded-tr-3xl" />

              {/* Large quotation mark */}
              <div
                className="text-9xl leading-none font-display select-none mb-1 text-accent"
                style={{ fontFamily: "Georgia, serif", lineHeight: 0.8 }}
              >
                &ldquo;
              </div>

              <p className="text-xl leading-relaxed italic text-neutral-700 mb-8 relative z-10">
                Language skills can open doors to new countries, cultures, careers,
                and a future you never thought possible.
              </p>

              {/* Gold rule */}
              <div className="w-12 h-1 bg-accent rounded-full mb-6" />

              {/* Founder identity */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                  SL
                </div>
                <div>
                  <p className="font-bold text-primary text-base">Soila Lasoi</p>
                  <p className="text-sm text-neutral-500 font-medium">Founder & CEO</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-xs text-neutral-400">Kenya</span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-400">Germany</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 shadow-md border border-base-300 text-center group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <p className="text-3xl font-black text-secondary leading-none">{value}</p>
                  <p className="text-xs text-neutral-500 mt-2 font-medium leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Bio content */}
          <div className="lg:col-span-7">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-eyebrow text-secondary">
                Meet the Founder
              </span>
            </div>

            <h2 className="text-4xl font-black text-primary leading-tight mb-8">
              Bridging Kenyan Talent<br className="hidden sm:block" />
              <span className="text-secondary"> with Global Opportunity</span>
            </h2>

            <div className="flex flex-col gap-5 text-neutral-600 leading-relaxed text-base">
              <p>
                Welcome! I&apos;m{" "}
                <span className="font-semibold text-primary">Soila Lasoi</span>,
                Founder and CEO of the International Institute of Foreign Languages
                and Hospitality Management. With a background in International Studies
                and hands-on professional experience in both Kenya and Germany, I
                established this institute to bridge the gap between local talent
                and international opportunity.
              </p>
              <p>
                While currently working in Germany, I&apos;ve had the privilege of
                working closely with the German government, helping young refugees
                integrate into society — many of whom survived extremely difficult
                journeys across the Sahara Desert and the Mediterranean Sea. I&apos;ve
                supported them in learning the language, applying for education and
                employment, and finding their place in a new world.
              </p>
              <p>
                That experience inspired the mission behind this institute: to help
                African youth — starting here in Kenya — access the right tools,
                training, and guidance to pursue safe, legal, and meaningful
                pathways abroad.
              </p>

              {/* Focus area pills */}
              <div className="flex flex-wrap gap-2 py-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-semibold px-4 py-2 rounded-full border border-accent/40 bg-accent/10 text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <p>
                At the heart of our work is a belief that language skills can open
                doors. Whether you&apos;re preparing to work abroad, study
                internationally, or begin your journey in hospitality or healthcare
                — we&apos;re here to walk that journey with you. Together, we&apos;re
                not just building careers. We&apos;re building futures.
              </p>
            </div>

            {/* Signature block */}
            <div className="mt-10 pl-6 border-l-4 border-accent">
              <p className="font-black text-xl text-primary">Soila Lasoi</p>
              <p className="text-neutral-500 text-sm font-medium mt-0.5">Founder & CEO</p>
              <p className="text-neutral-400 text-xs mt-0.5">
                International Institute of Foreign Languages and Hospitality Management
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}