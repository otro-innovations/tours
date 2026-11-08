import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'China Travel Facilitation — Canton Fair, Medical Tourism & Custom Tours',
  description:
    'OTRO Tours is a professional travel-facilitation and concierge service for China: Canton Fair and Yiwu business trips, medical tourism, and custom leisure or student-group itineraries, with EN ↔ 中文 ↔ বাংলা support on the ground.',
  path: '/',
});

const TRUST_POINTS = [
  { title: 'US-structured LLC', body: 'Contracts, invoicing and accountability through OTRO INNOVATIONS LLC (USA).' },
  { title: 'Language bridge', body: 'English, 中文 and বাংলা spoken by the people handling your trip — not outsourced.' },
  { title: 'On-ground in China', body: 'A named coordinator in the city you are visiting, reachable for the whole stay.' },
  { title: 'No hidden fees', body: 'Itemised quotes: supplier costs, our facilitation fee, and what is excluded.' },
];

const VERTICALS = [
  {
    badge: '01 · Business',
    title: 'Business Travel & Trade Fairs',
    href: '/services#business-travel',
    body: 'Canton Fair, Yiwu and regional expos, handled from invitation letter to interpreter.',
    points: [
      'M-visa invitation letters and buyer-badge registration',
      'Flights, venue-side hotels and daily fair transfers',
      'EN ↔ 中文 interpretation and supplier negotiation support',
    ],
  },
  {
    badge: '02 · Medical',
    title: 'Medical Tourism',
    href: '/services#medical',
    body: 'Hospital matching, appointments and interpretation for patients travelling to China for care.',
    points: [
      'Department-level hospital matching by condition and budget',
      'Appointment booking, records translation and visa support',
      'Recovery-friendly accommodation and daily consultation interpretation',
    ],
  },
  {
    badge: '03 · Leisure',
    title: 'Leisure & Educational Tours',
    href: '/services#leisure',
    body: 'Private itineraries and student groups across Beijing, Shanghai, Xi’an, Guilin and beyond.',
    points: [
      'Custom routes with hotels and 12306 high-speed rail booked',
      'English-speaking guides, dietary and cultural accommodation',
      'Student groups and cultural-exchange programmes',
    ],
  },
];

const TIERS = [
  {
    name: 'Budget',
    price: 'from $1,500',
    badge: 'Best value',
    body: 'A complete fair trip with sharable transfers and a half-day interpreter. Ideal for a first visit or a single-phase buyer.',
    items: [
      'M-visa invitation letter and document review',
      'Return economy flights',
      '3–4★ hotel, 30–45 minutes from the venue, breakfast included',
      'Shared airport transfer and daily fair shuttle',
      'Half-day shared interpreter',
      'Buyer-badge application assistance',
    ],
  },
  {
    name: 'Standard',
    price: 'from $1,950',
    badge: 'Most chosen',
    body: 'Private transfers and a dedicated interpreter for the full fair day — the practical default for serious buyers.',
    items: [
      'Everything in Budget',
      '4★ hotel within 15 minutes of the venue',
      'Private airport and daily fair transfers',
      'Full-day dedicated interpreter',
      'Buyer badge handled end to end',
      'One coordinated factory or market visit',
    ],
  },
  {
    name: 'Premium',
    price: 'from $2,400',
    badge: 'Concierge',
    body: 'Walking-distance accommodation, negotiation support and two site visits, with a 24/7 local line.',
    items: [
      'Everything in Standard',
      '4★ superior or 5★ hotel within walking distance',
      'Private car on call during fair days',
      'Interpreter with supplier-negotiation support',
      'Two factory or market visits, interpreter included',
      '24/7 on-ground support line and half-day city tour',
    ],
  },
];

const A_LA_CARTE = [
  ['M-visa invitation letter & document review', 'from $60', 'Issued by the fair or host entity. Consular visa fees are paid separately.'],
  ['Airport pickup (Guangzhou Baiyun)', 'from $35', 'Private car, per trip, up to three passengers with luggage.'],
  ['Dedicated interpreter', 'from $80 / day', 'English ↔ 中文, eight-hour day, same interpreter throughout.'],
  ['Hospital appointment booking', 'from $120', 'Specialist matching and slot confirmation; hospital fees paid directly.'],
  ['Canton Fair buyer badge & registration', 'from $50', 'Application prepared, submitted and badge collected for you.'],
  ['High-speed rail booking (12306)', 'from $15', 'Booking fee per segment; ticket price billed at cost.'],
];

