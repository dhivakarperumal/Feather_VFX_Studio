import { BadgeCheck, Cpu, Play, Rocket } from 'lucide-react';

const studioPillars = [
  { label: 'Creative storytellers', Icon: Rocket },
  { label: 'Advanced technology', Icon: Cpu },
  { label: 'World-class quality', Icon: BadgeCheck },
];

const About = () => (
  <section
    id="about-us"
    aria-labelledby="about-heading"
    className="relative isolate overflow-hidden bg-[var(--bg-primary)] px-[6%] py-12 text-[var(--text-primary)] sm:px-[5%] sm:py-16 lg:px-[3%] lg:py-20"
  >
    <div
      className="absolute inset-0 -z-20 bg-cover bg-center opacity-25"
      style={{ backgroundImage: "url('/images/whyusbg.png')" }}
      aria-hidden="true"
    />
    <div
      className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,10,13,0.92),rgba(4,10,13,0.82)_55%,rgba(4,10,13,0.92))]"
      aria-hidden="true"
    />

    <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-14">
      <div className="group relative min-h-[340px] overflow-hidden border border-[var(--gold-primary)]/70 p-1 sm:min-h-[440px] lg:min-h-[500px]">
        <span className="pointer-events-none absolute left-0 top-0 z-20 h-12 w-12 border-l-2 border-t-2 border-[var(--gold-bright)] shadow-[-3px_-3px_16px_rgba(240,168,88,0.4)]" aria-hidden="true" />
        <span className="pointer-events-none absolute bottom-0 right-0 z-20 h-12 w-12 border-b-2 border-r-2 border-[var(--gold-primary)]" aria-hidden="true" />

        <img
          src="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png"
          alt="A cinematic fantasy world created through visual effects"
          className="absolute inset-1 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-1 bg-gradient-to-t from-[#03090c]/90 via-[#03090c]/15 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-7 bottom-7 z-10 sm:inset-x-10 sm:bottom-10">
          <p className="font-serif text-4xl italic leading-[0.9] text-[var(--gold-bright)] drop-shadow-lg sm:text-5xl lg:text-6xl">
            Beyond
            <span className="block pl-8">Reality</span>
          </p>
          <a
            href="/#showreel"
            className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:text-[var(--gold-bright)] sm:mt-9"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 transition-colors hover:border-[var(--gold-bright)]">
              <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
            </span>
            Watch our showreel
          </a>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)] sm:text-xs">
          Our story
        </p>
        <h1
          id="about-heading"
          className="mt-3 max-w-2xl font-serif text-4xl font-bold uppercase leading-[0.98] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl"
        >
          From imagination
          <span className="block text-[var(--gold-bright)]">to reality</span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/75 sm:text-base">
          Feather VFX Studio was founded by a group of creative professionals who shared a common vision — to create world-class visual effects and help storytellers bring their ideas to life. What started as a small team with a big dream has now grown into a full-scale VFX and post-production studio, trusted by filmmakers, brands and game developers worldwide.
        </p>

        <div className="mt-7 h-px w-16 bg-[var(--gold-primary)] shadow-[0_0_12px_rgba(214,160,74,0.55)]" aria-hidden="true" />

        <ul className="mt-7 grid gap-5 sm:grid-cols-3 sm:gap-0">
          {studioPillars.map(({ label, Icon }, index) => (
            <li
              key={label}
              className={`flex items-center gap-3 sm:px-4 lg:px-5 ${
                index > 0 ? 'sm:border-l sm:border-white/15' : 'sm:pl-0'
              }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/75 text-[var(--gold-bright)] shadow-[0_0_14px_rgba(214,160,74,0.12)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="max-w-[100px] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-white/80 sm:text-[9px] lg:text-[10px]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
