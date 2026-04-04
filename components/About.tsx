import SectionHeading from "./SectionHeading";
import ScrollFadeIn from "./ScrollFadeIn";

const SKILLS = [
  {
    category: "Cutting Edge AI",
    items:
      "Claude Code Skills & Plugins (300+ hrs), LLMs, Prompt Engineering, Agentic Workflows, MCP",
  },
  {
    category: "SaaS Development",
    items:
      "Python, TypeScript, Next.js, React, FastAPI, Node.js, PostgreSQL, Firebase, Tailwind CSS",
  },
  {
    category: "Machine Learning",
    items:
      "NLP (Hugging Face, PyTorch), RAG, Ensemble Methods, Sentiment Analysis, Predictive Modeling, Snowflake Cortex",
  },
  {
    category: "Data ETL/Visualization",
    items: "SQL, Snowflake, dbt, Databricks, Fivetran, Tableau",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <SectionHeading>About</SectionHeading>
      <ScrollFadeIn stagger={200} delay={1000}>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-2xl">
          A software developer used to specialize in one tool like a
          violinist. Pick your instrument, practice until your fingers
          bleed, master the solo. That era is ending. With the growing
          power of AI, one engineer can step into the conductor&apos;s
          chair and lead the entire orchestra at a blistering pace.
          That is what I do. With 300+ hours of AI-accelerated development
          and a Georgia Tech MS in Analytics, I deliver production ML
          models, full ETL pipelines, and complete SaaS applications. Solo.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl">
          Before founding Schloss Boss AI, I taught AP Statistics and BC
          Calculus for over a decade, chairing the math department and
          helping more than 1,000 students earn college credit. When I ran
          out of mountains to climb in education, I went back to school,
          earning an MS in Analytics from Georgia Tech (4.0 GPA) and
          getting early hands-on experience with LLMs by building NLP
          models from scratch during my practicum internship. That
          foundation launched my engineering career: end-to-end data
          pipelines, ML prediction models, and executive data
          visualizations at a cybersecurity SaaS.
        </p>
      </ScrollFadeIn>
      <ScrollFadeIn stagger={150} delay={1400}>
        {SKILLS.map((skill) => (
          <div
            key={skill.category}
            className="flex flex-col sm:flex-row sm:gap-4 mb-6"
          >
            <span className="font-mono text-sm text-[var(--color-accent)] shrink-0 sm:w-52">
              {skill.category}
            </span>
            <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              {skill.items}
            </span>
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
}
