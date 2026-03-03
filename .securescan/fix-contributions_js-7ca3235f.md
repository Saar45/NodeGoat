# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `app/routes/contributions.js`
**Line:** 33

## Description

Found data from an Express or Next web request flowing to `eval`. If this data is user-controllable this can lead to execution of arbitrary system commands in the context of your application process. Avoid `eval` whenever possible.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans app/routes/contributions.js et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
