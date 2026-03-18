# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `server.js`
**Line:** 78

## Description

Default session middleware settings: `domain` not set. It indicates the domain of the cookie; use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans server.js et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
