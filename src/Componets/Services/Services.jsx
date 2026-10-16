import { ArrowRight, Clapperboard, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../CommonComponents/PageHeader';
import VFXServiceCard from '../../CommonComponents/VFXServiceCard';
import { services } from '../../data/services';

const serviceOrder = ['Rotoscoping', 'Paint & Prep', 'Cosmetic VFX', 'Matchmove', 'Compositing'];
const orderedServices = serviceOrder.map((title) => services.find((service) => service.title === title));

const clients = [
  { name: 'NBCUniversal', image: '/images/logo/logo_1.png' },
  { name: 'HBO', image: '/images/logo/logo_2.png' },
  { name: 'Paramount', image: '/images/logo/logo_3.png' },
  { name: '20th Century Fox', image: '/images/logo/logo_4.png' },
  { name: 'Netflix', image: '/images/logo/logo_5.png' },
];

const Services = () => (
  <div className="overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
    <PageHeader
      eyebrow="Creative Visual Solutions"
      title={<>Our <span className="text-[var(--gold-primary)]">Services</span></>}
      titleSize="text-2xl sm:text-3xl md:text-4xl"
      breadcrumbLabel="Services"
      background="/images/home.png"
      align="left"
    >
      <Link
        to="/contact"
        className="mt-5 inline-flex min-h-10 items-center gap-3 border border-[var(--gold-primary)] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--gold-primary)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-primary)]"
      >
        Discuss your project <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </PageHeader>

    <section className="relative isolate overflow-hidden bg-[var(--bg-primary)] px-[5%] pb-12 pt-8 sm:pb-16 sm:pt-10">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_28%,rgba(184,134,11,0.07),transparent_58%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1320px]">
        <header className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="text-[9px] font-bold uppercase tracking-[0.36em] text-[var(--gold-primary)] sm:text-[10px]">
            What we do
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">
            Creative VFX for <span className="text-[var(--gold-primary)]">every production</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-[15px]">
            We are a global creative production company specializing in high-quality visual effects for feature films and television.
          </p>
        </header>

        <section aria-labelledby="production-size-title" className="mt-8 sm:mt-10">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--border-color)]" aria-hidden="true" />
            <h2 id="production-size-title" className="font-serif text-xl font-bold uppercase sm:text-2xl">
              Projects of All <span className="text-[var(--gold-primary)]">Sizes</span>
            </h2>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--border-color)]" aria-hidden="true" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Large Projects Card */}
            <article className="group flex flex-col rounded-sm border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 transition-colors duration-300 hover:border-[var(--gold-primary)] sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
                  <Clapperboard className="h-5 w-5 text-[var(--gold-primary)]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] sm:text-2xl">Large Projects</h3>
                  <span className="mt-0.5 block h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
                </div>
              </div>
              <p className="text-sm text-justify leading-relaxed text-[var(--text-secondary)] sm:text-[15px]">
                Whether you&apos;re a large VFX studio or a boutique production company, we help you take on ambitious projects with confidence. Our experienced team handles complex VFX tasks, allowing you to focus on creativity, storytelling, and production. Think of us as an extension of your team, providing reliable support whenever you need it.
              </p>
            </article>

            {/* Small Projects Card */}
            <article className="group flex flex-col rounded-sm border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 transition-colors duration-300 hover:border-[var(--gold-primary)] sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
                  <UsersRound className="h-5 w-5 text-[var(--gold-primary)]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] sm:text-2xl">Small Projects</h3>
                  <span className="mt-0.5 block h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
                </div>
              </div>
              <p className="text-sm text-justify leading-relaxed text-[var(--text-secondary)] sm:text-[15px]">
                Our flexible workflows and customized pipelines make projects of every size easy to manage. We work efficiently to deliver high-quality results within tight deadlines, often with overnight turnaround when required. No project is too small, and quality is never compromised.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="vfx-services-title" className="mt-10 sm:mt-12">
          <div className="mb-5 text-center" data-aos="fade-up">
            <p className="text-[9px] font-bold uppercase tracking-[0.36em] text-[var(--gold-primary)] sm:text-[10px]">
              From raw footage to extraordinary realities
            </p>
            <h2 id="vfx-services-title" className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">
              Our VFX <span className="text-[var(--gold-primary)]">craft</span>
            </h2>
          </div>
          <div className="grid gap-3 sm:gap-4">
            {orderedServices.map((service) => (
              <VFXServiceCard key={service.title} service={service} layout="grid" />
            ))}
          </div>
        </section>

        <section aria-labelledby="services-clients-title" className="mt-10 border-y border-[var(--border-color)] py-7 sm:mt-12 sm:py-9">
          <div className="text-center" data-aos="fade-up">
            <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-[var(--gold-primary)]">
              Trusted by global studios
            </p>
            <h2 id="services-clients-title" className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">
              Our <span className="text-[var(--gold-primary)]">clients</span>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-2 items-center gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
            {clients.map(({ name, image }) => (
              <div key={name} className="flex h-12 items-center justify-center">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="max-h-9 max-w-[125px] object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="relative isolate mt-8 overflow-hidden rounded-sm border border-[var(--border-color)] bg-[var(--bg-secondary)] sm:mt-10">
          <img
            src="/images/home1.png"
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-secondary)]/90 to-[var(--bg-secondary)]/65" aria-hidden="true" />
          <div className="flex flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
            <div className="max-w-2xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-[var(--gold-primary)]">Let&apos;s </p>
              <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">
                Work <span className="text-[var(--gold-primary)]">Together</span>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-[15px]">
                Have a project in mind? Get in touch with our team to discuss your requirements and discover how our VFX expertise can support your production.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[var(--bg-primary)] transition-all hover:-translate-y-0.5 hover:bg-[var(--gold-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-primary)]"
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
