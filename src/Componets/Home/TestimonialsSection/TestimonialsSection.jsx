import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Quote, UserRound, UserRoundPen } from 'lucide-react';
import { FaMale, FaFemale } from "react-icons/fa";

const testimonials = [
  {
    quote:
      'Feather VFX Studio delivered exceptional quality and creativity. Their attention to detail is outstanding.',
    name: 'Arjun Mehta',
    role: 'Freelancer',
    gender: 'male',
    avatar: '/images/male.png',
  },
  {
    quote:
      'A fantastic team to work with. Professional, creative and always delivers beyond expectations.',
    name: 'Priya Sharma',
    role: 'Creative Director',
    gender: 'female',
    avatar: '/images/female.png',
  },
  {
    quote:
      'Their VFX and compositing work completely elevated our project. Highly recommended!',
    name: 'Karan Raj',
    role: 'Producer',
    gender: 'male',
    avatar: '/images/male.png',
  },
  {
    quote:
      'Absolutely world-class service. The CGI renders they produced were indistinguishable from reality. Our audience was blown away.',
    name: 'Meera Nair',
    role: 'Film Director',
    gender: 'female',
    avatar: '/images/female.png',
  },
  {
    quote:
      'From concept to final delivery, the Feather VFX team was meticulous, responsive and incredibly talented.',
    name: 'Rohan Desai',
    role: 'Ad Film Maker',
    gender: 'male',
    avatar: '/images/male.png',
  },
  {
    quote:
      'We partnered with Feather VFX for our OTT series and the quality of work surpassed every studio we have worked with before.',
    name: 'Sneha Pillai',
    role: 'OTT Content Head',
    gender: 'female',
    avatar: '/images/female.png',
  },
  {
    quote:
      'The compositing and color grading Feather VFX did for our commercial was nothing short of breathtaking.',
    name: 'Vikram Sood',
    role: 'Brand Manager',
    gender: 'male',
    avatar: '/images/male.png',
  },
  {
    quote:
      'Highly professional studio with an eye for cinematic detail. They turned our rough footage into a visual masterpiece.',
    name: 'Ananya Bose',
    role: 'Cinematographer',
    gender: 'female',
    avatar: '/images/female.png',
  },
];

const TestimonialsSection = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[var(--bg-secondary)] px-[6%] py-16 text-[var(--text-primary)] sm:px-[5%] sm:py-20 lg:px-[3%] lg:py-14"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/testimonial.png')" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-8 max-w-xl sm:mb-10" data-aos="fade-up" data-aos-offset="60">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--text-secondary)] sm:text-xs">
            Client stories
            <span className="h-px w-16 bg-gradient-to-r from-[var(--gold-primary)] to-transparent" aria-hidden="true" />
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-4xl font-medium uppercase leading-[0.94] tracking-[0.015em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
          >
            What our
            <span className="block text-[var(--gold-bright)]">clients say</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Trusted by creative minds across the world. Here&apos;s what our clients feel about working with Feather VFX Studio.
          </p>
        </div>

        <style>{`
          .testimonials-swiper .swiper-wrapper {
            align-items: stretch;
          }
          .testimonials-swiper .swiper-slide {
            height: auto;
          }
        `}</style>

        <Swiper
          className="testimonials-swiper"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {testimonials.map(({ quote, name, role, avatar, avatarPosition, gender }) => (
            <SwiperSlide key={name}>
              <article
                className="group relative flex h-full flex-col overflow-hidden border border-[var(--gold-primary)]/30 bg-[var(--bg-primary)] shadow-[0_6px_24px_rgba(0,0,0,0.07)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--gold-primary)]/60 hover:shadow-[0_0_24px_rgba(184,134,11,0.1)]"
                style={{
                  clipPath:
                    'polygon(0 22px, 22px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)',
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--gold-primary)]/[0.03] via-transparent to-[var(--gold-primary)]/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute left-0 top-0 z-10 h-7 w-7 bg-[var(--gold-primary)] border-l-2 border-t-2 border-[var(--gold-bright)] shadow-[-2px_-2px_14px_rgba(184,134,11,0.6)]"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute bottom-0 right-0 z-10 h-7 w-7 bg-[var(--gold-primary)] border-b-2 border-r-2 border-[var(--gold-bright)] shadow-[2px_2px_14px_rgba(184,134,11,0.6)]"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex h-full flex-col gap-5 p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-[68px] w-[68px] shrink-0 sm:h-[76px] sm:w-[76px]">
                      {/* Gold circular frame */}
                      <div
                        className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-[var(--gold-bright)] via-[var(--gold-primary)]/50 to-[var(--gold-bright)]/20"
                        aria-hidden="true"
                      />

                      {/* Male/Female profile image */}
                      <img
                        src={avatar}
                        alt={`${name} profile`}
                        className="relative z-10 h-full w-full rounded-full border-2 border-[var(--bg-primary)] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="relative flex-1 pl-7">
                    <Quote className="absolute -left-1 top-0 h-6 w-6 rotate-180 fill-[var(--gold-primary)]/40 text-[var(--gold-primary)]/40" aria-hidden="true" />
                    <p className="line-clamp-4 text-sm leading-[1.7] text-[var(--text-secondary)] sm:text-[0.94rem]">{quote}</p>
                    <Quote className="mt-3 ml-auto block h-5 w-5 fill-[var(--gold-primary)]/25 text-[var(--gold-primary)]/25" aria-hidden="true" />
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-[var(--gold-primary)]/30 via-[var(--gold-primary)]/15 to-transparent" aria-hidden="true" />

                  <div className="pl-1">
                    <h3 className="font-serif text-lg font-semibold uppercase tracking-[0.02em] text-[var(--text-primary)] sm:text-xl">
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
