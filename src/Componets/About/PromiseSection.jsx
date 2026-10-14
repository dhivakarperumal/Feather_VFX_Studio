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
      "That's what drives us day by day. Because at Feather VFX we understand that creating the best image goes much further than delivering our best work to the best VFX studios in the world.",
    image: '/images/heroimages/2.png',
    Icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'We are experienced',
    description:
      'Feather Staff is a team of over 50 creative minds and acts as a partner to US, Canada, UK, Asia Pacific and European production companies.',
    image: '/images/heroimages/3.png',
    Icon: UsersRound,
  },
];

const PromiseSection = () => (
  <section
    aria-labelledby="promise-heading"
    className="relative isolate overflow-hidden bg-[var(--bg-primary)] px-[6%] py-14 text-white sm:px-[5%] sm:py-16 lg:px-[3%] lg:py-20"
  >
    <div
      className="pointer-events-none absolute inset-y-0 left-0 z-0 w-28 opacity-80"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(circle at 25% 22%, rgba(255, 208, 128, 0.3), transparent 26%), linear-gradient(90deg, rgba(0,0,0,0.48), rgba(0,0,0,0.1) 38%, rgba(0,0,0,0.58)), repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 11px)',
      }}
    />
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-0 w-28 opacity-80"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(circle at 75% 22%, rgba(255, 208, 128, 0.3), transparent 26%), linear-gradient(270deg, rgba(0,0,0,0.48), rgba(0,0,0,0.1) 38%, rgba(0,0,0,0.58)), repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 11px)',
      }}
    />

    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(230,171,88,0.12),transparent_35%)]" aria-hidden="true" />

    <div className="relative z-10 mx-auto max-w-[1500px]">
      <div className="mb-8 flex items-center gap-4 sm:mb-10">
        <span className="block h-px w-14 bg-[var(--gold-primary)] shadow-[0_0_10px_rgba(214,160,74,0.5)] sm:w-20" aria-hidden="true" />
        <h2
          id="promise-heading"
          className="font-serif text-4xl font-bold capitalize leading-none tracking-[-0.03em] text-white sm:text-5xl lg:text-[5.1rem]"
        >
          We Keep <span className="text-[var(--gold-bright)]">our word</span>
        </h2>
      </div>

      <div className="space-y-6">
        {promises.map(({ number, title, description, image, Icon }) => (
          <article
            key={title}
            className="group relative overflow-hidden border border-[var(--gold-primary)]/80 bg-[linear-gradient(135deg,rgba(5,10,11,0.96),rgba(12,18,19,0.82))] px-4 py-4 shadow-[0_0_0_1px_rgba(214,160,74,0.2),0_12px_30px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-5 lg:px-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,168,88,0.12),transparent_25%)]" aria-hidden="true" />
            <div className="relative grid items-center gap-4 md:grid-cols-[86px_96px_minmax(0,1.25fr)_minmax(200px,0.66fr)] md:gap-5 lg:grid-cols-[90px_110px_minmax(0,1.1fr)_minmax(210px,0.52fr)]">
              <div
                className="text-[clamp(2.5rem,5vw,4.7rem)] font-bold leading-none tracking-[-0.05em] text-[var(--gold-bright)]"
                aria-label={`${number} ${title}`}
              >
                {number}
              </div>

              <div className="mx-auto flex h-[5.25rem] w-[5.25rem] items-center justify-center rounded-full border-[3px] border-[var(--gold-primary)] bg-[rgba(12,18,19,0.95)] text-[var(--gold-bright)] shadow-[0_0_20px_rgba(214,160,74,0.26)] sm:h-[5.6rem] sm:w-[5.6rem]">
                <Icon className="h-10 w-10 stroke-[1.8]" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h3 className="font-sans text-[clamp(1.2rem,2vw,2.3rem)] font-bold uppercase leading-none tracking-[0.02em] text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-[48rem] text-sm leading-[1.65] text-white/72 sm:text-base">
                  {description}
                </p>
              </div>

              <div className="relative h-[7.25rem] overflow-hidden border border-[var(--gold-primary)]/60 bg-[#0b1113] shadow-[ inset_0_0_25px_rgba(214,160,74,0.1)] sm:h-[8rem]">
                <img src={image} alt="" loading="lazy" className="h-full w-full object-cover grayscale-[0.25] contrast-125" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,11,0.18),rgba(2,8,11,0.68))]" aria-hidden="true" />
                <div className="absolute inset-x-2 bottom-2 flex items-center justify-end text-[var(--gold-bright)]">
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
