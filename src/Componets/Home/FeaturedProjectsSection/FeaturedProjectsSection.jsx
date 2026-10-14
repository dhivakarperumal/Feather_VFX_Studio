import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const filters = ['All', 'VFX & CGI', 'Compositing', 'Environments', 'Color Grading'];

const projects = [
  {
    title: 'Spider-Man: Far From Home',
    category: 'VFX & CGI',
    image: '/images/projects/featured/1.jpg',
    layout: 'lg:row-span-2',
  },
  {
    title: 'Fast & Furious Presents: Hobbs & Shaw',
    category: 'Compositing',
    image: '/images/projects/featured/2.png',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Ant-Man and the Wasp',
    category: 'VFX & CGI',
    image: '/images/projects/featured/3.jpg',
  },
  {
    title: 'The Fate of the Furious',
    category: 'Compositing',
    image: '/images/projects/featured/4.jpg',
  },
  {
    title: 'Captain Marvel',
    category: 'Environments',
    image: '/images/projects/featured/5.jpg',
  },
  {
    title: 'Mission: Impossible – Fallout',
    category: 'Color Grading',
    image: '/images/projects/featured/6.jpg',
  },
];

const FeaturedProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);
  const isFeaturedLayout = activeFilter === 'All';

  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-title"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,160,74,0.11),transparent_46%),#050a0b] px-[3%] py-16 sm:py-20 lg:py-14"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,10,11,0.45),#050a0b_90%),url('/images/background/bg_14.jpg')] bg-cover bg-[center_42%] opacity-25"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-[1500px]">
        <header className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 text-[var(--text-primary)]">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[var(--gold-primary)]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--gold-bright)]">Our Work</p>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[var(--gold-primary)]" />
          </div>
          <h2 id="featured-projects-title" className="mt-2 font-serif text-4xl font-bold uppercase leading-none text-[var(--text-primary)] sm:text-5xl lg:text-7xl">
            Featured <span className="text-[var(--gold-bright)]">Projects</span>
          </h2>
          <p className="mt-3 text-sm text-[var(--text-primary)]/75">
            Bringing imagination to life through stunning visuals and world-class VFX.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Filter projects by discipline">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`min-h-8 cursor-pointer rounded-full border px-4 py-1.5 text-[11px] transition-colors focus-visible:border-[var(--gold-primary)] focus-visible:text-[var(--gold-bright)] ${
                  activeFilter === filter
                    ? 'border-[var(--gold-bright)] bg-[var(--gold-bright)] text-[var(--bg-primary)]'
                    : 'border-white/25 bg-black/50 text-white/85 hover:border-[var(--gold-primary)] hover:text-[var(--gold-bright)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        <div className={`mt-5 grid grid-cols-3 gap-2.5 max-sm:grid-cols-2 max-sm:gap-2 ${
          isFeaturedLayout ? 'lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(13rem,16rem))]' : ''
        }`}>
          {visibleProjects.map(({ title, category, image, layout = '' }) => (
            <article
              key={title}
              className={`group relative min-h-[17rem] overflow-hidden rounded-md border border-[var(--gold-primary)]/75 bg-[#101719] shadow-[0_0_0_1px_rgba(255,255,255,0.035)] max-sm:min-h-56 ${
                isFeaturedLayout ? layout : ''
              } ${
                isFeaturedLayout && layout === 'lg:row-span-2' ? 'max-sm:col-span-2 max-sm:min-h-[23rem]' : ''
              } ${
                isFeaturedLayout && layout === 'lg:col-span-2' ? 'max-sm:col-span-2 max-sm:min-h-[15rem]' : ''
              }`}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                src={image}
                alt={`${title} project artwork`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0b]/90 via-[#050a0b]/15 to-transparent transition-colors group-hover:bg-black/10" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 right-14 z-10 max-sm:bottom-3 max-sm:left-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[var(--gold-bright)]">{category}</p>
                <h3 className="mt-1 font-serif text-base font-medium uppercase leading-tight text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.65)] max-sm:text-sm">
                  {title}
                </h3>
              </div>
              <span
                className="absolute bottom-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-[var(--gold-primary)] text-xs text-white transition-colors group-hover:bg-[var(--gold-primary)] group-hover:text-[var(--bg-primary)] max-sm:bottom-2 max-sm:right-2 max-sm:h-8 max-sm:w-8 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <FaArrowRight className="-rotate-45" />
              </span>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-8">
          <span className="h-px w-[min(15vw,7rem)] bg-gradient-to-r from-transparent to-[var(--gold-primary)]/80" aria-hidden="true" />
          <a
            href="/contact"
            className="inline-flex min-h-11 items-center gap-2.5 border border-[var(--gold-primary)] px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] focus-visible:bg-[var(--gold-primary)] focus-visible:text-[var(--bg-primary)] motion-reduce:transition-none"
          >
            Start a project <FaArrowRight aria-hidden="true" />
          </a>
          <span className="h-px w-[min(15vw,7rem)] bg-gradient-to-l from-transparent to-[var(--gold-primary)]/80" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
