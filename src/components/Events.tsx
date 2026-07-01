import React from 'react';
import { EVENTS } from '../data';
import { Calendar, MapPin, Coffee, Sparkles } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            Culinary & Culture
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
            Cultural Events & Traditional Ceremonies
          </h2>
          <p className="text-sm md:text-base text-black/60 max-w-xl mx-auto font-light">
            Synchronize your stay with centuries-old festivities, smelling the holy frankincense and dancing shoulder-to-shoulder with thousands of happy locals.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EVENTS.map((evt, idx) => (
            <div
              key={evt.id}
              id={`event-card-${evt.id}`}
              className="group bg-white rounded-2xl border border-black/5 hover:border-primary/20 overflow-hidden shadow-none transition-all flex flex-col sm:flex-row"
            >
              {/* Event Image */}
              <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto bg-white overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                
                {/* Visual badge inside image */}
                <div className="absolute top-4 left-4">
                  {evt.id === 'coffee-ceremony' ? (
                    <span className="p-2 rounded-sm bg-primary text-black flex items-center justify-center shadow-lg">
                      <Coffee className="w-4 h-4 text-black" />
                    </span>
                  ) : (
                    <span className="p-2 rounded-sm bg-white/95 text-black flex items-center justify-center border border-black/15 shadow-lg">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </span>
                  )}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3 font-sans">
                  
                  {/* Meta items */}
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center gap-1.5 text-xs text-primary font-mono font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      {evt.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-black/50">
                      <MapPin className="w-3.5 h-3.5 text-black/40" />
                      {evt.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl font-bold text-black group-hover:text-primary transition-colors leading-tight">
                    {evt.name}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light line-clamp-3">
                    {evt.description}
                  </p>
                </div>

                {/* Direct action info */}
                <div className="pt-2 border-t border-black/10 flex justify-between items-center text-[10px] font-mono tracking-wider font-bold text-black/40 uppercase">
                  <span>Passe tour and travel Guided Event</span>
                  <button
                    onClick={() => {
                      const el = document.getElementById('booking');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-primary hover:underline cursor-pointer flex items-center gap-1 font-bold uppercase tracking-wider"
                  >
                    Inquire Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}





