import { profile } from '../data/content'
import ExtLink from './ExtLink'
import CopyEmail from './CopyEmail'

export default function Footer() {
  return (
    <footer className="border-t border-rule py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p className="text-sm text-muted">
          Get in touch: <CopyEmail />
        </p>
        <div className="flex gap-4 font-mono text-xs">
          {profile.links.slice(0, 4).map((l) => (
            <ExtLink key={l.label} href={l.href}>
              {l.label}
            </ExtLink>
          ))}
        </div>
      </div>
      <p className="mt-6 font-mono text-[11px] text-faint">
        “Here is what I built. Here is the evidence. Judge the work yourself.”
      </p>
    </footer>
  )
}
