import SectionHeading from "./SectionHeading";

const EDUCATION = [
  {
    school: "Georgia Tech",
    degree: "Master of Science in Analytics",
    year: "2023",
    gpa: "4.0",
    details:
      "Top-5 nationally ranked program. Graduate-level courses across Computing, Engineering, and Business in ML/AI, statistical modeling, data pipelines, visualization, and optimization.",
  },
  {
    school: "SMU",
    degree: "BS Mathematics",
    year: "2008",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <SectionHeading>Education</SectionHeading>
      <div className="grid gap-8">
        {EDUCATION.map((edu) => (
          <div key={edu.school}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <span className="font-mono text-[var(--color-text-primary)]">
                  {edu.degree}
                </span>
                <span className="text-[var(--color-text-secondary)] text-sm">
                  {" "}
                  · {edu.school}
                </span>
                {edu.gpa && (
                  <span className="text-xs font-mono text-[var(--color-accent)] border border-[var(--color-accent-dim)] px-2 py-0.5 rounded ml-2">
                    {edu.gpa} GPA
                  </span>
                )}
              </div>
              <span className="font-mono text-xs text-[var(--color-text-muted)] shrink-0">
                {edu.year}
              </span>
            </div>
            {edu.details && (
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2">
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
