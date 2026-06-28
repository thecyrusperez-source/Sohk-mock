import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Hand-sketch graffiti SOHK intro.
 * Each letter outline draws in sequence, then a fill snaps in with a tiny
 * bounce + camera push. Finally the whole tag scales down and slides to the
 * navbar position. After completion the overlay unmounts so the page is fully
 * interactive — no leftover blur, no loading veil.
 */

// Letter outline paths, identical in geometry to Logo.jsx so the visual
// matches the static logo perfectly.
const LETTER_PATHS = {
  S: 'M22 14 L100 14 Q116 14 116 28 L116 38 Q116 52 100 52 L52 52 Q44 52 44 58 Q44 64 52 64 L100 64 Q120 64 120 82 L120 96 Q120 110 100 110 L18 110 L18 92 L96 92 Q100 92 100 88 Q100 84 96 84 L42 84 Q22 84 22 66 L22 50 Q22 36 42 36 L88 36 Q92 36 92 32 Q92 28 88 28 L22 28 Z',
  O: 'M155 14 L215 14 Q235 14 235 34 L235 90 Q235 110 215 110 L155 110 Q135 110 135 90 L135 34 Q135 14 155 14 Z',
  H: 'M252 14 L284 14 L284 50 L324 50 L324 14 L356 14 L356 110 L324 110 L324 72 L284 72 L284 110 L252 110 Z',
  K: 'M372 14 L404 14 L404 50 L438 14 L478 14 L432 60 L482 110 L440 110 L404 72 L404 110 L372 110 Z',
};

const STAR_PATH =
  'M125 18 l3 7 l7 0 l-6 5 l2 7 l-6 -4 l-6 4 l2 -7 l-6 -5 l7 0 z';

const drawSequence = (delay) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.32, delay, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.12, delay },
    },
  },
});

export default function LogoIntro({ onComplete }) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState('drawing'); // drawing → fill → fly → done
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (reduce) {
      onCompleteRef.current?.();
      setPhase('done');
      return;
    }
    const t1 = setTimeout(() => setPhase('fill'), 850);
    const t2 = setTimeout(() => setPhase('fly'), 1250);
    const t3 = setTimeout(() => {
      setPhase('done');
      onCompleteRef.current?.();
    }, 1850);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reduce]);

  if (phase === 'done') return null;

  const isFilled = phase === 'fill' || phase === 'fly';
  const isFlying = phase === 'fly';

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFlying ? 0 : 1 }}
      transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: isFlying ? 'none' : 'auto' }}
      aria-hidden
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.96, opacity: 1 }}
        animate={
          isFlying
            ? {
                // fly to navbar logo position (top-left), shrink small
                scale: 0.18,
                x: 'calc(-50vw + 8.5rem)',
                y: 'calc(-50vh + 2.6rem)',
                opacity: 0,
              }
            : isFilled
            ? { scale: [1, 1.04, 1], opacity: 1 }
            : { scale: 1, opacity: 1 }
        }
        transition={
          isFlying
            ? { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <svg
          viewBox="-8 0 540 140"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[min(72vw,520px)] h-auto"
          aria-hidden
        >
          <g transform="translate(0,4) skewX(-6)">
            {/* S */}
            <motion.path
              d={LETTER_PATHS.S}
              fill={isFilled ? '#F7F7F5' : 'transparent'}
              stroke="#F7F7F5"
              strokeWidth={isFilled ? 4 : 1.4}
              strokeLinejoin="round"
              strokeLinecap="round"
              {...drawSequence(0.05)}
            />
            <motion.path
              d={STAR_PATH}
              fill={isFilled ? '#F7F7F5' : 'transparent'}
              stroke="#F7F7F5"
              strokeWidth={isFilled ? 2 : 1.2}
              {...drawSequence(0.45)}
            />
            {/* O */}
            <motion.path
              d={LETTER_PATHS.O}
              fill={isFilled ? '#F7F7F5' : 'transparent'}
              stroke="#F7F7F5"
              strokeWidth={isFilled ? 4 : 1.4}
              strokeLinejoin="round"
              strokeLinecap="round"
              {...drawSequence(0.25)}
            />
            {/* H */}
            <motion.path
              d={LETTER_PATHS.H}
              fill={isFilled ? '#F7F7F5' : 'transparent'}
              stroke="#F7F7F5"
              strokeWidth={isFilled ? 4 : 1.4}
              strokeLinejoin="round"
              strokeLinecap="round"
              {...drawSequence(0.45)}
            />
            {/* K */}
            <motion.path
              d={LETTER_PATHS.K}
              fill={isFilled ? '#F7F7F5' : 'transparent'}
              stroke="#F7F7F5"
              strokeWidth={isFilled ? 4 : 1.4}
              strokeLinejoin="round"
              strokeLinecap="round"
              {...drawSequence(0.65)}
            />
            {/* K wing detail */}
            <motion.path
              d="M484 30 q14 -2 22 6 q-10 -1 -18 6"
              fill="none"
              stroke="#F7F7F5"
              strokeWidth={isFilled ? 3 : 1.2}
              strokeLinecap="round"
              {...drawSequence(0.85)}
            />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
