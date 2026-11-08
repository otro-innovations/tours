import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siblingHref } from '@/components/Footer';

export const metadata = buildMetadata({
  title: 'Services — Trade Fairs, Medical Travel & Custom China Tours',
  description:
    'Detailed OTRO Tours services: Canton Fair and Yiwu business travel with M-visa letters and interpretation, medical tourism with hospital matching and consultation interpretation, and custom leisure or student-group itineraries across China.',
  path: '/services',
});

const BUSINESS_SERVICES = [
  {
    title: 'Canton Fair, Yiwu & regional expos',
    body: 'Buyer registration for the Canton Fair’s three annual phases, plus Yiwu International Trade City and the Shanghai, Shenzhen and Hong Kong shows that fit your category.',
  },
  {
    title: 'M-visa invitation letters',
    body: 'Letters prepared on the correct fair or host-entity letterhead with the consular checklist for your nationality. Approval remains the consulate’s decision.',
  },
  {
    title: 'Buyer badges & fair registration',
    body: 'Applications prepared, submitted and collected. We map the halls that matter to your product line before you land.',
  },
  {
    title: 'Flights & venue-side hotels',
    body: 'Routing and 4★ accommodation within reach of Pazhou or the Yiwu expo centre, with fair-season availability checked before you commit.',
  },
  {
    title: 'Airport and daily transfers',
    body: 'Arrival pickup, hotel ↔ venue transfers on fair days, and a driver who knows which gate your hall actually uses.',
  },
  {
    title: 'EN ↔ 中文 interpretation',
    body: 'Same interpreter for the whole trip where possible, so specifications, MOQs and payment terms are not re-explained every morning.',
  },
  {
    title: 'Negotiation and factory visits',
    body: 'Support in the meeting room and on the factory floor: unit price, tooling, sample terms, lead times and contract wording — coordinated with our B2B sourcing division.',
  },
  {
    title: 'Connectivity and payments set-up',
    body: 'Local SIM or eSIM, WeChat account, Alipay or WeChat Pay linked where your bank allows, and a briefing on what will not work without a local number.',
  },
  {
    title: 'Post-trip follow-up',
    body: 'Quote comparison sheets, sample tracking and a handover to logistics or sourcing if the trip turns into an order.',
  },
];

const MEDICAL_SERVICES = [
  {
    title: 'Hospital matching',
    body: 'Shortlists built around your condition, treatment stage and budget — international departments of top-tier public hospitals and private facilities that accept foreign patients.',
  },
  {
    title: 'Appointment booking',
    body: 'We handle the Chinese-language apps, the local-number requirements and the department switchboards that make direct booking hard from abroad.',
  },
  {
    title: 'Cost estimates and second opinions',
    body: 'Indicative treatment ranges and help obtaining a second opinion from a specialist before you commit to travel. Estimates are not final invoices.',
  },
  {
    title: 'Medical records translation',
    body: 'Reports, imaging summaries and medication lists translated into 中文 for the treating team, and hospital responses translated back for you.',
  },
  {
    title: 'Medical and S2 visa support',
    body: 'Invitation documents, hospital appointment letters and the checklist for a medical-treatment or short-term private-visit visa.',
  },
  {
    title: 'Medical concierge pickup',
    body: 'Arrival met by a coordinator who knows the hospital route, plus support at first registration and registration-fee counters.',
  },
  {
    title: 'Recovery-friendly accommodation',
    body: 'Apartments and hotels near the hospital with kitchen access, step-free access, quiet floors and room for a companion.',
  },
  {
    title: 'Daily consultation interpretation',
    body: 'An interpreter at consultations, ward rounds and discharge briefings — the part where misunderstandings cost the most.',
  },
  {
    title: 'Pharmacy and medication help',
    body: 'Prescription collection, generic equivalents explained, and guidance on carrying medication home within customs rules.',
  },
  {
    title: 'Post-treatment follow-up',
    body: 'Discharge documents translated, follow-up appointments scheduled, and remote check-ins after you return home.',
  },
];

