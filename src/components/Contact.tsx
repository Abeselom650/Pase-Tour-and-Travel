import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { ContactData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Partial<Record<keyof ContactData, string>> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Please enter your name';
    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject line is required';
    if (!formData.message.trim()) tempErrors.message = 'Please write a message';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white border-y border-black/5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase inline-flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            Connect
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
            Get In Touch with Us
          </h2>
          <p className="text-sm md:text-base text-black/60 max-w-xl mx-auto font-light font-sans">
            Have questions about tour configurations, flight inclusions, or custom safety protocols? Write to Abeselom Beyene Yosef and the team directly.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Contact info cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Card Info items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-4 gap-4">
            
            <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-3">
              <span className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </span>
              <h4 className="font-bold text-sm text-black uppercase tracking-wider">
                Office Address
              </h4>
              <p className="text-xs text-black/60 leading-relaxed font-light font-sans">
                Bole Road, Imperial Building, <br />
                Office 304, Addis Ababa, <br />
                Ethiopia
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-3">
              <span className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </span>
              <h4 className="font-bold text-sm text-black uppercase tracking-wider">
                Direct Hotline
              </h4>
              <p className="text-xs text-black/50 leading-relaxed font-mono font-light">
                +251 911 234 567 <br />
                +251 908 987 654
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-3">
              <span className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </span>
              <h4 className="font-bold text-sm text-black uppercase tracking-wider">
                Email Communications
              </h4>
              <p className="text-xs text-black/60 leading-relaxed font-light font-sans">
                info@pasetour.com <br />
                bookings@pasetour.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-3">
              <span className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Clock className="w-5 h-5" />
              </span>
              <h4 className="font-bold text-sm text-black uppercase tracking-wider">
                Office Business Hours
              </h4>
              <p className="text-xs text-black/50 leading-relaxed font-light font-sans">
                Monday - Saturday <br />
                8:30 AM - 6:00 PM <br />
                (UTC+3 East Africa Time)
              </p>
            </div>

          </div>

          {/* Form Area */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-black/5 shadow-inner">
            
            {submitSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-primary mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-lg text-black font-serif">Message Sent Safely!</h4>
                  <p className="text-xs text-black/60 max-w-sm mx-auto font-light leading-normal">
                    Thank you. Your message has been received. Abeselom and the operations team will contact you back inside 4 working hours.
                  </p>
                </div>
                <button
                  id="contact-form-reset"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-5 py-2 bg-primary hover:bg-primary-hover text-black rounded-sm text-xs font-bold uppercase tracking-tighter cursor-pointer"
                >
                  Write Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-fullName" className="text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">My Name *</label>
                    <input
                      id="contact-fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Abeselom Beyene Yosef"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.fullName ? 'border-orange-500 focus:ring-orange-500' : 'border-black/10 focus:ring-primary'
                      } rounded-sm text-sm focus:outline-none focus:ring-1 text-black`}
                    />
                    {errors.fullName && <span className="text-[10px] text-orange-500 block">{errors.fullName}</span>}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-email" className="text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">My Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. abeselom@gmail.com"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.email ? 'border-orange-500' : 'border-black/10 focus:ring-primary'
                      } rounded-sm text-sm focus:outline-none focus:ring-1 text-black`}
                    />
                    {errors.email && <span className="text-[10px] text-orange-500 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-subject" className="text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">Subject of Inquiry *</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Family Safari Inclusions, Hotel Tier Upgrades"
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.subject ? 'border-orange-500' : 'border-black/10 focus:ring-primary'
                    } rounded-sm text-sm focus:outline-none focus:ring-1 text-black`}
                  />
                  {errors.subject && <span className="text-[10px] text-orange-500 block">{errors.subject}</span>}
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-message" className="text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">Message / Inquiry Details *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please write down what you wish to ask..."
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.message ? 'border-orange-500' : 'border-black/10 focus:ring-primary'
                    } rounded-sm text-sm focus:outline-none focus:ring-1 text-black resize-none`}
                  />
                  {errors.message && <span className="text-[10px] text-orange-500 block">{errors.message}</span>}
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-[#E06B00] text-black text-xs sm:text-sm font-bold uppercase tracking-tighter rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex h-3.5 w-3.5 rounded-full border-2 border-black border-t-transparent animate-spin mr-1" />
                  ) : (
                    <Send className="w-4 h-4 text-black" />
                  )}
                  {isSubmitting ? 'Delivering Inquiry...' : 'Submit Inquiry'}
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Google Maps Map Placeholder Box */}
        <div className="w-full rounded-2xl bg-white border border-black/5 p-2.5 shadow-md">
          <div className="relative rounded-xl w-full aspect-video md:max-h-[380px] bg-white overflow-hidden flex flex-col justify-end">
            {/* Visual background placeholder mimicking a clean stylish satellite map */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                alt="Passe tour and travel office Bole Addis Ababa satellite map style"
                className="w-full h-full object-cover brightness-50 opacity-40"
              />
              <div className="absolute inset-0 bg-white/40" />
            </div>

            {/* Quick Map floating card indicator info */}
            <div className="relative z-10 m-4 sm:m-6 bg-white/95 backdrop-blur-md p-5 rounded-xl max-w-sm border border-black/10 shadow-xl text-left space-y-2.5">
              <div className="flex gap-2 items-center">
                <span className="p-1 w-7 h-7 rounded-sm bg-primary/15 border border-primary/25 flex items-center justify-center font-bold text-primary text-xs tracking-tight">
                  P
                </span>
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-black leading-none">
                    Passe tour and travel
                  </h4>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#FF7A00] leading-none block mt-1">
                    Bole Office HQ
                  </span>
                </div>
              </div>
              
              <div className="space-y-1 text-xs text-black/50 font-light leading-normal border-t border-black/10 pt-2.5">
                <span className="block italic">"Bole Road, Imperial Building, Office 304"</span>
                <span className="block font-semibold font-mono">9.0016Â° N, 38.7889Â° E</span>
              </div>
              
              <a
                id="contact-open-google-maps"
                href="https://maps.google.com/?q=Bole+Road,Addis+Ababa,Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-primary hover:bg-primary-hover text-black font-bold text-xs rounded-sm inline-flex items-center justify-center uppercase tracking-tighter transition-all hover:scale-105 cursor-pointer"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}





