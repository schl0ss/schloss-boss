import SectionHeading from "./SectionHeading";
import ScrollFadeIn from "./ScrollFadeIn";
import { LINKS } from "@/lib/constants";

const CONTACT_LINKS = [
  { label: "maschlosser@me.com", href: "mailto:maschlosser@me.com" },
  { label: "LinkedIn", href: LINKS.linkedin },
  { label: "Resume (PDF)", href: LINKS.resume },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <SectionHeading>Contact</SectionHeading>
      <ScrollFadeIn delay={1000}>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
          Interested in working together? Let&apos;s connect.
        </p>
      </ScrollFadeIn>
      <ul className="list-none p-0 m-0">
        <ScrollFadeIn stagger={200} delay={1200}>
          {CONTACT_LINKS.map((link) => (
            <li key={link.label} className="flex items-baseline gap-3 mb-3">
              <span className="text-xs font-mono text-[var(--color-accent)] border border-[var(--color-accent-dim)] px-2 py-0.5 rounded">
                Connect
              </span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)] focus-visible:outline-none transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ScrollFadeIn>
      </ul>
    </section>
  );
}
