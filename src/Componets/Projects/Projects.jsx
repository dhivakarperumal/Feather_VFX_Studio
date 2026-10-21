import { useEffect, useMemo, useState } from 'react';
import {
  BriefcaseBusiness,
  Clapperboard,
  Grid2X2,
  Star,
} from 'lucide-react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import ModalPortal from '../../CommonComponents/ModalPortal';
import ProjectGalleryCard from '../../CommonComponents/ProjectGalleryCard';
import projectData from '../../data/projects.json';
import {
  keepFirstCarterProject,
  prioritizeFeaturedProjects,
} from '../../data/projectOrdering';

const categoryIcons = {
  All: Grid2X2,
  Commercials: BriefcaseBusiness,
  Episodes: Clapperboard,
  Featured: Star,
};

const PAGE_SIZE = 6;

const balanceIntoColumns = (items, columnCount) => {
  const columns = Array.from({ length: columnCount }, () => []);
  const heights = Array(columnCount).fill(0);

  items.forEach((project) => {
    const shortestColumn = heights.indexOf(Math.min(...heights));

    columns[shortestColumn].push(project);
    heights[shortestColumn] += project.heightRatio || 1;
  });

  return columns;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const projects = useMemo(() => {
    const filteredProjects = activeFilter === 'All'
      ? prioritizeFeaturedProjects(projectData.projects)
      : prioritizeFeaturedProjects(projectData.projects.filter(
        (project) => project.collection === activeFilter
      ));

    return keepFirstCarterProject(filteredProjects);
  }, [activeFilter]);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  const currentProjects = projects.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const portraitProjects = currentProjects.filter(
    (project) => project.orientation === 'portrait'
  );

  const landscapeProjects = currentProjects.filter(
    (project) => project.orientation === 'landscape'
  );

  const mobileColumns = balanceIntoColumns(portraitProjects, 2);
  const desktopColumns = balanceIntoColumns(portraitProjects, 3);

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    setSelectedIndex(null);
  };

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, page)));
    setSelectedIndex(null);
  };

  const openProject = (project) => {
    const index = projects.findIndex(
      (item) => item.image === project.image
    );

    setSelectedIndex(index);
  };

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setSelectedIndex(
          (index) => (index + 1) % projects.length
        );
      }

      if (event.key === 'ArrowLeft') {
        setSelectedIndex(
          (index) => (index - 1 + projects.length) % projects.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, projects.length]);

  const renderColumns = (columns) => (
    <div className="grid grid-cols-2 items-stretch gap-2.5 sm:grid-cols-3 sm:gap-3">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="flex h-full min-w-0 flex-col gap-2.5 sm:gap-3"
        >
          {column.map((project) => (
            <ProjectGalleryCard
              key={project.title}
              project={project}
              onSelect={() => openProject(project)}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative isolate overflow-hidden bg-white px-[3%] py-16 text-gray-900 sm:py-20"
    >
      {/* Background */}
     

      <div className="mx-auto w-full max-w-[1500px]">
        {/* Section heading */}
        <header
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-offset="60"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[var(--gold-primary)]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--gold-bright)]">
              Our Work
            </p>

            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[var(--gold-primary)]" />
          </div>

          <h1
            id="projects-title"
            className="mt-2 font-serif text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-7xl"
          >
            Featured{' '}
            <span className="text-[var(--gold-bright)]">
              Projects
            </span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)]">
            Explore a selection of our previous work and discover how our visual effects expertise can support your next production. From detailed shot work to complex visual sequences, we are committed to delivering results that meet your creative requirements.
          </p>

          {/* Category filters */}
          <nav
            className="mt-6 flex flex-wrap justify-center gap-2"
            aria-label="Filter projects by category"
          >
            {projectData.filters.map((filter) => {
              const Icon = categoryIcons[filter] || Star;
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => changeFilter(filter)}
                  className={`inline-flex min-h-9 items-center gap-2 rounded-full border px-4 py-2 text-[11px] transition-colors duration-300 ${isActive
                    ? 'border-[var(--gold-bright)] bg-[var(--gold-bright)] text-[var(--bg-primary)]'
                    : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--gold-primary)] hover:text-[var(--gold-bright)]'
                    }`}
                >
                  <Icon size={14} aria-hidden="true" />
                  {filter}
                </button>
              );
            })}
          </nav>
        </header>

        {/* Projects gallery */}
        {/* Projects gallery: six projects per page */}
        {currentProjects.length > 0 ? (
          <>
            <div
              key={`${activeFilter}-${currentPage}`}
              className="mt-7 grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 sm:gap-4"
            >
              {currentProjects.map((project) => (
                <ProjectGalleryCard
                  key={project.title}
                  project={project}
                  fixedSize
                  onSelect={() => openProject(project)}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                className="mt-9 flex flex-wrap items-center justify-center gap-2"
                aria-label="Project pagination"
              >
                <button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border-color)] disabled:opacity-40"
                >
                  <FaArrowLeft />
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      aria-current={currentPage === page ? 'page' : undefined}
                      className={`grid h-10 min-w-10 place-items-center rounded-full border px-3 text-xs font-semibold ${currentPage === page
                        ? 'border-[var(--gold-bright)] bg-[var(--gold-bright)] text-[var(--bg-primary)]'
                        : 'border-[var(--border-color)] text-[var(--text-primary)]'
                        }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border-color)] disabled:opacity-40"
                >
                  <FaArrowRight />
                </button>

                <span className="ml-2 text-[10px] tracking-wider text-[var(--text-secondary)]">
                  {Math.min((currentPage - 1) * PAGE_SIZE + 1, projects.length)}
                  –
                  {Math.min(currentPage * PAGE_SIZE, projects.length)} OF{' '}
                  {projects.length}
                </span>
              </nav>
            )}
          </>
        ) : (
          <p className="py-16 text-center text-sm text-[var(--text-secondary)]">
            No projects found in this category.
          </p>
        )}

        {/* Full-screen image viewer */}
        {selectedIndex !== null && projects[selectedIndex] && (
          <ModalPortal>
            <div
              className="fixed inset-0 z-[999999] flex items-center justify-center bg-[rgba(0,0,0,0.95)] p-3 backdrop-blur-sm sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={`Project image ${selectedIndex + 1} of ${projects.length}`}
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setSelectedIndex(null);
                }
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
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + projects.length) %
                    projects.length
                  )
                }
                className="absolute left-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/50 text-lg text-white transition hover:border-[var(--gold-bright)] hover:text-[var(--gold-bright)] sm:left-6 sm:h-14 sm:w-14"
                aria-label="Previous image"
              >
                <FaArrowLeft />
              </button>

              <img
                src={projects[selectedIndex].image}
                alt={`${projects[selectedIndex].title} project artwork`}
                className="max-h-[calc(100vh-2rem)] max-w-[calc(100vw-6rem)] select-none object-contain sm:max-h-[calc(100vh-4rem)] sm:max-w-[calc(100vw-12rem)]"
              />

              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex + 1) % projects.length
                  )
                }
                className="absolute right-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/50 text-lg text-white transition hover:border-[var(--gold-bright)] hover:text-[var(--gold-bright)] sm:right-6 sm:h-14 sm:w-14"
                aria-label="Next image"
              >
                <FaArrowRight />
              </button>
            </div>
          </ModalPortal>
        )}
      </div>
    </section>
  );
};

export default Projects;