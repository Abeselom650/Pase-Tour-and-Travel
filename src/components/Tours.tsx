import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../data';
import { TourPackage } from '../types';
import { Calendar, Tag, ArrowRight, DollarSign, Check } from 'lucide-react';

interface ToursProps {
  onBookPackageClick: (pkg: TourPackage) => void;
}

export default function Tours({ onBookPackageClick }: ToursProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cultural & History', 'Adventure & History', 'Tribal & Heritage', 'Extreme Adventure', 'Culinary & Agro'];

  const filteredPackages = activeCategory === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter(p => p.category === activeCategory);

  return (
    <section id="tours" className="py-24 bg-white border-t border-black/5 text-black px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            Signature Journeys
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
            Curated Tours & Travel Packages
          </h2>
          <p className="text-sm md:text-base text-black/60 max-w-xl mx-auto font-light">
            Crafted for safety, depth, and adventure. Explore our best-selling programs with all domestic flights, drivers, meals, and luxury hotels arranged.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Tab Control */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-tighter transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary text-black shadow-xl shadow-primary/10 scale-105'
                  : 'bg-white/5 text-black/50 hover:text-black hover:bg-[#222222] border border-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-2xl flex flex-col md:flex-row hover:border-primary/20 transition-all group"
            >
              {/* Photo Area with visual stickers */}
              <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto min-h-[220px] bg-white overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-neutral-900 via-transparent to-transparent opacity-60" />

                {/* Duration Tag */}
                <span className="absolute top-4 left-4 bg-primary text-black text-[10px] font-bold px-3 py-1.5 rounded-sm inline-flex items-center gap-1 shadow-md uppercase tracking-tighter">
                  <Calendar className="w-3.5 h-3.5 text-black" />
                  {pkg.duration}
                </span>

                {/* Price Display Tag */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md border border-black/15 p-2 rounded-sm">
                  <span className="block text-[8px] font-mono tracking-widest text-black/50 uppercase leading-none">
                    Rates From
                  </span>
                  <span className="text-lg font-bold text-primary font-mono block mt-1">
                    ${pkg.price}
                    <span className="text-[10px] text-black/90 font-normal"> /prs</span>
                  </span>
                </div>
              </div>

              {/* Text Information Section */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono text-primary font-bold">
                    <Tag className="w-3 h-3" />
                    {pkg.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-black group-hover:text-primary transition-colors leading-tight">
                    {pkg.name}
                  </h3>
                </div>

                {/* Highlights List */}
                <div className="space-y-2">
                  <span className="block text-[9px] font-mono tracking-widest text-black/40 uppercase">
                    Package Inclusions
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 leading-tight">
                        <span className="w-4 h-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className="text-[11px] md:text-xs text-black/80 font-light truncate">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action button */}
                <div className="pt-2">
                  <button
                    id={`book-package-${pkg.id}`}
                    onClick={() => onBookPackageClick(pkg)}
                    className="w-full py-3 bg-primary hover:bg-primary-hover text-black text-xs sm:text-sm font-bold uppercase tracking-tighter rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customized Booking Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-transparent border border-black/10 rounded-2xl p-8 text-center max-w-4xl mx-auto space-y-4">
          <h4 className="font-serif text-lg sm:text-2xl font-bold text-black">
            Need a fully bespoke, customized itinerary?
          </h4>
          <p className="text-xs sm:text-sm text-black/60 max-w-2xl mx-auto leading-relaxed font-light">
            Our master travel planners can customize hotel tiers, schedule special family services, modify arrival timelines, and coordinate extreme safaris. Just contact us to tailor a specific program.
          </p>
          <button
            id="tours-custom-itinerary"
            onClick={() => {
              const el = document.getElementById('booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-black text-xs sm:text-sm font-bold uppercase tracking-tighter rounded-sm hover:scale-105 transition-transform cursor-pointer"
          >
            Request Custom Tour
          </button>
        </div>

      </div>
    </section>
  );
}





