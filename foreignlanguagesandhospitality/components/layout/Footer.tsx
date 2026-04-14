// src/components/common/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Column - Mission & Logo */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-3xl font-bold">
                IIF
              </div>
              <div>
                <p className="font-bold text-xl">IIFLHM</p>
                <p className="text-xs opacity-75 -mt-1">International Institute</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed opacity-90 max-w-md">
              Empowering students with knowledge and skills to excel in their chosen fields 
              and make meaningful contributions to society.
            </p>

            <div className="mt-10">
              <p className="text-sm opacity-75 mb-2">Follow Us</p>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:text-accent transition-colors">📘</a>
                <a href="#" className="hover:text-accent transition-colors">📷</a>
                <a href="#" className="hover:text-accent transition-colors">▶️</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-neutral-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Campus Life</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Media</Link></li>
              <li><Link href="/career-opportunities" className="hover:text-white transition-colors">Career Services</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-neutral-400 text-sm">Visit Us</p>
                <p className="text-white">
                  Newline Building<br />
                  Narok, Kenya
                </p>
              </div>

              <div>
                <p className="text-neutral-400 text-sm">Call Us</p>
                <div className="space-y-1">
                  <a href="tel:+254723104680" className="block hover:text-accent transition-colors">
                    +254 723 104 680
                  </a>
                  <a href="tel:+254705704554" className="block hover:text-accent transition-colors">
                    +254 705 704 554
                  </a>
                </div>
              </div>

              <div>
                <p className="text-neutral-400 text-sm">Email Us</p>
                <a 
                  href="mailto:info@foreignlanguagesandhospitality.com" 
                  className="block hover:text-accent transition-colors"
                >
                  info@foreignlanguagesandhospitality.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-10 border-t border-white/20">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
            <p className="text-neutral-300 text-sm mb-6">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            
            <div className="join w-full">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="input input-bordered join-item bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-accent w-full"
              />
              <button className="btn btn-secondary join-item px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <p>© 2026 IIFLHM. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
          
          <p className="text-xs">Built with ❤️ for Kenya&apos;s Future Leaders</p>
        </div>
      </div>
    </footer>
  );
}