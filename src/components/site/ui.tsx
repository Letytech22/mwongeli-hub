import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/80">
      {children}
    </p>
  );
}

export function Section({
  children,
  tone = "base",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "base" | "alt" | "deep";
  className?: string;
  id?: string;
}) {
  const tones = {
    base: "bg-background text-foreground",
    alt: "bg-secondary text-foreground",
    deep: "bg-primary text-primary-foreground",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} px-5 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-200 no-underline";

const variants = {
  primary: "bg-accent text-accent-contrast hover:opacity-90 hover:-translate-y-0.5",
  dark: "bg-primary text-primary-foreground hover:opacity-90 hover:-translate-y-0.5",
  outline:
    "border border-accent/50 bg-transparent text-foreground hover:bg-accent hover:text-accent-contrast",
  light:
    "border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary",
} as const;

type Variant = keyof typeof variants;

export function ExternalCta({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${btnBase} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function InternalCta({
  to,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} className={`${btnBase} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-accent/20 bg-card p-7 shadow-[0_1px_0_0_var(--color-border)] sm:p-9 ${className}`}
    >
      {children}
    </div>
  );
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[0.95rem] leading-relaxed">
      <span className="mt-0.5 shrink-0 text-accent-foreground">✓</span>
      <span>{children}</span>
    </li>
  );
}

export function Arrow({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[0.95rem] leading-relaxed">
      <span className="mt-0.5 shrink-0 text-accent-foreground">→</span>
      <span>{children}</span>
    </li>
  );
}
