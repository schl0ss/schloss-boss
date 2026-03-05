import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-8">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-8 flex justify-between items-center text-xs text-[var(--color-text-muted)]">
        <span>
          &copy; {new Date().getFullYear()} {SITE.name}
        </span>
        <span className="font-mono">{SITE.tagline}</span>
      </div>
    </footer>
  );
}
