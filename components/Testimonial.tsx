import ScrollFadeIn from "./ScrollFadeIn";

export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] -mx-6 md:-mx-8 lg:mx-[calc(-50vw+50%)] px-6 md:px-8 lg:px-[calc(50vw-50%)]">
      <ScrollFadeIn>
        <blockquote className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed italic">
            &ldquo;Matt was a valuable asset on our data analytics &amp; BI
            engineering team. His knowledge of machine learning modeling, AI,
            SQL, data warehousing &amp; data engineering, as well as data
            visualization made him highly competent. He was also skilled on the
            soft skills side &mdash; gathering customer requirements, presenting
            to stakeholders of all levels, and working with the rest of the
            team.&rdquo;
          </p>
          <footer className="mt-6 font-mono text-sm">
            <span className="text-[var(--color-text-primary)]">
              Ward Williams
            </span>
            <span className="text-[var(--color-text-muted)]">
              {" "}&mdash; BI Manager, ExtraHop
            </span>
          </footer>
        </blockquote>
      </ScrollFadeIn>
    </section>
  );
}
