import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, FileDown, MapPin } from 'lucide-react'
import { profile } from '../data/portfolioData'
import profileImage from '../assets/profile.jpg'
import inkBurst from '../assets/ink-burst.svg'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-content pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20"
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-8 items-center">
          <div>
            <motion.div variants={rise} className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Open to internships &amp; full-time roles — 2026
              </p>
              <p className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                <MapPin size={11} />
                Erode, Tamil Nadu, India
              </p>
            </motion.div>

            <motion.h1
              variants={rise}
              className="mt-6 font-display uppercase tracking-[0.02em] text-ink leading-[0.9]"
            >
              <span className="block text-[clamp(3.75rem,9vw,7.5rem)]">Sanjay</span>
              <span className="block text-[clamp(3.75rem,9vw,7.5rem)] text-primary">Full Stack</span>
              <span className="block text-[clamp(3.75rem,9vw,7.5rem)]">Developer.</span>
            </motion.h1>

            <motion.p variants={rise} className="mt-7 text-[15px] leading-7 text-ink-soft max-w-xl">
              {profile.intro}
            </motion.p>

            <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3.5">
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowDownRight size={15} />
              </a>
              <a href={profile.resumePath} download className="btn-outline">
                <FileDown size={15} />
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px]"
          >
            <div className="relative">
              <div className="absolute -inset-10 overflow-hidden pointer-events-none" aria-hidden="true">
                <img
                  src={inkBurst}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40"
                />
              </div>

              <div className="absolute -top-5 -right-5 w-[78%] h-[60%] bg-primary" aria-hidden="true" />

              <div className="relative bg-cream-card">
                <img
                  src={profileImage}
                  alt="Sanjay B"
                  className="w-full aspect-[3/3.55] object-cover object-top grayscale-[0.15]"
                />
              </div>

              <p className="relative mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint">
                Sanjay B — Java Full Stack Developer
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute top-40 right-0 -mr-6 hidden xl:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint [writing-mode:vertical-rl]">
        <ArrowUpRight size={12} className="text-primary" />
        java · spring boot · react
      </div>
    </section>
  )
}