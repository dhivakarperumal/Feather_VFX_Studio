import {
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Check,
  Cpu,
  Heart,
  Lightbulb,
  LockKeyhole,
  Play,
  Rocket,
  ServerCog,
  Settings2,
  ShieldCheck,
  Star,
  UsersRound,
} from 'lucide-react';
import PageHeader from '../../CommonComponents/PageHeader';
import { useCountUp } from '../../utils/useCountUp';

/* Animated count-up stat — each gets its own hook instance */
const CountUpStat = ({ value, delay = 0 }) => {
  const { ref, display } = useCountUp(value, 1800, delay);
  return (
    <dt ref={ref} className="font-serif text-3xl font-bold text-[var(--gold-bright)] sm:text-4xl">
      {display}
    </dt>
  );
};

import OurCulture from './OurCulture';
import OurMission from './OurMission';
import ProcessSection from './ProcessSection';
import PromiseSection from './PromiseSection';

const studioPillars = [
  { label: 'Creative storytellers', Icon: Rocket },
  { label: 'Advanced technology', Icon: Cpu },
  { label: 'World-class quality', Icon: BadgeCheck },
];

const values = [
  { title: 'Creativity', detail: 'We turn bold ideas into stunning visuals.', Icon: Lightbulb },
  { title: 'Collaboration', detail: 'Great results come from great teams.', Icon: UsersRound },
  { title: 'Quality', detail: 'We never compromise on excellence.', Icon: Star },
  { title: 'Innovation', detail: 'We embrace new technology and ideas.', Icon: Settings2 },
  { title: 'Passion', detail: 'We love what we do, and it shows in every frame.', Icon: Heart },
];

const studioStats = [
  { value: '5+', label: 'Years of experience' },
  { value: '50+', label: 'Projects completed' },
  { value: '25+', label: 'Happy clients' },
  { value: '10+', label: 'Awards & recognitions' },
];

const securityCommitments = [
  { label: 'Professional standards', Icon: BadgeCheck },
  { label: 'Data & information security', Icon: ShieldCheck },
  { label: 'Trusted relationships', Icon: UsersRound },
  { label: 'Continuous improvement', Icon: Settings2 },
];

const physicalSecurityFeatures = [
  { label: 'CCTV surveillance', Icon: Camera },
  { label: '24/7 on-site security', Icon: ShieldCheck },
  { label: 'Access-controlled entry', Icon: LockKeyhole },
  { label: 'No mobile devices in production areas', Icon: Check },
];

