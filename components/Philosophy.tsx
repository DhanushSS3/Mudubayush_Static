import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

export function Philosophy({ className }: { className?: string }) {
  return (
    <section className={cn("py-16 md:py-24 bg-muted/35", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Our Philosophy
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Healing as a Responsibility, Not a Business
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground/80">
              In our family, healing has always been regarded as a form of service — performed with sincerity,
              humility, and devotion. Treatment is approached as a responsibility toward the patient’s well-being,
              rather than a commercial transaction.
            </p>
            <p className="mt-4 text-base leading-7 text-foreground/80">
              Our methods focus on supporting the body’s natural healing capacity through traditional techniques,
              external therapies, and carefully prepared herbal applications, guided by experience and observation
              passed down through generations.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
