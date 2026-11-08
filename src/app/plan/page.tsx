import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Trip Planner — Request a China Travel Plan & Quote',
  description:
    'Send a China trip brief to OTRO Tours: trip type, number of travellers, preferred dates, destination city, budget range and requirements. Written itinerary and itemised quote within one business day.',
  path: '/plan',
});

const FIELD_CLASS = 'mt-1 w-full rounded-md border border-brand-mist bg-white px-3 py-2.5 text-sm text-brand-ink focus:border-brand-blue focus:outline-none';
const LABEL_CLASS = 'block text-sm font-medium text-brand-navy';

const NEXT_STEPS = [
  'We read the brief and reply within one business day — usually with two or three clarifying questions.',
  'You receive a written itinerary, an itemised quote and the supplier terms behind each line.',
  'Only after you approve in writing do we book, issue invitations or start hospital paperwork.',
];

export default function PlanPage() {
  return (
    <>
      <Navbar
        links={[
          { href: '/services', label: 'Services' },
          { href: '/packages', label: 'Packages' },
          { href: '/about', label: 'About' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaLabel="Contact us"
      />
      <main id="main">
        <PageHero
          eyebrow="Trip planner"
          title="Start with a trip brief"
          lead="Tell us what the trip has to achieve. Clear answers here save a week of email later — and there is no deposit or obligation attached to a brief."
        />

        <Section>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <form action="/api/contact" method="POST" className="rounded-xl border border-brand-mist bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-bold text-brand-navy">Trip details</h2>
              <p className="mt-2 text-sm text-brand-ink/70">Fields marked with an asterisk are required.</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="trip-type" className={LABEL_CLASS}>Trip type *</label>
                  <select id="trip-type" name="trip_type" required defaultValue="" className={FIELD_CLASS}>
                    <option value="" disabled>Select a trip type</option>
                    <option>Business / Trade Fair</option>
                    <option>Medical</option>
                    <option>Leisure</option>
                    <option>Student Group</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="travellers" className={LABEL_CLASS}>Number of travellers *</label>
                  <input
                    id="travellers"
                    name="travellers"
                    type="number"
                    min={1}
                    max={60}
                    defaultValue={1}
                    required
                    className={FIELD_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="dates" className={LABEL_CLASS}>Preferred dates *</label>
                  <input
                    id="dates"
                    name="dates"
                    type="text"
                    required
                    placeholder="e.g. 15–22 April 2027, or “flexible in October”"
                    className={FIELD_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="destination" className={LABEL_CLASS}>Destination city *</label>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    required
                    list="china-cities"
                    placeholder="Guangzhou, Yiwu, Beijing…"
                    className={FIELD_CLASS}
                  />
                  <datalist id="china-cities">
                    <option value="Guangzhou" />
                    <option value="Yiwu" />
                    <option value="Shanghai" />
                    <option value="Beijing" />
                    <option value="Xi’an" />
                    <option value="Guilin" />
                    <option value="Shenzhen" />
                    <option value="Chengdu" />
                    <option value="Not decided yet" />
                  </datalist>
                </div>

                <div>
                  <label htmlFor="budget" className={LABEL_CLASS}>Budget range (per person)</label>
                  <select id="budget" name="budget" defaultValue="" className={FIELD_CLASS}>
                    <option value="">Select a range</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $1,500</option>
                    <option>$1,500 – $2,500</option>
                    <option>$2,500 – $4,000</option>
                    <option>$4,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className={LABEL_CLASS}>Your name *</label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={FIELD_CLASS} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact" className={LABEL_CLASS}>Email or phone (with country code) *</label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    autoComplete="email"
                    placeholder="you@example.com or +880…"
                    className={FIELD_CLASS}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="requirements" className={LABEL_CLASS}>Requirements *</label>
                  <textarea
                    id="requirements"
                    name="message"
                    rows={7}
                    required
                    placeholder="Purpose of travel, fair phase or hospital department, cities, hotel standard, dietary or accessibility needs, passport nationality, anything already booked."
                    className={FIELD_CLASS}
                  />
                </div>

                {/* Honeypot anti-spam field — hidden from users and assistive tech */}
                <input type="text" name="company" tabIndex={-1} aria-hidden="true" autoComplete="off" className="hidden" />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
                >
                  Send trip brief
                </button>
                <p className="text-xs text-brand-ink/60">We reply within one business day, Monday to Saturday.</p>
              </div>
            </form>

            <aside className="space-y-6">
              <div className="rounded-xl border border-brand-mist bg-brand-cream/70 p-6">
                <h2 className="font-display text-xl font-bold text-brand-navy">What happens next</h2>
                <ol className="mt-4 space-y-4">
                  {NEXT_STEPS.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-relaxed text-brand-ink/80">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-xl border border-brand-mist bg-white p-6">
                <h2 className="font-display text-xl font-bold text-brand-navy">Prefer to talk first</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">
                  For medical travel, a short call is usually faster than a form. Reach us directly and we will route you to
                  the right coordinator.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a className="font-medium text-brand-blue underline-offset-4 hover:underline" href={mailtoLink('Trip planning enquiry')}>
                      {siteConfig.contactEmail}
                    </a>
                  </li>
                  <li>
                    <a className="font-medium text-brand-blue underline-offset-4 hover:underline" href={`tel:${siteConfig.phone}`}>
                      {siteConfig.phone}
                    </a>
                  </li>
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-brand-ink/60">
                  Visa decisions, hospital acceptance and treatment outcomes are never guaranteed. We confirm what we can
                  control in writing before any payment.
                </p>
              </div>
            </aside>
          </div>
        </Section>
      </main>
      <Footer
        quickLinks={[
          { href: '/packages', label: 'Packages' },
          { href: '/services', label: 'Services' },
        ]}
      />
    </>
  );
}
