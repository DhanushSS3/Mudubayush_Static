import Link from "next/link";

import { cn } from "@/lib/cn";

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-border/70 bg-background", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-serif text-lg font-semibold tracking-tight">Mudubayush</div>
            <div className="mt-1 text-sm text-foreground/70">Ayurveda & Wellness</div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-foreground/75">
            <Link href="#home" className="rounded-full px-3 py-2 transition-colors hover:bg-muted">
              Home
            </Link>
            <Link href="#about" className="rounded-full px-3 py-2 transition-colors hover:bg-muted">
              About
            </Link>
            <Link
              href="#contact"
              className="rounded-full px-3 py-2 transition-colors hover:bg-muted"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-surface text-foreground/70 transition-colors hover:bg-muted"
              aria-label="Instagram"
            >
              I
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-surface text-foreground/70 transition-colors hover:bg-muted"
              aria-label="Facebook"
            >
              F
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-surface text-foreground/70 transition-colors hover:bg-muted"
              aria-label="YouTube"
            >
              Y
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-foreground/60">© {year} Mudubayush. All rights reserved.</div>
      </div>
    </footer>
  );
}
