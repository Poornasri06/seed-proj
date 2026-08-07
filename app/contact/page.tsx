'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

const CONTACT_CARDS = [
  {
    title: 'Dubai Headquarters',
    subtitle: 'Dubai, United Arab Emirates',
    icon: '📍',
    details: [
      { label: 'Address', value: 'Office 1104, Bay Square 13, Business Bay, Dubai, UAE' },
      { label: 'Telephone', value: '+971 4 358 8440' },
      { label: 'Email', value: 'info@seedengineering.ae' },
    ],
  },
  {
    title: 'Business Hours',
    subtitle: 'Headquarters & Regional Offices',
    icon: '⏰',
    details: [
      { label: 'Monday – Friday', value: '8:00 AM – 6:00 PM (GST)' },
      { label: 'Saturday & Sunday', value: 'Closed' },
      { label: 'Response Time', value: 'Within 24 Business Hours' },
    ],
  },
  {
    title: 'Direct Engineering Contact',
    subtitle: 'Technical & Supervision Inquiries',
    icon: '📞',
    details: [
      { label: 'Telephone', value: '+971 4 358 8440' },
      { label: 'Technical Desk', value: 'tech@seedengineering.ae' },
      { label: 'Supervision Site Support', value: 'supervision@seedengineering.ae' },
    ],
  },
  {
    title: 'Commercial & RFP Tenders',
    subtitle: 'Proposals & Press Engagement',
    icon: '💼',
    details: [
      { label: 'RFP & Tender Submissions', value: 'rfptenders@seedengineering.ae' },
      { label: 'Media & Communications', value: 'press@seedengineering.ae' },
      { label: 'Vendor & Partner Network', value: 'partners@seedengineering.ae' },
    ],
  },
];

const OFFICES = [
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Office 1104, Bay Square 13, Business Bay, P.O. Box 12345, Dubai, UAE',
    phone: '+971 4 358 8440',
    email: 'info@seedengineering.ae',
  },
  {
    city: 'Kochi',
    country: 'India',
    address: '4th Floor, Carnival Infopark, Phase 1, Kakkanad, Kochi, Kerala 682030',
    phone: '+91 484 402 8555',
    email: 'kochi@seedengineering.ae',
  },
  {
    city: 'Mumbai',
    country: 'India',
    address: '602, Commerz II, International Business Park, Oberoi Garden City, Goregaon East, Mumbai 400063',
    phone: '+91 22 6123 4500',
    email: 'mumbai@seedengineering.ae',
  },
  {
    city: 'Bengaluru',
    country: 'India',
    address: '3rd Floor, Prestige Meridian II, M.G. Road, Bengaluru, Karnataka 560001',
    phone: '+91 80 4152 7700',
    email: 'bengaluru@seedengineering.ae',
  },
  {
    city: 'New Delhi',
    country: 'India',
    address: 'Level 4, Rectangle 1, Commercial Complex D4, Saket, New Delhi 110017',
    phone: '+91 11 4051 3300',
    email: 'delhi@seedengineering.ae',
  },
  {
    city: 'Pune',
    country: 'India',
    address: '5th Floor, Panchshil Business Park, Baner, Pune, Maharashtra 411045',
    phone: '+91 20 6712 9000',
    email: 'pune@seedengineering.ae',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '10 Marina Boulevard, #39-00 Marina Bay Financial Centre Tower 2, Singapore 018983',
    phone: '+65 6818 9000',
    email: 'singapore@seedengineering.ae',
  },
];

const SERVICES_OPTIONS = [
  'Select Service Required',
  '01 MEP Design',
  '02 MEP Supervision',
  '03 ELV / ICT & AV Design',
  '04 Security Systems Design',
  '05 Sustainability Consultancy',
  '06 Acoustics Consultancy',
  '07 Swimming Pool & Water Feature Design',
  '08 Spa Design',
];

