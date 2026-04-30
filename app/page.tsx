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

const ArrowOut = ({ className = "" }: { className?: string }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

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

      {/* Floating Island Nav — high-end signature */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 lift">
        <div className="bg-paper/75 backdrop-blur-xl ring-1 ring-ink/10 rounded-full pl-5 pr-1.5 py-1.5 flex items-center gap-5 shadow-[0_24px_60px_-30px_oklch(0.18_0.02_250_/_0.20)]">
          <a href="/" className="flex items-center gap-2.5">
            <span className="block w-2 h-2 rounded-full bg-sage" />
            <span className="font-display text-[16px] tracking-[-0.005em] text-ink">
              Dave Parker Painting
            </span>
          </a>
          <span className="hidden md:block h-4 w-px bg-ink/15" />
          <nav className="hidden md:flex items-center gap-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-soft">
            <a href="#tenure" className="hover:text-sage">Tenure</a>
            <a href="#work" className="hover:text-sage">Work</a>
            <a href="#standards" className="hover:text-sage">Standards</a>
            <a href="#contact" className="hover:text-sage">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="group bg-ink text-paper rounded-full pl-4 pr-1.5 py-1.5 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] hover:bg-sage"
          >
            <span className="hidden sm:inline tnum">{PHONE}</span>
            <span className="sm:hidden">Call</span>
            <span className="w-7 h-7 rounded-full bg-paper/15 flex items-center justify-center group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
              <ArrowOut className="text-paper" />
            </span>
          </a>
        </div>
      </header>

      {/* HERO — left-aligned, asymmetric, generous whitespace */}
      <section className="relative pt-44 pb-24 lg:pt-52 lg:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="lift">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              <span className="w-1 h-1 rounded-full bg-sage" />
              Fresno · Painter · Since 1997
            </span>
          </div>

          <h1 className="lift lift-1 mt-12 font-display font-normal text-[clamp(3.4rem,11vw,9.6rem)] leading-[0.92] tracking-[-0.025em] text-ink max-w-[16ch]">
            Fresno&apos;s painter,
            <br />
            <em className="italic font-normal text-sage">since 1997.</em>
          </h1>

          <div className="lift lift-2 mt-14 grid lg:grid-cols-12 gap-10 items-end">
            <p className="lg:col-span-7 text-[18px] leading-[1.55] text-ink-soft max-w-[58ch]">
              David B. Parker Sr. has been painting Fresno houses for{" "}
              <span className="text-ink">twenty-eight years</span>, out of the
              same shop on Dayton Avenue, finishing the kind of interior and
              exterior work that gets done correctly the first time and stays
              done.
            </p>

            <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-3 bg-ink text-paper rounded-full pl-7 pr-2 py-2 font-mono uppercase tracking-[0.18em] text-[11px] hover:bg-sage"
              >
                Get a quote
                <span className="w-9 h-9 rounded-full bg-paper/15 flex items-center justify-center group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                  <ArrowOut className="text-paper" />
                </span>
              </a>
              <a
                href="#tenure"
                className="font-mono uppercase tracking-[0.18em] text-[11px] text-ink-soft hover:text-ink underline decoration-ink/20 underline-offset-[6px] hover:decoration-sage"
              >
                Read the story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TENURE — Asymmetric Bento (varied column spans, NOT identical card grid) */}
      <section id="tenure" className="border-y border-ink/10 bg-vellum/50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-10 items-baseline mb-16">
            <p className="lg:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-quiet">
              § Tenure
            </p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-ink max-w-[28ch]">
              Same painter. Same Dayton Avenue.{" "}
              <em className="italic text-sage">Same standards.</em>
            </h2>
          </div>

          {/* Asymmetric bento — 12-col grid with varied spans */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Big year-span — col-span-7 row-span-2 */}
            <div className="md:col-span-7 md:row-span-2 bg-paper rounded-[1.6rem] p-9 lg:p-12 ring-1 ring-ink/8 shadow-[inset_0_1px_0_oklch(1_0_0_/_0.7)] flex flex-col">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet">
                Founded · still here
              </p>

              <div className="year-span mt-8">
                <span className="font-display text-[clamp(3rem,7vw,5.8rem)] leading-none tnum text-ink">1997</span>
                <span className="rule-strong opacity-60" />
                <span className="font-display text-[clamp(3rem,7vw,5.8rem)] leading-none tnum text-sage italic">2025</span>
              </div>

              <p className="mt-10 font-display italic text-[1.6rem] leading-[1.3] text-ink max-w-[26ch]">
                Twenty-eight years on the same Fresno address — finishing rooms,
                houses, and trim for the same neighborhoods.
              </p>

              <div className="mt-auto pt-10 border-t border-ink/10 grid grid-cols-2 gap-x-6 gap-y-4 text-[12.5px]">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-1.5">Owner</p>
                  <p className="text-ink">David B. Parker Sr.</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-1.5">Trade</p>
                  <p className="text-ink">Owner-operated · family-run</p>
                </div>
              </div>
            </div>

            {/* Address card — col-span-5 row-span-1 */}
            <div className="md:col-span-5 bg-paper rounded-[1.6rem] p-8 ring-1 ring-ink/8 shadow-[inset_0_1px_0_oklch(1_0_0_/_0.7)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet">
                Address since founding
              </p>
              <p className="mt-6 font-display text-[1.7rem] leading-[1.15] text-ink">
                3463 E Dayton Ave
              </p>
              <p className="text-[14px] text-ink-soft mt-1.5">Fresno, CA 93726</p>
              <p className="mt-7 text-[13px] leading-[1.5] text-ink-soft">
                The shop has not moved since 1997. If you grew up in the 93726,
                you have driven past it.
              </p>
            </div>

            {/* Reviews/social — col-span-5 row-span-1 */}
            <div className="md:col-span-5 bg-paper rounded-[1.6rem] p-8 ring-1 ring-ink/8 shadow-[inset_0_1px_0_oklch(1_0_0_/_0.7)] flex flex-col">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet">
                What customers say
              </p>
              <p className="mt-6 font-display italic text-[1.25rem] leading-[1.4] text-ink flex-1">
                &ldquo;Strong reputation, perfect customer satisfaction&rdquo; —
                consistently, across third-party listings.
              </p>
              <div className="mt-7 flex items-center gap-4 text-[13px] font-mono uppercase tracking-[0.14em]">
                <a
                  href={YELP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink hover:text-sage"
                >
                  <YelpIcon /> Yelp
                </a>
                <span className="w-px h-3 bg-ink/15" />
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink hover:text-sage"
                >
                  <FacebookIcon /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK — TWO services as editorial columns, NOT cards */}
      <section id="work" className="bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-10 items-baseline mb-20">
            <p className="lg:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-quiet">
              § Work
            </p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.0] tracking-[-0.02em] text-ink max-w-[22ch]">
              Two trades, done <em className="italic text-sage">in the same crew.</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-y-20 gap-x-16">
            <article>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass mb-5">
                Interior · whole-house and rooms
              </p>
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.1] tracking-[-0.012em] text-ink mb-7">
                Walls, ceilings, trim, doors, cabinets.
              </h3>
              <p className="text-[15.5px] leading-[1.65] text-ink-soft max-w-[44ch]">
                Patient prep — fill, sand, mask, prime where it matters. Cut
                lines that hold against five years of door slams. Even sheen
                across walls and ceilings, true color through trim and
                base. Most rooms repaint in a day; whole houses depend on the
                square footage and the shape of the work.
              </p>
              <ul className="mt-7 pt-6 border-t border-ink/10 space-y-2.5 text-[13px] text-ink-soft">
                <li>· Whole-house repaints</li>
                <li>· Cabinet refinishes</li>
                <li>· Crown, base, and door trim</li>
                <li>· Texture-matching for repairs</li>
                <li>· Color consultation on-site</li>
              </ul>
            </article>

            <article>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass mb-5">
                Exterior · stucco, wood, trim
              </p>
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.1] tracking-[-0.012em] text-ink mb-7">
                Painted to last a Fresno summer.
              </h3>
              <p className="text-[15.5px] leading-[1.65] text-ink-soft max-w-[44ch]">
                Twenty-eight summers on the same roads has taught us which
                products hold up and which fade. We pressure-wash, scrape, prime
                the failure points, and finish with paints chosen for stucco
                expansion, sun exposure, and the way Fresno weather actually
                works on a wall.
              </p>
              <ul className="mt-7 pt-6 border-t border-ink/10 space-y-2.5 text-[13px] text-ink-soft">
                <li>· Stucco · siding</li>
                <li>· Soffits · eaves · fascia</li>
                <li>· Garage doors · entry doors</li>
                <li>· Iron and metal exterior trim</li>
                <li>· Color refresh for HOA-bound homes</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* STANDARDS — single-paragraph dark band, Editorial Luxury vibe */}
      <section id="standards" className="bg-ink text-paper">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
            <span className="w-1 h-1 rounded-full bg-brass" />
            Standards · since 1997
          </span>

          <p className="mt-12 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.18] tracking-[-0.012em] text-paper max-w-[26ch]">
            What it means to{" "}
            <em className="italic text-brass">paint a house once.</em>
          </p>

          <p className="mt-12 text-[17px] leading-[1.7] text-paper/80 max-w-[68ch]">
            A finished room should be invisible. The eye sees the space, not the
            paint. Cut lines stay where you cut them. Sheens stop where they are
            supposed to stop. The corner above the closet door — the one nobody
            ever paints right — looks the same as the rest of the wall. We do
            not paint over rot. We do not skip primer to make a number work. We
            show up when we said we would, finish when we said we would, and
            leave the room cleaner than we found it.{" "}
            <span className="font-display italic text-paper">A painted house
            should look painted once.</span> Twenty-eight years has taught us
            what that takes.
          </p>

          <p className="mt-10 font-mono text-[10.5px] uppercase tracking-[0.22em] text-paper/45">
            — David B. Parker Sr., owner
          </p>
        </div>
      </section>

      {/* CONTACT — split, dual-phone, simple framed map */}
      <section id="contact" className="bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-36 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              <span className="w-1 h-1 rounded-full bg-sage" />
              Quote · same-week start on most jobs
            </span>

            <h2 className="mt-9 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.0] tracking-[-0.02em] text-ink">
              Two ways to reach{" "}
              <em className="italic text-sage">the painter.</em>
            </h2>

            <p className="mt-7 max-w-[42ch] text-[16px] leading-[1.65] text-ink-soft">
              The shop line is the fastest way to a quote. The direct line is
              for ongoing jobs and repeat customers.
            </p>

            <div className="mt-12 space-y-7">
              <a
                href={PHONE_HREF}
                className="group flex items-center justify-between gap-4 border-t border-ink/12 pt-6 hover:border-sage/40"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-1.5">
                    Shop · primary
                  </p>
                  <p className="font-display text-[2rem] tnum text-ink leading-none">
                    {PHONE}
                  </p>
                </div>
                <span className="w-11 h-11 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-sage group-hover:translate-x-[2px]">
                  <ArrowOut />
                </span>
              </a>

              <a
                href={PHONE_DIRECT_HREF}
                className="group flex items-center justify-between gap-4 border-t border-ink/12 pt-6 hover:border-sage/40"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-1.5">
                    Owner direct
                  </p>
                  <p className="font-display text-[2rem] tnum text-ink-soft leading-none">
                    {PHONE_DIRECT}
                  </p>
                </div>
                <span className="w-11 h-11 rounded-full bg-vellum text-ink flex items-center justify-center group-hover:bg-sage group-hover:text-paper group-hover:translate-x-[2px]">
                  <PhoneIcon />
                </span>
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
                  <a href={YELP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-sage">
                    <YelpIcon /> Yelp
                  </a>
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-sage">
                    <FacebookIcon /> Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[1.6rem] overflow-hidden ring-1 ring-ink/10 bg-vellum">
              <iframe
                src={MAPS_EMBED}
                title="Dave Parker Painting · 3463 E Dayton Ave"
                width="100%"
                height="540"
                style={{ border: 0, display: "block", filter: "grayscale(0.4) contrast(0.95) sepia(0.04)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="block w-2 h-2 rounded-full bg-sage" />
            <p className="font-display text-[15px] tracking-[-0.005em] text-ink">
              Dave Parker Painting
            </p>
          </div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet">
            Fresno, CA · Est. 1997 · Owner-operated
          </p>
          <a
            href={PHONE_HREF}
            className="font-mono tnum text-[12px] tracking-[0.04em] text-ink hover:text-sage"
          >
            {PHONE}
          </a>
        </div>
      </footer>
    </>
  );
}
