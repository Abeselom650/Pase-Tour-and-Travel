import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../data';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
    }
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-24 bg-white border-y border-black/5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase inline-flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5" />
            Visual Explorer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
            Pristine Ethiopia Gallery
          </h2>
          <p className="text-sm md:text-base text-black/60 max-w-xl mx-auto font-light">
            Capture the moments and colors of our landscapes. Click on any picture to view inside the interactive gallery lightbox.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Bento/Vibrant Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {GALLERY_IMAGES.map((img, index) => {
            // Creative column spanning for some specific photos
            const isWide = index === 0 || index === 4;
            const isTall = index === 2 || index === 7 || index === 9 || index === 13 || index === 14;

            return (
              <div
                key={index}
                id={`gallery-item-${index + 1}`}
                onClick={() => setLightboxIndex(index)}
                className={`group relative rounded-2xl overflow-hidden bg-white aspect-[4/3] ${
                  isWide ? 'sm:col-span-2' : ''
                } ${
                  isTall ? 'sm:row-span-2 sm:aspect-[3/4]' : ''
                } shadow-sm hover:shadow-xl border border-black/5 cursor-pointer`}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                
                {/* Visual hover overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[9px] font-mono font-bold tracking-widest text-primary uppercase mb-1">
                        Ethiopian Expedition
                      </span>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-white leading-tight">
                        {img.caption}
                      </h4>
                    </div>
                    <span className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-black scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4 text-black" />
                    </span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-sm border border-black/10 opacity-60 group-hover:opacity-0 transition-opacity flex items-center justify-center">
                  <span className="text-[9px] font-mono tracking-wider font-semibold text-black">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center p-4">
          
          {/* Close Backdrop Click trigger */}
          <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

          {/* Top Panel */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-black z-25">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-widest text-primary uppercase">
                Passe tour and travel Gallery Explorer
              </span>
              <span className="text-xs text-black/50">
                Photo {lightboxIndex + 1} of {GALLERY_IMAGES.length}
              </span>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-sm bg-white/5 hover:bg-black/5 text-black flex items-center justify-center border border-black/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual Carousel with Controls */}
          <div className="relative w-full max-w-5xl max-h-[75vh] flex justify-center items-center z-10">
            {/* Left Control */}
            <button
              id="lightbox-prev"
              onClick={handlePrev}
              className="absolute -left-4 sm:left-4 z-20 w-12 h-12 rounded-sm bg-white/95 hover:bg-primary text-black hover:text-black flex items-center justify-center border border-black/10 cursor-pointer hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Render Image */}
            <div className="relative overflow-hidden rounded-2xl border border-black/10 max-w-full max-h-[75vh] shadow-2xl">
              <img
                src={GALLERY_IMAGES[lightboxIndex].url}
                alt={GALLERY_IMAGES[lightboxIndex].caption}
                className="max-w-full max-h-[70vh] object-contain rounded-xl select-none filter brightness-95"
              />
            </div>

            {/* Right Control */}
            <button
              id="lightbox-next"
              onClick={handleNext}
              className="absolute -right-4 sm:right-4 z-20 w-12 h-12 rounded-sm bg-white/95 hover:bg-primary text-black hover:text-black flex items-center justify-center border border-black/10 cursor-pointer hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Box */}
          <div className="relative z-10 text-center text-black mt-6 max-w-xl px-4 space-y-1">
            <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide">
              {GALLERY_IMAGES[lightboxIndex].caption}
            </h3>
            <p className="text-xs text-black/50 font-light max-w-md mx-auto leading-relaxed">
              Experience the deep spiritual force, incredible textures, and authentic memories of Ethiopia.
            </p>
          </div>

        </div>
      )}
    </section>
  );
}





