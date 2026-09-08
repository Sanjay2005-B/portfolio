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

const accentColors = {
  Programming: 'text-blue-400 bg-blue-500/10',
  Frontend: 'text-cyan-400 bg-cyan-500/10',
  Backend: 'text-emerald-400 bg-emerald-500/10',
  Database: 'text-amber-400 bg-amber-500/10',
  Tools: 'text-purple-400 bg-purple-500/10',
  Concepts: 'text-rose-400 bg-rose-500/10',
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-dark-border">
      <div className="container-content py-16 sm:py-20">
        <p className="eyebrow">skills</p>
        <h2 className="section-heading">What I build with</h2>
        <p className="section-sub">
          Grouped by where each tool actually shows up in a project, not by how impressive the list looks.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.title] ?? Code2
            const colors = accentColors[group.title] ?? 'text-primary bg-primary/10'
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="card p-5 group hover:border-dark-line"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${colors}`}>
                    <Icon size={16} />
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-dark-surface text-gray-400 border border-dark-border group-hover:border-dark-line transition-colors"
                    >
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