const FACILITY_CATEGORIES = [
  'Oncology and heavy-ion / proton therapy',
  'Orthopedics and joint replacement',
  'Dental and implantology',
  'Fertility and reproductive medicine',
  'Traditional Chinese medicine and rehabilitation',
  'Health screening and executive check-ups',
];

const LEISURE_SERVICES = [
  {
    title: 'Custom itineraries',
    body: 'Private routes built around your interests and pace, not a fixed coach schedule. Mix a business stop in Guangzhou with a family week in Guilin.',
  },
  {
    title: 'Visa assistance',
    body: 'L-visa document preparation, invitation or hotel confirmation where required, and a realistic checklist for your passport and residence.',
  },
  {
    title: 'Hotels and high-speed rail',
    body: 'Hotels selected for location, not commission. 12306 rail bookings handled, with seat class, station and transfer time explained before ticketing.',
  },
  {
    title: 'English-speaking guides',
    body: 'Licensed local guides who can hold a conversation about history rather than recite a script, in the cities where we operate.',
  },
  {
    title: 'Dietary and cultural accommodation',
    body: 'Halal and vegetarian dining planned in advance, prayer arrangements where available, and honest advice about what a city can and cannot provide.',
  },
  {
    title: 'Student groups and cultural exchange',
    body: 'University and school groups with campus visits, structured activities, group-rate hotels, and a single coordinator for the whole cohort.',
  },
  {
    title: 'Families and multi-generational travel',
    body: 'Pace and room configuration planned for children and older travellers, with rest days built in rather than added after complaints.',
  },
  {
    title: 'Shopping and market add-ons',
    body: 'Yiwu, Shenzhen electronics markets or local craft districts with a translator, so browsing does not end in a tourist-trap markup.',
  },
];

const DESTINATIONS = ['Beijing', 'Shanghai', 'Xi’an', 'Guilin', 'Chengdu', 'Hangzhou', 'Shenzhen', 'Zhangjiajie'];

