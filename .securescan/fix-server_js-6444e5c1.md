# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `server.js`
**Line:** 78

## Description

Default session middleware settings: `expires` not set. Use it to set expiration date for persistent cookies.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans server.js et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
