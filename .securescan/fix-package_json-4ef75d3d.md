# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "findup-sync" (range: 0.4.0 - 3.0.0) | via: micromatch

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"findup-sync","severity":"moderate","isDirect":false,"via":["micromatch"],"effects":["liftoff"],"range":"0.4.0 - 3.0.0","nodes":["node_modules\/liftoff\/node_modules\/findup-sync"],"fixAvailable":true}
```
