export default function Testimonial() {
  return (
    <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
      <blockquote className="max-w-2xl">
        <p className="text-[var(--color-text-secondary)] leading-relaxed italic">
          &ldquo;Matt was a valuable asset on our data analytics &amp; BI
          engineering team. His knowledge of machine learning modeling, AI,
          SQL, data warehousing &amp; data engineering, as well as data
          visualization made him highly competent. He was also skilled on the
          soft skills side &mdash; gathering customer requirements, presenting
          to stakeholders of all levels, and working with the rest of the
          team.&rdquo;
        </p>
        <footer className="mt-4 font-mono text-sm">
          <span className="text-[var(--color-text-primary)]">
            Ward Williams
          </span>
          <span className="text-[var(--color-text-muted)]">
            {" "}&mdash; BI Manager, ExtraHop
          </span>
        </footer>
      </blockquote>
    </section>
  );
}
