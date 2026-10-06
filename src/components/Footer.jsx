import { Github, Linkedin, Code2, Mail, MapPin, ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolioData'
import inkBurst from '../assets/ink-burst.svg'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-night-muted border-t-4 border-primary">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={inkBurst}
          alt=""
          className="absolute -right-40 -top-52 w-[640px] h-[640px] object-cover invert opacity-[0.07]"
        />
        <img
          src={inkBurst}
          alt=""
          className="absolute -left-48 -bottom-56 w-[600px] h-[600px] object-cover invert opacity-[0.05]"
        />
      </div>

      <div className="container-content relative py-20 sm:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary inline-flex items-center gap-2">
          <span className="text-white/50">(10)</span>
          Contact
        </p>

        <h2 className="mt-5 font-display uppercase tracking-[0.02em] text-white leading-[0.9] text-[clamp(2.9rem,8.5vw,7rem)]">
          Let's build something{' '}
          <span className="text-primary">useful.</span>
        </h2>

        <p className="mt-6 text-[15px] leading-7 text-night-muted max-w-xl">
          I'm open to internship opportunities, entry-level roles, and Java full-stack development
          opportunities.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-[13px] text-cream hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-14 pt-8 border-t border-night-line flex flex-wrap items-center justify-between gap-6">
          <div>
            <a href="#home" className="font-display text-[22px] uppercase tracking-[0.04em] text-white">
              Sanjay<span className="text-primary">.B</span>
            </a>
            <p className="mt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-night-muted">
              <MapPin size={10} className="text-primary" />
              {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <FooterIcon href={profile.github} icon={Github} label="GitHub" />
            <FooterIcon href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
            <FooterIcon href={profile.leetcode} icon={Code2} label="LeetCode" />
            <FooterIcon href={`mailto:${profile.email}`} icon={Mail} label="Email" />
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-night-muted hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={13} />
          </a>
        </div>

        <div className="mt-6 pt-5 border-t border-night-line flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-night-muted">
            &copy; 2026 Sanjay B. All Rights Reserved.
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
      className="w-9 h-9 rounded-lg flex items-center justify-center bg-night-card text-night-muted hover:bg-primary hover:text-white transition-colors border border-night-line"
    >
      <Icon size={15} />
    </a>
  )
}