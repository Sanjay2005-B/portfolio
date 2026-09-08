import { Eye, Download, FileText } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Resume() {
  return (
    <section id="resume" className="border-t border-dark-border bg-dark-surface/50">
      <div className="container-content py-16 sm:py-20">
        <div className="card p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
              <FileText size={18} />
            </span>
            <div>
              <p className="eyebrow">resume</p>
              <h2 className="mt-1.5 text-xl sm:text-2xl font-bold text-white">
                Full details — experience, education, skills
              </h2>
              <p className="mt-1 text-[13px] text-gray-500">
                Updated for the current application cycle.
              </p>
            </div>
          </div>

          <div className="flex gap-2.5 w-full sm:w-auto">
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 sm:flex-none"
            >
              <Eye size={14} />
              View Resume
            </a>
            <a
              href={profile.resumePath}
              download
              className="btn-primary flex-1 sm:flex-none"
            >
              <Download size={14} />
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
