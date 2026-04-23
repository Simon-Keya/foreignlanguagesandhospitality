import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Contact Us | International Institute of Foreign Languages and Hospitality Management",
  description:
    "Get in touch with IIFLHM for admissions, program information, or any enquiries. Visit, call, or email us in Narok, Kenya.",
};

const contactItems = [
  {
    label: "Email Us",
    lines: [
      { text: "info@foreignlanguagesandhospitality.com", href: "mailto:info@foreignlanguagesandhospitality.com" },
      { text: "admissions@foreignlanguagesandhospitality.com", href: "mailto:admissions@foreignlanguagesandhospitality.com" },
    ],
  },
  {
    label: "Call Us",
    lines: [
      { text: "+254 723 104 680", href: "tel:+254723104680" },
      { text: "+254 705 704 554", href: "tel:+254705704554" },
    ],
  },
  {
    label: "Visit Us",
    lines: [
      { text: "Newline Building, Narok, Kenya", href: null },
      { text: "Mon–Fri: 8:00 AM – 6:00 PM EAT", href: null },
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-14">

          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            <div>
              <h2 className="text-3xl font-black text-primary">
                Let’s Connect
              </h2>
            </div>

            {/* FIXED MAP LOOP */}
            <div className="flex flex-col gap-5">
              {contactItems.map(({ label, lines }) => (
                <div
                  key={label}
                  className="bg-white border p-5 rounded-xl"
                >
                  <p className="font-bold mb-2">{label}</p>

                  {lines.map(({ text, href }) =>
                    href ? (
                      <a
                        key={text}
                        href={href}
                        className="block text-sm text-blue-600 hover:underline"
                      >
                        {text}
                      </a>
                    ) : (
                      <p key={text} className="text-sm text-gray-600">
                        {text}
                      </p>
                    )
                  )}
                </div>
              ))}
            </div>

            {/* FIXED WHATSAPP */}
            <a
              href="https://wa.me/254723104680"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-100 p-5 rounded-xl"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 text-center">
        <Link href="/admissions" className="btn btn-secondary">
          Start Your Application
        </Link>
      </div>
    </div>
  );
}