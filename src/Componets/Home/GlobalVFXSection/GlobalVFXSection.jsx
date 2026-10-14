import { Clapperboard, Globe, Trophy, UsersRound } from 'lucide-react';
import { useCountUp } from '../../../utils/useCountUp';

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
    <span ref={ref} className="block font-serif text-lg font-bold leading-none text-white sm:text-xl">
      {display}
    </span>
  );
};

const GlobalVFXSection = () => (
  <section
    aria-labelledby="global-vfx-title"
    className="relative isolate overflow-hidden border-y border-white/10 bg-[#05090c] text-white"
  >
    <div className="mx-auto grid w-full max-w-[1700px] items-stretch lg:min-h-[360px] lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative min-h-[230px] overflow-hidden sm:min-h-[300px] lg:min-h-[360px]">
        <img
          src="/images/home1.png"
          alt="A connected world of visual effects productions"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#05090c]/80 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#05090c]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#05090c]/50 to-transparent lg:hidden"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex items-center px-5 py-8 sm:px-8 lg:-ml-4 lg:py-10 lg:pl-0 lg:pr-[7%]">
        <div className="w-full">
          <p className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[#f0c47e] sm:text-[10px]">
            Global VFX Excellence
            <span className="h-px w-12 bg-[#d6a04a]/80" aria-hidden="true" />
          </p>

          <h2
            id="global-vfx-title"
            className="mt-3 max-w-[650px] font-serif text-2xl font-bold uppercase leading-[1.06] tracking-[0.01em] text-white sm:text-3xl lg:text-[2.15rem]"
          >
            Feather VFX - A Leading VFX Outsourcing Provider{' '}
            <span className="text-[#f0a858]">Globally</span>
          </h2>

          <p className="mt-4 max-w-[660px] text-[12px] leading-relaxed text-white/75 sm:text-sm">
            Feather VFX Studio delivers high-quality visual effects for feature films and television
            series. With a flexible, cost-effective international service and a team of 60 VFX
            artists, we partner with production companies in the US, Canada, and the UK to bring
            ambitious creative visions to life.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-5">
            {achievements.map(({ icon: Icon, value, label, detail }, index) => (
              <li
                key={label}
                className="flex min-h-[64px] items-center gap-2 border border-white/15 bg-black/25 px-2.5 py-2 sm:gap-2.5 sm:px-3"
              >
                <Icon
                  className="h-6 w-6 shrink-0 text-[#f0b552] sm:h-7 sm:w-7"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  {value && <CountUpStat value={value} delay={index * 120} />}
                  <span className="mt-1 block text-[8px] font-bold uppercase leading-tight tracking-[0.11em] text-white/85 sm:text-[9px]">
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
);

export default GlobalVFXSection;
