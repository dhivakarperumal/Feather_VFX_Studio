import { Clapperboard, Globe, Trophy, UsersRound } from 'lucide-react';
import { useCountUp } from '../../../utils/useCountUp';
import { europeanClientLocations, serviceMarkets } from '../../../data/locationMarkets';

const achievements = [
  { icon: Globe, value: '10+', label: 'Countries', detail: 'Served' },
  { icon: UsersRound, value: '60+', label: 'VFX Artists', detail: '' },
  { icon: Clapperboard, value: '100+', label: 'Projects', detail: 'Completed' },
  { icon: Trophy, value: '', label: 'Clients', detail: 'Worldwide' },
];

/* Small wrapper so each stat gets its own hook instance */
const CountUpStat = ({ value, delay = 0 }) => {
  const { ref, display } = useCountUp(value, 1800, delay);
  return (
    <span ref={ref} className="block font-serif text-lg font-bold leading-none text-[var(--text-primary)] sm:text-xl">
      {display}
    </span>
  );
};

const LocationList = ({ locations }) => (
  <ul className="mt-4 space-y-2">
    {locations.map(({ country, regions, cities, productionHubs }) => (
      <li key={country} className="text-sm leading-relaxed text-[var(--text-secondary)]">
        <strong className="text-[var(--text-primary)]">{country}:</strong>{' '}
        {regions
          ? regions
              .map(({ name, cities: regionCities }) =>
                regionCities.length ? `${name} (${regionCities.join(', ')})` : name
              )
              .join('; ')
          : cities.join(', ')}
        {productionHubs && `; production hubs: ${productionHubs.join(' and ')}`}
      </li>
    ))}
  </ul>
);

const GlobalVFXSection = () => (
  <>
  <section
    aria-labelledby="global-vfx-title"
    className="relative isolate overflow-hidden border-y border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
  >
    <div className="mx-auto grid w-full max-w-[1700px] items-stretch lg:min-h-[360px] lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative min-h-[230px] overflow-hidden sm:min-h-[300px] lg:min-h-[360px]">
        <img
          src="/images/home1.png"
          alt="A connected world of visual effects productions"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />

        {/* Uniform transparent white overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-white/35"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex min-w-0 items-center px-5 py-8 sm:px-8 lg:py-10 lg:pl-8 lg:pr-[7%]">
        <div className="w-full" data-aos="fade-up" data-aos-offset="60">
          <p className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--gold-bright)] sm:text-[10px]">
            Global VFX Excellence
            <span className="h-px w-12 bg-[var(--gold-primary)]/80" aria-hidden="true" />
          </p>

          <h2
            id="global-vfx-title"
            className="mt-3 max-w-[650px] font-serif text-2xl font-bold uppercase leading-[1.06] tracking-[0.01em] text-[var(--text-primary)] sm:text-3xl lg:text-[2.15rem]"
          >
            Feather VFX - Your Global{' '}
            <span className="text-[var(--gold-bright)]">VFX Partner</span>
          </h2>

          <p className="mt-4 max-w-[660px] text-[12px] text-justify leading-relaxed text-[var(--text-secondary)] sm:text-[15px]">
            Feather VFX provides high-quality visual effects services for feature films, television series, and other visual media. We offer flexible, cost-effective solutions tailored to the needs of production companies and VFX studios.
          </p>
          <p className="mt-4 max-w-[660px] text-[12px] text-justify leading-relaxed text-[var(--text-secondary)] sm:text-[15px]">
            Our team combines creativity, technical expertise, and professionalism to support projects of varying sizes and complexity. We focus on consistent quality, efficient workflows, and reliable delivery.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-5">
            {achievements.map(({ icon: Icon, value, label, detail }, index) => (
              <li
                key={label}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-offset="40"
                className="flex min-h-[64px] items-center gap-2 border border-[var(--border-color)] bg-[var(--bg-primary)] px-2.5 py-2 sm:gap-2.5 sm:px-3"
              >
                <Icon
                  className="h-6 w-6 shrink-0 text-[var(--gold-bright)] sm:h-7 sm:w-7"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  {value && <CountUpStat value={value} delay={index * 120} />}
                  <span className="mt-1 block text-[8px] font-bold uppercase leading-tight tracking-[0.11em] text-[var(--text-secondary)] sm:text-[9px]">
                    {label}
                    {detail && <span className="block">{detail}</span>}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section
    aria-labelledby="service-regions-title"
    className="border-b border-[var(--border-color)] bg-[var(--bg-primary)] px-[5%] py-10 text-[var(--text-primary)] sm:py-14 lg:px-[3%]"
  >
    <div className="mx-auto max-w-[1500px]">
      <header className="max-w-3xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--gold-bright)]">
          International collaboration
        </p>
        <h2 id="service-regions-title" className="mt-2 font-serif text-2xl font-bold uppercase sm:text-3xl">
          VFX outsourcing markets and <span className="text-[var(--gold-bright)]">client locations</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          Feather VFX works remotely with production teams across these markets. The locations below describe markets served and verified European client locations; they are not a list of Feather VFX offices.
        </p>
      </header>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 sm:p-6" aria-labelledby="markets-served-title">
          <h3 id="markets-served-title" className="font-serif text-lg font-bold uppercase">United States &amp; United Kingdom</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--gold-bright)]">Markets served</p>
          <LocationList locations={serviceMarkets} />
        </section>
        <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 sm:p-6" aria-labelledby="european-clients-title">
          <h3 id="european-clients-title" className="font-serif text-lg font-bold uppercase">Europe</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--gold-bright)]">Verified client locations</p>
          <LocationList locations={europeanClientLocations} />
        </section>
      </div>
    </div>
  </section>
  </>
);

export default GlobalVFXSection;
