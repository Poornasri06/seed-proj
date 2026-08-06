import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionLabel } from '@/components/ui/Section';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import InquiryForm from '@/components/forms/InquiryForm';
import { portfolio } from '@/lib/data';

export const metadata = { title: 'Pool Projects', description: 'Selected pool projects from Seed Engineering.' };

export default function Page() {
  const projects = portfolio.filter((p) => p.division === 'pool');

  return (
    <>
      <PageHero
        eyebrow="Pool · Portfolio"
        title="Water as architecture. A selection of work from the division."
        intro="Hospitality, private and architect-led pool projects across the UAE. Every project is a chemistry problem, a hydraulic problem, and a finish problem solved at the same time."
      />
      <Section>
        <SectionLabel>Case Studies</SectionLabel>
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p: any) => (
            <StaggerItem key={p._id || p.slug}>
              <div id={p.slug}>
                <ProjectCard project={p} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionLabel dark>Your Pool</SectionLabel>
            <h2 className="h2 text-white max-w-md">New build, renovation, or service — tell us where you are.</h2>
          </div>
          <div className="lg:col-span-7"><InquiryForm variant="dark" defaultService="Pool Construction" /></div>
        </div>
      </Section>
    </>
  );
}
