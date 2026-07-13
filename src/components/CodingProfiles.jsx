import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, ArrowUpRight } from 'lucide-react'
import { codingProfiles } from '../data/portfolioData'

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
}

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="border-b border-line dark:border-dark-line">
      <div className="container-content py-20">
        <p className="eyebrow">elsewhere</p>
        <h2 className="section-title">Find me online</h2>

        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {codingProfiles.map((p, i) => {
            const Icon = icons[p.platform]
            return (
              <motion.a
                key={p.platform}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group card p-6 flex flex-col gap-4 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent">
                    <Icon size={19} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted dark:text-slate-500 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-ink dark:text-white">{p.platform}</h3>
                  <p className="font-mono text-[13px] text-muted dark:text-slate-500 mt-0.5">
                    @{p.username}
                  </p>
                </div>
                <span className="text-[13.5px] font-semibold text-primary">Visit Profile</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
