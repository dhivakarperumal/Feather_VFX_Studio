import {
  Award,
  ChartNoAxesCombined,
  Leaf,
  Lightbulb,
  Sparkles,
  UsersRound,
} from 'lucide-react';

const culturePillars = [
  { title: 'Creativity Driven', Icon: Lightbulb },
  { title: 'Technology', Icon: Sparkles },
  { title: 'Collaborative Team', Icon: UsersRound },
  { title: 'Excellence', Icon: Award },
];

const missionCards = [
  {
    title: 'Growth',
    description: 'Personal & professional growth for every team member.',
    Icon: ChartNoAxesCombined,
  },
  {
    title: 'Collaboration',
    description: 'A creative and supportive environment.',
    Icon: UsersRound,
  },
  {
    title: 'Innovation',
    description: 'Providing solutions that fill the digital divide.',
    Icon: Lightbulb,
  },
  {
    title: 'Sustainability',
    description: 'Committed to a better and brighter future.',
    Icon: Leaf,
  },
];

const OurCulture = () => (
  <section
    aria-labelledby="culture-mission-heading"
    className="relative isolate overflow-hidden border-y border-[var(--border-color)] bg-[var(--bg-secondary)] px-[6%] py-10 text-[var(--text-primary)] sm:px-[5%] sm:py-12 lg:px-[3%] lg:py-14"
  >
    <div
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(184,134,11,0.07),transparent_38%)]"
      aria-hidden="true"
    />
    <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[18px] border border-[var(--gold-primary)]/35 bg-[var(--bg-primary)] shadow-sm">
      <header className="px-6 pb-6 pt-7 text-center sm:px-8 sm:pt-9">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-primary)]">
            Our Culture &amp; Mission
          </p>
          <span className="h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
        </div>
        <h2
          id="culture-mission-heading"
          className="mt-3 font-serif text-2xl font-bold uppercase leading-tight sm:text-3xl lg:text-4xl"
        >
          Creative by nature.{' '}
          <span className="text-[var(--gold-primary)]">Driven by purpose.</span>
        </h2>
      </header>

      <div className="grid border-t border-[var(--border-color)] lg:grid-cols-2">
        <article className="p-6 sm:p-8 lg:p-10">
          <h3 className="font-serif text-xl font-bold uppercase text-[var(--text-primary)] sm:text-2xl">
            Our <span className="text-[var(--gold-primary)]">Culture</span>
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-[1.8] text-[var(--text-secondary)] sm:text-[15px]">
            <p>
              Visual effects are our passion. We combine advanced technology with creative expertise to produce visuals that bring stories to life. With a strong focus on detail, collaboration, and continuous improvement, we work closely with our clients to turn their creative visions into reality.
            </p>
            <p>
              Our culture is built on quality, commitment, transparency, and timely delivery. We strive to maintain high professional standards while fostering creativity, teamwork, and long-term client relationships.
            </p>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Our culture pillars">
            {culturePillars.map(({ title, Icon }) => (
              <li
                key={title}
                className="flex items-center gap-3 rounded-full border border-[var(--gold-primary)]/40 bg-[var(--bg-secondary)] px-3 py-2.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/75 bg-[var(--bg-primary)] text-[var(--gold-primary)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="border-t border-[var(--border-color)] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <h3 className="font-serif text-xl font-bold uppercase text-[var(--text-primary)] sm:text-2xl">
            Our <span className="text-[var(--gold-primary)]">Mission</span>
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-[1.8] text-[var(--text-secondary)] sm:text-[15px]">
            <p>
              Our mission is to deliver exceptional visual effects services through creativity, technical excellence, and efficient workflows.
            </p>
            <p>
              Our multidisciplinary team provides a comprehensive range of services, including Rotoscoping, Paint and Prep, Compositing, Matchmove, and Animation. We work with production companies and VFX studios to provide flexible solutions tailored to their project requirements.
            </p>
            <p>
              We encourage professional growth, collaboration, innovation, and responsible business practices. By combining artistic talent with technical expertise, we aim to build lasting partnerships and deliver value to every client.
            </p>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Our mission commitments">
            {missionCards.map(({ title, description, Icon }) => (
              <li
                key={title}
                className="flex gap-3 border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/75 bg-[var(--bg-primary)] text-[var(--gold-primary)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--gold-primary)]">
                    {title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-[var(--text-secondary)]">
                    {description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  </section>
);

export default OurCulture;
