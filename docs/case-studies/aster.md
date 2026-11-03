# Aster — Portfolio & Development Record

**Project type:** Personal portfolio / frontend application  
**Status:** Live and actively maintained  
**Live site:** https://matteojose3112-bit.github.io/aster/  
**Repository:** https://github.com/matteojose3112-bit/aster

## Overview

Aster is a personal portfolio and development record that brings professional experience, practical software projects, and ongoing technical learning into one place. It is designed to show both the work itself and the process of building, testing, documenting, and improving it.

## Goals

- Present professional experience and transferable skills accurately.
- Give each software project a clear summary, status, technology list, and destination.
- Provide a responsive, accessible starting point for recruiters, clients, and collaborators.
- Use the portfolio as a real application for practicing frontend development and delivery workflows.

## Approach and implementation

The site is built with React, TypeScript, Vite, and Tailwind CSS. The interface is divided into reusable layout and section components, while project information is maintained as structured data in `portfolio/src/data/projects.ts`.

The main page includes About, Projects, Experience, Toolkit, and Contact sections. Project cards are data-driven and show each project's purpose, current status, contribution, technologies, and available repository or demo links.

GitHub Actions runs ESLint and the TypeScript/Vite production build before deployment to GitHub Pages. The project also includes reduced-motion handling, visible keyboard focus styles, a skip link, and keyboard support for the mobile navigation.

## Design and engineering decisions

- **Structured project data:** project details are kept separate from presentation components, making the collection easier to update consistently.
- **Honest project status:** cards distinguish live MVPs, functional service workflows, and projects whose end-to-end validation is still underway.
- **Progressive quality checks:** linting and production builds run automatically before publishing.
- **Accessibility-minded interaction:** motion preferences, keyboard focus, navigation state, and page landmarks are treated as part of the implementation rather than visual polish alone.
- **Small, maintainable components:** the page is composed from focused sections and reusable project cards instead of one monolithic component.

## Outcome

Aster is deployed as a live portfolio and currently presents six projects: Aster, FinTrack, OpsFlow, ClientPulse, the Transcription & Content Toolkit, and the Research & Reporting Toolkit. It provides direct paths to the project repositories and available demos, alongside professional and freelance contact links.

## Current limitations and next improvements

- Manual testing across representative mobile, tablet, and desktop viewports remains necessary.
- Contrast and keyboard behavior still need a full rendered-page review.
- Additional project-specific case studies should be added for selected projects.
- Performance should be measured before making performance claims or optimizations based on metrics.

## Technology

React · TypeScript · Vite · Tailwind CSS · ESLint · GitHub Actions · GitHub Pages

---

This case study describes the implementation and current repository state. It does not claim formal usability testing, Lighthouse scores, or performance benchmarks.
