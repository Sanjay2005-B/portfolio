import { motion } from 'framer-motion'
import { Code2, Layout, Server, Database, Wrench, BrainCircuit } from 'lucide-react'
import { skillGroups } from '../data/portfolioData'

const icons = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  Tools: Wrench,
  Concepts: BrainCircuit,
}

export default function Skills() {
  return (
    <section id="skills" className="border-b border-ink-line">
      <div className="container-content py-20 sm:py-28">
        <div className="relative">
          <span
            className="pointer-events-none select-none absolute -top-10 right-0 font-display text-[7rem] leading-none text-ink/[0.05] hidden sm:block"
            aria-hidden="true"
          >
            04
          </span>
          <p className="eyebrow">
            <span className="text-primary">(04)</span>
            Toolkit
          </p>
          <h2 className="section-heading mt-5">What I build with</h2>
          <p className="section-sub">
            Grouped by where each tool actually shows up in a project, verified against the code in my
            repositories.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.title] ?? Code2
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className="card p-6 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={17} />
                  </span>
                  <h3 className="font-display text-[22px] uppercase tracking-[0.03em] text-ink">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span key={skill} className="tag transition-colors duration-200 group-hover:border-ink/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}