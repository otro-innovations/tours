import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'Terms for OTRO Tours travel-facilitation services: booking and third-party suppliers, visa decisions, payments, cancellation, medical disclaimer, liability limits and governing law.',
  path: '/terms',
});

const H2 = 'font-display text-xl font-bold text-brand-navy';
const P = 'mt-3 text-sm leading-relaxed text-brand-ink/80';
const LIST = 'mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-ink/80';

export default function TermsPage() {
  return (
    <>
      <Navbar links={[{ href: '/services', label: 'Services' }, { href: '/plan', label: 'Trip planner' }, { href: '/contact', label: 'Contact' }]} />
      <main id="main">
        <PageHero
          eyebrow="Legal"
          title="Terms of Service"
          lead={`These terms govern travel-facilitation services provided by ${siteConfig.legalEntityName} under the ${siteConfig.brandName} name. Last updated: November 2026.`}
        />

        <Section>
          <div className="max-w-3xl space-y-10">
            <div>
              <h2 className={H2}>1. Who we are and what these terms cover</h2>
              <p className={P}>
                {siteConfig.brandName} is a division of {siteConfig.legalEntityName}, a limited liability company organised in
                the United States (“OTRO”, “we”, “us”). These terms apply to every enquiry, quotation, booking and service we
                provide, and to your use of this website. By instructing us or paying a deposit, you accept them.
              </p>
              <p className={P}>
                We provide travel facilitation and concierge coordination. We are not an airline, hotel, railway operator,
                tour operator of record for third-party departures, hospital, clinic or medical provider.
              </p>
            </div>

            <div>
              <h2 className={H2}>2. Our role and third-party suppliers</h2>
              <p className={P}>
                We arrange services supplied by third parties — airlines, hotels, rail operators, ground transport, licensed
                guides, interpreters, fair organisers, hospitals and clinics. Those services are delivered under each
                supplier’s own terms, conditions and liability limits, which are made available with your quotation on request.
              </p>
              <p className={P}>
                We select suppliers with reasonable care and coordinate them on your behalf, but we do not control their
                operations. Delays, schedule changes, overbooking, strikes, weather, supplier insolvency and similar events are
                outside our control.
              </p>
            </div>

            <div>
              <h2 className={H2}>3. Quotations, deposits and payment</h2>
              <ul className={LIST}>
                <li>Quotations are indicative until confirmed in writing and are valid for 14 days unless stated otherwise.</li>
                <li>A deposit, stated in the quotation, confirms the booking. Supplier deadlines may require full payment earlier.</li>
                <li>Prices are shown in US dollars unless stated otherwise. Bank charges and currency-conversion costs are borne by the payer.</li>
                <li>Government, consular, hospital and airline charges are passed through at cost and itemised separately.</li>
                <li>Where a price changes because a supplier raises its rate before ticketing or confirmation, we will notify you and seek your approval before proceeding.</li>
              </ul>
            </div>

            <div>
              <h2 className={H2}>4. Passports, visas and entry requirements</h2>
              <p className={P}>
                You are responsible for holding a valid passport, meeting entry requirements and providing accurate personal
                details. We assist with invitation letters, appointment confirmations and document checklists, but{' '}
                <strong>visa and entry decisions rest solely with the Chinese authorities and border officials</strong>. We do
                not guarantee that a visa will be issued, that an invitation letter will be accepted, or that entry will be
                granted.
              </p>
              <p className={P}>
                Consular fees are payable by you and are non-refundable by us. If a visa is refused, supplier refunds are passed
                through according to supplier terms; facilitation work already performed is not refundable. We will provide the
                documents you need to reapply or appeal.
              </p>
            </div>

            <div>
              <h2 className={H2}>5. Changes and cancellation</h2>
              <ul className={LIST}>
                <li>Cancellation must be received in writing. The date we receive it determines the charges that apply.</li>
                <li>Third-party cancellation charges follow each supplier’s terms — airlines, hotels, hospitals and fair organisers each set their own.</li>
                <li>Our facilitation fee is refundable in full if you cancel more than 30 days before departure, at 50% between 15 and 30 days, and is non-refundable within 14 days or after work has been delivered (invitation letters, hospital bookings, badge applications).</li>
                <li>No-shows and unused services are non-refundable.</li>
                <li>Where a supplier cancels and refunds us, we pass the refund through after deducting any non-recoverable costs.</li>
              </ul>
            </div>

            <div>
              <h2 className={H2}>6. Medical travel — facilitation only, not medical advice</h2>
              <p className={P}>
                Medical-travel coordination is a travel service. We are not a licensed medical provider and we do not practice
                medicine. Nothing on this website, in our correspondence or in our itineraries is medical advice, a diagnosis or
                a treatment recommendation.
              </p>
              <ul className={LIST}>
                <li>Hospital and specialist selection is based on information you provide and on facilities that accept international patients. Admission and treatment decisions belong to the hospital and its clinicians.</li>
                <li>Cost estimates are indicative only. The hospital’s own estimate, consent process and invoice govern the care delivered and the amount payable.</li>
                <li>We do not guarantee treatment outcomes, complication rates, recovery times or the availability of any specific physician, device or therapy.</li>
                <li>You are responsible for obtaining any pre-travel medical clearance and for following your treating physicians’ advice.</li>
                <li>Comprehensive travel and medical insurance covering China is mandatory for medical-travel bookings.</li>
                <li>In an emergency, contact local emergency services or the nearest hospital immediately. Do not rely on a concierge response for urgent care.</li>
              </ul>
            </div>

            <div>
              <h2 className={H2}>7. Travel insurance</h2>
              <p className={P}>
                Adequate travel insurance — covering medical treatment, evacuation, cancellation, delay and baggage — is a
                condition of travel on all bookings and is mandatory for medical travel. We can point you to policy types but do
                not sell or administer insurance. Claims are between you and your insurer.
              </p>
            </div>

            <div>
              <h2 className={H2}>8. Your responsibilities</h2>
              <ul className={LIST}>
                <li>Provide accurate, complete information, including passport names exactly as printed.</li>
                <li>Arrive at airports, stations and appointments on time and carry required documents.</li>
                <li>Respect local laws, venue rules, hospital protocols and cultural norms.</li>
                <li>Disclose accessibility, dietary or medical needs that affect arrangements before booking.</li>
                <li>Pay supplier charges for extras, damages or services consumed outside the agreed quotation.</li>
              </ul>
            </div>

            <div>
              <h2 className={H2}>9. Conduct and refusal of service</h2>
              <p className={P}>
                We may decline or end a booking where a request is unlawful, where information provided is false, where payment
                fails, or where a traveller’s conduct endangers staff, suppliers or other travellers. In such cases, charges
                already incurred with suppliers remain payable.
              </p>
            </div>

            <div>
              <h2 className={H2}>10. Limitation of liability</h2>
              <p className={P}>
                To the maximum extent permitted by law, our total liability for any claim arising from a booking is limited to
                the facilitation fees we actually received for that booking. We are not liable for indirect, incidental,
                consequential or punitive losses, including lost profits, lost business opportunities or missed fair days.
              </p>
              <p className={P}>
                Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for death or
                personal injury caused by our own negligence, or for fraud.
              </p>
            </div>

            <div>
              <h2 className={H2}>11. Force majeure</h2>
              <p className={P}>
                We are not liable for failure or delay caused by events beyond our reasonable control, including natural
                disasters, epidemics, government action, border closures, visa-system outages, transport strikes, civil unrest
                or war. We will make reasonable efforts to rebook or refund what suppliers release.
              </p>
            </div>

            <div>
              <h2 className={H2}>12. Website content and intellectual property</h2>
              <p className={P}>
                Content on this site is provided for general information. Prices, schedules, fair dates and facility categories
                can change and are confirmed only in your written quotation. Site text, structure and branding belong to{' '}
                {siteConfig.legalEntityName} and may not be reproduced commercially without permission. Third-party links are
                provided for convenience; we do not control their content.
              </p>
            </div>

            <div>
              <h2 className={H2}>13. Governing law and disputes</h2>
              <p className={P}>
                These terms are governed by the laws of the United States and of the state in which {siteConfig.legalEntityName}{' '}
                is organised, without regard to conflict-of-laws rules. The parties will first attempt to resolve any dispute in
                good faith within 30 days of written notice. If unresolved, the dispute will be brought in the state or federal
                courts located in that state, and each party consents to their jurisdiction.
              </p>
            </div>

            <div>
              <h2 className={H2}>14. General</h2>
              <p className={P}>
                If any provision is held unenforceable, the remaining provisions continue in force. These terms, together with
                your written quotation and the applicable supplier terms, form the entire agreement between us. We may update
                these terms; the version in force at the time of your booking applies to that booking.
              </p>
            </div>

            <div className="rounded-xl border border-brand-mist bg-brand-cream/70 p-6">
              <h2 className={H2}>15. Contact</h2>
              <p className={P}>
                {siteConfig.legalEntityName} — {siteConfig.brandName}
                <br />
                Email:{' '}
                <a className="text-brand-blue underline" href={mailtoLink('Terms enquiry')}>{siteConfig.contactEmail}</a>
                <br />
                Phone: <a className="text-brand-blue underline" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer quickLinks={[{ href: '/privacy', label: 'Privacy Policy' }]} />
    </>
  );
}
