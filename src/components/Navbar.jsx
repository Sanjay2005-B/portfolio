import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { nav, profile } from '../data/portfolioData'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = nav.map((n) => n.href.replace('#', ''))

export default function Navbar({ theme, toggleTheme }) {
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
          ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur border-b border-line dark:border-dark-line shadow-soft'
          : 'bg-white dark:bg-dark-bg border-b border-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-mono text-[15px] font-semibold text-ink dark:text-white tracking-tight"
          aria-label="Sanjay B — home"
        >
          Sanjay<span className="text-primary">.B</span>
          <span className="text-muted dark:text-slate-400"></span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const isActive = active === item.href.replace('#', '')
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-secondary dark:text-slate-300 hover:text-primary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-primary rounded-full" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-secondary dark:text-slate-300 hover:bg-soft dark:hover:bg-dark-line transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={profile.resumePath} download className="btn-secondary !py-2 !px-4 text-sm">
            <Download size={16} />
            Resume
          </a>
          <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">
            Contact
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-secondary dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 rounded-lg text-ink dark:text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line dark:border-dark-line bg-white dark:bg-dark-bg">
          <ul className="container-content py-3 flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] font-medium text-secondary dark:text-slate-300 hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full text-sm">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
