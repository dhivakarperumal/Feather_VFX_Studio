import { useMemo, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import projectData from '../../data/projects.json';

const collectionFilters = ['All', 'Featured', 'Commercials', 'Episodes'];
const visibleOffsets = [-2, -1, 0, 1, 2];

const Projects = () => {
  const [activeCollection, setActiveCollection] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = useMemo(
    () => activeCollection === 'All'
      ? projectData.projects
      : projectData.projects.filter((project) => project.collection === activeCollection),
    [activeCollection],
  );

  const changeCollection = (collection) => {
    setActiveCollection(collection);
    setActiveIndex(0);
  };

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  const selectProject = (index) => {
    setActiveIndex((index + projects.length) % projects.length);
  };

  return (
    <main className="relative isolate min-h-[calc(100vh-180px)] overflow-hidden bg-[#f7f7f4] px-4 py-12 text-[#111] sm:px-8 sm:py-16">
      <span
        className="pointer-events-none absolute -right-7 top-1/2 hidden -translate-y-1/2 rotate-180 select-none font-serif text-[clamp(8rem,22vw,22rem)] font-bold leading-none text-[#dce1df] [writing-mode:vertical-rl] lg:block"
        aria-hidden="true"
      >
        PROJECTS
      </span>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center">
        <header className="z-10 text-center">
          <p className="font-serif text-3xl italic leading-tight sm:text-4xl">Stories in every frame</p>
          <h1 className="mt-1 font-serif text-4xl uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
            Our Projects
          </h1>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {collectionFilters.map((collection) => (
              <button
                key={collection}
                type="button"
                aria-pressed={activeCollection === collection}
                onClick={() => changeCollection(collection)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  activeCollection === collection
                    ? 'border-[#111] bg-[#111] text-white'
                    : 'border-black/20 bg-white/50 text-black/70 hover:border-black hover:text-black'
                }`}
              >
                {collection}
              </button>
            ))}
          </div>
        </header>

        <section
          className="relative mt-8 flex h-[min(112vw,34rem)] w-full max-w-5xl items-center justify-center sm:mt-12 sm:h-[34rem]"
          aria-label="Project image carousel"
          aria-roledescription="carousel"
        >
          {visibleOffsets.map((offset) => {
            const index = (activeIndex + offset + projects.length) % projects.length;
            const project = projects[index];
            const isActive = offset === 0;

            return (
              <button
                key={`${project.image}-${offset}`}
                type="button"
                onClick={() => selectProject(index)}
                aria-label={`${isActive ? 'Current project' : 'Show project'}: ${project.title}`}
                aria-current={isActive ? 'true' : undefined}
                className={`absolute left-1/2 top-1/2 overflow-hidden rounded-2xl bg-[#111] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-[transform,opacity,filter] duration-500 ease-out focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#b18a4a] ${
                  isActive
                    ? 'z-30 h-[82%] w-[58%] -translate-x-1/2 -translate-y-1/2 opacity-100 sm:w-[34%]'
                    : offset === -1
                      ? 'z-20 h-[70%] w-[54%] -translate-x-[68%] -translate-y-1/2 -rotate-3 opacity-100 sm:w-[32%]'
                      : offset === 1
                        ? 'z-20 h-[70%] w-[54%] translate-x-[14%] -translate-y-1/2 rotate-3 opacity-100 sm:w-[32%]'
                        : offset < 0
                          ? 'z-10 h-[58%] w-[48%] -translate-x-[100%] -translate-y-1/2 -rotate-6 opacity-75 sm:w-[28%]'
                          : 'z-10 h-[58%] w-[48%] translate-x-[55%] -translate-y-1/2 rotate-6 opacity-75 sm:w-[28%]'
                }`}
              >
                <img
                  src={project.image}
                  alt={isActive ? `${project.title} project artwork` : ''}
                  className="h-full w-full object-contain"
                  draggable="false"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" aria-hidden="true" />
              </button>
            );
          })}
        </section>

        <div className="z-40 mt-1 flex w-full max-w-2xl items-center justify-between gap-4 sm:mt-3">
          <button
            type="button"
            onClick={() => move(-1)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/20 bg-white text-lg transition hover:border-black hover:bg-black hover:text-white"
            aria-label="Previous project"
          >
            <FaArrowLeft />
          </button>
          <div className="min-w-0 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a57c3b]">
              {projects[activeIndex].collection}
            </p>
            <h2 className="mt-1 truncate font-serif text-2xl font-semibold sm:text-3xl">
              {projects[activeIndex].title}
            </h2>
            <p className="mt-2 text-xs text-black/60">
              {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/20 bg-white text-lg transition hover:border-black hover:bg-black hover:text-white"
            aria-label="Next project"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Projects;
