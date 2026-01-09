import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

const conditions = [
  "Bone fractures and cracks",
  "Ligament and tendon injuries",
  "Joint pain and arthritis",
  "Neck, back, and spinal discomfort",
  "Disc-related movement conditions",
  "Muscle spasms and stiffness",
  "Nerve weakness affecting mobility",
  "Sports and accident-related injuries",
];

export function Conditions({ className }: { className?: string }) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Conditions We Traditionally Treat
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Orthopedic & Movement Focus
            </h2>
          </div>
        </Reveal>

        <Reveal delayClassName="delay-100">
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {conditions.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-6 text-foreground/80"
              >
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-xl text-xs leading-6 text-foreground/60">
            Treatments are based on traditional assessment methods, and suitability may vary depending on
            individual conditions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
