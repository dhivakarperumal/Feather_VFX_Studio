import {
  BadgeCheck,
  Eye,
  FileText,
  Lightbulb,
  MonitorPlay,
  ThumbsUp,
  Truck,
} from 'lucide-react';

const processSteps = [
  {
    title: 'Bid package',
    description: 'Share the shot details and creative brief so we can prepare a clear, tailored bid.',
    Icon: FileText,
  },
  {
    title: 'Idea',
    description: 'We review your footage, discuss your goals, and provide a quote and delivery schedule.',
    Icon: Lightbulb,
  },
  {
    title: 'Execution',
    description: 'Our artists begin work on your shots once the scope and schedule are approved.',
    Icon: Eye,
  },
  {
    title: 'Delivery',
    description: 'We deliver finished shots on the agreed schedule, ready for your review.',
    Icon: Truck,
  },
  {
    title: 'Approval',
    description: 'Review the work and share feedback so we can make any agreed refinements.',
    Icon: ThumbsUp,
  },
  {
    title: 'Completion',
    description: 'Once approved, we wrap up the project and provide the final deliverables.',
    Icon: BadgeCheck,
  },
];

const ProcessSection = () => (
  <section
    aria-labelledby="about-process-heading"
    className="relative isolate overflow-hidden border-y border-white/10 bg-[var(--bg-primary)] px-[6%] py-14 text-white sm:px-[5%] sm:py-16 lg:px-[3%] lg:py-20"
  >
    <img
      src="/images/background/bg_14.jpg"
      alt=""
      loading="lazy"
      className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-40"
    />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(3,8,11,0.96),rgba(3,8,11,0.76)_55%,rgba(3,8,11,0.92))]" aria-hidden="true" />

    <div className="mx-auto max-w-[1500px]">
      <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)]">
          From first brief to final frame
        </p>
        <h2
          id="about-process-heading"
          className="mt-2 font-serif text-4xl font-bold uppercase leading-tight sm:text-5xl"
        >
          Our <span className="text-[var(--gold-bright)]">process</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          A clear, collaborative workflow keeps every shot moving smoothly from the first conversation to final delivery.
        </p>
      </div>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {processSteps.map(({ title, description, Icon }, index) => (
          <li
            key={title}
            className="group relative flex min-h-[210px] flex-col border border-[var(--gold-primary)]/45 bg-[rgba(3,9,12,0.78)] p-5 transition-colors duration-300 hover:border-[var(--gold-bright)]/80 sm:min-h-[225px] sm:p-6"
          >
            <span className="absolute -left-2.5 top-5 z-10 grid h-8 w-8 place-items-center rounded-full border border-[var(--gold-bright)] bg-[#090d0f] font-serif text-xs font-bold text-[var(--gold-bright)] shadow-[0_0_14px_rgba(240,168,88,0.3)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[var(--gold-primary)]/70 bg-[radial-gradient(circle,rgba(214,160,74,0.18),rgba(4,9,12,0.85)_72%)] text-[var(--gold-bright)] shadow-[0_0_18px_rgba(214,160,74,0.16)] transition-shadow group-hover:shadow-[0_0_24px_rgba(214,160,74,0.3)]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                  Step {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 font-serif text-lg font-bold uppercase text-white sm:text-xl">
                  {title}
                </h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">{description}</p>
            <span className="mt-auto block h-px w-full bg-gradient-to-r from-[var(--gold-primary)]/70 via-[var(--gold-primary)]/20 to-transparent pt-5" aria-hidden="true" />
          </li>
        ))}
      </ol>
      <div className="mt-7 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
        <MonitorPlay className="h-4 w-4 text-[var(--gold-bright)]" aria-hidden="true" />
        Creative collaboration at every stage
      </div>
    </div>
  </section>
);

export default ProcessSection;
