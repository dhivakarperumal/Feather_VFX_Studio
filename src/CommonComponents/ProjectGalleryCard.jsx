const ProjectGalleryCard = ({
  project,
  onSelect,
}) => (
  <article
    style={{ aspectRatio: `${1 / (project.heightRatio || 1)}` }}
    className="group relative mb-3 inline-block w-full break-inside-avoid overflow-hidden rounded-md border border-[var(--gold-primary)]/50 bg-[var(--bg-secondary)] align-top transition-colors duration-300 hover:border-[var(--gold-bright)] motion-reduce:transition-none"
  >
    <button
      type="button"
      className="absolute inset-0 block h-full w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[var(--gold-bright)]"
      aria-label={`View ${project.title} image full screen`}
      onClick={onSelect}
    >
      <img
        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none"
        src={project.image}
        alt={`${project.title} project artwork`}
        loading="lazy"
        decoding="async"
      />
    </button>
  </article>
);

export default ProjectGalleryCard;
