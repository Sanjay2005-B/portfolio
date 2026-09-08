import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-dark-border bg-dark-surface/50">
      <div className="container-content py-16 sm:py-20">
        <p className="eyebrow">projects</p>
        <h2 className="section-heading">Things I've built</h2>
        <p className="section-sub">
          Two full stack projects, end to end — expand either one for the problem, approach, and what I'd do differently.
        </p>

        <div className="mt-12 space-y-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
