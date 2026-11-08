import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How OTRO Tours collects, uses, shares and retains personal data for travel-facilitation enquiries, bookings, medical-travel coordination and student groups, including transfers to suppliers in China.',
  path: '/privacy',
});

const H2 = 'font-display text-xl font-bold text-brand-navy';
const P = 'mt-3 text-sm leading-relaxed text-brand-ink/80';
const LIST = 'mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-ink/80';

export default function PrivacyPage() {
  return (
    <>
      <Navbar links={[{ href: '/services', label: 'Services' }, { href: '/plan', label: 'Trip planner' }, { href: '/contact', label: 'Contact' }]} />
      <main id="main">
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          lead={`How ${siteConfig.legalEntityName} handles personal data submitted to ${siteConfig.brandName}. Last updated: November 2026.`}
        />

        <Section>
          <div className="max-w-3xl space-y-10">
            <div>
              <h2 className={H2}>1. Who is responsible for your data</h2>
              <p className={P}>
                {siteConfig.legalEntityName} (“OTRO”, “we”, “us”) is the controller of the personal data described in this
                policy. This policy covers {siteConfig.brandName}, our China travel-facilitation division. Questions, requests
                and complaints can be sent to{' '}
                <a className="text-brand-blue underline" href={mailtoLink('Privacy request')}>{siteConfig.contactEmail}</a>.
              </p>
            </div>

            <div>
              <h2 className={H2}>2. What we collect</h2>
              <ul className={LIST}>
                <li><strong>Enquiry data:</strong> name, email address, phone number, trip type, dates, destination, traveller count, budget band and the requirements you describe.</li>
                <li><strong>Booking data:</strong> passport details (name as printed, number, nationality, date of birth, expiry), date of birth, gender where a supplier requires it, frequent-flyer details where supplied, emergency contact, and arrival and departure details.</li>
                <li><strong>Medical-travel data you choose to share:</strong> condition summary, medical reports, imaging summaries, medication lists, treating-doctor details and appointment preferences. We collect this only with your explicit consent and only to arrange care.</li>
                <li><strong>Payment data:</strong> invoicing name, billing address, transaction references and the last digits of a card. Full card numbers are processed by our payment provider and are not stored by us.</li>
                <li><strong>Technical data:</strong> IP address, browser type, pages viewed and referral source, collected through server logs and, where enabled, privacy-respecting analytics.</li>
              </ul>
              <p className={P}>
                We do not knowingly collect data from children under 16 except as part of a family or student-group booking,
                where a parent, guardian or institution supplies the data on the child’s behalf.
              </p>
            </div>

            <div>
              <h2 className={H2}>3. Why we use it</h2>
              <ul className={LIST}>
                <li>To answer enquiries and prepare itineraries, quotations and inclusion schedules.</li>
                <li>To book flights, hotels, rail tickets, transfers, interpreters, fair badges and hospital appointments with the relevant suppliers.</li>
                <li>To prepare visa-support documents, including invitation letters and appointment confirmations.</li>
                <li>To coordinate medical travel: translating records, sharing them with the treating facility on your instruction and interpreting consultations.</li>
                <li>To invoice, account for tax and comply with legal, accounting and anti-fraud obligations.</li>
                <li>To improve our service and, where you have opted in, to send occasional updates. You can unsubscribe at any time.</li>
              </ul>
            </div>

            <div>
              <h2 className={H2}>4. Legal bases</h2>
              <p className={P}>
                Where data-protection law requires a legal basis, we rely on: performance of a contract or steps taken at your
                request before a contract (most booking data); your consent (medical data, marketing); compliance with legal
                obligations (tax, accounting, safety); and our legitimate interests in operating and improving a travel
                business (service correspondence, fraud prevention, basic analytics).
              </p>
            </div>

            <div>
              <h2 className={H2}>5. Who we share it with</h2>
              <p className={P}>
                Travel and medical services are delivered by third parties. We share only the data each party needs, and only
                for the purpose of your trip:
              </p>
              <ul className={LIST}>
                <li>Airlines, hotels, rail operators, transport providers and licensed guides.</li>
                <li>Fair organisers and host entities for buyer badges and visa invitation letters.</li>
                <li>Hospitals, clinics and treating physicians you have agreed to consult, and translation providers working on your records under confidentiality obligations.</li>
                <li>Visa-application service providers and, where you instruct it, agents acting on your behalf.</li>
                <li>Payment processors, banks and invoicing partners.</li>
                <li>Professional advisers, insurers and authorities where required by law or a valid legal request.</li>
              </ul>
              <p className={P}>
                We do not sell personal data, and we do not share your details with advertisers or data brokers.
              </p>
            </div>

            <div>
              <h2 className={H2}>6. International transfers</h2>
              <p className={P}>
                To arrange travel in China we routinely transfer booking data to suppliers located in mainland China, Hong
                Kong and other jurisdictions where your trip takes place. Those countries may not offer the same data
                protections as your home country. Where required, we use contractual safeguards with suppliers, and we limit
                transfers to what is necessary for the booking or the treatment you requested.
              </p>
            </div>

            <div>
              <h2 className={H2}>7. How long we keep it</h2>
              <ul className={LIST}>
                <li>Enquiries that do not become bookings: up to 24 months, then deleted.</li>
                <li>Booking and invoice records: up to seven years, to meet accounting and tax obligations.</li>
                <li>Medical documents: deleted within 12 months of the end of your treatment-travel support, unless you ask us to keep them for follow-up or the law requires longer retention.</li>
                <li>Marketing preferences: kept until you unsubscribe, plus a suppression record so we do not contact you again in error.</li>
              </ul>
            </div>

            <div>
              <h2 className={H2}>8. Cookies and analytics</h2>
              <p className={P}>
                The site uses only the cookies needed for it to function and, where enabled, a privacy-respecting analytics
                tool that records aggregated page views without profiling you for advertising. We do not run third-party
                advertising pixels. You can block or delete cookies in your browser settings; essential functions will still
                work.
              </p>
            </div>

            <div>
              <h2 className={H2}>9. Your rights</h2>
              <p className={P}>
                Depending on where you live, you may have the right to access your data, correct it, delete it, restrict or
                object to its processing, receive a portable copy, withdraw consent (including consent for medical-data
                processing) and complain to a supervisory authority. Requests are answered within 30 days. Withdrawing
                consent for medical data may mean we can no longer coordinate treatment for you.
              </p>
              <p className={P}>
                Send requests to{' '}
                <a className="text-brand-blue underline" href={mailtoLink('Privacy request')}>{siteConfig.contactEmail}</a>{' '}
                with the subject line “Privacy request”. We may ask for proof of identity before acting.
              </p>
            </div>

            <div>
              <h2 className={H2}>10. Security</h2>
              <p className={P}>
                Access to booking and medical files is limited to the coordinators working on your trip. Data is transmitted
                over encrypted connections, stored in access-controlled systems, and shared with suppliers through
                purpose-limited channels rather than open links. No system is perfectly secure; if a breach affects your
                rights, we will notify you and the relevant authority as required.
              </p>
            </div>

            <div>
              <h2 className={H2}>11. Changes to this policy</h2>
              <p className={P}>
                We update this policy when our services or the law change. The “last updated” date at the top always reflects
                the current version, and material changes affecting existing bookings will be communicated directly.
              </p>
            </div>

            <div className="rounded-xl border border-brand-mist bg-brand-cream/70 p-6">
              <h2 className={H2}>12. Contact</h2>
              <p className={P}>
                {siteConfig.legalEntityName}
                <br />
                Email:{' '}
                <a className="text-brand-blue underline" href={mailtoLink('Privacy request')}>{siteConfig.contactEmail}</a>
                <br />
                Phone: <a className="text-brand-blue underline" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer quickLinks={[{ href: '/terms', label: 'Terms of Service' }]} />
    </>
  );
}
