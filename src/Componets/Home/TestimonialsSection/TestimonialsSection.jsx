import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

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
];

const TestimonialsSection = () => {
  const [firstTestimonial, setFirstTestimonial] = useState(0);
  const visibleTestimonials = testimonials.map(
    (_, index) => testimonials[(firstTestimonial + index) % testimonials.length],
  );

  const showPrevious = () => {
    setFirstTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setFirstTestimonial((current) => (current + 1) % testimonials.length);
  };

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

        <div className="relative">
          {/* Prev button */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonials"
            className="absolute -left-3 top-1/2 z-20 hidden h-12 w-12 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-[var(--gold-primary)]/75 bg-[rgba(3,9,12,0.8)] text-white shadow-[0_0_16px_rgba(214,160,74,0.16)] transition-all hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] lg:flex"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Cards grid */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleTestimonials.map(({ quote, name, role, avatar, avatarPosition }) => (
              <article
                key={name}
                className="group relative overflow-hidden border border-[var(--gold-primary)]/55 bg-[rgba(3,9,12,0.82)] shadow-[0_12px_36px_rgba(0,0,0,0.32)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--gold-bright)]/75 hover:shadow-[0_0_32px_rgba(214,160,74,0.2)]"
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

                <div className="relative z-10 flex flex-col gap-5 p-5 sm:p-6">
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
                  <div className="relative pl-7">
                    <Quote
                      className="absolute -left-1 top-0 h-6 w-6 rotate-180 fill-[var(--gold-primary)]/55 text-[var(--gold-primary)]/55"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-[1.7] text-white/85 sm:text-[0.94rem]">{quote}</p>
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
            ))}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonials"
            className="absolute -right-3 top-1/2 z-20 hidden h-12 w-12 translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-[var(--gold-primary)]/75 bg-[rgba(3,9,12,0.8)] text-white shadow-[0_0_16px_rgba(214,160,74,0.16)] transition-all hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] lg:flex"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-7 flex justify-center gap-2" aria-label="Choose testimonial set">
          {testimonials.map(({ name }, index) => (
            <button
              key={name}
              type="button"
              onClick={() => setFirstTestimonial(index)}
              aria-label={`Show testimonials starting with ${name}`}
              aria-current={firstTestimonial === index ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                firstTestimonial === index
                  ? 'w-7 bg-[var(--gold-bright)] shadow-[0_0_9px_rgba(240,168,88,0.65)]'
                  : 'w-5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
