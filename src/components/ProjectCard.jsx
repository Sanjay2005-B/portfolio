import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, Lightbulb, Target, Wrench } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card overflow-hidden"
    >
      <div className="grid md:grid-cols-[280px_1fr]">
        <div className="bg-gradient-to-br from-primary/[0.06] to-secondary/[0.05] dark:from-accent/10 dark:to-dark-line border-b md:border-b-0 md:border-r border-line dark:border-dark-line flex items-center justify-center p-8">
          <span className="font-mono text-[13px] text-muted dark:text-slate-500 text-center leading-6">
            project preview
            <br />
            <span className="text-primary dark:text-accent font-semibold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </span>
        </div>

        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-bold text-ink dark:text-white">{project.title}</h3>
          <p className="mt-2.5 text-[14.5px] leading-6 text-secondary dark:text-slate-300">
            {project.overview}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2 !px-4 text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2 !px-4 text-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            ) : (
              <span className="text-[13px] font-mono text-muted dark:text-slate-500">
                live demo not deployed yet
              </span>
            )}
            <button
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-blue-700"
            >
              {expanded ? 'Hide details' : 'View case study'}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-line dark:border-dark-line space-y-5">
                  <DetailBlock icon={Target} label="Problem" text={project.problem} />
                  <DetailBlock icon={Lightbulb} label="Solution" text={project.solution} />

                  <div>
                    <SectionLabel icon={Wrench} label="Key Features" />
                    <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-[14px] leading-6 text-secondary dark:text-slate-300"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <DetailBlock label="Challenges" text={project.challenges} />
                  <DetailBlock label="Lessons Learned" text={project.lessons} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  )
}

function SectionLabel({ icon: Icon, label }) {
  return (
    <p className="flex items-center gap-1.5 font-mono text-[12.5px] uppercase tracking-wide text-muted dark:text-slate-500">
      {Icon && <Icon size={13} />}
      {label}
    </p>
  )
}

function DetailBlock({ icon, label, text }) {
  return (
    <div>
      <SectionLabel icon={icon} label={label} />
      <p className="mt-1.5 text-[14.5px] leading-6 text-secondary dark:text-slate-300">{text}</p>
    </div>
  )
}
