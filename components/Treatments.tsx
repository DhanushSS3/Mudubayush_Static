import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

type TreatmentsProps = {
  className?: string;
};

const treatments = [
  {
    title: "Abhyanga Therapy",
    desc: "Warm herbal oils and gentle strokes to relax the nervous system and nourish the skin.",
  },
  {
    title: "Shirodhara Ritual",
    desc: "A calming stream of oil on the forehead to support sleep, clarity, and stress relief.",
  },
  {
    title: "Panchakarma Care",
    desc: "A guided cleansing program designed to reset digestion, energy, and overall balance.",
  },
];

export function Treatments({ className }: TreatmentsProps) {
  return (
    <section id="treatments" className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Signature treatments
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Therapies that restore calm and vitality.
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground/80">
              Choose from traditional therapies designed to support immunity, circulation, and deep
              relaxation.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {treatments.map((t, idx) => (
            <Reveal key={t.title} delayClassName={idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : undefined}>
              <div className="group h-full rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-primary/5 transition-colors hover:bg-muted">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary/12 ring-1 ring-primary/20">
                    <span className="font-serif text-lg font-semibold text-primary">
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <div className="text-base font-semibold tracking-tight text-foreground">
                      {t.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-foreground/70">{t.desc}</p>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
