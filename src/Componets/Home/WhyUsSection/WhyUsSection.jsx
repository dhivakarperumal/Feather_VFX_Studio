import { ArrowRight, BadgeDollarSign, CirclePlay, Headphones } from 'lucide-react';

const features = [
  {
    icon: CirclePlay,
    title: <>HIGH <span className="text-[var(--gold-bright)]">QUALITY WORK</span></>,
    text:
      'Our mission is to provide facilities of high quality. The works are as special as you, leaving no information unattended, so you can be confident of your brand commitment and focus on what’s important, i.e., taking your business up to the next level.',
  },
  {
    icon: Headphones,
    title: <>ONLINE SUPPORT <span className="text-[var(--gold-bright)]">24/7</span></>,
    text:
      'We’ve supported a large section of customers from around the world with great customer experiences. We understand the ever changing nature and stresses involved in the schedule or production and we are open for 24/7 to offer Quick turnaround.',
  },
  {
    icon: BadgeDollarSign,
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
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,10,13,0.76)_0%,rgba(4,10,13,0.62)_42%,rgba(4,10,13,0.38)_100%)]"
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
              className="group relative flex min-h-[370px] flex-col items-center overflow-hidden border border-[var(--gold-primary)]/50 bg-[rgba(8,15,18,0.68)] px-6 pb-6 pt-5 text-center shadow-[inset_0_0_40px_rgba(214,160,74,0.05)] backdrop-blur-[0.5px] transition-colors duration-300 hover:border-[var(--gold-bright)]/90 hover:bg-[rgba(8,15,18,0.78)] sm:px-8"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-7 w-7 border-l border-t border-[var(--gold-bright)]" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-[var(--gold-bright)]" aria-hidden="true" />

              <div className="relative mb-4 flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/80 bg-[radial-gradient(circle,rgba(214,160,74,0.22)_0%,rgba(8,15,18,0.78)_68%)] text-[var(--gold-bright)] shadow-[0_0_24px_rgba(214,160,74,0.2)] transition-shadow group-hover:shadow-[0_0_34px_rgba(214,160,74,0.36)]">
                <span className="absolute inset-2 rounded-full border border-[var(--gold-primary)]/25" aria-hidden="true" />
                <Icon className="relative h-11 w-11 stroke-[1.8]" aria-hidden="true" />
              </div>

              <h3 className="font-serif text-xl font-bold uppercase leading-tight tracking-[0.02em] text-white sm:text-2xl">
                {title}
              </h3>

              <p className="mt-3 max-w-[360px] text-sm leading-[1.65] text-white/70 sm:text-[0.94rem]">
                {text}
              </p>

              <div className="mt-auto flex w-full items-center justify-center pt-5">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--gold-primary)]/50" aria-hidden="true" />
                <span className="mx-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-bright)] transition-all duration-300 group-hover:bg-[var(--gold-primary)] group-hover:text-[var(--bg-primary)]">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--gold-primary)]/50" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
