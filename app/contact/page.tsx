import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionLabel } from '@/components/ui/Section';
import InquiryForm from '@/components/forms/InquiryForm';
import { settings, offices } from '@/lib/data';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Seed Engineering — offices in Dubai, Singapore and India.',
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={<>A studio in Dubai. <span>Reachable directly,</span> by anyone.</>}
        intro="No call centres. No gatekeepers. Engineers answer engineering questions — and partners answer the rest."
      />

      {/* Office Locations */}
      <Section tone="ink">
        <SectionLabel dark>Our Offices</SectionLabel>
        <h2 className="font-sans text-3xl md:text-4xl font-medium text-white mb-12">
          Global Presence
        </h2>

        <div className="space-y-16">
          {offices.map((office) => (
            <div key={office.region}>
              <h3 className="font-sans text-xl font-medium text-champagne mb-6 tracking-wide border-b border-white/10 pb-4">
                {office.region}
              </h3>
              <div className={`grid grid-cols-1 ${office.cities.length > 1 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'} gap-6`}>
                {office.cities.map((city) => (
                  <div key={city.name} className="bg-white/5 border border-white/10 p-6 rounded-sm">
                    <h4 className="font-sans text-lg font-medium text-white mb-3">{city.name}</h4>
                    <p className="text-sm text-white/55 leading-relaxed whitespace-pre-line mb-4">
                      {city.address}
                    </p>
                    {city.phone && (
                      <a href={`tel:${city.phone.replace(/\s/g, '')}`} className="text-sm text-champagne hover:text-white transition-colors">
                        {city.phone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-6 text-sm">
          <div>
            <p className="label text-white/40 mb-2 tracking-[0.3em]">EMAIL</p>
            <a href={`mailto:${settings.email}`} className="text-white hover:text-champagne transition-colors">{settings.email}</a>
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section tone="cream">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <SectionLabel>Get in Touch</SectionLabel>
            <p className="font-sans text-2xl md:text-3xl font-medium leading-snug text-navy mb-6">
              Ready to start your next project?
            </p>
            <p className="text-navy/60 leading-relaxed">
              Whether you have a specific brief or just want to explore possibilities, our team is ready to help. Reach out and we will get back to you promptly.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel>Send a Message</SectionLabel>
            <InquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
