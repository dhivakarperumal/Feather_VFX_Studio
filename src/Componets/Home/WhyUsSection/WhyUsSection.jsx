import { ArrowRight } from 'lucide-react';
import { FaHandPeace, FaHeadphones, FaPlay } from 'react-icons/fa';
import { useStaggerReveal } from '../../../utils/useScrollReveal';

const features = [
  {
    icon: FaPlay,
    title: <>HIGH <span className="text-[var(--gold-bright)]">QUALITY WORK</span></>,
    text:
      'We deliver carefully crafted visual effects with close attention to detail, helping your production achieve its creative goals.',
  },
  {
    icon: FaHeadphones,
    title: <>ONLINE SUPPORT <span className="text-[var(--gold-bright)]">24/7</span></>,
    text:
      'We understand the changing demands of production schedules. Our team provides responsive support and works with you to meet agreed deadlines.',
  },
  {
    icon: FaHandPeace,
    title: <>COST - <span className="text-[var(--gold-bright)]">EFFECTIVE RATES</span></>,
    text:
      'Our flexible VFX outsourcing solutions are designed to meet a range of project requirements and budgets without compromising on quality.',
  },
];

const WhyUsSection = () => {
  const cardsRef = useStaggerReveal(100);

  return (
    <section className="relative isolate overflow-hidden bg-[var(--bg-primary)] px-[6%] py-16 text-[var(--text-primary)] sm:px-[5%] sm:py-20 lg:px-[3%] lg:py-14">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/whyusbg.png')" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1500px]">
        <p
          data-aos="fade-up"
          data-aos-offset="60"
          className="mx-auto w-fit max-w-full rounded-xl border border-[var(--gold-primary)]/40 bg-white px-5 py-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-[var(--text-secondary)] shadow-[0_6px_24px_rgba(0,0,0,0.06)] sm:whitespace-nowrap sm:px-6 sm:py-5 sm:text-sm sm:tracking-[0.15em] lg:text-base"
        >
          We provide reliable VFX services, combining{' '}
          <span className="text-[var(--gold-bright)]">
            creativity with care
          </span>
          {' '}and maintaining{' '}
          <span className="text-[var(--gold-bright)]">
            quality at every stage.
          </span>
        </p>

        <h2 data-aos="fade-up" data-aos-delay="80" data-aos-offset="60" className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl font-bold leading-[1.02] tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
          A VFX partner you can
          <span className="mt-1 block text-[var(--gold-bright)]">be proud to work with.</span>
        </h2>

        <p data-aos="fade-up" data-aos-delay="160" data-aos-offset="60" className="mx-auto mt-7 max-w-[1000px] text-justify text-center text-sm leading-[1.8] text-black sm:text-base">
          We take the security of your data and production materials seriously. Our team values the trust at the heart of every professional relationship and regularly reviews its practices to support changing business needs. We aim to earn that trust through quality work, clear communication, and responsible handling of client information.
        </p>

        {/* Cards grid */}
        <div ref={cardsRef} className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={text}
              className="stagger-child group relative flex min-h-[300px] flex-col items-center overflow-hidden px-4 pb-4 pt-3 text-center transition-transform duration-300 hover:-translate-y-1 sm:min-h-[320px] sm:px-5"
              style={{
                clipPath: 'polygon(0 28px, 28px 0, calc(100% - 22px) 0, 100% 22px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)',
                backgroundColor: 'rgba(239, 239, 239, 0.92)',
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(184,134,11,0.06),transparent_44%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(184,134,11,0.12),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <span className="pointer-events-none absolute left-[8%] top-[2px] z-20 h-1 w-10 rounded-full bg-[var(--gold-bright)] opacity-60 blur-[2px] transition-all duration-300 group-hover:w-16 group-hover:opacity-100" aria-hidden="true" />
              <span className="pointer-events-none absolute right-[7%] top-[2px] z-20 h-1 w-8 rounded-full bg-[var(--gold-bright)] opacity-50 blur-[2px] transition-all duration-300 group-hover:w-14 group-hover:opacity-100" aria-hidden="true" />
              <svg
                className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible opacity-90 transition-all duration-300 group-hover:opacity-100"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 1 7 L 7 1 H 93 L 99 7 V 93 L 93 99 H 1 Z"
                  fill="none"
                  stroke="var(--gold-primary)"
                  strokeWidth="0.45"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <div className="relative mb-2 flex h-[72px] w-[90px] shrink-0 items-center justify-center">
                <span className="absolute h-[48px] w-[62px] rotate-[-16deg] rounded-[50%] border border-[var(--gold-bright)]/65 transition-transform duration-500 group-hover:rotate-[-22deg] group-hover:scale-105" aria-hidden="true" />

                <span className="absolute h-[48px] w-[62px] rotate-[16deg] rounded-[50%] border border-[var(--gold-primary)]/55 transition-transform duration-500 group-hover:rotate-[22deg] group-hover:scale-105" aria-hidden="true" />

                <span className="absolute h-[54px] w-[54px] rounded-full bg-[radial-gradient(circle_at_35%_22%,rgba(255,255,255,0.9),rgba(200,146,14,0.2)_14%,rgba(239,239,239,0.96)_48%,rgba(235,235,235,0.98)_72%)] shadow-[inset_0_0_6px_rgba(184,134,11,0.2),0_0_10px_rgba(184,134,11,0.15)]" aria-hidden="true" />

                <span className="absolute h-[60px] w-[60px] rounded-full border border-[var(--border-color)] shadow-[0_0_6px_rgba(184,134,11,0.1)]" aria-hidden="true" />

                <Icon
                  className="relative z-10 h-5 w-5 text-[var(--gold-bright)] drop-shadow-[0_0_4px_rgba(184,134,11,0.4)]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="relative  font-serif text-xl font-bold uppercase leading-tight tracking-[0.02em] text-[var(--text-primary)] sm:text-2xl">
                {title}
              </h3>

              <p className="relative text-justify mt-3 max-w-[360px] text-sm leading-[1.65] text-[var(--text-secondary)] sm:text-[0.94rem]">
                {text}
              </p>

              <div className="relative mt-auto flex w-full items-center justify-center pt-5">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold-primary)]/50 to-[var(--gold-primary)]/20" aria-hidden="true" />
                <span className="mx-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-bright)] shadow-[0_0_12px_rgba(184,134,11,0.12)] transition-all duration-300 group-hover:bg-[var(--gold-primary)] group-hover:text-[var(--bg-primary)]">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--gold-primary)]/50 to-[var(--gold-primary)]/20" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
