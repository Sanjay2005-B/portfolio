import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border text-gray-400">
      <div className="container-content py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#home" className="font-mono text-sm font-semibold text-white">
            Sanjay<span className="text-primary">.B</span>
          </a>

          <div className="flex items-center gap-2">
            <FooterIcon href={profile.github} icon={Github} label="GitHub" />
            <FooterIcon href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
            <FooterIcon href={profile.leetcode} icon={Code2} label="LeetCode" />
            <FooterIcon href={`mailto:${profile.email}`} icon={Mail} label="Email" />
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={13} />
          </a>
        </div>

        <div className="mt-6 pt-5 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-gray-500">
            &copy; 2026 Sanjay B. All Rights Reserved.
          </p>
          <p className="font-mono text-[11px] text-gray-500">
            built with react + tailwind
          </p>
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
      className="w-8 h-8 rounded-lg flex items-center justify-center bg-dark-card text-gray-400 hover:bg-dark-line hover:text-primary transition-colors border border-dark-border"
    >
      <Icon size={14} />
    </a>
  )
}
