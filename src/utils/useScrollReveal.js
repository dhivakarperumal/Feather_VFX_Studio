/**
 * useScrollReveal — Lightweight IntersectionObserver-based scroll animation hook.
 * Returns a ref to attach to any element.
 * When the element enters the viewport, the given className is added.
 *
 * @param {string}  revealClass  - CSS class(es) to add when visible (default: 'is-visible')
 * @param {object}  options      - IntersectionObserver options
 * @param {boolean} once         - If true (default), animates only once
 */
import { useEffect, useRef } from 'react';

export function useScrollReveal(
  revealClass = 'is-visible',
  options = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  once = true
) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealClass.split(' ').forEach((cls) => el.classList.add(cls));
          if (once) observer.unobserve(el);
        } else if (!once) {
          revealClass.split(' ').forEach((cls) => el.classList.remove(cls));
        }
      },
      options
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealClass, options, once]);

  return ref;
}

/**
 * useStaggerReveal — Animates a list of children in a staggered sequence.
 * Attach `containerRef` to the parent; children need the 'stagger-child' class.
 *
 * @param {number}  staggerMs  - Delay between each child in ms (default: 80)
 * @param {object}  options    - IntersectionObserver options
 */
export function useStaggerReveal(
  staggerMs = 80,
  options = { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.querySelectorAll('.stagger-child'));
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * staggerMs}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add('is-visible'));
          observer.unobserve(container);
        }
      },
      options
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerMs, options]);

  return containerRef;
}
