// src/app/academics/page.tsx
import SectionTitle from '@/components/common/SectionTitle';
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Coffee,
  Globe2,
  GraduationCap,
  ShieldCheck,
  Users
} from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Academics | IIFLHM',
  description: 'Explore our world-class academic programs including Language Courses, Hospitality Management, and German Language proficiency.',
};

const academicPrograms = [
  {
    title: "Language Courses",
    subtitle: "Global Communication",
    icon: <Globe2 size={28} className="text-red-600" />,
    desc: "Master international languages including English and French. Tailored for students and professionals.",
    features: ["A1 - C2 Proficiency", "Interactive Labs"],
    link: "/academics/languages",
    color: "bg-blue-50/50"
  },
  {
    title: "Hospitality & Management",
    subtitle: "Vocational Excellence",
    icon: <Coffee size={28} className="text-red-600" />,
    desc: "Industry-aligned training for high-demand roles in international hotels and tourism management.",
    features: ["Internship Support", "Industry Standards"],
    link: "/academics/hospitality-management",
    color: "bg-orange-50/50"
  },
  {
    title: "German Language",
    subtitle: "Your Bridge to Germany",
    icon: <GraduationCap size={28} className="text-red-600" />,
    desc: "Specialized Goethe-certified German training. The essential pathway for relocation and study.",
    features: ["Goethe Prep", "Visa Orientation"],
    link: "/academics/german-language",
    color: "bg-emerald-50/50"
  }
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Optimized for Visual Balance */}
      <div className="relative bg-[#0A192F] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">Empowering Global Careers</h4>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Academic <span className="text-red-500">Excellence</span> <br/> 
              Without Borders.
            </h1>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
              Rigorous programs designed to meet international standards and prepare you for a global career in the heart of Kenya.
            </p>
            <div className="flex gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A192F] bg-neutral-800 flex items-center justify-center text-[10px] text-white">
                    {i === 4 ? '+500' : <Users size={14} />}
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs flex items-center">Trusted by hundreds of students annually</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-16">
           <SectionTitle 
            title="Our Programs" 
            subtitle="Specialized tracks tailored to your ambitions." 
          />
        </div>

        {/* Academic Program Cards - More Sizable & Aesthetic */}
        <div className="grid lg:grid-cols-3 gap-6">
          {academicPrograms.map((program, idx) => (
            <div 
              key={idx} 
              className="flex flex-col h-full rounded-[2.5rem] border border-neutral-100 bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className={`p-8 ${program.color} transition-colors group-hover:bg-white`}>
                <div className="mb-4 bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border border-neutral-50">
                  {program.icon}
                </div>
                <h4 className="text-red-600 font-bold uppercase text-[10px] tracking-widest mb-1">
                  {program.subtitle}
                </h4>
                <h3 className="text-2xl font-black text-[#0A192F] mb-3">
                  {program.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  {program.desc}
                </p>
                <div className="h-[1px] w-full bg-neutral-200/50" />
              </div>

              <div className="p-8 flex-grow flex flex-col pt-4">
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
                      <CheckCircle2 size={14} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={program.link} 
                  className="mt-auto w-full inline-flex items-center justify-between bg-neutral-50 text-[#0A192F] px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#0A192F] hover:text-white transition-all group/btn"
                >
                  View Details
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - New Logic to Expand Page */}
        <div className="grid md:grid-cols-3 gap-8 my-24 border-y border-neutral-100 py-12">
            {[
              { label: "Placement Rate", value: "94%", icon: <ShieldCheck className="text-red-600"/> },
              { label: "Global Partners", value: "25+", icon: <Globe2 className="text-red-600"/> },
              { label: "Languages Taught", value: "05", icon: <Languages size={24} className="text-red-600"/> },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left flex items-center gap-4 px-6">
                <div className="p-3 bg-red-50 rounded-lg">{stat.icon}</div>
                <div>
                  <h3 className="text-2xl font-black text-[#0A192F]">{stat.value}</h3>
                  <p className="text-neutral-500 text-xs font-bold uppercase tracking-tighter">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Quality Assurance Section - Refined Proportions */}
        <div className="p-8 lg:p-16 rounded-[3rem] bg-neutral-900 text-white relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 opacity-5 rotate-12">
             <Award size={300} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                International <span className="text-yellow-400">Quality Standards</span>
              </h2>
              <p className="text-white/50 text-sm mb-8 leading-relaxed max-w-xl font-light">
                Our educational framework is built on the Common European Framework of Reference for Languages (CEFR) and global hospitality vocational standards.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <BookOpenCheck className="text-yellow-400 shrink-0" size={20} />
                  <p className="text-[13px] text-white/70">Annually updated curricula reflecting current visa policies.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Award className="text-yellow-400 shrink-0" size={20} />
                  <p className="text-[13px] text-white/70">Certified faculty with diverse international backgrounds.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-[2rem] text-[#0A192F]">
                 <h4 className="text-lg font-black mb-2 tracking-tight">Begin Your Application</h4>
                 <p className="text-neutral-500 mb-6 text-xs leading-relaxed">
                   Admissions for our upcoming cohort are now open. Speak with an advisor today.
                 </p>
                 <Link href="/contact" className="flex items-center justify-center gap-2 bg-red-600 text-white w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#0A192F] transition-all">
                   Contact Admissions <ArrowRight size={14}/>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper icon for stats section
function Languages({ size, className }: { size?: number, className?: string }) {
  return <Globe2 size={size} className={className} />; // Placeholder, but use Language if imported
}