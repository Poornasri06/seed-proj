'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

const VACANCIES = [
  // DUBAI DESIGN OFFICE - ENGINEERING POSITIONS
  {
    id: 'ad-electrical-dxb',
    ref: 'SEED-DXB-AD-E-01',
    title: 'Associate Director – Electrical',
    office: 'Dubai Design Office',
    department: 'Electrical Engineering',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '25+ Years',
    qualification: 'Graduate Engineer with 25+ Years of Industry Experience',
    desc: 'Lead strategic electrical design, power infrastructure, and multidisciplinary coordination for landmark Dubai & regional developments.',
  },
  {
    id: 'ad-mechanical-dxb',
    ref: 'SEED-DXB-AD-M-02',
    title: 'Associate Director – Mechanical',
    office: 'Dubai Design Office',
    department: 'Mechanical Engineering',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '25+ Years',
    qualification: 'Graduate Engineer with 25+ Years of Industry Experience',
    desc: 'Direct major HVAC, district cooling, and mechanical building services for high-rise, luxury hospitality, and mixed-use projects.',
  },
  {
    id: 'sa-mechanical-dxb',
    ref: 'SEED-DXB-SA-M-03',
    title: 'Senior Associate – Mechanical',
    office: 'Dubai Design Office',
    department: 'Mechanical Engineering',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '20+ Years',
    qualification: '20+ Years’ Experience in Building Services & MEP Design',
    desc: 'Senior mechanical engineering lead driving complex system calculations, equipment selection, and technical authority reviews.',
  },
  {
    id: 'sa-electrical-dxb',
    ref: 'SEED-DXB-SA-E-04',
    title: 'Senior Associate – Electrical',
    office: 'Dubai Design Office',
    department: 'Electrical Engineering',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '20+ Years',
    qualification: '20+ Years’ Experience in Electrical Power & Lighting',
    desc: 'Senior electrical engineering lead managing high-voltage distribution, emergency standby systems, and authority approvals.',
  },
  {
    id: 'associate-electrical-dxb',
    ref: 'SEED-DXB-A-E-05',
    title: 'Associate – Electrical',
    office: 'Dubai Design Office',
    department: 'Electrical Engineering',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '15+ Years',
    qualification: '15+ Years’ Industry Experience in Electrical Design',
    desc: 'Experienced electrical engineer managing design teams, client coordination, and detailed system execution.',
  },
  {
    id: 'associate-mechanical-dxb',
    ref: 'SEED-DXB-A-M-06',
    title: 'Associate – Mechanical',
    office: 'Dubai Design Office',
    department: 'Mechanical Engineering',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '15+ Years',
    qualification: '15+ Years’ Experience (Plus) in HVAC & Energy Systems',
    desc: 'Experienced mechanical engineer leading central cooling plant design, thermal simulation, and field quality assurance.',
  },
  {
    id: 'sr-elv-dxb',
    ref: 'SEED-DXB-ELV-07',
    title: 'Sr. ELV Engineer',
    office: 'Dubai Design Office',
    department: 'ELV / ICT & Security',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '8–12 Years',
    qualification: 'Electrical/Electronics Degree · Experienced in ELV/ICT and Security Design',
    desc: 'Specialist engineer designing structured cabling, BMS, CCTV access control, and integrated smart building infrastructure.',
  },

  // DUBAI DESIGN OFFICE - CORPORATE POSITIONS
  {
    id: 'sr-hr-manager-dxb',
    ref: 'SEED-DXB-HR-08',
    title: 'Senior HR Manager',
    office: 'Dubai Design Office',
    department: 'Corporate / HR',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '15+ Years',
    qualification: '15+ Years’ Experience · Preferably Lady Candidate · Preference for Local Emirati, British, Australian, American or Arab National',
    desc: 'Lead strategic human resources, global recruitment, talent management, and employee relations for SEED group offices.',
  },
  {
    id: 'financial-controller-dxb',
    ref: 'SEED-DXB-FC-09',
    title: 'Financial Controller',
    office: 'Dubai Design Office',
    department: 'Corporate / Finance',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '15+ Years',
    qualification: '15+ Years’ Experience · Chartered Accountants from India, US CPA, or ICAI from UK',
    desc: 'Direct corporate financial planning, auditing, tax compliance, budget management, and multi-office financial controls.',
  },

  // INDIA OUTSOURCING OFFICE POSITIONS (Supporting Dubai Design Office)
  {
    id: 'sr-mech-ind',
    ref: 'SEED-IND-SME-01',
    title: 'Sr. Mechanical Engineer',
    office: 'India Outsourcing Office',
    department: 'Mechanical Engineering',
    location: 'Bangalore | Pune | Mumbai | Delhi | Koratty',
    type: 'Full-time',
    experience: '8–12 Years',
    qualification: '8–12 Years’ Experience supporting Dubai Design Office',
    desc: 'Senior mechanical engineer producing calculations, Revit models, and detailed HVAC design for Dubai flagship projects.',
  },
  {
    id: 'sr-elec-ind',
    ref: 'SEED-IND-SEE-02',
    title: 'Sr. Electrical Engineer',
    office: 'India Outsourcing Office',
    department: 'Electrical Engineering',
    location: 'Bangalore | Pune | Mumbai | Delhi | Koratty',
    type: 'Full-time',
    experience: '8–12 Years',
    qualification: '8–12 Years’ Experience supporting Dubai Design Office',
    desc: 'Senior electrical engineer handling single-line diagrams, containment, lighting calculations, and BIM coordination.',
  },
  {
    id: 'inter-mech-ind',
    ref: 'SEED-IND-IME-03',
    title: 'Intermediate Mechanical Engineer',
    office: 'India Outsourcing Office',
    department: 'Mechanical Engineering',
    location: 'Bangalore | Pune | Mumbai | Delhi | Koratty',
    type: 'Full-time',
    experience: '4–6 Years',
    qualification: '4–6 Years’ Experience supporting Dubai Design Office',
    desc: 'Intermediate mechanical design engineer performing duct sizing, hydraulic calculations, and Revit modeling.',
  },
  {
    id: 'inter-elec-ind',
    ref: 'SEED-IND-IEE-04',
    title: 'Intermediate Electrical Engineer',
    office: 'India Outsourcing Office',
    department: 'Electrical Engineering',
    location: 'Bangalore | Pune | Mumbai | Delhi | Koratty',
    type: 'Full-time',
    experience: '4–6 Years',
    qualification: '4–6 Years’ Experience supporting Dubai Design Office',
    desc: 'Intermediate electrical design engineer modeling electrical services, cable sizing, and small power layouts.',
  },
  {
    id: 'bim-eng-ind',
    ref: 'SEED-IND-BIM-05',
    title: 'BIM Engineer / Technician',
    office: 'India Outsourcing Office',
    department: 'Digital Engineering & BIM',
    location: 'Bangalore | Pune | Mumbai | Delhi | Koratty',
    type: 'Full-time',
    experience: '3–5 Years',
    qualification: '3–5 Years’ Experience supporting Dubai Design Office',
    desc: 'Multidisciplinary Revit MEP modeler driving clash resolution, family creation, and 3D coordination for Middle East projects.',
  },
  {
    id: 'sr-elv-ind',
    ref: 'SEED-IND-ELV-06',
    title: 'Sr. ELV Engineer',
    office: 'India Outsourcing Office',
    department: 'ELV / ICT & Security',
    location: 'Bangalore | Pune | Mumbai | Delhi | Koratty',
    type: 'Full-time',
    experience: '8–12 Years',
    qualification: '8–12 Years’ Experience · Experienced in ELV/ICT and Security Design · Electrical/Electronics Degree',
    desc: 'Senior ELV engineer producing schematics, device layouts, and network integration drawings for Dubai Design Office.',
  },
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
  { image: '/projects/anand-krishnan.webp', caption: 'Technical Workshops & Leadership Mentorship' },
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

const OFFICES_FILTER = ['All Openings', 'Dubai Design Office', 'India Outsourcing Office'];

export default function CareersPage() {
  const [selectedOffice, setSelectedOffice] = useState('All Openings');
  const [selectedJob, setSelectedJob] = useState<typeof VACANCIES[0] | null>(null);

  const filteredVacancies = selectedOffice === 'All Openings'
    ? VACANCIES
    : VACANCIES.filter(v => v.office === selectedOffice);

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
                View Open Positions ({VACANCIES.length})
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

      {/* SECTION 04 – CURRENT OPPORTUNITIES */}
      <section id="openings" className="py-24 bg-[#0f172a] border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">OPENINGS</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Current Opportunities</h2>
                <p className="text-slate-400 font-light text-[14px]">
                  Explore available vacancies across our Dubai and India design offices.
                </p>
              </div>

              {/* Office Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {OFFICES_FILTER.map((office) => (
                  <button
                    key={office}
                    onClick={() => setSelectedOffice(office)}
                    className={`px-4 py-2.5 text-[11px] font-bold tracking-wider uppercase rounded-sm border transition-all ${
                      selectedOffice === office
                        ? 'bg-gold text-[#0b0f19] border-gold'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-gold/50'
                    }`}
                  >
                    {office}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Vacancies Cards Grid */}
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVacancies.map((job) => (
              <StaggerItem key={job.id}>
                <div className="bg-[#0b0f19] border border-white/10 p-8 rounded-sm h-full flex flex-col justify-between hover:border-gold/40 transition-colors group relative">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-gold text-[10px] font-bold tracking-[0.15em] uppercase">{job.department}</span>
                      <span className="text-gold bg-gold/10 border border-gold/30 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm">
                        REF: {job.ref}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{job.title}</h3>
                    
                    <div className="space-y-2 mb-6 text-[13px] text-slate-400 font-light">
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-bold shrink-0">📍</span>
                        <span>Location: <strong className="text-white">{job.location}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-bold shrink-0">🏢</span>
                        <span>Department: <strong className="text-white">{job.department}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-bold shrink-0">💼</span>
                        <span>Type: <strong className="text-white">{job.type}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-bold shrink-0">⏱️</span>
                        <span>Experience Required: <strong className="text-gold font-semibold">{job.experience}</strong></span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-[13px] font-light leading-relaxed mb-8">{job.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-sm"
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

      {/* Job Details & Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative z-10 bg-[#0d1526] border border-white/10 p-8 md:p-10 max-w-2xl w-full rounded-sm shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>
            
            <div className="flex items-center gap-3 mb-3">
              <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{selectedJob.office}</span>
              <span className="text-gold bg-gold/10 border border-gold/30 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm">
                REF: {selectedJob.ref}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold text-white mb-4">{selectedJob.title}</h2>
            
            <p className="text-slate-400 text-sm mb-4">📍 Location: <strong className="text-white">{selectedJob.location}</strong> · 🏢 Department: <strong className="text-white">{selectedJob.department}</strong></p>
            <p className="text-slate-400 text-sm mb-6">💼 Type: <strong className="text-white">{selectedJob.type}</strong> · Experience Required: <strong className="text-gold font-semibold">{selectedJob.experience}</strong></p>

            <div className="bg-white/5 border border-white/10 p-4 rounded-sm mb-6 text-sm text-slate-300 leading-relaxed font-light">
              <span className="text-gold text-[10px] font-bold tracking-widest uppercase block mb-1">Qualification Requirements</span>
              {selectedJob.qualification}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedJob.desc}</p>

            <div className="bg-gold/10 border border-gold/30 p-4 rounded-sm mb-8 text-[12px] text-gold font-medium leading-relaxed">
              ⚠️ <strong>Application Notice:</strong> Please make sure to include the Job Reference Code <strong>REF: {selectedJob.ref}</strong> in your email subject line when submitting your CV to <strong>hr@seedengineering.com</strong>.
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:hr@seedengineering.com?subject=Application for REF: ${encodeURIComponent(selectedJob.ref)} - ${encodeURIComponent(selectedJob.title)}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm"
              >
                Apply Now via Email (REF: {selectedJob.ref}) →
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
