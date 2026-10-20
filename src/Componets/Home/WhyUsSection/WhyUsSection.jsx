import { ArrowRight } from 'lucide-react';
import { FaHandPeace, FaHeadphones, FaPlay } from 'react-icons/fa';
import { useStaggerReveal } from '../../../utils/useScrollReveal';

const features = [
  {
    icon: FaPlay,
    title: <>HIGH <span className="text-[var(--gold-bright)]">QUALITY WORK</span></>,
    text:
      'Our mission is to provide facilities of high quality. The works are as special as you, leaving no information unattended, so you can be confident of your brand commitment and focus on what’s important, i.e., taking your business up to the next level.',
  },
  {
    icon: FaHeadphones,
    title: <>ONLINE SUPPORT <span className="text-[var(--gold-bright)]">24/7</span></>,
    text:
      'We’ve supported a large section of customers from around the world with great customer experiences. We understand the ever changing nature and stresses involved in the schedule or production and we are open for 24/7 to offer Quick turnaround.',
  },
  {
    icon: FaHandPeace,
    title: <>COST - <span className="text-[var(--gold-bright)]">EFFECTIVE RATES</span></>,
    text:
      'Myths can be broken; yes you heard correctly, we are cost-effective! Best competitive costs inside your budget restrain. Beyond any doubt you’ll feel this.',
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
          We offer smooth VFX services with the right amount of{' '}
          <span className="text-[var(--gold-bright)]">
            passion and innovation
          </span>
          , with{' '}
          <span className="text-[var(--gold-bright)]">
            no compromise in quality.
          </span>
        </p>

        <h2 data-aos="fade-up" data-aos-delay="80" data-aos-offset="60" className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl font-bold leading-[1.02] tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
          Feather makes you feel more
          <span className="mt-1 block text-[var(--gold-bright)]">proud of your business.</span>
        </h2>

        <p data-aos="fade-up" data-aos-delay="160" data-aos-offset="60" className="mx-auto mt-7 max-w-[1000px] text-justify text-center text-sm leading-[1.8] text-black sm:text-base">
          Feather is committed to loftier professional standards for your sensitive Data &amp; Information security. We respect and honor the trusting nature inherent in a professional relationship and in all respects and at all times remain rooted therein. The clear mechanisms of privacy are continually updated and restructured to ensure that they fully support the changing business climate and standards. We are not only renowned for our quality of work, but also for maintaining the trust of our customers coupled with business interests and that is what we want to be.
        </p>

        {/* Cards grid */}
        <div ref={cardsRef} className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={text}
              className="stagger-child group relative flex min-h-[400px] flex-col items-center overflow-hidden px-5 pb-5 pt-3 text-center sm:min-h-[420px] sm:px-7"
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

              <div className="relative mb-2 flex h-[112px] w-[144px] shrink-0 items-center justify-center">
                <span className="absolute h-[82px] w-[108px] rotate-[-16deg] rounded-[50%] border border-[var(--gold-bright)]/65 transition-transform duration-500 group-hover:rotate-[-22deg] group-hover:scale-105" aria-hidden="true" />
                <span className="absolute h-[82px] w-[108px] rotate-[16deg] rounded-[50%] border border-[var(--gold-primary)]/55 transition-transform duration-500 group-hover:rotate-[22deg] group-hover:scale-105" aria-hidden="true" />
                <span className="absolute h-[94px] w-[94px] rounded-full bg-[radial-gradient(circle_at_35%_22%,rgba(255,255,255,0.9),rgba(200,146,14,0.2)_14%,rgba(239,239,239,0.96)_48%,rgba(235,235,235,0.98)_72%)] shadow-[inset_0_0_10px_rgba(184,134,11,0.2),0_0_18px_rgba(184,134,11,0.15)]" aria-hidden="true" />
                <span className="absolute h-[102px] w-[102px] rounded-full border border-[var(--border-color)] shadow-[0_0_10px_rgba(184,134,11,0.1)]" aria-hidden="true" />
                <Icon className="relative z-10 h-9 w-9 text-[var(--gold-bright)] drop-shadow-[0_0_8px_rgba(184,134,11,0.5)]" aria-hidden="true" />
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

