import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, ArrowUpRight } from 'lucide-react'
import { codingProfiles } from '../data/portfolioData'

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
}

const accents = {
  GitHub: 'text-gray-300 bg-white/5',
  LinkedIn: 'text-sky-400 bg-sky-500/10',
  LeetCode: 'text-amber-400 bg-amber-500/10',
}

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="border-t border-dark-border">
      <div className="container-content py-16 sm:py-20">
        <p className="eyebrow">elsewhere</p>
        <h2 className="section-heading">Find me online</h2>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {codingProfiles.map((p, i) => {
            const Icon = icons[p.platform]
            const colors = accents[p.platform] ?? 'text-gray-400 bg-white/5'
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
                className="group card p-5 flex flex-col gap-4 hover:border-dark-line hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${colors}`}>
                    <Icon size={16} />
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-gray-600 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {p.platform}
                  </h3>
                  <p className="font-mono text-[12px] text-gray-500 mt-0.5">
                    @{p.username}
                  </p>
                </div>
                <span className="text-xs font-medium text-primary">
                  Visit Profile
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
