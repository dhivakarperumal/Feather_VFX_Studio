import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import { FaClapperboard, FaCube, FaLayerGroup, FaWandMagicSparkles } from 'react-icons/fa6';
import { heroSlides } from '../../../data/heroSlides';

const services = [
  {
    title: 'VFX & CGI',
    description: 'From concept to final shot, we create stunning visual effects and photoreal CGI.',
    image: '/images/services/COS_OUT.jpg',
    icon: FaWandMagicSparkles,
  },
  {
    title: 'COMPOSITING',
    description: 'Seamless integration of real and digital elements for flawless, cinematic results.',
    image: '/images/services/COMP_OUT.jpg',
    icon: FaLayerGroup,
  },
  {
    title: '3D ENVIRONMENTS',
    description: 'Detailed, immersive worlds crafted with precision and creative vision.',
    image: '/images/services/MM_OUT.jpg',
    icon: FaCube,
  },
  {
    title: 'COLOR & FINISHING',
    description: 'Bring your story to life with professional color grading and finishing.',
    image: '/images/services/PP-OUT.jpg',
    icon: FaClapperboard,
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (index) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[activeSlide];

  return (
    <div>
      <section
        id="home"
        aria-label="Feather VFX Studio"
        className="relative isolate overflow-hidden bg-[var(--bg-primary)]"
      >
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {heroSlides.map((item, index) => (
            <img
              key={item.image}
              src={item.image}
              alt=""
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-[var(--bg-primary)]/15"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/15"
          aria-hidden="true"
        />

        <div className="relative z-20 mx-auto flex min-h-[560px] max-w-[1700px] items-center px-[6%] py-20 sm:px-[5%] lg:min-h-[620px] lg:px-[3%]">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)] sm:text-sm">
              {slide.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.title}
              <span className="mt-1 block text-[var(--gold-bright)]">{slide.highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-primary)]/80 sm:text-lg">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/#projects"
                className="inline-flex items-center gap-3 bg-[var(--gold-primary)] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]"
              >
                Explore our work <FaArrowRight aria-hidden="true" />
              </a>
              <a
                href="/#showreel"
                className="inline-flex items-center gap-3 px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors hover:text-[var(--gold-bright)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--text-primary)]/60">
                  <FaPlay className="ml-0.5 text-xs" aria-hidden="true" />
                </span>
                Watch showreel
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-6">
              {slide.highlights.map((highlight) => (
                <div key={highlight.label}>
                  <p className="text-xl font-bold text-[var(--gold-bright)] sm:text-2xl">{highlight.value}</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-primary)]/75">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => showSlide(activeSlide - 1)}
          aria-label="Previous hero slide"
          className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:border-[var(--gold-primary)] hover:text-[var(--gold-bright)] sm:left-6"
        >
          <FaArrowLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => showSlide(activeSlide + 1)}
          aria-label="Next hero slide"
          className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:border-[var(--gold-primary)] hover:text-[var(--gold-bright)] sm:right-6"
        >
          <FaArrowRight aria-hidden="true" />
        </button>

        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2" aria-label="Choose hero slide">
          {heroSlides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => showSlide(index)}
              aria-label={`Show slide ${index + 1}: ${item.title} ${item.highlight}`}
              aria-current={activeSlide === index ? 'true' : undefined}
              className={`h-2 rounded-full transition-all ${
                activeSlide === index
                  ? 'w-8 bg-[var(--gold-primary)]'
                  : 'w-2 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

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

            <button
              type="button"
              className="inline-flex items-center self-start gap-3 border border-[var(--gold-primary)] bg-transparent px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] lg:self-auto"
            >
              View all services <FaArrowRight aria-hidden="true" />
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {services.map(({ title, description, image, icon: Icon }) => (
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
                    href="/#services"
                    className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--gold-bright)] transition-opacity hover:opacity-90"
                  >
                    Learn more <FaArrowRight className="text-[10px]" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
