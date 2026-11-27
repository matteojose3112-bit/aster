# Aster Roadmap

Aster is the personal portfolio and development record for professional experience and independent software work. This roadmap tracks the portfolio's own scope; individual application roadmaps remain in their respective repositories.

**Current status: Core scope complete · Ready for maintenance; final verification follow-ups remain**

The active collection contains six project cards across six repositories: Aster, AgentForge, Solution Studio, OpsFlow, ClientPulse, and FinTrack. That is Aster plus five independent software projects. FinTrack's current card links to its standalone repository and live browser-local demo.

---

## Phase 1 — Foundation

**Status: Complete**

- [x] Build and deploy the React, TypeScript, and Vite portfolio.
- [x] Create responsive sections for About, Projects, Experience, Toolkit, and Contact.
- [x] Establish reusable components and structured project data.
- [x] Configure GitHub Pages hosting and GitHub Actions deployment.

## Phase 2 — Professional Profile & Portfolio Accuracy

**Status: Final source review complete · Manual and fresh automated verification remain**

- [x] Present professional roles, employers, locations, dates, responsibilities, tools, and approximate impact metrics.
- [x] Align About with Revenue Operations, Business Operations, CRM, Customer Success, and Analytics.
- [x] Keep the detailed seven-group skills catalogue in the Toolkit section.
- [x] Keep credentials and language levels aligned with the professional resume.
- [x] Maintain direct contact links for email, LinkedIn, GitHub, Upwork, and Fiverr.
- [x] Remove FinTrack from the active Aster project collection and retire its obsolete case study.
- [x] Reconcile the remaining project cards with their current repositories.
- [x] Distinguish project maturity and validation limitations instead of implying production readiness.
- [x] Maintain README, roadmap, changelog, and case-study consistency.
- [x] Run lint and production-build checks through GitHub Actions before deployment.
- [x] Provide a skip link, semantic landmarks, visible focus styles, reduced-motion support, and keyboard-aware mobile navigation.
- [x] Improve muted-text contrast against the near-black background at source level (approximately 8.1:1 for the corrected neutral text classes).
- [x] Prevent custom cursor animation and decorative motion when reduced motion is requested.
- [ ] Manually test desktop, tablet, and mobile layouts in a real browser.
- [ ] Verify rendered contrast, full keyboard operation, and screen-reader behavior across all sections.

## Phase 3 — Active Project Collection

**Status: Current collection established · Maintenance mode**

- [x] Aster — portfolio and development record.
- [x] AgentForge — controlled Go model/tool runtime and read-only Sales Operations workflow.
- [x] Solution Studio — modular business-solutions workspace.
- [x] OpsFlow — operations dashboard with Supabase-backed task and exception workflows.
- [x] ClientPulse — frontend-only customer-success dashboard with browser-local persistence.
- [x] FinTrack — browser-local personal-finance workspace with account-linked ledger balances, exact-precision money arithmetic, reviewed CSV imports and reconciliation, import audit history, spreadsheet-safe exports, paired transfers, and recurring-rule controls.
- [x] Maintain a repository and live-demo link where one exists.
- [x] Keep project descriptions grounded in implemented functionality and known limitations.
- [ ] Add further case studies only when they provide meaningful evidence for a selected project.

## Phase 4 — Development Journal

**Status: Ongoing, as meaningful work occurs**

- [x] Maintain a roadmap and changelog.
- [x] Document Aster's implementation and selected project work.
- [ ] Record major technical discoveries and architectural decisions when they add lasting value.
- [ ] Document difficult bugs, solutions, and lessons learned when relevant.

## Phase 5 — Integrations & Automation

**Status: Optional future consideration · Not a completion requirement**

- [ ] Evaluate repository metadata automation only if manual updates become a real maintenance burden.
- [ ] Consider additional integrations only when there is a clear use case.
- [x] Keep lint and production-build checks in the deployment workflow.

---

## Closeout standard

Aster should remain in maintenance mode. Reopen work only for a concrete correction, meaningful new evidence, or a clearly valuable improvement. Do not add features for their own sake.

## Final QA closeout — 2026-11-19

**Decision: Ready for maintenance; planned portfolio scope complete.** The final review covered the default-branch source and documentation, page landmarks, navigation and mobile-menu behavior by code inspection, contact destinations, active project descriptions, accessibility implementation, Vite base path, package lockfile, and deployment workflow configuration. No additional code defect was confirmed, so no application source changes were necessary.

- [x] Review the final source and documentation state on `master`.
- [x] Confirm the corrected muted-text color has approximately 8.1:1 source-calculated contrast against the page background.
- [x] Confirm reduced-motion handling is present in the stylesheet and custom cursor effect.
- [x] Confirm the GitHub Pages workflow is configured to install dependencies, lint, build, and deploy.
- [ ] Run a fresh `npm ci`, `npm run lint`, and `npm run build` and confirm the latest GitHub Actions result.
- [ ] Test the live site at desktop, tablet, and mobile sizes.
- [ ] Verify rendered contrast, full keyboard operation, screen-reader behavior, and live project/contact links.

The fresh build/workflow and live browser checks could not be completed in this review environment. The browser-testing service could not start because its available wallet balance was insufficient. These items remain explicit verification follow-ups; none is represented as a passed test. They do not require additional feature development and do not prevent moving on to the next repository.

A successful automated build or deployment is not a substitute for manual browser and accessibility verification.

**Guiding principle:** Build real things. Understand what you build. Learn from what breaks. Keep improving.

Review date: 2026-11-19

Latest accessibility refinements and documentation closeout are committed on `master`. Aster's core scope is complete and it remains in maintenance mode.


## Project collection refresh — 2026-11-24

- [x] Restore FinTrack as the sixth Section 02 project card with repository and live-demo links.
- [x] Align the card and README with FinTrack v0.4.8 capabilities and explicitly document its browser-local demo boundaries.
- [x] Keep the shared ProjectCard component and structured project-data pattern; no separate card implementation is needed.


## FinTrack card refresh — 2026-11-25

- [x] Expand the Section 02 card to reflect the implemented ledger, CSV review/reconciliation, import audit trail, paired transfers, and recurring-rule workflows.
- [x] State that recurring rules are reminders rather than automatic postings.
- [x] Keep the browser-local demo and unavailable production integrations clearly distinguished.
- [x] Synchronize the structured project data, README, and changelog.
- [ ] Run fresh lint/build and verify the latest GitHub Actions deployment.


## Maintenance review — 2026-11-27

The current collection is six project cards across six repositories (Aster plus five independent projects). FinTrack is included again as of the 2026-11-24/25 updates; older changelog entries describing its removal are historical and superseded. Aster's core scope remains complete and in maintenance mode. Fresh lint/build, live viewport, keyboard, contrast and assistive-technology checks remain unverified follow-ups.
