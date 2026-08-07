import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionLabel } from '@/components/ui/Section';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import InquiryForm from '@/components/forms/InquiryForm';
import { portfolio } from '@/lib/data';

export const metadata = { title: 'MEP Projects', description: 'Selected MEP project case studies.' };

export default function Page() {
  const projects = portfolio.filter((p) => p.division === 'mep');

  return (
    <>
      <PageHero
        eyebrow="MEP · Portfolio"
        title="The portfolio is the proof. The work speaks louder than the deck."
        intro="A selection of MEP projects across commercial, residential, hospitality and healthcare. Each one a story of a brief, a constraint, and the engineering that resolved them."
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
            <SectionLabel dark>Your Project</SectionLabel>
            <h2 className="h2 text-white max-w-md">Tell us where it sits in the cycle.</h2>
          </div>
          <div className="lg:col-span-7"><InquiryForm variant="dark" /></div>
        </div>
      </Section>
    </>
  );
}
