'use client';

import { cn } from "@/lib/cn";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { useInViewOnce } from "@/lib/hooks/useInViewOnce";

type StatsProps = {
  className?: string;
};

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-7 shadow-sm shadow-primary/5">
      <div className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {value}+
      </div>
      <div className="mt-2 text-sm font-semibold text-foreground/80">{label}</div>
    </div>
  );
}

export function Stats({ className }: StatsProps) {
  const { ref, isInView } = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  const sessions = useCountUp({ to: 250, startWhen: isInView, durationMs: 1400 });
  const years = useCountUp({ to: 15, startWhen: isInView, durationMs: 1200 });

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid items-start gap-10 rounded-3xl border border-border bg-muted/35 p-8 md:grid-cols-[1.2fr_1fr] md:gap-12 md:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Our impact
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Small rituals. Big results.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-foreground/80">
              We focus on steady progress—healthier digestion, calmer sleep, improved energy, and a
              clearer daily routine.
            </p>
          </div>

          <div ref={ref} className="grid gap-6 sm:grid-cols-2">
            <StatCard value={sessions} label="Successful Healing Sessions" />
            <StatCard value={years} label="Years of Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
