import { ParallaxImage } from '@/components/parallax-image'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Props = {
  eyebrow: string
  title: string
  intro?: string
  image?: string
  compact?: boolean
}

export function PageHero({ eyebrow, title, intro, image, compact }: Props) {
  if (!image) {
    return (
      <header className={cn('bg-forest pt-36 text-forest-foreground', compact ? 'pb-16 md:pb-20' : 'pb-20 md:pb-28')}>
        <div className="container-site flex flex-col gap-6">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05} as="h1" className="text-display max-w-4xl text-balance text-4xl md:text-6xl lg:text-7xl">
            {title}
          </Reveal>
          {intro && (
            <Reveal delay={0.1} as="p" className="max-w-2xl text-pretty leading-relaxed text-forest-foreground/70 md:text-lg">
              {intro}
            </Reveal>
          )}
        </div>
      </header>
    )
  }

  return (
    <header className="px-3 pt-24 sm:px-4 md:pt-28">
      <ParallaxImage
        src={image}
        alt=""
        priority
        distance={60}
        className="container-site flex min-h-[60vh] flex-col justify-end rounded-[2rem] bg-forest text-forest-foreground md:min-h-[70vh] md:rounded-[2.5rem]"
        imageClassName="opacity-90"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-forest/10" />
        <div className="relative flex flex-col gap-6 px-2 pb-12 md:pb-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05} as="h1" className="text-display max-w-4xl text-balance text-4xl md:text-6xl lg:text-7xl">
            {title}
          </Reveal>
          {intro && (
            <Reveal delay={0.1} as="p" className="max-w-2xl text-pretty leading-relaxed text-forest-foreground/80 md:text-lg">
              {intro}
            </Reveal>
          )}
        </div>
      </ParallaxImage>
    </header>
  )
}
