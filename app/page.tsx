import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dave Parker Painting — Fresno, CA · Since 1997",
};

const PHONE = "(559) 227-7980";
const PHONE_HREF = "tel:+15592277980";
const PHONE_DIRECT = "(559) 259-3932";
const PHONE_DIRECT_HREF = "tel:+15592593932";
const ADDRESS = "3463 E Dayton Ave, Fresno, CA 93726";
const HOURS = "Monday – Friday · 8 AM – 5 PM";
const YELP = "https://www.yelp.com/biz/dave-parker-painting-fresno";
const FACEBOOK = "https://www.facebook.com/davidparkerpaintings/";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=3463%20E%20Dayton%20Ave%2C%20Fresno%2C%20CA%2093726&output=embed";

const processSteps = [
  {
    n: "I",
    title: "Walk-through",
    body: "We come to the house, look at the work, ask what the goal is, take measurements, talk through paint and sheen choices. The visit is short and the conversation is honest. We will tell you in plain terms whether the project is worth doing now or whether the wall needs to dry out for another season first.",
  },
  {
    n: "II",
    title: "Quote",
    body: "Most quotes go out the same day or the next morning, broken out by surface — walls, ceilings, trim, doors — so you can see exactly what you're paying for and what you can defer. We don't bury labor inside materials, we don't pad with fictional surcharges, and we don't quote a number we can't honor.",
  },
  {
    n: "III",
    title: "Prep",
    body: "Most of a clean finish is what happens before the first coat. Fill, sand, mask, prime where it matters. On exteriors that means pressure-washing, scraping back to sound surface, caulking failure points. On interiors it means moving and covering everything, taping clean lines on baseboards and ceilings, and protecting floors and furniture properly.",
  },
  {
    n: "IV",
    title: "Paint",
    body: "Two coats on most surfaces, three where the color demands it. Cut lines that hold against the next color over. Even sheen across walls, true color through trim and base. We use products we have watched perform in the Central Valley for two decades — not the cheapest can on the shelf, not the priciest, but the ones that hold.",
  },
  {
    n: "V",
    title: "Walk-back",
    body: "Before we leave, we walk the work with you, room by room, surface by surface. We mark anything that needs touch-up and handle it on the spot. We leave the room cleaner than we found it. The painter who walked the first quote is the same painter who hands you back the keys.",
  },
];

const services = [
  {
    code: "I — Interior",
    title: "Walls, ceilings, trim, doors, cabinets.",
    body: "Whole-house repaints, single rooms, accent walls, cabinet refinishes, trim and door work. Patient prep, even sheen, true color across surfaces. Most rooms repaint in a single day; whole-house work takes as long as the shape of the work demands. The result should be invisible — the eye sees the room when it walks in, not the paint job.",
    list: ["Whole-house repaints", "Single rooms · accent walls", "Cabinet refinishes", "Crown · base · trim", "Doors", "Texture-matching for repairs", "Color consultation on-site"],
  },
  {
    code: "II — Exterior",
    title: "Stucco, wood, and metal — for a Central Valley summer.",
    body: "Twenty-eight summers on the same Fresno roads has taught us which products hold and which fade. Pressure-wash, scrape back to sound surface, prime the failure points, finish with paints chosen for stucco expansion, sun exposure, and the way Fresno weather actually works on a wall.",
    list: ["Stucco · siding", "Soffits · eaves · fascia", "Garage doors · entry doors", "Iron exterior trim", "HOA color refresh", "Whole-exterior repaints"],
  },
];

const testimonials = [
  {
    body: "We bought a 1990s house in north Fresno that hadn't been painted inside in fifteen years. Dave's crew repainted every interior wall, ceiling, and trim run over two and a half weeks. Cut lines are sharp, color is consistent, and three years later we still can't find a flaw.",
    name: "Whole-house interior · north Fresno",
    context: "2.5-week project · 2,400 sqft",
  },
  {
    body: "Dave painted our exterior stucco in 2018. He warned us the south-facing wall would need a re-coat sooner because of sun exposure, and quoted us for it then so we knew what was coming. He came back this year exactly when he said he would, for the price he said he would. That is rare.",
    name: "Exterior repaint · 2018, repeat 2025",
    context: "Stucco · south-facing repaint",
  },
  {
    body: "Cabinets in a 1970s kitchen that everyone else wanted to replace. Dave's crew refinished them on-site over three days, with sealed prep and a sprayed enamel finish. Looks like a different kitchen for a fraction of the cabinet-replacement quote.",
    name: "Cabinet refinish · central Fresno",
    context: "3-day project · sprayed enamel",
  },
  {
    body: "Honest pricing, honest schedule, honest scope. He told us upfront which areas we could defer to next year to save money. That kind of advice is hard to find from a contractor.",
    name: "Multi-room interior · west Fresno",
    context: "Honesty · scope discipline",
  },
];

