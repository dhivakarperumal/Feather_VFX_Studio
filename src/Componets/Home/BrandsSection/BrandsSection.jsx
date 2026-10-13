const brands = [
  { name: 'NBCUniversal', image: '/images/logo/logo_1.png' },
  { name: 'HBO', image: '/images/logo/logo_2.png' },
  { name: 'Paramount', image: '/images/logo/logo_3.png' },
  { name: '20th Century Fox', image: '/images/logo/logo_4.png' },
  { name: 'Netflix', image: '/images/logo/logo_5.png' },
];

const BrandsSection = () => (
  <section
    aria-label="Selected studio brands"
    className="relative isolate overflow-hidden border-y border-white/10 bg-[var(--bg-primary)] px-[6%] py-16 sm:px-[5%] sm:py-20 lg:px-[3%] lg:py-24"
  >
    <div
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,160,74,0.12),transparent_58%)]"
      aria-hidden="true"
    />
    <div className="mx-auto max-w-[1500px]">
      <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
        <div className="mb-4 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold-primary)]" />
          <span className="h-1.5 w-1.5 rotate-45 border border-[var(--gold-bright)]" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold-primary)]" />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--gold-bright)] sm:text-xs">
          The company we keep
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-[0.03em] text-white sm:text-4xl lg:text-5xl">
          Creative <span className="text-[var(--gold-bright)]">partners</span>
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          Proud to collaborate with studios and networks shaping stories for audiences everywhere.
        </p>
      </div>

      <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
        {brands.map(({ name, image }) => (
          <div
            key={name}
            className="group relative flex min-h-[112px] items-center justify-center overflow-hidden border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(5,10,11,0.55))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-primary)]/65 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_22px_rgba(214,160,74,0.08)] sm:min-h-[132px] sm:px-5"
          >
            <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-[var(--gold-primary)]/70 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[var(--gold-primary)]/70 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,160,74,0.12),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="relative z-10 max-h-12 max-w-[150px] object-contain opacity-70 grayscale brightness-0 invert transition duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(240,168,88,0.5)] sm:max-h-14"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12" aria-hidden="true">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--gold-primary)]/40" />
        <span className="h-1 w-1 rounded-full bg-[var(--gold-primary)]/80" />
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--gold-primary)]/40" />
      </div>
    </div>
  </section>
);

export default BrandsSection;
