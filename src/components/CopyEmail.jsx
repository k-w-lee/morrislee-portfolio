import { useState } from 'react'
import { profile } from '../data/content'

export default function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="Click to copy"
      className="group cursor-pointer text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent transition-colors"
    >
      {copied ? 'copied to clipboard' : profile.email}
      {!copied && (
        <span
          aria-hidden="true"
          className="inline-block translate-y-px pl-1 text-[0.8em] opacity-0 transition-opacity group-hover:opacity-100"
        >
          ⧉
        </span>
      )}
    </button>
  )
}
