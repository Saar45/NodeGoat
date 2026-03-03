# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "execa" (range: 0.5.0 - 0.9.0) | via: cross-spawn

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"execa","severity":"high","isDirect":false,"via":["cross-spawn"],"effects":["term-size"],"range":"0.5.0 - 0.9.0","nodes":["node_modules\/execa"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
