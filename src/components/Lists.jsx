import { community, publications, education } from '../data/content'
import Section from './Section'
import ExtLink from './ExtLink'

export function Community() {
  return (
    <Section id="recognition" title="Open Source & Recognition">
      <ul className="space-y-5">
        {community.map((c) => (
          <li key={c.title} className="flex flex-wrap items-baseline justify-between gap-x-6">
            <div>
              <span className="text-[15px] font-medium">{c.title}</span>
              {c.detail && (
                <span className="text-[15px] text-muted"> — {c.detail}</span>
              )}
              <span className="ml-3 inline-flex flex-wrap gap-x-3 font-mono text-xs">
                {c.links.map((l) => (
                  <ExtLink key={l.label} href={l.href}>
                    [{l.label}]
                  </ExtLink>
                ))}
              </span>
            </div>
            <span className="font-mono text-xs text-faint">{c.date}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Publications() {
  return (
    <Section id="research" title="Research">
      <ol className="max-w-[680px] list-decimal space-y-4 pl-6 text-[15px] leading-relaxed text-ink-soft marker:font-mono marker:text-faint">
        {publications.map((p) => (
          <li key={p.href} className="pl-1">
            {p.cite}{' '}
            <ExtLink href={p.href}>[Publication]</ExtLink>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-5">
        {education.map((e) => (
          <div key={e.degree}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <h3 className="text-[15px] font-semibold">
                {e.degree}
                <span className="font-normal text-muted"> — {e.school}</span>
              </h3>
              <span className="font-mono text-xs text-faint">{e.date}</span>
            </div>
            {e.detail && (
              <p className="mt-1 text-sm text-muted">
                {e.detail}{' '}
                {e.link && <ExtLink href={e.link.href}>[{e.link.label}]</ExtLink>}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
