import React, { useState } from 'react';
import { MessageSquare, MessageCircle, Facebook, Instagram, Video, Youtube, Send, Linkedin, Twitter, Share2, Sparkles, X } from 'lucide-react';

interface SocialMediaProps {
  mode?: 'floating' | 'inline';
}

export default function SocialMedia({ mode = 'floating' }: SocialMediaProps) {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showFullMenu, setShowFullMenu] = useState(false);

  const socialProfiles = [
    { name: 'WhatsApp', href: 'https://wa.me/251970726625', icon: MessageCircle, color: 'bg-[#FF7A00]' },
    { name: 'Telegram', href: 'https://t.me/pasetourandtravel', icon: Send, color: 'bg-[#E06B00]' },
    { name: 'Instagram', href: 'https://instagram.com/Passe_tour_travel', icon: Instagram, color: 'bg-[#CC6200]' },
    { name: 'Facebook', href: 'https://facebook.com/Passe_tour_travel', icon: Facebook, color: 'bg-[#FF8A1A]' },
    { name: 'TikTok', href: 'https://tiktok.com/@passetoor', icon: Video, color: 'bg-white' },
    { name: 'YouTube', href: 'https://youtube.com/pasetour', icon: Youtube, color: 'bg-[#FF7A00]' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/pasetour', icon: Linkedin, color: 'bg-[#D86A00]' },
    { name: 'X (Twitter)', href: 'https://x.com/pasetour', icon: Twitter, color: 'bg-[#F28C28]' },
  ];

  if (mode === 'inline') {
    return (
      <div className="w-full flex flex-wrap items-center gap-2.5 pt-2">
        {socialProfiles.map((profile) => {
          const Icon = profile.icon;
          return (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              title={profile.name}
              className="w-9 h-9 rounded-sm bg-black/25 border border-white/30 hover:bg-primary hover:text-black text-white transition-all flex items-center justify-center"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <>
      {/* 1. FIXED WHATSAPP FLOATING BUTTON (Highly visible, bottom-right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Responsive pulse WhatsApp Tooltip */}
        {showTooltip && (
          <div className="relative bg-white text-black font-sans border border-black/10 rounded-sm p-3 shadow-2xl max-w-[200px] text-right space-y-1.5 animate-bounce pointer-events-auto">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1 right-2 w-4 h-4 text-black/40 hover:text-black font-bold text-[10px] flex items-center justify-center cursor-pointer"
            >
              x
            </button>
            <span className="block text-[10px] font-mono uppercase font-black text-primary tracking-widest leading-none">
              Passe tour and travel Support
            </span>
            <p className="text-[11px] leading-tight text-black/60 font-light font-sans">
              Chat on WhatsApp for fast booking help!
            </p>
          </div>
        )}

        {/* WhatsApp Ring pulsing button */}
        <a
          id="floating-whatsapp-chat"
          href="https://wa.me/251970726625"
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#FF7A00] text-black flex items-center justify-center shadow-2xl pointer-events-auto hover:scale-110 active:scale-95 transition-transform relative group border-4 border-black/10"
        >
          <MessageSquare className="w-7 h-7 fill-white text-[#FF7A00]" />
          <span className="absolute -inset-1.5 rounded-full border border-[#FF7A00]/40 animate-ping opacity-75 pointer-events-none" />
        </a>
      </div>

      {/* 2. PERSISTENT LEFT SOCIAL RAIL (Desktop Side, retractable on Mobile) */}
      <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 items-center">
        <div className="bg-white/90 backdrop-blur-md border border-black/5 p-2 rounded-sm flex flex-row gap-1.5 shadow-2xl">
          {socialProfiles.slice(1).map((profile) => {
            const Icon = profile.icon;
            return (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                title={profile.name}
                className="w-9 h-9 rounded-sm hover:bg-primary text-black hover:text-black flex items-center justify-center transition-all bg-white/5 cursor-pointer hover:scale-105"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* 3. MOBILE SPECIAL QUICK PANEL (Bottom-left trigger) */}
      <div className="lg:hidden fixed bottom-6 left-6 z-40">
        <button
          id="mobile-social-drawer-toggle"
          onClick={() => setShowFullMenu(!showFullMenu)}
          className="w-12 h-12 rounded-sm bg-white/95 backdrop-blur-md text-black border border-black/10 flex items-center justify-center shadow-xl cursor-pointer"
        >
          {showFullMenu ? <X className="w-5 h-5 text-primary" /> : <Share2 className="w-5 h-5 text-primary" />}
        </button>

        {/* Collapsible Mobile Quick Circle */}
        {showFullMenu && (
          <div className="absolute bottom-14 left-0 bg-white/95 backdrop-blur-lg border border-black/10 p-3 rounded-sm flex flex-row flex-wrap gap-2 shadow-2xl min-w-[220px] animate-fade-in">
            <span className="w-full text-[8px] font-mono tracking-widest text-[#FF7A00] font-black uppercase text-center border-b border-black/5 pb-1 block">
              Follow Passe tour and travel
            </span>
            {socialProfiles.map((sm, i) => {
              const Icon = sm.icon;
              return (
                <a
                  key={i}
                  href={sm.href}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  title={sm.name}
                  className="w-8 h-8 rounded-sm hover:bg-white/5 text-black hover:text-black transition-colors cursor-pointer flex items-center justify-center"
                >
                  <span className={`w-6 h-6 rounded-sm flex items-center justify-center text-black ${sm.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}





