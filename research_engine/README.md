# Research Engine Assets & Artifacts

This directory contains reusable research-engine inputs (**assets**) and outputs (**artifacts**) for S2M execution.

## Structure

- `assets/`
  - `discovery-taxonomy.json` — intervention domains and focus areas
  - `source-catalog.csv` — source tracking for evidence collection
- `artifacts/`
  - `research-brief-template.md` — standard brief template for each investigation
  - `intervention-scorecard-template.csv` — scoring model for implementation decisions
  - `s2m-research-register.json` — canonical register for active and completed research items

## How to Use

1. Add target opportunities and citations to `assets/source-catalog.csv`.
2. Create one brief from `artifacts/research-brief-template.md` per opportunity.
3. Score candidate interventions using `artifacts/intervention-scorecard-template.csv`.
4. Track status and decisions in `artifacts/s2m-research-register.json`.
