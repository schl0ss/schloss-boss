import { SITE } from "@/lib/constants";
import TextScramble from "./TextScramble";
import LineFadeIn from "./LineFadeIn";

const SUBTITLE = `${SITE.fullName} | Frisco, TX`;

export default function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <p className="font-mono text-sm tracking-[0.3em] text-[var(--color-accent)] mb-4">
        {SITE.tagline}
      </p>
      <TextScramble
        text={SITE.name}
        duration={3000}
        as="h1"
        className="font-bold text-[var(--color-text-primary)] font-mono"
      />
      <TextScramble
        text={SUBTITLE}
        duration={3000}
        as="p"
        className="mt-2 text-sm font-mono text-[var(--color-text-muted)] tracking-widest"
      />
      <LineFadeIn
        text={SITE.description}
        stagger={400}
        className="mt-6 text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)] max-w-2xl"
      />
    </section>
  );
}