const STEPS = [
  {
    step: '01',
    title: 'Tell us the trip',
    body: 'Share your purpose, dates, travellers and budget through the trip planner. We reply within one business day with questions — not a sales script.',
  },
  {
    step: '02',
    title: 'Approve a written plan',
    body: 'You receive an itinerary, an itemised quote and the supplier terms behind each line. Nothing is booked until you confirm in writing.',
  },
  {
    step: '03',
    title: 'Travel with a coordinator',
    body: 'Invitation letters, bookings and on-ground support are handled in sequence, with one named contact reachable while you are in China.',
  },
];

const FAQ = [
  [
    'Do you guarantee a visa?',
    'No. Visa decisions rest solely with the Chinese authorities. What we guarantee is a correctly prepared invitation letter, a complete document checklist and honest guidance on timing — never a promised outcome.',
  ],
  [
    'Is this a group tour?',
    'No. Most trips are private, built around your dates and purpose. The exception is student and cultural-exchange groups, which travel together on a fixed programme.',
  ],
  [
    'How do payments work inside China?',
    'We help you set up Alipay or WeChat Pay linked to an international card where your bank supports it, and explain where cash is still practical. Some venues and small suppliers remain cash or domestic-card only.',
  ],
  [
    'Do I need travel insurance?',
    'Yes for medical travel, and strongly recommended for every trip. We can point to policy types that cover China, but the policy is yours to buy and read.',
  ],
  [
    'Can you get me seen at a Chinese hospital?',
    'We arrange appointments at facilities that accept international patients, matched to your condition and budget. Whether a specific department accepts you is decided by the hospital, not by us.',
  ],
  [
    'How far ahead should I start?',
    'Four to eight weeks for business and leisure travel, six to ten weeks for medical travel. Canton Fair dates sell out months in advance, so earlier is always better.',
  ],
  [
    'What happens if my plans change?',
    'Airline, hotel and hospital terms apply to changes and cancellations. We rebook wherever the supplier allows and charge only the work involved, as set out in our terms.',
  ],
  [
    'Which languages do you work in?',
    'English, 中文 and বাংলা. Documents and quotes can be issued in English or বাংলা; on-the-ground interpretation is English ↔ 中文 by default.',
  ],
];

