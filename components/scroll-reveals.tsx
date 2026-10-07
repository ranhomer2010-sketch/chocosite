"use client";

import { useEffect } from "react";

export function ScrollReveals() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.dataset.visible = "";
        observer.unobserve(element);
        timers.push(setTimeout(() => element.style.removeProperty('--reveal-delay'), 700));
      }
    }, { rootMargin: '0px 0px -48px 0px', threshold: 0.08 });

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 48) {
        element.dataset.visible = "";
        return;
      }

      const parent = element.parentElement;
      if (parent?.matches('.category-grid, .team-grid, .feature-rail')) {
        const index = Array.from(parent.children).indexOf(element);
        element.style.setProperty('--reveal-delay', `${index * 60}ms`);
      }
      element.dataset.revealReady = "";
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
