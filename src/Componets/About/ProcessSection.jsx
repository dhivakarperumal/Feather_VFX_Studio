
import {
  BadgeCheck,
  Eye,
  FileText,
  Lightbulb,
  ThumbsUp,
  Truck,
  ArrowRight,
} from 'lucide-react';

const processSteps = [
  {
    title: 'Project Brief',
    description:
      'Understand your requirements, creative goals, visual references, and deadlines to establish a clear direction for your project.',
    image: '/images/heroimages/1.png',
    Icon: FileText,
  },
  {
    title: 'Planning',
    description:
      'Establish workflows, allocate resources, and define clear delivery milestones to keep every stage organized and on schedule.',
    image: '/images/heroimages/2.png',
    Icon: Lightbulb,
  },
  {
    title: 'Production',
    description:
      'Execute the assigned VFX work with creativity, precision, and close attention to every shot and detail.',
    image: '/images/heroimages/3.png',
    Icon: Eye,
  },
  {
    title: 'Quality Control',
    description:
      'Review every shot for technical accuracy, visual consistency, and quality before presenting the work for client review.',
    image: '/images/heroimages/4.png',
    Icon: BadgeCheck,
  },
  {
    title: 'Client Review',
    description:
      'Incorporate client feedback, discuss refinements, and implement revisions as agreed to achieve the desired result.',
    image: '/images/heroimages/5.png',
    Icon: ThumbsUp,
  },
  {
    title: 'Final Delivery',
    description:
      'Deliver approved work according to the agreed specifications, formats, and delivery schedule.',
    image:
      '/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png',
    Icon: Truck,
  },
];

