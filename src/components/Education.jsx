import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="border-b border-line dark:border-dark-line">
      <div className="container-content py-20">
        <p className="eyebrow">education</p>
        <h2 className="section-title">Academic background</h2>

        <div className="mt-10 relative pl-10 max-w-2xl">
          <span className="absolute left-[9px] top-2 bottom-2 w-px bg-line dark:bg-dark-line" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="absolute -left-10 top-1 w-5 h-5 rounded-full bg-white dark:bg-dark-bg border-2 border-primary flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-primary" />
            </span>

            <div className="card p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-bold text-ink dark:text-white text-lg">{education.degree}</h3>
                  <p className="text-primary font-medium text-[15px] mt-0.5">{education.field}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 tag !bg-primary/10 !border-primary/20 !text-primary dark:!text-accent">
                  <GraduationCap size={13} />
                  {education.status}
                </span>
              </div>
              <p className="mt-3 text-[14.5px] text-secondary dark:text-slate-300">
                {education.institution}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
