import {
  ArrowRight,
  Clapperboard,
  Gem,
  Lightbulb,
  Settings,
  UsersRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../CommonComponents/PageHeader';
import VFXServiceCard from '../../CommonComponents/VFXServiceCard';
import { services } from '../../data/services';

const expertise = [
  {
    icon: Lightbulb,
    title: 'Creative solutions',
    description: 'Combining art and technology to bring your vision to life.',
  },
  {
    icon: Settings,
    title: 'Advanced technology',
    description: 'State-of-the-art tools and proven pipelines.',
  },
  {
    icon: UsersRound,
    title: 'Experienced VFX artists',
    description: 'A talented team with global production experience.',
  },
  {
    icon: Gem,
    title: 'High quality delivery',
    description: 'Pixel-perfect results, on time, every time.',
  },
];

const clients = [
  { name: 'NBCUniversal', image: '/images/logo/logo_1.png' },
  { name: 'HBO', image: '/images/logo/logo_2.png' },
  { name: 'Paramount', image: '/images/logo/logo_3.png' },
  { name: '20th Century Fox', image: '/images/logo/logo_4.png' },
  { name: 'Netflix', image: '/images/logo/logo_5.png' },
];

const serviceOrder = ['Rotoscoping', 'Paint & Prep', 'Cosmetic VFX', 'Matchmove', 'Compositing'];
const orderedServices = serviceOrder.map((title) => services.find((service) => service.title === title));

const Services = () => (
  <div className="overflow-hidden bg-[#050809] text-white">
    <PageHeader
      eyebrow="Our expertise"
      title={
        <>
          Ser<span className="text-[var(--gold-primary)]">vices</span>
        </>
      }
      description="We create innovative and complex sequences for high-end television and feature films. VFX is our passion, and we bring pioneering technology and top-notch creativity into play, creating visuals that exceed expectations."
      background="/images/home.png"
      align="left"
      showBreadcrumb={false}
      className="min-h-[390px] sm:min-h-[440px] lg:min-h-[500px]"
    >
      <Link
        to="/contact"
        className="mt-6 inline-flex min-h-10 items-center gap-3 border border-[#e8ae43] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f3c15c] transition-colors hover:bg-[#e8ae43] hover:text-[#080a0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3c15c]"
      >
        Discuss your project <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </PageHeader>

    <section id="services" aria-labelledby="vfx-services-title" className="relative isolate overflow-hidden bg-[#050809] px-[5%] py-12 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,rgba(191,128,31,0.09),transparent_62%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9" data-aos="fade-up">
          <p className="text-[9px] font-bold uppercase tracking-[0.36em] text-[#edb444] sm:text-[10px]">
            What we do
          </p>
          <h2 id="vfx-services-title" className="mt-1 font-serif text-3xl font-bold uppercase sm:text-4xl">
            Our VFX <span className="text-[#efb64e]">services</span>
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-white/65 sm:text-sm">
            From clean-up to complex compositing, we offer end-to-end VFX services for feature
            films, TV series, commercials, and more.
          </p>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {orderedServices.map((service) => (
            <VFXServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>

      <section aria-label="Our expertise" className="relative border-b border-white/10 bg-[#060a0b]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 px-[5%] py-7 sm:grid-cols-4 sm:py-8 lg:px-[7%]" data-aos="fade-up">
        {expertise.map(({ icon: Icon, title, description }, index) => (
          <article
            key={title}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className={`flex flex-col items-center px-3 py-3 text-center ${
              index > 0 ? 'sm:border-l sm:border-white/10' : ''
            }`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-[#e3aa42] text-[#efb64e] shadow-[0_0_22px_rgba(227,170,66,0.18)]">
              <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h2 className="mt-3 max-w-[150px] text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-white sm:text-xs">
              {title}
            </h2>
            <p className="mt-1.5 max-w-[190px] text-[10px] leading-relaxed text-white/65 sm:text-xs">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section aria-labelledby="production-support-title" className="relative isolate overflow-hidden border-b border-white/10">
      <img
        src="/images/home1.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[#030607]/90" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-[6%] py-10 sm:px-[5%] sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-[4%]">
        <div className="relative min-h-[200px] overflow-hidden border border-white/15 sm:min-h-[280px]" data-aos="fade-right">
          <img
            src="/images/home.png"
            alt="Artists collaborating on a visual effects production"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" aria-hidden="true" />
        </div>
        <div data-aos="fade-left" data-aos-delay="100">
          <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#edb444] sm:text-[10px]">
            Production support
          </p>
          <h2
            id="production-support-title"
            className="mt-2 font-serif text-3xl font-bold uppercase leading-tight sm:text-4xl"
          >
            Jobs of all <span className="text-[#efb64e]">sizes</span>
          </h2>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-white/70 sm:text-sm">
            Flexible VFX support for every production, from focused shot work to complex,
            multi-sequence projects.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <article className="border-l border-[#e2a83f] pl-4">
              <div className="flex items-center gap-2.5">
                <Clapperboard className="h-5 w-5 text-[#efb64e]" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold text-white">Big jobs</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                When a production needs a dedicated VFX partner, our artists and producers can
                support large-scale, complex work with a reliable pipeline.
              </p>
            </article>
            <article className="border-l border-[#e2a83f] pl-4">
              <div className="flex items-center gap-2.5">
                <UsersRound className="h-5 w-5 text-[#efb64e]" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold text-white">Small jobs</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                We welcome focused projects too, bringing the same attention to detail, quality,
                and dependable delivery to every shot.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="services-clients-title" className="border-y border-white/10 bg-[#070a0b] px-[5%] py-9 sm:py-11">
      <div className="mx-auto max-w-[1300px]">
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
      </div>
    </section>

    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#050809]">
      <img
        src="/images/home1.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050809] via-[#050809]/90 to-[#050809]/65" aria-hidden="true" />
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-[6%] py-9 sm:px-[5%] sm:py-12 lg:flex-row lg:items-center lg:justify-between">
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
);

export default Services;
