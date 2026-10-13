import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Feather VFX Studio delivered exceptional quality and creativity. Their attention to detail is outstanding.',
    name: 'Arjun Mehta',
    role: 'Freelancer',
    initials: 'AM',
    image: '/images/heroimages/1.png',
    portraitPosition: 'left',
  },
  {
    quote:
      'A fantastic team to work with. Professional, creative and always delivers beyond expectations.',
    name: 'Priya Sharma',
    role: 'Creative Director',
    initials: 'PS',
    image: '/images/heroimages/3.png',
    portraitPosition: 'center',
  },
  {
    quote:
      'Their VFX and compositing work completely elevated our project. Highly recommended!',
    name: 'Karan Raj',
    role: 'Producer',
    initials: 'KR',
    image: '/images/heroimages/2.png',
    portraitPosition: 'left',
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
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/whyusbg.png')" }}
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
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonials"
            className="absolute -left-3 top-1/2 z-20 hidden h-12 w-12 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-[var(--gold-primary)]/75 bg-[rgba(3,9,12,0.8)] text-white shadow-[0_0_16px_rgba(214,160,74,0.16)] transition-all hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] lg:flex"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleTestimonials.map(({ quote, name, role, initials, image, portraitPosition }) => (
              <article
                key={name}
                className="group relative min-h-[315px] overflow-hidden border border-[var(--gold-primary)]/65 bg-[rgba(3,9,12,0.78)] p-px shadow-[0_12px_36px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[var(--gold-bright)] hover:shadow-[0_0_28px_rgba(214,160,74,0.22)] sm:min-h-[330px]"
                style={{
                  clipPath: 'polygon(0 22px, 22px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)',
                }}
              >
                <div
                  className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${image}')`, backgroundPosition: portraitPosition }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,12,0.94)_0%,rgba(3,9,12,0.74)_58%,rgba(3,9,12,0.35)_100%)]" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,9,12,0.78)] via-transparent to-[rgba(3,9,12,0.12)]" aria-hidden="true" />
                <span className="pointer-events-none absolute left-0 top-0 z-10 h-7 w-7 border-l-2 border-t-2 border-[var(--gold-bright)] shadow-[-3px_-3px_14px_rgba(240,168,88,0.55)]" aria-hidden="true" />
                <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-7 w-7 border-b-2 border-r-2 border-[var(--gold-bright)] shadow-[3px_3px_14px_rgba(240,168,88,0.55)]" aria-hidden="true" />

                <div className="relative z-10 flex h-full min-h-[313px] flex-col p-5 sm:min-h-[328px] sm:p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-2 border-[var(--gold-bright)] bg-[radial-gradient(circle_at_35%_25%,rgba(240,168,88,0.72),rgba(19,23,24,0.97)_55%)] text-sm font-bold tracking-[0.12em] text-white shadow-[0_0_15px_rgba(240,168,88,0.45)] sm:h-[76px] sm:w-[76px]">
                      {initials}
                    </div>
                    <div className="flex gap-1 text-[var(--gold-bright)]" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-4 pl-7">
                    <Quote className="absolute -left-1 -top-1 h-7 w-7 rotate-180 fill-[var(--gold-primary)]/50 text-[var(--gold-primary)]/50" aria-hidden="true" />
                    <p className="text-sm leading-[1.65] text-white/85 sm:text-[0.95rem]">{quote}</p>
                  </div>

                  <div className="mt-auto pl-7 pt-5">
                    <h3 className="font-serif text-lg font-semibold uppercase tracking-[0.02em] text-white sm:text-xl">
                      {name}
                    </h3>
                    <p className="mt-1 inline-block border-b border-[var(--gold-primary)]/60 pb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-bright)]">
                      {role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonials"
            className="absolute -right-3 top-1/2 z-20 hidden h-12 w-12 translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-[var(--gold-primary)]/75 bg-[rgba(3,9,12,0.8)] text-white shadow-[0_0_16px_rgba(214,160,74,0.16)] transition-all hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] lg:flex"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

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
