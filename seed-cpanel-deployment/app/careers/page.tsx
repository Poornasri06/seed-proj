import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionLabel } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

export const metadata = { title: 'Careers', description: 'Engineering and design roles at Seed Engineering, Dubai.' };

export default function Careers() {
  return (
    <div className="bg-[#0b0f19] min-h-screen text-slate-300 font-sans selection:bg-gold selection:text-[#0b0f19]">
      <PageHero
        eyebrow="Careers"
        title="A studio that runs on engineers who still draw, still walk site, and still sign their work."
        intro="We hire rarely, and slowly. When we do, we look for engineers who would rather be precise than busy."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>How We Hire</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">The studio is small enough that every hire changes it.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 prose-editorial max-w-none">
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                Seed Engineering does not run continuous recruitment. We open roles when a specific
                project, practice or capability needs them. We close them when the right person is found.
              </p>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Most of our team came in through projects we shared — consultants who joined contractors
                who joined our studio after working alongside us. If you have not worked with us before
                and want to, the best route is a portfolio and a short message.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Image Grid / Culture section */}
      <Section className="py-0">
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StaggerItem className="aspect-square relative overflow-hidden rounded-sm group">
            <Image src="/modern_mep_interior_1780503503410.webp" alt="Engineering Studio" fill className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-[#0b0f19]/30" />
          </StaggerItem>
          <StaggerItem className="aspect-square relative overflow-hidden rounded-sm group md:col-span-2">
            <Image src="/hero.webp" alt="Dubai Site" fill className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-[#0b0f19]/30" />
          </StaggerItem>
          <StaggerItem className="aspect-square relative overflow-hidden rounded-sm group">
            <Image src="/skyscraper_looking_up_1780504822033.webp" alt="Construction detail" fill className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-[#0b0f19]/30" />
          </StaggerItem>
        </Stagger>
      </Section>

      <Section dark className="mt-24 border-t border-white/5 bg-[#0f172a]">
        <Reveal>
          <SectionLabel dark>Open Roles</SectionLabel>
          <div className="bg-[#0b0f19] border border-white/10 rounded-sm p-10 md:p-16 max-w-4xl mx-auto text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <Image src="/dubai_skyline_night_1780503516791.webp" alt="Background" fill className="object-cover" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">No active openings right now.</h2>
              <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-10 font-light text-base md:text-lg">
                We are not actively recruiting. If our work resonates and your experience is relevant, send
                us a portfolio anyway — we keep a small short-list for future practice growth.
              </p>
              <a 
                href="mailto:careers@seedengineering.ae" 
                className="inline-flex items-center justify-center px-10 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 rounded-sm"
              >
                Send a Portfolio
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
