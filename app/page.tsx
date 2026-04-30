import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dave Parker Painting — Fresno, CA · Since 1997",
};

const PHONE = "(559) 227-7980";
const PHONE_HREF = "tel:+15592277980";
const PHONE_DIRECT = "(559) 259-3932";
const PHONE_DIRECT_HREF = "tel:+15592593932";
const ADDRESS = "3463 E Dayton Ave, Fresno, CA 93726";
const YELP = "https://www.yelp.com/biz/dave-parker-painting-fresno";
const FACEBOOK = "https://www.facebook.com/davidparkerpaintings/";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=3463%20E%20Dayton%20Ave%2C%20Fresno%2C%20CA%2093726&output=embed";

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const YelpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11 2v9.5l-6-3.2C6.7 4.7 8.7 2.5 11 2zm0 11.6V22c-2.6-.4-4.7-2.1-5.6-4.4L11 13.6zm2-3.6 6.5 1.5c-.5 2.4-2.1 4.3-4.3 5L13 12.4V10zm0 6 4.7 4.7c-1.4.6-2.9.9-4.7.9V16z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.5V21h3z" />
  </svg>
);

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Painter",
    name: "Dave Parker Painting",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3463 E Dayton Ave",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93726",
      addressCountry: "US",
    },
    telephone: PHONE,
    url: "https://dave-parker-painting.vercel.app",
    priceRange: "$$",
    areaServed: "Fresno, CA",
    foundingDate: "1997",
    founder: { "@type": "Person", name: "David B Parker Sr" },
    sameAs: [YELP, FACEBOOK],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP — slim editorial masthead, NOT a glass pill */}
      <header className="border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-3">
            <span className="font-display text-[22px] font-medium tracking-[-0.005em] text-ink">
              Dave Parker Painting
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-quiet hidden sm:inline">
              Est. 1997
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-soft">
            <a href="#story" className="hover:text-olive-dark">Story</a>
            <a href="#work" className="hover:text-olive-dark">Work</a>
            <a href="#standards" className="hover:text-olive-dark">Standards</a>
            <a href="#contact" className="hover:text-olive-dark">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-[13px] tnum text-ink hover:text-olive-dark"
          >
            <PhoneIcon /> <span className="hidden sm:inline">{PHONE}</span>
          </a>
        </div>
      </header>

      {/* HERO — Editorial Split with prose-driven hero (NOT bento, NOT centered) */}
      <section className="border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-7 settle">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive-dark mb-10">
              A short history · Fresno, California
            </p>

            <h1 className="font-display font-normal text-[clamp(2.8rem,7.4vw,7.4rem)] leading-[0.96] tracking-[-0.022em] text-ink max-w-[18ch]">
              A painter, in
              <br />
              Fresno,{" "}
              <em className="italic font-normal text-olive-dark">since
              <br />
              ninety-seven.</em>
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pt-2 settle settle-1">
            <p className="dropcap text-[17px] leading-[1.6] text-ink-soft max-w-[44ch] font-body">
              David B. Parker Sr. opened his shop on Dayton Avenue in 1997 and has not moved since.
              For twenty-eight years he has finished interiors and exteriors for the same Fresno
              neighborhoods — patient prep, even sheen, color that holds against the Central Valley
              sun. The truck still parks in the same driveway it parked in twenty years ago.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 bg-ink text-cream px-6 py-3.5 text-[13px] tracking-[0.04em] hover:bg-olive-dark"
              >
                <PhoneIcon />
                <span className="tnum">Call · {PHONE}</span>
              </a>
              <a
                href="#story"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-olive-dark underline decoration-hairline-strong underline-offset-[6px] hover:decoration-olive"
              >
                Read the story
              </a>
            </div>
          </div>
        </div>

        {/* Year span as a thin masthead band */}
        <div className="border-t border-hairline bg-bone/40">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet">
              Volume XXVIII · The same Dayton Avenue shop
            </span>
            <span className="font-display tnum text-[20px] tracking-[-0.005em] text-ink">
              <span className="text-ink-quiet">1997</span>{" "}
              <span className="font-mono text-[14px] text-ink-quiet">·····························</span>{" "}
              <em className="italic text-olive-dark">2025</em>
            </span>
          </div>
        </div>
      </section>

      {/* STORY — long-form editorial column with marginalia */}
      <section id="story" className="border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-32 lg:py-44 grid lg:grid-cols-12 gap-x-12">
          <aside className="lg:col-span-3 lg:pr-6 mb-12 lg:mb-0">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet mb-7">
              I · The painter
            </p>
            <p className="font-display italic text-[1.4rem] leading-[1.3] text-olive-dark">
              Owner-operated. Family-run. The same crew that started your house finishes the trim on the last door.
            </p>
            <div className="mt-10 pt-7 border-t border-hairline-strong space-y-3 font-mono text-[11px] tracking-[0.04em] text-ink-soft">
              <p><span className="text-ink-quiet">Owner</span> &nbsp; David B. Parker Sr.</p>
              <p><span className="text-ink-quiet">Trade</span> &nbsp; Painting & Decorating</p>
              <p><span className="text-ink-quiet">Founded</span> &nbsp; <span className="tnum">1997</span></p>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.08] tracking-[-0.018em] text-ink mb-10 max-w-[24ch]">
              Twenty-eight summers, the same painter, the same address.
            </h2>

            <p className="text-[16.5px] leading-[1.7] text-ink-soft max-w-[58ch]">
              When David opened the shop on Dayton Avenue in 1997, much of north Fresno had not yet
              been built. Twenty-eight summers later he is still working out of that shop, still
              answering the same phone number, still finishing rooms and exteriors for the
              neighborhoods that grew up around him.
            </p>

            <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft max-w-[58ch]">
              The work is residential. The crew is small. The painter who walks the job on day one
              is the same painter who hands you back the keys. We do not subcontract the cabinet
              doors or the trim coat. The standard is the same on the inside of the closet as it is
              on the corner above the front door.
            </p>

            <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft max-w-[58ch]">
              Most jobs come in by phone. A walk-through is short. A quote arrives the same day or
              the next. The work starts within the week. There is nothing innovative about any of
              it — just the patience that comes from doing it for almost three decades.
            </p>

            <p className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive-dark">
              — David B. Parker Sr.
            </p>
          </div>
        </div>
      </section>

      {/* WORK — two trades as full-width editorial articles, not cards */}
      <section id="work" className="border-b border-hairline bg-bone/30">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-12 mb-20 items-baseline">
            <p className="lg:col-span-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet">
              II · The work
            </p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] tracking-[-0.02em] text-ink max-w-[24ch]">
              Two trades, finished by{" "}
              <em className="italic text-olive-dark">the same crew.</em>
            </h2>
          </div>

          <article className="grid lg:grid-cols-12 gap-x-12 gap-y-7 pb-16 mb-16 border-b border-hairline">
            <div className="lg:col-span-3">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive-dark">
                Interior
              </p>
              <p className="text-[12.5px] text-ink-quiet mt-1.5">
                Whole-house, room, cabinet
              </p>
            </div>
            <div className="lg:col-span-9 lg:pl-4">
              <h3 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] tracking-[-0.014em] text-ink max-w-[22ch]">
                Walls, ceilings, trim, doors, cabinets — finished even, true color, cut lines that hold.
              </h3>
              <p className="mt-7 text-[16px] leading-[1.7] text-ink-soft max-w-[60ch]">
                Patient preparation — fill, sand, mask, prime where it matters. Most rooms repaint
                in a single day; whole-house work takes as long as the shape of the work demands.
                The result should be invisible: the eye sees the room, not the paint.
              </p>
              <ul className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-soft">
                <li>· Whole-house repaints</li>
                <li>· Cabinet refinishes</li>
                <li>· Trim · base · crown</li>
                <li>· Doors</li>
                <li>· Texture-matching</li>
                <li>· Color consultation</li>
              </ul>
            </div>
          </article>

          <article className="grid lg:grid-cols-12 gap-x-12 gap-y-7">
            <div className="lg:col-span-3">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive-dark">
                Exterior
              </p>
              <p className="text-[12.5px] text-ink-quiet mt-1.5">
                Stucco, wood, trim
              </p>
            </div>
            <div className="lg:col-span-9 lg:pl-4">
              <h3 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] tracking-[-0.014em] text-ink max-w-[22ch]">
                Stucco, wood, and metal exteriors prepped for a Central Valley summer.
              </h3>
              <p className="mt-7 text-[16px] leading-[1.7] text-ink-soft max-w-[60ch]">
                Twenty-eight summers on the same Fresno roads has taught us which products hold and
                which fade. We pressure-wash, scrape failure points, prime where it matters, and
                finish with paints chosen for stucco expansion, sun exposure, and the way Fresno
                weather actually works on a wall.
              </p>
              <ul className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-soft">
                <li>· Stucco · siding</li>
                <li>· Soffits · eaves · fascia</li>
                <li>· Garage doors</li>
                <li>· Entry doors</li>
                <li>· Iron exterior trim</li>
                <li>· HOA color refresh</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* STANDARDS — full-bleed warm-dark band */}
      <section id="standards" className="bg-olive-dark text-cream">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-cream/55">
            III · Standards
          </p>

          <p className="mt-10 font-display italic text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.18] tracking-[-0.012em] text-cream max-w-[26ch]">
            What it means to paint a house once.
          </p>

          <p className="mt-12 text-[17px] leading-[1.75] text-cream/85 max-w-[68ch]">
            A finished room should be invisible. The eye sees the space, not the paint. Cut lines
            stay where you cut them. Sheens stop where they are supposed to stop. The corner above
            the closet door — the one nobody ever paints right — looks the same as the rest of the
            wall. We do not paint over rot. We do not skip primer to make a number work. We show up
            when we said we would, finish when we said we would, and leave the room cleaner than we
            found it. <span className="font-display italic">A painted house should look painted
            once.</span> Twenty-eight years has taught us what that takes.
          </p>

          <p className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-cream/45">
            — David B. Parker Sr., owner
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-cream">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-32 lg:py-44 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive-dark">
              IV · Quote
            </p>
            <h2 className="mt-7 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.04] tracking-[-0.018em] text-ink max-w-[18ch]">
              Two ways to reach{" "}
              <em className="italic text-olive-dark">the painter.</em>
            </h2>
            <p className="mt-6 text-[16px] leading-[1.65] text-ink-soft max-w-[44ch]">
              The shop line is the fastest way to a quote. The direct line is for ongoing jobs and
              repeat customers.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href={PHONE_HREF}
                className="group flex items-baseline justify-between gap-4 border-t border-hairline-strong pt-6 hover:border-olive"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-2">
                    Shop · primary
                  </p>
                  <p className="font-display text-[2.2rem] tnum text-ink leading-none">
                    {PHONE}
                  </p>
                </div>
                <span className="text-olive-dark group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href={PHONE_DIRECT_HREF}
                className="group flex items-baseline justify-between gap-4 border-t border-hairline pt-6 hover:border-olive"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-2">
                    Owner direct
                  </p>
                  <p className="font-display text-[2.2rem] tnum text-ink-soft leading-none">
                    {PHONE_DIRECT}
                  </p>
                </div>
                <span className="text-olive group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-1 gap-y-5 text-[14px]">
              <div className="grid grid-cols-[110px_1fr] gap-x-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet pt-0.5">Address</dt>
                <dd className="text-ink">{ADDRESS}</dd>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-x-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet pt-0.5">Service</dt>
                <dd className="text-ink">Fresno & Clovis</dd>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-x-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet pt-0.5">Find us</dt>
                <dd className="flex items-center gap-4 text-ink">
                  <a href={YELP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-olive-dark">
                    <YelpIcon /> Yelp
                  </a>
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-olive-dark">
                    <FacebookIcon /> Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-hairline-strong">
              <iframe
                src={MAPS_EMBED}
                title="Dave Parker Painting · 3463 E Dayton Ave"
                width="100%"
                height="540"
                style={{ border: 0, display: "block", filter: "sepia(0.18) saturate(0.85) contrast(0.96)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet">
              The shop · since 1997
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-hairline bg-bone/30">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <p className="font-display text-[16px] tracking-[-0.005em] text-ink">
            Dave Parker Painting
          </p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet">
            Fresno, CA · Est. 1997 · Owner-operated
          </p>
          <a href={PHONE_HREF} className="font-mono tnum text-[12.5px] text-ink hover:text-olive-dark">
            {PHONE}
          </a>
        </div>
      </footer>
    </>
  );
}
