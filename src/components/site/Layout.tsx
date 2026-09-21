import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SUBSTACK } from "@/lib/links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="no-underline">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            Dr. Ruth Mwongeli Muthoka
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.14em]">
          <a href="/#work" className="hidden no-underline text-muted-foreground hover:text-foreground sm:inline">
            Work with me
          </a>
          <a href="/#resources" className="hidden no-underline text-muted-foreground hover:text-foreground sm:inline">
            Resources
          </a>
          <a href="/#free-guide" className="no-underline text-accent-foreground hover:opacity-80">
            Free guide
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary px-5 py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 text-center">
        <p className="text-sm font-semibold text-foreground">
          Dr. Ruth Mwongeli Muthoka · Researcher · Founder, EcoRue
        </p>
        <a
          href={SUBSTACK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground no-underline hover:opacity-80"
        >
          Read my writing ↗
        </a>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
