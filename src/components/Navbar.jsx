import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/portfolioData'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = nav.map((n) => n.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-ink-line shadow-card'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between h-[72px]">
        <a href="#home" className="text-left leading-none" aria-label="Sanjay B — home">
          <span className="block font-display text-[26px] uppercase tracking-[0.04em] text-ink">
            Sanjay<span className="text-primary">.B</span>
          </span>
          <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.28em] text-ink-muted mt-0.5">
            Java Full Stack Developer
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const isActive = active === item.href.replace('#', '')
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:flex items-center">
          <a href="#contact" className="btn-primary !px-5 !py-2">
            Let's Talk
          </a>
        </div>

        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 -mr-2 text-ink hover:text-primary transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-ink-line bg-cream">
          <ul className="container-content py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-[26px] uppercase tracking-wide text-ink hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Let's Talk
              </a>
            </li>
            <li className="mt-3">
              <a
                href={profile.resumePath}
                download
                onClick={() => setOpen(false)}
                className="btn-outline w-full"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}