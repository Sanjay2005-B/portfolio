import { Eye, Download, FileText } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Resume() {
  return (
    <section id="resume" className="border-b border-ink-line">
      <div className="container-content py-20 sm:py-28">
        <div className="relative">
          <span
            className="pointer-events-none select-none absolute -top-10 right-0 font-display text-[7rem] leading-none text-ink/[0.05] hidden sm:block"
            aria-hidden="true"
          >
            08
          </span>
          <p className="eyebrow">
            <span className="text-primary">(08)</span>
            Resume
          </p>
          <h2 className="section-heading mt-5">Full details — experience, education, skills</h2>
        </div>

        <div className="mt-12 card p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 max-w-4xl">
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
              <FileText size={20} />
            </span>
            <div>
              <p className="text-[15px] font-semibold text-ink">
                Updated for the current application cycle.
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                Sanjay_B_Resume.pdf
              </p>
            </div>
          </div>

          <div className="flex gap-2.5 w-full sm:w-auto">
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 sm:flex-none"
            >
              <Eye size={14} />
              View
            </a>
            <a href={profile.resumePath} download className="btn-primary flex-1 sm:flex-none">
              <Download size={14} />
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}