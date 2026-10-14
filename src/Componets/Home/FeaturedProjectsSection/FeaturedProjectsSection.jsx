import { useCallback, useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ModalPortal from '../../../CommonComponents/ModalPortal';
import PageHeader from '../../../CommonComponents/PageHeader';
import projectData from '../../../data/projects.json';

const { filters, projects } = projectData;



const SLIDE_INTERVAL = 3000;
const CARDS_VISIBLE = 3; // how many project cards show at once

const FeaturedProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const slidePausedRef = useRef(false);
  const slideTimerRef = useRef(null);

  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.collection === activeFilter);
  const portraitProjects = visibleProjects.filter((project) => project.orientation === 'portrait');
  const landscapeProjects = visibleProjects.filter((project) => project.orientation === 'landscape');

  // Reset slide position when filter changes
  useEffect(() => {
    setSlideIndex(0);
  }, [activeFilter]);

  // Auto-slide for the portrait projects strip
  const scheduleSlide = useCallback(() => {
    clearTimeout(slideTimerRef.current);
    slideTimerRef.current = setTimeout(() => {
      if (!slidePausedRef.current && portraitProjects.length > CARDS_VISIBLE) {
        setSlideIndex((current) => (current + 1) % portraitProjects.length);
      }
      scheduleSlide();
    }, SLIDE_INTERVAL);
  }, [portraitProjects.length]);

  useEffect(() => {
    scheduleSlide();
    return () => clearTimeout(slideTimerRef.current);
  }, [scheduleSlide]);

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



  return (
    <>
      <PageHeader
        eyebrow="Our Projects"
        title={
          <>
            Featured <span className="text-[var(--gold-primary)]">Projects</span>
            <br />
            <span className="text-[var(--text-primary)]">CGI &amp; 3D Animation</span>
          </>
        }
        description="Discover our visual effects, CGI, compositing and post-production work across films, series and commercials."
        background="/images/project.png"
        align="left"
        showBreadcrumb={false}
        className="min-h-[420px]"
      >
        <Link
          to="/reels#featured-reel"
          className="mt-6 inline-flex items-center gap-4 bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]"
        >
          Explore Projects
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--bg-primary)] text-[var(--gold-bright)]">
            <FaPlay className="ml-0.5 text-[9px]" aria-hidden="true" />
          </span>
        </Link>
        <Link
          to="/reels#featured-reel"
          className="mt-5 flex w-fit items-center gap-3 text-left text-white md:absolute md:bottom-8 md:right-[5%] md:mt-0"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-black/30 transition-colors hover:border-[var(--gold-bright)] hover:text-[var(--gold-bright)]">
            <FaPlay className="ml-0.5 text-xs" aria-hidden="true" />
          </span>
          <span className="flex flex-col gap-1">
            <span className="text-[9px] font-bold uppercase tracking-[0.16em]">Featured reel</span>
            <span className="text-[9px] uppercase tracking-[0.12em] text-white/70">Play video</span>
          </span>
        </Link>
      </PageHeader>
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

        {/* Auto-sliding portrait projects strip */}
        {portraitProjects.length > 0 && (
          <div
            className="mt-5 overflow-hidden"
            onMouseEnter={() => { slidePausedRef.current = true; }}
            onMouseLeave={() => { slidePausedRef.current = false; }}
          >
            <div
              className="flex gap-2.5 sm:gap-3"
              style={{
                transform: `translateX(calc(-${slideIndex} * (${100 / 3}% + 10px)))`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                width: `calc(${portraitProjects.length} * (${100 / 3}% + 10px))`,
              }}
            >
              {/* Duplicate array for seamless infinite loop feel */}
              {[...portraitProjects, ...portraitProjects.slice(0, CARDS_VISIBLE)].map((project, i) => (
                <div
                  key={`${project.title}-${i}`}
                  className="min-w-0 shrink-0"
                  style={{ width: `calc(${100 / 3}% - 7px)` }}
                >
                  {renderProjectCard(project)}
                </div>
              ))}
            </div>
          </div>
        )}
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
    </>
  );
};

export default FeaturedProjectsSection;
