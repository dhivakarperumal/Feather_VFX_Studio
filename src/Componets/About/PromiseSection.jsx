import { Clock3, ShieldCheck, UsersRound } from 'lucide-react';

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
      'We believe successful partnerships are built on understanding client requirements, maintaining consistent quality, and responding effectively to feedback.',
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
      {/* Heading */}
      <div data-aos="fade-up" data-aos-offset="60" className="mb-10 flex items-center gap-4 sm:mb-12">
        <span className="block h-px w-14 bg-[var(--gold-primary)] sm:w-20" aria-hidden="true" />
        <h2
          id="promise-heading"
          className="font-serif text-[clamp(1.4rem,2vw,2.75rem)] font-bold capitalize leading-[0.9] tracking-[-0.04em] text-[var(--text-primary)]"
        >
          We Keep <span className="text-[var(--gold-bright)]">our word</span>
        </h2>
      </div>

      {/* Vertical cards grid */}
      <div className="grid gap-6 md:grid-cols-3 md:gap-7">
        {promises.map(({ number, title, description, image, Icon }, index) => (
          <article
            key={title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-offset="40"
            className="group flex flex-col border border-[var(--gold-primary)]/40 bg-[var(--bg-secondary)] p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-6"
          >
            {/* Number */}
            <span className="font-serif justify-center text-[clamp(2.6rem,5vw,4rem)] font-bold leading-none tracking-[-0.06em] text-[var(--gold-bright)]">
              {number}
            </span>

            {/* Icon + Title */}
            <div className="mt-4 flex justify-center items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--gold-primary)] bg-[var(--bg-primary)] text-[var(--gold-bright)] shadow-[0_0_14px_rgba(184,134,11,0.18)] transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(184,134,11,0.3)]">
                <Icon className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-lg font-bold uppercase leading-tight tracking-[0.02em] text-[var(--text-primary)] sm:text-xl">
                {title}
              </h3>
            </div>

            {/* Divider */}
            <span className="mt-4 block h-px w-10 bg-[var(--gold-bright)]" aria-hidden="true" />

            {/* Description */}
            <p className="mt-4 flex-1 text-sm leading-[1.75] text-[var(--text-secondary)] sm:text-[0.94rem]">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
