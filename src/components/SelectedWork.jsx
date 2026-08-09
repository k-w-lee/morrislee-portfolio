import { selectedWork } from '../data/content'
import Section from './Section'
import ExtLink from './ExtLink'

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-mono text-xl tracking-tight text-ink">{value}</div>
      <div className="mt-0.5 font-mono text-[11px] leading-snug text-faint">{label}</div>
    </div>
  )
}

function ArtifactMeta({ item }) {
  const rows = [
    ['Type', item.type],
    ['Status', item.status],
    ['Year', item.year],
    ['Role', item.role],
    ['Artifacts', item.artifacts],
  ]
  return (
    <dl className="grid grid-cols-[112px_1fr] gap-y-1 font-mono text-xs">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="whitespace-nowrap uppercase tracking-wider text-faint">{k}</dt>
          <dd className="text-muted">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function SelectedWork() {
  return (
    <Section id="work" title="Selected Work">
      <div className="space-y-14">
        {selectedWork.map((item) => (
          <article key={item.num} className="grid gap-4 sm:grid-cols-[48px_1fr]">
            <div className="font-mono text-sm text-faint">{item.num}</div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                <h3 className="font-serif text-xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-faint">{item.year}</span>
              </div>

              <p className="mt-2 max-w-[680px] text-[15px] leading-relaxed text-ink-soft">
                {item.desc}
              </p>
              {item.meta && (
                <p className="mt-1.5 font-mono text-xs text-faint">{item.meta}</p>
              )}

              <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
                {item.stats.map((s) => (
                  <Stat key={s.label} {...s} />
                ))}
              </div>

              <div className="mt-5 border-t border-rule pt-4">
                <ArtifactMeta item={item} />
              </div>

              {item.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {item.links.map((l) =>
                    l.href ? (
                      <ExtLink key={l.label} href={l.href}>
                        {l.label}
                      </ExtLink>
                    ) : (
                      <span key={l.label} className="text-faint">
                        {l.label} (link TBD)
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
