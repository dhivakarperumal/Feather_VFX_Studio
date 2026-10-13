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
    className="relative overflow-hidden border-y border-white/10 bg-[var(--bg-secondary)] px-[6%] py-14 sm:px-[5%] sm:py-16 lg:px-[3%]"
  >
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-primary)]/50 to-transparent"
      aria-hidden="true"
    />
    <div className="mx-auto max-w-[1500px]">
      <div className="mb-8 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-bright)] sm:text-xs">
          Trusted creative partners
        </p>
        <h2 className="mt-3 text-xl font-bold uppercase tracking-[0.08em] text-[var(--text-primary)] sm:text-2xl">
          Studios we work with
        </h2>
      </div>

      <div className="grid grid-cols-2 items-center gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
        {brands.map(({ name, image }) => (
          <div
            key={name}
            className="group flex min-h-20 items-center justify-center border border-transparent px-4 py-3 transition-colors duration-300 hover:border-[var(--gold-primary)]/35 hover:bg-black/20"
          >
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="max-h-12 max-w-[150px] object-contain opacity-75 grayscale brightness-0 invert transition duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(240,168,88,0.55)] sm:max-h-14"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
