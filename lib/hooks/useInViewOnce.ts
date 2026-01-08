'use client';

import { useEffect, useRef, useState } from "react";

type UseInViewOnceOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useInViewOnce<T extends Element>(options: UseInViewOnceOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver watches when an element enters the viewport.
    // We use it to trigger animations *once*, then disconnect for performance.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        root: options.root ?? null,
        rootMargin: options.rootMargin ?? "0px",
        threshold: options.threshold ?? 0.2,
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options.root, options.rootMargin, options.threshold]);

  return { ref, isInView };
}
