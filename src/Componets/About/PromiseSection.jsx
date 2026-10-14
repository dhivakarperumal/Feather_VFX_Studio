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
          className="font-serif text-[clamp(2.8rem,4vw,5.5rem)] font-bold capitalize leading-[0.9] tracking-[-0.04em] text-white"
        >
          We Keep <span className="text-[var(--gold-bright)]">our word</span>
        </h2>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {promises.map(({ number, title, description, image, Icon }) => (
          <article
            key={title}
            className="group relative overflow-hidden border border-[var(--gold-primary)]/80 bg-[linear-gradient(135deg,rgba(5,10,11,0.96),rgba(12,18,19,0.82))] px-3 py-3 shadow-[0_0_0_1px_rgba(214,160,74,0.2),0_12px_30px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-4 lg:px-5"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,168,88,0.12),transparent_25%)]" aria-hidden="true" />
            <div className="relative grid items-center gap-3 md:grid-cols-[82px_92px_minmax(0,1.2fr)_minmax(220px,0.7fr)] md:gap-4 lg:grid-cols-[90px_110px_minmax(0,1.15fr)_minmax(230px,0.68fr)]">
              <div
                className="text-[clamp(2.4rem,4vw,4.6rem)] font-bold leading-[0.85] tracking-[-0.06em] text-[var(--gold-bright)]"
                aria-label={`${number} ${title}`}
              >
                {number}
              </div>

              <div className="mx-auto flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-[3px] border-[var(--gold-primary)] bg-[rgba(12,18,19,0.95)] text-[var(--gold-bright)] shadow-[0_0_20px_rgba(214,160,74,0.26)] sm:h-[5.5rem] sm:w-[5.5rem]">
                <Icon className="h-9 w-9 stroke-[1.8]" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h3 className="font-serif text-[clamp(1.4rem,2vw,2.2rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-[44rem] text-sm leading-[1.7] text-white/72 sm:text-[0.9rem] lg:text-[1rem]">
                  {description}
                </p>
              </div>

              <div className="relative h-[7rem] overflow-hidden border border-[var(--gold-primary)]/60 bg-[#0b1113] shadow-[inset_0_0_25px_rgba(214,160,74,0.08)] sm:h-[8rem]">
                <img src={image} alt="" loading="lazy" className="h-full w-full object-cover grayscale-[0.18] contrast-125" />
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
