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

const ISSUE_DATE = "Vol. XXVIII · No. 4 · Fresno, California · 2026";

const processSteps = [
  { n: "I", title: "Walk-through", body: "We come to the house, look at the work, ask what the goal is, take measurements, talk through paint and sheen choices. The visit is short and the conversation is honest." },
  { n: "II", title: "Quote", body: "Most quotes go out the same day or the next morning, broken out by surface — walls, ceilings, trim, doors. We don't bury labor inside materials and we don't quote a number we can't honor." },
  { n: "III", title: "Prep", body: "Most of a clean finish is what happens before the first coat. Fill, sand, mask, prime where it matters. On exteriors that means pressure-washing and scraping back to sound surface." },
  { n: "IV", title: "Paint", body: "Two coats on most surfaces, three where the color demands it. Cut lines that hold against the next color over. Even sheen across walls, true color through trim and base." },
  { n: "V", title: "Walk-back", body: "Before we leave, we walk the work with you, room by room. We mark anything that needs touch-up and handle it on the spot. The painter who quoted is the painter who hands you back the keys." },
];

const services = [
  {
    code: "I",
    title: "INTERIOR",
    body: "Whole-house repaints, single rooms, accent walls, cabinet refinishes, trim and door work. Patient prep, even sheen, true color across surfaces. Most rooms repaint in a single day; whole-house work takes as long as the shape of the work demands. The result should be invisible — the eye sees the room when it walks in, not the paint job.",
    list: ["Whole-house repaints", "Cabinet refinishes", "Crown · base · trim", "Doors", "Texture-matching", "Color consultation"],
  },
  {
    code: "II",
    title: "EXTERIOR",
    body: "Stucco, wood, and metal exteriors prepped for a Central Valley summer. Twenty-eight summers on the same Fresno roads has taught us which products hold and which fade. Pressure-wash, scrape back to sound surface, prime the failure points, finish with paints chosen for stucco expansion and sun exposure.",
    list: ["Stucco · siding", "Soffits · eaves", "Garage doors", "Entry doors", "Iron exterior trim", "HOA color refresh"],
  },
];

const testimonials = [
  {
    body: "We bought a 1990s house in north Fresno that hadn't been painted inside in fifteen years. Dave's crew repainted every interior wall, ceiling, and trim run over two and a half weeks. Cut lines are sharp, color is consistent, and three years later we still can't find a flaw.",
    name: "Whole-house interior",
    context: "North Fresno · 2,400 sqft",
  },
  {
    body: "Dave painted our exterior stucco in 2018. He warned us the south-facing wall would need a re-coat sooner because of sun exposure, and quoted us for it then so we knew what was coming. He came back this year exactly when he said he would, for the price he said he would.",
    name: "Exterior repaint",
    context: "Stucco · 2018 → 2025",
  },
  {
    body: "Cabinets in a 1970s kitchen that everyone else wanted to replace. Dave's crew refinished them on-site over three days, with sealed prep and a sprayed enamel finish. Looks like a different kitchen for a fraction of the cabinet-replacement quote.",
    name: "Cabinet refinish",
    context: "Central Fresno · 3-day project",
  },
  {
    body: "Honest pricing, honest schedule, honest scope. He told us upfront which areas we could defer to next year to save money. That kind of advice is hard to find from a contractor.",
    name: "Multi-room interior",
    context: "West Fresno · honest scope",
  },
];

const stats = [
  { num: "28", label: "Years in business", note: "Founded 1997" },
  { num: "1", label: "Address", note: "3463 E Dayton, since day one" },
  { num: "2", label: "Trades", note: "Interior + exterior" },
  { num: "0", label: "Subcontractors", note: "Owner-operated, family-run" },
];

