import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionLabel } from '@/components/ui/Section';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

import { formatDate } from '@/lib/utils';

import { fallbackPosts } from '@/lib/blog';

export const metadata = { title: 'Engineering Insights | SEED Engineering', description: 'Technical insights, engineering analysis and field reports from SEED Engineering — covering HVAC design, commissioning, sustainability, BIM and building performance.' };

export default function Blog() {
  const posts = [...fallbackPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="bg-[#0b0f19] min-h-screen">
      <PageHero
        eyebrow="Engineering Insights"
        title="Technical analysis, field reports and engineering perspective."
        intro="Practical insights from engineers who design, coordinate and commission complex buildings — covering MEP systems, sustainability, BIM coordination and building performance across the Middle East and beyond."
      />
      
      {/* Article Grid */}
      <Section dark className="pt-0">
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-16">
          {posts.map((p: any) => (
            <StaggerItem key={p._id || p.slug}>
              <Link href={`/blog/${p.slug}`} className="block group h-full flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/5 mb-6 shadow-lg">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#0b0f19]/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex-grow flex flex-col">
                  <p className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-3 flex items-center">
                    {p.category} <span className="mx-2 text-white/20">|</span> <span className="text-white/60">{formatDate(p.publishedAt)}</span>
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-champagne transition-colors">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light mt-auto">{p.excerpt}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </div>
  );
}
