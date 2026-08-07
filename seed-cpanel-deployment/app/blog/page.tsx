'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

const ARTICLES = [
  {
    id: 1,
    title: 'Optimising HVAC Systems for Extreme Thermal Climates',
    category: 'Engineering',
    topic: 'Building Performance',
    excerpt: 'Detailed analysis of chilled water plant design, variable primary pumping, and thermal energy storage in Middle Eastern developments.',
    date: 'August 2, 2026',
    image: '/projects/Gran Melia Hotel.jpg',
  },
  {
    id: 2,
    title: 'Achieving Net-Zero Operational Carbon in Luxury Hospitality',
    category: 'Sustainability',
    topic: 'Hospitality',
    excerpt: 'How whole-lifecycle carbon modeling and renewable energy integration allow high-end resorts to meet LEED Platinum without compromising guest luxury.',
    date: 'July 24, 2026',
    image: '/projects/Port De La Mer Hotel.webp',
  },
  {
    id: 3,
    title: 'Clash Detection vs Buildability: Advanced BIM Coordination',
    category: 'BIM',
    topic: 'BIM',
    excerpt: 'Moving beyond automated software clash reports to true engineering constructability at complex discipline interfaces.',
    date: 'July 15, 2026',
    image: '/projects/The Meriva Collection.webp',
  },
  {
    id: 4,
    title: 'Digital Twins and IoT Integration in Modern Smart Buildings',
    category: 'Digital Design',
    topic: 'Digital Engineering',
    excerpt: 'Connecting real-time sensor networks to BIM models to drive operational energy efficiency and predictive maintenance.',
    date: 'June 28, 2026',
    image: '/projects/SAAS - St.Regis.webp',
  },
  {
    id: 5,
    title: 'Commissioning Verification: From Design Intent to Measured Performance',
    category: 'Building Performance',
    topic: 'Building Performance',
    excerpt: 'Why hands-on field testing and environmental balancing are essential to bridging the gap between theoretical models and real-world utility bills.',
    date: 'June 10, 2026',
    image: '/projects/Al Ajlan KSR HQ Tower.webp',
  },
  {
    id: 6,
    title: 'Acoustic Comfort in High-Density Urban Residential Towers',
    category: 'Acoustics',
    topic: 'Residential',
    excerpt: 'Engineering multi-layer noise barrier strategies and vibration isolation for luxury towers adjacent to major transit corridors.',
    date: 'May 30, 2026',
    image: '/projects/City Walk Mixed Use Development.webp',
  },
];

// Company News
const COMPANY_NEWS = [
  {
    headline: 'SEED Awarded MEP Design Consultancy for Flagship Waterfront Development',
    category: 'New Project Wins',
    date: 'August 2026',
    desc: 'Appointed to deliver full MEP, BIM coordination, and sustainability services for a landmark mixed-use waterfront master plan.',
    image: '/projects/ellington-sands.webp',
  },
  {
    headline: 'SEED Expands Digital Delivery Hub with New Office Facility',
    category: 'Office Expansion',
    date: 'July 2026',
    desc: 'Expanding our BIM and computational engineering capacity with upgraded facilities to support growing global project volume.',
    image: '/projects/tbc-bank-headquarters-image-1.webp',
  },
  {
    headline: 'Senior Engineering Appointments Strengthen Leadership in Asia-Pacific',
    category: 'Team Announcements',
    date: 'June 2026',
    desc: 'Welcoming industry veterans to lead our Singapore and regional design centres, accelerating Asia-Pacific expansion.',
    image: '/projects/SAAS - St.Regis.webp',
  },
  {
    headline: 'Strategic Collaboration on Net-Zero Building Technologies Announced',
    category: 'New Partnerships',
    date: 'May 2026',
    desc: 'Partnering with leading green research institutes to benchmark machine-learning energy simulation tools.',
    image: '/projects/Port De La Mer Hotel.webp',
  },
  {
    headline: 'SEED Achieves International Quality and Environmental ISO Standards',
    category: 'Certifications',
    date: 'April 2026',
    desc: 'Formal accreditation for ISO 9001 quality management and ISO 14001 environmental management across all design centres.',
    image: '/projects/Al Ajlan KSR HQ Tower.webp',
  },
  {
    headline: 'Celebrating 20+ Years of Engineering Excellence Across 21 Countries',
    category: 'Major Milestones',
    date: 'March 2026',
    desc: 'Reflecting on two decades of high-performance buildings, 1,000+ completed projects, and over 200 dedicated professionals.',
    image: '/projects/wasl-tower.webp',
  },
];

