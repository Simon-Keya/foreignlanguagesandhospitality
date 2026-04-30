// src/app/academics/page.tsx
"use client";

import SectionTitle from '@/components/common/SectionTitle';
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Briefcase,
  CheckCircle2,
  Code2,
  Coffee,
  Globe2,
  GraduationCap,
  PlaneTakeoff,
  Search,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

const academicPrograms = [
  {
    title: "Language Courses",
    subtitle: "Global Communication",
    icon: <Globe2 size={24} className="text-secondary" />,
    desc: "Comprehensive training in German, French, Spanish, Chinese, and Arabic. We focus on the CEFR framework to ensure global mobility.",
    features: ["A1 - B2 Goethe/DELF Prep", "Native-level Fluency", "Interactive Language Labs"],
    link: "/academics/languages",
    color: "bg-blue-50/50",
  },
  {
    title: "Hospitality & Management",
    subtitle: "Vocational Excellence",
    icon: <Coffee size={24} className="text-secondary" />,
    desc: "Professional training in Hotel Operations, Food & Beverage Service, and Front Office management for the luxury tourism sector.",
    features: ["Industrial Attachments", "5-Star Service Standards", "Operations Management"],
    link: "/academics/hospitality-management",
    color: "bg-orange-50/50",
  },
  {
    title: "ICT & Digital Skills",
    subtitle: "Future Tech",
    icon: <Code2 size={24} className="text-secondary" />,
    desc: "Equipping African youth with modern tech skills in Cyber Security, AI, Web Design, and Networking for the global digital economy.",
    features: ["AI & Cyber Security", "Fullstack Web Design", "Networking & Tech"],
    link: "/academics/ict",
    color: "bg-purple-50/50",
  }
];

const pathwaySteps = [
  { step: "01", title: "Language Mastery", desc: "Reach B1/B2 proficiency in German or French." },
  { step: "02", title: "Skill Certification", desc: "Complete hospitality or tech vocational training." },
  { step: "03", title: "Placement & Visa", desc: "Guidance on Ausbildung applications and Chance Karte." },
  { step: "04", title: "Global Career", desc: "Relocation to Germany, Austria, or Switzerland." }
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- 
          Note: Ensure your image is at public/images/academics-hero.jpg 
      */}
      <section className="relative bg-[#1d354d] min-h-[70vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/academics-hero.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />
        {/* Lighter Overlay: Changed from /80 to /40 for better visibility of the image */}
        <div className="absolute inset-0 bg-[#0A2540]/40 backdrop-blur-[2px]" /> 
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="text-center lg:text-left">
              <span className="inline-block text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                Narok & Nairobi Branch
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-md">
                World-Class <span className="text-secondary">Curriculum</span> <br/> 
                For Global Impact.
              </h1>
              <p className="text-lg text-white font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
                Our programs are meticulously designed to meet European standards, 
                blending language proficiency with high-demand vocational skills.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <Link href="/admissions" className="w-full sm:w-auto px-10 py-5 bg-secondary text-white rounded-xl font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                  Enroll Today
                </Link>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider bg-[#0A2540]/30 px-3 py-2 rounded-md">
                  Trusted by 500+ Students
                </p>
              </div>
            </div>

            {/* Sharp-Rounded Quick Info Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-44 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col justify-end group hover:bg-white/20 transition-colors">
                   <ShieldCheck className="text-secondary mb-4" size={28} />
                   <h4 className="text-white font-bold">Goethe Standards</h4>
                </div>
                <div className="h-44 bg-secondary rounded-2xl p-6 flex flex-col justify-end shadow-xl">
                   <Award className="text-white mb-4" size={28} />
                   <h4 className="text-white font-bold">Industry Certified</h4>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-44 bg-white text-[#0A2540] rounded-2xl p-6 flex flex-col justify-end shadow-xl">
                   <Briefcase className="text-secondary mb-4" size={28} />
                   <h4 className="font-black">German Pathways</h4>
                </div>
                <div className="h-44 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col justify-end group hover:bg-white/20 transition-colors">
                   <Globe2 className="text-secondary mb-4" size={28} />
                   <h4 className="text-white font-bold">Global Network</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PROGRAMS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Our Courses" 
            subtitle="Specialized tracks designed for the modern global economy." 
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {academicPrograms.map((program, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col h-full rounded-2xl border border-neutral-100 bg-white hover:border-secondary/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`p-8 ${program.color} transition-colors group-hover:bg-white`}>
                  <div className="mb-6 bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border border-neutral-50 group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  <span className="text-secondary font-black uppercase text-[10px] tracking-[0.3em] mb-2 block">
                    {program.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-[#0A2540] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {program.desc}
                  </p>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-[#0A2540]/70">
                        <CheckCircle2 size={14} className="text-secondary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={program.link} 
                    className="mt-auto w-full inline-flex items-center justify-between bg-neutral-50 text-[#0A2540] px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#0A2540] hover:text-white transition-all group/btn"
                  >
                    Explore Program
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GERMANY PATHWAY --- */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">International Career Prep</span>
               <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] leading-tight mb-6">
                 Your Career Pathway <br/> to <span className="text-secondary">Europe.</span>
               </h2>
               <p className="text-neutral-500 mb-10 leading-relaxed text-sm">
                 We don&apos;t just teach; we prepare you for the transition. Our pathway programs 
                 focus on specific requirements for German Opportunity Cards and vocational roles.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-4">
                 {pathwaySteps.map((s, i) => (
                   <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-100 group hover:border-secondary/30 transition-all shadow-sm">
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-secondary font-black text-xl opacity-30">{s.step}</span>
                        <GraduationCap className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                     </div>
                     <h4 className="font-black text-[#0A2540] text-xs mb-1">{s.title}</h4>
                     <p className="text-neutral-400 text-[11px] leading-snug">{s.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="aspect-[4/3] lg:aspect-square bg-[#0A2540] rounded-2xl p-10 flex flex-col justify-center text-white relative shadow-2xl overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <PlaneTakeoff size={120} />
                 </div>
                 <h3 className="text-2xl font-black mb-4 tracking-tight">Ready for Germany?</h3>
                 <p className="text-white/60 mb-8 leading-relaxed text-sm font-medium">
                   Our sessions include visa orientation, CV writing, 
                   and interview prep with European employers.
                 </p>
                 <Link href="/contact" className="inline-flex items-center gap-4 text-secondary font-black text-xs uppercase tracking-widest group">
                    Schedule a Consultation
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPACT QUALITY ASSURANCE --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-2xl bg-[#0A2540] text-white p-10 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                Global Standards <br/> <span className="text-secondary">Kenyan Hospitality.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <BookOpenCheck className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-md mb-1">CEFR Aligned</h4>
                    <p className="text-white/40 text-xs leading-relaxed">Language programs updated to reflect Goethe and DELF requirements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Award className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-md mb-1">Expert Faculty</h4>
                    <p className="text-white/40 text-xs leading-relaxed">Trained by professionals with European work experience.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-10 rounded-2xl text-[#0A2540] shadow-xl relative">
                <Search className="absolute top-8 right-8 text-secondary/10" size={32} />
                <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">2026 Intake</span>
                <h4 className="text-xl font-black mb-3">Start Your Journey</h4>
                <p className="text-neutral-500 mb-6 text-xs leading-relaxed">
                  Applications are currently being processed. Early applicants receive priority placement.
                </p>
                <Link href="/admissions" className="flex items-center justify-center gap-3 bg-secondary text-white w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#0A2540] transition-all">
                  Begin Application <ArrowRight size={14}/>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}