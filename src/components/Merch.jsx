import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

const ITEMS = [
  { name: 'SOHK Tag Hoodie', price: '$78', tone: 'from-[#161616] to-[#0a0a0a]', tag: 'Pearl' },
  { name: 'Built Different Tee', price: '$38', tone: 'from-[#1c1c1c] to-[#0d0d0d]', tag: 'Ink' },
  { name: 'Champion Crewneck', price: '$68', tone: 'from-[#181818] to-[#0c0c0c]', tag: 'Concrete' },
  { name: 'Roadwork Cap', price: '$32', tone: 'from-[#141414] to-[#080808]', tag: 'Pearl' },
];

export default function Merch() {
  return (
    <section id="merch" className="relative py-32 md:py-44 bg-pearl overflow-hidden">
      <div className="container-x">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <Reveal>
            <p className="nav-link text-ink/50 mb-5">— Merch</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-tight text-ink text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[5.2vw] leading-[0.9]">
              WEAR THE
              <br />
              <span className="text-ink/40">WORK.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-ink/65 leading-relaxed max-w-md">
              Heavyweight cotton. Cut clean. Earned, not bought.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06} y={30}>
              <MerchCard {...item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-12 md:mt-16 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 nav-link text-ink/80 hover:text-ink transition-colors"
          >
            Shop the full collection
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-ink/20 group-hover:border-ink transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function MerchCard({ name, price, tone, tag }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      className="group block"
    >
      <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b ${tone} shadow-card`}>
        {/* Apparel silhouette mock */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ApparelSilhouette className="w-3/4 h-3/4 text-pearl/90" />
        </div>
        {/* SOHK chest mark */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-2 flex justify-center">
          <span className="display-tight text-pearl/15 text-6xl md:text-7xl tracking-tight select-none">
            SOHK
          </span>
        </div>
        <div className="absolute top-4 left-4 nav-link text-pearl/55 text-[10px]">
          {tag}
        </div>
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 30%, rgba(255,255,255,0.08), transparent 70%)',
          }}
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <p className="text-ink text-[15px] font-medium">{name}</p>
        <p className="text-ink/70 text-[14px]">{price}</p>
      </div>
    </motion.a>
  );
}

function ApparelSilhouette({ className = '' }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="currentColor" aria-hidden>
      <path d="M30 18 L46 10 Q60 22 74 10 L90 18 L110 30 L98 56 L86 52 L86 130 Q86 134 82 134 L38 134 Q34 134 34 130 L34 52 L22 56 L10 30 Z" opacity="0.95" />
    </svg>
  );
}
