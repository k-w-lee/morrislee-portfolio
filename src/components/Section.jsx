export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-rule py-12">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-8">
        {title}
      </h2>
      {children}
    </section>
  )
}
