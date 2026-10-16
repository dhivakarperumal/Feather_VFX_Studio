import { ArrowUpRight, ChartNoAxesCombined, Leaf, Lightbulb, UsersRound } from 'lucide-react';

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

const OurMission = () => (
  <section className="relative isolate overflow-hidden border-y border-[var(--border-color)] bg-[var(--bg-primary)] px-[6%] py-10 text-[var(--text-primary)] sm:px-[5%] sm:py-12 lg:px-[3%] lg:py-14">
    <div
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(184,134,11,0.06),transparent_35%)]"
      aria-hidden="true"
    />

    <div className="mx-auto max-w-[1500px]">
      <div data-aos="fade-up" data-aos-offset="60" className="flex items-center justify-center">
        <div className="flex items-center gap-3">
          <span className="inline-block h-px w-12 bg-[var(--gold-primary)]" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-primary)]">
            Our Mission
          </span>
        </div>
      </div>

      <h2 data-aos="fade-up" data-aos-delay="80" data-aos-offset="60" className="mt-4 text-center font-serif text-2xl font-bold uppercase leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)] sm:text-[1.875rem] lg:text-[2.5rem]">
        Our <span className="text-[var(--gold-primary)]">Mission</span>
      </h2>

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-right" data-aos-offset="60" className="relative min-h-[360px] overflow-hidden rounded-[18px] border border-[var(--gold-primary)]/35 bg-[var(--bg-secondary)] lg:min-h-[420px]">
          <img
            src="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png"
            alt="Creative studio team at work"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)]/50 via-transparent to-transparent" aria-hidden="true" />
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-offset="60" className="space-y-6 text-[15px] leading-[1.9] text-[var(--text-secondary)] sm:text-base">
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
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {missionCards.map(({ title, description, Icon }, index) => (
          <article key={title} data-aos="zoom-in" data-aos-delay={index * 80} data-aos-offset="60" className="group relative overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-primary)]/60">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold-primary)]/80 bg-[var(--bg-primary)] text-[var(--gold-primary)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-[var(--gold-primary)] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold uppercase tracking-[0.08em] text-[var(--gold-primary)]">
              {title}
            </h3>
            <p className="mt-3 max-w-[25ch] text-sm leading-relaxed text-[var(--text-secondary)]">
              {description}
            </p>
            <div className="mt-5 h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OurMission;
