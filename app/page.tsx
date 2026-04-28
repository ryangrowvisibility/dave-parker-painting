import Script from "next/script";

const PHONE = "(559) 227-7980";
const PHONE_HREF = "tel:+15592277980";
const PHONE_ALT = "(559) 259-3932";
const ADDRESS = "3463 E Dayton Ave, Fresno, CA 93726";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Dave%20Parker%20Painting&query_place_id=ChIJsZjiZZVdlIARH62muBAoEv0";

const ld = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "name": "Dave Parker Painting",
  "founder": { "@type": "Person", "name": "David B. Parker Sr." },
  "telephone": "+15592277980",
  "address": { "@type": "PostalAddress", "streetAddress": "3463 E Dayton Ave", "addressLocality": "Fresno", "addressRegion": "CA", "postalCode": "93726", "addressCountry": "US" },
  "areaServed": "Fresno, California",
  "foundingDate": "1997",
  "description": "Founded in 1997 by David B. Parker Sr. Fresno-based residential painter known for high-quality interior and exterior work."
};

const work = [
  { roman: "I",   t: "Interior",         d: "Cabinetry, trim, doors, walls and ceilings — sharp lines, settled finishes." },
  { roman: "II",  t: "Exterior",         d: "Siding, fascia, stucco. Surface prep before paint, every time." },
  { roman: "III", t: "Residential",      d: "Whole-home programs scheduled around your move-in or sale." },
  { roman: "IV",  t: "Custom",           d: "Specialty finishes, color matching and one-off work for older homes." },
];

const chapters = [
  { ord: "Ch. I",   year: "1997", title: "A small Fresno painting business begins on Dayton Avenue.",      body: "David Parker Sr. starts taking residential work — interiors first, then full-home projects across town." },
  { ord: "Ch. II",  year: "2007", title: "Ten years in. The company is known locally for high-quality work.", body: "Word travels. The directory listings start collecting perfect customer satisfaction notes." },
  { ord: "Ch. III", year: "2025", title: "Twenty-eight years later, still on Dayton.",                    body: "Same address. Same painter. Same standard for finishes that hold up in Central Valley sun." },
];

