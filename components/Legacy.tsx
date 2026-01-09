import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

export function Legacy({ className }: { className?: string }) {
  return (
    <section className={cn("py-16 md:py-24 bg-muted/35", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Legacy & Recognition
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Honoring Traditional Knowledge
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground/80">
              In recognition of his lifelong dedication to traditional healing practices, Sri H. C. Eshwar Naik
              received an honorary doctorate from a cultural heritage institution. This honor reflects the respect
              earned by experiential knowledge preserved and practiced through generations.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
