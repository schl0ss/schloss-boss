import SectionHeading from "./SectionHeading";

const EXPERIENCE = [
  {
    company: "ExtraHop",
    location: "Remote",
    title: "Business Intelligence & ML Engineer II",
    dates: "Sep 2025 – Feb 2026",
    highlights: [
      "Engineered customer churn prediction model achieving 80%+ accuracy, transforming Customer Success from reactive to proactive",
      "Implemented sentiment analysis pipeline using Snowflake Cortex for support ticket classification and summarization",
      "Designed scalable data pipelines using dbt to transform raw data into actionable business insights",
      "Architected end-to-end ML pipelines from data ingestion through model deployment",
    ],
  },
  {
    company: "ExtraHop",
    location: "Remote",
    title: "Data Analytics & Visualization Specialist",
    dates: "Jul 2023 – Sep 2025",
    highlights: [
      "Built executive dashboards in Tableau including \"Support Performance\" and \"Channel Partner Performance\"",
      "Led ML/AI projects using Snowflake Cortex and custom Python solutions",
      "Orchestrated data pipeline ensuring data integrity for mission-critical KPIs",
    ],
  },
  {
    company: "Pinwheel",
    location: "Remote",
    title: "Practicum Intern",
    dates: "Dec 2022 – Apr 2023",
    highlights: [
      "Developed NLP models to classify instances of bullying in unstructured text conversations",
      "Applied neural network techniques using Python (PyTorch) and Hugging Face on large-scale text data",
    ],
  },
  {
    company: "McKinney Boyd High School",
    location: "McKinney, TX",
    title: "AP Math Teacher & Department Chair",
    dates: "2012 – 2023",
    highlights: [
      "Chaired mathematics department of 20+ teachers, overseeing curriculum development and strategic planning",
      "Taught 1,000+ AP Calculus BC and AP Statistics students",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="grid gap-10">
        {EXPERIENCE.map((job, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <div>
                <span className="font-mono text-[var(--color-text-primary)]">
                  {job.title}
                </span>
                <span className="text-[var(--color-text-secondary)] text-sm">
                  {" "}
                  · {job.company}
                </span>
              </div>
              <span className="font-mono text-xs text-[var(--color-text-muted)] shrink-0">
                {job.dates}
              </span>
            </div>
            <ul className="grid gap-1.5 mt-2">
              {job.highlights.map((h, j) => (
                <li
                  key={j}
                  className="text-sm text-[var(--color-text-secondary)] leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-[var(--color-accent)]"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
