'use client';

import Image from "next/image";
import { useLang, useToggleLang } from "@/lib/i18n";
import Link from "next/link";

import { cn } from "@/lib/cn";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const lang = useLang();
  const toggle = useToggleLang();
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-11 items-center rounded-xl bg-surface px-3 ring-1 ring-border">
            <Image
              src="/logo.png"
              alt="Mudubayush logo"
              width={260}
              height={90}
              priority
              className="h-8 w-auto object-contain"
            />
          </div>
        </Link>

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
          <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="text-sm font-semibold hover:text-primary focus:outline-none"
        >
          {lang === "en" ? "ಕನ್ನಡ" : "EN"}
        </button>
      </div>
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
