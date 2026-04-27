import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Reach the Institute",
  description: "Get in touch with the International Institute in Narok. We are here to answer your questions about courses, fees, and travel programs.",
};

const contactCards = [
  {
    title: "Official Correspondence",
    icon: "✉️",
    links: [
      { text: "info@ifl.ac.ke", href: "mailto:info@ifl.ac.ke" },
      { text: "admissions@ifl.ac.ke", href: "mailto:admissions@ifl.ac.ke" },
    ],
  },
  {
    title: "Direct Hotlines",
    icon: "📞",
    links: [
      { text: "+254 723 104 680", href: "tel:+254723104680" },
      { text: "+254 705 704 554", href: "tel:+254705704554" },
    ],
  },
  {
    title: "Campus Location",
    icon: "📍",
    links: [
      { text: "Newline Building, Narok Town", href: null },
      { text: "Open: Mon–Fri, 8AM–6PM", href: null },
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section Header */}
      <div className="bg-[#0A192F] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight text-center">Let’s Start a Conversation</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-[#0A192F] tracking-tight">Visit Our Campus</h2>
              <p className="text-neutral-500 text-lg">We welcome prospective students and parents for guided tours of our language labs and hospitality suites.</p>
            </div>

            <div className="grid gap-6">
              {contactCards.map((card) => (
                <div key={card.title} className="p-8 rounded-[2rem] border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-black text-[#0A192F] uppercase tracking-widest text-xs mb-4">{card.title}</h3>
                  <div className="space-y-2">
                    {card.links.map((link) => (
                      link.href ? (
                        <a key={link.text} href={link.href} className="block text-lg font-bold text-neutral-600 hover:text-yellow-600 transition-colors">
                          {link.text}
                        </a>
                      ) : (
                        <p key={link.text} className="text-lg font-bold text-neutral-400">{link.text}</p>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Call-to-Action */}
            <a href="https://wa.me/+254 705 704 554" target="_blank" className="flex items-center justify-between p-8 rounded-[2rem] bg-green-600 text-white hover:bg-green-700 transition-all shadow-xl shadow-green-600/20 group">
              <span className="text-xl font-black tracking-tight">Chat with an Advisor</span>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">→</div>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-neutral-100">
              <div className="mb-10">
                <h3 className="text-2xl font-black text-[#0A192F]">Send an Enquiry</h3>
                <p className="text-neutral-400 mt-2">Have a specific question? Our team will get back to you shortly.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}