export default function ServicesPage() {
  return (
    <>
      <Navbar
        links={[
          { href: '/packages', label: 'Packages' },
          { href: '/plan', label: 'Trip planner' },
          { href: '/about', label: 'About' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaLabel="Plan your trip"
      />
      <main id="main">
        <PageHero
          eyebrow="Services"
          title="One partner for three kinds of China travel"
          lead="Business, medical and leisure trips fail in different places. These pages set out exactly what we handle, what we coordinate with partners, and what is never ours to promise."
        >
          <Button href="/plan" variant="secondary">
            Start a trip brief
          </Button>
          <a
            href="#business-travel"
            className="inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Jump to services
          </a>
        </PageHero>

        {/* Section jump nav */}
        <div className="border-b border-brand-mist bg-brand-cream">
          <nav aria-label="Service sections" className="mx-auto max-w-content px-4 py-4 sm:px-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <li><a className="text-brand-navy hover:text-brand-blue" href="#business-travel">01 · Business travel &amp; trade fairs</a></li>
              <li><a className="text-brand-navy hover:text-brand-blue" href="#medical">02 · Medical tourism</a></li>
              <li><a className="text-brand-navy hover:text-brand-blue" href="#leisure">03 · Leisure &amp; educational tours</a></li>
            </ul>
          </nav>
        </div>

        {/* 01 — Business */}
        <Section
          id="business-travel"
          eyebrow="01 · Business travel & trade fairs"
          title="Canton Fair, Yiwu and every meeting in between"
          lead="Fair trips are logistics under pressure: a visa deadline, a badge queue, a supplier who speaks only Mandarin and a flight that cannot move. We remove each of those failure points in advance."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_SERVICES.map((s) => (
              <Card key={s.title} title={s.title}>
                {s.body}
              </Card>
            ))}
          </div>

          <aside className="mt-10 rounded-xl border border-brand-mist bg-brand-cream/70 p-6">
            <h3 className="font-display text-lg font-bold text-brand-navy">Fair calendar notes</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-brand-ink/80">
              The Canton Fair runs three phases each spring and autumn, in April and October. Phase 1 covers electronics and
              industrial machinery, Phase 2 consumer goods, gifts and home décor, Phase 3 textiles, apparel and office
              supplies. Each phase has its own badge and its own hotel-demand curve — tell us the phase first and the plan
              follows.
            </p>
          </aside>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/packages">See Canton Fair packages</Button>
            <p className="text-sm text-brand-ink/70">Travelling for sourcing rather than a fair? Our B2B division takes the factory and QC work further.</p>
          </div>
        </Section>

        {/* 02 — Medical */}
        <Section
          id="medical"
          eyebrow="02 · Medical tourism"
          title="Medical travel, arranged end to end"
          lead="China’s leading hospitals quote many procedures well below Western private-care prices — typically 40–70% lower for comparable treatment — but the system is hard to enter from abroad. We are the layer between the patient and that system."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEDICAL_SERVICES.map((s) => (
              <Card key={s.title} title={s.title}>
                {s.body}
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-brand-mist bg-white p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">Facility categories we source</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
                {FACILITY_CATEGORIES.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-amber" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-brand-ink/70">
                Cost ranges depend on procedure, city, facility class and length of stay. We quote an indicative band before
                you travel and reconcile it against the hospital’s own estimate.
              </p>
            </div>
            <div className="rounded-xl border border-brand-amber/40 bg-brand-amber/10 p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">Scope and medical disclaimer</h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-ink/80">
                <p>
                  OTRO Tours provides travel facilitation only. We are not a hospital, clinic or licensed medical provider,
                  and nothing on this site is medical advice.
                </p>
                <p>
                  We do not diagnose, treat, or guarantee outcomes, complication rates or survival. Treatment decisions belong
                  to you and your treating physicians, and the hospital’s own estimate and consent process govern the care
                  delivered.
                </p>
                <p>
                  For emergencies, contact local emergency services or your nearest hospital immediately. Do not wait for a
                  concierge reply.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/plan">Request a medical travel plan</Button>
          </div>
        </Section>

        {/* 03 — Leisure */}
        <Section
          id="leisure"
          eyebrow="03 · Leisure & educational tours"
          title="Private itineraries that survive contact with reality"
          lead="A good China itinerary is a sequence of short, well-timed transfers — not a list of monuments. We build the route, hold the bookings, and stay reachable when a train is delayed."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEISURE_SERVICES.map((s) => (
              <Card key={s.title} title={s.title}>
                {s.body}
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-bold text-brand-navy">Cities we build around</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {DESTINATIONS.map((city) => (
                <li key={city} className="rounded-full border border-brand-mist bg-brand-cream px-4 py-2 text-sm font-medium text-brand-navy">
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-3xl text-sm text-brand-ink/70">
              Routes combine two to four cities at a comfortable pace, using high-speed rail where it beats flying. Student
              groups follow a fixed programme with a single coordinator and documented supervision ratios.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/plan">Plan a private tour</Button>
            <p className="text-sm text-brand-ink/70">Families of incoming students can add airport pickup and settling-in days.</p>
          </div>
        </Section>

        {/* Cross-sell */}
        <Section
          eyebrow="Across the bridge"
          title="Where OTRO Tours meets the rest of OTRO"
          lead="A fair trip is often the first step of a sourcing relationship, and a student’s first semester often begins with a family visit."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Card href={siblingHref('trade')} title="Trade OTRO" badge="B2B sourcing">
              Factory audits, QC and freight for buyers whose fair visit turns into an order. One accountable team across both divisions.
            </Card>
            <Card href={siblingHref('edu')} title="OTRO Education" badge="Study abroad">
              Admissions and visa support for students — and pre-departure briefings, airport pickup and settling-in help for their families.
            </Card>
          </div>
        </Section>

        <Section tone="navy" eyebrow="Next step" title="Send the brief, get the plan" lead="Dates, purpose, travellers and budget are enough to start. We reply with questions and a written outline within one business day.">
          <Button href="/plan" variant="secondary">
            Open the trip planner
          </Button>
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
