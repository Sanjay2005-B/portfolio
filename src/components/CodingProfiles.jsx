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
    <section id="coding-profiles" className="border-b border-ink-line bg-cream-surface/60">
      <div className="container-content py-20 sm:py-28">
        <div className="relative">
          <span
            className="pointer-events-none select-none absolute -top-10 right-0 font-display text-[7rem] leading-none text-ink/[0.05] hidden sm:block"
            aria-hidden="true"
          >
            07
          </span>
          <p className="eyebrow">
            <span className="text-primary">(07)</span>
            Elsewhere
          </p>
          <h2 className="section-heading mt-5">Find me online</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-4xl">
          {codingProfiles.map((p, i) => {
            const Icon = icons[p.platform] ?? Code2
            return (
              <motion.a
                key={p.platform}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group card p-6 flex flex-col gap-4 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-ink text-cream group-hover:bg-primary transition-colors duration-300">
                    <Icon size={17} />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-ink-faint group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-display text-[22px] uppercase tracking-[0.03em] text-ink">
                    {p.platform}
                  </h3>
                  <p className="font-mono text-[12px] text-ink-muted mt-0.5">@{p.username}</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Visit profile →
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}