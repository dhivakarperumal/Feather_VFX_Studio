import { useMemo, useState } from 'react';
import {
  Grid2X2,
  Layers3,
  Mountain,
  Palette,
  Star,
  Video,
} from 'lucide-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import projectData from '../../data/projects.json';

const categoryIcons = {
  All: Grid2X2,
  'VFX & CGI': Video,
  Compositing: Layers3,
  Environments: Mountain,
  'Color Grading': Palette,
  Featured: Star,
};

const categories = [...new Set(projectData.projects.map((project) => project.category).filter(Boolean))];
const filters = [
  'All',
  ...categories,
  ...projectData.filters.filter((filter) => filter !== 'All' && !categories.includes(filter)),
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = useMemo(
    () => activeFilter === 'All'
      ? projectData.projects
      : projectData.projects.filter((project) => (
        project.category === activeFilter || project.collection === activeFilter
      )),
    [activeFilter],
  );

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setActiveIndex(0);
  };

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  const selectProject = (index) => {
    setActiveIndex((index + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex];
  const visibleOffsets = projects.length === 2
    ? (activeIndex === 0 ? [0, 1] : [-1, 0])
    : Array.from(
      { length: Math.min(5, projects.length) },
      (_, index) => index - Math.floor(Math.min(5, projects.length) / 2),
    );

  return (
    <main className="relative isolate min-h-[min(900px,calc(100vh-80px))] overflow-hidden bg-[#05090c] px-4 pb-8 pt-9 text-white sm:px-8 sm:pt-12">
      <div
        key={activeProject.image}
        className="pointer-events-none absolute inset-0 -z-20 scale-110 animate-project-image-reveal bg-cover bg-center opacity-25 blur-2xl motion-reduce:animate-none"
        style={{ backgroundImage: `url("${activeProject.image}")` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,9,12,0.84)_0%,rgba(4,9,12,0.57)_40%,rgba(4,9,12,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_47%,rgba(211,142,48,0.16),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(180deg,transparent,rgba(226,147,54,0.11))]" />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <header className="relative z-40 text-center">
          <div className="mb-2 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.38em] text-[#f3b44e] sm:text-xs">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d99c42] sm:w-16" />
            Our Work
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d99c42] sm:w-16" />
          </div>
          <h1 className="font-serif text-[clamp(2rem,5.2vw,4.5rem)] font-bold uppercase leading-none tracking-[0.035em]">
            Featured <span className="text-[#efa947]">Projects</span>
          </h1>
          <p className="mt-3 text-xs text-white/75 sm:text-sm">
            Bringing imagination to life through stunning visuals and world-class VFX.
          </p>

          <nav
            className="mx-auto mt-6 flex max-w-full flex-wrap justify-center gap-2 px-1 pb-2"
            aria-label="Filter projects"
          >
            {filters.map((filter) => {
              const Icon = categoryIcons[filter] || Layers3;
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => changeFilter(filter)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-medium transition-all duration-300 sm:px-4 ${
                    isActive
                      ? 'border-[#f3b44e] bg-[#f3b44e] text-[#17120b] shadow-[0_0_24px_rgba(243,180,78,0.3)]'
                      : 'border-white/25 bg-black/35 text-white/85 hover:border-[#f3b44e]/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={14} strokeWidth={2.2} aria-hidden="true" />
                  {filter}
                </button>
              );
            })}
          </nav>
        </header>

        <section
          className="relative mt-1 flex h-[clamp(25rem,62vh,37rem)] w-full max-w-[1320px] items-center justify-center sm:mt-3"
          aria-label="Project image carousel"
          aria-roledescription="carousel"
        >
          <div className="pointer-events-none absolute bottom-[6%] left-1/2 h-[13%] w-[76%] -translate-x-1/2 rounded-[50%] bg-[#efa947]/20 blur-3xl" />
          {visibleOffsets.map((offset) => {
            const index = (activeIndex + offset + projects.length) % projects.length;
            const project = projects[index];
            const isActive = offset === 0;
            const distance = Math.abs(offset);
            const isLandscape = project.orientation === 'landscape';
            const position = offset === 0 ? 0 : Math.sign(offset) * (distance === 1 ? 24 : 40);
            const rotation = offset === 0 ? 0 : offset * 2.2;

            return (
              <button
                key={`${project.image}-${offset}`}
                type="button"
                onClick={() => selectProject(index)}
                aria-label={`${isActive ? 'Current project' : 'Show project'}: ${project.title}`}
                aria-current={isActive ? 'true' : undefined}
                className={`absolute top-1/2 overflow-hidden rounded-xl border bg-[#090b0d] text-left shadow-[0_22px_70px_rgba(0,0,0,0.6)] transition-[transform,opacity,filter,width,height,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3b44e] sm:rounded-2xl ${
                  isActive
                    ? 'z-30 h-[min(76vw,30rem)] w-[min(68vw,23rem)] border-[#f3b44e] shadow-[0_0_0_1px_rgba(243,180,78,0.35),0_0_38px_rgba(243,180,78,0.3),0_30px_90px_rgba(0,0,0,0.75)]'
                    : distance === 1
                      ? 'z-20 h-[min(62vw,24rem)] w-[clamp(7rem,18vw,14rem)] border-[#dda54d]/70 opacity-95'
                      : 'z-10 h-[min(54vw,21rem)] w-[clamp(6rem,15vw,12rem)] border-[#dda54d]/45 opacity-75'
                }`}
                style={{
                  left: `calc(50% + ${position}%)`,
                  transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${isActive ? 1 : distance === 1 ? 0.9 : 0.78})`,
                }}
              >
                <img
                  key={isActive ? `${project.image}-${activeIndex}` : project.image}
                  src={project.image}
                  alt={isActive ? `${project.title} project artwork` : ''}
                  className={`h-full w-full ${
                    isLandscape ? 'object-contain' : 'object-cover'
                  } motion-reduce:animate-none ${isActive ? 'animate-project-image-reveal' : ''}`}
                  draggable="false"
                />
                <span
                  className={`pointer-events-none absolute inset-0 ${
                    isActive
                      ? 'bg-gradient-to-t from-black via-black/45 to-black/5'
                      : 'bg-gradient-to-t from-black/90 via-black/15 to-transparent'
                  }`}
                  aria-hidden="true"
                />
                <span className={`absolute inset-x-0 bottom-0 p-3 sm:p-5 ${isActive ? '' : 'sm:p-4'}`}>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#f3b44e] sm:text-[10px]">
                    {project.category || project.collection}
                  </span>
                  <span className={`mt-1 block font-serif font-semibold leading-tight text-white ${
                    isActive
                      ? 'text-lg sm:text-2xl'
                      : 'line-clamp-2 text-xs sm:text-base'
                  }`}
                  >
                    {project.title}
                  </span>
                  {isActive && (
                    <span className="mt-3 block h-px w-10 bg-[#f3b44e] sm:mt-4" aria-hidden="true" />
                  )}
                </span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => move(-1)}
            className="absolute left-0 top-1/2 z-40 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#f3b44e]/70 bg-black/65 text-lg text-white shadow-lg backdrop-blur transition hover:scale-110 hover:bg-[#f3b44e] hover:text-black sm:left-2 sm:h-12 sm:w-12"
            aria-label="Previous project"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="absolute right-0 top-1/2 z-40 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#f3b44e]/70 bg-black/65 text-lg text-white shadow-lg backdrop-blur transition hover:scale-110 hover:bg-[#f3b44e] hover:text-black sm:right-2 sm:h-12 sm:w-12"
            aria-label="Next project"
          >
            <FaArrowRight />
          </button>
        </section>

        <div className="-mt-4 flex items-center justify-center gap-2 sm:-mt-5">
          {visibleOffsets.map((offset) => {
            const index = (activeIndex + offset + projects.length) % projects.length;
            const isActive = offset === 0;

            return (
              <button
                key={`indicator-${offset}`}
                type="button"
                onClick={() => selectProject(index)}
                aria-label={`Show project ${index + 1}: ${projects[index].title}`}
                aria-current={isActive ? 'true' : undefined}
                className={`h-1 rounded-full transition-all duration-300 ${
                  isActive ? 'w-7 bg-[#f3b44e]' : 'w-5 bg-white/35 hover:bg-white/70'
                }`}
              />
            );
          })}
          <span className="ml-3 text-[10px] font-semibold tracking-[0.18em] text-white/55">
            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Projects;
