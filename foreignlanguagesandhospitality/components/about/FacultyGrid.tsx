interface FacultyMember {
  name: string;
  title: string;
  description: string;
  initials: string;
  country?: string;
  countryFlag?: string;
}

const faculty: FacultyMember[] = [
  {
    name: "Kennedy Sankale",
    title: "Institute Administrator",
    description:
      "Oversees day-to-day operations and ensures every student receives the support they need throughout their educational journey.",
    initials: "KS",
  },
  {
    name: "Katherine Müller",
    title: "Career Consultant",
    description:
      "Bachelor's in Social Sciences and IT. Specialises in CV preparation and provides expert guidance on career pathways into Germany.",
    initials: "KM",
    country: "Germany",
    countryFlag: "🇩🇪",
  },
  {
    name: "Sennah Chepkemboi",
    title: "German Language Teacher",
    description:
      "Bachelor's Degree in Education. A dedicated specialist in structured German language instruction across all beginner levels.",
    initials: "SC",
  },
  {
    name: "Sarah Jebet Janssen",
    title: "German Language Teacher",
    description:
      "Online German educator with a Hotel & Hospitality Management background. Over 5 years in international service environments, focusing on practical, supportive lessons.",
    initials: "SJ",
  },
  {
    name: "Alex Sikawa",
    title: "Head of Media & Marketing",
    description:
      "Expert in digital marketing strategy and brand development. Drives the institute's online presence and amplifies student success stories.",
    initials: "AS",
  },
];

// Palette cycles through brand colours
const palettes = [
  { avatarBg: "#0A2540", avatarText: "#FFFFFF", bar: "#0A2540" },
  { avatarBg: "#E30613", avatarText: "#FFFFFF", bar: "#E30613" },
  { avatarBg: "#F2C12C", avatarText: "#0A2540", bar: "#F2C12C" },
  { avatarBg: "#0A2540", avatarText: "#F2C12C", bar: "#F2C12C" },
  { avatarBg: "#E30613", avatarText: "#FFFFFF", bar: "#0A2540" },
];

export default function FacultyGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {faculty.map((member, index) => {
        const p = palettes[index % palettes.length];
        return (
          <div
            key={index}
            className="group relative bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col"
          >
            {/* Top colour bar */}
            <div
              className="h-1.5 w-full rounded-t-3xl flex-shrink-0"
              style={{ background: p.bar }}
            />

            <div className="p-7 flex flex-col gap-5 flex-1">
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-base font-black flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md"
                  style={{ background: p.avatarBg, color: p.avatarText }}
                >
                  {member.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg text-primary leading-tight truncate">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary mt-0.5">
                    {member.title}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-base-300" />

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                {member.description}
              </p>

              {/* Country badge */}
              {member.country && (
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-primary flex items-center gap-1.5"
                  >
                    {member.countryFlag && (
                      <span className="text-sm">{member.countryFlag}</span>
                    )}
                    {member.country} Specialist
                  </span>
                </div>
              )}
            </div>

            {/* Hover bottom accent line */}
            <div
              className="h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full mx-7 mb-4"
              style={{ background: p.bar }}
            />
          </div>
        );
      })}
    </div>
  );
}