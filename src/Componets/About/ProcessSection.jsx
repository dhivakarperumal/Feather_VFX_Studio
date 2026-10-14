import {
  BadgeCheck,
  Eye,
  FileText,
  Lightbulb,
  ThumbsUp,
  Truck,
} from 'lucide-react';

const processSteps = [
  {
    title: 'Bid package',
    description: 'Give us the intermediary record of the shot with a brief portrayal.',
    Icon: FileText,
  },
  {
    title: 'Idea',
    description: 'We will review the shots, understand your project needs and requirements, and provide quote and delivery schedules for you.',
    Icon: Lightbulb,
  },
  {
    title: 'Execution',
    description: 'Our creative visual effects artists will continue with the process when you confirm the quote and delivery schedule.',
    Icon: Eye,
  },
  {
    title: 'Delivery',
    description: 'We will deliver the shots on time as planned.',
    Icon: Truck,
  },
  {
    title: 'Approval',
    description: 'You check the work done & accept (or) provide the feedback; we will issue the invoice upon approval of the deliverable.',
    Icon: ThumbsUp,
  },
  {
    title: 'Completion',
    description: 'Closure of the project; we build confidence through excellence of the job and delivery on time.',
    Icon: BadgeCheck,
  },
];

const ProcessSection = () => (
  <section
    aria-labelledby="about-process-heading"
    className="about-process relative isolate overflow-hidden border-y border-white/10 bg-[var(--bg-primary)] px-[6%] py-14 text-white sm:px-[5%] sm:py-16 lg:px-[3%] lg:py-20"
  >
    <img
      src="/images/background/bg_14.jpg"
      alt=""
      loading="lazy"
      className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-40"
    />
    <div
      className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(3,8,11,0.96),rgba(3,8,11,0.76)_55%,rgba(3,8,11,0.92))]"
      aria-hidden="true"
    />

    <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-8 md:grid-cols-[minmax(190px,0.6fr)_minmax(0,1.5fr)] lg:grid-cols-[minmax(220px,0.72fr)_minmax(0,2fr)] lg:gap-[clamp(2rem,4vw,4.5rem)]">
      <header className="max-w-[23rem]">
        <h2
          id="about-process-heading"
          className="mt-1 font-serif text-4xl font-bold uppercase leading-tight text-[var(--gold-bright)] sm:text-5xl lg:text-6xl"
        >
          Our Process
        </h2>
      </header>

      <div className="relative min-w-0">
        <svg
          className="absolute inset-0 z-0 hidden h-full w-full overflow-visible [filter:drop-shadow(0_0_5px_rgba(240,168,88,0.55))] md:block"
          viewBox="0 0 1000 660"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="fill-none stroke-[rgba(240,168,88,0.72)] [stroke-width:2] [vector-effect:non-scaling-stroke]"
            d="M80 100 H920 Q980 100 980 160 V220 Q980 280 920 280 H80 Q20 280 20 340 V380 Q20 440 80 440 H920 Q980 440 980 500 V560 Q980 620 920 620 H80"
          />
          <path
            className="fill-none stroke-[#f2b85b] [stroke-dasharray:1_10] [stroke-linecap:round] [stroke-width:4] [vector-effect:non-scaling-stroke]"
            d="M80 100 H920 Q980 100 980 160 V220 Q980 280 920 280 H80 Q20 280 20 340 V380 Q20 440 80 440 H920 Q980 440 980 500 V560 Q980 620 920 620 H80"
          />
        </svg>
        <ol className="relative z-[1] grid list-none grid-cols-1 grid-rows-none gap-4 p-0 md:grid-cols-2 md:grid-rows-[repeat(3,minmax(9.5rem,auto))] md:gap-x-5 md:gap-y-[clamp(1rem,2.5vw,2.25rem)] lg:gap-x-[clamp(1.4rem,4vw,4rem)]">
          {processSteps.map(({ title, description, Icon }, index) => (
            <li
              className={[
                'min-w-0',
                'md:[&:nth-child(1)]:[grid-area:1/1]',
                'md:[&:nth-child(2)]:[grid-area:1/2]',
                'md:[&:nth-child(3)]:[grid-area:2/2]',
                'md:[&:nth-child(4)]:[grid-area:2/1]',
                'md:[&:nth-child(5)]:[grid-area:3/2]',
                'md:[&:nth-child(6)]:[grid-area:3/1]',
              ].join(' ')}
              key={title}
            >
              <article className="group relative flex min-h-[7.5rem] items-center gap-3 border border-[rgba(214,160,74,0.42)] bg-[linear-gradient(115deg,rgba(4,10,13,0.93),rgba(6,12,15,0.83)),radial-gradient(circle_at_0_50%,rgba(214,160,74,0.13),transparent_45%)] px-4 py-4 pl-5 shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow,transform] duration-[220ms] hover:-translate-y-[3px] hover:border-[rgba(240,168,88,0.86)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.34),0_0_22px_rgba(240,168,88,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:min-h-[9.5rem] md:gap-[clamp(0.75rem,1.5vw,1.25rem)] md:pl-[1.3rem] after:absolute after:-right-px after:-top-px after:h-4 after:w-4 after:border-r after:border-t after:border-[var(--gold-bright)] after:content-['']">
                <span className="absolute left-[-0.6rem] top-[0.4rem] z-[2] grid w-8 translate-y-0 aspect-square place-items-center rounded-full border border-[var(--gold-bright)] bg-[#080d10] text-[0.7rem] font-extrabold text-[#ffd581] shadow-[0_0_15px_rgba(240,168,88,0.32)] md:left-[-1rem] md:top-1/2 md:w-[2.55rem] md:-translate-y-1/2 md:border-2 md:text-[0.85rem]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="relative grid w-[4.4rem] shrink-0 aspect-square place-items-center overflow-hidden rounded-full border-2 border-[#e6ad55] bg-[radial-gradient(circle_at_35%_30%,rgba(240,168,88,0.28),transparent_30%),radial-gradient(circle,#172127_0%,#071014_69%)] text-[#ffc663] shadow-[0_0_0_5px_rgba(214,160,74,0.12),0_0_24px_rgba(214,160,74,0.25)] before:absolute before:inset-[0.35rem] before:rounded-full before:border before:border-[rgba(240,168,88,0.42)] before:content-[''] md:w-[clamp(4.4rem,7.3vw,6.5rem)]">
                  <Icon className="z-[1] h-[1.7rem] w-[1.7rem] stroke-[1.6] [filter:drop-shadow(0_0_7px_rgba(240,168,88,0.48))] md:h-8 md:w-8" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 font-sans text-base font-bold uppercase leading-[1.2] text-white md:text-[clamp(0.95rem,1.45vw,1.3rem)]">
                    {title}
                  </h3>
                  <span
                    className="mt-[0.45rem] block h-0.5 w-8 bg-[var(--gold-bright)] shadow-[0_0_12px_rgba(240,168,88,0.45)]"
                    aria-hidden="true"
                  />
                  <p className="mb-0 mt-[0.55rem] text-[0.83rem] leading-[1.45] text-white/70 md:text-[clamp(0.76rem,1vw,0.9rem)]">
                    {description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default ProcessSection;
