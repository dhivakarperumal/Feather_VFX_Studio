import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import { heroSlides } from '../../../data/heroSlides';

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

    </div>
  );
};

export default Hero;
