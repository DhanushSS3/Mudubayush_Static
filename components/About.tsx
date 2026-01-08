import Image from "next/image";

import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

type AboutProps = {
  className?: string;
};

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-sm shadow-primary/10">
              <Image
                src="/about-photo.svg"
                alt="Ayurveda ingredients and herbs"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delayClassName="delay-100">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                About our legacy
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Rooted in tradition. Guided by modern care.
              </h2>

              <p className="mt-5 text-base leading-7 text-foreground/80">
                Ayurveda is a time-tested system of healing that supports balance through food, herbs,
                daily routines, and therapies. We combine classical wisdom with thoughtful guidance so
                your wellness journey feels clear, gentle, and sustainable.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <div className="text-sm font-semibold">Personalized assessment</div>
                  <div className="mt-1 text-sm leading-6 text-foreground/70">
                    Understand your prakriti and current imbalances before starting any plan.
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <div className="text-sm font-semibold">Herbal + lifestyle approach</div>
                  <div className="mt-1 text-sm leading-6 text-foreground/70">
                    Support digestion, sleep, and stress with small daily habits.
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary/90"
                >
                  Meet the Practitioner
                </a>
                <a
                  href="#treatments"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground/85 transition-colors hover:bg-muted"
                >
                  View Treatments
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
