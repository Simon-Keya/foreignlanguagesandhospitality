// src/components/about/FounderBio.tsx

export default function FounderBio() {
    return (
      <section id="founder" className="py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet the Founder</h2>
          </div>
  
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left - Quote + Image Placeholder */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <div className="text-6xl text-accent mb-6">“</div>
                <p className="text-2xl leading-relaxed italic text-neutral-700 mb-8">
                  Language skills can open doors to new countries, cultures, careers, 
                  and a future you never thought possible.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl">
                    👩‍💼
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Soila Lasoi</p>
                    <p className="text-sm text-neutral-500">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right - Bio */}
            <div className="lg:col-span-7">
              <div className="prose prose-lg max-w-none text-neutral-700">
                <p className="text-xl leading-relaxed">
                  Welcome! I&apos;m <span className="font-semibold text-primary">Soila Lasoi</span>, 
                  Founder and CEO of the International Institute of Foreign Languages and Hospitality Management.
                </p>
                <p>
                  With a background in International Studies and hands-on professional experience in both Kenya and Germany, 
                  I established this institute to bridge the gap between local talent and international opportunity.
                </p>
                <p>
                  While currently working in Germany, I&apos;ve had the privilege of working closely with the German government, 
                  helping young refugees integrate into society. Many of these young people arrived after surviving extremely 
                  difficult journeys across the Sahara Desert and the Mediterranean Sea.
                </p>
                <p>
                  That experience inspired the mission behind this institute: to help African youth starting here in Kenya 
                  access the right tools, training, and guidance to pursue safe, legal, and meaningful pathways abroad.
                </p>
                <p className="font-medium">
                  We focus on three core areas: Language Training, Hospitality Education, and Nursing Career Preparation.
                </p>
                <p>
                  At the heart of our work is a belief that language skills can open doors. Together, we&apos;re not just 
                  building careers — we&apos;re building futures.
                </p>
              </div>
  
              <div className="mt-10">
                <p className="font-bold text-primary text-xl">Soila Lasoi</p>
                <p className="text-neutral-600">Founder & CEO</p>
                <p className="text-sm text-neutral-500">International Institute of Foreign Languages and Hospitality Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }