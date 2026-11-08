import type { ReactNode } from 'react';

/**
 * Interior hero with the page-level <h1>. Keeps heading order correct
 * (h1 in hero → h2 in Section titles → h3 in Cards) while reusing the
 * brand's navy gradient treatment across every page.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
  aside,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-brand-blue/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-brand-amber/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-24">
        <div className={`grid gap-12 ${aside ? 'lg:grid-cols-[1.3fr_1fr] lg:items-center' : ''}`}>
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-amber">{eyebrow}</p>
            )}
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
            {lead && <p className="mt-5 text-lg leading-relaxed text-white/75">{lead}</p>}
            {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
