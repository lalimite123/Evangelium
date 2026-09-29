'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

type ParallaxImageProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  /** How far the image travels while scrolling through the viewport (px). */
  distance?: number
  sizes?: string
  priority?: boolean
  children?: React.ReactNode
}

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  distance = 80,
  sizes = '100vw',
  priority,
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-distance, distance])

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0 will-change-transform">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn('object-cover', imageClassName)} />
      </motion.div>
      {children}
    </div>
  )
}
