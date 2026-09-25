import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Eye, ArrowUpRight, Download, X } from 'lucide-react'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (!preview) return
    const onKey = (e) => {
      if (e.key === 'Escape') setPreview(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [preview])

  return (
    <section id="certifications" className="border-b border-ink-line">
      <div className="container-content py-20 sm:py-28">
        <div className="relative">
          <span
            className="pointer-events-none select-none absolute -top-10 right-0 font-display text-[7rem] leading-none text-ink/[0.05] hidden sm:block"
            aria-hidden="true"
          >
            06
          </span>
          <p className="eyebrow">
            <span className="text-primary">(06)</span>
            Certifications
          </p>
          <h2 className="section-heading mt-5">Certifications</h2>
          <p className="section-sub">
            Industry-recognized certifications earned through Infosys Springboard.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card p-6 flex flex-col gap-5 group hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <Award size={18} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[22px] uppercase tracking-[0.02em] text-ink leading-[1.05]">
                    {cert.title}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                    Issued by {cert.issuer}
                  </p>
                </div>
              </div>

              <span className="inline-flex self-start items-center gap-1.5 bg-primary/10 text-primary font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-md">
                <Award size={11} />
                {cert.completionDate}
              </span>

              {cert.certificatePath ? (
                <div className="mt-auto pt-5 border-t border-ink-line flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPreview(cert)}
                    className="btn-ghost !px-3.5 !py-2 text-[11px]"
                  >
                    <Eye size={13} />
                    Preview
                  </button>
                  <div className="flex items-center gap-2 ml-auto">
                    <a
                      href={cert.certificatePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline !px-4 !py-2 text-[11px]"
                    >
                      <ArrowUpRight size={13} />
                      View
                    </a>
                    <a
                      href={cert.certificatePath}
                      download={cert.title + '.pdf'}
                      className="btn-primary !px-4 !py-2 text-[11px]"
                    >
                      <Download size={13} />
                      Download
                    </a>
                  </div>
                </div>
              ) : (
                <p className="mt-auto pt-5 border-t border-ink-line font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                  Certificate on file
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8 bg-black/70"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl card overflow-hidden bg-cream"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-ink-line">
                <p className="font-display uppercase tracking-[0.02em] text-ink truncate text-lg">
                  {preview.title}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={preview.certificatePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !px-3.5 !py-2 text-[11px]"
                  >
                    <ArrowUpRight size={13} />
                    Open
                  </a>
                  <a
                    href={preview.certificatePath}
                    download={preview.title + '.pdf'}
                    className="btn-outline !px-3.5 !py-2 text-[11px]"
                  >
                    <Download size={13} />
                    PDF
                  </a>
                  <button
                    type="button"
                    onClick={() => setPreview(null)}
                    aria-label="Close preview"
                    className="flex items-center justify-center w-9 h-9 rounded-md border border-ink text-ink hover:bg-ink hover:text-cream transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <div className="h-[70vh] sm:h-[62vh]">
                <iframe
                  src={preview.certificatePath}
                  title={preview.title}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}