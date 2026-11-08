import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'About — The Bridge Mindset, Applied to Travel',
  description:
    'Why OTRO Tours exists: a China-based, US-structured travel-facilitation division built on the Bridge Mindset — language, logistics and accountability between China, Bangladesh and the world.',
  path: '/about',
});

const PRINCIPLES = [
  {
    title: 'Facilitation over packaging',
    body: 'We do not own buses or sell fixed departures. We assemble the trip you actually need, then supervise the suppliers who deliver it.',
  },
  {
    title: 'Written before spoken',
    body: 'Itineraries, quotes and inclusion lists are put in writing before payment. If it is not in the document, it is not included.',
  },
  {
    title: 'One accountable entity',
    body: 'Contracts and invoices come from OTRO INNOVATIONS LLC, a US-structured company — not from an anonymous local agent.',
  },
  {
    title: 'No promised outcomes',
    body: 'Visas, hospital acceptance and treatment results belong to governments, hospitals and clinicians. We are precise about that boundary.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar
        links={[
          { href: '/services', label: 'Services' },
          { href: '/packages', label: 'Packages' },
          { href: '/plan', label: 'Trip planner' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaLabel="Plan your trip"
      />
      <main id="main">
        <PageHero
          eyebrow="About OTRO Tours"
          title="The Bridge Mindset, applied to travel"
          lead="OTRO Tours is the travel-facilitation division of OTRO INNOVATIONS LLC. We exist because crossing into China is easy to book and hard to navigate — and the difference between the two is usually language, paperwork and someone on the ground."
        >
          <Button href="/plan" variant="secondary">
            Start a trip brief
          </Button>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore services
          </a>
        </PageHero>

        <Section eyebrow="Origin" title="Built from the arrival hall, not the brochure">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="max-w-2xl space-y-5 text-brand-ink/80">
              <p>
                OTRO began with a simple observation from our founders’ own experience of studying and working in China: the
                country is not difficult to reach, but it is difficult to enter correctly. A buyer with the wrong visa type is
                turned away at the fair gate. A patient with untranslated imaging is asked to repeat every test. A family
                arriving at a railway station discovers that the tickets were booked under a name spelled differently on the
                passport.
              </p>
              <p>
                None of these are exotic problems. They are translation and coordination problems — exactly the kind our team
                already solves in trade and education. So the tours division was built as a bridge rather than a tour desk:
                English, 中文 and বাংলা across the whole chain, with coordinators who live in the cities we sell.
              </p>
              <p>
                We are deliberately not a traditional tour operator. We do not charter coaches and fill seats. We plan private
                trips, medical itineraries and student programmes, hold the bookings, and stay reachable while you travel.
              </p>
            </div>
            <aside className="rounded-xl border border-brand-mist bg-brand-cream/70 p-6">
              <h2 className="font-display text-xl font-bold text-brand-navy">At a glance</h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-brand-navy">Legal entity</dt>
                  <dd className="text-brand-ink/75">{siteConfig.legalEntityName} (USA)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">Division</dt>
                  <dd className="text-brand-ink/75">{siteConfig.brandName} — China travel facilitation</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">Languages</dt>
                  <dd className="text-brand-ink/75">English · 中文 · বাংলা</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">Cities served</dt>
                  <dd className="text-brand-ink/75">Guangzhou, Yiwu, Beijing, Shanghai, Xi’an, Guilin, Shenzhen and beyond on request</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">Model</dt>
                  <dd className="text-brand-ink/75">Facilitation and concierge — third-party suppliers deliver travel and medical services</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Section>

        <Section
          eyebrow="How we work"
          title="Four commitments that keep the bridge standing"
          lead="These are operating rules, not marketing lines. They decide what we accept, how we quote and when we say no."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <Card key={p.title} title={p.title}>
                {p.body}
              </Card>
            ))}
          </div>
        </Section>

        <Section eyebrow="The wider bridge" title="Travel is one division of a larger practice">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-brand-ink/80">
              <p>
                OTRO INNOVATIONS LLC operates five divisions under one accountable entity: education, digital growth, B2B
                sourcing, retail and travel. They share a founder team, a language capability and a single standard of
                documentation — which is why a fair trip can hand over to a sourcing project without starting again from zero.
              </p>
              <p>
                Our founding team combines a BA in English and C1-level communication, procurement and logistics experience at
                Annex Cargo, co-authored Scopus-indexed research, and current postgraduate study in China. That mix is why we
                write a quote the way a procurement officer would read it.
              </p>
              <p>
                As the group consolidates its web presence over the coming years, this division will move with it. Nothing about
                the service changes: same team, same standards, one address.
              </p>
            </div>
            <div className="rounded-xl border border-brand-mist bg-white p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">What we will not do</h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-ink/80">
                <li className="border-b border-brand-mist pb-3">Promise a visa, a hospital bed or a clinical outcome.</li>
                <li className="border-b border-brand-mist pb-3">Hide our fee inside a hotel rate or ticket markup.</li>
                <li className="border-b border-brand-mist pb-3">Book a supplier we would not send our own family to.</li>
                <li className="border-b border-brand-mist pb-3">Offer medical advice or interpret a diagnosis as a treatment plan.</li>
                <li>Take payment before the inclusions are agreed in writing.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Who we serve"
          title="Buyers, patients, families and students"
          lead="Different travellers, one standard of preparation."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Sourcing teams" badge="Business">Fair badges, invitation letters, hotels near the venue and an interpreter who understands MOQs.</Card>
            <Card title="Medical travellers" badge="Medical">Hospital matching, records translation and a coordinator at every appointment.</Card>
            <Card title="Families & couples" badge="Leisure">Private routes, rail bookings and dietary planning that hold up on the ground.</Card>
            <Card title="Student groups" badge="Education">Fixed programmes, group hotels and one coordinator for the whole cohort.</Card>
          </div>
        </Section>

        <Section tone="navy" eyebrow="Next step" title="Bring us the difficult part" lead="Tell us what has gone wrong before, or what you are afraid will go wrong. That is usually where the plan should start.">
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
