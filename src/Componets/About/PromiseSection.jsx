import { BadgeCheck, Clock3, ShieldCheck, UsersRound } from 'lucide-react';

const promises = [
  {
    number: '01',
    title: 'We are on time',
    description:
      'We have a sharp eye on the extend all through its span and work towards conveying ventures with a commitment on time, and take after a six-step venture approach.',
    image: '/images/heroimages/1.png',
    Icon: Clock3,
  },
  {
    number: '02',
    title: 'We are satisfactory',
    description:
      "We believe successful partnerships are built on understanding client requirements, maintaining consistent quality, and responding effectively to feedback.",
    image: '/images/heroimages/2.png',
    Icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'We are experienced',
    description:
      'Our team combines technical skills, artistic expertise, and a collaborative approach to support projects of varying sizes and complexity.',
    image: '/images/heroimages/3.png',
    Icon: UsersRound,
  },
];

const PromiseSection = () => (
  <section
    aria-labelledby="promise-heading"
    className="relative isolate overflow-hidden bg-[var(--bg-primary)] px-[6%] py-14 text-[var(--text-primary)] sm:px-[5%] sm:py-16 lg:px-[3%] lg:py-20"
  >
    <div
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(184,134,11,0.07),transparent_40%)]"
      aria-hidden="true"
    />

    <div className="relative z-10 mx-auto max-w-[1500px]">
      <div data-aos="fade-up" data-aos-offset="60" className="mb-8 flex items-center gap-4 sm:mb-10">
        <span className="block h-px w-14 bg-[var(--gold-primary)] sm:w-20" aria-hidden="true" />
        <h2
          id="promise-heading"
          className="font-serif text-[clamp(1.4rem,2vw,2.75rem)] font-bold capitalize leading-[0.9] tracking-[-0.04em] text-[var(--text-primary)]"
        >
          We Keep <span className="text-[var(--gold-bright)]">our word</span>
        </h2>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {promises.map(({ number, title, description, image, Icon }, index) => (
          <article
            key={title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-offset="40"
            className="group relative overflow-hidden border border-[var(--gold-primary)]/50 bg-[var(--bg-secondary)] px-3 py-3 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:px-4 lg:px-5"
          >
            <div className="relative grid items-center gap-3 md:grid-cols-[82px_92px_minmax(0,1.2fr)_minmax(220px,0.7fr)] md:gap-4 lg:grid-cols-[90px_110px_minmax(0,1.15fr)_minmax(230px,0.68fr)]">
              <div
                className="text-[clamp(2.4rem,4vw,4.6rem)] font-bold leading-[0.85] tracking-[-0.06em] text-[var(--gold-bright)]"
                aria-label={`${number} ${title}`}
              >
                {number}
              </div>

              <div className="mx-auto flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-[3px] border-[var(--gold-primary)] bg-[var(--bg-primary)] text-[var(--gold-bright)] shadow-[0_0_18px_rgba(184,134,11,0.18)] sm:h-[5.5rem] sm:w-[5.5rem]">
                <Icon className="h-9 w-9 stroke-[1.8]" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h3 className="font-serif text-[clamp(1.4rem,2vw,2.2rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] text-[var(--text-primary)]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[44rem] text-justify text-sm leading-[1.7] text-[var(--text-secondary)] sm:text-[0.9rem] lg:text-[1rem]">
                  {description}
                </p>
              </div>

              <div className="relative h-[7rem] overflow-hidden border border-[var(--gold-primary)]/50 sm:h-[8rem]">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-2 top-2 text-[var(--gold-bright)]">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
