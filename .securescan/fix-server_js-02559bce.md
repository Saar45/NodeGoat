# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `server.js`
**Line:** 78

## Description

Don’t use the default session cookie name Using the default session cookie name can open your app to attacks. The security issue posed is similar to X-Powered-By: a potential attacker can use it to fingerprint the server and target attacks accordingly.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans server.js et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
