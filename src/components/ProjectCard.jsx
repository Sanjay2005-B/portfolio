import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, Lightbulb, Target, Wrench } from 'lucide-react'

const abstractVisuals = {
  'timetable-scheduler': (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
      <div className="grid grid-cols-5 gap-1.5 w-full max-w-[200px]">
        {['Mon','Tue','Wed','Thu','Fri'].map(d => (
          <div key={d} className="text-[8px] font-mono text-gray-500 text-center">{d}</div>
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 rounded-sm ${
              [2, 5, 8, 11, 17].includes(i)
                ? 'bg-primary/35'
                : [0, 7, 12].includes(i)
                ? 'bg-emerald-500/25'
                : [3, 9, 16].includes(i)
                ? 'bg-amber-500/25'
                : 'bg-dark-line'
            }`}
          />
        ))}
      </div>
      <span className="font-mono text-[11px] text-gray-600">schedule.grid — conflict-free</span>
    </div>
  ),
  'static-hosting': (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-12 rounded border border-dark-line bg-dark-surface flex items-center justify-center">
          <span className="text-[9px] font-mono text-gray-500">ZIP</span>
        </div>
        <div className="w-6 h-px bg-primary/40" />
        <div className="w-11 h-11 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary/40" />
        </div>
        <div className="w-6 h-px bg-primary/40" />
        <div className="w-9 h-12 rounded border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-center">
          <span className="text-[9px] font-mono text-emerald-500/60">URL</span>
        </div>
      </div>
      <span className="font-mono text-[11px] text-gray-600">deploy.pipeline — zip to live</span>
    </div>
  ),
}

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden group"
    >
      <div className="grid md:grid-cols-[300px_1fr]">
        <div className="bg-dark-surface border-b md:border-b-0 md:border-r border-dark-border flex flex-col items-center justify-center min-h-[240px] md:min-h-0 p-6 relative overflow-hidden">
          <span className="font-mono text-[10px] text-gray-600 mb-4 self-start">
            project {String(index + 1).padStart(2, '0')}
          </span>
          {abstractVisuals[project.id] || (
            <span className="font-mono text-[11px] text-gray-600">project.preview</span>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <span className="font-mono text-[11px] text-primary">
            PROJECT {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-2 text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h3>

          <p className="mt-3 text-[14px] leading-6 text-gray-400">
            {project.overview}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-dark-surface text-gray-300 border border-dark-border"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2 !px-3.5 text-xs"
            >
              <Github size={14} />
              GitHub
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2 !px-3.5 text-xs"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            ) : (
              <span className="font-mono text-[11px] text-gray-600">
                demo not deployed yet
              </span>
            )}
            <button
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
            >
              {expanded ? 'Hide details' : 'View case study'}
              <ChevronDown
                size={14}
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
                <div className="mt-6 pt-6 border-t border-dark-border space-y-5">
                  <DetailBlock icon={Target} label="Problem" text={project.problem} />
                  <DetailBlock icon={Lightbulb} label="Solution" text={project.solution} />

                  <div>
                    <SectionLabel icon={Wrench} label="Key Features" />
                    <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[13px] leading-6 text-gray-400"
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
    <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-gray-500">
      {Icon && <Icon size={12} />}
      {label}
    </p>
  )
}

function DetailBlock({ icon, label, text }) {
  return (
    <div>
      <SectionLabel icon={icon} label={label} />
      <p className="mt-1.5 text-[13.5px] leading-6 text-gray-400">{text}</p>
    </div>
  )
}
