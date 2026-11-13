# Aster

Aster is my evolving software portfolio, development record, and foundation for future projects. It documents the projects I build, the skills I develop, and the learning behind the work.

## Live Site

**https://matteojose3112-bit.github.io/aster/**

## About

Aster began as a hands-on challenge to learn modern web development by building a real application. I use AI as a development and learning partner while working to understand, debug, refine, and extend the code rather than treating it as a black box.

The portfolio site is built with React, TypeScript, Vite, and Tailwind CSS, and deployed with GitHub Pages and GitHub Actions.

## Professional Experience

### Colt Home Services — Customer Service Representative
**October 2026 – Present** · Full-time · Remote · Boston, Massachusetts, United States

Provide customer service and operational support across residential plumbing and energy-efficiency services.
- Manage high-volume inbound and outbound calls through Quo and ServiceTitan, maintaining a 100% managed call rate and meeting QA scorecard targets.
- Qualify and convert high-intent Angi Pro and Google Local Services Ads leads into confirmed appointments.
- Coordinate Eastern Massachusetts service routes for Master and Journeyman Plumbers, balancing technician availability, job caps, service areas, and four-hour arrival windows.
- Maintain ServiceTitan customer records, notes, dispositions, lead classifications, unbooked and bot-generated leads, job tags, and follow-up tasks.
- Support seasonal outreach for $89 water heater flushes, maintenance services, and repair credits; explain Mass Save incentives, flat-rate pricing, service options, and dispatch policies.
- Maintain Airtable records and support administrative workflows and daily service coordination.

### Independent Freelancer — Self-Employed
**July 2026 – October 2026** · Remote · Quindío, Colombia

- Identified potential clients, researched business needs, and developed independent service opportunities.
- Explored practical improvements to business workflows, customer communication, and operational efficiency using digital and AI-assisted tools.
- Applied AI-assisted research, information synthesis, and drafting to support business processes.
- Managed client acquisition, project coordination, and solution delivery independently.

### Laureles Management — Sales & Operations Coordinator
**September 2025 – June 2026** · Full-time · Remote · Medellín, Colombia

- Supported sales and operations across a two-location venue operation, managing customer inquiries, CRM workflows, bookings, contracts, payments, scheduling, and event coordination.
- Supported commercial operations associated with USD $80K–$100K+ monthly revenue at one location; contributed to approximately $2M Q2 operation revenue and 2× year-over-year growth.
- Managed 40–60+ daily customer interactions, 15–20 daily lead additions, and 80–100 active accounts and leads monthly, maintaining 95%+ SLA compliance.
- Coordinated 10–12 events monthly (15–20 during peak periods) and processed 10–15 client contracts weekly.
- Maintained HubSpot, TripleSeat, and OpenTable data integrity through audits, duplicate resolution, standardized entry, and pipeline updates.
- Maintained near-zero booking errors and coordinated with venue management, call center teams, and staff across a 10–12-venue network.

### Inmobiliaria del Café Quindío — CRM, Sales & Marketing Coordinator
**October 2024 – August 2025** · Full-time · Hybrid · Armenia, Quindío, Colombia

- Managed CRM, sales, marketing, customer service, and administrative workflows across the real estate customer lifecycle.
- Managed 150+ HubSpot contacts, 20–25 active opportunities, 80–100 monthly leads, and 30–40+ daily customer interactions.
- Maintained 15–20 active property listings and client relationships, targeting approximately one new listing per day.
- Contributed to a 15–25% lead-conversion improvement through structured follow-up and pipeline management.
- Supported 1–2 property transactions weekly, coordinating customer communications, contracts, and documentation.
- Published listings across Facebook, Instagram, X, online platforms, and the company website every 1–2 days.
- Standardized administrative workflows, saving approximately 4–6 hours weekly and improving document retrieval efficiency by approximately 30%.

### 416 Roofing — Operations & Customer Service Coordinator
**January 2021 – September 2024** · Full-time · Hybrid · Toronto, Ontario, Canada

