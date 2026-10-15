import { useState } from 'react';
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Layers3,
  ScanLine,
  Sparkles,
  UsersRound,
  WandSparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../CommonComponents/PageHeader';
import { services } from '../../data/services';

const serviceDetails = {
  Rotoscoping: {
    icon: ScanLine,
    points: ['VFX roto', 'Green / blue screen', 'Clean plate creation', 'Multi-shade mattes'],
  },
  'Paint & Prep': {
    icon: WandSparkles,
    points: ['Wire & rig removals', 'Camera set-up removals', 'Object removals', 'Dust & scratch removal'],
  },
  'Cosmetic VFX': {
    icon: Sparkles,
    points: ['Skin & facial clean-up', 'Wrinkle & crew clean-up', 'Skin imperfection removal', 'Digital makeup'],
  },
  Matchmove: {
    icon: Camera,
    points: ['Camera tracking', 'Object / surface tracking', '2D tracking', '3D tracking'],
  },
  Compositing: {
    icon: Layers3,
    points: ['Channel optimisation', 'Multi-layer composites', 'Match, color & grain', '2D / 3D compositing'],
  },
};

const serviceOrder = ['Rotoscoping', 'Paint & Prep', 'Cosmetic VFX', 'Matchmove', 'Compositing'];
const orderedServices = serviceOrder.map((title) => services.find((service) => service.title === title));

const clients = [
  { name: 'NBCUniversal', image: '/images/logo/logo_1.png' },
  { name: 'HBO', image: '/images/logo/logo_2.png' },
  { name: 'Paramount', image: '/images/logo/logo_3.png' },
  { name: '20th Century Fox', image: '/images/logo/logo_4.png' },
  { name: 'Netflix', image: '/images/logo/logo_5.png' },
];

