import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
    }, 5500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-black/5 px-4 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative">
        
        {/* Header */}
        <div className="space-y-3 mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            Client Voices
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
            What Our Travelers Say
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Testimonials Main Slider Box */}
        <div
          id="testimonial-slider-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-white rounded-2xl p-8 sm:p-12 shadow-none border border-black/5 max-w-3xl mx-auto"
        >
          {/* Big quotes icon background */}
          <div className="absolute top-6 left-6 text-black/5 font-serif select-none pointer-events-none">
            <Quote className="w-16 h-16 opacity-35" />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, idx) => (
                <Star key={idx} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>

            {/* Quote Body */}
            <blockquote className="font-serif text-sm sm:text-base md:text-lg text-black/80 italic leading-relaxed text-center font-light">
              "{TESTIMONIALS[currentIndex].review}"
            </blockquote>

            {/* Profile Avatar & Metadata */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-14 h-14 rounded-full border-2 border-primary/25 overflow-hidden shadow-lg">
                <img
                  src={TESTIMONIALS[currentIndex].image}
                  alt={TESTIMONIALS[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <cite className="not-italic font-bold text-sm sm:text-base text-black block leading-tight">
                  {TESTIMONIALS[currentIndex].name}
                </cite>
                <span className="text-[10px] sm:text-xs font-mono text-primary tracking-widest uppercase font-bold mt-1 block">
                  {TESTIMONIALS[currentIndex].country}
                </span>
              </div>
            </div>
          </div>

          {/* Carousel Left/Right Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-6 right-2 sm:-right-6 flex justify-between pointer-events-none">
            <button
              id="testimonial-prev"
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-white border border-black/10 hover:bg-primary hover:text-black shadow-lg text-black flex items-center justify-center transition-all cursor-pointer pointer-events-auto hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testimonial-next"
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-white border border-black/10 hover:bg-primary hover:text-black shadow-lg text-black flex items-center justify-center transition-all cursor-pointer pointer-events-auto hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators Dots */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3.5 h-1.5 rounded-full transition-all cursor-pointer ${
                index === currentIndex
                  ? 'bg-primary w-6'
                  : 'bg-white/15 hover:bg-white/30'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}





