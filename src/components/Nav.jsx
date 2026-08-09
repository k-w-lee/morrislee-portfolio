import { useEffect, useState } from 'react'

const items = [
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'education', label: 'Education' },
]

export default function Nav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-[880px] items-center justify-between px-6 py-3">
        <a href="#top" className="font-serif text-sm font-bold tracking-tight">
          Morris Lee
        </a>
        <nav className="hidden gap-5 sm:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-xs text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
