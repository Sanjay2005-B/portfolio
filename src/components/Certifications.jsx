import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-line dark:border-dark-line bg-soft/60 dark:bg-dark-surface/40">
      <div className="container-content py-20">
        <p className="eyebrow">certifications</p>
        <h2 className="section-title">Certifications</h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-3xl">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card p-6 flex items-start gap-4"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent shrink-0">
                <Award size={19} />
              </span>
              <div>
                <h3 className="font-semibold text-ink dark:text-white leading-snug">{cert.title}</h3>
                <p className="mt-1 text-[13.5px] text-muted dark:text-slate-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
