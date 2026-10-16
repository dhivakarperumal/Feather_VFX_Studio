import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import { heroCapabilities, heroSlides } from '../../../data/heroSlides';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const nextIndex = (activeSlide + 1) % heroSlides.length;
    const nextSlide = heroSlides[nextIndex];
    const image = new Image();
    let timer;
    let cancelled = false;

    image.onload = () => {
      if (cancelled) {
        return;
      }
      timer = window.setTimeout(() => setActiveSlide(nextIndex), 6000);
    };
    image.onerror = () => {
      if (!cancelled) {
        console.error(`Failed to load hero slide image: ${nextSlide.image}`);
      }
    };
    image.fetchPriority = 'low';
    image.src = nextSlide.image;

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [activeSlide]);

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
          <img
            key={slide.image}
            src={slide.image}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover hero-ken-burns"
          />
        </div>
        <div className="home-hero-copy-overlay" aria-hidden="true" />

        <div className="relative z-20 mx-auto flex min-h-[400px] max-w-[1700px] items-center px-[6%] py-8 sm:px-[5%] lg:px-[3%]">
          {/* key forces remount on slide change → animations replay */}
          <div key={activeSlide} className="max-w-2xl">

            {/* Eyebrow — delay 0 */}
            <div className="hero-reveal-mask mb-5">
              <p className="hero-reveal hero-reveal-d0 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)] sm:text-sm">
                {slide.eyebrow}
              </p>
            </div>

            {/* Title line 1 — delay 1 */}
           
<h1 className="max-w-3xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
  <div className="hero-reveal-mask">
    <span className="hero-reveal hero-reveal-d1 block">
      Your VFX
    </span>
  </div>

  <div className="hero-reveal-mask mt-1">
    <span className="hero-reveal hero-reveal-d2 block text-[var(--gold-bright)]">
      Outsourcing Partner
    </span>
  </div>
</h1>


            {/* Description — delay 3 */}
            <div className="hero-reveal-mask mt-6">
              <p className="hero-reveal hero-reveal-d3 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                {slide.description}
              </p>
            </div>

            {/* Buttons — delay 4 */}
            <div className="hero-reveal-mask mt-8">
              <div className="hero-reveal hero-reveal-d4 flex flex-wrap items-center gap-4">
                <a
                  href="/projects"
                  className="btn-shimmer inline-flex items-center gap-3 bg-[var(--gold-primary)] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]"
                >
                  Explore our work <FaArrowRight aria-hidden="true" />
                </a>
                <a
                  href="/showreel"
                  className="inline-flex items-center gap-3 px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:text-[var(--gold-bright)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60">
                    <FaPlay className="ml-0.5 text-xs" aria-hidden="true" />
                  </span>
                  Watch showreel
                </a>
              </div>
            </div>

            {/* Stats — delay 5 */}
            <div className="hero-reveal-mask mt-12">
              <div className="hero-reveal hero-reveal-d5 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/25 pt-6">
                {slide.highlights.map((highlight) => (
                  <div key={highlight.label}>
                    <p className="text-xl font-bold text-[var(--gold-bright)] sm:text-2xl">{highlight.value}</p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80">
                      {highlight.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* <button
          type="button"
          onClick={() => showSlide(activeSlide - 1)}
          aria-label="Previous hero slide"
          className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:border-[var(--gold-primary)] hover:text-[var(--gold-bright)] sm:left-6"
        >
          <FaArrowLeft aria-hidden="true" />
        </button> */}
        {/* <button
          type="button"
          onClick={() => showSlide(activeSlide + 1)}
          aria-label="Next hero slide"
          className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:border-[var(--gold-primary)] hover:text-[var(--gold-bright)] sm:right-6"
        >
          <FaArrowRight aria-hidden="true" />
        </button> */}

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

      <section className="relative z-20 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur-[2px]">
        <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-0 sm:grid-cols-2 xl:grid-cols-4">
          {heroCapabilities.map(({ title, subtitle, Icon }, index) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group flex items-center justify-center gap-4 border border-[var(--border-color)] px-6 py-7 text-left md:px-8 md:py-8 xl:border-r xl:last:border-r-0"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]/80 transition-colors duration-200 group-hover:border-[var(--gold-primary)] group-hover:text-[var(--gold-bright)]">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[var(--text-primary)] sm:text-[0.85rem]">
                  {title}
                </p>
                <p className="mt-2 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-[var(--text-primary)]/65 sm:text-[0.62rem]">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
