import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-dark-border bg-dark-surface/50">
      <div className="container-content py-16 sm:py-20">
        <p className="eyebrow">certifications</p>
        <h2 className="section-heading">Certifications</h2>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card p-5 flex items-start gap-4 hover:border-dark-line group"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0">
                <Award size={16} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 text-[12.5px] text-gray-500 font-mono">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
