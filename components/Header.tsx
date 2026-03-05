import { SITE, NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <nav className="max-w-3xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-widest text-[var(--color-accent)]"
        >
          {SITE.name}
        </a>
        <ul className="flex gap-6 text-sm text-[var(--color-text-secondary)]">
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
      </nav>
    </header>
  );
}
