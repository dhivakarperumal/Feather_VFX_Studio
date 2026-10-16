import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const brands = [
  { name: 'NBCUniversal', image: '/images/logo/logo_1.png' },
  { name: 'HBO', wordmark: true },
  { name: 'Paramount', image: '/images/logo/logo_3.png' },
  { name: '20th Century Fox', image: '/images/logo/logo_fox.png' },
  { name: 'Netflix', image: '/images/logo/logo_5.png' },
];

const BrandsSection = () => {
  const carouselRef = useRef(null);

  return (
  <section
    aria-label="Selected studio brands"
    role="region"
    aria-roledescription="carousel"
    className="relative isolate overflow-hidden border-y border-[var(--border-color)] bg-[var(--bg-secondary)] px-[5%] py-16 sm:py-20 lg:px-[3%] lg:py-24"
  >
    <div
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_15%,rgba(184,134,11,0.06),transparent_48%)]"
      aria-hidden="true"
    />
    <div className="mx-auto max-w-[1800px]">
      <div className="mb-10 flex flex-col items-center text-center sm:mb-14" data-aos="fade-up" data-aos-offset="60">
        <div className="mb-4 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold-primary)]/70 sm:w-12" />
          <span className="h-1.5 w-1.5 rotate-45 border border-[var(--gold-bright)]" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold-primary)]/70 sm:w-12" />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--gold-bright)] sm:text-xs">
          Trusted by
        </p>
        <h2 className="mt-3 font-serif text-[clamp(2rem,4.5vw,4rem)] font-bold uppercase leading-[1.05] tracking-[0.025em] text-[var(--text-primary)]">
          Studios &amp; <span className="text-[var(--gold-bright)]">storytellers</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          Proud to collaborate with studios and networks shaping stories for audiences everywhere.
        </p>
      </div>

      <div className="relative">
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              carouselRef.current = swiper;
            }}
            modules={[Autoplay]}
            slidesPerView={1.15}
            spaceBetween={12}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            loop
            speed={650}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            aria-label="Selected studio brands"
            className="overflow-hidden"
          >
            {brands.map(({ name, image, wordmark }, index) => (
              <SwiperSlide key={name}>
                <div
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${brands.length}: ${name}`}
                  className="group relative flex min-h-[112px] items-center justify-center overflow-hidden border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-5 transition-colors duration-300 hover:border-[var(--gold-primary)]/60 sm:min-h-[148px] sm:px-5"
                >
                  <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l border-t border-[var(--gold-primary)]/40" aria-hidden="true" />
                  <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[var(--gold-primary)]/40" aria-hidden="true" />
                  {wordmark ? (
                    <span
                      role="img"
                      aria-label={name}
                      className="relative z-10 flex items-center font-sans text-4xl font-bold uppercase leading-none tracking-[-0.08em] text-[var(--gold-bright)] transition-colors group-hover:text-[var(--gold-primary)] sm:text-5xl"
                    >
                      HB<span className="relative">O<span className="absolute inset-[30%] rounded-full border-2 border-[var(--bg-primary)]" /></span>
                    </span>
                  ) : (
                    <span
                      className={`relative z-10 flex items-center justify-center ${
                        ['NBCUniversal', 'Paramount'].includes(name)
                          ? 'brand-logo-backplate rounded-md px-2 py-1'
                          : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={name}
                        loading="lazy"
                        className={
                          name === '20th Century Fox'
                            ? 'max-h-24 max-w-[210px] object-contain'
                            : 'max-h-12 max-w-[150px] object-contain sm:max-h-14 lg:max-w-[180px]'
                        }
                      />
                    </span>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </section>
  );
};

export default BrandsSection;
