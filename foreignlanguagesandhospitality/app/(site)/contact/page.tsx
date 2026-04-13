// src/app/(site)/contact/page.tsx

import ContactForm from '@/components/contact/ContactForm';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | International Institute of Foreign Languages and Hospitality Management',
  description: 'Get in touch with us for admissions, program information, or any inquiries. Visit, call, or email the International Institute in Narok, Kenya.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Have questions about our programs? We&apos;re here to help you take the next step 
            in your educational journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Let&apos;s Connect</h2>

              {/* Email */}
              <div className="flex gap-4 mb-10">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <div className="space-y-2 text-neutral-700">
                    <a href="mailto:admissions@foreignlanguagesandhospitality.com" className="block hover:text-secondary transition-colors">
                      admissions@foreignlanguagesandhospitality.com
                    </a>
                    <a href="mailto:support@foreignlanguagesandhospitality.com" className="block hover:text-secondary transition-colors">
                      support@foreignlanguagesandhospitality.com
                    </a>
                    <a href="mailto:adminoffice@foreignlanguagesandhospitality.com" className="block hover:text-secondary transition-colors">
                      adminoffice@foreignlanguagesandhospitality.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-10">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <div className="space-y-2">
                    <a href="tel:+254723104680" className="block hover:text-secondary transition-colors">
                      +254 723 104 680
                    </a>
                    <a href="tel:+254705704554" className="block hover:text-secondary transition-colors">
                      +254 705 704 554
                    </a>
                  </div>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Newline Building<br />
                    Narok, Kenya
                  </p>
                  <p className="text-sm text-neutral-500 mt-4 flex items-center gap-2">
                    <Clock size={18} /> Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12">
              <h3 className="font-semibold text-lg mb-4">Find Us on Map</h3>
              <div className="bg-neutral-200 rounded-3xl overflow-hidden h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598.000000000000!2d35.870000000000!3d-1.080000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMS4wODAwMDAwMDAwMDAwMDA!5e0!3m2!1sen!2ske!4v1710000000000" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-base-300 rounded-3xl p-10 md:p-14 shadow-xl">
              <h2 className="text-3xl font-bold text-primary mb-2">Send us a Message</h2>
              <p className="text-neutral-600 mb-10">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-base-200 py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-primary mb-4">
            We&apos;re Here to Help You Succeed
          </h2>
          <p className="text-lg text-neutral-600">
            Whether you have questions about admissions, programs, or career pathways in Germany, 
            our team is ready to support your journey.
          </p>
        </div>
      </div>
    </div>
  );
}