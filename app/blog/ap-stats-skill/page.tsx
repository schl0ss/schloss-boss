import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How I Turned 13 Years of Teaching High School AP Stats into a Claude Code Skill | SCHLOSS BOSS AI",
  description:
    "How I turned 13 years of AP® Statistics teaching notes into a Claude Code skill that walks through basic statistical inference problems using the 4C Method.",
};

export default function APStatsSkillPost() {
  return (
    <article className="prose">
      <header className="mb-12">
        <time dateTime="2026-03" className="block font-mono text-sm text-[var(--color-accent-warm)] mb-2">
          March 2026
        </time>
        <h1 className="!text-3xl md:!text-4xl font-bold text-[var(--color-text-primary)] !leading-tight !tracking-tight mb-4">
          How I Turned 13 Years of Teaching High School AP Stats into a Claude Code Skill
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          How I turned 13 years of AP® Statistics teaching notes into a Claude
          Code skill that walks through basic statistical inference problems
          using the 4C Method.
        </p>
      </header>

      <p className="text-xs text-[var(--color-text-muted)]">
        AP® is a registered trademark of the College Board, which was not
        involved in the production of, and does not endorse, this skill or
        this post.
      </p>

      <h2>The Problem</h2>
      <p>
        Thirteen years of teaching AP Statistics leaves you with a library.
        Condition-checking templates. Calculator quick references. Inference
        frameworks and scoring rubric notes. The kind of material you
        accumulate one semester at a time, refining what works, discarding
        what does not.
      </p>
      <p>
        The problem is where all that knowledge lives: in PDFs, in
        handwritten notes, in my head. Ask a generic AI to solve a stats
        inference problem and you get a textbook answer. It does not know the
        4C Method. It does not know you should always open your conclusion
        with a p-value interpretation. It has no idea which TI-84 command
        to use or what the scoring rubric actually rewards.
      </p>

      <h2>The Solution: A Claude Code Skill</h2>
      <p>
        Claude Code has a feature called <strong>skills</strong>: markdown
        files that teach the AI domain-specific workflows. I built one
        called <code>/stathelp</code> that encodes how I actually teach
        basic statistical inference. Not how a textbook explains it. How I
        explain it, after thirteen years of watching students get it right
        and get it wrong.
      </p>
      <p>
        The process was straightforward. I fed Claude my original teaching
        notes and let it extract the patterns. The source material:
      </p>
      <ul>
        <li>
          My <strong>4C Method templates</strong> for confidence intervals and
          significance tests (Choose, Check, Calculate, Conclude), based on the
          curriculum from{" "}
          <a
            href="https://www.statsmedic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            StatsMedic
          </a>{" "}
          that I used in my classroom for years
        </li>
        <li>
          A <strong>TI-84 calculator reference</strong> I wrote covering every
          function students need on the exam
        </li>
        <li>
          My notes on <strong>p-value interpretation</strong> as a teaching
          priority, emphasizing that students should always interpret the p-value
          in their conclusion, even though the exam does not require it
          for full credit
        </li>
        <li>
          An <strong>inference procedure selection guide</strong> with the
          flowchart I use in class: Is it one of the weird ones? Means or
          proportions? One or two samples?
        </li>
      </ul>
      <p>
        Claude extracted the teaching logic and organized it into a
        structured skill with reference files: a curriculum map covering
        all nine units and a deep inference guide with conditions tables,
        common student errors, conclusion templates, and the right
        calculator command for every procedure.
      </p>

      <h2>What It Actually Does</h2>
      <p>
        When I type <code>/stathelp</code> and give it a problem, the skill
        kicks in and Claude walks through it the way I would teach it:
      </p>
      <ol>
        <li>
          <strong>CHOOSE:</strong> Identifies the procedure, defines the
          parameter in context, writes hypotheses with the larger group first
          (so the test statistic comes out positive), and states the
          significance level.
        </li>
        <li>
          <strong>CHECK:</strong> Verifies all conditions with actual numbers
          shown: Random, 10%, and Large Counts (using the pooled proportion for
          significance tests, the sample proportion for confidence intervals).
        </li>
        <li>
          <strong>CALCULATE:</strong> Shows the general formula, plugs in
          numbers, reports the test statistic and p-value, and includes the
          TI-84 command.
        </li>
        <li>
          <strong>CONCLUDE:</strong> Starts with the p-value interpretation
          (assuming the null is true, the probability of the observed result or
          more extreme, purely by chance), then compares to alpha, states the
          decision, and concludes about the alternative in context.
        </li>
      </ol>
      <p>
        After the solution, it flags common student errors specific to that
        problem type, things like using the sample proportion instead of the
        null proportion for the Large Counts condition, or writing hypotheses
        about statistics instead of parameters.
      </p>

      <h2>Grading Itself Against the Rubric</h2>
      <p>
        I gave it a real free response question: the 2019 FRQ #4
        about kochia plants and glyphosate resistance. Then I fed it the
        official scoring guidelines and asked it to grade
        its own work.
      </p>
      <p>
        It walked through each rubric section. Hypotheses and procedure
        identification. Conditions and calculations. Conclusion. It
        correctly identified which components it satisfied, earning a 4
        out of 4. Complete response, all three sections essentially
        correct.
      </p>
      <p>
        One thing it got wrong on the first pass: it labeled the
        parameters backwards, putting the 2014 proportion first and
        producing a negative test statistic. Mathematically equivalent.
        Still accepted by the rubric. But not how I would teach it. I
        told the skill to always put the expected larger group first.
        Now it does.
      </p>

      <h2>Why This Matters</h2>
      <p>
        This is not about replacing teaching. It is about encoding
        teaching expertise into a tool that can be reused. The 4C Method,
        the p-value interpretation emphasis, the specific errors I have
        watched students make for thirteen years. None of that lives
        inside a generic AI model. It lives in the notes I wrote and the
        patterns I refined semester after semester.
      </p>
      <p>
        A Claude Code skill is just a markdown file. Fill it with domain
        expertise from someone who has actually done the work, and it
        becomes something more useful than any textbook answer. It becomes
        a teaching assistant that thinks the way you think.
      </p>
      <p>
        The whole process took one conversation. Raw PDFs in, working
        skill out, good enough to pass an exam rubric. The skill keeps
        getting better as I feed it more resources. Thirteen years of
        notes, finally in a format that scales.
      </p>
      <p>
        The skill is open source:{" "}
        <a
          href="https://github.com/schl0ss/claude-skill-stathelp"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/schl0ss/claude-skill-stathelp
        </a>
      </p>
    </article>
  );
}
