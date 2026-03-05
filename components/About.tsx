import SectionHeading from "./SectionHeading";

const SKILLS = [
  {
    category: "AI Engineering",
    items: "Claude Code, Prompt Engineering, Agentic Workflows, MCP",
  },
  {
    category: "100x Techniques",
    items:
      "AI-Assisted Development, Rapid Prototyping, Automated Pipelines",
  },
  {
    category: "Full Stack",
    items: "Next.js, TypeScript, React, Node.js, Tailwind CSS",
  },
  {
    category: "Infrastructure",
    items: "Vercel, Firebase, GitHub Actions, CI/CD",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <SectionHeading>About</SectionHeading>
      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl">
        I build with AI, not just about AI. Shipping real products at speed,
        leveraging Claude Code and modern tooling to deliver what used to take
        teams of ten.
      </p>
      <div className="grid gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill.category}
            className="flex flex-col sm:flex-row sm:gap-4"
          >
            <span className="font-mono text-sm text-[var(--color-accent)] shrink-0 sm:w-44">
              {skill.category}
            </span>
            <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              {skill.items}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
