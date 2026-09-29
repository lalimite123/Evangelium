'use client'

import { useEffect, useState } from 'react'
import { Info } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { Block, Section } from '@/lib/content/satzung'
import type { Dictionary } from '@/lib/i18n/types'
import { cn } from '@/lib/utils'

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return <p className="text-pretty leading-relaxed text-foreground/85">{block.text}</p>
    case 'h':
      return <h3 className="pt-2 font-display text-lg font-semibold tracking-tight text-foreground">{block.text}</h3>
    case 'ol':
      return (
        <ol className="flex flex-col gap-3 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 leading-relaxed text-foreground/85">
              <span className="w-6 shrink-0 font-mono text-sm tabular-nums text-primary">{i + 1}.</span>
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ol>
      )
    case 'ul':
      return (
        <ul className="flex flex-col gap-2.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 leading-relaxed text-foreground/85">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      )
  }
}

export function StatutesBody({ sections, dict }: { sections: Section[]; dict: Dictionary }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  return (
    <section lang="de" className="py-16 md:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <nav aria-label={dict.statutes.tocTitle} className="lg:sticky lg:top-28">
            <p className="eyebrow mb-4 text-muted-foreground">{dict.statutes.tocTitle}</p>
            <ol className="flex flex-col border-l border-border">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={active === s.id ? 'true' : undefined}
                    className={cn(
                      '-ml-px flex items-baseline gap-3 border-l-2 py-2 pl-4 text-sm transition-colors duration-300',
                      active === s.id
                        ? 'border-primary text-foreground'
                        : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground',
                    )}
                  >
                    <span className="w-9 shrink-0 font-mono text-xs tabular-nums">{s.number}</span>
                    <span className="text-pretty">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
            {dict.statutes.languageNote && (
              <p className="mt-8 flex gap-3 rounded-2xl bg-secondary p-4 text-xs leading-relaxed text-muted-foreground" lang={undefined}>
                <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{dict.statutes.languageNote}</span>
              </p>
            )}
          </nav>
        </aside>

        <article className="flex flex-col gap-16 lg:col-span-7 lg:col-start-6">
          {sections.map((s) => (
            <Reveal key={s.id} amount={0.1} as="section" className="scroll-mt-32">
              <div id={s.id} className="flex flex-col gap-6">
                <header className="flex flex-col gap-2 border-b border-border pb-5">
                  <span className="font-mono text-sm tabular-nums text-primary">{s.number}</span>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{s.title}</h2>
                </header>
                <div className="flex flex-col gap-5">
                  {s.blocks.map((b, i) => (
                    <BlockView key={i} block={b} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
          <p className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">{dict.statutes.closing}</p>
        </article>
      </div>
    </section>
  )
}
