import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line dark:border-dark-line bg-soft/60 dark:bg-dark-surface/40">
      <div className="container-content py-20">
        <p className="eyebrow">projects</p>
        <h2 className="section-title">Things I've built</h2>
        <p className="mt-3 text-[15px] text-muted dark:text-slate-400 max-w-xl">
          Two full stack projects, end to end — expand either one for the problem, approach, and what I'd do differently.
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
