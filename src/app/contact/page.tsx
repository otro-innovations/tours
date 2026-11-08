import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Contact — Talk to a China Travel Coordinator',
  description:
    'Contact OTRO Tours about Canton Fair and business travel, medical tourism, leisure tours or student groups. Email, phone and a message form handled by a named coordinator.',
  path: '/contact',
});

const FIELD_CLASS = 'mt-1 w-full rounded-md border border-brand-mist bg-white px-3 py-2.5 text-sm text-brand-ink focus:border-brand-blue focus:outline-none';
const LABEL_CLASS = 'block text-sm font-medium text-brand-navy';

/**
 * Consultation form posts to /api/contact (server route). Fields follow the
 * global brief: name, email/phone, service interest, message.
 */
export default function ContactPage({ searchParams }: { searchParams?: { ok?: string } }) {
  const submitted = searchParams?.ok === '1';
  return (
    <>
      <Navbar
        links={[
          { href: '/services', label: 'Services' },
          { href: '/packages', label: 'Packages' },
          { href: '/plan', label: 'Trip planner' },
          { href: '/about', label: 'About' },
        ]}
        ctaLabel="Trip planner"
      />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="Start the conversation"
          lead={`Email ${siteConfig.contactEmail} or send a message below. A named coordinator — not a queue — replies within one business day, Monday to Saturday.`}
        />

        <Section>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              {submitted && (
                <div role="status" className="mb-6 rounded-lg border border-brand-blue/30 bg-brand-mist p-4 text-sm text-brand-ink/85">
                  <strong className="font-semibold text-brand-navy">Message received.</strong> We have your enquiry and will
                  reply within one business day. Nothing is booked or charged at this stage.
                </div>
              )}

              <form
                action="/api/contact"
                method="POST"
                className="rounded-xl border border-brand-mist bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="font-display text-2xl font-bold text-brand-navy">Send a message</h2>
                <p className="mt-2 text-sm text-brand-ink/70">Fields marked with an asterisk are required.</p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={LABEL_CLASS}>Name *</label>
                    <input id="contact-name" name="name" type="text" required autoComplete="name" className={FIELD_CLASS} />
                  </div>

                  <div>
                    <label htmlFor="contact-detail" className={LABEL_CLASS}>Email or phone *</label>
                    <input
                      id="contact-detail"
                      name="contact"
                      type="text"
                      required
                      autoComplete="email"
                      placeholder="you@example.com or +880…"
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="contact-service" className={LABEL_CLASS}>Service interest</label>
                    <select id="contact-service" name="service" defaultValue="" className={FIELD_CLASS}>
                      <option value="">Select an interest</option>
                      <option>Canton Fair / Business Travel</option>
                      <option>Medical Tourism</option>
                      <option>Leisure Tour</option>
                      <option>Student Group</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className={LABEL_CLASS}>Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Purpose of travel, dates, travellers and anything already booked."
                      className={FIELD_CLASS}
                    />
                  </div>

                  {/* Honeypot anti-spam field — hidden from users */}
                  <input type="text" name="company" tabIndex={-1} aria-hidden="true" autoComplete="off" className="hidden" />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
                  >
                    Send message
                  </button>
                  <p className="text-xs text-brand-ink/60">
                    Prefer email?{' '}
                    <a className="underline" href={mailtoLink('Website enquiry')}>
                      {siteConfig.contactEmail}
                    </a>
                  </p>
                </div>
              </form>
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl border border-brand-mist bg-brand-cream/70 p-6">
                <h2 className="font-display text-xl font-bold text-brand-navy">Direct lines</h2>
                <ul className="mt-4 space-y-4 text-sm">
                  <li>
                    <p className="font-semibold text-brand-navy">Email</p>
                    <a className="text-brand-blue underline-offset-4 hover:underline" href={mailtoLink('Website enquiry')}>
                      {siteConfig.contactEmail}
                    </a>
                  </li>
                  <li>
                    <p className="font-semibold text-brand-navy">Phone</p>
                    <a className="text-brand-blue underline-offset-4 hover:underline" href={`tel:${siteConfig.phone}`}>
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <p className="font-semibold text-brand-navy">Hours</p>
                    <p className="text-brand-ink/75">Monday to Saturday, 09:00–20:00 (GMT+8). Medical-travel enquiries are triaged first.</p>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-brand-mist bg-white p-6">
                <h2 className="font-display text-xl font-bold text-brand-navy">Planning a full trip?</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">
                  The trip planner collects dates, traveller count and budget in one pass, so the first reply can include a
                  written outline rather than a list of questions.
                </p>
                <a
                  href="/plan"
                  className="mt-4 inline-flex items-center justify-center rounded-md border border-brand-navy px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                >
                  Open the trip planner
                </a>
              </div>

              <p className="text-xs leading-relaxed text-brand-ink/60">
                OTRO Tours provides travel facilitation only. Visa approval, hospital acceptance and treatment outcomes are
                decided by third parties and are never guaranteed. Correspondence is handled under our{' '}
                <a className="underline" href="/privacy">privacy policy</a>.
              </p>
            </aside>
          </div>
        </Section>
      </main>
      <Footer
        quickLinks={[
          { href: '/packages', label: 'Packages' },
          { href: '/plan', label: 'Trip planner' },
        ]}
      />
    </>
  );
}
