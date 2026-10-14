import { lazy, Suspense, useEffect, useState } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { heroSlides } from '../../../data/heroSlides';

const HeroScene = lazy(() => import('./HeroScene'));

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(heroSlides.length - 1);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches);
  const [supportsWebGL, setSupportsWebGL] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const viewportPreference = window.matchMedia('(max-width: 767px)');
    const updateMotion = () => setReducedMotion(motionPreference.matches);
    const updateViewport = () => setIsMobile(viewportPreference.matches);
    const supportCheckFrame = window.requestAnimationFrame(() => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
      setSupportsWebGL(Boolean(context));
      context?.getExtension('WEBGL_lose_context')?.loseContext();
    });
    motionPreference.addEventListener('change', updateMotion);
    viewportPreference.addEventListener('change', updateViewport);

    return () => {
      window.cancelAnimationFrame(supportCheckFrame);
      motionPreference.removeEventListener('change', updateMotion);
      viewportPreference.removeEventListener('change', updateViewport);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setPreviousSlide(activeSlide);
      setActiveSlide((activeSlide + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [activeSlide, reducedMotion]);

  const showSlide = (index) => {
    setPreviousSlide(activeSlide);
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
        <div className="absolute inset-0 z-0" aria-hidden="true" data-parallax>
          {heroSlides.map((item, index) => (
            (index === activeSlide || index === previousSlide) && (
            <img
              key={`${item.image}-${index}`}
              src={item.image}
              alt=""
              fetchPriority={index === activeSlide ? 'high' : 'auto'}
              loading={index === activeSlide ? 'eager' : 'lazy'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
            )
          ))}
        </div>
        {supportsWebGL && (
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] w-full opacity-65 md:w-[72%] md:opacity-85" aria-hidden="true">
            <Suspense fallback={null}>
              <HeroScene reducedMotion={reducedMotion} isMobile={isMobile} />
            </Suspense>
          </div>
        )}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-[var(--bg-primary)]/15"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/15"
          aria-hidden="true"
        />

        <div className="relative z-20 mx-auto flex min-h-[560px] max-w-[1700px] items-center px-[6%] py-20 sm:px-[5%] lg:min-h-[620px] lg:px-[3%]">
          <div className="max-w-2xl" data-hero-copy>
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
                href="/reels#featured-reel"
                className="inline-flex items-center gap-3 px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors hover:text-[var(--gold-bright)]"
              >
                <span className="showreel-play-icon flex h-10 w-10 items-center justify-center rounded-full border border-[var(--text-primary)]/60">
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

        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2" aria-label="Choose hero slide">
          {heroSlides.map((item, index) => (
            <button
              key={`${item.image}-${index}`}
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
