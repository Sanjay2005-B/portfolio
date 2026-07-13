import { Eye, Download, FileText } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Resume() {
  return (
    <section id="resume" className="border-b border-line dark:border-dark-line bg-soft/60 dark:bg-dark-surface/40">
      <div className="container-content py-20">
        <div className="card p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent shrink-0">
              <FileText size={22} />
            </span>
            <div>
              <p className="eyebrow">resume</p>
              <h2 className="mt-1 text-xl sm:text-2xl font-bold text-ink dark:text-white">
                Full details — experience, education, skills
              </h2>
              <p className="mt-1.5 text-[14.5px] text-muted dark:text-slate-400">
                Updated for the current application cycle.
              </p>
            </div>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 sm:flex-none"
            >
              <Eye size={16} />
              View Resume
            </a>
            <a href={profile.resumePath} download className="btn-primary flex-1 sm:flex-none">
              <Download size={16} />
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
