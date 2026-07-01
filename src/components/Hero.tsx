import React, { useState } from 'react';
import { Play, Calendar, Eye, Compass, ArrowRight, X } from 'lucide-react';
import SocialMedia from './SocialMedia';

interface HeroProps {
  onExploreToursClick: () => void;
  onBookTripClick: () => void;
}

export default function Hero({ onExploreToursClick, onBookTripClick }: HeroProps) {
  const [showVideo, setShowVideo] = useState(true);
  const demoVideoId = 'K6FjfCuhgrY';
  const demoVideoThumbnail = `https://img.youtube.com/vi/${demoVideoId}/maxresdefault.jpg`;
  const demoVideoEmbedUrl = 'https://www.youtube.com/embed/K6FjfCuhgrY?si=rQcIfOnTsgQM_a3r&autoplay=1&mute=1';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 md:px-8 pt-32 md:pt-36 pb-20 overflow-hidden"
    >
      {/* Background Mask/Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/C.jfif"
          alt="Ethiopian Landscape and Culture Background"
          className="w-full h-full object-cover md:object-[center_58%]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Discover the Beauty of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Ethiopia
            </span> <br className="hidden sm:inline" />
            with Passe tour and travel
          </h1>

          <p className="max-w-xl text-white/85 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            Unforgettable Adventures, Cultural Experiences, and Tailor-Made Travel Packages Across Ethiopia. Walk the stone trenches of Lalibela, descend the unearthly Danakil plains, and trek wild Simien peaks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <button
              id="hero-explore-tours"
              onClick={onExploreToursClick}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/35 hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-tighter rounded-sm transition-all hover:scale-105 cursor-pointer"
            >
              Explore Tours
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              id="hero-book-now"
              onClick={onBookTripClick}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-black text-xs sm:text-sm font-bold uppercase tracking-tighter rounded-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all cursor-pointer"
            >
              Book Your Trip
              <Calendar className="w-4 h-4 text-black/80 ml-1" />
            </button>
          </div>

          <SocialMedia mode="inline" />
        </div>

        {/* Video Placeholder Box / Cinematic Trigger */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-md aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden border border-black/10 shadow-2xl p-2 bg-white/70 backdrop-blur-sm">
            <div className="absolute inset-0 m-2 rounded-[22px] overflow-hidden">
              <img
                src={demoVideoThumbnail}
                alt="Ethiopia Cinematic Tour video thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all flex items-center justify-center" />
            </div>

            {/* Pulsating Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 z-10">
              <button
                id="hero-play-promotional-video"
                onClick={() => setShowVideo(true)}
                className="w-16 h-16 rounded-full bg-primary hover:bg-primary-hover text-black flex items-center justify-center shadow-2xl shadow-primary/40 relative group cursor-pointer hover:scale-110 transition-all border-4 border-black/20"
              >
                <Play className="w-6 h-6 fill-white ml-1" />
                <span className="absolute -inset-2 rounded-full border-2 border-primary/45 animate-ping opacity-75 pointer-events-none" />
              </button>
              <span className="text-xs font-mono font-semibold tracking-widest text-white group-hover:text-white uppercase transition-colors">
                Watch Promo Reel
              </span>
            </div>

            {/* Quick Badges inside cover */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="text-[10px] font-mono font-bold bg-white/95 backdrop-blur-md border border-black/10 px-2.5 py-1 rounded-md text-primary tracking-widest uppercase">
                Vlog #1 PREVIEW
              </span>
              <span className="text-[10px] font-mono text-white tracking-wider">
                02:45 Mins
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical badges side */}
      <div className="hidden xl:flex absolute bottom-8 left-8 flex-col space-y-1 font-mono text-[10px] tracking-widest text-white/70 uppercase">
        <span>Coordinate: 9.1450 N, 38.7425 E</span>
        <span>Ethiopian Time: Phase 13 Months of Sunshine</span>
      </div>

      {/* Video Lightbox Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={() => setShowVideo(false)} />
          <div className="relative w-full max-w-4xl aspect-video bg-white border border-black/10 rounded-2xl overflow-hidden shadow-2xl z-10 m-2">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-black/5 text-black flex justify-center items-center cursor-pointer border border-black/10"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src={demoVideoEmbedUrl}
              title="Passe tour and travel Promo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}





