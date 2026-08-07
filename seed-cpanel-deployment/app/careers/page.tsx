'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

const VACANCIES = [
  {
    id: 'sr-mech-eng-dubai',
    title: 'Senior Mechanical Engineer',
    location: 'Dubai, UAE',
    department: 'Mechanical Engineering',
    type: 'Full-time',
    experience: '10+ Years',
    desc: 'Lead complex HVAC and central cooling plant design for luxury high-rise, hospitality, and mixed-use developments across the MENA region.',
  },
  {
    id: 'lead-elec-eng-dubai',
    title: 'Lead Electrical Engineer',
    location: 'Dubai, UAE',
    department: 'Electrical Engineering',
    type: 'Full-time',
    experience: '8+ Years',
    desc: 'Engineer high-voltage power distribution, emergency generation, lighting design, and power quality systems for commercial towers and medical centers.',
  },
  {
    id: 'sr-bim-coord-sg',
    title: 'Senior BIM Coordinator',
    location: 'Singapore',
    department: 'Digital Engineering & BIM',
    type: 'Full-time',
    experience: '6+ Years',
    desc: 'Drive multidisciplinary Revit/BIM coordination, automated clash detection, and digital twin asset workflows for Asia-Pacific flagships.',
  },
  {
    id: 'sustainability-cons-mum',
    title: 'Sustainability Consultant',
    location: 'Mumbai, India',
    department: 'Sustainability & Energy',
    type: 'Full-time',
    experience: '5+ Years',
    desc: 'Perform energy modeling, carbon assessments, and daylight simulations for LEED Platinum and Estidama Pearl rated developments.',
  },
  {
    id: 'plumbing-fire-eng-kochi',
    title: 'Plumbing & Fire Protection Engineer',
    location: 'Kochi, India',
    department: 'Public Health Engineering',
    type: 'Full-time',
    experience: '7+ Years',
    desc: 'Design hydraulic water treatment, drainage, stormwater management, and active fire suppression systems for major urban master plans.',
  },
];

const WHY_JOIN = [
  {
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Meaningful Projects',
    desc: 'Work on iconic developments across hospitality, residential, commercial, healthcare and mixed-use sectors that define city skylines.',
  },
  {
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    title: 'Professional Growth',
    desc: 'Continuous learning, technical development and opportunities to take on greater responsibilities as you advance your career.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Collaborative Culture',
    desc: 'Work alongside experienced engineers, designers and multidisciplinary teams in a supportive, transparent environment.',
  },
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Innovation & Digital Delivery',
    desc: 'Use BIM, advanced computational engineering tools and emerging technologies to deliver smarter, high-performance building solutions.',
  },
];

const HIRING_STEPS = [
  { step: 'Step 01', title: 'Application', desc: 'Submit your CV and portfolio online through our career portal.' },
  { step: 'Step 02', title: 'Review', desc: 'Our recruitment team reviews your technical qualifications and experience.' },
  { step: 'Step 03', title: 'Interview', desc: 'Meet our technical leads and management team for in-depth discussion.' },
  { step: 'Step 04', title: 'Offer', desc: 'Successful candidates receive a competitive formal employment offer.' },
  { step: 'Step 05', title: 'Welcome to SEED', desc: 'Begin your journey with structured onboarding and project team integration.' },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof VACANCIES[0] | null>(null);

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
            alt="SEED Studio Team"
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
                View Open Positions
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
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">CULTURE & GROWTH</span>
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
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">STUDIO LIFE</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Life at SEED</h2>
              <p className="text-slate-400 font-light text-[15px] leading-relaxed">
                Our people are at the heart of everything we do. We celebrate teamwork, encourage innovation and create an environment where every individual can thrive professionally and personally.
              </p>
            </div>
          </Reveal>

          {/* Photo Gallery Grid */}
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: '/modern_mep_interior_1780503503410.webp', title: 'Design & Collaboration Studio' },
              { img: '/hero.webp', title: 'On-Site Technical Inspections' },
              { img: '/skyscraper_looking_up_1780504822033.webp', title: 'High-Rise Engineering Reviews' },
              { img: '/projects/anand-krishnan.webp', title: 'Leadership & Mentorship' },
              { img: '/projects/tbc-bank-headquarters-image-1.webp', title: 'BIM & Computational Workshops' },
              { img: '/dubai_skyline_night_1780503516791.webp', title: 'Team Celebrations & Milestones' },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-white/5 bg-[#0a1020]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white font-serif text-sm font-semibold">{item.title}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 04 – CURRENT OPPORTUNITIES */}
      <section id="openings" className="py-24 bg-[#0f172a] border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16 max-w-3xl">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">JOIN OUR TEAM</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Current Opportunities</h2>
              <p className="text-slate-400 font-light text-[15px]">
                Explore open engineering and digital delivery roles across our global design centres.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VACANCIES.map((job) => (
              <StaggerItem key={job.id}>
                <div className="bg-[#0b0f19] border border-white/10 p-8 rounded-sm h-full flex flex-col justify-between hover:border-gold/40 transition-colors group">
                  <div>
                    <span className="text-gold text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">{job.department}</span>
                    <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{job.title}</h3>
                    
                    <div className="space-y-2 mb-6 text-[13px] text-slate-400 font-light">
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-bold">📍</span>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-bold">💼</span>
                        <span>{job.type} · {job.experience}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-[13px] font-light leading-relaxed mb-8">{job.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="inline-flex items-center justify-center px-6 py-3 bg-gold/10 hover:bg-gold text-gold hover:text-[#0b0f19] font-sans text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-sm"
                    >
                      View Job →
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 05 – OUR HIRING PROCESS */}
      <section className="py-24 bg-[#0b0f19] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">RECRUITMENT TIMELINE</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Recruitment Process</h2>
              <p className="text-slate-400 font-light text-[15px]">A transparent 5-step methodology designed to evaluate mutual fit and technical excellence.</p>
            </div>
          </Reveal>

          {/* Horizontal Process Steps */}
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
                href="mailto:careers@seedengineering.ae?subject=Speculative Application - CV Submission"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm"
              >
                Submit Your CV
              </a>
              <a
                href="mailto:hr@seedengineering.ae?subject=HR Inquiry"
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

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative z-10 bg-[#0d1526] border border-white/10 p-8 md:p-10 max-w-2xl w-full rounded-sm shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>
            <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">{selectedJob.department}</span>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">{selectedJob.title}</h2>
            <p className="text-slate-400 text-sm mb-6">📍 {selectedJob.location} · 💼 {selectedJob.type} · Experience: {selectedJob.experience}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">{selectedJob.desc}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:careers@seedengineering.ae?subject=Application for ${encodeURIComponent(selectedJob.title)} - ${encodeURIComponent(selectedJob.location)}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm"
              >
                Apply Now via Email →
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
