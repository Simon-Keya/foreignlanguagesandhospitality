// src/components/home/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-primary text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            A Warm Welcome to Our Campus
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Students and staff gathered at the school gate, creating a welcoming atmosphere 
            that reflects teamwork, support, and the spirit of a vibrant learning community.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/admissions" className="btn btn-secondary btn-lg text-lg px-10">
              Apply Now
            </Link>
            <Link href="/brochures" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg text-lg px-10">
              Download Brochure
            </Link>
            <Link href="/programs" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg text-lg px-10">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}