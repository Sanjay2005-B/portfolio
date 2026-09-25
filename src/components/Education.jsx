import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { education, profile } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="border-b border-ink-line bg-cream-surface/60">
      <div className="container-content py-20 sm:py-28">
        <div className="relative">
          <span
            className="pointer-events-none select-none absolute -top-10 right-0 font-display text-[7rem] leading-none text-ink/[0.05] hidden sm:block"
            aria-hidden="true"
          >
            05
          </span>
          <p className="eyebrow">
            <span className="text-primary">(05)</span>
            Education
          </p>
          <h2 className="section-heading mt-5">Academic background</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-2xl relative pl-8 sm:pl-0"
        >
          <span className="absolute left-[7px] sm:left-auto sm:-right-6 sm:right-auto top-2 bottom-2 w-px bg-ink-line sm:hidden" aria-hidden="true" />

          <div className="card p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary inline-flex items-center gap-2">
                  <GraduationCap size={13} />
                  {education.status}
                </span>
                <h3 className="mt-2 font-display text-[30px] sm:text-4xl uppercase tracking-[0.02em] text-ink leading-none">
                  {education.degree}
                </h3>
                <p className="mt-1.5 text-[15px] font-medium text-ink-soft">
                  {education.field}
                </p>
              </div>
              <p className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                <MapPin size={12} className="text-primary" />
                Erode, Tamil Nadu
              </p>
            </div>
            <div className="mt-5 pt-5 border-t border-ink-line flex items-center justify-between flex-wrap gap-2">
              <p className="text-[14px] font-medium text-ink-soft">{education.institution}</p>
              <p className="font-mono text-[11px] text-ink-faint">{profile.subtitle}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}