const faqs = [
  { q: "How long does a typical interior repaint take?", a: "A single room is usually one day on site, including masking and cleanup. A whole-house interior is one to three weeks depending on square footage and how much trim and cabinetry is involved. We give a specific schedule with the quote — not a range — and we don't slip it without calling you first." },
  { q: "Do you handle exterior work in summer?", a: "Yes — we work May through October on exteriors, when the stucco is dry and the temperature is right for paint to cure properly. Two-coat exterior jobs take three to seven days for a typical Fresno home. We schedule first thing in the morning to avoid working in 105° afternoon sun." },
  { q: "What kind of paint do you use?", a: "We've used the same family of paints for most of the last decade — products that hold up in Central Valley conditions. We are not married to any one brand and will switch when something tests better. We don't use the cheapest can on the shelf because it will fade in two summers." },
  { q: "Do you sub the work out?", a: "No. The painter who walked the quote is the painter who finishes the trim on the last door. The crew is small, family-run, and works every job together. If we are over capacity we will tell you the schedule honestly rather than push a sub-contractor onto your project." },
  { q: "Are you licensed and insured?", a: "Yes — we carry the appropriate California painting license and full general liability insurance. We will share a copy of the certificate on request before any work begins." },
  { q: "Can you match an existing color or texture?", a: "Almost always, yes. We bring color samples to the walk-through, hold them against the existing surface in the actual light of the room, and dial in the closest match. For texture work — orange peel, knockdown, skip-trowel — we can match within a foot of the existing pattern in most cases." },
  { q: "What areas do you serve?", a: "Fresno and Clovis primarily. We do occasional work in Madera, Reedley, and out toward Kingsburg for repeat customers. If you are not sure whether we cover your area, call." },
];

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" />
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

