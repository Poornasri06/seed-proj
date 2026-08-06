import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';

export const metadata = { title: 'Privacy Policy', description: 'Seed Engineering privacy policy.' };

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <div className="max-w-3xl prose-editorial">
          <p>
            Seed Engineering (the &ldquo;Studio&rdquo;) respects the privacy of every visitor and every prospective
            client. This policy explains what information we collect when you use this site, how we use it,
            and the rights you have over it.
          </p>
          <h2 className="h3 mt-10 mb-3 text-body">Information we collect</h2>
          <p>
            When you submit a project inquiry, we collect the name, phone number, email, service type,
            preferred contact method and the details you choose to share with us. We do not collect any
            additional data without your knowledge.
          </p>
          <h2 className="h3 mt-10 mb-3 text-body">How we use it</h2>
          <p>
            Inquiry information is used exclusively to respond to your project request and to maintain a
            record of our correspondence with you. It is not sold, rented, or shared with third parties for
            marketing.
          </p>
          <h2 className="h3 mt-10 mb-3 text-body">Cookies and analytics</h2>
          <p>
            This site uses functional cookies necessary for navigation. Anonymous analytics may be used to
            understand site usage in aggregate. No personal profile is built from your visit.
          </p>
          <h2 className="h3 mt-10 mb-3 text-body">Your rights</h2>
          <p>
            You may request a copy of, or the deletion of, any personal information we hold about you by
            emailing studio@seedengineering.ae. Requests are typically actioned within five working days.
          </p>
          <h2 className="h3 mt-10 mb-3 text-body">Contact</h2>
          <p>
            Questions about this policy can be sent to studio@seedengineering.ae or to the studio address
            listed in the footer.
          </p>
          <p className="text-xs text-muted mt-12">Last updated: January 2026.</p>
        </div>
      </Section>
    </>
  );
}
