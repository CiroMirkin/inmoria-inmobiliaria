"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { PROPERTIES } from '@/lib/data'
import PropertyCardHorizontal from './PropertyCardHorizontal'

const featured = PROPERTIES.filter((p) => !p.reserved).slice(0, 6)

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % featured.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
        <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
            Propiedades destacadas
        </p>
        <div className="relative h-50">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden" />
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                    >
                    <PropertyCardHorizontal property={featured[index]} />
                </motion.div>
            </AnimatePresence>
        </div>
        <div className="flex gap-1.5 mt-3">
            {featured.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'bg-white w-6' : 'bg-white/30 w-2'}`}
                />
            ))}
        </div>
    </div>
  )
}