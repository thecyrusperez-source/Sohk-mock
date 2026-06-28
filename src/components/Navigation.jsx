import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from './Logo.jsx';

const LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Programs', href: '#programs' },
  { label: 'Coach', href: '#coach' },
  { label: 'The Dogs', href: '#dogs' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Merch', href: '#merch' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ revealed }) {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.7]);
  const blur = useTransform(scrollY, [0, 120], [0, 16]);
  const filter = useTransform(blur, (b) => `blur(${b}px) saturate(140%)`);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : -10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-ink"
        style={{ opacity: bgOpacity, backdropFilter: filter }}
      />
      <div className="relative container-x flex items-center justify-between py-4 md:py-5">
        <a href="#hero" className="block w-36 md:w-44 shrink-0" aria-label="SOHK Home">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-pearl/80 hover:text-pearl transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#schedule"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-pearl/30 px-5 py-2.5 nav-link text-pearl hover:border-pearl hover:bg-pearl hover:text-ink transition-all duration-300"
          >
            Book a Class
            <svg
              width="14"
              height="14"
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
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-pearl/20 text-pearl hover:bg-pearl/5"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -8, pointerEvents: open ? 'auto' : 'none' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden absolute inset-x-0 top-full mx-4 mt-2 rounded-3xl glass p-6 shadow-glass"
      >
        <ul className="flex flex-col gap-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-1 nav-link text-pearl/85 hover:text-pearl"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#schedule"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-full bg-pearl text-ink px-6 py-3 nav-link"
            >
              Book a Class →
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
