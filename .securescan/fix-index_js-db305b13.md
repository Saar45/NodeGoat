# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `app/routes/index.js`
**Line:** 72

## Description

The application redirects to a URL specified by user-supplied input `req` that is not validated. This could redirect users to malicious locations. Consider using an allow-list approach to validate URLs, or warn users they are being redirected to a third-party website.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans app/routes/index.js et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
