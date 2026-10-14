import { useMemo, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import projectData from '../../data/projects.json';

const collectionFilters = ['All', 'Featured', 'Commercials', 'Episodes'];
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
  const visibleOffsets = Array.from(
    { length: Math.min(5, projects.length) },
    (_, index) => index - Math.floor(Math.min(5, projects.length) / 2),
  );

  return (
    <main className="relative isolate min-h-[calc(100vh-180px)] overflow-hidden bg-[#f7f7f4] px-4 py-10 text-[#111] sm:px-8 sm:py-14">
      <span
        className="pointer-events-none absolute -right-8 top-8 hidden select-none font-serif text-[clamp(7rem,16vw,15rem)] font-bold leading-none text-[#e9e9e5] lg:block"
        aria-hidden="true"
      >
        WORK
      </span>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
        <header className="relative z-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#ad8848]/70" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#98753d]">Feather VFX Studio</p>
            <span className="h-px w-10 bg-[#ad8848]/70" />
          </div>
          <p className="font-serif text-2xl italic leading-tight text-black/65 sm:text-3xl">Stories beyond the frame</p>
          <h1 className="mt-1 font-serif text-4xl font-semibold uppercase leading-none tracking-[0.06em] sm:text-5xl md:text-6xl">
            Selected <span className="text-[#a57c3b]">Work</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-black/55">
            A collection of worlds, moments and visual effects brought to life by our team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {collectionFilters.map((collection) => (
              <button
                key={collection}
                type="button"
                aria-pressed={activeCollection === collection}
                onClick={() => changeCollection(collection)}
                className={`rounded-full border px-4 py-2 text-[11px] font-semibold transition-colors ${
                  activeCollection === collection
                    ? 'border-[#171715] bg-[#171715] text-white shadow-md shadow-black/10'
                    : 'border-black/15 bg-white/70 text-black/65 hover:border-[#a57c3b] hover:text-[#7c5a24]'
                }`}
              >
                {collection}
              </button>
            ))}
          </div>
        </header>

        <section
          className="relative mt-5 flex h-[min(112vw,35rem)] w-full max-w-6xl items-center justify-center sm:mt-7 sm:h-[35rem]"
          aria-label="Project image carousel"
          aria-roledescription="carousel"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[54%] w-[min(82vw,54rem)] -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-[radial-gradient(ellipse_at_center,rgba(199,191,177,0.8),rgba(226,224,218,0.4)_52%,transparent_72%)]" />
          {visibleOffsets.map((offset) => {
            const index = (activeIndex + offset + projects.length) % projects.length;
            const project = projects[index];
            const isActive = offset === 0;
            const isLandscape = project.orientation === 'landscape';

            return (
              <button
                key={`${project.image}-${offset}`}
                type="button"
                onClick={() => selectProject(index)}
                aria-label={`${isActive ? 'Current project' : 'Show project'}: ${project.title}`}
                aria-current={isActive ? 'true' : undefined}
                className={`absolute left-1/2 top-1/2 overflow-hidden rounded-[1.15rem] border-[7px] border-[#171715] bg-[#171715] shadow-[0_22px_55px_rgba(0,0,0,0.24)] transition-[transform,opacity,filter,width,height] duration-500 ease-out focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#b18a4a] sm:rounded-[1.4rem] sm:border-[10px] ${
                  isActive
                    ? isLandscape
                      ? 'z-30 h-[56%] w-[90%] -translate-x-1/2 -translate-y-1/2 opacity-100 sm:h-[66%] sm:w-[68%]'
                      : 'z-30 h-[84%] w-[56%] -translate-x-1/2 -translate-y-1/2 opacity-100 sm:w-[34%]'
                    : offset === -1
                      ? `z-20 h-[69%] w-[48%] -translate-x-[90%] -translate-y-1/2 -rotate-3 opacity-100 sm:w-[31%] sm:-translate-x-[85%] ${isLandscape ? 'sm:-translate-x-[135%]' : ''}`
                      : offset === 1
                        ? `z-20 h-[69%] w-[48%] -translate-x-[10%] -translate-y-1/2 rotate-3 opacity-100 sm:w-[31%] sm:-translate-x-[15%] ${isLandscape ? 'sm:translate-x-[35%]' : ''}`
                        : offset < 0
                          ? 'z-10 h-[56%] w-[42%] -translate-x-[160%] -translate-y-1/2 -rotate-6 opacity-55 sm:w-[27%] sm:-translate-x-[160%]'
                          : 'z-10 h-[56%] w-[42%] translate-x-[60%] -translate-y-1/2 rotate-6 opacity-55 sm:w-[27%] sm:translate-x-[60%]'
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

        <div className="z-40 mt-0 flex w-full max-w-2xl items-center justify-between gap-4 sm:mt-1">
          <button
            type="button"
            onClick={() => move(-1)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/15 bg-white/80 text-base shadow-sm transition hover:border-[#171715] hover:bg-[#171715] hover:text-white"
            aria-label="Previous project"
          >
            <FaArrowLeft />
          </button>
          <div className="min-w-0 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a57c3b]">
              {projects[activeIndex].collection}
            </p>
            <h2 className="mt-1 max-w-[70vw] truncate font-serif text-xl font-semibold sm:max-w-xl sm:text-3xl">
              {projects[activeIndex].title}
            </h2>
            <p className="mt-1.5 text-[10px] font-medium tracking-[0.15em] text-black/45">
              {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/15 bg-white/80 text-base shadow-sm transition hover:border-[#171715] hover:bg-[#171715] hover:text-white"
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
