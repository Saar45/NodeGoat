# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `server.js`
**Line:** 78

## Description

Default session middleware settings: `httpOnly` not set. It ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans server.js et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
