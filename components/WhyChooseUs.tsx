import Image from "next/image";

import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

type WhyChooseUsProps = {
  className?: string;
};

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-primary/5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary/12 ring-1 ring-primary/20">
          <span className="text-sm font-semibold text-primary">{icon}</span>
        </div>
        <div>
          <div className="text-base font-semibold tracking-tight text-foreground">{title}</div>
          <p className="mt-2 text-sm leading-6 text-foreground/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export function WhyChooseUs({ className }: WhyChooseUsProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-muted/35", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Why choose us
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Care that feels grounded, calm, and complete.
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground/80">
              We combine authentic practices with clear guidance so your healing path stays simple and
              supportive.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-3">
          <div className="grid gap-6">
            <Reveal>
              <FeatureCard
                icon="◎"
                title="Authentic Ayurveda"
                desc="Classical principles with personalized routines for your body type."
              />
            </Reveal>
            <Reveal delayClassName="delay-100">
              <FeatureCard
                icon="✦"
                title="Trusted Expertise"
                desc="Guidance shaped by experience, careful listening, and follow-ups."
              />
            </Reveal>
          </div>

          <Reveal delayClassName="delay-150">
            <div className="mx-auto w-full max-w-sm">
              <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm shadow-primary/10">
                <Image
                  src="/why-center.svg"
                  alt="Herbal illustration"
                  width={900}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delayClassName="delay-200">
              <FeatureCard
                icon="❖"
                title="Holistic Care"
                desc="Food, herbs, movement, and rest designed to work together."
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
