'use client';

import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { useInViewOnce } from "@/lib/hooks/useInViewOnce";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayClassName?: string;
};

export function Reveal({ children, className, delayClassName }: RevealProps) {
  const { ref, isInView } = useInViewOnce<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        "transform-gpu transition-all duration-700 ease-out",
        delayClassName,
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
