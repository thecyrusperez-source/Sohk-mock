import React from 'react';
import Reveal from './Reveal.jsx';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative isolate py-32 md:py-48 bg-ink overflow-hidden">
      {/* Soft two-tone wash — replaces the sparks */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 opacity-40 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(50% 60% at 20% 50%, rgba(63,167,255,0.18), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 opacity-50 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(50% 60% at 80% 50%, rgba(255,90,44,0.20), transparent 70%)',
        }}
      />

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
