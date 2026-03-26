import SectionHeading from "./SectionHeading";

const PORTFOLIO_ITEMS = [
  {
    title:
      "Using Natural Language Processing Techniques to Classify Instances of Bullying in Kids' Text Conversations",
    url: "https://drive.google.com/file/d/1_U6eHDzB4FMVnJPEG_GWk19pIkc634Ne/view?usp=share_link",
  },
  {
    title: "NBA Moneyball: Predicting Player Salary",
    url: "https://drive.google.com/file/d/1UDpnMBsEjJUNADsGKXk7pUEwyUegQUGX/view?usp=share_link",
    note: "solo project",
  },
  {
    title: "College Seeker: Explore the University Universe",
    url: "https://drive.google.com/file/d/1gpd-7HQDyabVS8SUoGZ_ZtsuM_zQAT9G/view?usp=share_link",
    note: "group project",
  },
];

export default function DataSciencePortfolio() {
  return (
    <section
      id="data-science"
      className="py-16 md:py-20 border-t border-[var(--color-border)]"
    >
      <SectionHeading>Data Science Portfolio</SectionHeading>
      <ul className="grid gap-4">
        {PORTFOLIO_ITEMS.map((item) => (
          <li key={item.title}>
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
              {" "}&rarr;
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