const AWARDS = [
  { title: 'Big Project Middle East Awards', year: '2024', desc: 'MEP Consultancy of the Year for high-rise residential & mixed-use engineering.', icon: '🏆' },
  { title: 'Autodesk Imagine Awards', year: '2023', desc: 'Excellence in Digital Engineering & Multidisciplinary BIM Coordination.', icon: '📐' },
  { title: 'CIBSE MENA Awards', year: '2023', desc: 'Building Performance Consultancy Award for energy-efficient building systems.', icon: '🌱' },
  { title: 'MEERA Awards', year: '2022', desc: 'ISHRAE Award for HVAC Design Innovation and Sustainable Central Plant Engineering.', icon: '🌟' },
  { title: 'Middle East Consultant Awards', year: '2022', desc: 'Executive Consultancy Award for Technical Rigour & Project Supervision.', icon: '🎖️' },
];

const EVENTS = [
  { name: 'Big 5 Global', type: 'Exhibition & Panel', date: 'Nov 2026 · Dubai', desc: 'Speaking panel on Smart MEP Infrastructure & AI-Driven HVAC Optimisation.' },
  { name: 'CTBUH Annual Conference', type: 'Keynote Summit', date: 'Oct 2026 · Global', desc: 'Technical presentation on MEP System Integration in 300m+ Supertall Towers.' },
  { name: 'CIBSE MENA Technical Seminar', type: 'CPD Workshop', date: 'Sep 2026 · UAE', desc: 'Hosting an interactive session on Field Commissioning & System Verification.' },
  { name: 'ISHRAE HVAC Expo', type: 'Conference', date: 'Aug 2026 · India', desc: 'Showcasing sustainable central cooling plant case studies across tropical climates.' },
  { name: 'GBB Hospitality Summit', type: 'Panel Discussion', date: 'Jul 2026 · Regional', desc: 'Designing zero-downtime MEP systems for 5-Star luxury resort destinations.' },
];

const MEDIA_ITEMS = [
  { outlet: 'Middle East Architect', title: 'How SEED is Engineering Dubai\'s Next Generation of High-Rises', date: 'July 2026' },
  { outlet: 'Construction Week Online', title: 'Interview: Balancing Luxury Hospitality with Net-Zero Energy Targets', date: 'June 2026' },
  { outlet: 'MEP Middle East Podcast', title: 'Episode 42: Clash Detection vs Buildability in Multidisciplinary BIM', date: 'May 2026' },
  { outlet: 'Technical Press Release', title: 'SEED Delivers Integrated MEP Commissioning Framework for Wasl Tower', date: 'April 2026' },
];

const TOPICS = [
  'All Topics',
  'Hospitality',
  'Residential',
  'Sustainability',
  'BIM',
  'Digital Engineering',
  'Fire Protection',
  'Building Performance',
  'Acoustics',
];

