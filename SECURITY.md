# Security Policy

## Supported Scope
Security reports should cover:
- `frontend/` client application
- `backend/` API and integrations
- deployment and configuration assets in this repository

## Reporting a Vulnerability
Please open a private security advisory or contact the maintainers through repository security channels. Include:
- affected component and file path
- reproduction steps
- expected vs actual behavior
- impact assessment

## Security Baselines
- No secrets committed in source
- Environment-driven configuration (`.env`, `.env.example`)
- Keep dependencies updated and monitor advisories
- Validate authentication and payment flows before release
