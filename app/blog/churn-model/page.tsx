import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building a Churn Prediction Model from Zero | SCHLOSS BOSS AI",
  description:
    "How I built an end-to-end churn prediction system — from zero predictive capability to a deployed Gradient Boosting model with 0.92 AUC.",
};

export default function ChurnModelPost() {
  return (
    <article className="prose">
      <header className="mb-12">
        <p className="font-mono text-sm text-[var(--color-text-muted)] mb-2">
          2025
        </p>
        <h1 className="!text-3xl md:!text-4xl font-bold text-[var(--color-text-primary)] !leading-tight !tracking-tight mb-4">
          Building a Churn Prediction Model from Zero
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          How I took a Customer Success team from zero predictive capability
          to proactive intervention with a deployed ML pipeline.
        </p>
      </header>

      <h2>The Problem</h2>
      <p>
        I was working at a PE-backed SaaS company where the Customer Success
        team had <strong>zero predictive capability</strong>. CS reps were
        completely reactive. By the time they knew a customer was at risk of
        not renewing, it was too late to intervene. There was no prior
        predictive infrastructure in place.
      </p>
      <p>
        Under private equity ownership, ARR (Annual Recurring Revenue) is the
        primary success metric. Every churned customer is a direct hit to ARR,
        which drives valuation multiples. This wasn&apos;t just a data science
        project — it was directly protecting the metric that determines
        enterprise value.
      </p>

      <h2>The Data Pipeline</h2>
      <p>
        I built a Snowflake table that combined two event types:
      </p>
      <ul>
        <li>
          <strong>Renewals</strong> from the CRM (won renewal opportunities)
        </li>
        <li>
          <strong>Churns</strong> from customer account records (date of
          customer loss)
        </li>
      </ul>
      <p>
        Filtered to events from 2022 onward, then generated five timeframes
        for each event: at event, 1 month before, 3 months before, 6 months
        before, and 1 year before. Each timeframe was joined to the closest
        customer health score by date using a ranked join.
      </p>
      <p>
        The feature engineering wasn&apos;t just about capturing a single
        health score — it was about structuring the same metric at different
        lead times. This let me answer not just &quot;can we predict
        churn&quot; but <strong>&quot;how far in advance can we predict
        it&quot;</strong> — which is the question the business actually cared
        about.
      </p>

      <h2>Model Selection</h2>
      <p>
        I tested five model types across all timeframes:
      </p>
      <ul>
        <li>Logistic Regression</li>
        <li>Random Forest</li>
        <li>Gradient Boosting</li>
        <li>XGBoost</li>
        <li>LightGBM</li>
      </ul>
      <p>
        Tuning was done with <code>GridSearchCV</code>, train/test splits,
        and class weighting to handle imbalance (via sklearn&apos;s{" "}
        <code>compute_class_weight</code>).
      </p>

      <h3>Why Not Just Accuracy?</h3>
      <p>
        Accuracy is misleading with imbalanced classes. If 90% of customers
        don&apos;t churn, a model that always predicts &quot;no churn&quot;
        gets 90% accuracy but is completely useless.
      </p>
      <p>
        I evaluated on two metrics:
      </p>
      <ul>
        <li>
          <strong>AUC</strong> — discrimination. Can the model rank high-risk
          customers above low-risk ones?
        </li>
        <li>
          <strong>Brier score</strong> — calibration. When the model says 40%
          churn probability, do roughly 40% actually churn?
        </li>
      </ul>
      <p>
        Both matter because the CS team was using probability estimates to
        prioritize outreach. Those numbers had to be trustworthy, not just
        directionally correct.
      </p>

      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Timeframe</th>
            <th>Best Model</th>
            <th>AUC</th>
            <th>Brier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>At event</td>
            <td>Gradient Boosting</td>
            <td>~0.92</td>
            <td>0.078</td>
          </tr>
          <tr>
            <td>1 month before</td>
            <td>Gradient Boosting</td>
            <td>~0.89</td>
            <td>0.071</td>
          </tr>
          <tr>
            <td>3 months before</td>
            <td>Logistic Regression</td>
            <td>0.775</td>
            <td>0.210</td>
          </tr>
          <tr>
            <td>6 months before</td>
            <td colSpan={3} className="!text-[var(--color-text-muted)]">
              Insufficient data (36 samples, 6 churns)
            </td>
          </tr>
          <tr>
            <td>12 months before</td>
            <td colSpan={3} className="!text-[var(--color-text-muted)]">
              Insufficient data
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Key Decisions</h3>
      <p>
        <strong>Gradient Boosting won short-term</strong> — it handled the
        non-linear relationship between health scores and churn better than
        Logistic Regression, consistently outperforming on both AUC and Brier
        score where there was sufficient training data.
      </p>
      <p>
        <strong>Logistic Regression won at 3 months</strong> — Gradient
        Boosting was overfitting on the smaller sample size. I chose the right
        model for each use case, not a one-size-fits-all approach.
      </p>
      <p>
        <strong>I refused to deploy 6/12-month models</strong> — with only 36
        samples and 6 churns at the 6-month window, I recommended not
        deploying despite organizational appetite for longer-range prediction.
        I set a threshold of 150&ndash;200 samples with 30&ndash;40 churns
        and built a data collection plan. Deploying a model with that little
        data would erode trust when it inevitably produced bad predictions.
      </p>

      <h2>Deployment</h2>
      <p>
        The output was surfaced in a <strong>Tableau dashboard</strong> with
        risk tiers and recommended actions. It went all the way to
        prescriptive — specific accounts with recommended next actions for the
        CS team. This wasn&apos;t a model that sat in a notebook. It was a
        tool the CS team used daily for over a year.
      </p>
      <blockquote>
        <p>
          &quot;Matt presented your findings clearly and confidently, answered
          follow up questions, and helped derive real impact on saving at-risk
          customers!&quot;
        </p>
        <footer className="text-sm not-italic text-[var(--color-text-muted)] mt-2">
          — Direct Manager
        </footer>
      </blockquote>

      <h2>What I&apos;d Do Next</h2>
      <p>
        Expand the feature set beyond just the health score: product usage
        data, support ticket volume and sentiment (I built a separate NLP
        pipeline for ticket classification), contract value, number of
        integrations, time since last login.
      </p>
      <p>
        Continue collecting data at 6- and 12-month timeframes. Explore
        time-series approaches that model the trajectory of the health score
        rather than just point-in-time snapshots.
      </p>

      <h2>Stack</h2>
      <p>
        <strong>Snowflake</strong> (data assembly) &rarr;{" "}
        <strong>Python</strong> (modeling — sklearn, GridSearchCV) &rarr;{" "}
        <strong>Tableau</strong> (visualization and delivery)
      </p>
      <p>
        End-to-end: I built the SQL for data assembly, the Python for
        modeling, and the Tableau dashboard for delivery. From zero predictive
        capability to prescriptive analytics with recommended actions per
        account.
      </p>
    </article>
  );
}