const ProcessSection = () => {
  return (
    <section
      aria-labelledby="about-process-heading"
      className="relative isolate overflow-hidden border-y border-[var(--border-color)] bg-[var(--bg-secondary)] px-[5%] py-14 text-[var(--text-primary)] sm:py-20 lg:px-[6%] lg:py-24"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-[var(--gold-primary)]/[0.05] blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[var(--gold-primary)]/[0.04] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1350px]">
        {/* Heading */}
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
            id="about-process-heading"
            className="font-serif text-3xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl"
          >
            Our Creative{' '}
            <span className="text-[var(--gold-bright)]">
              Process
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            From the initial project brief to final delivery, we follow
            a structured workflow built on creative precision, quality,
            and clear communication throughout every project.
          </p>

          <span className="mx-auto mt-6 block h-[3px] w-16 bg-[var(--gold-bright)]" />
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Continuous desktop center line */}
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 top-8 z-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--gold-primary)]/80 to-[var(--gold-bright)]/30 md:block"
            aria-hidden="true"
          />

          {/* Mobile vertical line */}
          <div
            className="pointer-events-none absolute bottom-6 left-[17px] top-4 z-0 w-px bg-gradient-to-b from-[var(--gold-primary)]/20 via-[var(--gold-primary)]/70 to-transparent md:hidden"
            aria-hidden="true"
          />

          <ol className="relative space-y-9 p-0 sm:space-y-12 lg:space-y-16">
            {processSteps.map(
              ({ title, description, image, Icon }, index) => {
                const reverse = index % 2 === 1;

                return (
                  <li
                    key={title}
                    className="relative grid grid-cols-[36px_minmax(0,1fr)] items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)] md:gap-0"
                    data-aos={reverse ? 'fade-left' : 'fade-right'}
                    data-aos-delay={index * 60}
                    data-aos-offset="50"
                  >
                    {/* Desktop left side */}
                    <div
                      className={`hidden min-w-0 md:block ${
                        reverse
                          ? 'col-start-1 row-start-1 flex items-center justify-end'
                          : 'col-start-1 row-start-1 flex items-center'
                      }`}
                    >
                      {reverse ? (
                        /* Even-numbered steps: content on left */
                        <article className="group relative mr-5 w-full overflow-hidden border border-[var(--border-color)] bg-[var(--bg-primary)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold-primary)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
                          <div className="relative p-6 lg:p-9">
                            <span className="pointer-events-none absolute right-5 top-3 font-serif text-7xl font-bold leading-none text-[var(--gold-primary)]/[0.07] lg:text-8xl">
                              {String(index + 1).padStart(2, '0')}
                            </span>

                            <div className="relative flex items-center gap-3">
                              <span className="grid h-12 w-12 shrink-0 place-items-center border border-[var(--gold-primary)]/50 bg-[var(--bg-secondary)] text-[var(--gold-bright)] transition-colors group-hover:border-[var(--gold-bright)]">
                                <Icon size={23} strokeWidth={1.6} />
                              </span>

                              <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[var(--text-secondary)]">
                                  Phase {String(index + 1).padStart(2, '0')}
                                </p>
                                <span className="mt-1 block h-0.5 w-8 bg-[var(--gold-bright)]" />
                              </div>
                            </div>

                            <h3 className="relative mt-6 font-serif text-2xl font-bold uppercase leading-tight lg:text-3xl">
                              {title}
                            </h3>

                            <p className="relative mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                              {description}
                            </p>

                            <div className="mt-6 flex items-center gap-3 border-t border-[var(--border-color)] pt-4">
                              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--gold-bright)]">
                                Step {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="h-px w-8 bg-[var(--gold-primary)]/60" />
                              <ArrowRight className="ml-auto h-4 w-4 text-[var(--gold-bright)] transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>

                          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--gold-bright)] transition-all duration-500 group-hover:w-full" />
                        </article>
                      ) : (
                        /* Odd-numbered steps: image on left */
                        <div className="group relative mr-5 min-h-[300px] w-full overflow-hidden border border-[var(--border-color)] bg-[var(--bg-primary)] sm:min-h-[340px] lg:min-h-[380px]">
                          <img
                            src={image}
                            alt={`${title} process`}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />

                          <span className="absolute left-5 top-5 border border-[var(--gold-bright)]/80 bg-black/60 px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-[var(--gold-bright)]">
                            STEP {String(index + 1).padStart(2, '0')}
                          </span>

                          <div className="absolute bottom-6 left-5 right-5 lg:bottom-8 lg:left-7">
                            <div className="flex items-center gap-3">
                              <span className="grid h-11 w-11 shrink-0 place-items-center border border-[var(--gold-bright)]/70 bg-black/50 text-[var(--gold-bright)] backdrop-blur-sm">
                                <Icon size={22} strokeWidth={1.6} />
                              </span>
                              <h3 className="font-serif text-2xl font-bold uppercase text-white lg:text-3xl">
                                {title}
                              </h3>
                            </div>
                          </div>

                          <span className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--gold-bright)] transition-all duration-500 group-hover:w-full" />
                        </div>
                      )}
                    </div>

                    {/* Numbered center node */}
                    <div className="relative z-10 col-start-1 row-start-1 flex items-center justify-center md:col-start-2">
                      <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--gold-bright)] bg-[var(--bg-primary)] text-[10px] font-bold text-[var(--gold-bright)] shadow-[0_0_0_5px_var(--bg-secondary),0_0_20px_rgba(184,134,11,0.16)] md:h-12 md:w-12 md:text-xs">
                        {String(index + 1).padStart(2, '0')}

                        <span className="pointer-events-none absolute inset-[-5px] rounded-full border border-[var(--gold-primary)]/25" />
                      </span>
                    </div>

                    {/* Desktop right side */}
                    <div
                      className={`hidden min-w-0 md:block ${
                        reverse
                          ? 'col-start-3 row-start-1 flex items-center'
                          : 'col-start-3 row-start-1 flex items-center justify-end'
                      }`}
                    >
                      {reverse ? (
                        /* Even-numbered steps: image on right */
                        <div className="group relative ml-5 min-h-[300px] w-full overflow-hidden border border-[var(--border-color)] bg-[var(--bg-primary)] sm:min-h-[340px] lg:min-h-[380px]">
                          <img
                            src={image}
                            alt={`${title} process`}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />

                          <span className="absolute left-5 top-5 border border-[var(--gold-bright)]/80 bg-black/60 px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-[var(--gold-bright)]">
                            STEP {String(index + 1).padStart(2, '0')}
                          </span>

                          <div className="absolute bottom-6 left-5 right-5 lg:bottom-8 lg:left-7">
                            <div className="flex items-center gap-3">
                              <span className="grid h-11 w-11 shrink-0 place-items-center border border-[var(--gold-bright)]/70 bg-black/50 text-[var(--gold-bright)] backdrop-blur-sm">
                                <Icon size={22} strokeWidth={1.6} />
                              </span>
                              <h3 className="font-serif text-2xl font-bold uppercase text-white lg:text-3xl">
                                {title}
                              </h3>
                            </div>
                          </div>

                          <span className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--gold-bright)] transition-all duration-500 group-hover:w-full" />
                        </div>
                      ) : (
                        /* Odd-numbered steps: content on right */
                        <article className="group relative ml-5 w-full overflow-hidden border border-[var(--border-color)] bg-[var(--bg-primary)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold-primary)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
                          <div className="relative p-6 lg:p-9">
                            <span className="pointer-events-none absolute right-5 top-3 font-serif text-7xl font-bold leading-none text-[var(--gold-primary)]/[0.07] lg:text-8xl">
                              {String(index + 1).padStart(2, '0')}
                            </span>

                            <div className="relative flex items-center gap-3">
                              <span className="grid h-12 w-12 shrink-0 place-items-center border border-[var(--gold-primary)]/50 bg-[var(--bg-secondary)] text-[var(--gold-bright)] transition-colors group-hover:border-[var(--gold-bright)]">
                                <Icon size={23} strokeWidth={1.6} />
                              </span>

                              <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[var(--text-secondary)]">
                                  Phase {String(index + 1).padStart(2, '0')}
                                </p>
                                <span className="mt-1 block h-0.5 w-8 bg-[var(--gold-bright)]" />
                              </div>
                            </div>

                            <h3 className="relative mt-6 font-serif text-2xl font-bold uppercase leading-tight lg:text-3xl">
                              {title}
                            </h3>

                            <p className="relative mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                              {description}
                            </p>

                            <div className="mt-6 flex items-center gap-3 border-t border-[var(--border-color)] pt-4">
                              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--gold-bright)]">
                                Step {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="h-px w-8 bg-[var(--gold-primary)]/60" />
                              <ArrowRight className="ml-auto h-4 w-4 text-[var(--gold-bright)] transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>

                          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--gold-bright)] transition-all duration-500 group-hover:w-full" />
                        </article>
                      )}
                    </div>

                    {/* Mobile card: image and content together */}
                    <article className="group relative col-start-2 row-start-1 min-w-0 overflow-hidden border border-[var(--border-color)] bg-[var(--bg-primary)] md:hidden">
                      <div className="relative h-48 overflow-hidden sm:h-60">
                        <img
                          src={image}
                          alt={`${title} process`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                        <span className="absolute left-3 top-3 border border-[var(--gold-bright)]/70 bg-black/60 px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-[var(--gold-bright)]">
                          STEP {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="absolute bottom-4 left-4 right-3 flex items-center gap-3">
                          <Icon className="h-6 w-6 shrink-0 text-[var(--gold-bright)]" />
                          <h3 className="font-serif text-xl font-bold uppercase text-white">
                            {title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5">
                        <p className="text-xs leading-6 text-[var(--text-secondary)] sm:text-sm">
                          {description}
                        </p>
                      </div>

                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--gold-bright)] transition-all duration-500 group-hover:w-full" />
                    </article>
                  </li>
                );
              }
            )}
          </ol>
        </div>

        {/* Closing message */}
        <footer
          className="mt-14 text-center sm:mt-20"
          data-aos="fade-up"
        >
          <p className="font-serif text-xl font-bold uppercase sm:text-2xl">
            Your Vision,{' '}
            <span className="text-[var(--gold-bright)]">
              Our Craft
            </span>
          </p>

          <p className="mt-3 text-xs leading-6 text-[var(--text-secondary)] sm:text-sm">
            Clear communication. Creative excellence. Reliable delivery.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ProcessSection;