export default function InsightsPage() {
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const filteredArticles = selectedTopic === 'All Topics'
    ? ARTICLES
    : ARTICLES.filter(a => a.category.toLowerCase() === selectedTopic.toLowerCase() || a.topic.toLowerCase() === selectedTopic.toLowerCase());

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-[#0b0f19] min-h-screen text-slate-300 font-sans selection:bg-gold selection:text-[#0b0f19]">
      
      {/* SECTION 01 – HERO BANNER */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="/dubai_skyline_night_1780503516791.webp"
            alt="Insights Hero"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-[#0b0f19]/90 to-[#0b0f19]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase mb-4 block">
              KNOWLEDGE & UPDATES
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Insights
            </h1>
            <p className="text-lg md:text-xl font-sans font-light text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Explore SEED’s latest perspectives, industry expertise, project updates, awards and events. From engineering innovation to company milestones, discover how we contribute to shaping the future of the built environment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02 – FEATURED INSIGHT */}
      <section className="py-20 md:py-28 bg-[#0f172a] border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-12">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 block">FEATURED</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Featured Insight</h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative bg-[#0a1124] border border-white/10 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-gold/40 transition-colors">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[340px]">
                <Image
                  src="/projects/seed wasl tower news.webp"
                  alt="Engineering High-Performance Buildings for the Future"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a1124]/90 hidden lg:block" />
              </div>
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">FEATURED ARTICLE</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors leading-tight">
                  Engineering High-Performance Buildings for the Future
                </h3>
                <p className="text-slate-400 font-light text-[14px] leading-relaxed mb-8">
                  Discover how integrated MEP design, advanced BIM workflows, and continuous performance verification are redefining modern building engineering across complex developments.
                </p>
                <div>
                  <Link href="/blog/engineering-high-performance-buildings" className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm">
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 08 – INSIGHTS BY TOPIC (FILTER CONTROL) */}
      <section className="py-12 bg-[#0b0f19] border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-1 block">EXPLORE BY TOPIC</span>
                <h2 className="text-2xl font-serif font-bold text-white">Topics</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-4 py-2 text-[11px] font-semibold tracking-wider uppercase rounded-sm border transition-all ${
                      selectedTopic === topic
                        ? 'bg-gold text-[#0b0f19] border-gold'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-gold/50'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03 – LATEST ARTICLES */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">KNOWLEDGE BASE</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Latest Articles</h2>
            </div>
          </Reveal>

          {/* 3-Column Articles Grid */}
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <StaggerItem key={art.id}>
                <div className="bg-[#0f172a] border border-white/8 rounded-sm overflow-hidden flex flex-col h-full group hover:border-gold/40 transition-colors">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a1020]">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gold text-[10px] font-bold tracking-[0.15em] uppercase">{art.category}</span>
                        <span className="text-slate-500 text-[11px] font-light">{art.date}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{art.title}</h3>
                      <p className="text-slate-400 text-[13px] font-light leading-relaxed mb-6">{art.excerpt}</p>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <Link href={`/blog/article-${art.id}`} className="text-gold text-[11px] font-bold tracking-[0.1em] uppercase group-hover:underline flex items-center gap-1">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 04 – NEWS */}
      <section className="py-24 bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">UPDATES</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Company News</h2>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_NEWS.map((news, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-[#0b0f19] border border-white/8 p-6 rounded-sm h-full flex flex-col justify-between group hover:border-gold/40 transition-colors">
                  <div>
                    <div className="relative aspect-[16/9] w-full mb-6 overflow-hidden rounded-sm bg-[#060e25]">
                      <Image src={news.image} alt={news.headline} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gold text-[10px] font-bold tracking-[0.15em] uppercase">{news.category}</span>
                      <span className="text-slate-500 text-[11px]">{news.date}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors">{news.headline}</h3>
                    <p className="text-slate-400 text-[13px] font-light leading-relaxed">{news.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 05 – AWARDS & RECOGNITION */}
      <section className="py-24 bg-[#0b0f19] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">ACCOLADES</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Awards & Recognition</h2>
              <p className="text-slate-400 font-light text-[14px]">Industry honors celebrating SEED’s commitment to technical precision and engineering performance.</p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {AWARDS.map((aw, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#0f172a] border border-white/10 p-6 rounded-sm h-full flex flex-col justify-between hover:border-gold/40 transition-colors group">
                  <div>
                    <div className="text-3xl mb-4">{aw.icon}</div>
                    <span className="text-gold text-sm font-serif font-bold block mb-2">{aw.year}</span>
                    <h3 className="font-serif text-base font-bold text-white mb-3 group-hover:text-gold transition-colors">{aw.title}</h3>
                    <p className="text-slate-400 text-[12px] font-light leading-relaxed">{aw.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 06 – EVENTS */}
      <section className="py-24 bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">ENGAGEMENT</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Events & Industry Engagement</h2>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((ev, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#0b0f19] border border-white/8 p-8 rounded-sm h-full flex flex-col justify-between hover:border-gold/40 transition-colors">
                  <div>
                    <span className="text-gold text-[10px] font-bold tracking-[0.15em] uppercase block mb-2">{ev.type}</span>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">{ev.name}</h3>
                    <p className="text-slate-400 text-[12px] font-medium mb-4">{ev.date}</p>
                    <p className="text-slate-400 text-[13px] font-light leading-relaxed">{ev.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 07 – MEDIA COVERAGE */}
      <section className="py-24 bg-[#0b0f19] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="mb-16 max-w-3xl">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">PRESS</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">In the Media</h2>
            </div>
          </Reveal>

          <div className="space-y-4 max-w-5xl">
            {MEDIA_ITEMS.map((item, i) => (
              <Reveal key={i}>
                <div className="bg-[#0f172a] border border-white/8 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-gold/40 transition-colors group">
                  <div>
                    <span className="text-gold text-[10px] font-bold tracking-[0.15em] uppercase block mb-2">{item.outlet} · {item.date}</span>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-white group-hover:text-gold transition-colors">{item.title}</h3>
                  </div>
                  <span className="text-gold text-[11px] font-bold tracking-[0.1em] uppercase shrink-0">Read More →</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 – NEWSLETTER */}
      <section className="py-24 bg-[#0a1124] border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 block">NEWSLETTER</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-slate-400 font-light text-[15px] max-w-xl mx-auto mb-10 leading-relaxed">
              Receive the latest engineering insights, company news and project updates directly from SEED.
            </p>

            {subscribed ? (
              <div className="p-4 bg-gold/10 border border-gold/40 text-gold text-sm font-semibold rounded-sm inline-block">
                ✓ Thank you for subscribing! You will receive our latest updates directly in your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/15 px-5 py-4 text-slate-200 text-sm outline-none focus:border-gold rounded-sm placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors shrink-0 rounded-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* SECTION 10 – CALL TO ACTION */}
      <section className="py-28 relative overflow-hidden bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 block">COLLABORATION</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Let’s Shape the Future Together
            </h2>
            <p className="text-slate-300 font-light text-lg max-w-xl mx-auto mb-10">
              Whether you’re looking for engineering expertise, project collaboration or industry insights, our team is ready to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm">
                Contact Us
              </Link>
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
