// src/app/(site)/news/page.tsx

import SectionTitle from '@/components/common/SectionTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates | International Institute of Foreign Languages and Hospitality Management',
  description: 'Stay updated with the latest news, intakes, events, and achievements from our institute in Narok, Kenya.',
  keywords: ['June 2025 intake', 'hospitality news Kenya', 'German language intake', 'institute updates'],
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            School News & Updates
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Stay informed about the latest happenings in our hospitality education community
          </p>

          <div className="mt-10">
            <a href="#newsletter" 
               className="btn btn-secondary btn-lg text-lg px-10">
              Subscribe to Updates
            </a>
          </div>
        </div>
      </div>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Featured" 
            subtitle="Latest Announcements" 
          />

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="card bg-base-100 shadow-2xl border border-base-300 overflow-hidden hover:shadow-3xl transition-all">
              <div className="p-10 md:p-14">
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full font-medium">
                    Admissions
                  </span>
                  <span>June 1, 2025</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-8">
                  June 2025 Intake Now Open for Applications
                </h2>

                <p className="text-xl text-neutral-700 leading-relaxed mb-10">
                  We&apos;re now accepting applications for our June 2025 intake across all 
                  hospitality and language programs. Don&apos;t miss this opportunity to join our vibrant community.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#" className="btn btn-secondary btn-lg">
                    Read Full Story
                  </a>
                  <button className="btn btn-outline btn-lg">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Meet Our Staff */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-video bg-neutral-900 rounded-3xl flex items-center justify-center overflow-hidden relative">
                <div className="text-center z-10">
                  <div className="text-7xl mb-6">🎥</div>
                  <p className="text-white text-2xl font-medium">Meet Our Dedicated Staff</p>
                  <p className="text-neutral-400 mt-2">3:45 min • Published: May 2025</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-10">
                  <button className="btn btn-secondary btn-circle btn-lg">
                    ▶
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Hear directly from our faculty and staff
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                In these interviews, they share their passion for education and the unique 
                learning environment we&apos;ve created together.
              </p>
              <button className="mt-8 btn btn-outline btn-lg">
                Watch Full Interviews
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All News Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="All News" 
            subtitle="Browse by Category" 
          />

          <div className="flex flex-wrap gap-3 justify-center mt-12">
            {['Admissions', 'Programs', 'Events', 'Achievements', 'Partnerships'].map((category) => (
              <div 
                key={category}
                className="badge badge-lg badge-outline border-primary text-primary hover:bg-primary hover:text-white transition-all cursor-pointer px-6 py-4 text-base"
              >
                {category}
              </div>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Current Intake Card */}
            <div className="card bg-white border border-base-300 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="flex justify-between items-start mb-6">
                  <span className="badge badge-secondary">Admissions</span>
                  <span className="text-sm text-neutral-500">June 1, 2025</span>
                </div>
                <h3 className="card-title text-2xl text-primary mb-4">
                  June 2025 Intake Now Open for Applications
                </h3>
                <p className="text-neutral-600">
                  We&apos;re now accepting applications for our June 2025 intake across all 
                  hospitality and language programs.
                </p>
                <div className="card-actions mt-8">
                  <a href="#" className="btn btn-primary btn-sm">Read More</a>
                </div>
              </div>
            </div>

            {/* Upcoming Events Card */}
            <div className="card bg-white border border-base-300 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="flex justify-between items-start mb-6">
                  <span className="badge badge-accent">Events</span>
                  <span className="text-sm text-neutral-500">Coming Soon</span>
                </div>
                <h3 className="card-title text-2xl text-primary mb-4">
                  Upcoming Events
                </h3>
                <p className="text-neutral-600">
                  We&apos;re planning some great events for our community. Details will be posted here when available.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-outline btn-sm">Stay Updated</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Subscribe to our newsletter to receive the latest news and updates about our programs and events.
          </p>

          <div className="max-w-md mx-auto">
            <div className="join w-full">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="input input-bordered join-item flex-1 bg-white text-neutral-900 placeholder:text-neutral-500"
              />
              <button className="btn btn-secondary join-item px-10">
                Subscribe
              </button>
            </div>
            <p className="text-xs opacity-70 mt-4">
              You can unsubscribe at any time. We respect your inbox.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}