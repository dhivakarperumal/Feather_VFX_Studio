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
      className="relative isolate overflow-hidden bg-[#05090c] text-white"
    >
      <div className="mx-auto grid min-h-[300px] w-full max-w-[1700px] items-center lg:min-h-[340px] lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-right" data-aos-offset="60" className="relative z-10 px-5 py-6 sm:px-8 lg:py-8 lg:pl-[8%] lg:pr-6">
          <div className="max-w-[700px]">
            <p className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.28em] text-white/80 sm:text-[10px]">
              Your VFX Outsourcing Partner
              <span className="h-px w-14 bg-[#d6a04a]/80" aria-hidden="true" />
            </p>

            <h2
              id="home-intro-title"
              className="mt-2 font-serif text-xl font-bold uppercase leading-[1.02] tracking-[0.02em] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-2xl lg:text-[2.25rem]"
            >
              Give your vision a{' '}
              <span className="mt-1 block text-[#f0a858]">new dimension with us!</span>
            </h2>

            <p className="mt-3 max-w-[620px] text-[11px] leading-relaxed text-white/80 sm:text-xs">
              VFX is our delight; we bring pioneering technology and top-notch creativity into play,
              creating visuals that exceed your expectations. With great attention to detail, we make
              every effort to bring your ideas to life and help you enjoy the distinct VFX effect.
            </p>

            {/* Highlight icons — stagger in one by one */}
            <ul ref={highlightsRef} className="mt-4 grid max-w-[500px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2">
              {highlights.map(({ icon: Icon, label, detail }) => (
                <li key={label} className="stagger-child flex flex-col items-center text-center">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[#f0a858]/80 bg-[#0d1116]/60 text-[#f0c47e] shadow-[0_0_18px_rgba(240,168,88,0.16)]">
                    <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="mt-2 text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-white sm:text-[10px]">
                    {label}
                    <span className="mt-0.5 block text-white/75">{detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="btn-shimmer mt-4 inline-flex min-h-8 items-center gap-3 rounded-sm border border-[#e4a43c] bg-[#0a0f12]/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#f5bd59] transition-colors hover:bg-[#e4a43c] hover:text-[#090b0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a858] sm:text-[10px]"
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
            className="absolute inset-0 bg-[linear-gradient(90deg,#05090c_0%,rgba(5,9,12,0.6)_12%,transparent_42%),linear-gradient(0deg,rgba(5,9,12,0.18),transparent_35%)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeIntroSection;
