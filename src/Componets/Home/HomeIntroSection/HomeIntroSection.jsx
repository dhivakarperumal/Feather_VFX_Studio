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

            <Link
              to="/contact"
              className="btn-shimmer mt-4 inline-flex min-h-8 items-center gap-3 rounded-sm border border-[var(--gold-primary)] bg-[var(--bg-primary)] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-primary)] sm:text-[10px]"
            >
              Let&apos;s bring your vision to life
              <span className="text-base" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-offset="60"
          className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:h-full"
        >
          <img
            src="/images/home.png"
            alt="Creative VFX work"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Uniform transparent white overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-white/35"
            aria-hidden="true"
          />
        </div>

      </div>

      <ul
        ref={highlightsRef}
        className="grid grid-cols-2 border-y border-[#d1d5d8] bg-[#f4f4f4] sm:grid-cols-4"
      >
        {highlights.map(({ icon: Icon, label, detail }, index) => (
          <li
            key={label}
            className={`stagger-child flex min-h-[112px] items-center gap-3 border-[#d1d5d8] px-4 py-5 sm:min-h-[144px] sm:gap-4 sm:px-6 md:px-8 lg:px-[3.5%] ${
              index % 2 === 0 ? 'border-r' : ''
            } ${index < 2 ? 'border-b sm:border-b-0' : ''} ${
              index < highlights.length - 1 ? 'sm:border-r' : ''
            }`}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#d1d5d8] text-[#3f4142] sm:h-[72px] sm:w-[72px]">
              <Icon size={30} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-[#222] sm:text-sm sm:tracking-[0.18em]">
                {label}
              </span>
              <span className="mt-2 block text-[8px] font-medium uppercase leading-relaxed tracking-[0.14em] text-[#666] sm:text-[10px]">
                {detail}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeIntroSection;
