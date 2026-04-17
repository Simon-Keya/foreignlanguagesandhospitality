export default function FounderBio() {
  return (
    <section id="founder" className="py-24 bg-base-200 relative overflow-hidden">
      {/* Decorative navy slab behind quote card */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/3 hidden lg:block"
        style={{ background: "linear-gradient(160deg, #051B2E 0%, #0A2540 100%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left – Quote card (sits over the navy slab) */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-white/60">

              {/* Large quotation mark */}
              <div
                className="text-8xl leading-none font-serif mb-2 select-none"
                style={{ color: "#F2C12C" }}
              >
                &ldquo;
              </div>

              <p className="text-xl leading-relaxed italic text-neutral-700 mb-8">
                Language skills can open doors to new countries, cultures, careers,
                and a future you never thought possible.
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 mt-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold"
                  style={{ background: "#0A2540" }}
                >
                  SL
                </div>
                <div>
                  <p className="font-bold text-base" style={{ color: "#0A2540" }}>
                    Soila Lasoi
                  </p>
                  <p className="text-sm text-neutral-500 font-medium">Founder & CEO</p>
                </div>

                {/* Gold accent line */}
                <div
                  className="ml-auto w-8 h-8 rounded-full flex-shrink-0 opacity-80"
                  style={{ background: "#F2C12C" }}
                />
              </div>
            </div>

            {/* Floating stat cards below quote */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { value: "3", label: "Core Programs" },
                { value: "2", label: "Countries of Operation" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 shadow-md border border-base-200 text-center"
                >
                  <p
                    className="text-3xl font-black"
                    style={{ color: "#E30613" }}
                  >
                    {value}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1 font-medium leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Bio */}
          <div className="lg:col-span-7">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#E30613" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#E30613" }}
              >
                Meet the Founder
              </span>
            </div>

            <h2 className="text-4xl font-black mb-8 leading-tight" style={{ color: "#0A2540" }}>
              Bridging Kenyan Talent<br />
              with Global Opportunity
            </h2>

            <div className="flex flex-col gap-5 text-neutral-600 leading-[1.85]">
              <p>
                Welcome! I&apos;m{" "}
                <span className="font-semibold" style={{ color: "#0A2540" }}>
                  Soila Lasoi
                </span>
                , Founder and CEO of the International Institute of Foreign Languages
                and Hospitality Management. With a background in International Studies
                and hands-on professional experience in both Kenya and Germany, I
                established this institute to bridge the gap between local talent and
                international opportunity.
              </p>
              <p>
                While currently working in Germany, I&apos;ve had the privilege of working
                closely with the German government, helping young refugees integrate into
                society — many of whom survived extremely difficult journeys across the
                Sahara Desert and the Mediterranean Sea. I&apos;ve supported them in learning
                the language, applying for education and employment, and finding their
                place in a new world.
              </p>
              <p>
                That experience inspired the mission behind this institute: to help African
                youth — starting here in Kenya — access the right tools, training, and
                guidance to pursue safe, legal, and meaningful pathways abroad.
              </p>

              {/* Focus areas inline tags */}
              <div className="flex flex-wrap gap-2 my-2">
                {["Language Training", "Hospitality Education", "Nursing Career Preparation"].map(
                  (area) => (
                    <span
                      key={area}
                      className="text-xs font-semibold px-4 py-1.5 rounded-full border"
                      style={{
                        color: "#0A2540",
                        borderColor: "#F2C12C",
                        background: "#F2C12C22",
                      }}
                    >
                      {area}
                    </span>
                  )
                )}
              </div>

              <p>
                At the heart of our work is a belief that language skills can open
                doors. Together, we&apos;re not just building careers — we&apos;re building
                futures.
              </p>
            </div>

            {/* Signature block */}
            <div
              className="mt-10 pl-6 border-l-4"
              style={{ borderColor: "#F2C12C" }}
            >
              <p className="font-black text-xl" style={{ color: "#0A2540" }}>
                Soila Lasoi
              </p>
              <p className="text-neutral-500 text-sm font-medium">Founder & CEO</p>
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