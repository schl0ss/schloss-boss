import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Teaching AP Stats with an AI Copilot | SCHLOSS BOSS AI",
  description:
    "How I turned 13 years of AP Statistics teaching notes into a Claude Code skill that walks through inference problems using the 4C Method.",
};

export default function APStatsSkillPost() {
  return (
    <article className="prose">
      <header className="mb-12">
        <p className="font-mono text-sm text-[var(--color-text-muted)] mb-2">
          2026
        </p>
        <h1 className="!text-3xl md:!text-4xl font-bold text-[var(--color-text-primary)] !leading-tight !tracking-tight mb-4">
          Teaching AP Stats with an AI Copilot
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          How I turned 13 years of AP Statistics teaching notes into a Claude
          Code skill that walks through inference problems using the 4C Method.
        </p>
      </header>

      <h2>The Problem</h2>
      <p>
        I taught AP Statistics for 13 years. Over that time I built up a library
        of resources — condition-checking templates, calculator quick references,
        inference frameworks, scoring rubric notes, the kinds of things you
        accumulate when you&apos;re explaining the same concepts to new students
        every year and refining what works.
      </p>
      <p>
        The problem is that all of that knowledge lives in PDFs, handwritten
        notes, and my head. When I ask an AI to help me with an AP Stats problem,
        it gives me a generic textbook answer. It doesn&apos;t know the 4C
        Method. It doesn&apos;t know that you should always start your conclusion
        with a p-value interpretation. It doesn&apos;t know which calculator
        command to use or what the AP scoring rubric actually looks for.
      </p>

      <h2>The Solution: A Claude Code Skill</h2>
      <p>
        Claude Code has a feature called{" "}
        <strong>skills</strong> — markdown files that teach the AI new
        domain-specific workflows. I built one called{" "}
        <code>/apstats</code> that encodes how I actually teach inference, not
        how a textbook explains it.
      </p>
      <p>
        The process was straightforward: I fed Claude my original teaching
        notes and let it extract the patterns. The source material included:
      </p>
      <ul>
        <li>
          My <strong>4C Method templates</strong> for confidence intervals and
          significance tests (Choose, Check, Calculate, Conclude)
        </li>
        <li>
          A <strong>TI-84 calculator reference</strong> I wrote covering every
          function students need on the AP exam
        </li>
        <li>
          My notes on <strong>p-value interpretation</strong> as a teaching
          priority — the idea that students should always interpret the p-value
          in their conclusion, even though the AP exam doesn&apos;t require it
          for full credit
        </li>
        <li>
          An <strong>inference procedure selection guide</strong> with the
          flowchart I use in class: Is it one of the weird ones? Means or
          proportions? One or two samples?
        </li>
      </ul>
      <p>
        Claude extracted the teaching logic from these resources and organized
        it into a structured skill with reference files — a curriculum map
        covering all nine units and a deep inference guide with conditions
        tables, common student errors, conclusion templates, and calculator
        commands for every procedure.
      </p>

      <h2>What It Actually Does</h2>
      <p>
        When I type <code>/apstats</code> and give it a problem, the skill
        kicks in and Claude walks through it the way I would teach it:
      </p>
      <ol>
        <li>
          <strong>CHOOSE</strong> — Identifies the procedure, defines the
          parameter in context, writes hypotheses with the larger group first
          (so the test statistic comes out positive), and states the
          significance level.
        </li>
        <li>
          <strong>CHECK</strong> — Verifies all conditions with actual numbers
          shown: Random, 10%, and Large Counts (using the pooled proportion for
          significance tests, the sample proportion for confidence intervals).
        </li>
        <li>
          <strong>CALCULATE</strong> — Shows the general formula, plugs in
          numbers, reports the test statistic and p-value, and includes the
          TI-84 command.
        </li>
        <li>
          <strong>CONCLUDE</strong> — Starts with the p-value interpretation
          (assuming the null is true, the probability of the observed result or
          more extreme, purely by chance), then compares to alpha, states the
          decision, and concludes about the alternative in context.
        </li>
      </ol>
      <p>
        After the solution, it flags common student errors specific to that
        problem type — things like using the sample proportion instead of the
        null proportion for the Large Counts condition, or writing hypotheses
        about statistics instead of parameters.
      </p>

      <h2>Grading Itself Against the AP Rubric</h2>
      <p>
        To test it, I gave the skill a real AP exam free response question —
        the 2019 FRQ #4 about kochia plants and glyphosate resistance. Then I
        fed it the official College Board scoring guidelines and asked it to
        grade its own response.
      </p>
      <p>
        It scored itself against each rubric section: Section 1
        (hypotheses and procedure identification), Section 2 (conditions and
        calculations), and Section 3 (conclusion). It correctly identified
        which components it satisfied and earned a 4 out of 4 — a complete
        response with all three sections essentially correct.
      </p>
      <p>
        One thing it got wrong on the first pass: it labeled the parameters
        backwards, putting the 2014 proportion first, which produced a negative
        test statistic. Mathematically equivalent and still accepted by the
        rubric, but not how I&apos;d teach it. I told the skill to always put
        the expected larger group first. Now it does.
      </p>

      <h2>Why This Matters</h2>
      <p>
        This isn&apos;t about replacing teaching. It&apos;s about encoding
        teaching expertise into a tool that can be reused. The 4C Method, the
        p-value interpretation emphasis, the specific common errors I&apos;ve
        seen students make over 13 years — that knowledge doesn&apos;t exist in
        a generic AI model. It exists in the notes I wrote and the patterns I
        refined.
      </p>
      <p>
        A Claude Code skill is just a markdown file with structured
        instructions. But when you fill it with domain expertise from someone
        who&apos;s actually done the work, it becomes something more useful than
        a textbook answer. It becomes a teaching assistant that thinks the way
        you think.
      </p>
      <p>
        The whole process — from raw PDFs to a working skill that can pass an
        AP exam rubric — took one conversation. The skill will keep getting
        better as I feed it more of my resources. Thirteen years of notes,
        finally in a format that scales.
      </p>
      <p>
        The skill is open source:{" "}
        <a
          href="https://github.com/schl0ss/claude-skill-apstats"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/schl0ss/claude-skill-apstats
        </a>
      </p>
    </article>
  );
}
