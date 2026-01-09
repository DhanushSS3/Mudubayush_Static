'use client';

import Image from "next/image";
import { t, useLang } from "@/lib/i18n";

import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";
import { useScrollProgress } from "@/lib/hooks/useScrollProgress";

type HeroProps = {
  className?: string;
};

export function Hero({ className }: HeroProps) {
  const { ref, step } = useScrollProgress<HTMLElement>({ endOffsetPx: 700, steps: 7 });

  const scaleClasses = [
    "scale-110",
    "scale-110",
    "scale-105",
    "scale-105",
    "scale-100",
    "scale-100",
    "scale-100",
  ];

  const scaleClass = scaleClasses[step] ?? "scale-100";
  const lang = useLang();

  // Background slideshow images
  const slides = [
    "/pinterest/home_page1.jpg",
    "/pinterest/home_page2.jpg",
    "/pinterest/home_page3.jpg",
  ];
  const [slide, setSlide] = useState(0);

  // Cycle slides every 5 seconds
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section
      ref={ref}
      id="home"
      className={cn("relative isolate overflow-hidden border-b border-border/70", className)}
    >
      {/* Background image with zoom-out scroll effect */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={slides[slide]}
          alt="Ayurvedic treatment in progress"
          fill
          priority
          sizes="100vw"
          className={cn(
            "object-cover object-center transform-gpu transition-transform duration-500 ease-out",
            scaleClass,
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/75 to-background" />
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col items-start gap-10">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("heroTag", lang)}
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl mt-6">
            {t("heroHeadline", lang)}
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-lg leading-7 text-foreground/85">
            {t("heroSub", lang)}
          </p>

          {/* Body paragraph */}
          <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/75">
            {t("heroBody", lang)}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary/90"
            >
              {t("storyBtn", lang)}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground/85 transition-colors hover:bg-muted"
            >
              {t("contactBtn", lang)}
            </a>
          </div>

          {/* Trust highlights */}
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-2xl border border-border bg-surface/80 p-5">
              <div className="text-sm font-semibold">Practiced for generations</div>
              <div className="mt-1 text-xs text-foreground/70">Family lineage of healers</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface/80 p-5">
              <div className="text-sm font-semibold">Trusted by thousands</div>
              <div className="mt-1 text-xs text-foreground/70">Patients across India</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface/80 p-5">
              <div className="text-sm font-semibold">Orthopedic focus</div>
              <div className="mt-1 text-xs text-foreground/70">Bones, joints & mobility</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface/80 p-5">
              <div className="text-sm font-semibold">Rooted in tradition</div>
              <div className="mt-1 text-xs text-foreground/70">Ayurvedic & Nati Vaidya</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
