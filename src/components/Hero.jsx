import { profile } from '../data/content'
import ExtLink from './ExtLink'
import CopyEmail from './CopyEmail'

export default function Hero() {
  return (
    <section id="top" className="py-14">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-serif text-4xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-ink-soft">{profile.tagline}</p>
          <p className="mt-1 font-mono text-xs text-faint">{profile.location}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {profile.links.map((l) => (
              <ExtLink key={l.label} href={l.href}>
                {l.label}
              </ExtLink>
            ))}
            <CopyEmail />
          </div>
        </div>
        <img
          src="/media/profile_pic.jpeg"
          alt="Morris Lee"
          className="h-48 w-48 shrink-0 rounded-full border border-rule object-cover"
        />
      </div>

      <div className="mt-8 max-w-[680px] space-y-3 text-[15px] leading-relaxed text-ink-soft">
        {profile.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <p className="mt-8 border-t border-rule pt-6 font-mono text-xs text-muted">
        <span className="mr-3 uppercase tracking-wider text-faint">Focus</span>
        {profile.focus}
      </p>
    </section>
  )
}
