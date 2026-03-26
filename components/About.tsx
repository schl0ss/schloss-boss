import SectionHeading from "./SectionHeading";

const SKILLS = [
  {
    category: "Primary Stack",
    items: "Snowflake, dbt, Tableau, Google Colab, Fivetran",
  },
  {
    category: "ML / AI",
    items:
      "LLMs/NLP, Sentiment Analysis, Predictive Modeling, Prompt Engineering",
  },
  {
    category: "AI Tools",
    items: "Claude Code (200+ hours), Google Gemini, Cursor",
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
  {
    category: "Other",
    items: "Jira, Salesforce, GitHub, Google Workspace",
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
        Proven track record delivering ML solutions including an 80%+ accurate
        churn prediction model that transformed Customer Success operations from
        zero visibility to proactive intervention. Expert in building
        end-to-end data pipelines from ingestion through transformation to ML
        deployment and visualization.
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
