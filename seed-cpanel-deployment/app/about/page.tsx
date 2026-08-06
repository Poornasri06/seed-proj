import Link from 'next/link';
import Image from 'next/image';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { CountUp } from '@/components/ui/CountUp';
import { team } from '@/lib/data';

export const metadata = {
  title: 'About',
  description:
    'The story behind SEED Engineering — a global MEP consultancy founded in Dubai in 2005, with 200+ engineers across 7 offices.',
};

const TONE_BASE = 'bg-[#050816]';
const TONE_LIFT = 'bg-[#0c1437]';
const TONE_NAVY = 'bg-navy';

const milestones = [
  { year: '2005', t: 'Founded in Dubai', b: 'SEED was formed with a vision to bridge the gap in building engineering — to positively impact the parameters that define the design of MEP services in the region.' },
  { year: '2010', t: 'International expansion', b: 'First projects beyond the UAE — into India and East Africa. The first hospitality flagships were delivered in this period.' },
  { year: '2014', t: 'Design centres in 5 cities', b: 'Offices established in Singapore, Mumbai, Kochi and Bangalore, supporting projects across Asia and the subcontinent.' },
  { year: '2018', t: 'Sustainability practice', b: 'A dedicated sustainability group formed within SEED to deliver management and advisory services for green building projects across the UAE and India.' },
  { year: '2024', t: '250+ projects · 17 countries', b: 'Active across 28 cities. A team of 200+ design professionals serving hospitality, healthcare, residential, sports, cultural and commercial sectors.' },
];




