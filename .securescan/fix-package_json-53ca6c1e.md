# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "broadway" (range: <=0.3.6) | via: nconf

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"broadway","severity":"high","isDirect":false,"via":["nconf"],"effects":["flatiron","forever-monitor"],"range":"<=0.3.6","nodes":["node_modules\/broadway"],"fixAvailable":{"name":"forever","version":"4.0.3","isSemVerMajor":true}}
```