- Managed sales, customer service, operations, project coordination, procurement, scheduling, CRM administration, payments, and marketing for a residential roofing company serving the Greater Toronto Area.
- Managed 20–30+ daily customer interactions and 14–21 new leads weekly, handling inquiries, estimates, scheduling, and follow-ups.
- Coordinated 20–25 roofing projects monthly and dispatched three field crews of approximately four workers each.
- Prepared 5–7 estimates weekly; approximately one in three converted to completed jobs, across $500–$1,000 repairs and $5K–$20K+ installations.
- Administered AccuLynx CRM records across leads, appointments, estimates, job activity, and customer records.
- Coordinated materials procurement 4–5 times weekly with 2–3 primary suppliers.
- Processed 5–10 payments and invoices weekly and supported marketing through 1,000+ flyers per campaign, door-to-door outreach, and online marketing 2–3 times weekly.

*Metrics are approximate and reflect the scope and outcomes reported for each role. Revenue figures retain the currency notation supplied for the relevant operation.*

## Current Features

- Responsive portfolio and reusable React components
- About, Experience, Projects, Toolkit, and Contact sections
- Structured project data and interactive UI effects
- Professional experience with roles, dates, responsibilities, and relevant tools
- Contact hub for remote opportunities, freelance inquiries, and collaborations
- Direct contact and professional profile links: email, LinkedIn, GitHub, Upwork, and Fiverr
- Semantic page landmarks, a skip-to-content link, visible focus indicators, accessible mobile navigation controls, and reduced-motion support
- Detailed project case study for Aster in [docs/case-studies/aster.md](docs/case-studies/aster.md)
- Detailed FinTrack case study in [docs/case-studies/fintrack.md](docs/case-studies/fintrack.md), including architecture, quality checks, deployment, and remaining limitations
- **Solution Studio:** a deployed five-studio business-solutions workshop for research briefs, document extraction, CSV/XLSX processing, controlled text automation, and static website starter generation. [Repository](https://github.com/matteojose3112-bit/solution-studio) · [Live demo](https://solution-studio-secb.onrender.com) · [Case study](docs/case-studies/solution-studio.md). Browser upload QA for Data and Documents remains pending; the case study records the verified scope and limitations.
- **AgentForge:** a lightweight Go runtime for controlled model-to-tool execution, with an OpenAI Responses adapter, default-deny permissions, bounded tool execution, and deterministic local analysis tools. [Repository](https://github.com/matteojose3112-bit/agentforge) · [Live project site](https://matteojose3112-bit.github.io/agentforge/)
- Automated deployment through GitHub Actions, with ESLint and production build checks before deployment

## Portfolio Accuracy

Project descriptions and status labels are intended to reflect the current contents of their linked repositories. A live demo or deployed MVP indicates that a deployment exists; it does not imply independent production certification, formal usability testing, or measured performance results. Experience metrics are approximate, and estimates are identified as such where applicable.

## Quality Checks

Run these commands from the `portfolio/` directory:

```bash
npm ci
npm run lint
npm run build
```

The GitHub Actions deployment workflow runs linting and the TypeScript/Vite production build before publishing to GitHub Pages.

## Project Structure

```text
portfolio/
├── src/
│   ├── assets/
│   ├── components/layout/sections/
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Toolkit.tsx
│   │   └── Contact.tsx
│   ├── data/projects.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
└── vite.config.ts
```

## AI-Assisted Development

AI helps me understand unfamiliar concepts, compare implementation approaches, debug issues, refine the UI, improve code organization, and learn version-control and deployment workflows. The goal is to learn from each implementation and steadily build practical understanding.

## Roadmap and Changelog

See [ROADMAP.md](ROADMAP.md) for planned work and [CHANGELOG.md](CHANGELOG.md) for notable changes.

## Status

**Core portfolio complete · Maintenance mode.** The portfolio foundation, six-project collection, documentation, accessibility foundations, and automated deployment checks are in place. Future changes will be limited to fixing issues, keeping project information accurate, and adding meaningful case studies or work when they are ready. Manual browser and accessibility verification remain worthwhile maintenance checks, not blockers to moving on to the next project.

## Author

**Matteo Jose** — building software through hands-on learning, experimentation, and AI-assisted development, informed by professional experience in sales, operations, CRM, and customer service.

---

Built with React, TypeScript, Vite, and Tailwind CSS.

**Aster is a portfolio of what I've built — and a record of what I'm learning next.**

## Documentation review — 2026-11-10

Portfolio documentation reviewed on 2026-11-10. The active collection contains six repositories: Aster, ClientPulse, OpsFlow, FinTrack, AgentForge, and Solution Studio. Keep project cards and case studies aligned with each repository's verified implementation; do not imply production readiness where live acceptance or security checks remain open.