export default function HomePage() {
  return (
    <>
      <Navbar
        links={[
          { href: '/services', label: 'Services' },
          { href: '/packages', label: 'Packages' },
          { href: '/plan', label: 'Trip planner' },
          { href: '/about', label: 'About' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaLabel="Plan your trip"
      />
      <main id="main">
        <PageHero
          eyebrow={siteConfig.tagline}
          title="Your Professional Gateway to China"
          lead="OTRO Tours is a travel-facilitation and concierge service — not a traditional tour operator. We plan, translate and supervise China trips for business travellers, medical patients, families and student groups, using people who live and work there."
          aside={
            <aside className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-amber">Canton Fair · 7 days</p>
              <p className="mt-3 font-display text-2xl font-bold text-white">From $1,500 per person</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Invitation letter, flights, 4★ hotel, transfers and a daily interpreter — one itemised quote.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li>M-visa invitation letter</li>
                <li>Return flights and venue-side hotel</li>
                <li>Airport and fair transfers</li>
                <li>English ↔ 中文 interpreter</li>
              </ul>
              <a
                href="/packages"
                className="mt-6 inline-block text-sm font-semibold text-brand-amber underline-offset-4 hover:underline"
              >
                Compare the three tiers
              </a>
            </aside>
          }
        >
          <Button href="/plan" variant="secondary">
            Plan your trip
          </Button>
          <a
            href="/packages"
            className="inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View packages
          </a>
        </PageHero>

        {/* Trust strip */}
        <div className="border-b border-brand-mist bg-brand-cream">
          <div className="mx-auto max-w-content px-4 py-8 sm:px-6">
            <h2 className="sr-only">What every OTRO trip includes</h2>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {TRUST_POINTS.map((point) => (
                <li key={point.title}>
                  <p className="text-sm font-semibold text-brand-navy">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-ink/70">{point.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Three verticals */}
        <Section
          id="verticals"
          eyebrow="Three ways in"
          title="One country, three very different journeys"
          lead="Each vertical has its own paperwork, its own calendar and its own failure points. We treat them separately, with specialists rather than a single generic itinerary."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {VERTICALS.map((v) => (
              <Card key={v.title} href={v.href} badge={v.badge} title={v.title}>
                <p>{v.body}</p>
                <ul className="mt-4 space-y-2">
                  {v.points.map((p) => (
                    <li key={p} className="border-t border-brand-mist pt-2">
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-brand-blue">Full detail →</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Why OTRO */}
        <Section
          eyebrow="Why OTRO"
          title="Facilitation is a discipline, not a brochure"
          lead="Plenty of agencies will sell you a seat on a bus. Fewer will read your hospital report, argue your hotel rate or sit beside you while a supplier quotes a price that assumes you cannot read Mandarin."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Language bridge">
              English, 中文 and বাংলা across the whole chain: consulate paperwork, hospital forms, supplier negotiation, the
              driver who meets you at arrivals.
            </Card>
            <Card title="On-ground China support">
              Coordinators in the cities we sell — Guangzhou, Yiwu, Beijing, Shanghai, Xi’an — not a call centre in another time zone.
            </Card>
            <Card title="US-LLC trust">
              OTRO INNOVATIONS LLC contracts, invoices and stands behind the work, alongside our operating presence in China.
            </Card>
            <Card title="Transparent fees">
              Every quote separates supplier cost from our facilitation fee. No commissions hidden inside hotel rates, no
              surprise “service charges” on arrival.
            </Card>
          </div>
        </Section>

        {/* Packages */}
        <Section
          id="packages"
          eyebrow="Package showcase"
          title="A seven-day Canton Fair trip, priced honestly"
          lead="Guangzhou arrival, five fair days, departure. Per person, twin share, quoted from Guangzhou — the $1,500–$2,500 band most buyers actually spend."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <Card key={tier.name} badge={tier.badge} title={tier.name}>
                <p className="font-display text-2xl font-bold text-brand-navy">{tier.price}</p>
                <p className="mt-2">{tier.body}</p>
                <ul className="mt-4 space-y-2">
                  {tier.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-amber" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/packages">Compare tiers in detail</Button>
            <p className="text-sm text-brand-ink/70">Indicative ranges. Final quote follows a planning call and confirms season, hotel class and flight routing.</p>
          </div>
        </Section>

        {/* À la carte */}
        <Section
          eyebrow="À la carte"
          title="Take only the pieces you need"
          lead="Already have flights or a hotel? Book the individual services and keep the rest of the trip in your own hands."
          tone="mist"
        >
          <div className="overflow-x-auto rounded-xl border border-brand-mist bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Indicative à la carte facilitation prices</caption>
              <thead>
                <tr className="border-b border-brand-mist bg-brand-navy text-white">
                  <th scope="col" className="px-5 py-4 font-semibold">Service</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Indicative price</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {A_LA_CARTE.map(([service, price, note]) => (
                  <tr key={service} className="border-b border-brand-mist/70 last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-brand-navy">{service}</th>
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-brand-blue">{price}</td>
                    <td className="px-5 py-4 text-brand-ink/75">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-brand-ink/60">
            Government, consular, hospital and airline charges are always passed through at cost and shown separately.
          </p>
        </Section>

        {/* How it works */}
        <Section eyebrow="How it works" title="Three steps, no improvisation">
          <ol className="grid gap-6 lg:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.step} className="rounded-xl border border-brand-mist bg-brand-cream/60 p-6">
                <p className="font-display text-3xl font-bold text-brand-amber">{s.step}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-brand-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">{s.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* FAQ */}
        <Section eyebrow="FAQ" title="Questions we answer before you pay" tone="mist">
          <div className="max-w-3xl space-y-4">
            {FAQ.map(([q, a]) => (
              <details key={q} className="rounded-lg border border-brand-mist bg-white p-5">
                <summary className="cursor-pointer font-semibold text-brand-navy">{q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/80">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section
          eyebrow="Trip planning"
          title="Tell us the trip. We will build the plan."
          lead="Send a short brief and receive a written itinerary and itemised quote within one business day. No deposit, no pressure, no hidden fees."
          tone="navy"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/plan" variant="secondary">
              Start a trip brief
            </Button>
            <a className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline" href={mailtoLink('China trip planning')}>
              Or email {siteConfig.contactEmail}
            </a>
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
