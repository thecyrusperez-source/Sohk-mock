import React from 'react';
import Reveal from './Reveal.jsx';
import Sparks from './Sparks.jsx';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative isolate py-32 md:py-48 bg-ink overflow-hidden">
      {/* Subtle dual ember edges */}
      <div className="absolute inset-y-0 left-0 w-1/3 opacity-60 pointer-events-none">
        <Sparks color="#3FA7FF" side="left" density={14} className="absolute inset-0" />
      </div>
      <div className="absolute inset-y-0 right-0 w-1/3 opacity-60 pointer-events-none">
        <Sparks color="#FF5A2C" side="right" density={14} className="absolute inset-0" />
      </div>

      <div className="container-x relative text-center">
        <Reveal>
          <p className="nav-link text-pearl/50 mb-8">— Step inside</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-tight text-pearl text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.88] text-balance">
            READY TO BUILD
            <br />
            <span className="text-pearl/55">DIFFERENT?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 text-pearl/70 max-w-md mx-auto">
            Walk in. Train hard. Find out what you&apos;re made of.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full bg-pearl text-ink px-9 py-4 nav-link hover:bg-pearl/90 transition-colors"
            >
              Book Trial →
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-3 rounded-full border border-pearl/30 text-pearl px-9 py-4 nav-link hover:border-pearl hover:bg-pearl/5 transition-colors"
            >
              View Programs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
