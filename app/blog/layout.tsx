export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
        <nav className="max-w-3xl mx-auto px-6 md:px-8 py-4">
          <a
            href="/"
            className="font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            &larr; Back
          </a>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {children}
      </main>
    </div>
  );
}
