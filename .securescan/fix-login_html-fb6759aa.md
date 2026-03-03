# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `app/views/login.html`
**Line:** 107

## Description

Manually-created forms in django templates should specify a csrf_token to prevent CSRF attacks.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans app/views/login.html et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