const PlusMark = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="faq-mark">
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

      {/* MASTHEAD — newspaper-style, heavy black bar with publication info */}
      <header className="bg-newsprint border-b-[1px] border-rule-heavy">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-3 pb-2 flex items-center justify-between text-[10px] tracking-[0.22em] uppercase font-mono text-ink-quiet">
          <span>Established in Fresno · 1997</span>
          <span>{ISSUE_DATE.split('·').slice(-1)[0].trim()} · {HOURS.split('·')[0].trim()}</span>
          <a href={PHONE_HREF} className="tnum text-ink hover:text-red-deep">
            {PHONE}
          </a>
        </div>
        <div className="border-t border-b border-rule-heavy">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 text-center">
            <h1 className="font-display font-black text-[clamp(2rem,5vw,4rem)] leading-[0.92] tracking-[-0.018em] text-ink uppercase">
              Dave Parker Painting
            </h1>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-2 flex items-center justify-between text-[10px] tracking-[0.22em] uppercase font-mono text-ink-quiet">
          <span>{ISSUE_DATE}</span>
          <nav className="hidden md:flex items-center gap-6 text-ink-soft">
            <a href="#story" className="hover:text-red-deep">Story</a>
            <a href="#process" className="hover:text-red-deep">Process</a>
            <a href="#work" className="hover:text-red-deep">Work</a>
            <a href="#voice" className="hover:text-red-deep">Notices</a>
            <a href="#faq" className="hover:text-red-deep">Inquiries</a>
            <a href="#contact" className="hover:text-red-deep">Reach</a>
          </nav>
          <span>Twenty-Eighth Year</span>
        </div>
      </header>

      {/* HERO — broadsheet headline */}
      <section className="border-b border-rule-heavy">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="settle">
            <p className="section-label mb-8">Volume XXVIII · The painter</p>

            <h2 className="font-display font-black text-[clamp(3.6rem,10vw,9rem)] leading-[0.94] tracking-[-0.025em] text-ink max-w-[15ch]">
              Twenty-eight years of{" "}
              <em className="italic font-normal text-red-deep">Fresno paint,</em>{" "}
              one painter,{" "}
              <em className="italic font-normal">one address.</em>
            </h2>
          </div>

          <div className="settle settle-1 mt-14 grid lg:grid-cols-12 gap-x-10 gap-y-7 items-end">
            <p className="lg:col-span-7 dropcap text-[17px] leading-[1.7] text-ink-soft max-w-[60ch]">
              David B. Parker Sr. opened his shop on Dayton Avenue in 1997 and has not moved since.
              For twenty-eight summers he has finished interiors and exteriors for the same Fresno
              neighborhoods — patient prep, even sheen, color that holds against the Central
              Valley sun. The truck still parks in the same driveway it parked in twenty years ago.
              When customers come back five, ten, fifteen years later for the second repaint,
              that tells us we did the first one right.
            </p>

            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-rule-strong">
              <p className="section-label mb-5">By the numbers</p>
              <dl className="space-y-3 text-[13.5px]">
                <div className="flex items-baseline gap-3 border-b border-rule pb-2">
                  <dt className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink-quiet w-[110px] shrink-0">Founded</dt>
                  <dd className="font-display tnum text-ink">1997</dd>
                </div>
                <div className="flex items-baseline gap-3 border-b border-rule pb-2">
                  <dt className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink-quiet w-[110px] shrink-0">Owner</dt>
                  <dd className="text-ink">David B. Parker Sr.</dd>
                </div>
                <div className="flex items-baseline gap-3 border-b border-rule pb-2">
                  <dt className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink-quiet w-[110px] shrink-0">Address</dt>
                  <dd className="text-ink">3463 E Dayton Ave</dd>
                </div>
                <div className="flex items-baseline gap-3 border-b border-rule pb-2">
                  <dt className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink-quiet w-[110px] shrink-0">Crew</dt>
                  <dd className="text-ink">Family-run · no subs</dd>
                </div>
                <div className="flex items-baseline gap-3">
                  <dt className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink-quiet w-[110px] shrink-0">Reach</dt>
                  <dd>
                    <a href={PHONE_HREF} className="font-display tnum text-[1.1rem] text-ink hover:text-red-deep">
                      {PHONE}
                    </a>
                  </dd>
                </div>
              </dl>

              <a
                href={PHONE_HREF}
                className="mt-7 inline-flex items-center gap-3 bg-ink text-newsprint px-6 py-3 text-[13px] tracking-[0.04em] hover:bg-red-deep"
              >
                <PhoneIcon />
                <span className="tnum">Call · {PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STORY — multi-column flow with marginalia */}
      <section id="story" className="border-b border-rule-heavy bg-newsprint-warm/40">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-36 grid lg:grid-cols-12 gap-x-10">
          <aside className="lg:col-span-3 lg:pr-6 mb-10 lg:mb-0">
            <p className="section-label mb-7">II · The painter</p>
            <p className="font-display italic text-[1.5rem] leading-[1.3] text-red-deep max-w-[30ch]">
              The painter who walks the job on day one is the same painter who hands you back the keys.
            </p>
          </aside>

          <div className="lg:col-span-9">
            <h3 className="font-display font-black text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.018em] text-ink mb-9 max-w-[26ch]">
              The shop has not moved since 1997.
            </h3>

            <div className="newspaper-cols text-[15.5px] leading-[1.75] text-ink-soft">
              <p>
                When David opened the shop on Dayton Avenue in 1997, much of north Fresno had not
                yet been built. Twenty-eight summers later he is still working out of that shop,
                still answering the same phone number, still finishing rooms and exteriors for the
                neighborhoods that grew up around him.
              </p>
              <p className="mt-4">
                The work is residential. The crew is small. The painter who walks the job on day
                one is the same painter who hands you back the keys. We do not subcontract the
                cabinet doors or the trim coat. The standard is the same on the inside of the
                closet as it is on the corner above the front door.
              </p>
              <p className="mt-4">
                Most jobs come in by phone. A walk-through is short. A quote arrives the same day
                or the next. The work starts within the week. There is nothing innovative about any
                of it — just the patience that comes from doing it for almost three decades, and
                the honest pricing that comes from not having to feed an office full of overhead.
              </p>
              <p className="mt-4">
                When customers come back five, ten, fifteen years later for the second repaint,
                that tells us we did the first one right. Most of our work now is repeat customers
                and the neighbors they refer. That is how a local painting business is supposed to
                work.
              </p>
            </div>

            <p className="mt-10 section-label !text-ink-quiet">— David B. Parker Sr., 2026</p>
          </div>
        </div>
      </section>

      {/* PROCESS — numbered Roman with broadsheet treatment */}
      <section id="process" className="border-b border-rule-heavy">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="section-label mb-6">III · How we work</p>
              <h2 className="font-display font-black text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.04] tracking-[-0.018em] text-ink max-w-[24ch]">
                Five steps,{" "}
                <em className="italic font-normal text-red-deep">in the same order, every job.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 text-[15px] leading-[1.7] text-ink-soft">
              <p>
                We have refined this sequence across nearly three decades and several thousand
                Fresno homes. The order matters. The timing matters.
              </p>
            </div>
          </div>

          <ol className="border-t-2 border-b-2 border-rule-heavy divide-y divide-rule-strong">
            {processSteps.map((s) => (
              <li key={s.n} className="grid grid-cols-1 md:grid-cols-[140px_220px_1fr] gap-x-8 gap-y-3 py-7">
                <span className="font-display italic text-[clamp(2.4rem,3.4vw,3rem)] text-red-deep leading-none tnum">{s.n}.</span>
                <h3 className="font-display font-black text-[clamp(1.4rem,2vw,1.7rem)] tracking-[-0.005em] text-ink leading-tight">{s.title}</h3>
                <p className="text-[15.5px] leading-[1.7] text-ink-soft max-w-[68ch]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORK — two trades as full-width broadsheet articles */}
      <section id="work" className="border-b border-rule-heavy bg-newsprint-warm/40">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-baseline mb-14">
            <p className="lg:col-span-3 section-label">IV · The work</p>
            <h2 className="lg:col-span-9 font-display font-black text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-[-0.018em] text-ink max-w-[24ch]">
              Two trades,{" "}
              <em className="italic font-normal text-red-deep">finished by the same crew.</em>
            </h2>
          </div>

          <div className="space-y-12 border-t-2 border-rule-heavy">
            {services.map((s, i) => (
              <article key={i} className="grid lg:grid-cols-12 gap-x-10 gap-y-7 pt-10 pb-2">
                <div className="lg:col-span-3">
                  <p className="font-display italic text-[2rem] text-red-deep leading-none">{s.code}.</p>
                </div>
                <div className="lg:col-span-9 lg:pl-4">
                  <h3 className="font-display font-black text-[clamp(1.7rem,2.8vw,2.4rem)] uppercase tracking-[-0.005em] text-ink mb-6">
                    {s.title}
                  </h3>
                  <p className="newspaper-cols text-[15.5px] leading-[1.75] text-ink-soft">
                    {s.body}
                  </p>
                  <ul className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-soft">
                    {s.list.map((x) => (
                      <li key={x}>· {x}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS — full-bleed black ink panel, the editorial */}
      <section id="standards" className="bg-ink text-newsprint">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <p className="section-label !text-red mb-10">V · Editorial · The standard</p>

          <h2 className="font-display italic font-normal text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.18] tracking-[-0.012em] text-newsprint mb-12 max-w-[26ch]">
            What it means to paint a house once.
          </h2>

          <p className="text-[17px] leading-[1.8] text-newsprint/85 max-w-[68ch]">
            A finished room should be invisible. The eye sees the space, not the paint. Cut lines
            stay where you cut them. Sheens stop where they are supposed to stop. The corner above
            the closet door — the one nobody ever paints right — looks the same as the rest of the
            wall. We do not paint over rot. We do not skip primer to make a number work. We show up
            when we said we would, finish when we said we would, and leave the room cleaner than we
            found it.
          </p>

          <p className="mt-6 text-[17px] leading-[1.8] text-newsprint/85 max-w-[68ch]">
            <span className="font-display italic">A painted house should look painted once.</span>{" "}
            That is the standard. Twenty-eight years has taught us what that takes — patience in
            the prep, discipline in the cut lines, products that hold, and the willingness to walk
            away from a job we cannot do right.
          </p>

          <p className="mt-12 section-label !text-red">— Signed, D.B.P. Sr.</p>
        </div>
      </section>

      {/* TESTIMONIALS — letters to the editor */}
      <section id="voice" className="border-b border-rule-heavy bg-newsprint">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 items-baseline mb-14">
            <p className="lg:col-span-3 section-label">VI · Notices · From the customer</p>
            <h2 className="lg:col-span-9 font-display font-black text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.018em] text-ink max-w-[22ch]">
              Four jobs,{" "}
              <em className="italic font-normal text-red-deep">in their own words.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-rule-strong border border-rule-heavy">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-newsprint p-8 lg:p-10 flex flex-col">
                <p className="section-label mb-4">{t.context}</p>
                <blockquote className="font-display italic text-[1.2rem] leading-[1.5] text-ink flex-1 max-w-[42ch]">
                  &ldquo;{t.body}&rdquo;
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-rule">
                  <p className="font-display font-bold text-[14px] text-ink uppercase tracking-[0.04em]">{t.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — typeset broadsheet figures */}
      <section className="border-b border-rule-heavy bg-newsprint-warm/40">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <p className="section-label mb-12">VII · The figures</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10">
            {stats.map((s, i) => (
              <div key={i} className={i > 0 ? "lg:border-l lg:border-rule-strong lg:pl-10" : ""}>
                <p className="font-display font-black text-[clamp(3rem,5vw,4.8rem)] leading-none text-ink tnum">{s.num}</p>
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-red-deep mt-5">{s.label}</p>
                <p className="text-[12.5px] text-ink-soft mt-1.5 leading-snug">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — classifieds-style */}
      <section id="faq" className="border-b border-rule-heavy">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-10 items-baseline mb-12">
            <p className="lg:col-span-3 section-label">VIII · Inquiries</p>
            <h2 className="lg:col-span-9 font-display font-black text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] tracking-[-0.018em] text-ink max-w-[22ch]">
              Common questions,{" "}
              <em className="italic font-normal text-red-deep">answered.</em>
            </h2>
          </div>

          <div className="border-t-2 border-b-2 border-rule-heavy divide-y divide-rule-strong">
            {faqs.map((f, i) => (
              <details key={i} className="faq" {...(i === 0 ? { open: true } : {})}>
                <summary className="py-7 flex items-baseline justify-between gap-6 hover:text-red-deep">
                  <h3 className="font-display font-bold text-[clamp(1.15rem,1.8vw,1.4rem)] tracking-[-0.005em] leading-tight text-ink flex-1">
                    {f.q}
                  </h3>
                  <span className="text-ink-quiet shrink-0 mt-1.5"><PlusMark /></span>
                </summary>
                <p className="pb-8 text-[15.5px] leading-[1.7] text-ink-soft max-w-[68ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT — broadsheet back-page */}
      <section id="contact" className="bg-newsprint-warm/40">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-36 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="section-label">IX · Reach the painter</p>
            <h2 className="mt-7 font-display font-black text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] tracking-[-0.018em] text-ink max-w-[18ch]">
              Two numbers,{" "}
              <em className="italic font-normal text-red-deep">one painter.</em>
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-ink-soft max-w-[44ch]">
              The shop line is the fastest way to a quote. The direct line is for ongoing jobs and
              repeat customers.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href={PHONE_HREF}
                className="group flex items-baseline justify-between gap-4 border-t-2 border-rule-heavy pt-6 hover:text-red-deep"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-2">Shop · primary</p>
                  <p className="font-display font-black text-[2.4rem] tnum text-ink leading-none">{PHONE}</p>
                </div>
                <span className="text-red-deep group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href={PHONE_DIRECT_HREF}
                className="group flex items-baseline justify-between gap-4 border-t border-rule-strong pt-6 hover:text-red-deep"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet mb-2">Owner direct</p>
                  <p className="font-display font-black text-[2.4rem] tnum text-ink-soft leading-none">{PHONE_DIRECT}</p>
                </div>
                <span className="text-ink-quiet group-hover:translate-x-1 transition-transform">→</span>
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
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet pt-0.5">Service area</dt>
                <dd className="text-ink">Fresno · Clovis · Madera (repeat)</dd>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-x-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-quiet pt-0.5">Find us</dt>
                <dd className="flex items-center gap-4 text-ink">
                  <a href={YELP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-red-deep">
                    <YelpIcon /> Yelp
                  </a>
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-red-deep">
                    <FacebookIcon /> Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="border-2 border-ink">
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
            <p className="mt-4 section-label">The shop · same address since 1997</p>
          </div>
        </div>
      </section>

      {/* FOOTER — newspaper colophon */}
      <footer className="bg-ink text-newsprint">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          <p className="font-display font-black text-[18px] uppercase">Dave Parker Painting</p>
          <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-newsprint/65 text-center">
            {ISSUE_DATE} · Owner-operated, family-run
          </p>
          <a href={PHONE_HREF} className="font-mono tnum text-[12.5px] text-newsprint hover:text-red md:text-right">
            {PHONE}
          </a>
        </div>
      </footer>
    </>
  );
}
