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
    title: 'Project Brief',
    description:
      'Understand your requirements, creative goals, visual references, and deadlines to establish a clear direction for your project.',
    Icon: FileText,
  },
  {
    title: 'Planning',
    description:
      'Establish efficient workflows, allocate resources, and define clear delivery milestones to keep every stage organized.',
    Icon: Lightbulb,
  },
  {
    title: 'Production',
    description:
      'Execute the assigned visual effects work with creativity, precision, and close attention to every shot and detail.',
    Icon: Eye,
  },
  {
    title: 'Quality Control',
    description:
      'Review every shot for technical accuracy, visual consistency, and quality before presenting the work for client review.',
    Icon: BadgeCheck,
  },
  {
    title: 'Client Review',
    description:
      'Collect client feedback, discuss required refinements, and incorporate revisions as agreed to achieve the desired result.',
    Icon: ThumbsUp,
  },
  {
    title: 'Final Delivery',
    description:
      'Deliver approved shots and final assets according to the agreed specifications, formats, and delivery schedule.',
    Icon: Truck,
  },
];

const ProcessSection = () => (
  <section
    aria-labelledby="process-heading"
    className="relative isolate overflow-hidden border-y border-[var(--border-color)] bg-[var(--bg-secondary)] px-[5%] py-14 text-[var(--text-primary)] [--gold-primary:#c9a33a] [--gold-bright:#d6ad4b] sm:py-20 lg:px-[6%] lg:py-24"
  >
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[var(--gold-primary)]/[0.05] blur-[100px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[var(--gold-primary)]/[0.05] blur-[100px]" />
    </div>

    <div className="mx-auto max-w-[1250px]">
      <header
        className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        data-aos="fade-up"
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold-primary)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--gold-bright)] sm:text-xs">
            How We Work
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold-primary)]" />
        </div>

        <h2
          id="process-heading"
          className="font-serif text-3xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl"
        >
          Our <span className="text-[var(--gold-bright)]">Process</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          From the initial project brief to final delivery, our structured
          workflow combines creative precision, quality, and clear
          communication at every stage.
        </p>
        <span className="mx-auto mt-6 block h-[3px] w-16 bg-[var(--gold-bright)]" />
      </header>

      <div className="relative mx-auto hidden h-[750px] max-w-[1200px] md:block">
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 750"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M 250 125 H 750 C 888 125 888 375 750 375 H 250 C 112 375 112 625 250 625 H 750"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            className="text-[var(--text-primary)]/75"
          />
        </svg>

        <ol className="relative grid h-full grid-cols-2 grid-rows-3 p-0">
          {processSteps.map(({ title, description, Icon }, index) => {
            const number = String(index + 1).padStart(2, '0');
            const row = Math.floor(index / 2);
            const contentBelowTrack = row === 1;

            return (
              <li
                key={title}
                className="relative min-w-0"
                style={{
                  gridColumn: index === 2 ? 2 : index === 3 ? 1 : undefined,
                  gridRow: row + 1,
                }}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 z-10 h-12 w-[5px] -translate-x-1/2 bg-[var(--text-primary)]/75 ${
                    contentBelowTrack ? 'top-1/2' : 'bottom-1/2'
                  }`}
                />
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 z-20 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[5px] border-[var(--text-primary)]/75 bg-[var(--bg-primary)] after:h-3 after:w-3 after:rounded-full after:bg-[var(--text-primary)]/80"
                />

                <article
                  className={`absolute left-4 right-4 flex items-start gap-4 lg:left-10 lg:right-10 ${
                    contentBelowTrack ? 'bottom-5' : 'top-5'
                  } ${index % 2 === 1 ? 'flex-row-reverse text-right' : ''}`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center text-[var(--gold-primary)] sm:h-16 sm:w-16">
                    <Icon aria-hidden="true" className="h-12 w-12" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--gold-primary)]">
                      Step {number}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-bold uppercase leading-tight text-[var(--text-primary)] lg:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                      {description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="relative md:hidden">
        <span
          aria-hidden="true"
          className="absolute bottom-5 left-5 top-5 w-[3px] bg-[var(--text-primary)]/60"
        />
        <ol className="relative space-y-5 p-0">
          {processSteps.map(({ title, description, Icon }, index) => (
            <li
              key={title}
              className="relative pl-14"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border-4 border-[var(--text-primary)]/75 bg-[var(--bg-primary)]">
                <span className="h-3 w-3 rounded-full bg-[var(--text-primary)]/80" />
              </span>
              <article className="border-b border-[var(--border-color)] py-2 pb-5">
                <div className="flex items-center gap-3">
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7 shrink-0 text-[var(--gold-primary)]"
                    strokeWidth={1.8}
                  />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--gold-primary)]">
                      Step {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 font-serif text-lg font-bold uppercase text-[var(--text-primary)]">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <footer className="mt-14 text-center sm:mt-20" data-aos="fade-up">
        <p className="font-serif text-xl font-bold uppercase sm:text-2xl">
          Your Vision,{' '}
          <span className="text-[var(--gold-bright)]">Our Craft</span>
        </p>
        <p className="mt-3 text-xs leading-6 text-[var(--text-secondary)] sm:text-sm">
          Clear communication. Creative excellence. Reliable delivery.
        </p>
      </footer>
    </div>
  </section>
);

export default ProcessSection;
