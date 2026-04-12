// src/components/home/FinalCTA.tsx

export default function FinalCTA() {
    return (
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enroll Now and Transform Your Future
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Join our community of successful graduates and start your journey towards a rewarding career in hospitality and global opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="/admissions" className="btn btn-secondary btn-lg text-lg px-12">
              Apply Now
            </a>
            <a href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg text-lg px-12">
              Request Information
            </a>
          </div>
        </div>
      </section>
    );
  }