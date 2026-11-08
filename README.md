# Aster

Aster is my evolving software portfolio, development record, and foundation for future projects. It documents the projects I build, the skills I develop, and the learning behind the work.

## Live Site

**https://matteojose3112-bit.github.io/aster/**

## About

Aster began as a hands-on challenge to learn modern web development by building a real application. I use AI as a development and learning partner while working to understand, debug, refine, and extend the code rather than treating it as a black box.

The portfolio site is built with React, TypeScript, Vite, and Tailwind CSS, and deployed with GitHub Pages and GitHub Actions.

## Professional Experience

### Colt Home Services — Customer Service Representative
**October 2026 – Present** · Remote

- Support customer service and outbound sales operations for a home services business.
- Use ServiceTitan and connected tools to manage customer information, work through outbound contact lists, and maintain accurate CRM records.
- Support call operations, lead follow-up, service coordination, and customer communication, including Mass Save program information when appropriate.

### Independent Freelancer
**July 2026 – October 2026**

Completed independent freelance work drawing on experience in sales operations, customer service, CRM administration, research, and workflow coordination.

### Laureles Management — Sales & Operations Coordinator
**September 2025 – June 2026** · Remote · Medellín, Antioquia, Colombia

- Supported sales and venue operations across two locations, including customer inquiries, CRM workflows, bookings, contracts, payments, scheduling, and event execution.
- Managed approximately 80–100 accounts and leads per month and handled 40–60+ customer interactions daily.
- Coordinated approximately 10–12 events per month, with peak periods of 15–20 events.
- Used HubSpot, TripleSeat, and OpenTable to support customer and booking workflows and data quality.

### Inmobiliaria del Café Quindío — CRM, Sales & Marketing Coordinator
**October 2024 – August 2025** · Hybrid · Armenia, Quindío, Colombia

- Supported real estate CRM, sales, marketing, customer service, lead generation, and back-office workflows.
- Maintained 15–20 active property listings and CRM records, contacts, and opportunities in HubSpot.
- Handled approximately 80–100 leads per month and 30–40+ customer interactions daily.
- Helped improve lead conversion by an estimated 15–25% through follow-up and workflow improvements.
- Improved documentation workflows, saving an estimated 4–6 hours per week.

### 416 Roofing — Operations & Customer Service Coordinator
**January 2021 – September 2024** · Hybrid · Toronto, Ontario, Canada

- Coordinated customer service, sales support, residential roofing projects, estimates, procurement, payments, and operational workflows.
- Managed 20–30+ customer interactions daily and supported a steady lead pipeline.
- Coordinated approximately 20–25 projects per month across multiple field crews and active jobs.
- Used AccuLynx to support CRM and project tracking, alongside estimates, invoices, payments, materials, and supplier communications.

*Experience metrics are approximate and reflect the scope of responsibilities provided.*

## Core Skills

**Business and operations:** sales operations, CRM administration, customer service, lead management, client communication, booking and scheduling, event coordination, project coordination, documentation, data quality, process improvement, procurement, supplier communication, estimates, invoices, payments, and sales/marketing support.

**Business platforms:** ServiceTitan, Quo, Airtable, HubSpot, TripleSeat, OpenTable, AccuLynx.

**Software and delivery:** React, TypeScript, Vite, Tailwind CSS, Python, SQL, REST APIs, database design, automated testing, responsive design, debugging, Git, GitHub, GitHub Pages, GitHub Actions, and AI-assisted development.

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

**Core portfolio complete · Maintenance mode.** The portfolio foundation, five-project collection, documentation, accessibility foundations, and automated deployment checks are in place. Future changes will be limited to fixing issues, keeping project information accurate, and adding meaningful case studies or work when they are ready. Manual browser and accessibility verification remain worthwhile maintenance checks, not blockers to moving on to the next project.

## Author

**Matteo Jose** — building software through hands-on learning, experimentation, and AI-assisted development, informed by professional experience in sales, operations, CRM, and customer service.

---

Built with React, TypeScript, Vite, and Tailwind CSS.

**Aster is a portfolio of what I've built — and a record of what I'm learning next.**

## Documentation review — 2026-11-08

Portfolio documentation reviewed on 2026-11-08. The active collection contains five repositories: Aster, ClientPulse, OpsFlow, FinTrack, and AgentForge. Keep project cards and case studies aligned with each repository's verified implementation; do not imply production readiness where live acceptance or security checks remain open.
