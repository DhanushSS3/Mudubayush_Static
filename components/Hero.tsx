'use client';

import Image from "next/image";

import { cn } from "@/lib/cn";
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

  return (
    <section
      ref={ref}
      id="home"
      className={cn(
        "relative isolate overflow-hidden border-b border-border/70",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.svg"
          alt="Ayurveda wellness background"
          fill
          priority
          sizes="100vw"
          className={cn(
            "object-cover object-center transform-gpu transition-transform duration-500 ease-out",
            scaleClass,
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/55 to-background" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Natural healing. Gentle rituals. Lasting balance.
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Ayurveda that brings your body back into harmony.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/80 sm:text-lg">
              Personalized consultations, traditional therapies, and mindful routines crafted to support
              digestion, sleep, immunity, and stress relief.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary/90"
              >
                Get a Consultation
              </a>
              <a
                href="#treatments"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground/85 transition-colors hover:bg-muted"
              >
                Explore Treatments
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-surface/80 p-4">
                <div className="text-sm font-semibold">Authentic</div>
                <div className="mt-1 text-xs text-foreground/70">Classical Ayurveda approach</div>
              </div>
              <div className="rounded-2xl border border-border bg-surface/80 p-4">
                <div className="text-sm font-semibold">Personal</div>
                <div className="mt-1 text-xs text-foreground/70">Plans for your prakriti</div>
              </div>
              <div className="rounded-2xl border border-border bg-surface/80 p-4">
                <div className="text-sm font-semibold">Holistic</div>
                <div className="mt-1 text-xs text-foreground/70">Body, mind & lifestyle</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface/90 p-6 shadow-sm shadow-primary/10 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-serif text-2xl font-semibold">Book an appointment</div>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  Share your details and we’ll get back with available slots.
                </p>
              </div>
              <div className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20 sm:flex">
                <span className="font-serif text-lg">A</span>
              </div>
            </div>

            <form className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="h-12 rounded-xl border border-border bg-white/70 px-4 text-sm text-foreground placeholder:text-foreground/45 outline-none transition-colors focus:border-primary"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="h-12 rounded-xl border border-border bg-white/70 px-4 text-sm text-foreground placeholder:text-foreground/45 outline-none transition-colors focus:border-primary"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold">
                Preferred date
                <input
                  type="date"
                  name="date"
                  className="h-12 rounded-xl border border-border bg-white/70 px-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary/90"
              >
                Request Appointment
              </button>

              <p className="text-xs leading-5 text-foreground/60">
                By submitting, you agree to be contacted about your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
