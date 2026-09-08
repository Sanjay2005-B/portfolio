import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { nav, profile } from '../data/portfolioData'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = nav.map((n) => n.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-mono text-base font-semibold text-white tracking-tight"
          aria-label="Sanjay B — home"
        >
          Sanjay<span className="text-primary">.B</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const isActive = active === item.href.replace('#', '')
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-primary rounded-full" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.resumePath}
            download
            className="btn-secondary !py-2 !px-4 text-sm"
          >
            <Download size={15} />
            Resume
          </a>
          <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">
            Contact
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-1">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 rounded-md text-white hover:bg-dark-card transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-dark-border bg-dark-bg/95 backdrop-blur-xl">
          <ul className="container-content py-4 flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] font-medium text-gray-300 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-dark-border mt-1 flex gap-2.5">
              <a
                href={profile.resumePath}
                download
                onClick={() => setOpen(false)}
                className="btn-secondary flex-1 text-sm"
              >
                <Download size={15} />
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary flex-1 text-sm"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
