import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Tours from './components/Tours';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Vlog from './components/Vlog';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { TourPackage } from './types';

export default function App() {
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'cookie' | 'copyright' | 'credits' | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string, offset = 80) => {
    const el = document.getElementById(id);
    if (el) {
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

  // Nav actions
  const handleBookNowNavbar = () => {
    setShowBookingModal(true);
  };

  // Hero actions
  const handleExploreToursHero = () => {
    scrollToSection('tours');
  };

  const handleBookTripHero = () => {
    setShowBookingModal(true);
  };

  // Destinations planning trigger
  const handlePlanTripDestination = (destinationName: string) => {
    setSelectedPkg(null);
    setShowBookingModal(true);
  };

  // Selection callback from Tour cards
  const handleBookPackage = (pkg: TourPackage) => {
    setSelectedPkg(pkg);
    setShowBookingModal(true);
  };

  // Legal footer triggers
  const handleOpenLegal = (type: 'privacy' | 'terms' | 'cookie' | 'copyright' | 'credits') => {
    setLegalType(type);
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-[#FF7A00]/30 font-sans antialiased text-left">
      {/* 1. Header Navigation */}
      <Navbar onBookNowClick={handleBookNowNavbar} />

      {/* 2. Hero landing */}
      <Hero
        onExploreToursClick={handleExploreToursHero}
        onBookTripClick={handleBookTripHero}
      />

      {/* 3. Company Story, Mission & Vision */}
      <About />

      {/* 4. Natural & Historical Destinations */}
      <Destinations onPlanTripClick={handlePlanTripDestination} />

      {/* 5. Signature Tour Packages list */}
      <Tours 
        onBookPackageClick={handleBookPackage} 
        onRequestCustomClick={() => setShowBookingModal(true)}
      />

      {/* 6. Traditional Ceremonies & Festivals */}
      <Events onInquireEventClick={() => setShowBookingModal(true)} />

      {/* 7. Scenic Lightbox Gallery */}
      <Gallery />

      {/* 8. Expert Travel Guides Journal */}
      <Blog />

      {/* 9. Experience Vlog Streaming */}
      <Vlog />

      {/* 10. Multi-fader Testimonials */}
      <Testimonials />

      {/* 11. Multi-field Booking Form */}
      <BookingForm 
        selectedPackage={selectedPkg} 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)}
      />

      {/* 12. Office Detail & Contact directions maps */}
      <Contact />

      {/* 13. Responsive Dark Footer */}
      <Footer onLegalClick={handleOpenLegal} />

      {/* 14. Dialogue Clause overlays */}
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
}





