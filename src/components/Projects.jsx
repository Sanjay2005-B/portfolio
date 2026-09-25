import { useCallback, useState } from 'react'
import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import ProjectCaseStudy from './ProjectCaseStudy'

export default function Projects() {
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])

  return (
    <section id="projects" className="border-b border-ink-line bg-cream-surface/60">
      <div className="container-content py-20 sm:py-28">
        <div className="relative">
          <span
            className="pointer-events-none select-none absolute -top-10 right-0 font-display text-[7rem] leading-none text-ink/[0.05] hidden sm:block"
            aria-hidden="true"
          >
            02
          </span>
          <p className="eyebrow">
            <span className="text-primary">(02)</span>
            Projects
          </p>
          <h2 className="section-heading mt-5">Selected work</h2>
          <p className="section-sub">
            Two full-stack applications, built and shipped end to end with the Java + Spring Boot
            stack — open either one to read the problem, approach, and lessons.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpenCaseStudy={(p, idx) => setActive({ project: p, index: idx })}
            />
          ))}
        </div>
      </div>

      <ProjectCaseStudy project={active?.project ?? null} index={active?.index ?? 0} onClose={close} />
    </section>
  )
}