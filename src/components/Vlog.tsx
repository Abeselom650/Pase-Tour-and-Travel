import React, { useState } from 'react';
import { VLOGS } from '../data';
import { Play, Tv, Share2, Heart, MessageCircle, Check } from 'lucide-react';

export default function Vlog() {
  const [activeVlog, setActiveVlog] = useState(VLOGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectVlog = (vlog: typeof VLOGS[0]) => {
    setActiveVlog(vlog);
    setIsPlaying(false);
  };

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <section id="vlog" className="py-24 bg-white text-black px-4 md:px-8 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase inline-flex items-center gap-1.5">
            <Tv className="w-3.5 h-3.5 animate-pulse" />
            Vlog Channel
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
            Cinematic Ethiopia: Our Travel Vlog
          </h2>
          <p className="text-sm md:text-base text-black/60 max-w-xl mx-auto font-light">
            Vibe with our travelers. Click and view real video reports showcasing tour setups, extreme routes, and traditional family visits.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Vlog Grid - Large Cinema Screen on left, listing on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Active Cinema Screen */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-black/5 p-2 shadow-2xl">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-white">
              
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src={`${activeVlog.videoUrl}&autoplay=1`}
                  title={activeVlog.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={activeVlog.thumbnailUrl}
                    alt={activeVlog.title}
                    className="w-full h-full object-cover filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-white/40 flex items-center justify-center transition-all">
                    
                    {/* Circle Pulse Play button */}
                    <button
                      id="vlog-play-player"
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-primary hover:bg-primary-hover text-black flex items-center justify-center shadow-2xl shadow-primary/40 group/btn hover:scale-110 transition-transform cursor-pointer border-4 border-black/25"
                    >
                      <Play className="w-8 h-8 fill-black ml-1 group-hover/btn:scale-105 transition-transform text-black" />
                      <span className="absolute -inset-2 rounded-full border border-primary/45 animate-ping opacity-75 pointer-events-none" />
                    </button>

                  </div>
                </>
              )}
            </div>

            {/* Cinema Text Description below video */}
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#FF7A00] uppercase font-bold bg-[#FF7A00]/10 border border-[#FF7A00]/20 px-2.5 py-1 rounded-sm">
                  Now Playing
                </span>
                <div className="flex gap-4 text-xs text-black/55">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" /> 1.2k
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> 84
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-lg md:text-2xl font-bold text-black leading-tight">
                {activeVlog.title}
              </h3>
              <p className="text-xs md:text-sm text-black/70 font-light leading-relaxed font-sans">
                {activeVlog.description}
              </p>
            </div>
          </div>

          {/* Sidebar Playlist Listing */}
          <div className="lg:col-span-4 flex flex-col justify-start bg-white border border-black/5 p-6 rounded-2xl space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-black/80 font-bold border-b border-black/10 pb-3">
              Vlog Playlist ({VLOGS.length} Episodes)
            </h4>

            <div className="space-y-4 overflow-y-auto max-h-[460px] pr-1">
              {VLOGS.map((item) => {
                const isActive = item.id === activeVlog.id;
                return (
                  <div
                    key={item.id}
                    id={`vlog-thumb-${item.id}`}
                    onClick={() => selectVlog(item)}
                    className={`group flex gap-3 p-3 rounded-xl cursor-pointer border transition-all ${
                      isActive
                        ? 'bg-[#FF7A00]/15 border-[#FF7A00]'
                        : 'bg-white/40 border-black/5 hover:bg-black/5 hover:border-black/10'
                    }`}
                  >
                    {/* Small thumbnail */}
                    <div className="relative w-24 h-16 rounded-md overflow-hidden bg-black/5 flex-shrink-0 border border-black/5">
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        className="w-full h-full object-cover filter brightness-80 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-white/45">
                        <Play className="w-3 h-3 fill-white text-black" />
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 flex flex-col justify-center overflow-hidden">
                      <h5 className={`text-xs font-bold leading-snug truncate ${isActive ? 'text-[#FF7A00]' : 'text-black'}`}>
                        {item.title}
                      </h5>
                      <p className="text-[10px] text-black/50 leading-normal line-clamp-2 mt-0.5 font-light">
                        {item.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Quick Share option */}
            <div className="border-t border-black/10 pt-4 flex items-center justify-between text-xs font-mono text-black/40">
              <span className="uppercase tracking-widest text-[9px]">Passe tour and travel Vlog Channel</span>
              <button
                id="vlog-share-button"
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-primary hover:underline cursor-pointer font-bold"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-orange-500" /> Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" /> Share Link
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}





