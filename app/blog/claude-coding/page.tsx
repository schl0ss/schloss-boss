import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "What I've Learned from 200+ Hours of Claude Code | SCHLOSS BOSS AI",
  description:
    "Skills, plugins, agentic workflows, and MCP — how Claude Code changed the way I build software.",
};

export default function ClaudeCodingPost() {
  return (
    <article className="prose">
      <header className="mb-12">
        <p className="font-mono text-sm text-[var(--color-text-muted)] mb-2">
          2026
        </p>
        <h1 className="!text-3xl md:!text-4xl font-bold text-[var(--color-text-primary)] !leading-tight !tracking-tight mb-4">
          What I&apos;ve Learned from 200+ Hours of Claude Code
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          Skills, plugins, agentic workflows, and MCP — how a CLI-based AI
          coding assistant changed the way I build software.
        </p>
      </header>

      <h2>What Claude Code Actually Is</h2>
      <p>
        Claude Code is Anthropic&apos;s CLI tool for AI-assisted development.
        Unlike chat-based AI tools, it operates directly in your terminal with
        full access to your filesystem, shell, and development tools. It can
        read files, write code, run commands, search codebases, and manage git
        — all within a conversation.
      </p>
      <p>
        I&apos;ve logged over 200 hours with it. In that time, I&apos;ve
        built an entire social media platform, a real-time stat tracker, this
        portfolio site, and dozens of smaller tools. All solo.
      </p>

      <h2>Skills and Plugins</h2>
      <p>
        The most underutilized feature of Claude Code is its extension system.{" "}
        <strong>Skills</strong> are <code>.md</code> files that teach Claude
        new workflows. <strong>Plugins</strong> are packaged collections of
        skills, agents, hooks, and integrations that can be shared and
        distributed.
      </p>
      <p>
        A skill is simple: a YAML frontmatter block (name, description, when
        to trigger) followed by markdown instructions. For example:
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
        Now typing <code>/deploy</code> runs the entire workflow. But it goes
        deeper — skills can inject dynamic context with shell commands, pass
        arguments, restrict which tools Claude can use, and run in isolated
        subagent contexts.
      </p>
      <p>
        This is where Claude Code shifts from &quot;AI autocomplete&quot; to
        &quot;AI engineering.&quot; You&apos;re not just prompting — you&apos;re
        building reusable, composable automation that makes the AI more capable
        at your specific workflows.
      </p>

      <h2>MCP: The Model Context Protocol</h2>
      <p>
        MCP is what makes Claude Code genuinely powerful for real-world
        development. It&apos;s a protocol that lets Claude connect to external
        tools and services — Firebase, Figma, Playwright, Google Drive,
        databases — through standardized server interfaces.
      </p>
      <p>
        In practice, this means Claude can deploy your site to Firebase
        Hosting, read your Figma designs and generate code from them, run a
        browser to test your UI, query your Firestore database, and manage
        your Google Drive — all within the same conversation.
      </p>
      <p>
        The portfolio site you&apos;re reading right now was built, deployed,
        and verified using MCP integrations for Firebase Hosting and a preview
        server — Claude wrote the code, started the dev server, took
        screenshots, and deployed to production without me touching a browser.
      </p>

      <h2>Agentic Workflows</h2>
      <p>
        Claude Code can spawn subagents — specialized AI instances that handle
        specific tasks in parallel. This is where it starts feeling less like
        a tool and more like a team.
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
        A typical workflow: I describe a feature, Claude enters plan mode to
        explore the codebase and design an approach, I approve the plan, then
        it implements across multiple files, runs the dev server, verifies
        with screenshots and accessibility snapshots, and presents the result.
      </p>

      <h2>What I&apos;ve Built</h2>
      <p>
        <strong>MooringSocial</strong> — A full anti-algorithm social media
        platform. Next.js, Firebase, real-time feeds, authentication, media
        uploads. Built solo from scratch using Claude Code. The kind of
        project that would normally require a team.
      </p>
      <p>
        <strong>Spike Squad</strong> — A real-time volleyball stat tracker for
        my daughter&apos;s 2nd grade team. Built in a weekend. Claude Code
        handled the real-time data layer while I focused on the UX decisions.
      </p>
      <p>
        <strong>This portfolio site</strong> — Built and iterated live in a
        single Claude Code session. Every section, every deploy, every commit
        happened through the CLI. Including this blog post.
      </p>

      <h2>Patterns That Work</h2>
      <p>
        After 200+ hours, here&apos;s what I&apos;ve learned about working
        effectively with Claude Code:
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
          pipelines, code review checklists, project scaffolding — automate
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
          isn&apos;t in writing better prompts — it&apos;s in building skills,
          plugins, and workflows that compound over time.
        </li>
      </ol>

      <h2>Why This Matters for AI Engineering</h2>
      <p>
        The gap between &quot;using AI tools&quot; and &quot;building AI
        systems&quot; is closing. Claude Code skills and plugins are
        essentially programming an AI agent — defining its capabilities,
        constraining its behavior, composing workflows. That&apos;s AI
        engineering.
      </p>
      <p>
        The developers who will thrive aren&apos;t the ones who resist AI
        tooling or the ones who blindly accept its output. They&apos;re the
        ones who learn to build systems on top of it — who treat AI as
        infrastructure to be configured, extended, and composed. That&apos;s
        what I&apos;m doing.
      </p>
    </article>
  );
}
