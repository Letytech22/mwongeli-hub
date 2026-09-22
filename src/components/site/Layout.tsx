import {
  Link,
  useRouterState,
  useLocation,
} from "@tanstack/react-router";

import type { ReactNode } from "react";

import { useEffect, useRef, useState } from "react";

import {
  Bookmark,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import { SUBSTACK } from "@/lib/links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#5b453e] text-white">
      <div className="relative flex min-h-[82px] w-full items-center justify-between px-5 sm:px-7 lg:px-10">

        {/* Left: Name */}
        <Link
          to="/"
          className="shrink-0 no-underline text-white"
        >
          <span className="font-display text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
            Dr. Ruth Mwongeli Muthoka
          </span>
        </Link>

        {/* Center: The Deep Review */}
        <Link
          to="/deep-review"
          className="
            absolute left-1/2 hidden -translate-x-1/2
            no-underline text-white
            md:block
          "
        >
          <span className="font-display text-base font-bold lg:text-xl">
            The Deep Review
          </span>
        </Link>

        {/* Right: Social links */}
        <div className="flex items-center gap-4 sm:gap-5">

          <a
            href="https://www.linkedin.com/in/ruthmwongelimuthoka/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-white transition-opacity hover:opacity-70"
          >
            <Linkedin
              className="h-5 w-5 sm:h-6 sm:w-6"
              strokeWidth={2.4}
            />
          </a>

          <a
            href={SUBSTACK}
            target="_blank"
            rel="noreferrer"
            aria-label="The Deep Review"
            className="text-white transition-opacity hover:opacity-70"
          >
            <Bookmark
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="currentColor"
              strokeWidth={2}
            />
          </a>

          <a
            href="https://instagram.com/ruthmwongeli"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-white transition-opacity hover:opacity-70"
          >
            <Instagram
              className="h-5 w-5 sm:h-6 sm:w-6"
              strokeWidth={2.4}
            />
          </a>

          <a
            href="https://www.facebook.com/ruth.mwongeli.1"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-white transition-opacity hover:opacity-70"
          >
            <Facebook
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="currentColor"
              strokeWidth={2}
            />
          </a>

        </div>
      </div>

      {/* Mobile title */}
      <div className="border-t border-white/10 px-5 pb-3 text-center md:hidden">
        <Link
          to="/"
          className="font-display text-sm font-bold text-white no-underline"
        >
          The Deep Review
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#5b453e] text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-14 text-center sm:px-10 lg:py-16">

        {/* Name */}
        <p className="font-display text-sm font-bold sm:text-base">
          Dr. Ruth Mwongeli Muthoka · Researcher · Founder, EcoRue
        </p>

        {/* Social icons */}
        <div className="mt-10 flex items-center gap-5">

          <a
            href="https://www.linkedin.com/in/ruthmwongelimuthoka/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white transition-opacity hover:opacity-70"
          >
            <Linkedin className="h-6 w-6" strokeWidth={2.3} />
          </a>

          <a
            href={SUBSTACK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Deep Review"
            className="text-white transition-opacity hover:opacity-70"
          >
            <Bookmark
              className="h-6 w-6"
              fill="currentColor"
              strokeWidth={2}
            />
          </a>

          <a
            href="https://instagram.com/ruthmwongeli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white transition-opacity hover:opacity-70"
          >
            <Instagram className="h-6 w-6" strokeWidth={2.3} />
          </a>

          <a
            href="https://www.facebook.com/ruth.mwongeli.1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white transition-opacity hover:opacity-70"
          >
            <Facebook
              className="h-6 w-6"
              fill="currentColor"
              strokeWidth={2}
            />
          </a>

        </div>

        {/* Copyright */}
        <p className="mt-9 text-sm text-white/95 sm:text-base">
  © {new Date().getFullYear()} All Rights Reserved
</p>

      </div>
    </footer>
  );
}

function PageLoader({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#5b453e]">
      <div className="flex flex-col items-center gap-5">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />

        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
          Loading
        </p>
      </div>
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const firstRender = useRef(true);

  useEffect(() => {
    // Do not show loader when the website first opens
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setLoading(true);

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PageLoader show={loading} />

      <SiteHeader />

      <main
        key={location.pathname}
        className="flex-1 animate-[pageFade_0.6s_ease-out]"
      >
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
