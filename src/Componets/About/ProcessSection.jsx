const ProcessSection = () => (
  <section
    aria-labelledby="process-heading"
    className="relative isolate overflow-hidden border-y border-[var(--border-color)] bg-white px-[5%] py-14 text-[var(--text-primary)] [--gold-primary:#c9a33a] [--gold-bright:#d6ad4b] sm:py-20 lg:px-[6%] lg:py-24"
  >
    <div className="mx-auto max-w-[1250px]">
      <header
        className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        data-aos="fade-up"
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold-primary)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--gold-bright)] sm:text-xs">
            How We Work
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold-primary)]" />
        </div>

        <h2
          id="process-heading"
          className="font-serif text-3xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl"
        >
          Our <span className="text-[var(--gold-bright)]">Process</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          From the initial project brief to final delivery, our structured
          workflow combines creative precision, quality, and clear
          communication at every stage.
        </p>
        <span className="mx-auto mt-6 block h-[3px] w-16 bg-[var(--gold-bright)]" />
      </header>

      <div
        className="mx-auto hidden max-w-[800px] md:block lg:max-w-[1000px]"
        data-aos="fade-up"
      >
        <img
          src="/images/ourprocess.png"
          alt="Our six-step VFX process: Project Brief, Planning, Production, Quality Control, Client Review, and Final Delivery."
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>

      <div className="mx-auto md:hidden" data-aos="fade-up">
        <img
          src="/images/ourprocess_res.png"
          alt="Our six-step VFX process: Project Brief, Planning, Production, Quality Control, Client Review, and Final Delivery."
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>

      <footer className="mt-14 text-center sm:mt-20" data-aos="fade-up">
        <p className="font-serif text-xl font-bold uppercase sm:text-2xl">
          Your Vision,{' '}
          <span className="text-[var(--gold-bright)]">Our Craft</span>
        </p>
        <p className="mt-3 text-xs leading-6 text-[var(--text-secondary)] sm:text-sm">
          Clear communication. Creative excellence. Reliable delivery.
        </p>
      </footer>
    </div>
  </section>
);

export default ProcessSection;
