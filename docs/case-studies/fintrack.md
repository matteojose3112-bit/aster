# FinTrack — Full-Stack Personal Finance MVP

## Overview

FinTrack is a personal finance application built to explore a complete, database-backed product workflow: account access, transaction management, budgets, savings goals, cash-flow summaries, and deployment.

**Project status:** Deployed MVP. Automated checks are in place; live end-to-end acceptance testing and operational hardening remain open.

- **Repository:** https://github.com/matteojose3112-bit/fintrack
- **Live application:** https://fintrack-web-int6.onrender.com

## Problem and goal

The goal was to move beyond a static dashboard and build a practical full-stack application with persistent data, authenticated accounts, validated API requests, and a repeatable deployment setup.

## Product scope

- Register and sign in to an account.
- Create, edit, search, categorize, and review income and expense transactions.
- Review balance, income, expenses, savings rate, and cash-flow summaries.
- Set monthly budgets and track spending by category.
- Create and monitor savings goals.
- Review monthly and category-level analytics.
- Export transaction data as CSV.

## Architecture

- **Frontend:** React, Vite, Tailwind CSS, Recharts, and Lucide.
- **Backend:** Python, FastAPI, Pydantic, and SQLAlchemy.
- **Database:** PostgreSQL in the hosted environment; SQLite is supported for local development and tests.
- **Migrations:** Alembic.
- **Authentication:** Argon2 password hashing and expiring JWT-based sessions.
- **Quality checks:** Vitest and React Testing Library for frontend tests; pytest and FastAPI TestClient for backend tests.
- **Hosting:** Render Blueprint for the web frontend, API, and managed PostgreSQL database.

## Engineering decisions

The frontend and API are separate deployable services. API validation is handled with typed request/response models, database schema changes are managed through migrations, and data access is scoped to the authenticated account. Automated tests and CI checks provide a repeatable baseline for development.

## Current limitations and responsible use

FinTrack is a learning and portfolio MVP, not a certified financial, banking, or accounting product. A successful deployment and passing automated checks do not establish production readiness.

Before relying on the hosted instance for sensitive or durable financial records, the following work needs to be completed:

- Run live browser acceptance tests for registration, sign-in, transaction workflows, budgets, savings goals, CSV export, and account isolation.
- Review authentication, authorization, session handling, security configuration, backups, and recovery procedures.
- Resolve or explicitly assess the frontend dependency audit findings and bundle-size warning recorded during the project review.
- Confirm the current lifecycle and retention terms of the hosted database plan; the reviewed free database tier was scheduled to expire on December 2, 2026.
- Complete keyboard, responsive, and accessibility checks against the running application.

No personal financial information is included in this case study.

## What this project demonstrates

FinTrack brings together frontend development, API design, relational data modeling, authentication, automated testing, migrations, and cloud deployment in one coherent project. It also demonstrates the importance of distinguishing a working MVP from a system that has completed operational and security acceptance.
