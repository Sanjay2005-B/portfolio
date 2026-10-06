import { motion } from 'framer-motion'
import { Github, ChevronRight } from 'lucide-react'
import ProjectPreview from './ProjectPreview'

export default function ProjectCard({ project, index, onOpenCaseStudy }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden group flex flex-col"
    >
      <div className="relative bg-cream-surface border-b border-ink-line aspect-[16/10] overflow-hidden">
        <span
          className="pointer-events-none select-none absolute right-4 top-3 font-display text-[64px] leading-none text-ink/[0.08] group-hover:text-primary/15 transition-colors duration-300"
          aria-hidden="true"
        >
          {number}
        </span>
        <ProjectPreview projectId={project.id} />
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <p className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          <span>Featured Project {number}</span>
          <span className="text-ink-faint text-[9px]">java · full stack</span>
        </p>
        <h3 className="mt-2.5 font-display text-[28px] sm:text-[30px] uppercase tracking-[0.02em] text-ink group-hover:text-primary transition-colors duration-300 leading-none flex items-center gap-2 flex-wrap">
          {project.title}
          {project.demo && project.id === 'timetable-scheduler' && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              ● LIVE
            </span>
          )}
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-ink-soft">{project.overview}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-4 text-[11px]"
            >
              <Github size={14} />
              View on GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !py-2 !px-4 text-[11px]"
              >
                Live Demo
              </a>
            )}
            {!project.demo && (
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                live demo not deployed
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenCaseStudy(project, index)}
            aria-haspopup="dialog"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft hover:text-primary transition-colors"
          >
            View case study
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}