const ComparisonRow = ({ service }) => {
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const { icon: Icon, points } = serviceDetails[service.title];
  const outputImage = service.image.replace('_IN.jpg', '_OUT.jpg').replace('-IN.jpg', '-OUT.jpg');
  const reverseComparison = ['Rotoscoping', 'Matchmove', 'Cosmetic VFX'].includes(service.title);
  const firstImage = reverseComparison ? outputImage : service.image;
  const secondImage = reverseComparison ? service.image : outputImage;

  return (
    <article className="group grid overflow-hidden rounded-sm border border-[#b8852f]/55 bg-[#080d0f] transition-colors duration-300 hover:border-[#efb64e] md:grid-cols-2">
      <div className="service-comparison relative aspect-[16/9] min-h-[190px] overflow-hidden md:aspect-auto md:min-h-[220px]">
        <img
          src={firstImage}
          alt={`${service.title} before`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${comparisonPosition}%)` }}
        >
          <img
            src={secondImage}
            alt={`${service.title} after`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-sm bg-black/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/90">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-sm bg-[#efb64e] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#11100b]">
          After
        </span>
        <span
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.7)]"
          style={{ left: `${comparisonPosition}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-[#efb64e] bg-[#080b0c]/90 text-white shadow-lg">
            <span className="flex items-center">
              <ChevronLeft size={14} />
              <ChevronRight size={14} />
            </span>
          </span>
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={comparisonPosition}
          onChange={(event) => setComparisonPosition(Number(event.target.value))}
          aria-label={`Compare before and after for ${service.title}`}
          aria-valuetext={`${comparisonPosition}% before, ${100 - comparisonPosition}% after`}
          className="service-comparison__range absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="relative isolate flex min-h-[190px] items-center overflow-hidden px-5 py-6 sm:px-7 md:min-h-[220px]">
        <img
          src={outputImage}
          alt=""
          loading="lazy"
          className="absolute inset-y-0 right-0 -z-20 h-full w-[58%] object-cover opacity-[0.13] transition-opacity duration-300 group-hover:opacity-[0.2]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080d0f] via-[#080d0f]/90 to-[#080d0f]/50" aria-hidden="true" />
        <div className="w-full">
          <div className="flex items-center gap-4">
            <Icon className="h-8 w-8 shrink-0 text-[#efb64e]" strokeWidth={1.35} aria-hidden="true" />
            <h3 className="font-serif text-xl font-bold uppercase leading-tight text-white sm:text-2xl">
              {service.title}
            </h3>
            <span className="hidden h-px w-12 bg-[#bd8735] sm:block" aria-hidden="true" />
          </div>
          <p className="mt-3 max-w-lg text-xs leading-relaxed text-white/65 sm:text-sm">
            {service.description}
          </p>
          <ul className="mt-4 grid gap-x-4 gap-y-2 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-xs leading-snug text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#efb64e]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

const Services = () => (
  <div className="overflow-hidden bg-[#050809] text-white">
    <PageHeader
      eyebrow="Our expertise"
      title={<>Our <span className="text-[var(--gold-primary)]">Services</span></>}
      description="We create innovative, complex visual effects for high-end television and feature films."
      background="/images/home.png"
      align="center"
      className="min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]"
    >
      <Link
        to="/contact"
        className="mt-5 inline-flex min-h-10 items-center gap-3 border border-[#e8ae43] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f3c15c] transition-colors hover:bg-[#e8ae43] hover:text-[#080a0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3c15c]"
      >
        Discuss your project <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </PageHeader>

    <section className="relative isolate overflow-hidden bg-[#050809] px-[5%] pb-12 pt-8 sm:pb-16 sm:pt-10">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_28%,rgba(191,128,31,0.08),transparent_58%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1320px]">
        <header className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="text-[9px] font-bold uppercase tracking-[0.36em] text-[#edb444] sm:text-[10px]">
            What we do
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">
            Creative VFX for <span className="text-[#efb64e]">every production</span>
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-white/65 sm:text-sm">
            We are a global creative production company specializing in high-quality visual effects for feature films and television.
          </p>
        </header>

        <section aria-labelledby="production-size-title" className="mt-8 sm:mt-10">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#9b6c2d]" aria-hidden="true" />
            <h2 id="production-size-title" className="font-serif text-xl font-bold uppercase sm:text-2xl">
              Jobs of all <span className="text-[#efb64e]">sizes</span>
            </h2>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#9b6c2d]" aria-hidden="true" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="group relative isolate flex min-h-[205px] items-end overflow-hidden rounded-sm border border-[#b8852f]/55 p-5 transition-colors hover:border-[#efb64e] sm:p-7">
              <img src="/images/home1.png" alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050809]/95 via-[#050809]/75 to-[#050809]/25" aria-hidden="true" />
              <div className="max-w-lg">
                <Clapperboard className="mb-3 h-7 w-7 text-[#efb64e]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">Large Projects</h3>
                <p className="mt-2 text-justify max-w-md text-xs leading-relaxed text-white/75 sm:text-sm">
                  Whether you're a large VFX studio or a boutique production company, we help you take on ambitious projects with confidence. Our experienced team handles complex VFX tasks, allowing you to focus on creativity, storytelling, and production. Think of us as an extension of your team, providing reliable support whenever you need it.
                </p>
              </div>
            </article>
            <article className="group relative isolate flex min-h-[205px] items-end overflow-hidden rounded-sm border border-[#b8852f]/55 p-5 transition-colors hover:border-[#efb64e] sm:p-7">
              <img src="/images/home.png" alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050809]/95 via-[#050809]/75 to-[#050809]/25" aria-hidden="true" />
              <div className="max-w-lg">
                <UsersRound className="mb-3 h-7 w-7 text-[#efb64e]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">Small Projects</h3>
                <p className="mt-2 text-justify max-w-md text-xs leading-relaxed text-white/75 sm:text-sm">
                  Our flexible workflows and customized pipelines make projects of every size easy to manage. We work efficiently to deliver high-quality results within tight deadlines, often with overnight turnaround when required. No project is too small, and quality is never compromised.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section aria-labelledby="vfx-services-title" className="mt-10 sm:mt-12">
          <div className="mb-5 text-center" data-aos="fade-up">
            <p className="text-[9px] font-bold uppercase tracking-[0.36em] text-[#edb444] sm:text-[10px]">
              From raw footage to extraordinary realities
            </p>
            <h2 id="vfx-services-title" className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">
              Our VFX <span className="text-[#efb64e]">craft</span>
            </h2>
          </div>
          <div className="grid gap-3 sm:gap-4">
            {orderedServices.map((service) => (
              <ComparisonRow key={service.title} service={service} />
            ))}
          </div>
        </section>

        <section aria-labelledby="services-clients-title" className="mt-10 border-y border-white/10 py-7 sm:mt-12 sm:py-9">
          <div className="text-center" data-aos="fade-up">
            <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#edb444]">
              Trusted by global studios
            </p>
            <h2 id="services-clients-title" className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">
              Our <span className="text-[#efb64e]">clients</span>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-2 items-center gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
            {clients.map(({ name, image }) => (
              <div key={name} className="flex h-12 items-center justify-center">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="max-h-9 max-w-[125px] object-contain opacity-80 grayscale brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="relative isolate mt-8 overflow-hidden rounded-sm border border-white/10 bg-[#050809] sm:mt-10">
          <img
            src="/images/home1.png"
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050809] via-[#050809]/90 to-[#050809]/65" aria-hidden="true" />
          <div className="flex flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
            <div className="max-w-2xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#edb444]">Let&apos;s create</p>
              <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">
                Extraordinary <span className="text-[#efb64e]">together</span>
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                Partner with Feather VFX Studio for world-class visual effects and creative production support.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 bg-gradient-to-r from-[#d99b2c] to-[#f2c25b] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#11100b] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3c15c]"
            >
              Get a quote <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </section>
  </div>
);

export default Services;
