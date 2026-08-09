import { experience } from '../data/content'
import Section from './Section'
import ExtLink from './ExtLink'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((job) => (
          <article key={job.company}>
            <h3 className="font-serif text-lg font-bold tracking-tight text-ink">
              {job.company}
              <span className="font-sans text-sm font-normal text-muted">
                {' '}
                — {job.place}
              </span>
            </h3>
            <div className="mt-3 space-y-6">
              {job.roles.map((role) => (
                <div key={role.title} className="border-l-2 border-rule pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-sm font-semibold text-ink">{role.title}</h4>
                    <span className="font-mono text-xs text-faint">{role.date}</span>
                  </div>
                  <p className="mt-1.5 max-w-[680px] text-[15px] leading-relaxed text-ink-soft">
                    {role.summary}
                  </p>
                  {role.meta && (
                    <p className="mt-1.5 font-mono text-xs text-faint">{role.meta}</p>
                  )}
                  {role.evidence.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
                      {role.evidence.map((e) => (
                        <ExtLink key={e.label} href={e.href}>
                          [{e.label}]
                        </ExtLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
