import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const filters = ['All', 'VFX & CGI', 'Compositing', 'Environments', 'Color Grading'];

const imageOrder = [0, 20, 6, 1, 7, 2, 21, 8, 3, 9, 4, 10, 5, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const projectDetails = [
  {
    title: 'Spider-Man: Far From Home',
    category: 'VFX & CGI',
  },
  {
    title: 'Fast & Furious Presents: Hobbs & Shaw',
    category: 'Compositing',
  },
  {
    title: 'Ant-Man and the Wasp',
    category: 'VFX & CGI',
  },
  {
    title: 'The Fate of the Furious',
    category: 'Compositing',
  },
  {
    title: 'Captain Marvel',
    category: 'Environments',
  },
  {
    title: 'Mission: Impossible – Fallout',
    category: 'Color Grading',
  },
  { title: 'Deadpool 2', category: 'VFX & CGI' },
  { title: 'Rampage', category: 'Environments' },
  { title: 'Truth and Justice', category: 'Color Grading' },
  { title: 'G.I. Joe: Retaliation', category: 'Compositing' },
  { title: 'Constantine', category: 'VFX & CGI' },
  { title: 'Chronicle', category: 'Environments' },
  { title: 'The Predator', category: 'Color Grading' },
  { title: 'Wonder Woman', category: 'Compositing' },
  { title: 'Featured Project 15', category: 'VFX & CGI' },
  { title: 'Featured Project 16', category: 'Environments' },
  { title: 'Featured Project 17', category: 'Color Grading' },
  { title: 'Featured Project 18', category: 'Compositing' },
  { title: 'Featured Project 19', category: 'VFX & CGI' },
  { title: 'Featured Project 20', category: 'Environments' },
  { title: 'Featured Project 21', category: 'Color Grading' },
  { title: 'Featured Project 22', category: 'Compositing' },
];

const imageHeightRatios = [
  1.427, 1.434, 1.484, 1.48, 1.462, 1.483, 1.371, 1.461, 1.36, 1.5, 1.481,
  1.5, 1.5, 1.481, 1.493, 1.471, 1.499, 1.481, 1.417, 1.448, 0.518, 0.563,
];

const projects = projectDetails.map((project, index) => ({
  ...project,
  image: `/images/projects/featured/${index + 1}.${index === 1 ? 'png' : 'jpg'}`,
  orientation: index >= 20 ? 'landscape' : 'portrait',
  heightRatio: imageHeightRatios[index],
}));

const orderedProjects = imageOrder.map((imageIndex) => {
  const project = projects[imageIndex];

  return project;
});

const balanceIntoColumns = (items, columnCount) => {
  const columns = Array.from({ length: columnCount }, () => []);
  const columnHeights = Array(columnCount).fill(0);

  items.forEach((project) => {
    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortestColumn].push(project);
    columnHeights[shortestColumn] += project.heightRatio;
  });

  return columns;
};

const FeaturedProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All'
    ? orderedProjects
    : orderedProjects.filter((project) => project.category === activeFilter);
  const mobileColumns = balanceIntoColumns(visibleProjects, 2);
  const desktopColumns = balanceIntoColumns(visibleProjects, 3);

  const renderColumns = (columns) => (
    <div className="grid grid-cols-2 items-stretch gap-2.5 sm:grid-cols-3 sm:gap-3">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex h-full min-w-0 flex-col gap-2.5 sm:gap-3">
          {column.map(({ title, category, image, heightRatio }) => (
            <article
              key={title}
              style={{ aspectRatio: `${1 / heightRatio}` }}
              className="group relative w-full flex-1 basis-auto overflow-hidden rounded-md border border-[var(--gold-primary)]/65 bg-[#080d0f] transition-colors duration-300 hover:border-[var(--gold-bright)] motion-reduce:transition-none"
            >
              <img
                className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none"
                src={image}
                alt={`${title} project artwork`}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050a0b]/90 via-transparent to-transparent" aria-hidden="true" />
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
      ))}
    </div>
  );

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

        <div className="mt-5 sm:hidden">{renderColumns(mobileColumns)}</div>
        <div className="mt-5 hidden sm:block">{renderColumns(desktopColumns)}</div>

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
