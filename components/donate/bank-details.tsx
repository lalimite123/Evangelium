'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import type { Dictionary } from '@/lib/i18n/types'

export function BankDetails({ dict }: { dict: Dictionary }) {
  const [copied, setCopied] = useState(false)

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.bank.iban.replace(/\s/g, ''))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <dl className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-[auto_1fr]">
        <dt className="eyebrow text-muted-foreground">{dict.join.give.holder}</dt>
        <dd className="font-medium text-foreground">{siteConfig.bank.holder}</dd>
        <dt className="eyebrow text-muted-foreground">{dict.join.give.iban}</dt>
        <dd className="font-mono tabular-nums text-foreground">{siteConfig.bank.iban}</dd>
        <dt className="eyebrow text-muted-foreground">{dict.join.give.bic}</dt>
        <dd className="font-mono text-foreground">{siteConfig.bank.bic}</dd>
        <dt className="eyebrow text-muted-foreground">{dict.join.give.bank}</dt>
        <dd className="text-foreground">{siteConfig.bank.bankName}</dd>
        <dt className="eyebrow text-muted-foreground">{dict.donate.bank.reference}</dt>
        <dd className="text-foreground">{siteConfig.donate.transferReference}</dd>
      </dl>
      <button
        type="button"
        onClick={copyIban}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {copied ? <Check className="size-4 text-primary" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
        {copied ? dict.donate.bank.copied : dict.donate.bank.copy}
        <span role="status" aria-live="polite" className="sr-only">
          {copied ? dict.donate.bank.copied : ''}
        </span>
      </button>
    </div>
  )
}
