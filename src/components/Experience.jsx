import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  const item = experience[0]

  return (
    <section id="experience" className="border-b border-ink-line">
      <div className="container-content py-20 sm:py-28">
        <div className="relative">
          <span
            className="pointer-events-none select-none absolute -top-10 right-0 font-display text-[7rem] leading-none text-ink/[0.05] hidden sm:block"
            aria-hidden="true"
          >
            03
          </span>
          <p className="eyebrow">
            <span className="text-primary">(03)</span>
            Experience
          </p>
          <h2 className="section-heading mt-5">Professional experience</h2>
          <p className="section-sub">
            Hands-on internship experience in full-stack web development.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mt-12 card relative overflow-hidden group p-7 sm:p-10 md:p-12"
        >
          <span
            className="pointer-events-none select-none absolute -bottom-6 right-4 font-display text-[120px] leading-none text-ink/[0.045] group-hover:text-primary/10 transition-colors duration-300 hidden sm:block"
            aria-hidden="true"
          >
            {item.company.charAt(0)}
          </span>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white shrink-0">
                <Briefcase size={21} />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                  Company
                </p>
                <h3 className="font-display text-[28px] sm:text-[32px] uppercase tracking-[0.02em] text-ink leading-none">
                  Orvionar<span className="text-primary">.</span>
                </h3>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 bg-primary text-white font-mono text-[11px] uppercase tracking-[0.14em] px-3.5 py-2 rounded-md">
              <CheckCircle2 size={13} />
              {item.duration} · {item.status}
            </span>
          </div>

          <p className="mt-8 font-display uppercase tracking-[0.02em] text-ink leading-[1.02] text-[clamp(2rem,4vw,3rem)]">
            Full Stack Developer <span className="text-primary">Intern</span>
          </p>

          <p className="mt-4 text-[15px] leading-7 text-ink-soft max-w-3xl">
            {item.description}
          </p>

          <div className="mt-8 pt-6 border-t border-ink-line flex flex-wrap items-center gap-4">
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Company
              <ArrowUpRight size={15} />
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              linkedin · {item.company}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}