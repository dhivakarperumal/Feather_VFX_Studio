import { useLayoutEffect, useRef, useState } from 'react';
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
    image: '/images/heroimages/1.png',
    Icon: FileText,
  },
  {
    title: 'Idea',
    description: 'We will review the shots, understand your project needs and requirements, and provide quote and delivery schedules for you.',
    image: '/images/heroimages/2.png',
    Icon: Lightbulb,
  },
  {
    title: 'Execution',
    description: 'Our creative visual effects artists will continue with the process when you confirm the quote and delivery schedule.',
    image: '/images/heroimages/3.png',
    Icon: Eye,
  },
  {
    title: 'Delivery',
    description: 'We will deliver the shots on time as planned.',
    image: '/images/heroimages/4.png',
    Icon: Truck,
  },
  {
    title: 'Approval',
    description: 'You check the work done & accept (or) provide the feedback; we will issue the invoice upon approval of the deliverable.',
    image: '/images/heroimages/5.png',
    Icon: ThumbsUp,
  },
  {
    title: 'Completion',
    description: 'Closure of the project; we build confidence through excellence of the job and delivery on time.',
    image: '/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png',
    Icon: BadgeCheck,
  },
];

const ProcessSection = () => {
  const stepsRef = useRef(null);
  const [route, setRoute] = useState('');

  useLayoutEffect(() => {
    const steps = stepsRef.current;
    if (!steps) return undefined;

    const updateRoute = () => {
      const bounds = steps.getBoundingClientRect();
      const centers = Array.from(steps.children, (step) => {
        const card = step.getBoundingClientRect();
        return `${(card.left + card.width / 2 - bounds.left).toFixed(1)},${(card.top + card.height / 2 - bounds.top).toFixed(1)}`;
      });
      setRoute(centers.map((point, index) => `${index === 0 ? 'M' : 'L'}${point}`).join(' '));
    };

    const observer = new ResizeObserver(updateRoute);
    observer.observe(steps);
    Array.from(steps.children).forEach((step) => observer.observe(step));
    updateRoute();

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="about-process-heading"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[var(--bg-primary)] px-[6%] py-10 text-white sm:px-[5%] sm:py-12 lg:px-[3%] lg:py-14"
    >
      <img
        src="/images/heroimages/1.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-40"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(3,8,11,0.82),rgba(3,8,11,0.62)_55%,rgba(3,8,11,0.84))]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1500px]">
        <header data-aos="fade-up" data-aos-offset="60" className="mb-7 max-w-3xl sm:mb-9">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
            Our
          </p>
          <h2
            id="about-process-heading"
            className="mt-1 font-serif text-[1.125rem] font-bold uppercase leading-none text-[var(--gold-bright)] sm:text-2xl lg:text-[1.875rem]"
          >
            Process
          </h2>
          <span
            className="mt-3 block h-0.5 w-10 bg-[var(--gold-bright)]"
            aria-hidden="true"
          />
          <p className="mt-3 max-w-2xl text-xs leading-[1.45] text-white/70 sm:text-sm">
            From concept to final delivery, we follow a streamlined process to ensure high-quality visual effects with creativity, precision and on-time delivery.
          </p>
        </header>

        <div className="relative min-w-0">
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible [filter:drop-shadow(0_0_5px_rgba(240,168,88,0.55))] md:block"
            aria-hidden="true"
          >
            {route && (
              <>
                <path
                  className="fill-none stroke-[rgba(240,168,88,0.72)] [stroke-width:2] [vector-effect:non-scaling-stroke]"
                  d={route}
                />
                <path
                  className="fill-none stroke-[#f2b85b] [stroke-dasharray:1_10] [stroke-linecap:round] [stroke-width:4] [vector-effect:non-scaling-stroke]"
                  d={route}
                />
              </>
            )}
          </svg>
          <ol ref={stepsRef} className="relative z-[1] grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 md:grid-rows-[repeat(3,minmax(7.5rem,auto))] md:gap-x-5 md:gap-y-12 lg:gap-x-[clamp(1.4rem,4vw,4rem)]">
          {processSteps.map(({ title, description, image, Icon }, index) => (
            <li
              className={[
                'min-w-0',
                'md:[&:nth-child(1)]:[grid-area:1/1]',
                'md:[&:nth-child(2)]:[grid-area:1/2]',
                'md:[&:nth-child(3)]:[grid-area:2/2]',
                'md:[&:nth-child(4)]:[grid-area:2/1]',
                'md:[&:nth-child(5)]:[grid-area:3/1]',
                'md:[&:nth-child(6)]:[grid-area:3/2]',
              ].join(' ')}
              key={title}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              data-aos-offset="40"
            >
              <article className="group relative flex min-h-[7.5rem] items-center gap-3 border border-[rgba(214,160,74,0.42)] bg-[linear-gradient(115deg,rgba(4,10,13,0.94),rgba(6,12,15,0.83))] px-3 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow,transform] duration-[220ms] hover:-translate-y-[3px] hover:border-[rgba(240,168,88,0.86)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.34),0_0_22px_rgba(240,168,88,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:min-h-[7.5rem] md:gap-3 after:absolute after:-right-px after:-top-px after:h-4 after:w-4 after:border-r after:border-t after:border-[var(--gold-bright)] after:content-['']">
                <span className="absolute left-[-0.9rem] top-1/2 z-[2] grid w-8 -translate-y-1/2 aspect-square place-items-center rounded-full border-2 border-[var(--gold-bright)] bg-[#080d10] text-[0.7rem] font-extrabold text-[#ffd581] shadow-[0_0_15px_rgba(240,168,88,0.45)] md:left-[-1rem] md:w-[2.3rem] md:text-[0.85rem]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`relative -ml-9 grid w-[5.7rem] shrink-0 aspect-square place-items-center overflow-hidden rounded-full border-[3px] border-[#e6ad55] bg-[#10171a] text-[#ffc663] shadow-[0_0_0_4px_rgba(214,160,74,0.12),0_0_24px_rgba(214,160,74,0.25)] before:absolute before:inset-1 before:rounded-full before:border before:border-[rgba(240,168,88,0.6)] before:content-[''] md:-ml-10 md:w-[6.4rem]`}>
                  <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute inset-0 bg-[linear-gradient(145deg,rgba(2,8,12,0.08),rgba(2,8,12,0.6))]" />
                  <Icon className="z-[1] h-7 w-7 stroke-[1.8] drop-shadow-[0_0_7px_rgba(240,168,88,0.85)] md:h-8 md:w-8" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 font-sans text-base font-bold uppercase leading-[1.2] text-white md:text-[clamp(0.95rem,1.45vw,1.3rem)]">
                    {title}
                  </h3>
                  <span
                    className="mt-[0.45rem] block h-0.5 w-8 bg-[var(--gold-bright)] shadow-[0_0_12px_rgba(240,168,88,0.45)]"
                    aria-hidden="true"
                  />
                  <p className="mb-0 mt-[0.55rem] text-[0.75rem] leading-[1.35] text-white/70 md:text-[clamp(0.68rem,0.9vw,0.82rem)]">
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
};

export default ProcessSection;
