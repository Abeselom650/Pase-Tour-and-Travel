import React, { useState, useEffect } from 'react';
import { Menu, X, Map, Calendar, Compass, Phone } from 'lucide-react';

interface NavbarProps {
  onBookNowClick: () => void;
}

export default function Navbar({ onBookNowClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Destinations', href: '#destinations', id: 'destinations' },
    { name: 'Tours & Packages', href: '#tours', id: 'tours' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Travel Blog', href: '#blog', id: 'blog' },
    { name: 'Vlog', href: '#vlog', id: 'vlog' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link tracking
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-black/90 via-black/80 to-black/70 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-gradient-to-r from-black/90 via-black/80 to-black/70 backdrop-blur-md shadow-lg border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, 'home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-black shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-black animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wide leading-none text-white">
                Passe
              </span>
              <span className="text-[10px] text-primary tracking-widest font-mono font-bold uppercase leading-none mt-1">
                tour and travel
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <div className="flex items-center gap-1 xl:gap-2 mr-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors relative ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary" />
                  )}
                </a>
              ))}
            </div>
            <button
              id="nav-book-now"
              onClick={onBookNowClick}
              className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-black text-xs xl:text-sm font-bold uppercase tracking-tighter rounded-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg transition-colors focus:outline-none text-white hover:text-white hover:bg-white/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } bg-black/95 border-t border-white/10`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.id)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-primary/20 text-primary border-l-4 border-primary'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <button
              id="mobile-nav-book-now"
              onClick={() => {
                setIsOpen(false);
                onBookNowClick();
              }}
              className="w-full py-3 bg-primary hover:bg-primary-hover text-black text-center font-bold uppercase tracking-tighter rounded-sm shadow-lg shadow-primary/25 cursor-pointer block"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}





