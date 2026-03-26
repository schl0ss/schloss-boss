"use client";

import { useState } from "react";
import { SITE, NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <nav className="max-w-3xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-widest text-[var(--color-accent)]"
        >
          {SITE.name}
        </a>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm text-[var(--color-text-secondary)]">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-[var(--color-text-primary)] transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden border-t border-[var(--color-border)] px-6 py-4 flex flex-col gap-4 text-sm text-[var(--color-text-secondary)]">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:text-[var(--color-text-primary)] transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
