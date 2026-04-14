// src/components/about/FacultyGrid.tsx

const faculty = [
    {
      name: "Kennedy Sankale",
      title: "Institute Administrator",
      description: "Supporting our students in their educational journey",
      flag: "",
    },
    {
      name: "Katherine Müller",
      title: "Career Consultant",
      description: "Bachelor's in Social Sciences and IT. Helping students with CV preparation and consulting on careers in Germany 🇩🇪",
      flag: "🇩🇪",
    },
    {
      name: "Sennah Chepkemboi",
      title: "German Language Teacher",
      description: "Bachelor's Degree in Education. Specializing in German Language instruction",
      flag: "",
    },
    {
      name: "Sarah Jebet Janssen",
      title: "German Language Teacher",
      description: "Enthusiastic online German teacher with background in Hotel and Hospitality Management. Over 5 years experience in international service environments.",
      flag: "",
    },
    {
      name: "Alex Sikawa",
      title: "Head of Media and Marketing",
      description: "Expert in digital marketing strategies and brand development. Specializes in creating engaging content and social media campaigns.",
      flag: "",
    },
  ];
  
  export default function FacultyGrid() {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map((member, index) => (
          <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-all border border-base-300">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl">
                  👨‍🏫
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium">{member.title}</p>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">{member.description}</p>
              {member.flag && <p className="text-2xl mt-4">{member.flag}</p>}
            </div>
          </div>
        ))}
      </div>
    );
  }