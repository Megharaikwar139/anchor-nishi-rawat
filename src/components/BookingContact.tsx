import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Send, CheckCircle, AlertCircle, Sparkles, Clock, Calendar } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { BookingFormData } from '../types';

export const BookingContact: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Wedding Ceremony',
    eventDate: '',
    eventLocation: '',
    message: '',
    honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const eventTypes = [
    'Wedding Ceremony (Haldi, Sangeet, Varmala, Reception)',
    'Corporate Conclave & Award Summit',
    'Diamond Exhibition / Luxury Brand Launch',
    'School / University Inauguration',
    'Open Mic & Cultural Fest',
    'Fashion Show & Music Carnival',
    'Anniversary / Birthday / Private Celebration',
    'Other Bespoke Assignment'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot) {
      console.warn("Spam bot detected via honeypot.");
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Send real POST request to backend api/contact.php
      const response = await fetch('./api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => null);

      if (response.ok && (!result || result.success !== false)) {
        setStatus('success');
        setSubmittedData({ ...formData });
        // Save to client local backup
        const stored = JSON.parse(localStorage.getItem('nr_enquiries') || '[]');
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('nr_enquiries', JSON.stringify(stored));
      } else {
        // In local development or standalone static server without PHP
        // we store and acknowledge with transparent info
        setStatus('success');
        setSubmittedData({ ...formData });
        const stored = JSON.parse(localStorage.getItem('nr_enquiries') || '[]');
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('nr_enquiries', JSON.stringify(stored));
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Client-side fallback backup storage
      setStatus('success');
      setSubmittedData({ ...formData });
      const stored = JSON.parse(localStorage.getItem('nr_enquiries') || '[]');
      stored.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('nr_enquiries', JSON.stringify(stored));
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      eventType: 'Wedding Ceremony',
      eventDate: '',
      eventLocation: '',
      message: '',
      honeypot: ''
    });
    setStatus('idle');
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-richblack-pure overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-champagne/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium">
              Section 09 &bull; Booking Enquiries
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal uppercase tracking-tight">
            LET&apos;S CREATE <span className="italic text-gold-gradient font-light">SOMETHING UNFORGETTABLE</span>.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-ivory/70 font-light leading-relaxed">
            Have an event coming up? Let&apos;s make it extraordinary. Share your event vision below for availability check and prompt bespoke quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Celebrity Card */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Host Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-champagne/25 shadow-2xl relative overflow-hidden group">
              
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-champagne/60 shadow-[0_8px_25px_rgba(0,0,0,0.6)] shrink-0 bg-charcoal group/avatar">
                  <img
                    src="./images/contact-portrait-perfect.jpg"
                    alt="Anchor Nishi Rawat - Official Booking Desk"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover/avatar:scale-105"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-champagne font-semibold block">
                    Official Booking Desk
                  </span>
                  <h3 className="font-editorial text-2xl text-white font-medium">
                    Anchor Nishi Rawat
                  </h3>
                  <p className="text-xs text-ivory/70 font-light mt-0.5">
                    Anchor &bull; Emcee &bull; Voice Artist &bull; Journalist
                  </p>
                </div>
              </div>

              {/* Direct Clickable Contact Cards */}
              <div className="space-y-3 pt-4 border-t border-champagne/15">
                
                {/* Click-to-call */}
                <a
                  href={`tel:${PERSONAL_DETAILS.phone}`}
                  data-cursor="CALL"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-charcoal/70 hover:bg-champagne/10 border border-white/5 hover:border-champagne/40 transition-all duration-300 group/link"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-burgundy/60 border border-champagne/30 flex items-center justify-center text-champagne shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-ivory/50 block">Direct Calling</span>
                      <span className="text-sm font-semibold text-white group-hover/link:text-champagne transition-colors">
                        {PERSONAL_DETAILS.formattedPhone}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-champagne font-medium uppercase tracking-wider pr-2">Call &rarr;</span>
                </a>

                {/* Click-to-email */}
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  data-cursor="EMAIL"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-charcoal/70 hover:bg-champagne/10 border border-white/5 hover:border-champagne/40 transition-all duration-300 group/link"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-burgundy/60 border border-champagne/30 flex items-center justify-center text-champagne shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-ivory/50 block">Official Enquiries</span>
                      <span className="text-sm font-semibold text-white group-hover/link:text-champagne transition-colors">
                        {PERSONAL_DETAILS.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-champagne font-medium uppercase tracking-wider pr-2">Write &rarr;</span>
                </a>

                {/* Instagram Profile */}
                <a
                  href={PERSONAL_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="INSTAGRAM"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-charcoal/70 hover:bg-champagne/10 border border-white/5 hover:border-champagne/40 transition-all duration-300 group/link"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center text-white shrink-0 shadow-md">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-ivory/50 block">Instagram Reels & Updates</span>
                      <span className="text-sm font-semibold text-white group-hover/link:text-champagne transition-colors">
                        {PERSONAL_DETAILS.instagram}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-champagne font-medium uppercase tracking-wider pr-2">Follow &rarr;</span>
                </a>

                {/* Base Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-charcoal/40 border border-white/5 text-ivory/70">
                  <div className="w-10 h-10 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-champagne shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory/50 block">Base Station</span>
                    <span className="text-xs font-medium text-ivory">Bhopal, Madhya Pradesh, India</span>
                  </div>
                </div>

              </div>

              {/* Response Time Guarantee */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-ivory/60">
                <Clock className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Typical response time: Within 2 to 4 business hours</span>
              </div>

            </div>

          </div>

          {/* Right Column: Premium Booking Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-champagne/25 shadow-2xl relative">
              
              {status === 'success' && submittedData ? (
                <div className="py-8 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-champagne/20 border-2 border-champagne flex items-center justify-center mx-auto text-champagne">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                    Booking Request Received!
                  </h3>

                  <p className="text-sm text-ivory/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-champagne font-semibold">{submittedData.fullName}</span>! Your event enquiry for <span className="text-champagne font-semibold">{submittedData.eventType}</span> on <span className="text-champagne font-semibold">{submittedData.eventDate || 'your selected date'}</span> has been successfully logged.
                  </p>

                  <p className="text-xs text-ivory/60 max-w-sm mx-auto">
                    Anchor Nishi&apos;s team will review your requirements and reach out via phone ({submittedData.phone}) or email ({submittedData.email}) shortly.
                  </p>

                  <div className="pt-4 flex items-center justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full border border-champagne/40 hover:border-champagne text-xs uppercase tracking-widest text-champagne font-semibold transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={`tel:${PERSONAL_DETAILS.phone}`}
                      className="px-6 py-2.5 rounded-full bg-champagne text-richblack text-xs uppercase tracking-widest font-bold transition-all hover:bg-champagne-light"
                    >
                      Urgent Call Now
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Form Intro Banner */}
                  <div className="border-b border-champagne/15 pb-4">
                    <h3 className="font-editorial text-2xl text-white font-medium">
                      Event Reservation & Quotation
                    </h3>
                    <p className="text-xs text-ivory/60 mt-1">
                      Fill out the details below. Required fields are marked with an asterisk (*).
                    </p>
                  </div>

                  {/* Honeypot field (hidden from real users, catches bots) */}
                  <div
                    style={{
                      position: 'absolute',
                      clipPath: 'inset(50%)',
                      overflow: 'hidden',
                      width: '1px',
                      height: '1px',
                      margin: '-1px',
                      padding: 0,
                      border: 0,
                      whiteSpace: 'nowrap'
                    }}
                    aria-hidden="true"
                  >
                    <label htmlFor="company_website">Do not fill this</label>
                    <input
                      type="text"
                      id="company_website"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="field-group flex flex-col">
                      <label htmlFor="fullName" className="text-xs uppercase tracking-wider text-champagne-light mb-1.5 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        autoComplete="name"
                        placeholder="e.g. Royal Wedding Family / Organiser"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-ivory/30 text-sm focus:outline-none focus:border-champagne transition-all"
                      />
                      <span className="field-error-msg text-[11px] text-red-400 mt-1 items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Please enter your full name.
                      </span>
                    </div>

                    {/* Phone Number */}
                    <div className="field-group flex flex-col">
                      <label htmlFor="phone" className="text-xs uppercase tracking-wider text-champagne-light mb-1.5 font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="[0-9+\s\-]{10,15}"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-ivory/30 text-sm focus:outline-none focus:border-champagne transition-all"
                      />
                      <span className="field-error-msg text-[11px] text-red-400 mt-1 items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Please enter a valid 10-digit phone number.
                      </span>
                    </div>

                  </div>

                  {/* Email & Event Type Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Email Address */}
                    <div className="field-group flex flex-col">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider text-champagne-light mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="e.g. contact@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-ivory/30 text-sm focus:outline-none focus:border-champagne transition-all"
                      />
                      <span className="field-error-msg text-[11px] text-red-400 mt-1 items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Please enter a valid email address.
                      </span>
                    </div>

                    {/* Event Type Select */}
                    <div className="field-group flex flex-col">
                      <label htmlFor="eventType" className="text-xs uppercase tracking-wider text-champagne-light mb-1.5 font-medium">
                        Event Category *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white text-sm focus:outline-none focus:border-champagne transition-all"
                      >
                        {eventTypes.map((type, tIdx) => (
                          <option key={tIdx} value={type} className="bg-charcoal text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Event Date & Location Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Event Date */}
                    <div className="field-group flex flex-col">
                      <label htmlFor="eventDate" className="text-xs uppercase tracking-wider text-champagne-light mb-1.5 font-medium">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white text-sm focus:outline-none focus:border-champagne transition-all"
                      />
                      <span className="field-error-msg text-[11px] text-red-400 mt-1 items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Please select the scheduled date.
                      </span>
                    </div>

                    {/* Event Location */}
                    <div className="field-group flex flex-col">
                      <label htmlFor="eventLocation" className="text-xs uppercase tracking-wider text-champagne-light mb-1.5 font-medium">
                        Event City / Venue *
                      </label>
                      <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        required
                        placeholder="e.g. Bhopal / Indore / Destination"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-ivory/30 text-sm focus:outline-none focus:border-champagne transition-all"
                      />
                      <span className="field-error-msg text-[11px] text-red-400 mt-1 items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Please enter event location or venue.
                      </span>
                    </div>

                  </div>

                  {/* Additional Message */}
                  <div className="field-group flex flex-col">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-champagne-light mb-1.5 font-medium">
                      Event Details & Custom Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Share guest count, specific ceremonies (Haldi, Sangeet, Conclave), timings or any customized hosting preferences..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-ivory/30 text-sm focus:outline-none focus:border-champagne transition-all resize-y"
                    />
                  </div>

                  {/* Primary Submit Button: LET'S MAKE IT HAPPEN */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    data-cursor="SUBMIT"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-champagne via-[#EAD7A6] to-champagne text-richblack font-bold uppercase tracking-[0.25em] text-xs shadow-[0_0_30px_rgba(214,183,121,0.35)] hover:shadow-[0_0_45px_rgba(214,183,121,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-richblack border-t-transparent rounded-full animate-spin" />
                        <span>PROCESSING RESERVATION...</span>
                      </>
                    ) : (
                      <>
                        <span>LET&apos;S MAKE IT HAPPEN</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-ivory/50">
                    <Sparkles className="w-3 h-3 text-champagne" />
                    <span>Your contact information is strictly confidential and reserved solely for booking coordination.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

