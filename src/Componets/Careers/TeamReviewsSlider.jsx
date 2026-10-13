import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import reviews from '../../data/teamReviews';

function ReviewCard({ review }) {
  return (
    <article className="flex h-full min-h-[150px] items-center gap-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 sm:p-5">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/50 bg-[var(--bg-primary)] font-serif text-sm font-bold text-[var(--gold-primary)]"
        aria-hidden="true"
      >
        {review.initials}
      </div>
      <div className="min-w-0">
        <FaQuoteLeft className="mb-2 text-sm text-[var(--gold-primary)]" aria-hidden="true" />
        <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
          “{review.quote}”
        </p>
        <p className="mt-3 text-[10px] font-bold">{review.name}</p>
        <p className="mt-0.5 text-[9px] text-[var(--text-secondary)]">{review.role}</p>
      </div>
    </article>
  );
}

function TeamReviewsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleReviews = [
    reviews[activeIndex],
    reviews[(activeIndex + 1) % reviews.length],
  ];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + reviews.length) % reviews.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % reviews.length);
  };

  return (
    <section
      aria-labelledby="team-reviews-title"
      className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]"
    >
      <div className="mx-auto grid max-w-[1700px] gap-5 px-[6%] py-7 sm:px-[5%] lg:grid-cols-[0.55fr_1.45fr] lg:items-center lg:px-[3%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Team review slider</p>
          <h2 id="team-reviews-title" className="mt-1 font-serif text-2xl font-bold uppercase">
            Meet our artists
          </h2>
          <p className="mt-2 text-[10px] leading-relaxed text-[var(--gold-primary)]">
            Demo content: these sample reviews are fictional placeholders. Replace with approved team testimonials before publishing.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <div className="grid gap-3 sm:grid-cols-2">
            {visibleReviews.map((review, index) => (
              <div key={review.name} className={index === 1 ? 'hidden sm:block' : ''}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2">
            <div className="mr-1 text-[10px] text-[var(--text-secondary)]" aria-live="polite">
              Reviews {activeIndex + 1} and {((activeIndex + 1) % reviews.length) + 1} of {reviews.length}
            </div>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous team review"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-color)] text-xs transition-colors hover:border-[var(--gold-primary)] hover:text-[var(--gold-primary)]"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next team review"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-color)] text-xs transition-colors hover:border-[var(--gold-primary)] hover:text-[var(--gold-primary)]"
            >
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamReviewsSlider;
