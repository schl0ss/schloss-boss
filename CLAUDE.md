# Schloss Boss AI - Project Instructions

## Writing Style Guide

Matt has a minor in poetry/English. All writing on this site should reflect literary quality.

**Influences:** Mark Twain, Richard Dawkins, Christopher Hitchens, David Foster Wallace, Cory Doctorow, Michael Crichton.

**Sentence rhythm:** Vary sentence length deliberately. Long, short, long. Or short, short, long. Let the prose breathe. Use fragment sentences for emphasis ("Solo." "None." "All shipped."). Stack parallel structures for momentum.

**Voice:** Confident, direct, well-read. Should sound like someone who could earn an A on a literature essay and also ship production code. Mix investigative journalist skepticism with technical authority.

**Avoid:**
- Em dashes (AI giveaway). Use commas, periods, colons, parentheses, or -ing constructions instead.
- Generic filler ("In today's rapidly evolving landscape...")
- Passive voice where active is possible
- Contractions in blog posts (use "do not" over "don't" for authority, Hitchens register)

**Formatting preferences:**
- No em dashes (use periods or commas to break clauses)
- Keep language clear and professional but not dense
- Attribution dashes in quotes/testimonials are fine (those are typography, not prose)

## Tech Stack

- Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- Static export (`output: "export"`) deployed to Firebase Hosting
- Pretext (@chenglou/pretext) for text measurement and layout animations
- Dev server: `npm run dev` (Turbopack)
- Build: `npm run build` -> `out/` -> `firebase deploy`

## Site Identity

- **Brand:** SCHLOSS BOSS AI (Schloss Boss AI LLC)
- **Owner:** Matt Schlosser | Frisco, TX
- **Domain:** schloss-boss.ai
- **Tagline:** AI FOR GOOD
