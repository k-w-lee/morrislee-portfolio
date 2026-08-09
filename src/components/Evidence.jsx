import { evidenceGallery } from '../data/content'
import Section from './Section'

function MediaItem({ item }) {
  const poster = item.type === 'video' ? item.src.replace(/\.mp4$/, '.jpg') : undefined
  return (
    <figure>
      {item.type === 'image' ? (
        <a href={item.src} target="_blank" rel="noopener noreferrer">
          <img
            src={item.src}
            alt={item.caption}
            loading="lazy"
            className="aspect-[4/3] w-full rounded border border-rule object-cover hover:opacity-90 transition-opacity"
          />
        </a>
      ) : (
        <video
          src={item.src}
          poster={poster}
          controls
          preload="none"
          className="aspect-[4/3] w-full rounded border border-rule bg-black object-cover"
        />
      )}
      <figcaption className="mt-1.5 font-mono text-[11px] text-faint">
        {item.caption}
      </figcaption>
    </figure>
  )
}

export default function Evidence() {
  return (
    <Section id="evidence" title="Evidence">
      <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-ink-soft">
        Claims above, receipts below. Photos and recordings from talks, team
        work, and open-source contributions.
      </p>
      <div className="space-y-12">
        {evidenceGallery.map((group) => (
          <article key={group.id}>
            <h3 className="font-serif text-lg font-bold">{group.title}</h3>
            <p className="mt-1 text-sm text-muted">{group.caption}</p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {group.media.map((item) => (
                <MediaItem key={item.src} item={item} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
