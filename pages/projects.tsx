import { projectsData } from '../utils/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = projectsData.map((project) => {
    return (
      <ProjectCard
        key={project.title}
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        link={project.link}
        status={project.status}
      />
    );
  });

  return (
    <section className='flex flex-wrap justify-center mt-[6.5rem]'>
      {projects}
    </section>
  );
}
