import SectionHeading from "./SectionHeading";
import { LINKS } from "@/lib/constants";

const PROJECTS = [
  {
    name: "mooring.social",
    url: LINKS.mooringSocial,
    description:
      "Anti-algorithm social platform built solo with Claude Code. Next.js, Firebase, real-time feeds \u2014 no recommendation engine, no engagement tricks.",
    status: "In Progress",
  },
  {
    name: "Spike Squad",
    description:
      "Real-time volleyball stat tracker. Built in a weekend using Claude Code agentic workflows.",
    status: "Shipped",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <div className="flex items-baseline justify-between mb-6 [&>h2]:mb-0">
        <SectionHeading>Projects</SectionHeading>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
        >
          GitHub &rarr;
        </a>
      </div>
      <div className="grid gap-8">
        {PROJECTS.map((project) => (
          <div key={project.name}>
            <div className="flex items-baseline gap-3 mb-2">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  {project.name} &rarr;
                </a>
              ) : (
                <span className="font-mono text-[var(--color-text-primary)]">
                  {project.name}
                </span>
              )}
              <span className="text-xs font-mono text-[var(--color-accent)] border border-[var(--color-accent-dim)] px-2 py-0.5 rounded">
                {project.status}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
