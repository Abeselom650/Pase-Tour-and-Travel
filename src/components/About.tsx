import React from 'react';
import { Shield, Sparkles, Award, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  const whyChooseUs = [
    {
      title: 'Experienced Guides',
      desc: 'Our certified guides are expert academic historians, survival naturalists, and local sons/daughters of the towns they tour.',
      icon: Users,
    },
    {
      title: 'Affordable Packages',
      desc: 'We prioritize fair-trade premium value, offering highly competitive all-inclusive rates without hidden premium fees.',
      icon: Award,
    },
    {
      title: 'Safe Travel',
      desc: 'Tested safety escorts, well-maintained high-efficiency off-road Cruisers, and strict protocol checks for your absolute peace of mind.',
      icon: ShieldCheck,
    },
    {
      title: 'Customized Tours',
      desc: 'We tailor unique itineraries precisely synchronized with seasonal festivals, bird behaviors, and physical comfort budgets.',
      icon: Sparkles,
    },
    {
      title: '24/7 Customer Support',
      desc: 'Unwavering satellite communication and constant ground office assistance to guide and support you across all remote terrains.',
      icon: HeartHandshake,
    },
  ];

  const services = [
    'Cultural and Historical Tours',
    'Adventure and Trekking Tours',
    'Wildlife Safaris',
    'Photography Tours',
    'Bird Watching Tours',
    'Private and Customized Trips',
    'Airport Transfers',
    'Hotel Reservations',
    'Business and Group Travel',
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-black/5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            Get To Know Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
            Pioneers of authentic Ethiopian Hospitality
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Story, Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-black leading-tight">
              Welcome to Passe Tour and Travel
              <span className="block mt-1">Discover Ethiopia with Confidence</span>
            </h3>
            <p className="text-sm md:text-base text-black/70 leading-relaxed font-light">
              At Passe Tour & Travel, we create unforgettable travel experiences across Ethiopia's most remarkable destinations. From the ancient rock-hewn churches of Lalibela to the dramatic landscapes of Simien Mountains National Park and the rich cultures of the Omo Valley, we offer carefully designed tours for travelers seeking authentic experiences.
            </p>
            <p className="text-sm md:text-base text-black/70 leading-relaxed font-light">
              Whether you are looking for cultural tours, historical journeys, wildlife adventures, trekking expeditions, or customized private trips, our experienced team is dedicated to providing exceptional service, comfort, and memorable experiences.
            </p>
            
            {/* Mission & Vision Mini-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="glass p-6 rounded-2xl border border-black/10 shadow-sm">
                <h4 className="font-serif font-bold text-lg text-black mb-2 border-b-2 border-primary/20 pb-2">
                  Our Mission
                </h4>
                <p className="text-xs text-black/60 leading-relaxed">
                  To provide transformative, safe, custom travels across Ethiopia that enrich tourists and elevate local communities sustainably.
                </p>
              </div>
              <div className="glass p-6 rounded-2xl border border-black/10 shadow-sm">
                <h4 className="font-serif font-bold text-lg text-black mb-2 border-b-2 border-primary/20 pb-2">
                  Our Vision
                </h4>
                <p className="text-xs text-black/60 leading-relaxed">
                  To shape the global baseline for premium, community-first adventure travel in the Horn of Africa, inspiring lifelong cultural respect.
                </p>
              </div>
            </div>
          </div>

          {/* Visual representation of Story / Ethiopian values */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#111111] aspect-video lg:aspect-square">
              <img
                src="/Gojo.jpeg"
                alt="Ethiopian hospitality and beautiful landscape"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-black/10 shadow-xl flex items-center justify-around text-center">
                <div>
                  <span className="block font-serif text-3xl font-extrabold text-primary">100%</span>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-black/50">Local Touch</span>
                </div>
                <div className="h-10 w-[1px] bg-white/10" />
                <div>
                  <span className="block font-serif text-3xl font-extrabold text-primary">500+</span>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-black/50">Custom Tours</span>
                </div>
                <div className="h-10 w-[1px] bg-white/10" />
                <div>
                  <span className="block font-serif text-3xl font-extrabold text-primary">4.9/5</span>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-black/50">Trip Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us & Key Features Cards */}
        <div className="border-t border-black/10 pt-16">
          <div className="text-center space-y-2 mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-black">
              Why Choose Passe tour and travel?
            </h3>
            <p className="text-sm text-black/60 max-w-lg mx-auto">
              Our signature travel guarantees that make us the gold-standard agency in Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  id={`about-feature-${i + 1}`}
                  className="bg-white/5 p-6 rounded-2xl border border-black/5 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5 hover:bg-white/10 hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-sm md:text-base text-black">
                     {feature.title}
                    </h4>
                    <p className="text-xs text-black/60 leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Services */}
        <div className="border-t border-black/10 pt-16 mt-16">
          <div className="text-center space-y-2 mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-black">
              Our Services
            </h3>
            <p className="text-sm text-black/60 max-w-lg mx-auto">
              Professional travel solutions designed for comfort, flexibility, and authentic Ethiopian experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service}
                id={`about-service-${index + 1}`}
                className="glass p-6 rounded-2xl border border-black/10 shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-black leading-snug">
                    {service}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





