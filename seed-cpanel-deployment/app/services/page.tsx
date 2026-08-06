import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata = {
  title: 'Services | SEED Engineering',
  description: 'Browse through our range of services spanning MEP Engineering, ELV/ICT, Sustainability, and Specialty Design.',
};

const SERVICES_DATA = [
  {
    id: 'mep-design',
    title: 'MEP Design',
    image: '/services/MEP.png',
    list: [
      'HVAC Systems',
      'Electrical & Power Distribution',
      'Plumbing & Drainage',
      'Fire Protection Systems',
      'Central Plant Design'
    ],
    desc: 'Comprehensive Mechanical, Electrical, and Plumbing design solutions built for efficiency, safety, and operational longevity.'
  },
  {
    id: 'mep-supervision',
    title: 'MEP Supervision',
    image: '/services/MEP supervision.png',
    list: [
      'Site Inspections',
      'Quality Control & Assurance',
      'Testing & Commissioning',
      'Design Compliance Verification',
      'Project Handover Support'
    ],
    desc: 'Expert on-site supervision ensuring that MEP installations strictly adhere to design specifications and international standards.'
  },
  {
    id: 'elv-ict-av-design',
    title: 'ELV/ICT & AV Design',
    image: '/service_electrical_1780505637062.webp',
    list: [
      'Structured Cabling Systems',
      'Data Centre Infrastructure',
      'Building Management Systems (BMS)',
      'Audio Visual Integration',
      'Smart Building Solutions'
    ],
    desc: 'Advanced Extra Low Voltage, Information & Communication Technology, and Audio Visual designs for connected, intelligent environments.'
  },
  {
    id: 'security-systems-design',
    title: 'Security Systems Design',
    image: '/services/intergrated security.jpeg',
    list: [
      'CCTV Surveillance',
      'Access Control Systems',
      'Intrusion Detection',
      'Perimeter Security',
      'Integrated Security Management'
    ],
    desc: 'Robust security architectures tailored to protect physical assets and ensure comprehensive safety across your facilities.'
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    image: '/services/sustainablity.jpeg',
    list: [
      'Energy Modeling & Analysis',
      'LEED / ESTIDAMA Facilitation',
      'Net Zero Strategies',
      'Daylight Simulation',
      'Green Building Certification'
    ],
    desc: 'Eco-conscious engineering practices that reduce environmental footprint while optimizing building performance and resource efficiency.'
  },
  {
    id: 'acoustics-consultancy',
    title: 'Acoustics Consultancy',
    image: '/services/Acoustics.jpeg',
    list: [
      'Architectural Acoustics',
      'Noise Control Engineering',
      'Vibration Isolation',
      'Environmental Noise Studies',
      'Acoustic Testing'
    ],
    desc: 'Specialized acoustic design ensuring optimal sound quality, noise reduction, and regulatory compliance for complex spaces.'
  },
  {
    id: 'swimming-pool-water-feature-design',
    title: 'Swimming Pool & Water Feature Design',
    image: '/luxury_resort_pool_1780503490609.webp',
    list: [
      'Hydraulic System Design',
      'Filtration & Treatment',
      'Water Chemistry Management',
      'Thematic Water Features',
      'Pumping & Circulation'
    ],
    desc: 'Precision engineering for breathtaking pools and water features, focusing on hygiene, hydraulic balance, and aesthetic integration.'
  },
  {
    id: 'spa-design',
    title: 'Spa Design',
    image: '/services/Spa.avif',
    list: [
      'Thermal Experience Design',
      'Hydrotherapy Systems',
      'Wellness Facility Engineering',
      'Specialty Treatment Rooms',
      'Spa MEP Coordination'
    ],
    desc: 'Creating immersive wellness environments through meticulously engineered thermal, hydro, and atmospheric systems.'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0b0f19] min-h-screen text-slate-300 font-sans selection:bg-gold selection:text-[#0b0f19]">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="/dubai_skyline_night_1780503516791.webp"
            alt="Services Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-[#0b0f19]/90 to-[#0b0f19]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 block">OUR CAPABILITIES</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Services</h1>
            <p className="text-lg md:text-xl font-sans font-light text-slate-400 leading-relaxed">
              Eight integrated engineering disciplines — each backed by analysis, coordinated through BIM, and verified through commissioning. From HVAC to sustainability, every service is designed to deliver measurable building performance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          {SERVICES_DATA.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div id={service.id} key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32 last:mb-0 ${isEven ? '' : 'lg:flex-row-reverse'} scroll-mt-24`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <Reveal delay={0.1}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl border border-white/5 group">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 to-transparent opacity-60 pointer-events-none" />
                    </div>
                  </Reveal>
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <Reveal delay={0.2}>
                    <div className="mb-10">
                      <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">0{idx + 1}</span>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{service.title}</h2>
                      <p className="text-[15px] text-slate-400 font-light leading-relaxed max-w-lg">
                        {service.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {service.list.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-gold mt-1.5 text-[8px]">◆</span>
                          <span className="text-[13px] text-slate-300 font-medium tracking-wide">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 border-t border-white/5 bg-[#0f172a]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Planning a complex building project?</h2>
            <p className="text-slate-400 font-light text-[15px] mb-8 max-w-xl mx-auto">Speak with our engineering team about MEP design, sustainability, BIM coordination and commissioning requirements.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300">
                REQUEST CONSULTATION
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center px-10 py-5 border border-white/20 text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase hover:border-white hover:bg-white/5 transition-colors duration-300">
                EXPLORE PROJECTS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
