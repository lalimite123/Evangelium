'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { Check, X, ChevronDown, ChevronUp, Settings2, Shield, BarChart3, Megaphone } from 'lucide-react'
import { localePath, type Locale } from '@/lib/i18n/config'
import {
  acceptAllConsent,
  onlyNecessaryConsent,
  buildConsent,
  readConsentClient,
  setConsentClient,
  CONSENT_LOCALSTORAGE_KEY,
  type ConsentState,
  type CookieCategory,
} from '@/lib/cookie-consent'
import type { Dictionary } from '@/lib/i18n/types'

type Props = {
  locale: Locale
  dict: Dictionary
  initialState: ConsentState | null
}

const CATEGORY_ICONS: Record<CookieCategory, typeof Shield> = {
  necessary: Shield,
  statistics: BarChart3,
  marketing: Megaphone,
}

export function CookieConsentBanner({ locale, dict, initialState }: Props) {
  const [consent, setConsentState] = useState<ConsentState | null>(initialState)
  const [show, setShow] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)
  const [tempChoices, setTempChoices] = useState<Record<CookieCategory, boolean>>({
    necessary: true,
    statistics: consent?.categories.statistics ?? false,
    marketing: consent?.categories.marketing ?? false,
  })

  useEffect(() => {
    setTempChoices({
      necessary: true,
      statistics: consent?.categories.statistics ?? false,
      marketing: consent?.categories.marketing ?? false,
    })
  }, [consent])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!consent) {
      const fromClient = readConsentClient()
      if (fromClient) {
        setConsentState(fromClient)
        setShow(false)
        return
      }
      setShow(true)
      return
    }
    setShow(false)

    const onStorage = (e: StorageEvent) => {
      if (e.key !== CONSENT_LOCALSTORAGE_KEY || !e.newValue) return
      try {
        const parsed = JSON.parse(e.newValue) as unknown
        if (parsed && typeof parsed === 'object' && 'categories' in (parsed as object)) {
          setConsentState(parsed as ConsentState)
        }
      } catch {
        // noop
      }
    }

    const onOpenSettings = () => {
      setShow(true)
      setExpanded(true)
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener('openCookieSettings', onOpenSettings)
    window.document.addEventListener('openCookieSettings', onOpenSettings as EventListener)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('openCookieSettings', onOpenSettings)
      window.document.removeEventListener('openCookieSettings', onOpenSettings as EventListener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!consent])

  const persist = useCallback(
    (next: ConsentState) => {
      setConsentClient(next)
      setConsentState(next)
      setShow(false)
    },
    [],
  )

  const handleAcceptAll = () => persist(acceptAllConsent())
  const handleRejectAll = () => persist(onlyNecessaryConsent())
  const handleSave = () => persist(buildConsent(tempChoices))

  const toggleCategory = (cat: CookieCategory) => {
    if (cat === 'necessary') return
    setTempChoices((p) => ({ ...p, [cat]: !p[cat] }))
  }

  if (!show) return null

  const consentDict = dict.consent

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={consentDict.title}
      className="fixed inset-x-0 bottom-0 z-[120] px-3 pb-3 pt-1 sm:px-4 sm:pb-4 sm:pt-2"
    >
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-black/10 bg-white/95 shadow-2xl shadow-black/20 backdrop-blur-md">
        <div className="flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-start">
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Settings2 className="size-4" aria-hidden />
              </span>
              <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
                {consentDict.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {consentDict.description}
              <span className="ml-1 inline-flex gap-2 text-xs text-muted-foreground/80">
                <Link
                  href={localePath(locale, 'imprint')}
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  {consentDict.links.imprint}
                </Link>
                <span aria-hidden>·</span>
                <Link
                  href={localePath(locale, 'privacy')}
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  {consentDict.links.privacy}
                </Link>
              </span>
            </p>

            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              className="group inline-flex w-fit items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80"
            >
              {consentDict.customize}
              {expanded ? (
                <ChevronUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden />
              ) : (
                <ChevronDown className="size-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden />
              )}
            </button>

            {expanded && (
              <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-border bg-muted/40 p-3">
                {(['necessary', 'statistics', 'marketing'] as CookieCategory[]).map((cat) => {
                  const cDict = consentDict.categories[cat]
                  const Icon = CATEGORY_ICONS[cat]
                  const checked = cat === 'necessary' ? true : tempChoices[cat]
                  const disabled = cat === 'necessary'
                  return (
                    <label
                      key={cat}
                      className={`group flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-colors ${
                        disabled ? 'bg-muted/60' : 'hover:bg-background'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        onChange={() => toggleCategory(cat)}
                        className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-border text-primary focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed"
                        aria-label={cDict.title}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Icon className="size-4 text-forest" aria-hidden />
                          <span>{cDict.title}</span>
                          {disabled && (
                            <span className="rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-forest">
                              {consentDict.alwaysActive}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {cDict.description}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-all ${
                          checked
                            ? 'border-forest bg-forest text-white'
                            : 'border-border bg-white text-transparent'
                        } ${disabled ? 'opacity-80' : ''}`}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                    </label>
                  )
                })}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 md:w-56 md:shrink-0">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-forest/90 active:scale-[0.99]"
            >
              <Check className="size-4" aria-hidden />
              {consentDict.acceptAll}
            </button>
            {expanded ? (
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                {consentDict.save}
              </button>
            ) : null}
            <button
              type="button"
              onClick={handleRejectAll}
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" aria-hidden />
              {consentDict.rejectAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
