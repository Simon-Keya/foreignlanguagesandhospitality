const faculty = [
  {
    name: "Kennedy Sankale",
    title: "Institute Administrator",
    description: "Supporting our students throughout every step of their educational journey with dedication and care.",
    initials: "KS",
    country: null,
  },
  {
    name: "Katherine Müller",
    title: "Career Consultant",
    description: "Bachelor's in Social Sciences and IT. Specialises in CV preparation and consulting on career pathways into Germany.",
    initials: "KM",
    country: "🇩🇪 Germany",
  },
  {
    name: "Sennah Chepkemboi",
    title: "German Language Teacher",
    description: "Bachelor's Degree in Education. Dedicated specialist in German language instruction for beginners and intermediates.",
    initials: "SC",
    country: null,
  },
  {
    name: "Sarah Jebet Janssen",
    title: "German Language Teacher",
    description: "Online German educator with a background in Hotel & Hospitality Management. Over 5 years in international service environments.",
    initials: "SJ",
    country: null,
  },
  {
    name: "Alex Sikawa",
    title: "Head of Media & Marketing",
    description: "Expert in digital marketing strategy and brand development, creating campaigns that amplify student success stories.",
    initials: "AS",
    country: null,
  },
];

// Cycle through brand-coherent accent combos
const accentPalette = [
  { bg: "#0A2540", text: "#FFFFFF" },
  { bg: "#E30613", text: "#FFFFFF" },
  { bg: "#F2C12C", text: "#0A2540" },
  { bg: "#0A2540", text: "#F2C12C" },
  { bg: "#E30613", text: "#FFFFFF" },
];

export default function FacultyGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {faculty.map((member, index) => {
        const palette = accentPalette[index % accentPalette.length];
        return (
          <div
            key={index}
            className="group relative bg-white rounded-3xl border border-base-200 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col"
          >
            {/* Top colour strip */}
            <div
              className="h-1.5 w-full"
              style={{ background: palette.bg === "#F2C12C" ? "#F2C12C" : palette.bg }}
            />

            <div className="p-7 flex flex-col gap-5 flex-1">
              {/* Avatar + name row */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-base font-black flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ background: palette.bg, color: palette.text }}
                >
                  {member.initials}
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-bold text-lg leading-tight truncate"
                    style={{ color: "#0A2540" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mt-0.5"
                    style={{ color: "#E30613" }}
                  >
                    {member.title}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-base-200" />

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                {member.description}
              </p>

              {/* Country badge */}
              {member.country && (
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-full w-fit mt-auto"
                  style={{ background: "#F2C12C22", color: "#0A2540", border: "1px solid #F2C12C" }}
                >
                  {member.country}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}