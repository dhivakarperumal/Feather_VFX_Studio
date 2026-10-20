const ProjectGalleryCard = ({
  project,
  onSelect,
  landscape = false,
  fixedSize = false,
}) => (
  <article
    style={
      fixedSize
        ? undefined
        : { aspectRatio: `${1 / (project.heightRatio * 0.9)}` }
    }
    className={`group relative w-full overflow-hidden rounded-md border border-[var(--gold-primary)]/50 bg-[var(--bg-secondary)] transition-colors duration-300 hover:border-[var(--gold-bright)] motion-reduce:transition-none ${fixedSize ? 'h-full min-h-0 min-w-0' : landscape ? '' : 'flex-1 basis-auto'
      }`}
  >
    <button
      type="button"
      className="absolute inset-0 block h-full w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[var(--gold-bright)]"
      aria-label={`View ${project.title} image full screen`}
      onClick={onSelect}
    >
      <img
        className={`h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none ${landscape && !fixedSize ? 'p-1 sm:p-2' : fixedSize ? 'p-1 sm:p-2' : ''
          }`}
        src={project.image}
        alt={`${project.title} project artwork`}
        loading="lazy"
        decoding="async"
      />
    </button>
  </article>
);

export default ProjectGalleryCard;
