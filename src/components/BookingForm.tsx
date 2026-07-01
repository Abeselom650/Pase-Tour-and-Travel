import React, { useState, useEffect } from 'react';
import { DESTINATIONS, TOUR_PACKAGES } from '../data';
import { TourPackage, BookingData } from '../types';
import { Send, CheckCircle, Calculator, PlaneTakeoff, Info } from 'lucide-react';

interface BookingFormProps {
  selectedPackage: TourPackage | null;
}

export default function BookingForm({ selectedPackage }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingData>({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    packageId: selectedPackage ? selectedPackage.id : '',
    travelDate: '',
    travelersCount: 1,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync state if a package is selected from another component
  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({
        ...prev,
        packageId: selectedPackage.id,
        destination: DESTINATIONS.find(d => d.id === selectedPackage.id) ? DESTINATIONS.find(d => d.id === selectedPackage.id)!.name : prev.destination
      }));
    }
  }, [selectedPackage]);

  const activePackage = TOUR_PACKAGES.find(p => p.id === formData.packageId);

  // Form Validation
  const validateForm = (): boolean => {
    const tempErrors: Partial<Record<keyof BookingData, string>> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email format';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.packageId) tempErrors.packageId = 'Please select a tour package';
    if (!formData.travelDate) tempErrors.travelDate = 'Please select a travel date';
    if (formData.travelersCount < 1) tempErrors.travelersCount = 'Count must be at least 1';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'travelersCount' ? Number(value) : value,
    }));
    
    // Clear validation error on change
    if (errors[name as keyof BookingData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form save for analytics
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        destination: '',
        packageId: '',
        travelDate: '',
        travelersCount: 1,
        message: '',
      });
    }, 1500);
  };

  // Calculate dynamic costs
  const totalCost = activePackage ? activePackage.price * formData.travelersCount : 0;

  return (
    <section id="booking" className="py-24 bg-white border-b border-black/5 text-black px-4 md:px-8 relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Informative Column */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-sm">
            <PlaneTakeoff className="w-3.5 h-3.5" /> Fast Reservation
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
            Book Your Dream Ethiopian Expedition
          </h2>
          <p className="text-sm text-black/60 font-light leading-relaxed">
            Fill out our multi-field secure booking module to queue your request directly. An expert from Passe tour and travel will reach out inside 4 working hours with detailed flight options, day-by-day itineraries, and accommodation recommendations.
          </p>

          {/* Value Badges */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <div className="flex gap-3.5 items-start">
              <span className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                â­
              </span>
              <div>
                <h4 className="font-bold text-sm text-black">No Deposit Required Today</h4>
                <p className="text-xs text-black/50 font-light leading-normal mt-0.5">Secure your calendar free of initial deposits. Perfect for locking festival packages.</p>
              </div>
            </div>
            
            <div className="flex gap-3.5 items-start">
              <span className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                ðŸ”’
              </span>
              <div>
                <h4 className="font-bold text-sm text-black">Secure Data Standards</h4>
                <p className="text-xs text-black/50 font-light leading-normal mt-0.5">Your email, personal details, and travel logs are fully protected by secure hashing protocols.</p>
              </div>
            </div>
          </div>

          {/* Dynamic Interactive Estimate Panel if package selected */}
          {activePackage && (
            <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-4 shadow-xl">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                <h3 className="font-serif font-bold text-sm sm:text-base text-black">
                  Insta-Quote Estimator
                </h3>
              </div>
              <div className="space-y-2 text-xs text-black/50 font-light border-b border-black/5 pb-3 font-sans">
                <div className="flex justify-between">
                  <span>Selected Package:</span>
                  <span className="text-black font-semibold">{activePackage.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit Base Rate:</span>
                  <span className="text-black font-mono font-bold">${activePackage.price} USD</span>
                </div>
                <div className="flex justify-between">
                  <span>Traveler Count:</span>
                  <span className="text-black font-semibold">{formData.travelersCount} Person(s)</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-black/70">Estimated Total Rate:</span>
                <span className="text-xl font-mono font-bold text-primary">
                  ${totalCost.toLocaleString()} USD
                </span>
              </div>
              <span className="text-[10px] text-black/45 flex items-center gap-1 leading-normal font-light pt-1">
                <Info className="w-3 h-3 text-black/30" /> Ground flights, premium hotel, driver, and food included.
              </span>
            </div>
          )}
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-black/5 shadow-2xl">
            
            {submitSuccess ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-sm flex items-center justify-center text-primary mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-black">Booking Request Queued!</h3>
                  <p className="text-xs sm:text-sm text-black/60 max-w-md mx-auto leading-relaxed">
                    Thank you for booking with Passe tour and travel. Abeselom and our operations lead are setting up your schedule. A confirmation email has been dispatched.
                  </p>
                </div>
                <button
                  id="booking-success-reset"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-black text-xs font-bold uppercase tracking-tighter rounded-sm cursor-pointer"
                >
                  Book Another Tour
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="booking-fullName" className="block text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">
                      Full Name *
                    </label>
                    <input
                      id="booking-fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sophia Mueller"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.fullName ? 'border-orange-500 focus:ring-orange-500' : 'border-black/10 focus:ring-primary focus:border-primary'
                      } rounded-sm text-sm focus:outline-none focus:ring-1`}
                    />
                    {errors.fullName && <span className="text-[10px] text-orange-500 block">{errors.fullName}</span>}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="booking-email" className="block text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">
                      Email Address *
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sophia@travel.com"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.email ? 'border-orange-500' : 'border-black/10 focus:ring-primary'
                      } rounded-sm text-sm focus:outline-none focus:ring-1`}
                    />
                    {errors.email && <span className="text-[10px] text-orange-500 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Contact and destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="booking-phone" className="block text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">
                      Phone Number *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +49 171 1234567"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.phone ? 'border-orange-500' : 'border-black/10 focus:ring-primary'
                      } rounded-sm text-sm focus:outline-none focus:ring-1`}
                    />
                    {errors.phone && <span className="text-[10px] text-orange-500 block">{errors.phone}</span>}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="booking-destination" className="block text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">
                      Additional Destination notes
                    </label>
                    <input
                      id="booking-destination"
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Lalibela & Lake Tana focus"
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Tour Selector & Date Picker */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  
                  {/* Select Packages */}
                  <div className="lg:col-span-1 space-y-1.5 text-left">
                    <label htmlFor="booking-packageId" className="block text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">
                      Tour Package *
                    </label>
                    <select
                      id="booking-packageId"
                      name="packageId"
                      value={formData.packageId}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 bg-white border ${
                        errors.packageId ? 'border-orange-500' : 'border-black/10 focus:ring-primary'
                      } rounded-sm text-xs focus:outline-none focus:ring-1 text-black`}
                    >
                      <option value="">-- Choose --</option>
                      {TOUR_PACKAGES.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} (${p.price})
                        </option>
                      ))}
                    </select>
                    {errors.packageId && <span className="text-[10px] text-orange-500 block">{errors.packageId}</span>}
                  </div>

                  {/* Travel Date */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="booking-travelDate" className="block text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">
                      Travel Date *
                    </label>
                    <input
                      id="booking-travelDate"
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-white border ${
                        errors.travelDate ? 'border-orange-500' : 'border-black/10 focus:ring-primary'
                      } rounded-sm text-sm focus:outline-none focus:ring-1 text-black`}
                    />
                    {errors.travelDate && <span className="text-[10px] text-orange-500 block">{errors.travelDate}</span>}
                  </div>

                  {/* Travelers Count */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="booking-travelersCount" className="block text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">
                      Travelers COUNT
                    </label>
                    <input
                      id="booking-travelersCount"
                      type="number"
                      name="travelersCount"
                      min="1"
                      max="30"
                      value={formData.travelersCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-primary text-black"
                    />
                  </div>
                </div>

                {/* Textarea message comments */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="booking-message" className="block text-xs font-mono font-bold text-black/50 uppercase tracking-widest text-[10px]">
                    Additional Message / Custom Requirements
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide dietary needs, hotel preferences, airport arrival flight numbers, etc."
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-primary text-black resize-none"
                  />
                </div>

                <button
                  id="booking-submit-form"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary-hover disabled:bg-black/5 text-black font-bold uppercase tracking-tighter rounded-sm flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex h-3 w-3 rounded-full border-2 border-black border-t-transparent animate-spin mr-1" />
                  ) : (
                    <Send className="w-4 h-4 ml-1 text-black" />
                  )}
                  {isSubmitting ? 'Processing Calendar...' : 'Request Travel Slot / Book'}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}





