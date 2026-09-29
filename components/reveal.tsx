'use client'

import { motion, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: EASE, delay },
  }),
}

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'li' | 'figure' | 'header'
  amount?: number
  once?: boolean
}

export function Reveal({ children, className, delay = 0, as = 'div', amount = 0.25, once = true }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={delay}
    >
      {children}
    </Component>
  )
}

/**
 * Staggers direct children. Wrap each child in <RevealItem />.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  amount = 0.2,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className, as = 'div' }: { children: React.ReactNode; className?: string; as?: 'div' | 'li' | 'article' }) {
  const Component = motion[as]
  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  )
}
