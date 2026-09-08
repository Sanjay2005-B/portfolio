import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'
import profileImage from '../assets/profile.jpg'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-surface" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-content relative py-20 sm:py-24 lg:py-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-gray-400 tracking-wide">
              Available for Full-Time Opportunities — 2026
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
          >
            <span className="text-lg sm:text-xl font-semibold text-primary">
              {profile.title}
            </span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="text-base sm:text-lg text-gray-400">
              {profile.subtitle}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-[15px] leading-7 text-gray-400 max-w-xl"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumePath}
              download
              className="btn-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-2 font-mono text-xs text-gray-500"
          >
            <span className="text-primary">$</span>
            <span>status --available</span>
            <span className="inline-block w-[6px] h-[14px] bg-primary animate-pulse" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:justify-self-end"
        >
          <div className="relative rounded-2xl overflow-hidden border border-dark-border bg-dark-card">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-dark-border bg-dark-surface">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-[11px] text-gray-500">
                profile.jpg
              </span>
            </div>

            <img
              src={profileImage}
              alt="Sanjay B"
              className="w-full h-[380px] sm:h-[420px] object-cover"
            />

            <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-2xl pointer-events-none" />
          </div>

          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/[0.06] rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/[0.04] rounded-full blur-[50px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
