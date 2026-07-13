import { motion } from 'framer-motion'
import { aboutPoints } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="border-b border-line dark:border-dark-line bg-soft/60 dark:bg-dark-surface/40">
      <div className="container-content py-20">
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
          className="section-title"
        >
          A bit about how I work
        </motion.h2>

        <div className="mt-10 grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="space-y-4 text-[15.5px] leading-7 text-secondary dark:text-slate-300"
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
            className="space-y-3"
          >
            {aboutPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl2 border border-line dark:border-dark-line bg-white dark:bg-dark-bg px-4 py-3.5"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-[14.5px] leading-6 text-secondary dark:text-slate-300">
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
