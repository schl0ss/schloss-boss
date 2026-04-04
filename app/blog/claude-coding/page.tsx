import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "What I've Learned from 300+ Hours of Claude Code | SCHLOSS BOSS AI",
  description:
    "Skills, plugins, agentic workflows, and MCP, exploring how Claude Code changed the way I build software.",
};

export default function ClaudeCodingPost() {
  return (
    <article className="prose">
      <header className="mb-12">
        <p className="font-mono text-sm text-[var(--color-text-muted)] mb-2">
          2026
        </p>
        <h1 className="!text-3xl md:!text-4xl font-bold text-[var(--color-text-primary)] !leading-tight !tracking-tight mb-4">
          What I&apos;ve Learned from 300+ Hours of Claude Code
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          Skills, plugins, agentic workflows, and MCP, exploring how a CLI-based AI
          coding assistant changed the way I build software.
        </p>
      </header>

      <h2>What Claude Code Actually Is</h2>
      <p>
        Claude Code is Anthropic&apos;s CLI tool for AI-assisted development.
        Unlike chat-based AI tools, it lives in your terminal with full
        access to your filesystem, your shell, your development tools. It
        reads files, writes code, runs commands, searches codebases, and
        manages git, all inside a single conversation.
      </p>
      <p>
        I have logged over 300 hours with it. In that time I built an entire
        social media platform, a real-time stat tracker, this portfolio site,
        and dozens of smaller tools. All solo. All shipped.
      </p>

      <h2>Skills and Plugins</h2>
      <p>
        The most underutilized feature of Claude Code is its extension
        system. <strong>Skills</strong> are <code>.md</code> files that
        teach Claude new workflows. <strong>Plugins</strong> bundle those
        skills with agents, hooks, and integrations into something you can
        share and distribute.
      </p>
      <p>
        A skill is deceptively simple: a YAML frontmatter block followed
        by markdown instructions.
      </p>
      <pre className="bg-[var(--color-bg-elevated)] p-4 rounded-lg overflow-x-auto text-sm font-mono text-[var(--color-text-secondary)] mb-5 leading-relaxed">
{`---
name: deploy
description: Build, deploy to Firebase, commit, and push
disable-model-invocation: true
---

1. Run npm run build
2. Deploy to Firebase Hosting
3. Commit with a descriptive message
4. Push to remote`}
      </pre>
      <p>
        Type <code>/deploy</code> and the entire workflow runs. But it goes
        deeper than that. Skills can inject dynamic context through shell
        commands, accept arguments, restrict which tools Claude can use,
        and run in isolated subagent contexts.
      </p>
      <p>
        This is where Claude Code stops being &quot;AI autocomplete&quot;
        and starts being &quot;AI engineering.&quot; You are not just
        prompting. You are building reusable, composable automation that
        makes the AI better at your specific workflows every time you
        use it.
      </p>

      <h2>MCP: The Model Context Protocol</h2>
      <p>
        MCP is what makes Claude Code genuinely dangerous in the best sense
        of the word. It is a protocol connecting Claude to external tools
        and services (Firebase, Figma, Playwright, Google Drive, databases)
        through standardized server interfaces.
      </p>
      <p>
        In practice, that means Claude can deploy your site to Firebase
        Hosting, read your Figma designs and generate matching code, spin
        up a browser to test your UI, query your Firestore database, and
        manage your Google Drive. One conversation. No context switching.
      </p>
      <p>
        The site you are reading right now was built, deployed, and
        verified through MCP integrations. Claude wrote the code, started
        the dev server, took screenshots, and pushed to production. I
        never opened a browser.
      </p>

      <h2>Agentic Workflows</h2>
      <p>
        Claude Code can spawn subagents: specialized AI instances running
        specific tasks in parallel. This is where the tool stops feeling
        like a tool and starts feeling like a team.
      </p>
      <ul>
        <li>
          <strong>Explore agents</strong> search your codebase to understand
          patterns and architecture
        </li>
        <li>
          <strong>Plan agents</strong> design implementation strategies before
          writing code
        </li>
        <li>
          <strong>Code review agents</strong> check for bugs, security issues,
          and style violations
        </li>
      </ul>
      <p>
        A typical session: I describe a feature. Claude enters plan mode,
        explores the codebase, designs an approach. I approve. It
        implements across multiple files, fires up the dev server, verifies
        with screenshots and accessibility snapshots, and presents the
        finished result. The whole loop takes minutes.
      </p>

      <h2>What I&apos;ve Built</h2>
      <p>
        <strong>MooringSocial:</strong> A full anti-algorithm social media
        platform built solo from scratch. Next.js, Firebase, real-time
        feeds, authentication, media uploads. The kind of project that
        would normally take a team. I shipped it alone.
      </p>
      <p>
        <strong>Spike Squad:</strong> A real-time volleyball stat tracker
        for my daughter&apos;s 2nd grade team, built in a weekend. Claude
        Code handled the data layer. I handled the UX.
      </p>
      <p>
        <strong>This portfolio site:</strong> Built and iterated live in a
        single Claude Code session. Every section, every deploy, every
        commit ran through the CLI. Including the blog post you are
        reading right now.
      </p>

      <h2>Patterns That Work</h2>
      <p>
        Three hundred hours teaches you things no tutorial covers.
      </p>
      <ol>
        <li>
          <strong>Plan before you build.</strong> Use plan mode for anything
          non-trivial. Getting alignment on the approach before writing code
          prevents wasted effort.
        </li>
        <li>
          <strong>Build custom skills for repeated workflows.</strong> If
          you&apos;re doing it more than twice, make it a skill. Deploy
          pipelines, code review checklists, project scaffolding. Automate
          the predictable parts.
        </li>
        <li>
          <strong>Use MCP integrations aggressively.</strong> The more context
          Claude has about your actual environment (databases, hosting,
          design files), the better its output.
        </li>
        <li>
          <strong>Verify, don&apos;t trust.</strong> Claude Code can run your
          dev server, take screenshots, and check accessibility snapshots.
          Use these verification loops instead of manually checking everything.
        </li>
        <li>
          <strong>Think in systems, not prompts.</strong> The real leverage
          isn&apos;t in writing better prompts. It&apos;s in building skills,
          plugins, and workflows that compound over time.
        </li>
      </ol>

      <h2>Why This Matters for AI Engineering</h2>
      <p>
        The gap between &quot;using AI tools&quot; and &quot;building AI
        systems&quot; is closing fast. Writing a Claude Code skill is
        programming an AI agent: defining its capabilities, constraining
        its behavior, composing workflows that get smarter over time. That
        is AI engineering, and it is happening right now in markdown files.
      </p>
      <p>
        The developers who thrive will not be the ones resisting AI
        tooling, nor the ones blindly accepting its output. They will be
        the ones who learn to build systems on top of it, treating AI as
        infrastructure to be configured, extended, and composed. That is
        the work I do every day.
      </p>
    </article>
  );
}
