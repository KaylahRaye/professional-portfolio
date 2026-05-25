# AGENTS.md

## Project purpose

This is a personal professional portfolio landing page for Shikaylah Fewell, a software engineering manager and frontend technologist with a people-first leadership approach and an interest in professional writing.

The goal is to create a warm, polished, modern one-page website that communicates:
- technical leadership
- people leadership
- frontend engineering experience
- delivery, risk management, clarity, and team execution
- thoughtful use of AI-assisted workflows
- a forthcoming writing space
- a clear way to connect

Before making content, design, or professional positioning changes, review `PROJECT_BRIEF.md` for the project's product vision, identity pillars, and content strategy.

This portfolio represents Shikaylah's current professional identity only. Do not add future or dream initiatives unless Shikaylah specifically asks for them later.

## Tech stack

Use:
- Stencil
- TypeScript
- JSX
- CSS
- Static local content files

Do not convert this project to React, Next.js, Angular, Vue, or another framework.

## Design direction

Use a warm editorial professional style:
- cream / warm white background
- mocha / soft black text
- deep green accent
- muted gold details
- refined cards
- generous spacing
- calm, confident layout

The site should feel:
- polished
- thoughtful
- warm
- credible
- modern
- human

Avoid:
- generic corporate design
- startup-bro aesthetics
- overly playful visuals
- excessive animation
- unnecessary libraries

## Technical expectations

Use Stencil components with clear names and simple responsibilities.

Prefer:
- component-based structure
- typed content models
- semantic HTML
- accessible links and buttons
- responsive layout
- CSS variables in global styles
- small, reviewable changes

Keep the first version static.

Do not add:
- backend
- authentication
- database
- CMS
- blog engine
- routing unless necessary
- unnecessary third-party UI libraries

## Content strategy

Use a local content file such as:

src/data/profile-content.ts

The content will not change frequently, so static content is preferred.

Soul & Syntax is a forthcoming writing space and should link out to Substack only when that publication exists. Do not build a blog into this site.

Preferred positioning:
“A technical people leader helping teams, systems, and emerging talent grow with clarity and care.”

Avoid language that makes Shikaylah sound less technical because she came from a nontraditional background. Her nontraditional pathway is part of her perspective, not a disclaimer.

## Sections

Build a one-page landing page with:
1. Hero
2. About
3. What I Do
4. Experience Highlights
5. Featured Projects
6. Writing
7. Contact

## Commands

Before finalizing changes, run:

npm run build

If tests or linting are added later, run the appropriate verification command before summarizing work.

## Development approach

Make changes in small, reviewable increments.
Do not redesign the full site unless explicitly asked.
Explain any major structural decision in plain language.
