'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import type { Dictionary } from '@/lib/i18n/types'
import { cn } from '@/lib/utils'

const { paypalHostedButtonId, paypalMeUrl, suggestedAmounts } = siteConfig.donate

function buildPaypalUrl(amount: number | null) {
  if (paypalHostedButtonId) {
    const url = new URL('https://www.paypal.com/donate')
    url.searchParams.set('hosted_button_id', paypalHostedButtonId)
    url.searchParams.set('currency_code', 'EUR')
    if (amount) url.searchParams.set('amount', amount.toFixed(2))
    return url.toString()
  }
  const base = paypalMeUrl.replace(/\/$/, '')
  return amount ? `${base}/${amount}EUR` : base
}

export function PaypalDonate({ dict }: { dict: Dictionary }) {
  const [selected, setSelected] = useState<number | null>(suggestedAmounts[1] ?? null)
  const [custom, setCustom] = useState('')

  const customValue = Number.parseFloat(custom.replace(',', '.'))
  const amount = custom ? (Number.isFinite(customValue) && customValue > 0 ? Math.round(customValue * 100) / 100 : null) : selected
  const href = buildPaypalUrl(amount)

  return (
    <div className="flex flex-col gap-6">
      <fieldset className="flex flex-col gap-3">
        <legend className="eyebrow text-muted-foreground">{dict.donate.paypal.amountLabel}</legend>
        <div className="grid grid-cols-4 gap-2">
          {suggestedAmounts.map((value) => {
            const active = !custom && selected === value
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setSelected(value)
                  setCustom('')
                }}
                className={cn(
                  'rounded-2xl border py-3.5 font-display text-lg font-semibold tabular-nums transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  active
                    ? 'border-primary bg-primary text-primary-foreground shadow-[0_10px_30px_-14px_rgba(63,138,47,0.8)]'
                    : 'border-border bg-background text-foreground hover:border-primary/60',
                )}
              >
                {value} €
              </button>
            )
          })}
        </div>
        <label className="relative block">
          <span className="sr-only">{dict.donate.paypal.customAmount}</span>
          <input
            type="text"
            inputMode="decimal"
            placeholder={dict.donate.paypal.customAmount}
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="w-full rounded-2xl border border-border bg-background px-5 py-3.5 pr-12 text-base tabular-nums text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
          />
          <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-muted-foreground">
            €
          </span>
        </label>
      </fieldset>

      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#003087] px-6 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#001c64] outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <PaypalMark className="size-5" />
        {dict.donate.paypal.button}
        {amount ? <span className="tabular-nums opacity-80">· {amount.toLocaleString('de-DE')} €</span> : null}
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </a>
      <p className="text-xs leading-relaxed text-muted-foreground">{dict.donate.paypal.note}</p>
    </div>
  )
}

function PaypalMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.1 21.3H3.9c-.4 0-.7-.4-.6-.8L6.1 3.1c.1-.4.4-.7.8-.7h6.6c2.2 0 3.8.5 4.7 1.5.8.9 1 2.2.7 3.8-.7 3.6-3 5.5-6.9 5.5H9.9c-.4 0-.7.3-.8.7l-1.2 6.7c-.1.4-.4.7-.8.7Zm7.4-13.9c-.2 1.2-1 2.4-2.9 2.4h-1.4l.7-4.3h1.7c1.2 0 1.7.3 1.9.5.2.3.2.8 0 1.4Z" />
      <path
        opacity=".6"
        d="M19.5 7.9c.6 1 .7 2.3.3 3.9-.8 3.7-3.1 5.6-7 5.6h-1.3c-.4 0-.7.3-.8.7l-.9 5c-.1.4-.4.7-.8.7H6.2l.2-1.2h1.4c.4 0 .7-.3.8-.7l1.2-6.7c.1-.4.4-.7.8-.7H12c3.9 0 6.2-1.9 6.9-5.5.1-.4.1-.8.1-1.1h.5Z"
      />
    </svg>
  )
}
