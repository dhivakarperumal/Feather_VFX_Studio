import { Gem, Lightbulb, Settings, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStaggerReveal } from '../../../utils/useScrollReveal';

const highlights = [
  { icon: Lightbulb, label: 'Creative', detail: 'Solutions' },
  { icon: Settings, label: 'Advanced', detail: 'Technology' },
  { icon: UsersRound, label: 'Experienced', detail: 'VFX Artists' },
  { icon: Gem, label: 'High Quality', detail: 'Delivery' },
];

const HomeIntroSection = () => {
  const highlightsRef = useStaggerReveal(90);

  return (
    <section
      aria-labelledby="home-intro-title"
      className="relative isolate overflow-hidden bg-[var(--bg-secondary)]"
    >
      <div className="mx-auto grid min-h-[300px] w-full max-w-[1700px] items-center lg:min-h-[340px] lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-right" data-aos-offset="60" className="relative z-10 px-5 py-6 sm:px-8 lg:py-8 lg:pl-[8%] lg:pr-6">
          <div className="max-w-[700px]">
            <p className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--text-secondary)] sm:text-[10px]">
              Your VFX Outsourcing Partner
              <span className="h-px w-14 bg-[var(--gold-primary)]/80" aria-hidden="true" />
            </p>

            <h2
              id="home-intro-title"
              className="mt-2 font-serif text-xl font-bold uppercase leading-[1.02] tracking-[0.02em] text-[var(--text-primary)] sm:text-2xl lg:text-[2.25rem]"
            >
              Give your vision a{' '}
              <span className="mt-1 block text-[var(--gold-bright)]">new dimension with Feather VFX!</span>
            </h2>

            <p className="mt-3 max-w-[620px] text-[14px] text-justify leading-relaxed text-[var(--text-secondary)] sm:text-[16px]">
              We combine advanced technology, artistic expertise, and attention to detail to deliver high-quality visual effects for film and television. Share your vision with us, and our team will work closely with you to bring it to life.
            </p>

            {/* Highlight icons — stagger in one by one */}
            <ul ref={highlightsRef} className="mt-4 grid max-w-[500px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2">
              {highlights.map(({ icon: Icon, label, detail }) => (
                <li key={label} className="stagger-child flex flex-col items-center text-center">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--gold-primary)]/80 bg-[var(--bg-primary)] text-[var(--gold-bright)] shadow-[0_0_18px_rgba(184,134,11,0.12)]">
                    <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="mt-2 text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-[var(--text-primary)] sm:text-[10px]">
                    {label}
                    <span className="mt-0.5 block text-[var(--text-secondary)]">{detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="btn-shimmer mt-4 inline-flex min-h-8 items-center gap-3 rounded-sm border border-[var(--gold-primary)] bg-[var(--bg-primary)] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-primary)] sm:text-[10px]"
            >
              Let&apos;s bring your vision to life
              <span className="text-base" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-offset="60" className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:h-full">
          <img
            src="/images/home.png"
            alt="Creative VFX work"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,var(--bg-secondary)_0%,rgba(239,239,239,0.5)_12%,transparent_42%),linear-gradient(0deg,rgba(239,239,239,0.15),transparent_35%)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeIntroSection;
