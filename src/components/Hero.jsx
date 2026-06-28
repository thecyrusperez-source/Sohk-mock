import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { asset } from '../utils/asset.js';

const EASE = [0.16, 1, 0.3, 1];
const FIGHTER_LEFT = asset('fighters/fighter-left.jpg');
const FIGHTER_RIGHT = asset('fighters/fighter-right.jpg');

export default function Hero({ revealed }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef(null);

  // Mouse parallax — clamped to a couple of percent
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const handleMove = (e) => {
    if (reduce) return;
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px);
    my.set(py);
  };

  const leftX = useTransform(sx, (v) => v * -28);
  const leftY = useTransform(sy, (v) => v * -16);
  const rightX = useTransform(sx, (v) => v * 28);
  const rightY = useTransform(sy, (v) => v * -16);
  const textX = useTransform(sx, (v) => v * -6);
  const smokeX = useTransform(sx, (v) => v * -12);

  // Scroll-driven subtle parallax on fighters & headline
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end start'],
  });
  const fighterScrollY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textScrollY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textScrollOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Cinematic copy reveal — slower than the fighter entrance
  const seq = (delay) => ({
    initial: { opacity: 0, y: 28 },
    animate: revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 1.2, ease: EASE, delay },
  });

  return (
    <section
      id="hero"
      ref={wrapRef}
      onMouseMove={handleMove}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Background vignette */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-[#050505]" />
        <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-overlay" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 55%, rgba(255,255,255,0.04), transparent 70%)',
          }}
        />
      </div>

      {/* LEFT fighter */}
      <motion.div
        style={{ x: leftX, y: leftY, translateY: fighterScrollY }}
        className="absolute inset-y-0 left-0 w-[58%] md:w-[46%] lg:w-[40%] xl:w-[36%] pointer-events-none"
      >
        <FighterImage
          src={FIGHTER_LEFT}
          alt="SOHK fighter — left"
          position="left"
          revealed={revealed}
          delay={0.6}
        />

        {/* Soft blue cool wash — replaces sparks for atmosphere */}
        <motion.div aria-hidden style={{ x: smokeX }} className="absolute inset-0">
          <div
            className="absolute right-0 top-1/4 h-[70%] w-[80%] rounded-full blur-3xl opacity-50"
            style={{
              background:
                'radial-gradient(ellipse at 70% 40%, rgba(63,167,255,0.20), rgba(63,167,255,0) 65%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* RIGHT fighter */}
      <motion.div
        style={{ x: rightX, y: rightY, translateY: fighterScrollY }}
        className="absolute inset-y-0 right-0 w-[58%] md:w-[46%] lg:w-[40%] xl:w-[36%] pointer-events-none"
      >
        <FighterImage
          src={FIGHTER_RIGHT}
          alt="SOHK fighter — right"
          position="right"
          revealed={revealed}
          delay={0.9}
        />

        <motion.div aria-hidden style={{ x: smokeX }} className="absolute inset-0">
          <div
            className="absolute left-0 top-1/4 h-[70%] w-[80%] rounded-full blur-3xl opacity-55"
            style={{
              background:
                'radial-gradient(ellipse at 30% 40%, rgba(255,90,44,0.22), rgba(255,90,44,0) 65%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Center copy */}
      <motion.div
        style={{ x: textX, y: textScrollY, opacity: textScrollOpacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-[100svh] px-6 pt-24 pb-16"
      >
        <motion.p {...seq(1.4)} className="nav-link text-pearl/70 mb-6 md:mb-8">
          School of Hard Knocks
        </motion.p>

        <motion.h1
          {...seq(1.6)}
          className="display-tight text-pearl text-shadow-soft text-[19vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.6vw] xl:text-[9vw] leading-[0.86] font-normal max-w-[12ch]"
        >
          BUILT FIGHTERS.
        </motion.h1>

        <motion.h2
          {...seq(1.85)}
          className="display-script text-pearl text-shadow-soft text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[7.6vw] xl:text-[7vw] mt-2 md:mt-3 italic"
        >
          Built Different.
        </motion.h2>

        <motion.div
          {...seq(2.15)}
          className="mt-8 md:mt-10 max-w-md text-pearl/75 text-[15px] leading-relaxed"
        >
          <p>The next generation of champions.</p>
          <p>Discipline. Respect. Hard Work.</p>
        </motion.div>

        <motion.a
          {...seq(2.4)}
          href="#programs"
          className="group mt-10 md:mt-12 inline-flex items-center gap-3 rounded-full border border-pearl/35 px-8 py-4 nav-link text-pearl hover:bg-pearl hover:text-ink transition-all duration-500"
        >
          Start Training
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-pearl/40 group-hover:border-ink/40 transition-colors">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 3.6 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-pearl/40"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="block h-6 w-px bg-pearl/40"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FighterImage({ src, alt, position, revealed, delay }) {
  const reduce = useReducedMotion();
  const isLeft = position === 'left';
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60, scale: 1.04 }}
      animate={revealed ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0 }}
      // Slow cinematic fade-in. Was 1.4s, now 3.2s so it feels like a
      // documentary cut rather than a swipe.
      transition={{ duration: 3.2, ease: EASE, delay }}
      className="absolute inset-0 overflow-hidden"
      style={{
        WebkitMaskImage: isLeft
          ? 'linear-gradient(90deg, black 55%, transparent 100%)'
          : 'linear-gradient(270deg, black 55%, transparent 100%)',
        maskImage: isLeft
          ? 'linear-gradient(90deg, black 55%, transparent 100%)'
          : 'linear-gradient(270deg, black 55%, transparent 100%)',
      }}
    >
      <motion.div
        animate={
          reduce
            ? {}
            : {
                scale: [1, 1.012, 1],
                y: [0, -3, 0],
              }
        }
        transition={
          reduce ? {} : { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }
        }
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: isLeft ? '58% 35%' : '50% 28%',
          filter: 'contrast(1.05) saturate(1.06)',
        }}
        aria-label={alt}
        role="img"
      />
    </motion.div>
  );
}
