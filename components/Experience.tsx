import SectionHeading from "./SectionHeading";
import ScrollFadeIn from "./ScrollFadeIn";

const EXPERIENCE = [
  {
    company: "Schloss Boss AI",
    location: "Frisco, TX",
    title: "Founder",
    dates: "Apr 2026 – Present",
    highlights: [
      "AI consulting, data engineering, and SaaS development using Claude Code and agentic workflows to deliver full projects as a solo engineer",
      "Built and deployed a complete SaaS application (FastAPI, React, PostgreSQL) with fuzzy employer deduplication and automated job ingestion pipeline",
      "Ship production ML models, ETL pipelines, and full-stack applications end-to-end for clients",
    ],
  },
  {
    company: "ExtraHop",
    location: "Remote",
    title: "Business Intelligence & ML Engineer II",
    dates: "Sep 2025 – Feb 2026 (RIF)",
    highlights: [
      "Engineered customer churn prediction model (0.92 AUC, Gradient Boosting) deployed in a Tableau dashboard used daily by Customer Success for over a year",
      "Tested 5 model types (Logistic Regression, Random Forest, Gradient Boosting, XGBoost, LightGBM) with rigorous cross-validation and class weighting",
      "Implemented sentiment analysis pipeline using Snowflake Cortex for support ticket classification and summarization",
      "Built end-to-end ML pipelines: Snowflake data assembly, Python/sklearn modeling, Tableau delivery with prescriptive actions per account",
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
      "Designed data pipelines with dbt and Fivetran ensuring data integrity for mission-critical KPIs",
    ],
  },
  {
    company: "Pinwheel",
    location: "Remote",
    title: "Georgia Tech Practicum Internship",
    dates: "Dec 2022 – Apr 2023",
    highlights: [
      "Built NLP models from scratch using XLM-RoBERTa to classify instances of bullying in unstructured text conversations",
      "Applied transformer and neural network techniques using Python (PyTorch) and Hugging Face on large-scale text data",
    ],
  },
  {
    company: "McKinney Boyd High School",
    location: "McKinney, TX",
    title: "AP Math Teacher & Department Chair",
    dates: "2012 – 2023",
    highlights: [
      "Chaired mathematics department of 20+ teachers, overseeing curriculum development and strategic planning",
      "Helped 1,000+ AP Calculus BC and AP Statistics students earn college credit",
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
          <ScrollFadeIn key={i} stagger={150}>
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
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
