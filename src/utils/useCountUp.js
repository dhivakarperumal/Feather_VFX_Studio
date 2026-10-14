/**
 * useCountUp — Animates a number from 0 → target when the element enters the viewport.
 *
 * @param {string|number} value      - The display value e.g. "100+" or "60+" or 42
 * @param {number}        duration   - Animation duration in ms (default 1800)
 * @param {number}        delay      - Delay before starting in ms (default 0)
 *
 * Returns { ref, display } — attach `ref` to the element, render `display` as the text.
 */
import { useEffect, useRef, useState } from 'react';

export function useCountUp(value, duration = 1800, delay = 0) {
  // Parse numeric part and suffix (e.g. "100+" → { num: 100, suffix: "+" })
  const raw = String(value);
  const match = raw.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : raw;

  const [display, setDisplay] = useState(target === 0 ? raw : `0${suffix}`);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (target === 0) return; // nothing to count

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.unobserve(el);

        const startTime = performance.now() + delay;
        let rafId;

        const tick = (now) => {
          if (now < startTime) {
            rafId = requestAnimationFrame(tick);
            return;
          }
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out-expo for a dramatic deceleration
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.round(eased * target);
          setDisplay(`${current}${suffix}`);

          if (progress < 1) {
            rafId = requestAnimationFrame(tick);
          }
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration, delay]);

  return { ref, display };
}