export default function AboutPage() {
  const leadership = team;

  return (
    <>
      {/* ============ PAGE HERO ============ */}
      <section className={`relative ${TONE_BASE} text-white pt-40 pb-28 overflow-hidden`}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#050816]" />
        <div className="relative max-w-container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-12 h-px bg-champagne" />
              <span className="label text-champagne tracking-[0.35em]">ABOUT SEED</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-[-0.015em] max-w-4xl">
              We solve engineering problems. We reduce project risk. We coordinate complex systems. We deliver measurable building performance.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-10 max-w-2xl text-lg text-white/65 leading-relaxed">
              SEED Engineering was founded in early 2005 with a single belief — that the systems
              inside a building deserve the same craft as the architecture around them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ FOUNDING STORY ============ */}
      <section className={`${TONE_LIFT} text-white py-24 md:py-32`}>
        <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label text-champagne mb-5 tracking-[0.3em]">THE FOUNDING STORY</p>
              <h2 className="font-sans text-4xl md:text-5xl font-medium leading-[1.05]">
                A studio built around a different belief about <span className="font-medium">engineering.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 text-white/65 leading-relaxed space-y-5">
            <p>
              SEED was formed in early 2005 with a vision to bridge the gap in the field of
              building engineering — and to positively impact the parameters that define the
              design of MEP engineering services. Our focus on quality in design and deliverables
              has earned us credibility, enabling us to undertake landmark projects across the
              Middle East, Africa and the Indian subcontinent.
            </p>
            <p>
              Today the practice employs more than 200 experienced design professionals across
              Dubai, Singapore, Mumbai, Kochi, Bangalore, Delhi and Pune. SEED is one of the
              fastest growing engineering practices in the cities we serve, having associated
              with major international architects and consultants to streamline our design
              processes and offer innovative concepts to our esteemed clientele.
            </p>
            <p>
              Sustainable and energy-efficient design — the principle on which SEED was founded —
              remains a core focus. Our sustainability group provides management and advisory
              services for numerous green building projects across the UAE and India.
            </p>
          </div>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <section className={`${TONE_BASE} text-white py-24 md:py-32`}>
        <div className="max-w-container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <p className="label text-champagne mb-5 tracking-[0.3em]">LEADERSHIP</p>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
                Meet the Management Team
              </h2>
              <p className="mt-6 text-white/55 leading-relaxed">
                Our people are our roots. The leadership team goes the extra mile to stay
                involved in live projects in addition to their administrative responsibilities —
                bringing decades of experience delivering quality projects across the world.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((m: any) => (
              <StaggerItem key={m._id || m.name} className="flex flex-col">
                <div className="bg-[#0a1130] border border-white/8 p-8 md:p-10 h-full flex-grow flex flex-col items-center text-center">
                  <div className="relative aspect-[3/4] w-full mb-7 overflow-hidden bg-[#060e25]">
                    {m.image ? (
                      <Image src={m.image} alt={m.name} fill className="object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="font-sans text-7xl text-champagne/30 select-none">
                          {m.name.split(' ').map((p: string) => p[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-sans text-2xl md:text-3xl font-medium text-white leading-tight">
                      {m.name}
                    </h3>
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-champagne transition-colors" aria-label={`${m.name} LinkedIn`}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    )}
                  </div>
                  <p className="label text-champagne tracking-[0.25em] mb-5">{m.role}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{m.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <p className="text-center text-white/40 text-sm mt-10 max-w-2xl mx-auto">
            Plus 200+ design professionals across Dubai, Singapore, Mumbai, Kochi, Bangalore, Delhi
            and Pune.
          </p>
        </div>
      </section>

      {/* ============ NUMBERS ============ */}
      <section className={`${TONE_NAVY} text-white py-20 md:py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { v: 20, suf: '+', l: 'Years in Practice' },
            { v: 200, suf: '+', l: 'Design Professionals' },
            { v: 7, suf: '', l: 'Design Centres' },
            { v: 17, suf: '', l: 'Countries' },
          ].map((s) => (
            <Reveal key={s.l}>
              <p className="font-sans text-5xl md:text-7xl font-medium text-white">
                <CountUp to={s.v} suffix={s.suf} />
              </p>
              <p className="label text-champagne/80 mt-4 tracking-[0.25em]">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ OUR ENGINEERING PROCESS ============ */}
      <section className={`${TONE_BASE} text-white py-24 md:py-32`}>
        <div className="max-w-container mx-auto px-6">
          <div className="mb-16">
            <Reveal>
              <p className="label text-champagne mb-5 tracking-[0.3em]">OUR PROCESS</p>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
                Our Engineering Process
              </h2>
              <p className="mt-6 text-white/55 leading-relaxed max-w-2xl">
                Engineering responsibility does not end with drawings. Five progressive stages — the framework that governs every project we deliver from brief to building performance.
              </p>
            </Reveal>
          </div>

          <div className="space-y-0 border border-white/10">
            {[
              {
                step: '01',
                title: 'Define Design Criteria',
                desc: 'Every project begins with understanding the building, its operational requirements, applicable codes, energy targets, and owner expectations. We establish the design basis before a single system is selected.',
                outputs: ['Design Basis Report', 'Load Calculations', 'Performance Criteria', 'Code Compliance Strategy'],
              },
              {
                step: '02',
                title: 'Engineer the Systems',
                desc: 'We develop HVAC, Electrical, Plumbing, Fire Protection, ELV, and Sustainability strategies based on engineering calculations — not generic templates. System selection is driven by performance, constructability, maintainability, and lifecycle cost.',
                outputs: ['Engineering Calculations', 'Equipment Schedules', 'System Narratives', 'Preliminary Cost Alignment'],
              },
              {
                step: '03',
                title: 'Coordinate Across Disciplines',
                desc: 'Most construction issues originate at discipline interfaces. We coordinate architecture, structure, MEP, specialist vendors, and site constraints before construction begins. Clash detection is only one part of coordination — the objective is buildability.',
                outputs: ['Coordinated BIM Models', 'Clash Resolution Reports', 'Interface Reviews', 'Construction-Ready Layouts'],
              },
              {
                step: '04',
                title: 'Validate Before Construction',
                desc: 'Every major engineering decision is reviewed against performance requirements, installation constraints, and operational intent. Designs are subjected to internal quality checks before issue.',
                outputs: ['Design Reviews', 'Quality Assurance Checks', 'Risk Register Updates', 'Issue-for-Construction Documentation'],
              },
              {
                step: '05',
                title: 'Verify Performance On Site',
                desc: 'Engineering responsibility does not end with drawings. We verify installation quality, witness testing, support commissioning activities, and confirm systems perform as intended.',
                outputs: ['Site Inspections', 'Testing & Balancing Reviews', 'Commissioning Reports', 'Final Performance Verification'],
              },
            ].map((phase, i) => (
              <Reveal key={i}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 border-b border-white/10 last:border-b-0">
                  {/* Step number */}
                  <div className="md:col-span-1 bg-[#050816] p-8 flex items-start justify-center md:justify-start">
                    <span className="text-champagne/60 font-sans text-2xl font-medium">{phase.step}</span>
                  </div>
                  {/* Title + desc */}
                  <div className="md:col-span-5 bg-[#050816] p-8 border-l border-white/10">
                    <h3 className="font-sans text-xl md:text-2xl font-medium text-white mb-4">{phase.title}</h3>
                    <p className="text-white/55 leading-relaxed text-[14px]">{phase.desc}</p>
                  </div>
                  {/* Outputs */}
                  <div className="md:col-span-6 bg-[#030610] p-8 border-l border-white/10">
                    <p className="text-champagne text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">Outputs</p>
                    <ul className="space-y-2">
                      {phase.outputs.map((o, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/60 text-[13px] leading-relaxed">
                          <span className="text-champagne/50 mt-1 shrink-0">—</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MILESTONES ============ */}
      <section className={`${TONE_LIFT} text-white py-24 md:py-32`}>
        <div className="max-w-container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <p className="label text-champagne mb-5 tracking-[0.3em]">OUR JOURNEY</p>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
                Two decades of buildings, in <span className="font-medium">chapters.</span>
              </h2>
            </Reveal>
          </div>

          <div className="space-y-0 border-t border-white/10">
            {milestones.map((m) => (
              <Reveal key={m.year}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-white/10 py-10">
                  <div className="md:col-span-2">
                    <p className="font-sans text-4xl md:text-5xl text-champagne font-medium">
                      {m.year}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-sans text-xl md:text-2xl text-white font-medium">{m.t}</h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-white/55 leading-relaxed">{m.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <Link
              href="/why-seed"
              className="inline-flex items-center gap-3 bg-champagne hover:bg-white text-navy px-8 py-4 text-sm font-medium tracking-[0.18em] transition-colors"
            >
              OUR PHILOSOPHY
            </Link>
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-3 border border-white/40 text-white hover:bg-white hover:text-navy px-8 py-4 text-sm font-medium tracking-[0.18em] transition-colors"
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
