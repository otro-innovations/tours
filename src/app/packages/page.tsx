import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Canton Fair Packages — Budget, Standard & Premium from $1,500',
  description:
    'Compare three seven-day Canton Fair packages from $1,500 per person: visa invitation letter, flights, 4★ hotel near the venue, transfers, buyer badge and English–Chinese interpreter. Optional add-ons and exclusions listed.',
  path: '/packages',
});

type Cell = string | false;

const ROWS: { inclusion: string; budget: Cell; standard: Cell; premium: Cell }[] = [
  {
    inclusion: 'Price per person, twin share (from)',
    budget: '$1,500',
    standard: '$1,950',
    premium: '$2,400',
  },
  {
    inclusion: 'M-visa invitation letter and document review',
    budget: 'Included',
    standard: 'Included',
    premium: 'Included, with expedited follow-up',
  },
  {
    inclusion: 'Return international flights, economy',
    budget: 'Included',
    standard: 'Included',
    premium: 'Included, flexible fare',
  },
  {
    inclusion: 'Hotel (7 nights, breakfast included)',
    budget: '3–4★, 30–45 min from venue',
    standard: '4★, within 15 min of venue',
    premium: '4★ superior or 5★, walking distance',
  },
  {
    inclusion: 'Airport transfers',
    budget: 'Shared',
    standard: 'Private',
    premium: 'Private, flight monitoring',
  },
  {
    inclusion: 'Daily venue transfers on fair days',
    budget: 'Shared shuttle',
    standard: 'Private',
    premium: 'Private car on call',
  },
  {
    inclusion: 'Interpreter (English ↔ 中文)',
    budget: 'Half-day, shared',
    standard: 'Full-day, dedicated',
    premium: 'Full-day, with negotiation support',
  },
  {
    inclusion: 'Buyer badge and fair registration',
    budget: 'Application assistance',
    standard: 'Handled end to end',
    premium: 'Handled, plus booth appointment outreach',
  },
  {
    inclusion: 'Factory or market visits',
    budget: false,
    standard: 'One visit coordinated',
    premium: 'Two visits, interpreter included',
  },
  {
    inclusion: 'On-ground support line',
    budget: 'Business hours',
    standard: '08:00–22:00 local',
    premium: '24/7',
  },
  {
    inclusion: 'Local SIM and payment set-up',
    budget: 'Included',
    standard: 'Included',
    premium: 'Included',
  },
  {
    inclusion: 'City orientation',
    budget: false,
    standard: 'Half-day',
    premium: 'Half-day with guide',
  },
];

const ADD_ONS = [
  { title: 'Extra hotel night', price: 'from $45 / night', body: 'Fair-season rates vary by phase and booking window; quoted before confirmation.' },
  { title: 'Extra interpreter day', price: 'from $80 / day', body: 'Same interpreter where available, eight-hour day, city-wide.' },
  { title: 'Yiwu extension', price: 'from $220', body: 'Two nights, rail or road transfer and market orientation added to a Guangzhou trip.' },
  { title: 'Private car and driver', price: 'from $110 / day', body: 'Guangzhou or Yiwu, fuel and parking included, eight hours.' },
  { title: 'Fair badge handling only', price: 'from $50', body: 'For travellers who already have flights and a hotel.' },
  { title: 'Hospital appointment only', price: 'from $120', body: 'Specialist matching and slot confirmation for a single consultation.' },
];

const EXCLUSIONS = [
  'Consular and visa application fees',
  'Travel and medical insurance premiums',
  'Lunches, dinners and personal spending',
  'Single-room supplement (quoted per hotel and season)',
  'Excess baggage, in-hotel extras and minibar',
  'Hospital, clinic and treatment charges',
  'Anything not listed as included in your written quote',
];

