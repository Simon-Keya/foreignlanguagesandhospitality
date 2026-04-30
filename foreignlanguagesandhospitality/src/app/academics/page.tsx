// src/app/academics/page.tsx
"use client";

import SectionTitle from '@/components/common/SectionTitle';
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  Code2,
  Coffee,
  Globe2,
  GraduationCap,
  MapPin,
  PlaneTakeoff,
  ShieldCheck,
  Zap
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
    duration: "3-6 Months"
  },
  {
    title: "Hospitality & Management",
    subtitle: "Vocational Excellence",
    icon: <Coffee size={24} className="text-secondary" />,
    desc: "Professional training in Hotel Operations, Food & Beverage Service, and Front Office management for the luxury tourism sector.",
    features: ["Industrial Attachments", "5-Star Service Standards", "Operations Management"],
    link: "/academics/hospitality-management",
    color: "bg-orange-50/50",
    duration: "1 Year"
  },
  {
    title: "ICT & Digital Skills",
    subtitle: "Future Tech",
    icon: <Code2 size={24} className="text-secondary" />,
    desc: "Equipping African youth with modern tech skills in Cyber Security, AI, Web Design, and Networking for the global digital economy.",
    features: ["AI & Cyber Security", "Fullstack Web Design", "Networking & Tech"],
    link: "/academics/ict",
    color: "bg-purple-50/50",
    duration: "6-12 Months"
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
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/academics-hero.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/60 to-transparent" /> 
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <Zap size={14} /> Narok & Nairobi Branch
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                World-Class <br/> <span className="text-secondary">Curriculum.</span>
              </h1>
              <p className="text-lg text-white/90 font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Meticulously designed to meet European standards, blending linguistic mastery with high-demand vocational expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <Link href="/admissions" className="w-full sm:w-auto px-10 py-5 bg-secondary text-white rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all shadow-2xl">
                  Enroll Today
                </Link>
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A2540] bg-neutral-200" />
                  ))}
                  <div className="pl-6 text-white/80 text-[10px] font-bold self-center uppercase tracking-wider">Join 500+ Students</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="h-52 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 p-8 flex flex-col justify-end group hover:bg-white/20 transition-all shadow-2xl">
                   <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="text-secondary" size={28} />
                   </div>
                   <h4 className="text-white font-black text-lg">Goethe Standards</h4>
                   <p className="text-white/60 text-xs mt-2">Official CEFR aligned testing and preparation.</p>
                </div>
                <div className="h-52 bg-secondary rounded-2xl p-8 flex flex-col justify-end shadow-2xl hover:-translate-y-2 transition-transform">
                   <Award className="text-white mb-4" size={32} />
                   <h4 className="text-white font-black text-lg">Industry Certified</h4>
                   <p className="text-white/90 text-xs mt-2">Accredited vocational diplomas recognized globally.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-52 bg-white rounded-2xl p-8 flex flex-col justify-end shadow-2xl hover:-translate-y-2 transition-transform">
                   <Briefcase className="text-secondary mb-4" size={32} />
                   <h4 className="font-black text-[#0A2540] text-lg">German Pathways</h4>
                   <p className="text-neutral-500 text-xs mt-2">Direct links to Ausbildung and job opportunities.</p>
                </div>
                <div className="h-52 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 p-8 flex flex-col justify-end group hover:bg-white/20 transition-all shadow-2xl">
                   <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Globe2 className="text-secondary" size={28} />
                   </div>
                   <h4 className="text-white font-black text-lg">Global Network</h4>
                   <p className="text-white/60 text-xs mt-2">Alumni working in over 15 countries worldwide.</p>
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
                className="group flex flex-col h-full rounded-2xl border border-neutral-100 bg-white hover:border-secondary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`p-8 ${program.color} transition-colors group-hover:bg-white`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-neutral-50 group-hover:scale-110 transition-transform">
                      {program.icon}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black text-neutral-400 uppercase">
                      <Clock size={12} /> {program.duration}
                    </div>
                  </div>
                  <span className="text-secondary font-black uppercase text-[10px] tracking-[0.3em] mb-2 block">
                    {program.subtitle}
                  </span>
                  <h3 className="text-2xl font-black text-[#0A2540] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {program.desc}
                  </p>
                </div>

                <div className="p-8 flex-grow flex flex-col bg-white">
                  <div className="space-y-4 mb-10">
                    <p className="text-[10px] font-black text-[#0A2540] uppercase tracking-widest opacity-50">Program Highlights</p>
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-[12px] font-bold text-[#0A2540]">
                        <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                          <CheckCircle2 size={12} className="text-secondary" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={program.link} 
                    className="mt-auto w-full inline-flex items-center justify-between bg-neutral-50 text-[#0A2540] px-6 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#0A2540] hover:text-white transition-all group/btn"
                  >
                    View Curriculum
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GERMANY PATHWAY --- */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="lg:w-7/12 flex flex-col justify-center">
               <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">The Success Roadmap</span>
               <h2 className="text-4xl md:text-5xl font-black text-[#0A2540] leading-tight mb-8">
                 Your Career Pathway <br/> to <span className="text-secondary">Europe.</span>
               </h2>
               
               <div className="grid sm:grid-cols-2 gap-6">
                 {pathwaySteps.map((s, i) => (
                   <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-200 group hover:border-secondary transition-all shadow-sm">
                     <div className="flex justify-between items-center mb-4">
                        <span className="w-10 h-10 rounded-lg bg-[#0A2540] text-white flex items-center justify-center font-black text-sm">{s.step}</span>
                        <GraduationCap className="text-neutral-200 group-hover:text-secondary transition-colors" size={24} />
                     </div>
                     <h4 className="font-black text-[#0A2540] text-sm mb-2 uppercase tracking-tight">{s.title}</h4>
                     <p className="text-neutral-500 text-xs leading-relaxed">{s.desc}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:w-5/12">
               <div className="h-full bg-[#0A2540] rounded-3xl p-10 flex flex-col text-white relative shadow-2xl overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <PlaneTakeoff size={180} />
                 </div>
                 
                 <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-6 tracking-tight">Relocation Support</h3>
                    <p className="text-white/70 mb-8 leading-relaxed text-sm font-medium">
                      Moving to a new country is a big step. We ensure you aren&apos;t doing it alone. Our &ldquo;Ready for Germany&rdquo; package includes:
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {[
                        "1-on-1 Visa Interview Simulation",
                        "Housing Search Assistance in Germany",
                        "Bi-weekly Cultural Integration Workshops",
                        "Direct Employer Introductions"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs font-bold">
                          <CheckCircle2 size={16} className="text-secondary" /> {item}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="w-full bg-white text-[#0A2540] py-5 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-secondary hover:text-white transition-all shadow-xl">
                       Get a Free Consultation <ArrowRight size={16} />
                    </Link>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { label: "Narok Campus", val: "Acre-Large Facility", icon: <MapPin size={20}/> },
              { label: "Nairobi Branch", val: "City Hub Access", icon: <MapPin size={20}/> },
              { label: "Employment Rate", val: "94% Placement", icon: <Briefcase size={20}/> },
              { label: "Learning Mode", val: "Hybrid & Physical", icon: <Globe2 size={20}/> },
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-2xl border border-neutral-100 text-center flex flex-col items-center">
                <div className="text-secondary mb-4">{stat.icon}</div>
                <p className="text-[#0A2540] font-black text-lg mb-1">{stat.val}</p>
                <p className="text-neutral-400 text-[10px] uppercase font-bold tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl bg-secondary p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0A2540] -skew-x-12 translate-x-24 hidden lg:block" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Your Global Career <br/> Starts Here.
              </h2>
              <p className="text-white/80 mb-8 text-lg font-medium">
                Don&apos;t wait for opportunities—create them. Join the next cohort and transform your professional life.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 text-white font-bold text-xs">Next Intake: May 2026</div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 text-white font-bold text-xs">Limited Slots Available</div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-2xl text-[#0A2540] shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Applications Open</span>
                </div>
                <h4 className="text-2xl font-black mb-4">Enroll Online</h4>
                <p className="text-neutral-500 mb-8 text-sm leading-relaxed">
                  The application process takes less than 5 minutes. No initial fee required for the first screening.
                </p>
                <Link href="/admissions" className="flex items-center justify-center gap-3 bg-[#0A2540] text-white w-full py-5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-secondary transition-all shadow-lg">
                  Start Application Now <ArrowRight size={18}/>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}