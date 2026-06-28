import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import Sparks from './Sparks.jsx';

const FIGHTERS = [
  {
    name: 'Yahir Marquez',
    weight: 'Lightweight · 132 lb',
    record: '14–1 · 9 KO',
    achievement: 'Golden Gloves Finalist · 2025',
    quote: 'I don’t fight for me. I fight for the people watching.',
    img: '/fighters/fighter-left.jpg',
    color: '#3FA7FF',
    side: 'left',
    pos: '60% 30%',
  },
  {
    name: 'Omari Reed',
    weight: 'Welterweight · 147 lb',
    record: '18–0 · 12 KO',
    achievement: 'National Champion · 2024, 2025',
    quote: 'You don’t rise to the level of your dreams. You fall to the level of your training.',
    img: '/fighters/fighter-right.jpg',
    color: '#FF5A2C',
    side: 'right',
    pos: '50% 30%',
  },
];

export default function Dogs() {
  return (
    <section id="dogs" className="relative py-32 md:py-44 bg-ink overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <Reveal>
              <p className="nav-link text-pearl/50 mb-5">— The Dogs</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-tight text-pearl text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[5.2vw] leading-[0.9]">
                MEET THE
                <br />
                <span className="text-pearl/55">CHAMPIONS.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pearl/65 leading-relaxed">
              The fighters carrying the SOHK name into the ring. Built here.
              Tested everywhere.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {FIGHTERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08} y={50} amount={0.15}>
              <FighterCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FighterCard({ name, weight, record, achievement, quote, img, color, side, pos }) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] aspect-[3/4] md:aspect-[4/5] border border-pearl/[0.04]"
    >
      {/* B&W background */}
      <motion.div
        className="absolute inset-0"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.06 },
        }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: pos,
          filter: 'grayscale(100%) contrast(1.06) brightness(0.78)',
        }}
        aria-hidden
      />
      {/* Color reveal — only the fighter pops in color softly */}
      <motion.div
        className="absolute inset-0 mix-blend-normal"
        variants={{
          rest: { opacity: 0.0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: pos,
          WebkitMaskImage:
            'radial-gradient(60% 70% at 50% 35%, black 40%, transparent 80%)',
          maskImage:
            'radial-gradient(60% 70% at 50% 35%, black 40%, transparent 80%)',
        }}
        aria-hidden
      />

      {/* Sparks behind */}
      <div className="absolute inset-0 opacity-90">
        <Sparks color={color} side={side} density={18} className="absolute inset-0" />
      </div>

      {/* Gradient + content */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
        <div className="flex items-center justify-between gap-3">
          <span
            className="nav-link text-[10px]"
            style={{ color }}
          >
            {achievement}
          </span>
        </div>

        <motion.h3
          variants={{
            rest: { y: 0 },
            hover: { y: -6 },
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="display-tight text-pearl text-4xl md:text-5xl mt-3 leading-none"
        >
          {name.toUpperCase()}
        </motion.h3>

        <div className="mt-4 flex items-center gap-4 text-pearl/65 text-[12px]">
          <span>{weight}</span>
          <span className="h-1 w-1 rounded-full bg-pearl/30" />
          <span>{record}</span>
        </div>

        <p className="mt-5 text-pearl/75 text-[14px] leading-relaxed italic max-w-sm">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </motion.article>
  );
}
