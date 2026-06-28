import React, { useEffect, useRef } from 'react';

/**
 * Cinematic spark / ember particle emitter on canvas.
 * Tiny embers drift slowly upward with subtle horizontal sway and warm bloom.
 * Side-effect free — pauses when offscreen and respects prefers-reduced-motion.
 *
 * @param {string} color - hex color of the embers
 * @param {'left'|'right'} side - origin side; embers spawn near edge and drift inward+upward
 * @param {number} density - particles per second (0–60)
 * @param {string} className
 */
export default function Sparks({
  color = '#3FA7FF',
  side = 'left',
  density = 26,
  className = '',
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const lastTimeRef = useRef(0);
  const acc = useRef(0);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, rect.width * dpr);
      canvas.height = Math.max(1, rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      (entries) => {
        visibleRef.current = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const spawn = () => {
      const rect = canvas.getBoundingClientRect();
      // Spawn embers across the inner-edge column, full height — they drift
      // upward and sideways through the faded portion of the fighter image.
      const baseX = side === 'left' ? rect.width * 0.62 : rect.width * 0.38;
      const spreadX = rect.width * 0.5;
      particlesRef.current.push({
        x: baseX + (Math.random() - 0.5) * spreadX,
        y: rect.height * (0.15 + Math.random() * 0.85),
        vx: (side === 'left' ? -1 : 1) * (Math.random() * 0.18),
        vy: -(0.4 + Math.random() * 0.9),
        life: 0,
        ttl: 2.4 + Math.random() * 2.0,
        size: 1.0 + Math.random() * 2.2,
        wob: Math.random() * Math.PI * 2,
        wobSpeed: 0.5 + Math.random() * 1.4,
        hue: Math.random() * 0.6 - 0.3,
      });
    };

    const draw = (t) => {
      rafRef.current = requestAnimationFrame(draw);
      if (!visibleRef.current) {
        lastTimeRef.current = t;
        return;
      }
      const dt = Math.min(0.06, (t - lastTimeRef.current) / 1000 || 0);
      lastTimeRef.current = t;

      acc.current += dt;
      const spawnInterval = 1 / Math.max(1, density);
      while (acc.current > spawnInterval && !prefersReduced) {
        spawn();
        acc.current -= spawnInterval;
      }

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.globalCompositeOperation = 'lighter';

      const arr = particlesRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        p.life += dt;
        if (p.life > p.ttl) {
          arr.splice(i, 1);
          continue;
        }
        p.wob += dt * p.wobSpeed;
        p.x += p.vx + Math.sin(p.wob) * 0.18;
        p.y += p.vy;
        p.vy -= dt * 0.08; // gentle acceleration upward

        const lifeRatio = p.life / p.ttl;
        const fadeIn = Math.min(1, p.life * 5);
        const fadeOut = Math.pow(1 - lifeRatio, 1.4);
        const alpha = fadeIn * fadeOut;
        const size = p.size * (1 - lifeRatio * 0.35);

        // soft glow halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 10);
        grad.addColorStop(0, hexWithAlpha(color, alpha * 0.9));
        grad.addColorStop(0.35, hexWithAlpha(color, alpha * 0.32));
        grad.addColorStop(1, hexWithAlpha(color, 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 10, 0, Math.PI * 2);
        ctx.fill();

        // hot core — bright white-warm pixel
        ctx.fillStyle = `rgba(255, 248, 235, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
    };
  }, [color, side, density]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden
    />
  );
}

function hexWithAlpha(hex, a) {
  const v = hex.replace('#', '');
  const r = parseInt(v.substring(0, 2), 16);
  const g = parseInt(v.substring(2, 4), 16);
  const b = parseInt(v.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
