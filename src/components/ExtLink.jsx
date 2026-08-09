export default function ExtLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent transition-colors"
    >
      {children}
      <span
        aria-hidden="true"
        className="inline-block translate-y-px pl-0.5 text-[0.8em] opacity-0 transition-opacity group-hover:opacity-100"
      >
        ↗
      </span>
    </a>
  )
}
