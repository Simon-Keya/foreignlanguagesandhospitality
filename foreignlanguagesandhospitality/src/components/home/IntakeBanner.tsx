// src/components/home/IntakeBanner.tsx

export default function IntakeBanner() {
    return (
      <div className="bg-accent py-6 text-center">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🎓</span>
            <div>
              <p className="font-bold text-primary text-xl">June 2025 Intake Now Open</p>
              <p className="text-primary/80">Get a glimpse of our vibrant international community</p>
            </div>
          </div>
          <a href="/admissions" className="btn btn-primary btn-lg whitespace-nowrap">
            Apply Now to Join June 2025 Cohort
          </a>
        </div>
      </div>
    );
  }