const SECTOR_OPTIONS = [
  'Select Project Sector',
  'Hospitality',
  'Residential',
  'Commercial',
  'Education',
  'Healthcare',
  'Retail',
  'Sports & Stadiums',
  'Entertainment, Cultural & Theme Parks',
  'Aviation',
  'Villas & Private Estates',
  'Infrastructure & Sustainable Communities',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    service: 'Select Service Required',
    sector: 'Select Project Sector',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0b0f19] min-h-screen text-slate-300 font-sans selection:bg-gold selection:text-[#0b0f19]">
      
      {/* SECTION 01 – HERO BANNER */}
      <section className="relative pt-40 pb-28 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="/dubai_skyline_night_1780503516791.webp"
            alt="SEED Headquarters"
            fill
            className="object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-[#0b0f19]/90 to-[#0b0f19]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase mb-4 block">
              GET IN TOUCH
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Let’s Start a Conversation
            </h1>
            <p className="text-lg md:text-xl font-sans font-light text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Whether you’re planning a new development, looking for an engineering partner, or exploring collaboration opportunities, our team is ready to help. Get in touch to discuss your project and discover how SEED can support your vision.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02 – CONTACT INFORMATION */}
      <section className="py-24 bg-[#0f172a] border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">REACH US DIRECTLY</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Information</h2>
              <p className="text-slate-400 font-light text-[15px]">Connect with our senior engineering team, business development, and regional headquarters.</p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONTACT_CARDS.map((card, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-[#0b0f19] border border-white/8 p-8 rounded-sm h-full flex flex-col justify-between hover:border-gold/40 transition-colors group">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-xl mb-6 text-gold group-hover:bg-gold group-hover:text-[#0b0f19] transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors">{card.title}</h3>
                    <p className="text-gold/70 text-[11px] font-semibold tracking-wider uppercase mb-6">{card.subtitle}</p>
                    
                    <div className="space-y-4 border-t border-white/5 pt-4">
                      {card.details.map((d, j) => (
                        <div key={j}>
                          <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase block mb-1">{d.label}</span>
                          <span className="text-slate-300 text-[13px] font-light leading-relaxed block">{d.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 03 – SEND US A MESSAGE */}
      <section id="contact-form" className="py-24 bg-[#0b0f19] scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">INQUIRIES</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Send Us a Message</h2>
                <p className="text-slate-400 font-light text-[15px] leading-relaxed mb-8">
                  Complete the form below and one of our senior engineering team members will get back to you as soon as possible.
                </p>

                <div className="space-y-6 bg-[#0f172a] border border-white/8 p-8 rounded-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-lg">⚡</span>
                    <div>
                      <h4 className="text-white font-serif font-bold text-base mb-1">Fast Technical Response</h4>
                      <p className="text-slate-400 text-[13px] font-light">Every project brief is reviewed directly by an engineering lead.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-lg">🔒</span>
                    <div>
                      <h4 className="text-white font-serif font-bold text-base mb-1">Confidential & Direct</h4>
                      <p className="text-slate-400 text-[13px] font-light">Your commercial plans, drawings, and RFPs are handled with strict privacy.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="bg-[#0f172a] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 text-gold text-3xl flex items-center justify-center mx-auto mb-6">
                        ✓
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-3">Thank You for Getting in Touch</h3>
                      <p className="text-slate-400 text-sm font-light leading-relaxed max-w-md mx-auto mb-8">
                        Your message has been received by our engineering team. We will review your project requirements and respond within 24 business hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 bg-white/10 text-slate-300 hover:text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors rounded-sm"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                            Full Name <span className="text-gold">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={form.fullName}
                            onChange={e => setForm({ ...form, fullName: e.target.value })}
                            className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3.5 text-slate-200 text-sm outline-none focus:border-gold rounded-sm placeholder:text-slate-600"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                            Company <span className="text-gold">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Company / Consultancy Name"
                            value={form.company}
                            onChange={e => setForm({ ...form, company: e.target.value })}
                            className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3.5 text-slate-200 text-sm outline-none focus:border-gold rounded-sm placeholder:text-slate-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3.5 text-slate-200 text-sm outline-none focus:border-gold rounded-sm placeholder:text-slate-600"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+971 XX XXX XXXX"
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3.5 text-slate-200 text-sm outline-none focus:border-gold rounded-sm placeholder:text-slate-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                            Country <span className="text-gold">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. UAE, Singapore"
                            value={form.country}
                            onChange={e => setForm({ ...form, country: e.target.value })}
                            className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3.5 text-slate-200 text-sm outline-none focus:border-gold rounded-sm placeholder:text-slate-600"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                            Service Required
                          </label>
                          <select
                            value={form.service}
                            onChange={e => setForm({ ...form, service: e.target.value })}
                            className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3.5 text-slate-200 text-sm outline-none focus:border-gold rounded-sm [&>option]:bg-[#0b0f19] cursor-pointer"
                          >
                            {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                            Project Sector
                          </label>
                          <select
                            value={form.sector}
                            onChange={e => setForm({ ...form, sector: e.target.value })}
                            className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3.5 text-slate-200 text-sm outline-none focus:border-gold rounded-sm [&>option]:bg-[#0b0f19] cursor-pointer"
                          >
                            {SECTOR_OPTIONS.map(sec => <option key={sec} value={sec}>{sec}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                          Project Description / Message <span className="text-gold">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us about your project scope, location, scale, and timeline..."
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3.5 text-slate-200 text-sm outline-none focus:border-gold rounded-sm placeholder:text-slate-600 resize-y"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-5 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm shadow-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 04 – OUR OFFICES */}
      <section className="py-24 bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">OUR OFFICES</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Global Presence</h2>
              <p className="text-slate-400 font-light text-[15px] leading-relaxed">
                With offices across the Middle East and India, our multidisciplinary teams are well positioned to support projects across the region.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFICES.map((off, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-[#0b0f19] border border-white/10 p-8 rounded-sm h-full flex flex-col justify-between hover:border-gold/40 transition-colors group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gold text-[10px] font-bold tracking-widest uppercase">Office 0{idx + 1}</span>
                      <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">{off.country}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-6 group-hover:text-gold transition-colors">{off.city}</h3>

                    <div className="space-y-3 border-t border-white/5 pt-4 text-[13px] text-slate-400 font-light">
                      <div>
                        <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase block mb-1">Address</span>
                        <p className="leading-relaxed">{off.address}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase block mb-1">Phone</span>
                        <a href={`tel:${off.phone}`} className="text-slate-300 hover:text-gold transition-colors">{off.phone}</a>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase block mb-1">Email</span>
                        <a href={`mailto:${off.email}`} className="text-slate-300 hover:text-gold transition-colors">{off.email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 05 – FIND US */}
      <section className="py-24 bg-[#0b0f19] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">LOCATION MAP</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Visit Our Office</h2>
              <p className="text-slate-400 font-light text-[15px]">SEED Headquarters — Bay Square 13, Business Bay, Dubai, UAE.</p>
            </div>
          </Reveal>

          {/* Embedded Google Map */}
          <Reveal delay={0.1}>
            <div className="relative aspect-[21/9] w-full bg-[#0a1124] border border-white/10 rounded-sm overflow-hidden shadow-2xl mb-8">
              <iframe
                title="SEED Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178654877237!2d55.2818967!3d25.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682855555555%3A0x1!2sBay%20Square%2013!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-between bg-[#0f172a] border border-white/8 p-6 rounded-sm">
              <div>
                <h4 className="text-white font-serif font-bold text-lg mb-1">Dubai Headquarters</h4>
                <p className="text-slate-400 text-[13px] font-light">Office 1104, Bay Square 13, Business Bay, Dubai, UAE</p>
              </div>
              <a
                href="https://maps.google.com/?q=Bay+Square+13+Business+Bay+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm shrink-0"
              >
                Get Directions →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 06 – CONNECT WITH US */}
      <section className="py-20 bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">SOCIAL MEDIA</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-slate-400 font-light text-[15px] mb-10 leading-relaxed">
              Follow SEED for the latest project updates, engineering insights, industry events and company news.
            </p>

            <div className="flex justify-center items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0b0f19] border border-white/10 hover:border-gold px-8 py-4 text-slate-200 hover:text-gold transition-all rounded-sm group"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/></svg>
                <span className="text-xs font-bold tracking-widest uppercase">LinkedIn</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0b0f19] border border-white/10 hover:border-gold px-8 py-4 text-slate-200 hover:text-gold transition-all rounded-sm group"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span className="text-xs font-bold tracking-widest uppercase">Instagram</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0b0f19] border border-white/10 hover:border-gold px-8 py-4 text-slate-200 hover:text-gold transition-all rounded-sm group"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span className="text-xs font-bold tracking-widest uppercase">YouTube</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 07 – CALL TO ACTION */}
      <section className="py-28 relative overflow-hidden bg-[#0b0f19] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 block">NEXT STEPS</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Build Something Exceptional?
            </h2>
            <p className="text-slate-300 font-light text-lg max-w-xl mx-auto mb-10">
              From concept to commissioning, our multidisciplinary engineering teams are ready to support your next project with integrated, performance-driven solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center px-10 py-5 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm"
              >
                Contact Our Team
              </button>
              <Link href="/projects" className="inline-flex items-center justify-center px-10 py-5 border border-white/20 text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase hover:border-white hover:bg-white/5 transition-colors duration-300 rounded-sm">
                Explore Our Projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
