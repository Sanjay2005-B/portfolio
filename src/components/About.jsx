import { motion } from 'framer-motion'
import { aboutPoints } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="border-t border-dark-border bg-dark-surface/50">
      <div className="container-content py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          about
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="section-heading"
        >
          A bit about how I work
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="space-y-4 text-[15px] leading-7 text-gray-400"
          >
            <p>
              I'm in my final year of a Computer Science and Design program, and most of my
              coursework and side projects have pulled me toward the backend — the part of an
              application that decides how data is stored, secured, and served up correctly under load.
            </p>
            <p>
              Java is where I'm strongest, and Spring Boot is my default when I need to turn a REST
              API from a rough idea into something with proper structure — controllers, services,
              repositories, and a schema that holds up in MySQL. I round that out with React on the
              frontend so I can ship a full feature rather than half of one.
            </p>
            <p>
              I don't treat any of this as finished knowledge. I'm still working through system
              design fundamentals, still going back to fix code I wrote a few months ago once I know
              better, and still enjoy a well-scoped coding problem more than I probably should admit.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-2.5"
          >
            {aboutPoints.map((point, i) => (
              <li
                key={point}
                className="flex items-start gap-4 rounded-xl2 border border-dark-border bg-dark-card px-5 py-4 hover:border-dark-line transition-colors duration-300"
              >
                <span className="mt-1 font-mono text-xs text-primary font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[14px] leading-6 text-gray-400">
                  {point}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
