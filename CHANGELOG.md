# Changelog

All notable changes to Aster are documented here. Entries focus on meaningful portfolio, software, documentation, and development milestones.

---

## [0.5.0] — Quality Checks & Accessibility — 2026-11-03

### Added

- Added ESLint to the GitHub Actions deployment workflow so linting runs before the production build.
- Documented local quality-check commands: `npm run lint` and `npm run build`.
- Added a keyboard-accessibility improvement to mobile navigation: closed links are removed from tab order, active links expose their current location, and Escape closes the menu and returns focus to its toggle.

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
