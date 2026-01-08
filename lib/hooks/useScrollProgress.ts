'use client';

import { useEffect, useRef, useState } from "react";

type UseScrollProgressOptions = {
  startOffsetPx?: number;
  endOffsetPx?: number;
  steps?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function useScrollProgress<T extends HTMLElement>(options: UseScrollProgressOptions = {}) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;

    const update = () => {
      const elementTop = el.getBoundingClientRect().top + window.scrollY;
      const startOffsetPx = options.startOffsetPx ?? 0;
      const endOffsetPx = options.endOffsetPx ?? el.offsetHeight;

      const start = elementTop + startOffsetPx;
      const end = elementTop + endOffsetPx;
      const range = Math.max(1, end - start);

      const raw = (window.scrollY - start) / range;
      const nextProgress = clamp(raw, 0, 1);

      const stepCount = options.steps ?? 0;
      const nextStep = stepCount >= 2 ? Math.round(nextProgress * (stepCount - 1)) : 0;

      setProgress(nextProgress);
      setStep(nextStep);
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    update();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.cancelAnimationFrame(rafId);
    };
  }, [options.endOffsetPx, options.startOffsetPx, options.steps]);

  return { ref, progress, step };
}
