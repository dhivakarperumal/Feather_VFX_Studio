import { ArrowRight } from 'lucide-react';
import { FaHandPeace, FaHeadphones, FaPlay } from 'react-icons/fa';

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
  return (
    <section className="relative isolate overflow-hidden bg-[var(--bg-primary)] px-[6%] py-16 text-[var(--text-primary)] sm:px-[5%] sm:py-20 lg:px-[3%] lg:py-24">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/whyusbg.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,10,13,0.60)_0%,rgba(4,10,13,0.3)_42%,rgba(4,10,13,0.28)_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1500px]">
        <p className="mx-auto max-w-4xl text-center text-[0.66rem] font-semibold uppercase leading-relaxed tracking-[0.2em] text-[var(--text-primary)]/75 sm:text-xs sm:tracking-[0.25em]">
          We offer smooth VFX services with the right amount of{' '}
          <span className="text-[var(--gold-bright)]">passion and innovation</span>, with{' '}
          <span className="text-[var(--gold-bright)]">no compromise in quality.</span>
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
          Feather makes you feel more
          <span className="mt-1 block text-[var(--gold-bright)]">proud of your business.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-[1000px] text-center text-sm leading-[1.8] text-white/70 sm:text-base">
          Feather is committed to loftier professional standards for your sensitive Data &amp; Information security. We respect and honor the trusting nature inherent in a professional relationship and in all respects and at all times remain rooted therein. The clear mechanisms of privacy are continually updated and restructured to ensure that they fully support the changing business climate and standards. We are not only renowned for our quality of work, but also for maintaining the trust of our customers coupled with business interests and that is what we want to be.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={text}
              className="group relative flex min-h-[430px] flex-col items-center overflow-hidden border border-[var(--gold-primary)]/75 px-5 pb-5 pt-3 text-center transition-colors duration-300 hover:border-[var(--gold-bright)] sm:min-h-[450px] sm:px-7"
              style={{
                clipPath: 'polygon(0 28px, 28px 0, calc(100% - 22px) 0, 100% 22px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)',
                backgroundColor: 'rgba(3, 9, 12, 0.72)',
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(214,160,74,0.1),transparent_44%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

              <div className="relative mb-2 flex h-[142px] w-[180px] shrink-0 items-center justify-center">
                <span className="absolute h-[112px] w-[142px] rotate-[-16deg] rounded-[50%] border border-[var(--gold-bright)]/65 shadow-[0_0_15px_rgba(240,168,88,0.3)] transition-transform duration-500 group-hover:rotate-[-22deg] group-hover:scale-105" aria-hidden="true" />
                <span className="absolute h-[112px] w-[142px] rotate-[16deg] rounded-[50%] border border-[var(--gold-primary)]/55 shadow-[0_0_18px_rgba(214,160,74,0.26)] transition-transform duration-500 group-hover:rotate-[22deg] group-hover:scale-105" aria-hidden="true" />
                <span className="absolute h-[122px] w-[122px] rounded-full bg-[radial-gradient(circle_at_35%_22%,rgba(255,255,255,0.42),rgba(150,117,75,0.3)_14%,rgba(19,23,24,0.96)_48%,rgba(4,9,12,0.98)_72%)] shadow-[inset_0_0_12px_rgba(240,168,88,0.45),0_0_24px_rgba(240,168,88,0.38)]" aria-hidden="true" />
                <span className="absolute h-[130px] w-[130px] rounded-full border border-white/20 shadow-[0_0_12px_rgba(240,168,88,0.25)]" aria-hidden="true" />
                <Icon className="relative z-10 h-12 w-12 text-[var(--gold-bright)] drop-shadow-[0_0_10px_rgba(240,168,88,0.75)]" aria-hidden="true" />
              </div>

              <h3 className="relative font-serif text-xl font-bold uppercase leading-tight tracking-[0.02em] text-white sm:text-2xl">
                {title}
              </h3>

              <p className="relative mt-3 max-w-[360px] text-sm leading-[1.65] text-white/75 sm:text-[0.94rem]">
                {text}
              </p>

              <div className="relative mt-auto flex w-full items-center justify-center pt-5">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold-primary)]/70 to-[var(--gold-primary)]/30" aria-hidden="true" />
                <span className="mx-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-bright)] shadow-[0_0_12px_rgba(214,160,74,0.18)] transition-all duration-300 group-hover:bg-[var(--gold-primary)] group-hover:text-[var(--bg-primary)] group-hover:shadow-[0_0_20px_rgba(214,160,74,0.42)]">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--gold-primary)]/70 to-[var(--gold-primary)]/30" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
