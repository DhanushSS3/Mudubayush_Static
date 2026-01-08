import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

type ContactProps = {
  className?: string;
};

export function Contact({ className }: ContactProps) {
  return (
    <section id="contact" className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Contact
              </div>
              <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Let’s plan your wellness journey.
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground/80">
                Reach out for a consultation or ask a question. We’ll reply with available slots and a
                simple next step.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl border border-border bg-surface p-6">
                  <div className="text-sm font-semibold">Address</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">
                    123 Ayurveda Lane, Wellness District
                    <br />
                    Your City, Country
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-surface p-6">
                  <div className="text-sm font-semibold">Phone</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">+00 0000 000 000</div>
                </div>

                <div className="rounded-3xl border border-border bg-surface p-6">
                  <div className="text-sm font-semibold">Email</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">
                    hello@mudubayush.example
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delayClassName="delay-100">
            <div className="rounded-3xl border border-border bg-surface p-7 shadow-sm shadow-primary/10">
              <div className="text-lg font-semibold">Send a message</div>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                Tell us what you’d like help with and we’ll respond shortly.
              </p>

              <form className="mt-6 grid gap-4">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
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
                  Message
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    rows={5}
                    className="rounded-xl border border-border bg-white/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/45 outline-none transition-colors focus:border-primary"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary/90"
                >
                  Submit
                </button>

                <p className="text-xs leading-5 text-foreground/60">
                  We’ll only use your details to respond to your request.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
