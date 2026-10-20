const featuredProjectPriority = [
  '/images/projects/featured/1.1.jpg',
  '/images/projects/featured/2.jpg',
  '/images/projects/featured/3.1.jpg',
  '/images/projects/featured/45.jpg',
  '/images/projects/featured/MAIN.jpg',
  '/images/projects/featured/MAIN1.jpg',
];

export const prioritizeFeaturedProjects = (projects) => {
  const priority = new Map(
    featuredProjectPriority.map((image, index) => [image, index])
  );

  return projects
    .map((project, index) => ({ project, index }))
    .sort((first, second) => {
      const firstPriority = priority.get(first.project.image);
      const secondPriority = priority.get(second.project.image);

      if (firstPriority !== undefined && secondPriority !== undefined) {
        return firstPriority - secondPriority;
      }
      if (firstPriority !== undefined) return -1;
      if (secondPriority !== undefined) return 1;
      return first.index - second.index;
    })
    .map(({ project }) => project);
};