export default function PackagesPage() {
  return (
    <>
      <Navbar
        links={[
          { href: '/services', label: 'Services' },
          { href: '/plan', label: 'Trip planner' },
          { href: '/about', label: 'About' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaLabel="Plan your trip"
      />
      <main id="main">
        <PageHero
          eyebrow="Packages"
          title="Canton Fair, fully arranged"
          lead="Seven days in Guangzhou — arrival, five fair days, departure — with the paperwork, flights, hotel, transfers and interpreter handled as one package. Three tiers, one transparent structure."
          aside={
            <aside className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-amber">Typical budget band</p>
              <p className="mt-3 font-display text-2xl font-bold text-white">$1,500 – $2,500</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Per person, twin share, quoted from Guangzhou arrival. Final price depends on phase, season and flight routing.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li>Budget from $1,500</li>
                <li>Standard from $1,950</li>
                <li>Premium from $2,400</li>
              </ul>
            </aside>
          }
        >
          <Button href="/plan" variant="secondary">
            Request a quote
          </Button>
          <a
            href="#comparison"
            className="inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Compare inclusions
          </a>
        </PageHero>

        <Section
          id="comparison"
          eyebrow="Tier comparison"
          title="What each tier actually includes"
          lead="Prices are starting anchors for a seven-day trip in twin share. Every line below appears in your written quote, with the supplier and its terms named."
        >
          <div className="overflow-x-auto rounded-xl border border-brand-mist">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparison of Budget, Standard and Premium seven-day Canton Fair packages by inclusion
              </caption>
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th scope="col" className="px-5 py-4 font-semibold">Inclusion</th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Budget
                    <span className="mt-1 block text-xs font-normal text-white/60">from $1,500</span>
                  </th>
                  <th scope="col" className="bg-brand-blue px-5 py-4 font-semibold">
                    Standard
                    <span className="mt-1 block text-xs font-normal text-white/70">from $1,950 · most chosen</span>
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Premium
                    <span className="mt-1 block text-xs font-normal text-white/60">from $2,400</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, index) => {
                  const cell = (value: Cell) =>
                    value === false ? (
                      <span className="text-brand-ink/40" aria-label="Not included">—</span>
                    ) : (
                      <span>{value}</span>
                    );
                  return (
                    <tr key={row.inclusion} className={index % 2 === 1 ? 'bg-brand-cream/60' : 'bg-white'}>
                      <th scope="row" className="px-5 py-4 font-medium text-brand-navy">{row.inclusion}</th>
                      <td className="px-5 py-4 text-brand-ink/80">{cell(row.budget)}</td>
                      <td className="bg-brand-mist/50 px-5 py-4 font-medium text-brand-ink/85">{cell(row.standard)}</td>
                      <td className="px-5 py-4 text-brand-ink/80">{cell(row.premium)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/plan">Start with a trip brief</Button>
            <p className="text-sm text-brand-ink/70">Travelling with a colleague or a small buying team? Group pricing starts at four travellers.</p>
          </div>
        </Section>

        <Section
          eyebrow="Add-ons"
          title="Extend the trip without rebuilding it"
          lead="Optional services can be added to any tier and are quoted separately, line by line."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADD_ONS.map((addon) => (
              <Card key={addon.title} title={addon.title} badge={addon.price}>
                {addon.body}
              </Card>
            ))}
          </div>
        </Section>

        <Section eyebrow="Exclusions" title="What is never inside the package price">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <ul className="space-y-3 text-sm text-brand-ink/80">
              {EXCLUSIONS.map((item) => (
                <li key={item} className="flex gap-3 border-b border-brand-mist pb-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <aside className="rounded-xl border border-brand-mist bg-brand-cream/70 p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">Booking notes</h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-ink/80">
                <p>Prices are indicative and confirmed only in a written quote, which is valid for 14 days.</p>
                <p>Fair dates attract hotel surcharges and minimum-stay rules. We tell you the surcharge before you confirm.</p>
                <p>Airline, hotel and hospital cancellation terms flow down from the supplier and are shown in your quote.</p>
                <p>Visa approval is not guaranteed by the package, the invitation letter or by OTRO Tours.</p>
              </div>
            </aside>
          </div>
        </Section>

        <Section
          eyebrow="Not only the fair"
          title="Medical and leisure trips are quoted the same way"
          lead="The package structure is the same discipline: a written itinerary, an itemised price and named suppliers — even when the itinerary is a hospital schedule or a family route through three cities."
          tone="mist"
        >
          <div className="flex flex-wrap gap-4">
            <Button href="/services#medical">Medical travel services</Button>
            <Button href="/services#leisure" variant="ghost">Leisure tour services</Button>
          </div>
        </Section>

        <Section tone="navy" eyebrow="Quote" title="Tell us the phase and the dates" lead="Send the fair phase, traveller count and budget band. We confirm hotel availability and flight routing before asking for any commitment.">
          <Button href="/plan" variant="secondary">
            Request a written quote
          </Button>
        </Section>
      </main>
      <Footer
        quickLinks={[
          { href: '/services', label: 'Services' },
          { href: '/plan', label: 'Trip planner' },
        ]}
      />
    </>
  );
}
