function TimetableVisual() {
  const cells = [2, 4, 8, 11, 14, 17, 21, 23]
  return (
    <div className="w-full h-full flex flex-col justify-center gap-5 px-7 py-6">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
        <span>Week 15 · Schedule</span>
        <span className="text-primary">conflict-free ✓</span>
      </div>
      <div className="grid grid-cols-6 gap-1.5">
        {['T1', 'T2', 'T3', 'T4', 'T5'].map((d) => (
          <div key={d} className="font-mono text-[9px] text-ink-faint text-center">
            {d}
          </div>
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`h-5 rounded-[3px] ${
              cells.includes(i)
                ? 'bg-primary/85'
                : i % 7 === 0
                ? 'bg-ink/80'
                : 'bg-ink/[0.08] border border-ink-line'
            }`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-4 font-mono text-[9px] uppercase tracking-widest text-ink-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-[2px] bg-primary/85" /> assigned
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-[2px] bg-ink/80" /> locked
        </span>
      </div>
    </div>
  )
}

function HostingVisual() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 px-7 py-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-14 rounded-md border-2 border-ink flex items-center justify-center bg-cream-card">
          <span className="font-mono text-[10px] text-ink font-semibold">ZIP</span>
        </div>
        <span className="text-primary text-lg">→</span>
        <div className="w-14 h-14 rounded-md bg-ink flex items-center justify-center">
          <span className="font-mono text-[9px] text-cream">SPRING</span>
        </div>
        <span className="text-primary text-lg">→</span>
        <div className="w-12 h-14 rounded-md border-2 border-primary bg-primary/10 flex items-center justify-center">
          <span className="font-mono text-[10px] text-primary font-semibold">URL</span>
        </div>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
        zeno deploy — zip → live in seconds
      </span>
      <div className="flex items-center gap-1.5 font-mono text-[9px] text-ink-faint">
        <span className="w-1 h-1 rounded-full bg-emerald-600" />
        auth + per-user isolation enabled
      </div>
    </div>
  )
}

const visuals = {
  'timetable-scheduler': <TimetableVisual />,
  'static-hosting': <HostingVisual />,
}

export default function ProjectPreview({ projectId }) {
  return (
    visuals[projectId] || (
      <div className="w-full h-full flex items-center justify-center font-mono text-[11px] text-ink-faint">
        project preview
      </div>
    )
  )
}