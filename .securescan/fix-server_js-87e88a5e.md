# SecureScan Remediation

**Severity:** INFO
**Tool:** semgrep
**File:** `server.js`
**Line:** 15

## Description

A CSRF middleware was not detected in your express application. Ensure you are either using one such as `csurf` or `csrf` (see rule references) and/or you are properly doing CSRF validation in your routes with a token or cookies.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité INFO). Examinez le code concerné dans server.js et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
