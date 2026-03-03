# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `app/views/tutorial/a2.html`
**Line:** 210

## Description

This link points to a plaintext HTTP URL. Prefer an encrypted HTTPS URL if possible.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans app/views/tutorial/a2.html et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
