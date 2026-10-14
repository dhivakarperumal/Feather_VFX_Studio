import { Gem, Lightbulb, Settings, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  { icon: Lightbulb, label: 'Creative', detail: 'Solutions' },
  { icon: Settings, label: 'Advanced', detail: 'Technology' },
  { icon: UsersRound, label: 'Experienced', detail: 'VFX Artists' },
  { icon: Gem, label: 'High Quality', detail: 'Delivery' },
];

const HomeIntroSection = () => (
  <section
    aria-labelledby="home-intro-title"
    className="relative isolate overflow-hidden bg-[#05090c] px-4 py-12 text-white sm:px-8 sm:py-16 lg:px-[6%] lg:py-20"
  >
    <div className="mx-auto grid w-full max-w-[1500px] items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="max-w-[650px]">
        <p className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-white/80 sm:text-[10px]">
          Your VFX Outsourcing Partner
          <span className="h-px w-12 bg-[#d6a04a]/80" aria-hidden="true" />
        </p>
        <h2
          id="home-intro-title"
          className="mt-3 font-serif text-3xl font-bold uppercase leading-[1.08] tracking-wide sm:text-4xl lg:text-5xl"
        >
          Give your vision a{' '}
          <span className="mt-1 block text-[#f0a858]">new dimension with us!</span>
        </h2>
        <p className="mt-4 max-w-[590px] text-xs leading-relaxed text-white/80 sm:text-sm">
          VFX is our delight; we bring pioneering technology and top-notch creativity into play,
          creating visuals that exceed your expectations. With great attention to detail, we make
          every effort to bring your ideas to life and help you enjoy the distinct VFX effect.
        </p>

        <ul className="mt-6 grid max-w-[500px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
          {highlights.map(({ icon: Icon, label, detail }) => (
            <li key={label} className="flex flex-col items-center text-center">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[#f0a858]/80 text-[#f0c47e] shadow-[0_0_18px_rgba(240,168,88,0.18)]">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
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
          className="mt-6 inline-flex min-h-10 items-center gap-3 rounded-sm border border-[#e4a43c] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#f5bd59] transition-colors hover:bg-[#e4a43c] hover:text-[#090b0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a858] sm:text-[10px]"
        >
          Let&apos;s bring your vision to life
          <span className="text-base" aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="relative lg:justify-self-end">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,12,0.18),rgba(7,10,12,0.08),rgba(7,10,12,0.28))]" aria-hidden="true" />
          <img
            src="/images/home.png"
            alt="Creative VFX work"
            className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[520px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HomeIntroSection;
