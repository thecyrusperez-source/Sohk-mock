import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { asset } from '../utils/asset.js';

const LOGO_SRC = asset('logo/sohk-full.png');

/**
 * SOHK tag intro. Total length ~4.3s.
 *
 * Sequence:
 *   0.00s  start
 *   0.00s  S sprays in   (0.7s wipe)
 *   0.50s  O sprays in
 *   1.00s  H sprays in
 *   1.50s  K sprays in
 *   2.00s  "ACHIEVEMENT" tag inks in
 *   2.80s  whole tag pulses + locks (0.5s)
 *   3.30s  brief hold
 *   3.40s  flies to navbar (0.9s)
 *   4.30s  unmount
 *
 * Each letter is a separate layer of the same source PNG, clipped to its
 * letter region. The reveal is a left-to-right inset wipe — simulates the
 * graffiti being sprayed across the canvas.
 */

// Approximate letter regions in the source image (x percentages).
// The graffiti is intertwined so regions overlap; the layered ordering
// produces the right visual stack.
const LETTERS = [
  { id: 'S', left: 0,  right: 30 },
  { id: 'O', left: 26, right: 50 },
  { id: 'H', left: 46, right: 70 },
  { id: 'K', left: 66, right: 100 },
];

// "ACHIEVEMENT" tag region — bottom right, below the K
const TAG_REGION = { left: 60, right: 100, top: 65, bottom: 100 };

export default function LogoIntro({ onComplete }) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState('drawing'); // drawing → lock → fly → done
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (reduce) {
      onCompleteRef.current?.();
      setPhase('done');
      return;
    }
    const tLock = setTimeout(() => setPhase('lock'), 2800);
    const tFly = setTimeout(() => setPhase('fly'), 3400);
    const tDone = setTimeout(() => {
      setPhase('done');
      onCompleteRef.current?.();
    }, 4300);
    return () => {
      clearTimeout(tLock);
      clearTimeout(tFly);
      clearTimeout(tDone);
    };
  }, [reduce]);

  if (phase === 'done') return null;

  const isLock = phase === 'lock' || phase === 'fly';
  const isFlying = phase === 'fly';

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFlying ? 0 : 1 }}
      transition={{ duration: 0.55, delay: 0.3, ease: [0.83, 0, 0.17, 1] }}
      style={{ pointerEvents: isFlying ? 'none' : 'auto' }}
      aria-hidden
    >
      <motion.div
        className="relative w-[min(76vw,720px)] aspect-[1554/652]"
        initial={{ scale: 0.98 }}
        animate={
          isFlying
            ? {
                // Fly into the navbar logo slot (top-left).
                scale: 0.18,
                x: 'calc(-50vw + 9rem)',
                y: 'calc(-50vh + 2.6rem)',
              }
            : isLock
            ? { scale: [1, 1.025, 1] }
            : { scale: 1 }
        }
        transition={
          isFlying
            ? { duration: 0.85, ease: [0.83, 0, 0.17, 1] }
            : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
        }
      >
        {/* Each letter — sprayed left-to-right with a slight downward fall */}
        {LETTERS.map((l, i) => (
          <LetterLayer
            key={l.id}
            left={l.left}
            right={l.right}
            delay={0.0 + i * 0.5}
          />
        ))}

        {/* ACHIEVEMENT tag — separate region, inks in last */}
        <TagLayer />
      </motion.div>
    </motion.div>
  );
}

function LetterLayer({ left, right, delay }) {
  // clip-path inset(top right bottom left) — start fully clipped from the
  // right (100% right inset), animate to 0% so the letter "sprays" in.
  const padR = 100 - right;
  return (
    <motion.img
      src={LOGO_SRC}
      alt=""
      draggable={false}
      className="absolute inset-0 w-full h-full select-none"
      style={{ objectFit: 'contain' }}
      initial={{
        clipPath: `inset(0 ${100 - left}% 0 ${left}%)`,
        opacity: 0,
        filter: 'blur(6px)',
      }}
      animate={{
        clipPath: `inset(0 ${padR}% 0 ${left}%)`,
        opacity: 1,
        filter: 'blur(0px)',
      }}
      transition={{
        clipPath: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.4, delay, ease: 'easeOut' },
        filter: { duration: 0.5, delay, ease: 'easeOut' },
      }}
    />
  );
}

function TagLayer() {
  const { left, right, top, bottom } = TAG_REGION;
  return (
    <motion.img
      src={LOGO_SRC}
      alt=""
      draggable={false}
      className="absolute inset-0 w-full h-full select-none"
      style={{ objectFit: 'contain' }}
      initial={{
        clipPath: `inset(${top}% ${100 - right}% ${100 - bottom}% ${left}%)`,
        opacity: 0,
      }}
      animate={{
        clipPath: `inset(${top}% ${100 - right}% ${100 - bottom}% ${left}%)`,
        opacity: 1,
      }}
      transition={{
        opacity: { duration: 0.7, delay: 2.05, ease: [0.16, 1, 0.3, 1] },
      }}
    />
  );
}
