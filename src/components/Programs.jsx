import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

const PROGRAMS = [
  {
    title: 'Youth Boxing',
    blurb: 'Build confidence, focus, and fundamentals.',
    age: 'Ages 7–17',
    icon: GlovesIcon,
  },
  {
    title: 'Competition Team',
    blurb: 'Train like a champ. Fight like a warrior.',
    age: 'Invite only',
    icon: BeltIcon,
  },
  {
    title: 'Private Lessons',
    blurb: 'One-on-one training focused on you.',
    age: 'All levels',
    icon: HeadgearIcon,
  },
  {
    title: 'Fitness Boxing',
    blurb: 'Get in shape. Stress less. Feel unstoppable.',
    age: 'No experience',
    icon: BagIcon,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-32 md:py-40 bg-ink overflow-hidden">
      <div className="container-x">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <Reveal>
            <p className="nav-link text-pearl/50 mb-5">— Programs</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-tight text-pearl text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[5.2vw] leading-[0.9]">
              TRAIN WITH
              <br />
              <span className="text-pearl/60">PURPOSE.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-pearl/65 leading-relaxed">
              Four ways in. Every program built on the same foundation —
              fundamentals, discipline, and the right amount of fire.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={0.05 + i * 0.07} y={40} amount={0.2}>
              <ProgramCard {...p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-16 flex justify-center">
          <a
            href="#schedule"
            className="group inline-flex items-center gap-3 nav-link text-pearl/80 hover:text-pearl transition-colors"
          >
            View all programs
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-pearl/30 group-hover:border-pearl transition-colors">
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

function ProgramCard({ title, blurb, age, icon: Icon }) {
  return (
    <motion.a
      href="#schedule"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
      className="group relative block overflow-hidden rounded-3xl bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-8 md:p-9 min-h-[340px] shadow-card border border-pearl/[0.04]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background: 'radial-gradient(60% 60% at 50% 10%, rgba(255,255,255,0.06), transparent 70%)' }}
           aria-hidden />
      <div className="relative flex h-full flex-col">
        <Icon className="text-pearl w-9 h-9 mb-7 opacity-95" />
        <h3 className="display-tight text-pearl text-3xl md:text-[2rem] leading-none">
          {title}
        </h3>
        <p className="mt-3 text-pearl/65 text-[14.5px] leading-relaxed">{blurb}</p>
        <div className="mt-auto pt-8 flex items-center justify-between">
          <span className="nav-link text-pearl/45 text-[10px]">{age}</span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-pearl/15 group-hover:border-pearl group-hover:bg-pearl group-hover:text-ink transition-all duration-300">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function GlovesIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 24c0-6 5-10 10-10h6c5 0 8 3 8 8v10c0 4-3 7-7 7H22c-4 0-8-3-8-8v-7z" />
      <path d="M22 41v8c0 3 2 4 4 4h11c3 0 4-2 4-4v-4" />
      <path d="M30 28h6" />
    </svg>
  );
}
function BeltIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 28h48l-4 10H12z" />
      <circle cx="32" cy="33" r="6" />
      <path d="M32 28v-6M32 38v6" />
      <path d="M14 28l-4-8M50 28l4-8" />
    </svg>
  );
}
function HeadgearIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 28c0-9 7-16 16-16s16 7 16 16v8c0 7-5 12-12 12h-2v-6h-4v6h-2c-7 0-12-5-12-12v-8z" />
      <path d="M22 36h4M38 36h4" />
    </svg>
  );
}
function BagIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 10h16l-2 6h-12z" />
      <path d="M22 16h20v28c0 6-4 10-10 10s-10-4-10-10z" />
      <path d="M22 32h20" />
    </svg>
  );
}
