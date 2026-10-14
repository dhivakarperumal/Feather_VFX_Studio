import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Feather VFX Studio delivered exceptional quality and creativity. Their attention to detail is outstanding.',
    name: 'Arjun Mehta',
    role: 'Freelancer',
    avatar: '/images/heroimages/1.png',
    avatarPosition: 'center top',
  },
  {
    quote:
      'A fantastic team to work with. Professional, creative and always delivers beyond expectations.',
    name: 'Priya Sharma',
    role: 'Creative Director',
    avatar: '/images/heroimages/3.png',
    avatarPosition: 'center top',
  },
  {
    quote:
      'Their VFX and compositing work completely elevated our project. Highly recommended!',
    name: 'Karan Raj',
    role: 'Producer',
    avatar: '/images/heroimages/2.png',
    avatarPosition: 'center top',
  },
  {
    quote:
      'Absolutely world-class service. The CGI renders they produced were indistinguishable from reality. Our audience was blown away.',
    name: 'Meera Nair',
    role: 'Film Director',
    avatar: '/images/heroimages/1.png',
    avatarPosition: 'center top',
  },
  {
    quote:
      'From concept to final delivery, the Feather VFX team was meticulous, responsive and incredibly talented.',
    name: 'Rohan Desai',
    role: 'Ad Film Maker',
    avatar: '/images/heroimages/2.png',
    avatarPosition: 'center top',
  },
  {
    quote:
      'We partnered with Feather VFX for our OTT series and the quality of work surpassed every studio we have worked with before.',
    name: 'Sneha Pillai',
    role: 'OTT Content Head',
    avatar: '/images/heroimages/3.png',
    avatarPosition: 'center top',
  },
  {
    quote:
      'The compositing and color grading Feather VFX did for our commercial was nothing short of breathtaking.',
    name: 'Vikram Sood',
    role: 'Brand Manager',
    avatar: '/images/heroimages/1.png',
    avatarPosition: 'center top',
  },
  {
    quote:
      'Highly professional studio with an eye for cinematic detail. They turned our rough footage into a visual masterpiece.',
    name: 'Ananya Bose',
    role: 'Cinematographer',
    avatar: '/images/heroimages/2.png',
    avatarPosition: 'center top',
  },
];

const TestimonialsSection = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[var(--bg-primary)] px-[6%] py-16 text-[var(--text-primary)] sm:px-[5%] sm:py-20 lg:px-[3%] lg:py-24"
    >
      {/* Section background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/testimonial.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,10,13,0.92)_0%,rgba(4,10,13,0.65)_48%,rgba(4,10,13,0.2)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Section header */}
        <div className="mb-8 max-w-xl sm:mb-10">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--text-primary)]/85 sm:text-xs">
            Client stories
            <span className="h-px w-16 bg-gradient-to-r from-[var(--gold-primary)] to-transparent" aria-hidden="true" />
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-4xl font-medium uppercase leading-[0.94] tracking-[0.015em] text-white sm:text-5xl lg:text-6xl"
          >
            What our
            <span className="block text-[var(--gold-bright)]">clients say</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
            Trusted by creative minds across the world. Here&apos;s what our clients feel about working with Feather VFX Studio.
          </p>
        </div>

        {/* Swiper slider — 3 cards visible, auto-slides one by one */}
        <style>{`
          .testimonials-swiper .swiper-pagination-bullet {
            width: 20px;
            height: 6px;
            border-radius: 9999px;
            background: rgba(255,255,255,0.3);
            opacity: 1;
            transition: width 0.3s, background 0.3s, box-shadow 0.3s;
          }
          .testimonials-swiper .swiper-pagination-bullet-active {
            width: 28px;
            background: var(--gold-bright);
            box-shadow: 0 0 9px rgba(240,168,88,0.65);
          }
          .testimonials-swiper .swiper-pagination {
            position: relative;
            margin-top: 28px;
          }
        `}</style>

        <Swiper
          className="testimonials-swiper"
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {testimonials.map(({ quote, name, role, avatar, avatarPosition }) => (
            <SwiperSlide key={name} className="h-auto">
              <article
                className="group relative flex h-full flex-col overflow-hidden border border-[var(--gold-primary)]/55 bg-[rgba(3,9,12,0.82)] shadow-[0_12px_36px_rgba(0,0,0,0.32)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--gold-bright)]/75 hover:shadow-[0_0_32px_rgba(214,160,74,0.2)]"
                style={{
                  clipPath:
                    'polygon(0 22px, 22px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)',
                }}
              >
                {/* Subtle hover inner glow */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--gold-primary)]/[0.04] via-transparent to-[var(--gold-primary)]/[0.07] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Corner accents */}
                <span
                  className="pointer-events-none absolute left-0 top-0 z-10 h-7 w-7 border-l-2 border-t-2 border-[var(--gold-bright)] shadow-[-3px_-3px_14px_rgba(240,168,88,0.55)]"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute bottom-0 right-0 z-10 h-7 w-7 border-b-2 border-r-2 border-[var(--gold-bright)] shadow-[3px_3px_14px_rgba(240,168,88,0.55)]"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex h-full flex-col gap-5 p-5 sm:p-6">
                  {/* Avatar + Stars row */}
                  <div className="flex items-center gap-4">
                    {/* Circular avatar with gold ring */}
                    <div className="relative h-[68px] w-[68px] shrink-0 sm:h-[76px] sm:w-[76px]">
                      <div
                        className="pointer-events-none absolute -inset-[3px] rounded-full bg-gradient-to-br from-[var(--gold-bright)] via-[var(--gold-primary)]/50 to-[var(--gold-bright)]/20"
                        aria-hidden="true"
                      />
                      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--gold-bright)] shadow-[0_0_18px_rgba(240,168,88,0.45)]">
                        <img
                          src={avatar}
                          alt={name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ objectPosition: avatarPosition }}
                        />
                      </div>
                    </div>

                    {/* Stars */}
                    <div
                      className="flex gap-[3px] text-[var(--gold-bright)]"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className="h-[15px] w-[15px] fill-current drop-shadow-[0_0_4px_rgba(240,168,88,0.7)] sm:h-[17px] sm:w-[17px]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <div className="relative flex-1 pl-7">
                    <Quote
                      className="absolute -left-1 top-0 h-6 w-6 rotate-180 fill-[var(--gold-primary)]/55 text-[var(--gold-primary)]/55"
                      aria-hidden="true"
                    />
                    <p className="line-clamp-4 text-sm leading-[1.7] text-white/85 sm:text-[0.94rem]">{quote}</p>
                    <Quote
                      className="mt-3 ml-auto block h-5 w-5 fill-[var(--gold-primary)]/30 text-[var(--gold-primary)]/30"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px w-full bg-gradient-to-r from-[var(--gold-primary)]/45 via-[var(--gold-primary)]/20 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Name + Role */}
                  <div className="pl-1">
                    <h3 className="font-serif text-lg font-semibold uppercase tracking-[0.02em] text-white sm:text-xl">
                      {name}
                    </h3>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-bright)]/80">
                      {role}
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
