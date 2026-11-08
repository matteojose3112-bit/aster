## [0.10.0] — Portfolio status reconciliation — 2026-11-08

### Updated
- Reconciled the portfolio README, roadmap, and project summaries with the current linked repositories.
- Corrected the project collection count to seven projects across seven repositories.
- Updated the AgentForge summary to describe the v0.4 read-only Sales Operations workflow, deployed API, and verified authenticated CSV inspection while retaining the open report/model validation gates.
- Recorded the latest successful Aster GitHub Actions deployment (2026-11-05, commit `53a8496`).
- Kept FinTrack's open draft PRs and decimal-precision issue distinct from merged/main-branch functionality.

### Scope
- Documentation and portfolio project metadata only; no new application behavior is introduced.

---

## [0.9.0] — AgentForge portfolio integration — 2026-11-05

### Added
- Added AgentForge to the selected projects collection with its Go runtime description, current early-stage status, technology stack, GitHub repository, and live GitHub Pages site.
- Updated the README and roadmap to reflect the seven-project portfolio collection.

### Accuracy
- Described AgentForge's bounded model/tool loop, OpenAI Responses API adapter, default-deny permissions, and deterministic local analysis tools.
- Clarified that local tools can run without an API key, model-backed execution requires provider credentials, and AgentForge is not production-ready.

---

# Changelog

All notable changes to Aster are documented here. Entries focus on meaningful portfolio, software, documentation, and development milestones.

---

## [0.7.0] — FinTrack Case Study & Aster Closeout — 2026-11-03

### Added

- Added a detailed FinTrack case study covering product scope, architecture, authentication, testing, deployment, and known limitations.
- Linked the FinTrack case study from its project card.

### Updated

- Marked Aster's own project card as complete and in maintenance mode.
- Closed the core portfolio roadmap, retaining manual viewport, contrast, and keyboard checks as explicit maintenance items rather than claiming they were completed.
- Updated the README and roadmap to establish Aster's maintenance scope and avoid further portfolio work without a concrete benefit.

### Verification

- The previous Aster workflow passed lint, production build, and deployment checks.
- This closeout documentation and project-card update require a fresh workflow run; passing status will be recorded after GitHub Actions completes.
- FinTrack's live end-to-end acceptance tests, security review, hosted database lifecycle, dependency audit findings, and bundle-size warning remain open in the FinTrack case study.

---

## [0.6.1] — Portfolio Claim Audit — 2026-11-03

### Updated

- Completed a consistency review of project descriptions, technologies, status labels, experience summaries, platform lists, and approximate metrics across the portfolio source data and README.
- Added a portfolio accuracy note clarifying that deployment status does not imply independent production certification, formal usability testing, or measured performance results.
- Updated the roadmap to distinguish completed source-level claim review from outstanding manual browser, contrast, and implementation verification.

---

## [0.6.0] — Semantic Structure & First Case Study — 2026-11-03

### Added

- Added the first detailed project case study for Aster, covering goals, implementation, design decisions, outcomes, and current limitations.
- Added a case-study link to the Aster project card and documented it in the README.
- Moved the skip link, visual effects layer, and primary navigation outside the main content landmark; the main landmark now contains the page's primary sections, with the footer following it.

### Updated

- Added an optional case-study destination to the structured project data and project-card component.
- Tightened the Aster project summary to describe its actual structured-data implementation rather than imply an API integration that is not present.
- Updated the roadmap to track the first completed case study and the corrected page landmark structure.

---

## [0.5.0] — Quality Checks & Accessibility — 2026-11-03

### Added

- Added ESLint to the GitHub Actions deployment workflow so linting runs before the production build.
- Documented local quality-check commands: `npm run lint` and `npm run build`.
- Added keyboard-accessibility improvements to navigation: closed mobile links are removed from tab order, active links expose their current location, Escape closes the menu and returns focus to its toggle, and the primary navigation landmark has an accessible name.

### Verified

- GitHub Actions completed successfully with ESLint and the TypeScript/Vite production build.
- Added/retained a skip-to-content link, visible focus indicators, and reduced-motion handling.
- Reviewed the responsive layout rules and mobile navigation implementation in source. Manual viewport testing remains open.

---

## [0.4.0] — Project Collection Update — 2026-11-03

### Updated

- Added FinTrack to the Aster project collection with its GitHub repository and live demo links.
- Renamed project-card labels from "Case Study" to "Project Overview" to accurately describe the current summary cards.

---

## [0.3.0] — Functional Service Toolkits — 2026-10-29

### Updated

- Updated the Transcription & Content Toolkit project card to reflect its functional workflow MVP, Python caption validator, automated tests, and service listing draft.
- Updated the Research & Reporting Toolkit project card to reflect its source-backed CRM comparison, source log, Python audit utility, automated tests, and service listing draft.
- Updated project technologies and outcomes to match what exists in the linked repositories.
- Updated this README to document the toolkits accurately.
- Kept the transcription portfolio limitation explicit: existing transcript examples are fictional formatting demonstrations until a real-media sample is reviewed end to end.

---

## [0.2.0] — Contact & Opportunity Links — 2026-10-28

### Updated

- Repositioned the Contact section as a hub for remote opportunities, freelance projects, and collaborations at the intersection of business operations and technology.
- Added direct links to LinkedIn, GitHub, Upwork, and Fiverr alongside the existing email contact.
- Kept the new contact options consistent with Aster's existing visual style and responsive layout.
- Updated the README to document the expanded Contact capabilities.
- Updated the roadmap to mark the Contact hub improvement and related documentation alignment as complete.

### Direction

Aster supports both professional opportunities and independent client work, while presenting the portfolio as a record of practical business experience and software development.

---

## [0.1.0] — Portfolio Accuracy & Documentation — 2026-10-18

### Updated

- Replaced generic portfolio experience content with actual roles, employers, locations, and employment dates.
- Added the independent freelance period, July–October 2026, with a deliberately general description until specific services and clients are documented.
- Refined experience summaries to cover sales and operations coordination, CRM workflows, customer service, real estate support, project coordination, event operations, and procurement.
- Added relevant platforms: HubSpot, TripleSeat, OpenTable, and AccuLynx.
- Organized the Toolkit around practical business skills, CRM platforms, and software-development tools.
- Aligned the About section with professional experience and the current technical-learning direction.
- Updated the README to document professional experience, skills, technologies, project status, and links to the roadmap and changelog.
- Clarified that experience metrics are approximate where applicable.
- Kept future project ideas marked as planned rather than presenting them as completed features.

---

## Initial Foundation

### Added

- Initial Aster portfolio application
- React-based component architecture and TypeScript integration
- Vite development environment
- Responsive portfolio interface
- About, Experience, Projects, Toolkit, and Contact sections
- Reusable project card component and structured project data
- Interactive UI and mouse effects
- Git and GitHub workflow
- GitHub Pages deployment and GitHub Actions deployment workflow
- Project documentation through `README.md`
- Development roadmap through `ROADMAP.md`

### Learning

Aster began as a hands-on learning project. AI has been used as a development and learning partner to help explore concepts, compare implementation approaches, debug problems, and iterate on the application.

### Direction

Aster is the foundation for future software projects, experiments, milestones, and technical documentation.

## [0.8.0] — Documentation synchronization — 2026-11-03

### Updated
- Refreshed the README to reflect the current seven-repository portfolio and Aster's maintenance status.
- Reviewed the roadmap and clarified that portfolio maintenance and evidence-backed project updates take priority over adding features.
- Reconfirmed that manual viewport, contrast, and keyboard checks remain open maintenance tasks.
