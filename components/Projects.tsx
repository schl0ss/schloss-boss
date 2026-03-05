import SectionHeading from "./SectionHeading";
import { LINKS } from "@/lib/constants";

const PROJECTS = [
  {
    name: "mooring.social",
    url: LINKS.mooringSocial,
    description:
      "A social platform currently in development. Rethinking how communities connect online.",
    status: "In Progress",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-8">
        {PROJECTS.map((project) => (
          <div key={project.name}>
            <div className="flex items-baseline gap-3 mb-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                {project.name} &rarr;
              </a>
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
