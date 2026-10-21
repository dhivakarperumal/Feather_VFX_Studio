import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ModalPortal from '../../../CommonComponents/ModalPortal';
import PageHeader from '../../../CommonComponents/PageHeader';
import ProjectGalleryCard from '../../../CommonComponents/ProjectGalleryCard';
import projectData from '../../../data/projects.json';
import { prioritizeFeaturedProjects } from '../../../data/projectOrdering';

const { filters } = projectData;
const projects = prioritizeFeaturedProjects(projectData.projects);

const homePageSize = 6;

const FeaturedProjectsSection = ({ homePage = false }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activePage, setActivePage] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.collection === activeFilter);
  const pageCount = Math.ceil(visibleProjects.length / homePageSize);
  const galleryProjects = homePage
    ? visibleProjects.slice(activePage * homePageSize, (activePage + 1) * homePageSize)
    : visibleProjects;

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

  return (
    <>
      {!homePage && (
        <PageHeader
          eyebrow="Visual Effects Showcase"
          title={<>Our <span className="text-[var(--gold-bright)]">Projects</span></>}
          titleSize="text-2xl sm:text-3xl md:text-4xl"
          breadcrumbLabel="Projects"
          background="/images/pageheader/project.png"
          align="left"
        >
          <Link
            to="/showreel"
            className="mt-6 inline-flex min-h-11 items-center gap-4 border border-[var(--gold-bright)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-bright)] hover:text-[#17191b] focus-visible:bg-[var(--gold-bright)] focus-visible:text-[#17191b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore Projects
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current">
              <FaPlay className="ml-0.5 text-[9px]" aria-hidden="true" />
            </span>
          </Link>
          <Link
            to="/showreel"
            className="mt-5 hidden w-fit items-center gap-3 text-left text-white md:absolute md:bottom-8 md:right-[5%] md:mt-0 md:flex"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-black/35 transition-colors hover:border-[var(--gold-bright)] hover:text-[var(--gold-bright)]">
              <FaPlay className="ml-0.5 text-xs" aria-hidden="true" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em]">Featured reel</span>
              <span className="text-[9px] uppercase tracking-[0.12em] text-white/75">Play video</span>
            </span>
          </Link>
        </PageHeader>
      )}
      <section
        id="projects"
        aria-labelledby="featured-projects-title"
        className={`relative isolate overflow-hidden bg-white px-[3%] ${homePage ? 'py-12 sm:py-16' : 'py-16 sm:py-20 lg:py-14'}`}
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <header className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-offset="60">
            <div className="flex items-center gap-4 text-[var(--text-primary)]">
              <span className="h-px w-14 bg-gradient-to-r from-transparent to-[var(--gold-primary)]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--gold-bright)]">Our Work</p>
              <span className="h-px w-14 bg-gradient-to-l from-transparent to-[var(--gold-primary)]" />
            </div>
            <h2 id="featured-projects-title" className="mt-2 font-serif text-4xl font-bold uppercase leading-none text-[var(--text-primary)] sm:text-5xl lg:text-7xl">
              Featured <span className="text-[var(--gold-bright)]">Projects</span>
            </h2>
            <p className="mx-auto mt-3 max-w-4xl text-[17px] text-[var(--text-secondary)]">
              Explore a selection of our previous work and discover how our visual effects expertise can support your next production. From detailed shot work to complex visual sequences, we are committed to delivering results that meet your creative requirements.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Filter projects by discipline" data-aos="fade-up" data-aos-delay="100" data-aos-offset="60">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setActivePage(0);
                    setSelectedIndex(null);
                  }}
                  className={`min-h-8 cursor-pointer rounded-full border px-4 py-1.5 text-[11px] transition-colors focus-visible:border-[var(--gold-primary)] focus-visible:text-[var(--gold-bright)] ${
                    activeFilter === filter
                      ? 'border-[var(--gold-bright)] bg-[var(--gold-bright)] text-[var(--bg-primary)]'
                      : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--gold-primary)] hover:text-[var(--gold-bright)]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </header>

        <div className="mt-5 grid grid-cols-2 items-stretch gap-2.5 sm:grid-cols-3 sm:gap-3">
          {galleryProjects.map((project) => (
            <ProjectGalleryCard
              key={project.title}
              project={project}
              landscape={project.orientation === 'landscape'}
              onSelect={() => setSelectedIndex(visibleProjects.findIndex((item) => item.image === project.image))}
            />
          ))}
        </div>
        {homePage && pageCount > 1 && (
          <nav className="mt-6 flex flex-wrap items-center justify-center gap-2" aria-label="Project pages">
            <button
              type="button"
              onClick={() => setActivePage((page) => Math.max(0, page - 1))}
              disabled={activePage === 0}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition enabled:hover:border-[var(--gold-primary)] enabled:hover:bg-[var(--gold-primary)] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous project page"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>
            {Array.from({ length: pageCount }, (_, pageIndex) => (
              <button
                key={`project-page-${pageIndex}`}
                type="button"
                onClick={() => setActivePage(pageIndex)}
                aria-label={`Show project page ${pageIndex + 1}`}
                aria-current={activePage === pageIndex ? 'page' : undefined}
                className={`grid h-9 min-w-9 place-items-center rounded-full border px-2 text-xs font-semibold transition ${
                  activePage === pageIndex
                    ? 'border-[var(--gold-primary)] bg-[var(--gold-primary)] text-white'
                    : 'border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--gold-primary)]'
                }`}
              >
                {pageIndex + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setActivePage((page) => Math.min(pageCount - 1, page + 1))}
              disabled={activePage >= pageCount - 1}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition enabled:hover:border-[var(--gold-primary)] enabled:hover:bg-[var(--gold-primary)] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next project page"
            >
              <FaArrowRight aria-hidden="true" />
            </button>
            <span className="ml-2 text-[10px] font-semibold tracking-[0.14em] text-[var(--text-secondary)]">
              {activePage * homePageSize + 1}–{Math.min((activePage + 1) * homePageSize, visibleProjects.length)} OF {visibleProjects.length}
            </span>
          </nav>
        )}
        {selectedIndex !== null && visibleProjects[selectedIndex] && (
          <ModalPortal>
            <div
              className="fixed inset-0 z-[999999] flex items-center justify-center bg-[rgba(0,0,0,0.95)] p-3 backdrop-blur-sm sm:p-8"
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

        <div className="mt-7 flex items-center justify-center gap-8" data-aos="fade-up" data-aos-offset="60">
          <span className="h-px w-[min(15vw,7rem)] bg-gradient-to-r from-transparent to-[var(--gold-primary)]/80" aria-hidden="true" />
          <a
            href={homePage ? '/projects' : '/contact'}
            className="btn-shimmer inline-flex min-h-11 items-center gap-2.5 border border-[var(--gold-primary)] px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-primary)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] focus-visible:bg-[var(--gold-primary)] focus-visible:text-[var(--bg-primary)] motion-reduce:transition-none"
          >
            {homePage ? 'View all projects' : 'Start a project'} <FaArrowRight aria-hidden="true" />
          </a>
          <span className="h-px w-[min(15vw,7rem)] bg-gradient-to-l from-transparent to-[var(--gold-primary)]/80" aria-hidden="true" />
        </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProjectsSection;