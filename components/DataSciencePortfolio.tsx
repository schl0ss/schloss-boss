import SectionHeading from "./SectionHeading";
import ScrollFadeIn from "./ScrollFadeIn";

const PORTFOLIO_ITEMS = [
  {
    title:
      "Using Natural Language Processing Techniques to Classify Instances of Bullying in Kids' Text Conversations",
    url: "https://drive.google.com/file/d/1_U6eHDzB4FMVnJPEG_GWk19pIkc634Ne/view?usp=share_link",
    note: "Practicum paper",
    description:
      "Built NLP classification models from scratch using XLM-RoBERTa and PyTorch to detect bullying in unstructured text data from a children\u2019s messaging platform.",
  },
  {
    title: "NBA Moneyball: Predicting Player Salary",
    url: "https://drive.google.com/file/d/1UDpnMBsEjJUNADsGKXk7pUEwyUegQUGX/view?usp=share_link",
    note: "Solo project",
    description:
      "Compared 13 ML models (XGBoost, Random Forest, LASSO, SVM, neural networks) with cross-validation to predict NBA player salaries from 47 advanced statistics including PER, RAPTOR WAR, and on/off efficiency sourced from Cleaning the Glass, FiveThirtyEight, and Basketball Reference.",
  },
  {
    title: "College Seeker: Explore the University Universe",
    url: "https://drive.google.com/file/d/1gpd-7HQDyabVS8SUoGZ_ZtsuM_zQAT9G/view?usp=share_link",
    note: "Group project",
    description:
      "Interactive data visualization tool for exploring university data across multiple dimensions including academics, demographics, and outcomes.",
  },
];

export default function DataSciencePortfolio() {
  return (
    <section
      id="data-science"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <SectionHeading>Georgia Tech Project Portfolio</SectionHeading>
      <ScrollFadeIn stagger={200} delay={1000} className="grid gap-8">
        {PORTFOLIO_ITEMS.map((item) => (
          <div key={item.title}>
            <div className="flex items-baseline gap-3 mb-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                {item.title}
                {item.note && (
                  <span className="text-[var(--color-text-secondary)]">
                    {" "}
                    ({item.note})
                  </span>
                )}
              </a>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
}
