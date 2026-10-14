import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import ModalPortal from '../../../CommonComponents/ModalPortal';

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
  const [selectedIndex, setSelectedIndex] = useState(null);
  const visibleProjects = activeFilter === 'All'
    ? orderedProjects
    : orderedProjects.filter((project) => project.category === activeFilter);
  const portraitProjects = visibleProjects.filter((project) => project.orientation === 'portrait');
  const landscapeProjects = visibleProjects.filter((project) => project.orientation === 'landscape');
  const mobileColumns = balanceIntoColumns(portraitProjects, 2);
  const desktopColumns = balanceIntoColumns(portraitProjects, 3);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => (current + 1) % visibleProjects.length);
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => (current - 1 + visibleProjects.length) % visibleProjects.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, visibleProjects.length]);

  const renderProjectCard = ({ title, image, heightRatio }, landscape = false) => (
    <article
      key={title}
      style={{ aspectRatio: `${1 / heightRatio}` }}
      className={`group relative w-full overflow-hidden rounded-md border border-[var(--gold-primary)]/65 bg-[#080d0f] transition-colors duration-300 hover:border-[var(--gold-bright)] motion-reduce:transition-none ${
        landscape ? '' : 'flex-1 basis-auto'
      }`}
    >
      <button
        type="button"
        className="absolute inset-0 block h-full w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[var(--gold-bright)]"
        aria-label={`View ${title} image full screen`}
        onClick={() => setSelectedIndex(visibleProjects.findIndex((project) => project.image === image))}
      >
        <img
          className={`h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none ${
            landscape ? 'p-1 sm:p-2' : ''
          }`}
          src={image}
          alt={`${title} project artwork`}
          loading="lazy"
        />
      </button>
    </article>
  );

  const renderColumns = (columns) => (
    <div className="grid grid-cols-2 items-stretch gap-2.5 sm:grid-cols-3 sm:gap-3">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex h-full min-w-0 flex-col gap-2.5 sm:gap-3">
          {column.map((project) => renderProjectCard(project))}
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
        {landscapeProjects.length > 0 && (
          <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:mt-3 sm:grid-cols-2 sm:gap-3">
            {landscapeProjects.map((project) => renderProjectCard(project, true))}
          </div>
        )}
        {selectedIndex !== null && visibleProjects[selectedIndex] && (
          <ModalPortal>
            <div
              className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={`Project image ${selectedIndex + 1} of ${visibleProjects.length}`}
              onClick={(event) => {
                if (event.target === event.currentTarget) setSelectedIndex(null);
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/50 text-xl text-white transition hover:border-[var(--gold-bright)] hover:text-[var(--gold-bright)] sm:right-7 sm:top-7"
                aria-label="Close image viewer"
              >
                <FaTimes />
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndex((selectedIndex - 1 + visibleProjects.length) % visibleProjects.length)}
                className="absolute left-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/50 text-lg text-white transition hover:border-[var(--gold-bright)] hover:text-[var(--gold-bright)] sm:left-6 sm:h-14 sm:w-14"
                aria-label="View previous image"
              >
                <FaArrowLeft />
              </button>
              <img
                src={visibleProjects[selectedIndex].image}
                alt={`${visibleProjects[selectedIndex].title} project artwork`}
                className="max-h-[calc(100vh-2rem)] max-w-[calc(100vw-6rem)] select-none object-contain sm:max-h-[calc(100vh-4rem)] sm:max-w-[calc(100vw-12rem)]"
              />
              <button
                type="button"
                onClick={() => setSelectedIndex((selectedIndex + 1) % visibleProjects.length)}
                className="absolute right-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/50 text-lg text-white transition hover:border-[var(--gold-bright)] hover:text-[var(--gold-bright)] sm:right-6 sm:h-14 sm:w-14"
                aria-label="View next image"
              >
                <FaArrowRight />
              </button>
            </div>
          </ModalPortal>
        )}

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
