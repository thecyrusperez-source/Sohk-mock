import React from 'react';
import Reveal from './Reveal.jsx';

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-48 bg-ink overflow-hidden">
      <div className="container-x">
        <div className="max-w-5xl">
          <Reveal>
            <p className="nav-link text-pearl/50 mb-8">— From the gym</p>
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="display-tight text-pearl text-[10vw] sm:text-[7vw] md:text-[5.4vw] lg:text-[4.6vw] leading-[1.02] text-balance">
              &ldquo;I came in as a kid who couldn&apos;t look people in the
              eye. <span className="text-pearl/55">I leave every session walking taller.</span>&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-pearl/10 flex items-center justify-center display-tight text-pearl text-xl">
                M
              </div>
              <div>
                <p className="text-pearl text-[15px]">Mateo R.</p>
                <p className="text-pearl/45 text-[12px] nav-link">— 3 years at SOHK</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
