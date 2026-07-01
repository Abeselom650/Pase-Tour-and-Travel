import React, { useState } from 'react';
import { Compass, Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Facebook, Instagram, Video, Youtube, Linkedin, Twitter, ArrowRight } from 'lucide-react';

interface FooterProps {
  onLegalClick: (type: 'privacy' | 'terms' | 'cookie' | 'copyright' | 'credits') => void;
}

export default function Footer({ onLegalClick }: FooterProps) {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      setTimeout(() => setError(''), 4000);
      return;
    }
    setSuccess(true);
    setEmail('');
    setTimeout(() => setSuccess(false), 5000);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/251911234567', icon: MessageCircle },
    { name: 'Telegram', href: 'https://t.me/pasetourandtravel', icon: Send },
    { name: 'Instagram', href: 'https://instagram.com/pasetour', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/pasetour', icon: Facebook },
    { name: 'TikTok', href: 'https://tiktok.com/@pasetour', icon: Video },
    { name: 'YouTube', href: 'https://youtube.com/pasetour', icon: Youtube },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/pasetour', icon: Linkedin },
    { name: 'X (Twitter)', href: 'https://x.com/pasetour', icon: Twitter },
  ];

  return (
    <footer className="bg-white text-black pt-20 pb-12 border-t border-black/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-10 mb-16">
          
          {/* Column 1: Company info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center font-bold text-black shadow-lg">
                <Compass className="w-5 h-5 text-black animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-black tracking-wide leading-none">
                  Passe
                </span>
                <span className="text-[10px] text-primary tracking-widest font-mono font-bold uppercase leading-none mt-1">
                  tour and travel
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed max-w-sm font-sans">
              Discover the raw spiritual power of the Horn of Africa. We specialize in custom group pilgrimages, extreme geological safaris, and coffee harvesting trails across Ethiopia.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((sm, i) => {
                const Icon = sm.icon;
                return (
                  <a
                    key={i}
                    href={sm.href}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    title={sm.name}
                    className="w-8 h-8 rounded-sm bg-white hover:bg-primary text-black hover:text-black flex items-center justify-center transition-colors cursor-pointer border border-black/5 hover:scale-105"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-[#FF7A00]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-black/60 font-light font-sans">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Destinations', id: 'destinations' },
                { name: 'Tours', id: 'tours' },
                { name: 'Events', id: 'events' },
                { name: 'Blog', id: 'blog' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="hover:text-primary hover:translate-x-1 transition-all block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-[#FF7A00]">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-black/60 font-light font-sans">
              <li className="flex gap-2.5 items-start leading-snug">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Bole Road, Imperial Building, Office 304, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex gap-2.5 items-center leading-snug">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-mono text-black">+251 911 234 567</span>
              </li>
              <li className="flex gap-2.5 items-center leading-snug">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-black">info@pasetour.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-[#FF7A00]">
              Newsletter
            </h4>
            <p className="text-xs text-black/50 leading-normal font-light font-sans">
              Subscribe to stay updated with monthly discount packages, seasonal festival dates, and hiking tips.
            </p>

            {success ? (
              <div className="bg-primary/10 border border-primary/20 p-3 rounded-sm flex items-center gap-2 text-primary text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscription dispatching successful!</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <form onSubmit={handleSubscribe} className="flex gap-1.5 p-1 bg-white border border-black/10 rounded-sm overflow-hidden focus-within:border-primary transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="bg-transparent text-xs px-3 py-2 w-full focus:outline-none text-black font-mono"
                    required
                  />
                  <button
                    type="submit"
                    title="Subscribe button"
                    className="bg-primary hover:bg-[#E06B00] hover:scale-105 p-2 rounded-sm text-black transition-all cursor-pointer flex-shrink-0"
                  >
                    <Send className="w-3.5 h-3.5 text-black" />
                  </button>
                </form>
                {error && <span className="text-[10px] text-orange-500 block font-sans">{error}</span>}
              </div>
            )}
          </div>

        </div>

        {/* Website Credits Dedicated Section */}
        <div className="border-t border-black/5 pt-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-xs font-light text-black/60">
          
          {/* Credits item */}
          <div className="bg-white border border-black/5 rounded-sm p-5 space-y-2 text-left">
            <h5 className="font-serif font-bold text-black tracking-wide">
              Website Credits
            </h5>
            <div className="text-[11px] leading-relaxed font-sans">
              <p className="font-semibold text-primary">Developed by Abeselom Beyene Yosef</p>
              <p className="text-black">AI & Data Science Developer</p>
              <p className="text-black/60 mt-1">Ethiopia</p>
            </div>
            <button
              onClick={() => onLegalClick('credits')}
              className="text-[10px] text-primary hover:underline cursor-pointer block pt-1 font-mono font-bold"
            >
              View Developer Sheet
            </button>
          </div>

          {/* Legal statement block */}
          <div className="md:col-span-2 space-y-2 text-left bg-white border border-black/5 rounded-sm p-5">
            <h5 className="font-serif font-bold text-black tracking-wide">
              Copyright Notice & Protection
            </h5>
            <p className="text-[11px] text-black/50 leading-relaxed font-light font-sans">
              All content, images, videos, designs, branding, and materials on this website are the property of Passe tour and travel unless otherwise stated. Unauthorized reproduction, distribution, or use of website content is prohibited without written permission.
            </p>
          </div>
        </div>

        {/* Dynamic Legal and Copyright Links Strip */}
        <div className="border-t border-black/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <div className="space-y-1">
            {/* EXACT TEXT REQUIRED BY PROMPT */}
            <p className="text-xs text-black/60 font-medium">
              Â© 2026 Passe tour and travel. All Rights Reserved.
            </p>
            <p className="text-[11px] text-black/60">
              Designed and Developed by Abeselom Beyene Yosef â€“ AI & Data Science Developer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] sm:text-xs font-medium text-black/60">
            <button onClick={() => onLegalClick('privacy')} className="hover:text-primary cursor-pointer">
              Privacy Policy
            </button>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <button onClick={() => onLegalClick('terms')} className="hover:text-primary cursor-pointer">
              Terms & Conditions
            </button>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <button onClick={() => onLegalClick('cookie')} className="hover:text-primary cursor-pointer">
              Cookie Policy
            </button>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <button onClick={() => onLegalClick('copyright')} className="hover:text-primary cursor-pointer">
              Intellectual Notice
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}





