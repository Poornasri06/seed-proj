'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

const VACANCIES_DUBAI = [
  { ref: 'SEED-DXB-AD-E-01', title: 'Associate Director – Electrical', dept: 'Engineering', exp: '25+ Years', qual: 'Graduate Engineer with 25+ Years Industry Experience' },
  { ref: 'SEED-DXB-AD-M-02', title: 'Associate Director – Mechanical', dept: 'Engineering', exp: '25+ Years', qual: 'Graduate Engineer with 25+ Years Industry Experience' },
  { ref: 'SEED-DXB-SA-M-03', title: 'Senior Associate – Mechanical', dept: 'Engineering', exp: '20+ Years', qual: '20+ Years’ Experience in MEP Design' },
  { ref: 'SEED-DXB-SA-E-04', title: 'Senior Associate – Electrical', dept: 'Engineering', exp: '20+ Years', qual: '20+ Years’ Experience in Electrical Systems' },
  { ref: 'SEED-DXB-A-E-05', title: 'Associate – Electrical', dept: 'Engineering', exp: '15+ Years', qual: '15+ Years’ Industry Experience in Electrical Design' },
  { ref: 'SEED-DXB-A-M-06', title: 'Associate – Mechanical', dept: 'Engineering', exp: '15+ Years', qual: '15+ Years’ Experience (Plus) in HVAC Systems' },
  { ref: 'SEED-DXB-ELV-07', title: 'Sr. ELV Engineer', dept: 'Engineering', exp: '8–12 Years', qual: 'Experienced in ELV/ICT & Security Design · Degree' },
  { ref: 'SEED-DXB-HR-08', title: 'Senior HR Manager', dept: 'Corporate', exp: '15+ Years', qual: 'Preferably Lady Candidate · Local Emirati, British, Australian, American or Arab National' },
  { ref: 'SEED-DXB-FC-09', title: 'Financial Controller', dept: 'Corporate', exp: '15+ Years', qual: 'Chartered Accountants from India, US CPA, or ICAI from UK' },
];

const VACANCIES_INDIA = [
  { ref: 'SEED-IND-SME-01', title: 'Sr. Mechanical Engineer', dept: 'Engineering', exp: '8–12 Years', qual: '8–12 Years’ Experience supporting Dubai Design Office' },
  { ref: 'SEED-IND-SEE-02', title: 'Sr. Electrical Engineer', dept: 'Engineering', exp: '8–12 Years', qual: '8–12 Years’ Experience supporting Dubai Design Office' },
  { ref: 'SEED-IND-IME-03', title: 'Intermediate Mechanical Engineer', dept: 'Engineering', exp: '4–6 Years', qual: '4–6 Years’ Experience supporting Dubai Design Office' },
  { ref: 'SEED-IND-IEE-04', title: 'Intermediate Electrical Engineer', dept: 'Engineering', exp: '4–6 Years', qual: '4–6 Years’ Experience supporting Dubai Design Office' },
  { ref: 'SEED-IND-BIM-05', title: 'BIM Engineer / Technician', dept: 'Digital Engineering', exp: '3–5 Years', qual: '3–5 Years’ Experience supporting Dubai Design Office' },
  { ref: 'SEED-IND-ELV-06', title: 'Sr. ELV Engineer', dept: 'Engineering', exp: '8–12 Years', qual: 'Experienced in ELV/ICT and Security Design · Degree' },
];

const WHY_JOIN = [
  {
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Meaningful Projects',
    desc: 'Work on iconic developments across hospitality, residential, commercial, healthcare and mixed-use sectors.',
  },
  {
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    title: 'Professional Growth',
    desc: 'Continuous learning, technical development and opportunities to take on greater responsibilities.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Collaborative Culture',
    desc: 'Work alongside experienced engineers, designers and multidisciplinary teams in a supportive environment.',
  },
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Innovation & Digital Delivery',
    desc: 'Use BIM, advanced engineering tools and emerging technologies to deliver smarter engineering solutions.',
  },
];

