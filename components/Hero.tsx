import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <p className="font-mono text-sm tracking-[0.3em] text-[var(--color-accent)] mb-4">
        {SITE.tagline}
      </p>
      <h1 className="font-bold text-[var(--color-text-primary)] font-mono">
        {SITE.name}
      </h1>
      <p className="mt-6 text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
        {SITE.description}
      </p>
      <p className="mt-4 text-sm text-[var(--color-text-muted)] font-mono">
        {SITE.fullName}
      </p>
    </section>
  );
}
