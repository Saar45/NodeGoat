# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** semgrep
**File:** `server.js`
**Line:** 145

## Description

Checks for any usage of http servers instead of https servers. Encourages the usage of https protocol instead of http, which does not have TLS and is therefore unencrypted. Using http can lead to man-in-the-middle attacks in which the attacker is able to read sensitive information.

## Proposed Fix

Vulnérabilité détectée (semgrep, sévérité MEDIUM). Examinez le code concerné dans server.js et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
requires login
```
