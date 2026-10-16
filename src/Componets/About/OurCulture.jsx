import { Award, Lightbulb, Sparkles, UsersRound } from 'lucide-react';

const culturePillars = [
  { title: 'Creativity Driven', Icon: Lightbulb },
  { title: 'Technology', Icon: Sparkles },
  { title: 'Collaborative Team', Icon: UsersRound },
  { title: 'Excellence', Icon: Award },
];

const OurCulture = () => (
  <section className="relative isolate overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-secondary)] px-[6%] py-10 text-[var(--text-primary)] sm:px-[5%] sm:py-12 lg:px-[3%] lg:py-14">
    <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[18px] border border-[var(--gold-primary)]/35 bg-[var(--bg-primary)] shadow-sm">
      <div className="grid lg:grid-cols-[1.08fr_1.2fr]">
        <div data-aos="fade-right" className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-12 bg-[var(--gold-primary)]" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-primary)]">
              Our Culture
            </span>
          </div>

          <h2 className="mt-4 font-serif text-2xl font-bold uppercase leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)] sm:text-[1.875rem] lg:text-[2.5rem] lg:leading-[0.9]">
            Our <span className="text-[var(--gold-primary)]">Culture</span>
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-[1.9] text-[var(--text-secondary)] sm:text-base">
            <p>
              Visual effects are our passion. We combine advanced technology with creative expertise to produce visuals that bring stories to life. With a strong focus on detail, collaboration, and continuous improvement, we work closely with our clients to turn their creative visions into reality.
            </p>
            <p>
              Our culture is built on quality, commitment, transparency, and timely delivery. We strive to maintain high professional standards while fostering creativity, teamwork, and long-term client relationships.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {culturePillars.map(({ title, Icon }, index) => (
              <div key={title} data-aos="fade-up" data-aos-delay={index * 70} data-aos-offset="40" className="flex items-center gap-3 rounded-full border border-[var(--gold-primary)]/40 bg-[var(--bg-secondary)] px-3 py-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--gold-primary)]/75 bg-[var(--bg-primary)] text-[var(--gold-primary)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-[9px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[var(--text-secondary)]">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-offset="60" className="relative min-h-[440px] overflow-hidden border-t border-[var(--border-color)] lg:min-h-[620px] lg:border-l lg:border-t-0">
          <img
            src="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png"
            alt="VFX team working in a high-tech studio"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/60 via-[var(--bg-primary)]/10 to-transparent" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

export default OurCulture;
