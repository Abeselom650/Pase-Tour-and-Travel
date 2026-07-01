import React from 'react';
import { X, Shield, FileText, Settings, Copyright } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookie' | 'copyright' | 'credits' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      body: `
        At Passe tour and travel, we respect your privacy and are committed to protecting your personal data. 
        This privacy policy statement will inform you as to how we look after your personal data when you visit our website, 
        request travel booking slots, subscribe to newsletters, or write inquiry emails.
        
        1. DATA WE COLLECT
        We may collect, use, store and transfer different kinds of Personal Data about you which we have grouped together as follows:
        - Identity Data: includes first name, last name, title, gender.
        - Contact Data: includes email address, billing address, telephone numbers.
        - Transaction Data: includes details about tour choices, hotel ratings, dates of travel.
        - Usage Data: includes information about how you use our website, pages navigated, and referral links.
        
        2. HOW WE USE YOUR DATA
        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data:
        - To perform the tour booking contract we are entering into with you.
        - To contact you back in 4 working hours regarding planned flights and hotel catalogs.
        - Where it is necessary for our legitimate interests and your interests do not override those.
        
        3. DATA STORAGE SECURE STANDARDS
        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way. All records are securely hashed.
      `
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      body: `
        Welcome to Passe tour and travel. By browsing our website and booking custom expeditions, you are agreeing to comply with and be bound by the following terms and conditions of use.
        
        1. TOUR BOOKING DEPOSITS & PRICING
        - All dynamic online estimates under the "Insta-Quote Estimator" represent preliminary package calculations based on current flight/hotel tiers.
        - No deposit is required today to reserve a slot. Official contract booking paperwork and deposit schedules are finalized by email.
        - Listed prices of $1850 for Historic Route, $2100 for Northern Ethiopia, $1450 for Cultural, and $1650 for Adventure are subject to season changes and flight availability.
        
        2. TRAVELER SAFETIES & RESPONSIBILITIES
        - Extreme safaris descending into Afar (Danakil Depression) require physical fitness check confirmations and active respect for ground security escorts and natural elements.
        - Passe tour and travel provides licensed local coordinators and emergency ground help, but is not liable for flight delays or weather disruptions native to regional airlines.
        
        3. CLIENT AMENDMENTS
        - Itinerary customization and dates can be adjusted up to 14 days before arrival free of administrative penalty fees.
      `
    },
    cookie: {
      title: 'Cookie Policy',
      icon: Settings,
      body: `
        Our website uses cookie files to distinguish you from other users. This helps us to provide you with a high-fidelity browsing experience, track active booking packages selections in real-time, and improve overall content delivery.
        
        1. WHAT ARE COOKIES
        Cookies are small pieces of text files stored on your computer or mobile device when you load web domains. Use is standard across professional travel portals.
        
        2. HOW WE USE COOKIES
        We use essential cookies to:
        - Preserve selected package IDs from the Tours section as you scroll downward to fill the Booking Form.
        - Keep active video stream state inside the Vlog section.
        - Monitor user engagement trends via anonymous track cookies (e.g. Google Analytics) to improve visual density.
      `
    },
    copyright: {
      title: 'Copyright Notice',
      icon: Copyright,
      body: `
        All content, images, videos, designs, branding, and materials on this website are the property of Passe tour and travel unless otherwise stated. Unauthorized reproduction, distribution, or use of website content is prohibited without written permission.
        
        Any infringement upon our original stone carvings visual photography, custom tribal tour itineraries, custom booking form code configurations, or promotional video clips will be prosecuted under federal copyrights and global intellectual IP protocols.
        
        For inquiries regarding media partnerships, photo licensing, or academic republishing rights, please mail Abeselom at info@pasetour.com.
      `
    },
    credits: {
      title: 'Website Credits',
      icon: Copyright,
      body: `
        Website Credits
        Developed by Abeselom Beyene Yosef
        AI & Data Science Developer
        Ethiopia
        
        Pristine frontend architecture, responsive layout filters, full forms validation suites, interactive lightbox grids, dynamic video carousels, and local state integrations. Built with dedication in June 2026.
      `
    }
  };

  const selected = contentMap[type];
  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-xl rounded-sm overflow-hidden shadow-2xl border border-black/10 z-10 animate-fade-in flex flex-col max-h-[85vh]">
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-black/5 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2 text-primary">
            <Copyright className="w-5 h-5" />
            <h3 className="font-serif font-bold text-base sm:text-lg text-black">
              {selected.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-sm bg-white hover:bg-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* Content detail Body details */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="text-sm text-black/80 gap-4 leading-relaxed font-light whitespace-pre-line font-sans">
            {selected.body.trim()}
          </div>
        </div>

        {/* Action triggers bottom */}
        <div className="px-6 py-3.5 bg-white border-t border-black/5 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-primary hover:bg-[#E06B00] text-black rounded-sm text-xs font-bold font-mono cursor-pointer uppercase tracking-wider"
          >
            Acknowledge Agreement
          </button>
        </div>
      </div>
    </div>
  );
}





