const brands = [
  { name: 'NBCUniversal', image: '/images/logo/logo_1.png' },
  { name: 'HBO', wordmark: true },
  { name: 'Paramount', image: '/images/logo/logo_3.png' },
  { name: '20th Century Fox', image: '/images/logo/logo_fox.png' },
  { name: 'Netflix', image: '/images/logo/logo_5.png' },
];

const BrandsSection = () => (
  <section
    aria-label="Selected studio brands"
    className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#05090a] px-[5%] py-16 sm:py-20 lg:px-[3%] lg:py-24"
  >
    <div
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_15%,rgba(214,160,74,0.09),transparent_48%)]"
      aria-hidden="true"
    />
    <div className="mx-auto max-w-[1800px]">
      <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
        <div className="mb-4 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold-primary)]/70 sm:w-12" />
          <span className="h-1.5 w-1.5 rotate-45 border border-[var(--gold-bright)]" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold-primary)]/70 sm:w-12" />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--gold-bright)] sm:text-xs">
          Trusted by
        </p>
        <h2 className="mt-3 font-serif text-[clamp(2rem,4.5vw,4rem)] font-bold uppercase leading-[1.05] tracking-[0.025em] text-white">
          Studios &amp; <span className="text-[var(--gold-bright)]">storytellers</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          Proud to collaborate with studios and networks shaping stories for audiences everywhere.
        </p>
      </div>

      <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-6">
        {brands.map(({ name, image, wordmark }) => (
          <div
            key={name}
            className="group relative flex min-h-[112px] items-center justify-center overflow-hidden border border-white/[0.12] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(7,12,13,0.7))] px-4 py-5 transition-colors duration-300 hover:border-[var(--gold-primary)]/60 sm:min-h-[148px] sm:px-5"
          >
            <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l border-t border-[var(--gold-primary)]/55" aria-hidden="true" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[var(--gold-primary)]/55" aria-hidden="true" />
            {wordmark ? (
              <span
                role="img"
                aria-label={name}
                className={`relative z-10 flex items-center font-bold uppercase leading-none transition-colors ${
                  'font-sans text-4xl tracking-[-0.08em] text-[var(--gold-bright)] group-hover:text-white sm:text-5xl'
                }`}
              >
                HB<span className="relative">O<span className="absolute inset-[30%] rounded-full border-2 border-[#05090a]" /></span>
              </span>
            ) : (
              <img
                src={image}
                alt={name}
                loading="lazy"
                className={`relative z-10 max-h-12 max-w-[150px] object-contain transition duration-300 sm:max-h-14 lg:max-w-[180px] ${
                  name === '20th Century Fox'
                    ? 'max-h-16 max-w-[190px] opacity-100'
                    : name === 'Netflix'
                      ? 'opacity-100'
                    : 'opacity-70 grayscale brightness-0 invert group-hover:opacity-100 [mix-blend-mode:screen]'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
