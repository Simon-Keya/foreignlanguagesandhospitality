// src/app/(site)/programs/hospitality/page.tsx

import SectionTitle from '@/components/common/SectionTitle';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hospitality Management Programs | IIFLHM Narok',
  description: 'Professional Diploma and Certificate courses in Hospitality Management, Front Office, Housekeeping, Food & Beverage, Travel & Tourism.',
};

const diplomas = [
  {
    title: "Diploma in Hospitality Management",
    duration: "2 years",
    description: "Two-year program preparing learners for departmental manager roles with operational and managerial skills, plus foreign language training.",
    fees: "KES 30,000 per semester (8 semesters total)",
    modules: [
      "Hospitality Industry Overview",
      "Management Reporting",
      "Hospitality Marketing",
      "Facility Design Evaluation",
      "Human Resource Management",
      "Hotel Information Systems"
    ]
  },
  {
    title: "Diploma in Front Office Operations & Administration",
    duration: "2 years",
    description: "Two-year program providing professional skills for front office operations with practical training and industrial attachment.",
    fees: "KES 30,000 per semester (8 semesters total)",
    modules: [
      "Front Office Operations",
      "Guest Service Procedures",
      "Reservation Systems",
      "Revenue Control",
      "Night Audit Procedures",
      "Guest Relations"
    ]
  },
  {
    title: "Diploma in House Keeping & Laundry Operation",
    duration: "2 years",
    description: "Two-year program providing competencies in supervision, inventory control, and laundry plant operations.",
    fees: "KES 30,000 per semester (8 semesters total)",
    modules: [
      "Housekeeping Department Organization",
      "Supervision Techniques",
      "Inventory Control",
      "Fabric Maintenance",
      "Laundry Plant Operations",
      "Health and Safety Standards"
    ]
  },
  {
    title: "Diploma in Travel and Tourism Management",
    duration: "2 years",
    description: "Prepares students for supervisory roles in travel and tourism with 6-month industrial attachment and IATA preparation.",
    fees: "KES 30,000 per semester (8 semesters total)",
    modules: [
      "Tourism Industry Fundamentals",
      "Travel Agency Operations",
      "Tour Planning & Management",
      "Customer Service in Tourism",
      "Sustainable Tourism Practices",
      "Tourism Marketing"
    ]
  }
];

const certificates = [
  {
    title: "Certificate in Front Office Operations & Administration",
    duration: "1 year",
    description: "One-year program with three months industrial attachment for operational roles.",
    fees: "KES 30,000 per semester (4 semesters total)",
    modules: ["Front Office Operations", "Guest Registration", "Reservation Systems", "Cash Handling"]
  },
  {
    title: "Certificate in Food Production",
    duration: "1 year",
    description: "Covers all aspects of food production with practical training in hotels.",
    fees: "KES 30,000 per semester (4 semesters total)",
    modules: ["Food Preparation Techniques", "Kitchen Safety & Sanitation", "Menu Planning"]
  },
  {
    title: "Certificate in Food & Beverage Service and Sales",
    duration: "1 year",
    description: "Focuses on food and beverage operations and supervisory skills.",
    fees: "KES 30,000 per semester (4 semesters total)",
    modules: ["Beverage Knowledge", "Table Service Techniques", "Bar Operations"]
  },
  {
    title: "Certificate in Housekeeping and Laundry",
    duration: "1 year",
    description: "Training in managing housekeeping and laundry operations.",
    fees: "KES 30,000 per semester (4 semesters total)",
    modules: ["Cleaning Techniques", "Linen Management", "Laundry Operations"]
  }
];

const shortCourses = [
  { title: "Front Desk Techniques", duration: "3 months", fees: "KES 30,000 total" },
  { title: "Hotel Information Systems (Opera)", duration: "2 months", fees: "KES 30,000 total" },
  { title: "Food & Beverage Control", duration: "2 months", fees: "KES 30,000 total" },
  { title: "Cake Making & Decorations", duration: "2 months", fees: "KES 50,000 total" },
  { title: "Kitchen Operations Techniques", duration: "2 months", fees: "KES 50,000 total" },
  { title: "Pastry & Bakery Techniques", duration: "2 months", fees: "KES 50,000 total" },
  { title: "Food & Beverage Service Supervision", duration: "2 months", fees: "KES 50,000 total" },
  { title: "Barista & Bar Tending Course", duration: "2 months", fees: "KES 40,000 total" },
  { title: "Banqueting & Events Techniques", duration: "3 months", fees: "KES 40,000 total" },
];

export default function HospitalityProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Hospitality Education
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Accredited programs designed in partnership with leading hotel chains to prepare you for management positions in the global hospitality industry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionTitle 
          title="Why Choose Our Hospitality Programs?" 
          subtitle="Industry-recognized training with practical experience and global standards" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            "Industry Partnerships with Marriott, Hilton & Serena Hotels",
            "Minimum 600 hours of mandatory internship in 4-5 star properties",
            "Internationally benchmarked curriculum (AHLEI & City & Guilds)",
            "Dual Certification – Academic + Professional Competency"
          ].map((item, i) => (
            <div key={i} className="bg-base-100 p-8 rounded-2xl border border-base-300">
              <p className="text-neutral-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diploma Programs */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Diploma Programs" subtitle="2-Year Professional Courses" />

          <div className="grid lg:grid-cols-2 gap-10 mt-12">
            {diplomas.map((program, index) => (
              <div key={index} className="card bg-white shadow-xl border border-base-300">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="badge badge-secondary mb-3">{program.duration}</span>
                      <h3 className="text-2xl font-bold text-primary">{program.title}</h3>
                    </div>
                  </div>

                  <p className="text-neutral-600 mt-6 mb-8">{program.description}</p>

                  <div>
                    <p className="font-semibold text-sm text-neutral-500 mb-2">Key Modules:</p>
                    <ul className="grid grid-cols-1 gap-2 text-sm">
                      {program.modules.map((module, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span> {module}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 pt-6 border-t border-base-300">
                    <p className="font-medium">{program.fees}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Certificate Programs" subtitle="1-Year Professional Certificates" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {certificates.map((program, index) => (
              <div key={index} className="card bg-white border border-base-300 shadow-lg">
                <div className="card-body">
                  <span className="badge badge-outline mb-4">{program.duration}</span>
                  <h3 className="text-xl font-bold text-primary mb-4">{program.title}</h3>
                  <p className="text-neutral-600 text-sm mb-6">{program.description}</p>
                  <p className="font-medium text-sm">{program.fees}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Courses */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Short Courses & Workshops" subtitle="Flexible professional development courses" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {shortCourses.map((course, index) => (
              <div key={index} className="card bg-white border border-base-300 shadow hover:shadow-xl transition-all">
                <div className="card-body">
                  <h3 className="font-bold text-primary text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-neutral-500 mb-4">{course.duration}</p>
                  <p className="font-semibold text-secondary">{course.fees}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Begin Your Hospitality Career</h2>
          <p className="text-xl opacity-90 mb-10">
            Applications are open for our next intake. Limited spaces available.<br />
            Upcoming intake: <span className="font-semibold">June 15, 2025</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/admissions" className="btn btn-secondary btn-lg px-12">
              Apply Online
            </Link>
            <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg px-12">
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}