import { motion } from 'framer-motion'
import { Code2, Layout, Server, Database, Wrench, BrainCircuit } from 'lucide-react'
import { skillGroups } from '../data/portfolioData'

const icons = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  Concepts: BrainCircuit,
}

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line dark:border-dark-line">
      <div className="container-content py-20">
        <p className="eyebrow">skills</p>
        <h2 className="section-title">What I build with</h2>
        <p className="mt-3 text-[15px] text-muted dark:text-slate-400 max-w-xl">
          Grouped by where each tool actually shows up in a project, not by how impressive the list looks.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.title] ?? Code2
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="card p-6"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-semibold text-ink dark:text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="tag">
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
