export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
        <nav className="max-w-3xl mx-auto px-6 md:px-8 py-4">
          <a
            href="/"
            className="font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)] focus-visible:outline-none transition-colors duration-200"
          >
            &larr; Back
          </a>
        </nav>
      </header>
      <main id="main-content" className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {children}
      </main>
      <footer className="border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-8 text-xs text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} SCHLOSS BOSS AI LLC
        </div>
      </footer>
    </div>
  );
}
