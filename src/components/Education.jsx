import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="border-t border-dark-border">
      <div className="container-content py-16 sm:py-20">
        <p className="eyebrow">education</p>
        <h2 className="section-heading">Academic background</h2>

        <div className="mt-12 relative pl-10 max-w-2xl">
          <span
            className="absolute left-[9px] top-2 bottom-2 w-px bg-dark-border"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="absolute -left-10 top-1 w-5 h-5 rounded-full bg-dark-bg border-2 border-primary flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-primary" />
            </span>

            <div className="card p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-bold text-white text-lg">
                    {education.degree}
                  </h3>
                  <p className="text-primary font-medium text-[14px] mt-0.5">
                    {education.field}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                  <GraduationCap size={12} />
                  {education.status}
                </span>
              </div>
              <p className="mt-3 text-[14px] text-gray-400">
                {education.institution}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
