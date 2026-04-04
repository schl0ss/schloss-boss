import SectionHeading from "./SectionHeading";
import ScrollFadeIn from "./ScrollFadeIn";

const EDUCATION = [
  {
    school: "Georgia Tech",
    degree: "Master of Science in Analytics",
    year: "2023",
    gpa: "4.0",
    details: [
      "Top-5 nationally ranked interdisciplinary program spanning Computing, Engineering, and Business. The program is called Analytics, not Data Science, because the craft goes beyond precision. Analytics is the art of turning data into decisions that move people and organizations.",
      "Every model was built from the ground up. No black boxes. We learned the mathematics, wrote the code, and understood why it worked before we ever touched a library. That foundation proved instrumental during my practicum, where I implemented neural networks and attention mechanisms to build NLP models from scratch.",
      "Graduate-level coursework in ML/AI, statistical modeling, NLP, data pipelines, visualization, and optimization.",
    ],
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
      <ScrollFadeIn stagger={200} delay={1000} className="grid gap-8">
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
            {edu.details?.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
}
