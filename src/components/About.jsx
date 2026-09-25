import { motion } from 'framer-motion'
import { GraduationCap, Server, Layers, Database, Target } from 'lucide-react'
import { aboutPoints, profile } from '../data/portfolioData'

const pointIcons = [GraduationCap, Server, Layers, Database, Target]

export default function About() {
  return (
    <section id="about" className="border-y border-ink-line bg-cream-surface/60">
      <div className="container-content py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow">
              <span className="text-primary">(01)</span>
              About Me
            </p>
            <h2 className="mt-5 font-display uppercase tracking-[0.02em] text-ink leading-[1.02] text-[clamp(2.2rem,4.6vw,3.6rem)]">
              Building <span className="text-primary">useful</span> digital experiences with{' '}
              <span className="text-primary">clean code.</span>
            </h2>

            <div className="mt-7 space-y-4 text-[15px] leading-7 text-ink-soft">
              <p>
                I'm in my final year of a Computer Science and Design program, and most of my
                coursework and side projects have pulled me toward the backend — the part of an
                application that decides how data is stored, secured, and served up correctly under load.
              </p>
              <p>
                Java is where I'm strongest, and Spring Boot is my default when I need to turn a REST
                API from a rough idea into something with proper structure — controllers, services,
                repositories, and a schema that holds up in MySQL and PostgreSQL. I round that out with
                React on the frontend so I can ship a full feature rather than half of one.
              </p>
              <p>
                My goal is to begin my career as a Software Engineer where I can contribute, learn
                continuously, and build impactful products. Treating every project as a chance to close
                a gap — currently working through system design fundamentals.
              </p>
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {aboutPoints.map((point, i) => {
              const Icon = pointIcons[i] ?? Server
              return (
                <li key={point} className="group">
                  <div className="h-full card p-5 hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
                        <Icon size={17} />
                      </span>
                      <span className="font-display text-2xl text-ink/15 group-hover:text-primary/60 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-4 text-[13.5px] leading-6 text-ink-soft group-hover:text-ink transition-colors">
                      {point}
                    </p>
                  </div>
                </li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}