const About = () => (
  <>
    <PageHeader
      eyebrow="About Feather VFX Studio"
      title={
        <>
          Imagining worlds.
          <br />
          <span className="text-[var(--gold-primary)]">Creating reality.</span>
        </>
      }
      description="Meet the creative team bringing bold ideas to life through visual effects and post-production."
      background="/images/heroimages/3.png"
      align="left"
      showBreadcrumb={false}
      className="min-h-[380px]"
    >
      <a
        href="#about-us"
        className="btn-shimmer mt-6 inline-flex items-center gap-3 bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </PageHeader>
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
        <div data-aos="fade-right" className="group relative min-h-[340px] overflow-hidden border border-[var(--gold-primary)]/70 p-1 sm:min-h-[440px] lg:min-h-[500px]">
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
              href="/reels#featured-reel"
              className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:text-[var(--gold-bright)] sm:mt-9"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 transition-colors hover:border-[var(--gold-bright)]">
                <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
              </span>
              Watch our showreel
            </a>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="100">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)] sm:text-xs">
            Our story
          </p>
          <h2
            id="about-heading"
            className="mt-3 max-w-2xl font-serif text-[1.125rem] font-bold uppercase leading-[0.98] tracking-[-0.025em] text-white sm:text-2xl lg:text-[1.875rem]"
          >
            From imagination
            <span className="block text-[var(--gold-bright)]">to reality</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/75 sm:text-base">
            Feather VFX Studio was founded by a group of creative professionals who shared a common vision — to create world-class visual effects and help storytellers bring their ideas to life. What started as a small team with a big dream has now grown into a full-scale VFX and post-production studio, trusted by filmmakers, brands and game developers worldwide.
          </p>

          <div className="mt-7 h-px w-16 bg-[var(--gold-primary)] shadow-[0_0_12px_rgba(214,160,74,0.55)]" aria-hidden="true" />

          <ul className="mt-7 grid gap-5 sm:grid-cols-3 sm:gap-0">
            {studioPillars.map(({ label, Icon }, index) => (
              <li
                key={label}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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

    <section
      aria-labelledby="security-heading"
      className="relative isolate overflow-hidden border-y border-[var(--gold-primary)]/30 bg-[#050a0b] text-white"
    >
      <div className="relative isolate overflow-hidden border-b border-[var(--gold-primary)]/35">
        <img
          src="/images/offerbanner.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-left opacity-25"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,8,9,0.95),rgba(3,8,9,0.83)_58%,rgba(3,8,9,0.94))]"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-[1500px] gap-9 px-[6%] py-12 sm:px-[5%] sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-[3%] lg:py-20">
          <div data-aos="fade-right">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-bright)]">
              <span className="h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
              Trust & quality
            </p>
            <h2
              id="security-heading"
              className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
            >
              Feather makes you feel more{' '}
              <span className="text-[var(--gold-bright)]">proud of your business.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/75 sm:text-base">
              We offer smooth VFX services with the right amount of passion and innovation, with no compromise in quality.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4" aria-label="Our commitments">
            {securityCommitments.map(({ label, Icon }, index) => (
              <li
                key={label}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="flex flex-col items-center gap-3 border border-[var(--gold-primary)]/35 bg-black/35 px-2 py-4 text-center sm:px-3 sm:py-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-bright)] shadow-[0_0_18px_rgba(214,160,74,0.18)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[9px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-white/85 sm:text-[10px]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] items-center gap-7 px-[6%] py-9 sm:px-[5%] sm:py-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 lg:px-[3%]">
        <div
          data-aos="fade-right"
          className="relative overflow-hidden border border-[var(--gold-primary)]/40 bg-[radial-gradient(circle_at_center,rgba(214,160,74,0.12),transparent_58%),#080e10] p-7 sm:p-9"
        >
          <span className="absolute -right-6 -top-8 text-[var(--gold-primary)]/10" aria-hidden="true">
            <ShieldCheck className="h-40 w-40" strokeWidth={1} />
          </span>
          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)]">
              Our commitment
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
              Your content deserves careful protection.
            </h3>
            <p className="mt-4 text-sm leading-[1.8] text-white/70">
              We respect the trust placed in us and take care to protect sensitive production data. Our security practices are regularly reviewed and updated to support changing business needs and standards.
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="grid items-center gap-6 sm:grid-cols-[0.85fr_1.15fr] sm:gap-8">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)]">
              Industry standard
              <span className="h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
            </p>
            <p className="mt-4 text-sm leading-[1.8] text-white/70">
              Our content-security practices follow Motion Picture Association (MPA) guidance and are designed to safeguard media throughout production and delivery.
            </p>
            <div className="mt-5 flex items-center gap-3 border border-[var(--gold-primary)]/45 bg-black/35 p-3">
              <ServerCog className="h-8 w-8 shrink-0 text-[var(--gold-bright)]" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-white/75">
                A <span className="font-bold text-[var(--gold-bright)]">100 Mbps</span> secondary connection helps support service continuity.
              </p>
            </div>
          </div>
          <div className="group relative min-h-[220px] overflow-hidden border border-[var(--gold-primary)]/40 sm:min-h-[260px]">
            <img
              src="/images/industry.png"
              alt="Secure server room supporting protected production data"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03090c]/65 via-transparent to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--gold-primary)]/25 bg-[linear-gradient(90deg,rgba(9,15,17,0.97),rgba(5,10,11,0.9))]">
        <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-[6%] py-9 sm:px-[5%] sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-[3%]">
          <div className="group relative min-h-[250px] overflow-hidden border border-[var(--gold-primary)]/45 sm:min-h-[320px]" data-aos="fade-right">
            <img
              src="/images/physicalsecurity.png"
              alt="Controlled-entry security system at a studio facility"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" aria-hidden="true" />
          </div>

          <div data-aos="fade-left">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)]">
              Physical security
              <span className="h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
            </p>
            <h3 className="mt-3 font-serif text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
              Security at every entry point.
            </h3>
            <p className="mt-4 text-sm leading-[1.8] text-white/70">
              Controlled access, CCTV monitoring and on-site security help protect our production areas. Personal mobile devices are not permitted in restricted production spaces.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {physicalSecurityFeatures.map(({ label, Icon }, index) => (
                <li
                  key={label}
                  data-aos="zoom-in"
                  data-aos-delay={index * 70}
                  className="flex min-h-[104px] flex-col items-center justify-center gap-2 border border-[var(--gold-primary)]/40 bg-black/35 px-2 py-3 text-center"
                >
                  <Icon className="h-6 w-6 text-[var(--gold-bright)]" aria-hidden="true" />
                  <span className="text-[9px] font-semibold leading-[1.4] text-white/85 sm:text-[10px]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <OurCulture />
    <OurMission />

    <ProcessSection />
    <PromiseSection />

    <section
      aria-labelledby="values-heading"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-[6%] py-12 text-white sm:px-[5%] sm:py-16 lg:px-[3%] lg:py-20"
    >
      <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[0.95fr_1.25fr_0.75fr]">
        <div data-aos="fade-right" className="border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.025),rgba(5,10,11,0.45))] p-6 sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-bright)]">
            Our values
          </p>
          <h2 id="values-heading" className="mt-2 font-serif text-3xl font-bold uppercase leading-tight text-[var(--gold-bright)]">
            What we believe in
          </h2>

          <ul className="mt-6 space-y-4">
            {values.map(({ title, detail, Icon }) => (
              <li key={title} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/70 text-[var(--gold-bright)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/65">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className="group relative min-h-[360px] overflow-hidden border border-[var(--gold-primary)]/55 lg:min-h-full">
          <img
            src="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png"
            alt="A detailed digital environment created for a cinematic story"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,9,12,0.65)] via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Crafted frame by frame
            </p>
            <ArrowUpRight className="h-5 w-5 text-[var(--gold-bright)]" aria-hidden="true" />
          </div>
        </div>

        <aside data-aos="fade-left" data-aos-delay="200" className="border border-white/15 bg-[rgba(7,13,15,0.82)] p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
            Our journey
          </p>
          <h2 className="mt-1 text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold-bright)]">
            In numbers
          </h2>
          <dl className="mt-4 divide-y divide-white/10">
            {studioStats.map(({ value, label }, index) => (
              <div key={label} className="flex items-center justify-between gap-3 py-3">
                <CountUpStat value={value} delay={index * 150} />
                <dd className="max-w-[120px] text-right text-[9px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-white/70">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  </>
);

export default About;
