import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FaClapperboard, FaCube, FaLayerGroup, FaWandMagicSparkles } from 'react-icons/fa6';
import { services } from '../../../data/services';

const serviceIcons = {
  WandSparkles: FaWandMagicSparkles,
  Layers3: FaLayerGroup,
  Box: FaCube,
  Camera: FaClapperboard,
};

const ServicesSection = () => {
  return (
    <section aria-label="Our services" className="bg-[#070b0d] px-[6%] py-16 sm:px-[5%] lg:px-[3%]">
      <div className="mx-auto max-w-[1700px]">
        <div className="mb-7 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--gold-bright)]">
              Our Services
            </p>
            <h2 className="mt-4 max-w-[900px] text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4rem]">
              End-to-end VFX Solutions
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center self-start gap-3 border border-[var(--gold-primary)] bg-transparent px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] lg:self-auto"
          >
            View all services <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {services.slice(0, 4).map(({ title, description, image, icon }) => {
            const Icon = serviceIcons[icon];
            return (
            <article
              key={title}
              className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b0d] via-[#070b0d]/55 to-[#070b0d]/15" />

              <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-white/35 bg-white/5 backdrop-blur-sm">
                  <Icon className="text-xl text-[var(--gold-bright)]" aria-hidden="true" />
                </div>

                <h3 className="text-[1.55rem] font-bold uppercase leading-none tracking-[-0.04em] text-white">
                  {title}
                </h3>
                <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-white/75">
                  {description}
                </p>

                <a
                  href="/services"
                  className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--gold-bright)] transition-opacity hover:opacity-90"
                >
                  Learn more <FaArrowRight className="text-[10px]" aria-hidden="true" />
                </a>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
