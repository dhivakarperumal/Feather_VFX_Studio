import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Feather VFX Studio delivered exceptional quality and creativity. Their attention to detail is outstanding.',
    name: 'Arjun Mehta',
    role: 'Freelancer',
    initials: 'AM',
  },
  {
    quote:
      'A fantastic team to work with. Professional, creative and always delivers beyond expectations.',
    name: 'Priya Sharma',
    role: 'Creative Director',
    initials: 'PS',
  },
  {
    quote:
      'Their VFX and compositing work completely elevated our project. Highly recommended!',
    name: 'Karan Raj',
    role: 'Producer',
    initials: 'KR',
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
      className="relative overflow-hidden border-t border-white/10 bg-[var(--bg-primary)] px-[6%] py-14 sm:px-[5%] sm:py-16 lg:px-[3%]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,160,74,0.08),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-6 flex items-center justify-between gap-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)] sm:text-xs">
              Client stories
            </p>
            <h2
              id="testimonials-heading"
              className="mt-2 font-serif text-2xl font-bold uppercase tracking-[0.02em] text-white sm:text-3xl"
            >
              What our clients say
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[var(--gold-primary)] hover:text-[var(--gold-bright)]"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[var(--gold-primary)] hover:text-[var(--gold-bright)]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleTestimonials.map(({ quote, name, role, initials }) => (
            <article
              key={name}
              className="group relative flex min-h-[150px] gap-4 overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.045),rgba(8,15,18,0.88))] p-4 transition-colors duration-300 hover:border-[var(--gold-primary)]/45 sm:p-5"
            >
              <span
                className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l border-t border-[var(--gold-primary)]/65"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(214,160,74,0.1),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative flex shrink-0 flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--gold-primary)]/55 bg-[radial-gradient(circle_at_35%_25%,rgba(240,168,88,0.5),rgba(31,38,41,0.95)_60%)] text-xs font-bold tracking-[0.08em] text-white shadow-[0_0_14px_rgba(214,160,74,0.16)] sm:h-16 sm:w-16">
                  {initials}
                </div>
                <Quote className="h-4 w-4 text-[var(--gold-primary)]/75" aria-hidden="true" />
              </div>

              <div className="relative flex min-w-0 flex-1 flex-col">
                <p className="text-sm leading-relaxed text-white/75">{quote}</p>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-x-3 gap-y-2 pt-3">
                  <div>
                    <h3 className="text-sm font-bold text-white">{name}</h3>
                    <p className="mt-0.5 text-xs text-[var(--text-secondary)]">{role}</p>
                  </div>
                  <div className="flex gap-0.5 text-[var(--gold-bright)]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