const LIFE_GALLERY = [
  { image: '/projects/ellington-hq.webp', caption: 'Technical Workshops & Leadership Mentorship' },
  { image: '/projects/tbc-bank-headquarters-image-1.webp', caption: 'Modern Studio Offices & BIM Hubs' },
  { image: '/projects/City Walk Mixed Use Development.webp', caption: 'On-Site Field Supervision & Engineering Inspections' },
  { image: '/projects/brass-monkey.webp', caption: 'Team Celebrations & Milestone Events' },
];

const HIRING_STEPS = [
  { step: 'Step 01', title: 'Application', desc: 'Submit your application online.' },
  { step: 'Step 02', title: 'Review', desc: 'Our recruitment team reviews your qualifications and experience.' },
  { step: 'Step 03', title: 'Interview', desc: 'Meet our technical and leadership teams.' },
  { step: 'Step 04', title: 'Offer', desc: 'Successful candidates receive an employment offer.' },
  { step: 'Step 05', title: 'Welcome to SEED', desc: 'Begin your journey with onboarding and team integration.' },
];

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'dubai' | 'india'>('all');
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const scrollToOpenings = () => {
    const el = document.getElementById('openings');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0b0f19] min-h-screen text-slate-300 font-sans selection:bg-gold selection:text-[#0b0f19]">
      
      {/* SECTION 01 – HERO BANNER */}
      <section className="relative pt-40 pb-28 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="/modern_mep_interior_1780503503410.webp"
            alt="SEED Team"
            fill
            className="object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-[#0b0f19]/90 to-[#0b0f19]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase mb-4 block">
              CAREERS
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Build the Future With SEED
            </h1>
            <p className="text-lg md:text-xl font-sans font-light text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
              Join a team of passionate engineers, designers and professionals committed to delivering innovative engineering solutions. At SEED, you’ll work on landmark developments, collaborate with industry experts and build a career that makes a lasting impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToOpenings}
                className="inline-flex items-center justify-center px-10 py-5 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm"
              >
                View Official Recruitment Posters ↓
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02 – WHY JOIN SEED */}
      <section className="py-24 bg-[#0f172a] border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">CAREERS</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Why SEED?</h2>
              <p className="text-slate-400 font-light text-[15px] leading-relaxed">
                At SEED, we believe great engineering starts with great people. We foster a collaborative, inclusive and high-performance culture where individuals are encouraged to grow, innovate and contribute to projects that shape the built environment.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_JOIN.map((card, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-[#0b0f19] border border-white/8 p-8 rounded-sm h-full flex flex-col justify-between hover:border-gold/40 transition-colors group">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-[#0b0f19] transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{card.title}</h3>
                    <p className="text-slate-400 text-[13px] font-light leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 03 – LIFE AT SEED */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">STUDIO LIFE</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Life at SEED</h2>
              <p className="text-slate-400 font-light text-[15px] leading-relaxed">
                Our people are at the heart of everything we do. We celebrate teamwork, encourage innovation and create an environment where every individual can thrive professionally and personally.
              </p>
            </div>
          </Reveal>

          {/* Life at SEED Photo Gallery */}
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIFE_GALLERY.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-[#0f172a] border border-white/10 hover:border-gold/40 transition-colors">
                  <Image src={item.image} alt={item.caption} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-medium group-hover:text-gold transition-colors">{item.caption}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 04 – CURRENT OPPORTUNITIES (OFFICIAL RECRUITMENT POSTERS / FLYERS) */}
      <section id="openings" className="py-24 bg-[#0f172a] border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">WE ARE HIRING!</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Current Opportunities</h2>
              <p className="text-slate-400 font-light text-[15px] leading-relaxed">
                Explore our official recruitment posters below for open positions in Dubai and India. Click any flyer to view full high-resolution details or apply online.
              </p>

              {/* Office Filter Tabs */}
              <div className="flex justify-center gap-3 mt-8">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-6 py-3 text-[11px] font-bold tracking-wider uppercase rounded-sm border transition-all ${
                    activeTab === 'all'
                      ? 'bg-gold text-[#0b0f19] border-gold shadow-lg'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:border-gold/50'
                  }`}
                >
                  All Hiring Flyers
                </button>
                <button
                  onClick={() => setActiveTab('dubai')}
                  className={`px-6 py-3 text-[11px] font-bold tracking-wider uppercase rounded-sm border transition-all ${
                    activeTab === 'dubai'
                      ? 'bg-gold text-[#0b0f19] border-gold shadow-lg'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:border-gold/50'
                  }`}
                >
                  Dubai Design Office
                </button>
                <button
                  onClick={() => setActiveTab('india')}
                  className={`px-6 py-3 text-[11px] font-bold tracking-wider uppercase rounded-sm border transition-all ${
                    activeTab === 'india'
                      ? 'bg-gold text-[#0b0f19] border-gold shadow-lg'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:border-gold/50'
                  }`}
                >
                  India Outsourcing Office
                </button>
              </div>
            </div>
          </Reveal>

          {/* Official Recruitment Posters Display */}
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* DUBAI DESIGN OFFICE POSTER */}
            {(activeTab === 'all' || activeTab === 'dubai') && (
              <Reveal>
                <div className="bg-[#0b0f19] border border-white/10 p-6 md:p-10 rounded-sm overflow-hidden shadow-2xl">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    
                    {/* Visual Poster Image */}
                    <div 
                      className="relative w-full lg:w-1/2 aspect-[3/4.2] rounded-sm overflow-hidden border border-gold/30 shadow-2xl cursor-pointer group bg-slate-900"
                      onClick={() => setSelectedPoster('/careers/hiring-dubai-office.png')}
                    >
                      <Image
                        src="/careers/hiring-dubai-office.png"
                        alt="SEED Dubai Design Office Hiring Poster"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-6 py-3 bg-gold text-[#0b0f19] text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                          🔍 Click to Enlarge Poster
                        </span>
                      </div>
                    </div>

                    {/* Positions Details List & Direct Apply */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                      <div>
                        <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">DUBAI DESIGN OFFICE</span>
                        <h3 className="font-serif text-3xl font-bold text-white mb-4">Dubai Engineering & Corporate Roles</h3>
                        <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                          Join our flagship Dubai Design Office to work on landmark high-rise, hospitality, and commercial developments across the Middle East.
                        </p>

                        <div className="space-y-3 mb-8 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                          {VACANCIES_DUBAI.map((v) => (
                            <div key={v.ref} className="bg-white/5 border border-white/8 p-3.5 rounded-sm flex items-center justify-between hover:border-gold/40 transition-colors">
                              <div>
                                <span className="text-gold text-[9px] font-bold tracking-widest block uppercase">REF: {v.ref}</span>
                                <h4 className="text-white text-sm font-semibold">{v.title}</h4>
                                <p className="text-slate-400 text-xs font-light">{v.exp} · {v.qual}</p>
                              </div>
                              <a
                                href={`mailto:hr@seedengineering.com?subject=Application for REF: ${v.ref} - ${encodeURIComponent(v.title)}`}
                                className="px-3 py-1.5 bg-gold/10 hover:bg-gold hover:text-[#0b0f19] border border-gold/30 text-gold text-[10px] font-bold tracking-wider uppercase transition-colors shrink-0 rounded-sm"
                              >
                                Apply →
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href="mailto:hr@seedengineering.com?subject=Application for Dubai Design Office Opportunities"
                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm text-center"
                      >
                        Apply for Dubai Positions (hr@seedengineering.com) →
                      </a>
                    </div>

                  </div>
                </div>
              </Reveal>
            )}

            {/* INDIA OUTSOURCING OFFICE POSTER */}
            {(activeTab === 'all' || activeTab === 'india') && (
              <Reveal>
                <div className="bg-[#0b0f19] border border-white/10 p-6 md:p-10 rounded-sm overflow-hidden shadow-2xl">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    
                    {/* Visual Poster Image */}
                    <div 
                      className="relative w-full lg:w-1/2 aspect-[3/4.2] rounded-sm overflow-hidden border border-gold/30 shadow-2xl cursor-pointer group bg-slate-900"
                      onClick={() => setSelectedPoster('/careers/hiring-india-office.png')}
                    >
                      <Image
                        src="/careers/hiring-india-office.png"
                        alt="SEED India Outsourcing Office Hiring Poster"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-6 py-3 bg-gold text-[#0b0f19] text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                          🔍 Click to Enlarge Poster
                        </span>
                      </div>
                    </div>

                    {/* Positions Details List & Direct Apply */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                      <div>
                        <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">INDIA OUTSOURCING OFFICE</span>
                        <h3 className="font-serif text-3xl font-bold text-white mb-4">India Engineering & BIM Roles</h3>
                        <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                          Looking for Senior & Intermediate Engineers and BIM professionals to work from our <strong>Bangalore / Pune / Mumbai / Delhi / Koratty</strong> offices supporting our Dubai Design Office.
                        </p>

                        <div className="space-y-3 mb-8 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                          {VACANCIES_INDIA.map((v) => (
                            <div key={v.ref} className="bg-white/5 border border-white/8 p-3.5 rounded-sm flex items-center justify-between hover:border-gold/40 transition-colors">
                              <div>
                                <span className="text-gold text-[9px] font-bold tracking-widest block uppercase">REF: {v.ref}</span>
                                <h4 className="text-white text-sm font-semibold">{v.title}</h4>
                                <p className="text-slate-400 text-xs font-light">{v.exp} · Locations: Bangalore | Pune | Mumbai | Delhi | Koratty</p>
                              </div>
                              <a
                                href={`mailto:hr@seedengineering.com?subject=Application for REF: ${v.ref} - ${encodeURIComponent(v.title)}`}
                                className="px-3 py-1.5 bg-gold/10 hover:bg-gold hover:text-[#0b0f19] border border-gold/30 text-gold text-[10px] font-bold tracking-wider uppercase transition-colors shrink-0 rounded-sm"
                              >
                                Apply →
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href="mailto:hr@seedengineering.com?subject=Application for India Outsourcing Office Opportunities"
                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm text-center"
                      >
                        Apply for India Positions (hr@seedengineering.com) →
                      </a>
                    </div>

                  </div>
                </div>
              </Reveal>
            )}

          </div>

        </div>
      </section>

      {/* SECTION 05 – OUR HIRING PROCESS */}
      <section className="py-24 bg-[#0b0f19] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">HIRING TIMELINE</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Recruitment Process</h2>
            </div>
          </Reveal>

          {/* Horizontal Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {HIRING_STEPS.map((st, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[#0f172a] border border-white/8 p-6 rounded-sm h-full flex flex-col justify-between hover:border-gold/40 transition-colors relative group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gold text-[10px] font-bold tracking-widest uppercase">{st.step}</span>
                      <span className="text-white/20 group-hover:text-gold/40 transition-colors font-serif font-bold text-sm">0{i + 1}</span>
                    </div>
                    <h3 className="text-white font-serif text-lg font-bold mb-3 group-hover:text-gold transition-colors">{st.title}</h3>
                    <p className="text-slate-400 text-[12px] font-light leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 – DON’T SEE A SUITABLE ROLE? */}
      <section className="py-20 bg-[#0a1124] border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">TALENT NETWORK</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">We’re Always Looking for Great Talent</h2>
            <p className="text-slate-400 font-light text-[15px] max-w-xl mx-auto mb-10 leading-relaxed">
              If you don’t see a suitable opportunity today, we’d still love to hear from you. Send us your CV and we’ll keep it on file for future opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:hr@seedengineering.com?subject=Speculative Application - Submit Your CV"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm"
              >
                Submit Your CV
              </a>
              <a
                href="mailto:hr@seedengineering.com?subject=HR Inquiry"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase hover:border-white hover:bg-white/5 transition-colors duration-300 rounded-sm"
              >
                Email HR
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 07 – CALL TO ACTION */}
      <section className="py-28 relative overflow-hidden bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 block">JOIN SEED</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-slate-300 font-light text-lg max-w-xl mx-auto mb-10">
              Become part of a team that’s engineering high-performance buildings and creating lasting value across the built environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToOpenings}
                className="inline-flex items-center justify-center px-10 py-5 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm"
              >
                View Current Openings
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full-Screen Poster Zoom Modal */}
      {selectedPoster && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedPoster(null)}>
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          <div className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedPoster(null)} className="absolute -top-10 right-0 text-white hover:text-gold text-2xl font-bold">✕ Close</button>
            <div className="relative w-full aspect-[3/4.2] max-h-[85vh] rounded-sm overflow-hidden border border-gold/40 shadow-2xl">
              <Image
                src={selectedPoster}
                alt="Enlarged Recruitment Poster"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