export default function Home() {
  return (
    <>
      <Script id="ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* Header */}
      <header className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em]">
          <div className="flex items-center gap-3 text-ink">
            <span className="font-[family-name:var(--font-display)] italic text-base normal-case tracking-tight">D · P</span>
            <span className="text-ink-soft">Dave Parker Painting · Fresno · est. 1997</span>
          </div>
          <a href={PHONE_HREF} className="text-ink hover:text-oxblood">{PHONE}</a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-12 items-end">
          <div className="md:col-span-8 rise">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-ink-soft mb-10">
              Established 1997 · Fresno, California · David Parker Sr.
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-ink leading-[0.92]"
                style={{ fontSize: "clamp(2.5rem, 8.5vw, 7rem)", letterSpacing: "-0.01em" }}>
              Twenty-eight summers<br/>
              of Fresno paint,<br/>
              <span className="italic text-oxblood">one painter.</span>
            </h1>
            <p className="mt-12 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed">
              Dave Parker started his Fresno painting business in 1997 and never
              left the same address on Dayton Avenue. Interior, exterior,
              custom, residential — by hand, by the same painter the
              neighborhood has trusted for nearly three decades.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href={PHONE_HREF}
                 className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 rounded-full font-[family-name:var(--font-display)] text-base hover:bg-oxblood transition-colors active:scale-[0.97]">
                Call Dave · {PHONE}
              </a>
              <a href="#work"
                 className="inline-flex items-center gap-3 border border-ink/30 px-7 py-4 rounded-full font-[family-name:var(--font-display)] text-base hover:border-ink hover:bg-vellum transition-colors">
                See the work
              </a>
            </div>
          </div>

          {/* Heritage seal aside */}
          <aside className="md:col-span-4 deckle border-2 border-ink/20 p-8 shadow-[6px_8px_0_oklch(0.20_0.02_60_/_0.08)]">
            <div className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-ink-soft border-b border-rule pb-3">
              <span>Specimen</span>
              <span>1997 — 2025</span>
            </div>
            <p className="mt-6 font-[family-name:var(--font-display)] text-5xl text-ink">28<span className="italic text-oxblood text-3xl align-top ml-1">yrs</span></p>
            <p className="mt-2 text-ink-soft text-sm">
              The number of years David Parker Sr. has run a residential
              painting business out of 3463 E Dayton Ave.
            </p>
            <div className="mt-6 pt-4 border-t border-rule">
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-ink-soft">Painter</p>
              <p className="font-[family-name:var(--font-script)] text-5xl text-oxblood leading-none mt-2">Dave Parker</p>
            </div>
            <div className="mt-6 pt-4 border-t border-rule grid grid-cols-2 gap-4 font-[family-name:var(--font-mono)] text-[11px]">
              <div>
                <p className="text-ink-soft uppercase tracking-[0.18em]">Office</p>
                <p className="text-ink mt-1">{PHONE}</p>
              </div>
              <div>
                <p className="text-ink-soft uppercase tracking-[0.18em]">Direct</p>
                <p className="text-ink mt-1">{PHONE_ALT}</p>
              </div>
            </div>
          </aside>
        </div>

        {/* trust bar */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-rule pt-10">
          {[
            { k: "Established", v: "1997" },
            { k: "On Dayton Ave", v: "since day one" },
            { k: "Painter", v: "David Parker Sr." },
            { k: "Service", v: "Interior · Exterior · Custom" },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-ink-soft">{s.k}</p>
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-[1.85rem] text-ink mt-3 leading-tight">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE WORK — strong arrange/composition */}
      <section id="work" className="bg-vellum border-y border-rule">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-x-12 gap-y-12">
            <div className="md:col-span-4">
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft">The work</p>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-ink leading-[1.02]"
                  style={{ fontSize: "clamp(2rem, 4.6vw, 3.6rem)" }}>
                Four kinds of <span className="italic text-oxblood">paint</span>.<br/>
                One pair of hands.
              </h2>
              <p className="mt-7 text-ink-soft text-base max-w-sm">
                Numbered like chapters because that&rsquo;s how Dave thinks
                about a project — surface, prep, first coat, second.
              </p>
            </div>
            <div className="md:col-span-8 grid gap-px bg-rule border border-rule">
              {work.map((w) => (
                <article key={w.t} className="bg-paper p-9 grid md:grid-cols-12 gap-6 items-baseline">
                  <p className="md:col-span-2 font-[family-name:var(--font-display)] italic text-3xl text-oxblood">{w.roman}</p>
                  <h3 className="md:col-span-3 font-[family-name:var(--font-display)] text-2xl text-ink">{w.t}</h3>
                  <p className="md:col-span-7 text-ink-soft leading-relaxed">{w.d}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTERS / heritage timeline */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft">Three chapters</p>
        <h2 className="mt-5 font-[family-name:var(--font-display)] text-ink leading-[1.02]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
          A long, <span className="italic text-oxblood">quiet</span> Fresno story.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-rule border border-rule">
          {chapters.map((c) => (
            <article key={c.ord} className="bg-paper p-10">
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-oxblood">{c.ord} · {c.year}</p>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-ink leading-snug">{c.title}</h3>
              <p className="mt-5 text-ink-soft text-sm leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PULL QUOTE / record */}
      <section className="bg-bone border-y border-rule">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-x-12 gap-y-12 items-end">
          <div className="md:col-span-4">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft">On the record</p>
          </div>
          <blockquote className="md:col-span-8 font-[family-name:var(--font-display)] text-ink leading-[1.05]"
                      style={{ fontSize: "clamp(1.75rem, 4.4vw, 3.25rem)" }}>
            <span className="text-oxblood">&ldquo;</span>
            Strong reputation per third-party listings — perfect customer
            <span className="italic"> satisfaction notes </span>
            on directory sites.
            <span className="text-oxblood">&rdquo;</span>
            <p className="mt-8 font-[family-name:var(--font-mono)] not-italic text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              Independent directory record · paraphrased
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-12 items-end">
          <div className="md:col-span-7">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft">Schedule an estimate</p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-ink leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              Got a Fresno house<br/>
              that needs <span className="italic text-oxblood">painting</span>?
            </h2>
            <p className="mt-8 text-ink-soft text-lg max-w-md">
              Call Dave directly. Tell him about the room, the house, or the
              whole property — he comes by, looks at the surfaces, and quotes
              honestly.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={PHONE_HREF}
                 className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 rounded-full font-[family-name:var(--font-display)] text-base hover:bg-oxblood transition-colors active:scale-[0.97]">
                Call {PHONE}
              </a>
              <a href={MAPS} target="_blank" rel="noopener"
                 className="inline-flex items-center gap-3 border border-ink/30 px-7 py-4 rounded-full font-[family-name:var(--font-display)] text-base hover:border-ink hover:bg-vellum transition-colors">
                Get directions
              </a>
            </div>
          </div>
          <aside className="md:col-span-5 border-l border-rule pl-8">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft">Shop</p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-2xl text-ink leading-snug">{ADDRESS}</p>
            <div className="mt-6 grid grid-cols-2 gap-4 font-[family-name:var(--font-mono)] text-sm">
              <div>
                <p className="text-ink-soft uppercase tracking-[0.18em] text-[11px]">Office</p>
                <a className="text-ink hover:text-oxblood block mt-1" href={PHONE_HREF}>{PHONE}</a>
              </div>
              <div>
                <p className="text-ink-soft uppercase tracking-[0.18em] text-[11px]">Direct</p>
                <a className="text-ink hover:text-oxblood block mt-1" href={`tel:+15592593932`}>{PHONE_ALT}</a>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://www.yelp.com/biz/dave-parker-painting-fresno" target="_blank" rel="noopener"
                 className="text-sm text-ink hover:text-oxblood underline underline-offset-4">Yelp</a>
              <a href="https://www.facebook.com/davidparkerpaintings/" target="_blank" rel="noopener"
                 className="text-sm text-ink hover:text-oxblood underline underline-offset-4">Facebook</a>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-ink-soft gap-4">
          <p>Dave Parker Painting · Fresno, CA · est. 1997</p>
          <a href={PHONE_HREF} className="hover:text-ink">{PHONE}</a>
        </div>
      </footer>
    </>
  );
}
