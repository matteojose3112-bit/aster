# Solution Studio — Project Case Study

## Overview

**Solution Studio** is a modular business-solutions workshop that brings five practical workflows into one deployed application: research brief generation from supplied notes, document text extraction, CSV/XLSX data processing, controlled text automation, and static website starter generation.

- **Repository:** https://github.com/matteojose3112-bit/solution-studio
- **Live demo:** https://solution-studio-secb.onrender.com
- **Status:** Deployed MVP · QA follow-up
- **Role:** Product development, full-stack engineering, API design, workflow design, testing, deployment, and documentation

## Problem and goals

The project explores how a small, modular application can package common business-support tasks into clear, reviewable workflows. The goal was to favor deterministic processing, explicit user review, bounded inputs, and useful exports rather than presenting a broad but unverified AI automation platform.

## What was built

1. **Research Studio** — creates structured briefs from up to eight user-provided source notes, with summaries, key points, references, limitations, and Markdown export. It does not automatically browse or independently verify sources.
2. **Document Studio** — extracts text and metadata from PDF, DOCX, and UTF-8 TXT uploads, with file, page, archive-expansion, and output limits.
3. **Data Studio** — inspects, validates, cleans, and transforms CSV/XLSX files, with downloadable exports.
4. **Automation Studio** — executes allowlisted deterministic text actions with preview, an approval checkpoint, execution logs, output download, and workflow JSON export. It does not run arbitrary code, shell commands, or outbound requests.
5. **Development Studio** — generates a responsive static business website starter ZIP containing HTML, CSS, and setup notes. It does not deploy or host the generated site.

## Architecture and technology

- **Backend:** Python, FastAPI, Uvicorn
- **Frontend:** HTML, CSS, and JavaScript
- **Data/document processing:** openpyxl, pypdf, python-docx
- **Quality:** pytest and GitHub Actions
- **Hosting:** Render

The FastAPI application serves the frontend and API from one Render web service. Uploaded files and workflow inputs are processed in memory rather than persisted.

## Verification

- The integrated backend test suite passed 58 tests, including API-level CSV upload/inspection/cleanup/export and TXT upload/extraction coverage.
- GitHub Actions previously passed the backend suite and frontend JavaScript syntax checks.
- Production browser smoke testing confirmed the API-connected state, all five studios rendering, and no visible application errors.
- Research report generation and Markdown download control passed.
- Automation preview, approval, execution, and output/workflow controls passed.
- Development website ZIP generation passed.
- Data and Documents upload controls were inspected, but actual browser file-picker upload/download remains unverified because the browser automation environment cannot attach local files to file inputs.

## Security and limitations

- Automation uses a deterministic allowlist and does not execute arbitrary code.
- Spreadsheet processing includes archive-expansion safeguards.
- Research output is based on supplied notes and is not independent research verification.
- Document processing extracts text and metadata; it is not a full document editor or converter.
- Generated websites are static starter projects, not hosted services.
- Uploads are in-memory and are not persisted.
- Live browser file-picker QA for Data and Documents remains an open verification item.

## Outcome and next steps

Solution Studio demonstrates a complete first-version modular application, a public deployment, automated backend coverage, and several successful live browser workflows. The remaining release-readiness task is to exercise CSV/XLSX and document uploads through a real browser file picker and confirm the resulting downloads. Until then, the project is presented accurately as a deployed MVP with QA follow-up.
