import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, X, Lightbulb, Target, Wrench, ArrowUpRight } from 'lucide-react'
import ProjectPreview from './ProjectPreview'

export default function ProjectCaseStudy({ project, index, onClose }) {
  const isOpen = Boolean(project)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose])

  const number = String(index + 1).padStart(2, '0')

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl card bg-cream overflow-hidden flex flex-col max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)]"
          >
            <div className="shrink-0 flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-ink-line bg-cream-card">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Featured Project {number}
                </p>
                <h3 className="mt-1 font-display text-[26px] sm:text-[30px] uppercase tracking-[0.02em] text-ink leading-none truncate">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !py-2 !px-3.5 text-[11px]"
                  >
                    <Github size={14} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !py-2 !px-3.5 text-[11px]"
                  >
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Live</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close case study"
                  className="flex items-center justify-center w-9 h-9 rounded-md border border-ink text-ink hover:bg-ink hover:text-cream transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto">
              <div className="relative bg-cream-surface border-b border-ink-line aspect-[16/8] overflow-hidden">
                <ProjectPreview projectId={project.id} />
              </div>

              <div className="p-5 sm:p-7">
                <p className="text-[15px] leading-7 text-ink-soft">{project.overview}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 space-y-6">
                  <DetailBlock icon={Target} label="Problem" text={project.problem} />
                  <DetailBlock icon={Lightbulb} label="Solution" text={project.solution} />

                  <div>
                    <SectionLabel icon={Wrench} label="Key Features" />
                    <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[13px] leading-6 text-ink-soft"
                        >
                          <span className="mt-[9px] w-1.5 h-1.5 bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <DetailBlock label="Challenges" text={project.challenges} />
                  <DetailBlock label="Lessons Learned" text={project.lessons} />

                  {(project.github || project.demo) && (
                    <div className="pt-4 border-t border-ink-line flex flex-wrap gap-2.5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          View on GitHub
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline"
                        >
                          View Live
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SectionLabel({ icon: Icon, label }) {
  return (
    <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
      {Icon && <Icon size={12} className="text-primary" />}
      {label}
    </p>
  )
}

function DetailBlock({ icon, label, text }) {
  return (
    <div>
      <SectionLabel icon={icon} label={label} />
      <p className="mt-1.5 text-[13.5px] leading-6 text-ink-soft">{text}</p>
    </div>
  )
}