import React, { useState } from 'react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';
import { Star, MapPin, CheckCircle, X, ChevronRight } from 'lucide-react';

interface DestinationsProps {
  onPlanTripClick: (destinationName: string) => void;
}

export default function Destinations({ onPlanTripClick }: DestinationsProps) {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="py-24 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            Ethiopia's Wonders
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
            Featured Destinations
          </h2>
          <p className="text-sm md:text-base text-black/60 max-w-xl mx-auto font-light">
            Walk among mountains and civilizations that shaped time itself. These destinations are packed with stories, beauty, and ancient secrets.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              id={`destination-card-${dest.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-primary/30 shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative aspect-[3/2] overflow-hidden bg-white">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                
                {/* Location overlay badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-black border border-black/10">
                  <MapPin className="w-3 h-3 text-primary" />
                  {dest.location}
                </span>

                {/* Rating Badge */}
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-black border border-black/10">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                  {dest.rating.toFixed(1)}
                </span>
              </div>

              {/* Text / Body Section */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg md:text-xl text-black leading-tight group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light line-clamp-3">
                    {dest.description}
                  </p>
                </div>

                {/* Bullet Points Highlights */}
                <div className="pt-2 border-t border-black/5">
                  <span className="block text-[10px] font-mono font-bold uppercase text-black/40 tracking-wider mb-2">
                    Key Highlights
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {dest.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="inline-flex items-center gap-1 text-[11px] text-black/70 font-medium">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Grid */}
                <div className="flex gap-2.5 pt-4">
                  <button
                    id={`dest-view-${dest.id}`}
                    onClick={() => setSelectedDest(dest)}
                    className="flex-1 py-2.5 border border-black/10 hover:border-primary/55 text-black/80 hover:text-primary font-bold text-xs rounded-sm transition-all cursor-pointer text-center"
                  >
                    View Details
                  </button>
                  <button
                    id={`dest-plan-${dest.id}`}
                    onClick={() => onPlanTripClick(dest.name)}
                    className="flex-1 py-2.5 bg-primary hover:bg-primary-hover text-black font-bold text-xs rounded-sm shadow-md shadow-primary/10 hover:scale-[1.03] transition-all cursor-pointer text-center"
                  >
                    Plan Travel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Detail Lightbox / Drawer */}
      {selectedDest && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={() => setSelectedDest(null)} />
          
          <div className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-black/10 z-10 animate-fade-in flex flex-col max-h-[90vh]">
            {/* Header image */}
            <div className="relative h-64 sm:h-80 bg-white">
              <img
                src={selectedDest.image}
                alt={selectedDest.name}
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 hover:bg-black/5 text-black flex items-center justify-center border border-black/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-black space-y-1">
                <span className="inline-flex items-center gap-1 bg-primary text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-sm uppercase text-black">
                  Featured Wonder
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  {selectedDest.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-black/80">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {selectedDest.location}
                </span>
              </div>
            </div>

            {/* Content Drawer Scrollable */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div className="space-y-2">
                <h4 className="font-mono font-bold text-xs text-black/45 uppercase tracking-widest">
                  About the Destination
                </h4>
                <p className="text-sm text-black/70 leading-relaxed font-light">
                  {selectedDest.description}
                </p>
              </div>

              {/* Complete Highlights Grid */}
              <div className="space-y-3">
                <h4 className="font-mono font-bold text-xs text-black/45 uppercase tracking-widest">
                  Key Experiences with Passe tour and travel
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDest.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-black/5">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-black/80 font-medium leading-normal">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Call to Action */}
              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row gap-3">
                <button
                  id="dest-modal-close"
                  onClick={() => setSelectedDest(null)}
                  className="flex-1 py-3 text-center text-sm font-bold border border-black/10 hover:bg-white/5 rounded-sm transition-all text-black cursor-pointer"
                >
                  Close Details
                </button>
                <button
                  id="dest-modal-book"
                  onClick={() => {
                    const name = selectedDest.name;
                    setSelectedDest(null);
                    onPlanTripClick(name);
                  }}
                  className="flex-1 py-3 bg-primary hover:bg-primary-hover text-black text-center text-sm font-bold rounded-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  Book package for {selectedDest.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}





