import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-dark-surface text-slate-300">
      <div className="container-content py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#home" className="font-mono text-[15px] font-semibold text-white">
            Sanjay<span className="text-accent">.B</span>
          </a>

          <div className="flex items-center gap-2">
            <FooterIcon href={profile.github} icon={Github} label="GitHub" />
            <FooterIcon href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
            <FooterIcon href={profile.leetcode} icon={Code2} label="LeetCode" />
            <FooterIcon href={`mailto:${profile.email}`} icon={Mail} label="Email" />
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={15} />
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[13px] text-slate-400">© 2026 Sanjay B. All Rights Reserved.</p>
          <p className="font-mono text-[12px] text-slate-500">built with react + tailwind</p>
        </div>
      </div>
    </footer>
  )
}

function FooterIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
    >
      <Icon size={16} />
    </a>
  )
}
