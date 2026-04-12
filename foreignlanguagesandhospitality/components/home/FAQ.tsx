// src/components/home/FAQ.tsx
import SectionTitle from '@/components/common/SectionTitle';

const faqs = [
  "What are the admission requirements?",
  "Are there scholarship opportunities available?",
  "How long are the programs?",
  "Do you offer internship placements?",
  "Can I work while studying?",
  "What career support services do you provide?",
  "Are the programs internationally recognized?",
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our programs, admissions, and student life" 
        />

        <div className="mt-12 space-y-4">
          {faqs.map((question, index) => (
            <div key={index} className="collapse collapse-plus border border-base-300 bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-primary">
                {question}
              </div>
              <div className="collapse-content text-neutral-600">
                <p className="pt-4">Answer coming soon. Please contact us for detailed information.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
          <a href="/contact" className="btn btn-secondary">
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
}