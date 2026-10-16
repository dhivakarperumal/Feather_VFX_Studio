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

const securityPartners = [
  { name: 'MPAA' },
  { name: 'Paramount', src: '/images/logo/logo_3.png' },
  { name: 'FOX', src: '/images/logo/logo_fox.png' },
  { name: 'HBO', src: '/images/logo/logo_4.png' },
  { name: 'NBCUniversal', src: '/images/logo/logo_1.png' },
  { name: 'Netflix', src: '/images/logo/logo_5.png' },
];

const studioPhotos = [
  {
    src: '/images/officeimages/2.jpg',
    alt: 'Workstations and chairs in the Feather VFX Studio office',
    label: 'Our workspace',
  },
  {
    src: '/images/officeimages/1.jpg',
    alt: 'Open-plan office workstations at Feather VFX Studio',
    label: 'Built for collaboration',
  },
  {
    src: '/images/officeimages/IMG_1720.jpg',
    alt: 'Feather VFX Studio office desks and collaborative work area',
    label: 'Where ideas take shape',
  },
  {
    src: '/images/officeimages/IMG_1822.jpg',
    alt: 'A comfortable chair in the Feather VFX Studio office',
    label: 'Room to recharge',
  },
];

const About = () => (
  <>
    <PageHeader
      eyebrow="About Feather VFX Studio"
      title="About Us"
      titleSize="text-2xl sm:text-3xl md:text-4xl"
      background="/images/heroimages/3.png"
      align="left"
    >
      <a
        href="#about-us"
        className="btn-shimmer mt-6 inline-flex items-center gap-3 bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </PageHeader>

    {/* Our Story Section */}
    <section
      id="about-us"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[var(--bg-primary)] px-[6%] py-12 text-[var(--text-primary)] sm:px-[5%] sm:py-16 lg:px-[3%] lg:py-20"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-14">
        <div data-aos="fade-right" className="group relative min-h-[340px] overflow-hidden border border-[var(--gold-primary)]/70 p-1 sm:min-h-[440px] lg:min-h-[500px]">
          <span className="pointer-events-none absolute left-0 top-0 z-20 h-12 w-12 border-l-2 border-t-2 border-[var(--gold-bright)]" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-0 right-0 z-20 h-12 w-12 border-b-2 border-r-2 border-[var(--gold-primary)]" aria-hidden="true" />

          <img
            src="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png"
            alt="A cinematic fantasy world created through visual effects"
            className="absolute inset-1 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-1 bg-gradient-to-t from-[var(--text-primary)]/60 via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-7 bottom-7 z-10 sm:inset-x-10 sm:bottom-10">
            <p className="font-serif text-4xl italic leading-[0.9] text-[var(--gold-bright)] drop-shadow-lg sm:text-5xl lg:text-6xl">
              Beyond
              <span className="block pl-8">Reality</span>
            </p>
            <a
              href="/showreel"
              className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--bg-primary)] transition-colors hover:text-[var(--gold-bright)] sm:mt-9"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--bg-primary)]/70 transition-colors hover:border-[var(--gold-bright)]">
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
            className="mt-3 max-w-2xl font-serif text-[1.125rem] font-bold uppercase leading-[0.98] tracking-[-0.025em] text-[var(--text-primary)] sm:text-2xl lg:text-[1.875rem]"
          >
            About Us
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-[var(--text-secondary)] sm:text-[15px]">
            At Feather VFX, we combine creativity, technical expertise, and innovation to deliver high-quality visual effects for film and television. We are committed to providing reliable, cost-effective VFX solutions without compromising on quality.
          </p>

          <div className="mt-7 h-px w-16 bg-[var(--gold-primary)]" aria-hidden="true" />

          <ul className="mt-7 grid gap-5 sm:grid-cols-3 sm:gap-0">
            {studioPillars.map(({ label, Icon }, index) => (
              <li
                key={label}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`flex items-center gap-3 sm:px-4 lg:px-5 ${
                  index > 0 ? 'sm:border-l sm:border-[var(--border-color)]' : 'sm:pl-0'
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/75 text-[var(--gold-bright)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="max-w-[100px] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[var(--text-secondary)] sm:text-[9px] lg:text-[10px]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section
      aria-labelledby="studio-gallery-heading"
      className="bg-[var(--bg-secondary)] px-[6%] py-12 text-[var(--text-primary)] sm:px-[5%] sm:py-16 lg:px-[3%] lg:py-20"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)] sm:text-xs">
              Behind the frames
            </p>
            <h2
              id="studio-gallery-heading"
              className="mt-2 font-serif text-2xl font-bold uppercase leading-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl"
            >
              Inside our studio
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            A look inside the workspace where our team collaborates and brings every frame to life.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {studioPhotos.map(({ src, alt, label }, index) => (
            <figure
              key={src}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative m-0 aspect-[4/3] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)]"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-10 text-sm font-semibold uppercase tracking-[0.12em] text-white sm:px-5 sm:pb-5">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    {/* Security Section */}
    <section
      aria-labelledby="security-heading"
      className="relative isolate overflow-hidden border-y border-[var(--gold-primary)]/20 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
    >
      <div className="relative isolate overflow-hidden border-b border-[var(--border-color)]">
        <img
          src="/images/offerbanner.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-left opacity-10"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-secondary)]/90 to-[var(--bg-secondary)]/80"
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
              className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-[1.02] tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
            >
              Feather makes you feel more{' '}
              <span className="text-[var(--gold-bright)]">proud of your business.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-[var(--text-secondary)] sm:text-base">
              We offer smooth VFX services with the right amount of passion and innovation, with no compromise in quality.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4" aria-label="Our commitments">
            {securityCommitments.map(({ label, Icon }, index) => (
              <li
                key={label}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="flex flex-col items-center gap-3 border border-[var(--border-color)] bg-[var(--bg-primary)] px-2 py-4 text-center sm:px-3 sm:py-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-bright)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[9px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-[var(--text-secondary)] sm:text-[10px]">
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
          className="relative overflow-hidden border border-[var(--gold-primary)]/40 bg-[var(--bg-primary)] p-7 sm:p-9"
        >
          <span className="absolute -right-6 -top-8 text-[var(--gold-primary)]/10" aria-hidden="true">
            <ShieldCheck className="h-40 w-40" strokeWidth={1} />
          </span>
          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)]">
              Our commitment
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold uppercase leading-tight text-[var(--text-primary)] sm:text-3xl">
              Your content deserves careful protection.
            </h3>
            <p className="mt-4 text-sm leading-[1.8] text-[var(--text-secondary)]">
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
            <p className="mt-4 text-sm leading-[1.8] text-[var(--text-secondary)]">
              Our content-security practices follow Motion Picture Association (MPA) guidance and are designed to safeguard media throughout production and delivery.
            </p>
            <div className="mt-5 flex items-center gap-3 border border-[var(--border-color)] bg-[var(--bg-primary)] p-3">
              <ServerCog className="h-8 w-8 shrink-0 text-[var(--gold-bright)]" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 via-transparent to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1500px] px-[6%] py-8 sm:px-[5%] sm:py-10 lg:px-[3%]">
          <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <div className="group relative min-h-[250px] overflow-hidden border border-[var(--gold-primary)]/45 sm:min-h-[320px]" data-aos="fade-right">
            <img
              src="/images/physicalsecurity.png"
              alt="Controlled-entry security system at a studio facility"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/30 via-transparent to-[var(--bg-primary)]/20" aria-hidden="true" />
          </div>

          <div data-aos="fade-left">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)]">
              Physical security
              <span className="h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-[1.7] text-[var(--text-secondary)]">
              Door access controls and CCTV are monitored around the clock, with on-site security for studio entrances, production areas and data centers. Mobile phones and electronic storage devices are prohibited in the production network.
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {physicalSecurityFeatures.map(({ label, Icon }, index) => (
                <li
                  key={label}
                  data-aos="zoom-in"
                  data-aos-delay={index * 70}
                  className="flex min-h-[94px] flex-col items-center justify-center gap-2 border border-[var(--border-color)] bg-[var(--bg-secondary)] px-2 py-2.5 text-center"
                >
                  <Icon className="h-6 w-6 text-[var(--gold-bright)]" aria-hidden="true" />
                  <span className="text-[9px] font-semibold leading-[1.4] text-[var(--text-secondary)] sm:text-[10px]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div className="mt-8 grid items-center gap-6 border-t border-[var(--border-color)] pt-7 sm:mt-10 sm:gap-8 sm:pt-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div data-aos="fade-right">
              <h3 className="font-serif text-xl font-bold uppercase leading-tight text-[var(--text-primary)] sm:text-2xl">
                Quality, Confidentiality and Security
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-[1.7] text-[var(--text-secondary)]">
                At Feather VFX, we understand the importance of protecting our clients&apos; projects and confidential information. We are committed to maintaining professional standards for data handling, secure file transfers, and production confidentiality.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-[1.7] text-[var(--text-secondary)]">
                Our workflows are designed to support reliable communication, secure collaboration, and efficient delivery throughout the production process. We continually review our practices to support our clients&apos; requirements.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3" aria-label="Organizations referenced in our content-security practices">
              {securityPartners.map(({ name, src }, index) => (
                <li
                  key={name}
                  data-aos="zoom-in"
                  data-aos-delay={index * 60}
                  className="flex min-h-[72px] items-center justify-center border border-[#E2E4E1] bg-white px-3 py-3 text-center font-bold tracking-[0.08em] text-[#17191B]"
                >
                  {src ? (
                    <img
                      src={src}
                      alt={name}
                      loading="lazy"
                      className="max-h-12 w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm sm:text-base">{name}</span>
                  )}
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

    {/* Values Section */}
    <section
      aria-labelledby="values-heading"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-[6%] py-12 text-[var(--text-primary)] sm:px-[5%] sm:py-16 lg:px-[3%] lg:py-20"
    >
      <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[0.95fr_1.25fr_0.75fr]">
        <div data-aos="fade-right" className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 sm:p-8">
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
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-[var(--text-secondary)]">{detail}</p>
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
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/55 via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Crafted frame by frame
            </p>
            <ArrowUpRight className="h-5 w-5 text-[var(--gold-bright)]" aria-hidden="true" />
          </div>
        </div>

        <aside data-aos="fade-left" data-aos-delay="200" className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            Our journey
          </p>
          <h2 className="mt-1 text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold-bright)]">
            In numbers
          </h2>
          <dl className="mt-4 divide-y divide-[var(--border-color)]">
            {studioStats.map(({ value, label }, index) => (
              <div key={label} className="flex items-center justify-between gap-3 py-3">
                <CountUpStat value={value} delay={index * 150} />
                <dd className="max-w-[120px] text-right text-[9px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[var(--text-secondary)]">
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
