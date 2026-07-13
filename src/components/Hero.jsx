import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";
import profileImage from "../assets/profile.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="border-b border-line dark:border-dark-line"
    >
      <div className="container-content py-20 sm:py-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="eyebrow">
            Available for Full-Time Opportunities • 2026
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.08] text-ink dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1"
          >
            <span className="text-lg sm:text-xl font-semibold text-primary">
              {profile.title}
            </span>

            <span className="hidden sm:inline text-line dark:text-dark-line">
              |
            </span>

            <span className="text-base sm:text-lg text-muted dark:text-slate-400">
              {profile.subtitle}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-[15.5px] leading-7 text-secondary dark:text-slate-300 max-w-xl"
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
            className="mt-10 flex items-center gap-2 font-mono text-[13px] text-muted dark:text-slate-500"
          >
            <span className="text-primary">$</span>
            <span>status --available</span>
            <span className="inline-block w-[7px] h-[15px] bg-primary animate-pulse"></span>
          </motion.div>
        </motion.div>

        {/* Profile Card */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="rounded-3xl overflow-hidden border border-line dark:border-dark-line shadow-xl">

            <div className="flex items-center gap-2 px-4 py-3 border-b border-line dark:border-dark-line bg-gray-100 dark:bg-slate-800">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span className="ml-3 text-sm text-gray-500">
                profile.jpg
              </span>

            </div>

            <img
              src={profileImage}
              alt="Sanjay B"
              className="w-full h-[520px] object-cover"
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}