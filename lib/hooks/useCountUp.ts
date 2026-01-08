'use client';

import { useEffect, useRef, useState } from "react";

type UseCountUpOptions = {
  from?: number;
  to: number;
  startWhen: boolean;
  durationMs?: number;
};

export function useCountUp({ from = 0, to, startWhen, durationMs = 1400 }: UseCountUpOptions) {
  const [value, setValue] = useState(from);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!startWhen || startedRef.current) return;

    startedRef.current = true;

    let startTime: number | null = null;
    let rafId = 0;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      if (startTime === null) startTime = now;

      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);

      const next = Math.round(from + (to - from) * eased);
      setValue(next);

      if (t < 1) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [durationMs, from, startWhen, to]);

  return value;
}