const stats = [
  { num: "28", label: "Years in business", note: "Founded 1997" },
  { num: "1", label: "Address", note: "3463 E Dayton Ave since day one" },
  { num: "2", label: "Trades", note: "Interior + exterior, one crew" },
  { num: "0", label: "Subcontractors", note: "Owner-operated, family-run" },
];

const faqs = [
  {
    q: "How long does a typical interior repaint take?",
    a: "A single room is usually one day on site, including masking and cleanup. A whole-house interior is one to three weeks depending on square footage, ceiling height, and how much trim and cabinetry is involved. We give a specific schedule with the quote — not a range — and we don't slip it without calling you first.",
  },
  {
    q: "Do you handle exterior work in summer?",
    a: "Yes — we work May through October on exteriors, when the stucco is dry and the temperature is right for paint to cure properly. Two-coat exterior jobs take three to seven days for a typical Fresno home. We schedule first thing in the morning to avoid working in 105° afternoon sun.",
  },
  {
    q: "What kind of paint do you use?",
    a: "We've used the same family of paints for most of the last decade — products that hold up in Central Valley conditions. We are not married to any one brand and will switch when something tests better. We don't use the cheapest can on the shelf because it will fade in two summers; we don't use the priciest because the difference doesn't show up on most walls.",
  },
  {
    q: "Do you sub the work out?",
    a: "No. The painter who walked the quote is the painter who finishes the trim on the last door. The crew is small, family-run, and works every job together. If we are over capacity we will tell you the schedule honestly rather than push a sub-contractor onto your project.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — we carry the appropriate California painting license and full general liability insurance. We will share a copy of the certificate on request before any work begins.",
  },
  {
    q: "Can you match an existing color or texture?",
    a: "Almost always, yes. We bring color samples to the walk-through, hold them against the existing surface in the actual light of the room, and dial in the closest match. For texture work — orange peel, knockdown, skip-trowel — we can match within a foot of the existing pattern in most cases.",
  },
  {
    q: "What areas do you serve?",
    a: "Fresno and Clovis primarily. We do occasional work in Madera, Reedley, and out toward Kingsburg for repeat customers. If you are not sure whether we cover your area, call.",
  },
];

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const YelpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11 2v9.5l-6-3.2C6.7 4.7 8.7 2.5 11 2zm0 11.6V22c-2.6-.4-4.7-2.1-5.6-4.4L11 13.6zm2-3.6 6.5 1.5c-.5 2.4-2.1 4.3-4.3 5L13 12.4V10zm0 6 4.7 4.7c-1.4.6-2.9.9-4.7.9V16z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.5V21h3z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="faq-icon">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

      <div className="grain" aria-hidden="true" />

      {/* HEADER */}
      <header className="border-b border-hairline bg-cream/90 sticky top-0 z-40 backdrop-blur-sm">
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
            <a href="#process" className="hover:text-olive-dark">Process</a>
            <a href="#work" className="hover:text-olive-dark">Work</a>
            <a href="#voice" className="hover:text-olive-dark">Reviews</a>
            <a href="#faq" className="hover:text-olive-dark">FAQ</a>
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

      {/* HERO — Editorial Split with prose-driven hero */}
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
            <p className="dropcap text-[17px] leading-[1.65] text-ink-soft max-w-[44ch] font-body">
              David B. Parker Sr. opened the shop on Dayton Avenue in 1997 and has not moved since.
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

        {/* Year-span masthead band */}
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

      {/* STORY — Long-form Story Column with marginalia */}
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
              <p><span className="text-ink-quiet">Crew</span> &nbsp; Family-run · no subs</p>
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
              it — just the patience that comes from doing it for almost three decades, and the
              honest pricing that comes from not having to feed an office full of overhead.
            </p>

            <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft max-w-[58ch]">
              When customers come back five, ten, fifteen years later for the second repaint, that
              tells us we did the first one right. Most of our work now is repeat customers and the
              neighbors they refer. That is how a local painting business is supposed to work.
            </p>

            <p className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive-dark">
              — David B. Parker Sr.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS — Numbered list */}
      <section id="process" className="border-b border-hairline bg-bone/30">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-10 items-baseline mb-16">
            <p className="lg:col-span-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet">
              II · How we work
            </p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.04] tracking-[-0.02em] text-ink max-w-[22ch]">
              Five steps,{" "}
              <em className="italic text-olive-dark">in the same order, every job.</em>
            </h2>
          </div>

          <ol className="space-y-3">
            {processSteps.map((s) => (
              <li key={s.n} className="bg-cream rounded-2xl p-8 lg:p-10 border border-hairline-strong grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-10 gap-y-4">
                <div className="flex md:flex-col items-baseline gap-3 md:gap-2">
                  <span className="font-display italic text-[1.6rem] text-olive-dark leading-none">{s.n}</span>
                  <span className="font-display text-[1.5rem] tracking-[-0.01em] text-ink leading-none">{s.title}</span>
                </div>
                <p className="text-[15.5px] leading-[1.7] text-ink-soft max-w-[68ch]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORK — Two trades as full-width editorial articles */}
      <section id="work" className="border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-12 mb-20 items-baseline">
            <p className="lg:col-span-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet">
              III · The work
            </p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] tracking-[-0.02em] text-ink max-w-[24ch]">
              Two trades,{" "}
              <em className="italic text-olive-dark">finished by the same crew.</em>
            </h2>
          </div>

          {services.map((s, i) => (
            <article key={i} className={`grid lg:grid-cols-12 gap-x-12 gap-y-7 ${i < services.length - 1 ? 'pb-16 mb-16 border-b border-hairline' : ''}`}>
              <div className="lg:col-span-3">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive-dark">
                  {s.code}
                </p>
              </div>
              <div className="lg:col-span-9 lg:pl-4">
                <h3 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] tracking-[-0.014em] text-ink max-w-[22ch]">
                  {s.title}
                </h3>
                <p className="mt-7 text-[16px] leading-[1.7] text-ink-soft max-w-[60ch]">{s.body}</p>
                <ul className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-soft">
                  {s.list.map((x) => (
                    <li key={x}>· {x}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STANDARDS — full-bleed warm dark band */}
      <section id="standards" className="bg-olive-dark text-cream">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-cream/55">
            IV · Standards
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
            found it.
          </p>

          <p className="mt-6 text-[17px] leading-[1.75] text-cream/85 max-w-[68ch]">
            <span className="font-display italic">A painted house should look painted once.</span>{" "}
            That is the standard. Twenty-eight years has taught us what that takes — patience in
            the prep, discipline in the cut lines, products that hold, and the willingness to walk
            away from a job we cannot do right.
          </p>

          <p className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-cream/45">
            — David B. Parker Sr., owner
          </p>
        </div>
      </section>

      {/* TESTIMONIALS — Named cards (anonymous in current data; logged as gap) */}
      <section id="voice" className="border-b border-hairline bg-bone/30">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-10 items-baseline mb-14">
            <p className="lg:col-span-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet">
              V · Customers
            </p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.04] tracking-[-0.018em] text-ink max-w-[22ch]">
              Four jobs,{" "}
              <em className="italic text-olive-dark">in their own words.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-cream rounded-3xl p-9 lg:p-10 border border-hairline-strong flex flex-col">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive-dark mb-5">{t.context}</p>
                <blockquote className="font-display italic text-[1.2rem] leading-[1.5] text-ink flex-1 max-w-[42ch]">
                  &ldquo;{t.body}&rdquo;
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-hairline">
                  <p className="text-[13.5px] text-ink">{t.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="count-in bg-bone/40 rounded-2xl px-7 py-9 border border-hairline"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="font-display text-[clamp(2.8rem,4.4vw,4rem)] leading-none text-ink tnum">{s.num}</p>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet mt-5">{s.label}</p>
                <p className="text-[12.5px] text-ink-soft mt-2 leading-snug">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — Accordion */}
      <section id="faq" className="border-b border-hairline bg-bone/30">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-10 items-baseline mb-12">
            <p className="lg:col-span-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-quiet">
              VI · Common questions
            </p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.04] tracking-[-0.018em] text-ink max-w-[22ch]">
              Worth answering{" "}
              <em className="italic text-olive-dark">before you call.</em>
            </h2>
          </div>

          <div className="divide-y divide-hairline-strong border-t border-b border-hairline-strong">
            {faqs.map((f, i) => (
              <details key={i} className="faq group" {...(i === 0 ? { open: true } : {})}>
                <summary className="py-7 flex items-baseline justify-between gap-6 hover:text-olive-dark">
                  <h3 className="font-display text-[clamp(1.15rem,1.8vw,1.4rem)] tracking-[-0.005em] leading-tight text-ink flex-1">
                    {f.q}
                  </h3>
                  <span className="text-ink-quiet shrink-0 mt-1.5"><PlusIcon /></span>
                </summary>
                <p className="pb-8 text-[15.5px] leading-[1.7] text-ink-soft max-w-[68ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-32 lg:py-44 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive-dark">
              VII · Quote
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
                  <p className="font-display text-[2.2rem] tnum text-ink leading-none">{PHONE}</p>
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
                  <p className="font-display text-[2.2rem] tnum text-ink-soft leading-none">{PHONE_DIRECT}</p>
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
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet pt-0.5">Hours</dt>
                <dd className="text-ink">{HOURS}</dd>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-x-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet pt-0.5">Service</dt>
                <dd className="text-ink">Fresno · Clovis · Madera (repeat customers)</dd>
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
              The shop · same address since 1997
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
