import SectionHeading from "./SectionHeading";

const SKILLS = [
  {
    category: "AI Engineering",
    items:
      "Claude Code Skills & Plugins (200+ hrs), Prompt Engineering, Agentic Workflows, MCP",
  },
  {
    category: "ML / AI",
    items:
      "LLMs/NLP, Sentiment Analysis, Predictive Modeling, Snowflake Cortex",
  },
  {
    category: "Primary Stack",
    items: "Snowflake, dbt, Tableau, Google Colab, Fivetran",
  },
  {
    category: "Languages",
    items: "Python, SQL, R",
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
        My path from AP math teacher to ML engineer taught me how to break down
        complex problems and communicate them clearly. At ExtraHop, I built
        predictive models and NLP pipelines with Snowflake Cortex. Now
        I&apos;m pushing into AI-accelerated development &mdash; building custom
        Claude Code skills and plugins, shipping agentic workflows, and using AI
        tooling to deliver what used to take entire teams.
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
