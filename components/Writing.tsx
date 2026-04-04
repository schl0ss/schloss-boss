import SectionHeading from "./SectionHeading";
import ScrollFadeIn from "./ScrollFadeIn";

const POSTS = [
  {
    title: "From Violinist to Conductor: The New Software Engineer",
    slug: "/blog/conductor",
    date: "2026",
    description:
      "The shift from coding specialist to AI orchestra conductor. Why your coding background is the prerequisite, not the casualty, of AI-accelerated development.",
  },
  {
    title: "What I've Learned from 300+ Hours of Claude Code",
    slug: "/blog/claude-coding",
    date: "2026",
    description:
      "Skills, plugins, agentic workflows, and MCP, exploring how a CLI-based AI coding assistant changed the way I build software.",
  },
  {
    title: "Teaching AP Stats with an AI Copilot",
    slug: "/blog/ap-stats-skill",
    date: "2026",
    description:
      "How I turned 13 years of AP Statistics teaching notes into a Claude Code skill that walks through inference problems using the 4C Method.",
  },
  {
    title: "Building a Churn Prediction Model from Zero",
    slug: "/blog/churn-model",
    date: "2025",
    description:
      "End-to-end ML pipeline at a PE-backed SaaS company, going from zero predictive capability to a deployed Gradient Boosting model with 0.92 AUC.",
  },
];

export default function Writing() {
  return (
    <section
      id="writing"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <SectionHeading>Writing</SectionHeading>
      <ScrollFadeIn stagger={200} delay={1000} className="grid gap-8">
        {POSTS.map((post) => (
          <div key={post.slug}>
            <div className="flex items-baseline gap-3 mb-2">
              <a
                href={post.slug}
                className="font-mono text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                {post.title} &rarr;
              </a>
              <span className="font-mono text-xs text-[var(--color-text-muted)] shrink-0">
                {post.date}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {post.description}
            </p>
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
}
