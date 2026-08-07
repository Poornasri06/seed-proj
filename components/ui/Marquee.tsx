'use client';
import { motion } from 'framer-motion';

export function Marquee({ items, speed = 40 }: { items: string[]; speed?: number }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink py-7">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="label text-white/40 hover:text-gold transition-colors flex items-center gap-16 shrink-0"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
          </span>
        ))}
      </motion.div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
