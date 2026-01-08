'use client';

import Link from "next/link";

import { cn } from "@/lib/cn";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
            <span className="font-serif text-lg font-semibold text-primary">M</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg font-semibold tracking-tight text-foreground">
              Mudubayush
            </div>
            <div className="text-xs font-medium text-foreground/70">Ayurveda & Wellness</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          <Link href="#home" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="#about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#treatments" className="transition-colors hover:text-foreground">
            Treatments
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
