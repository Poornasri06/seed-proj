import Image from 'next/image';
import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

export const metadata = {
  title: 'Sectors | SEED Engineering',
  description: 'Explore the diverse sectors and industries we engineer, design, and supervise across the globe.',
};

const SECTORS_DATA = [
  {
    id: 'hospitality',
    title: 'Hospitality',
    image: '/sectors/jw marriot sevtor image.jpeg',
    desc: 'Engineering world-class luxury resorts, hotels, and vibrant lifestyle destinations with guest comfort and operational efficiency at the core.',
  },
  {
    id: 'residential',
    title: 'Residential',
    image: '/sectors/stregis sector image.avif',
    desc: 'High-rise luxury apartments, branded residences, and master-planned communities designed for premium modern living.',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    image: '/sectors/Al Ajlan KSR HQ Tower.png',
    desc: 'State-of-the-art office towers, corporate headquarters, and mixed-use business hubs that foster productivity and sustainability.',
  },
  {
    id: 'education',
    title: 'Education',
    image: '/sectors/Sobha Hartland.jpeg',
    desc: 'Campuses, schools, and specialized educational facilities engineered for safety, longevity, and enhanced learning environments.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    image: '/sectors/NMC Hospital.jpg',
    desc: 'Hospitals, specialized clinics, and medical centers demanding rigorous compliance, critical power resilience, and sterile environments.',
  },
  {
    id: 'retail',
    title: 'Retail',
    image: '/sectors/galleria-mall.jpg',
    desc: 'Shopping malls, high-street retail stores, and entertainment complexes with dynamic lighting and advanced climate control.',
  },
  {
    id: 'sports-stadiums',
    title: 'Sports & Stadiums',
    image: '/sectors/dammam stadium.webp',
    desc: 'Large-scale arenas, cricket stadiums, and multi-purpose sports complexes with demanding public health and lighting requirements.',
  },
  {
    id: 'entertainment-cultural-public-buildings',
    title: 'Entertainment, Cultural & Public Buildings',
    image: '/sectors/sector_cultural_1781248059245.webp',
    desc: 'Museums, convention centers, entertainment venues and civic landmarks that require bespoke acoustic, lighting, and environmental control designs.',
  },
  {
    id: 'airports',
    title: 'Airports',
    image: '/sectors/dxb airport.png',
    desc: 'Aviation hubs and terminal buildings where uncompromised security, fire life safety, and heavy infrastructure are paramount.',
  },
  {
    id: 'theme-parks',
    title: 'Theme Parks',
    image: '/sectors/IMG.jpg',
    desc: 'Immersive entertainment destinations requiring highly specialized mechanical, plumbing, and thematic acoustic engineering.',
  },
  {
    id: 'villas',
    title: 'Villas',
    image: '/sectors/JEBEL HAFEET MOUNTAIN VILLA, AL AIN.webp',
    desc: 'Ultra-luxury private estates and signature villa developments with integrated smart home automation and bespoke pools.',
  },
  {
    id: 'infrastructure-sustainable-communities',
    title: 'Infrastructure & Sustainable Communities',
    image: '/sectors/ain-al-fayda.jpeg',
    desc: 'District cooling networks, master-plan utility distributions, and net-zero community developments driving the future of urban living.',
  },
];

export default function SectorsPage() {
  return (
    <div className="bg-[#0b0f19] min-h-screen text-slate-300 font-sans selection:bg-gold selection:text-[#0b0f19]">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="/city_aerial_night_1780504844349.webp"
            alt="Sectors Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-[#0b0f19]/90 to-[#0b0f19]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <Reveal>
            <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 block">OUR EXPERTISE</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Sectors</h1>
            <p className="text-lg md:text-xl font-sans font-light text-slate-400 leading-relaxed">
              We engineer, design, and supervise complex projects across a wide spectrum of industries. Every sector brings unique demands, and we bring tailored expertise to meet them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {SECTORS_DATA.map((sector, idx) => (
              <StaggerItem key={idx}>
                <Link id={sector.id} href={`/projects?sector=${encodeURIComponent(sector.title)}`} className="group relative block scroll-mt-24 h-full">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl border border-white/5 mb-6">
                    <Image 
                      src={sector.image} 
                      alt={sector.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* Number Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase bg-[#0b0f19]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 group-hover:text-champagne transition-colors">{sector.title}</h2>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                      {sector.desc}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 border-t border-white/5 bg-[#0f172a]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">Discuss a project in your sector?</h2>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300">
              CONTACT OUR TEAM
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
