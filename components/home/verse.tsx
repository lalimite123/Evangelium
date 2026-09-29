import { ParallaxImage } from '@/components/parallax-image'
import { Reveal } from '@/components/reveal'
import type { Dictionary } from '@/lib/i18n/types'

export function Verse({ dict }: { dict: Dictionary }) {
  return (
    <section aria-label={dict.verse.reference} className="container-site py-6 md:py-10">
      <ParallaxImage
        src="/images/hero-bible.png"
        alt=""
        distance={120}
        className="flex min-h-[70vh] items-center justify-center rounded-[2.5rem] bg-forest md:min-h-[80vh]"
        imageClassName="opacity-70"
      >
        <div className="absolute inset-0 bg-forest/55" />
        <figure className="relative flex max-w-4xl flex-col items-center gap-8 px-6 py-24 text-center">
          <Reveal>
            <span className="inline-flex size-12 items-center justify-center rounded-full border border-forest-foreground/25 text-accent">
              <span className="font-display text-2xl leading-none">&ldquo;</span>
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="text-display text-balance text-3xl font-medium leading-tight text-forest-foreground md:text-5xl lg:text-6xl">
              {dict.verse.text}
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <figcaption className="eyebrow flex items-center gap-3 text-forest-foreground/70">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {dict.verse.reference}
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
            </figcaption>
          </Reveal>
        </figure>
      </ParallaxImage>
    </section>
  )
}
