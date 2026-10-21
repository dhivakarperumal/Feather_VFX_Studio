import { useEffect, useState } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
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

  const slide = heroSlides[activeSlide];

  return (
    <div>
      <section
        id="home"
        aria-label="Feather VFX Studio"
        className="relative isolate overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)] sm:border-b-0"
      >
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {heroSlides.map((item, index) => (
            <img
              key={item.image}
              src={item.image}
              alt=""
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${activeSlide === index ? 'opacity-100 hero-ken-burns' : 'opacity-0'
                }`}
            />
          ))}
        </div>
        <div className="relative z-20 mx-auto flex min-h-[620px] max-w-[1700px] items-end justify-center px-[5%] pb-8 pt-12 sm:min-h-[780px] sm:px-[5%] sm:pb-10 lg:min-h-[820px] lg:px-[3%]">
          {/* key forces remount on slide change → animations replay */}
          <div key={activeSlide} className="mx-auto w-full max-w-4xl text-center">

            <h1 className="w-full text-[clamp(0.8rem,3.5vw,1.5rem)] font-medium leading-tight tracking-[0.12em] text-white sm:text-xl md:text-2xl">
              <span className="hero-reveal hero-reveal-d1">
                Your VFX Outsourcing Partner
              </span>
            </h1>

            <div className="hero-reveal-mask mt-6">
              <p className={`hero-reveal hero-reveal-d3 hero-headline-outline mx-auto max-w-3xl font-bold leading-[1.05] tracking-tight text-white ${slide.singleLine
                ? 'whitespace-nowrap text-[clamp(0.8rem,5vw,2.75rem)] uppercase'
                : slide.compactMessage
                  ? 'text-[clamp(1rem,3.5vw,1.5rem)] sm:text-2xl md:text-3xl'
                  : 'uppercase text-[clamp(1.75rem,6vw,3rem)] sm:text-5xl md:text-6xl'}`}>
                {slide.message}
              </p>
              {slide.supportingMessage && (
                <p className={`hero-reveal hero-reveal-d3 mx-auto mt-3 max-w-3xl font-bold uppercase leading-[1.05] tracking-tight text-white ${slide.compactSupportingMessage
                  ? 'text-[clamp(1rem,4vw,1.75rem)] sm:text-2xl md:text-3xl'
                  : 'text-[clamp(1.75rem,6vw,3rem)] sm:text-5xl md:text-6xl'
                  }`}>
                  {slide.supportingMessage}
                </p>
              )}
            </div>

            {/* Buttons — delay 4 */}
            <div className="hero-reveal-mask mt-6 w-full sm:mt-8">
              <div className="hero-reveal hero-reveal-d4 flex w-full flex-row flex-nowrap items-center justify-center gap-1 sm:gap-4">
                <a
                  href="/projects"
                  className="btn-shimmer inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap bg-[var(--gold-primary)] px-3 py-3 text-[10px] font-bold uppercase tracking-[0.04em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)] sm:flex-none sm:gap-3 sm:px-6 sm:text-xs sm:tracking-[0.12em]"
                >
                  Explore our work <FaArrowRight aria-hidden="true" />
                </a>
                <a
                  href="/showreel"
                  className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap px-2 py-3 text-[10px] font-semibold uppercase tracking-[0.04em] text-white transition-colors hover:text-[var(--gold-bright)] sm:flex-none sm:gap-3 sm:px-3 sm:text-xs sm:tracking-[0.12em]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/60 sm:h-10 sm:w-10">
                    <FaPlay className="ml-0.5 text-xs" aria-hidden="true" />
                  </span>
                  Watch showreel
                </a>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section className="relative z-20 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/95">
        <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-0 sm:grid-cols-2 xl:grid-cols-4">
          {heroCapabilities.map(({ title, subtitle, Icon }, index) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group flex items-center justify-start gap-4 border border-[var(--border-color)] px-6 py-7 text-left md:px-8 md:py-8 xl:justify-center xl:border-r xl:last:border-r-0"
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
