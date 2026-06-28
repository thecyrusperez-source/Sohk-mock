import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal.jsx';

export default function Coach() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="coach" ref={ref} className="relative py-32 md:py-44 bg-[#070707] overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <Reveal y={50} className="lg:col-span-6 relative" amount={0.15}>
            <motion.div
              style={{ y }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#0e0e0e]"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/fighters/fighter-right.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 25%',
                  filter: 'grayscale(100%) contrast(1.18) brightness(0.78)',
                }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="nav-link text-pearl/60 text-[10px]">Head Coach</p>
                  <p className="display-tight text-pearl text-3xl mt-1">COACH MARQUEZ</p>
                </div>
                <p className="nav-link text-pearl/45 text-[10px]">30 yrs in the ring</p>
              </div>
            </motion.div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="nav-link text-pearl/50 mb-5">— Meet the Coach</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-tight text-pearl text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.6vw] leading-[0.92]">
                THE MAN BEHIND
                <br />
                <span className="text-pearl/55">THE FIGHTERS.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-pearl/70 leading-relaxed max-w-lg">
                Three decades in the ring. Two Golden Gloves. A wall of pictures
                with kids who came in soft and walked out champions. Coach
                Marquez built SOHK on one rule: nobody outworks us.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <figure className="mt-12 max-w-xl">
                <svg width="32" height="24" viewBox="0 0 32 24" className="text-pearl/30 mb-4" aria-hidden>
                  <path d="M0 24V12C0 5.4 4 1 12 0v4c-4 1-6 4-6 8h6v12H0zm18 0V12c0-6.6 4-11 12-12v4c-4 1-6 4-6 8h6v12H18z" fill="currentColor"/>
                </svg>
                <blockquote className="display-tight text-pearl text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
                  I don&apos;t build boxers.
                  <br />
                  <span className="text-pearl/65">I build the kind of people who don&apos;t quit.</span>
                </blockquote>
                <figcaption className="mt-6 nav-link text-pearl/45 text-[10px]">
                  — Coach Marquez
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
