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
                src="/about.jpg"
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
                Our Core Identity
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                An Ancestral Healing Tradition, Practiced Today
              </h2>

              <p className="mt-5 text-base leading-7 text-foreground/80">
                Mudubayush Wellness Pvt Ltd represents the continuation of a traditional healing system practiced in our family for generations. Rooted in Nati Vaidya and classical Ayurvedic principles, this knowledge has been preserved, refined, and responsibly passed down through our ancestors.

For more than 50 years, this tradition was carried forward by Sri H. C. Eshwar Naik, who dedicated his life to supporting patients with bone injuries, joint disorders, ligament conditions, nerve-related issues, and movement limitations. Over the decades, he traditionally treated 50,000+ patients from across Karnataka and India.

Today, this legacy continues through three generations, ensuring continuity of knowledge, discipline, and ethical responsibility.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <div className="text-sm font-semibold">Movement-Focused Traditional Care</div>
                  <div className="mt-1 text-sm leading-6 text-foreground/70">
                    Support for bones, joints, muscles, ligaments, and mobility using time-tested traditional methods.
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <div className="text-sm font-semibold">Hands-On Healing Techniques</div>
                  <div className="mt-1 text-sm leading-6 text-foreground/70">
                    Traditional manual techniques practiced through generations to support alignment, recovery, and movement.
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
