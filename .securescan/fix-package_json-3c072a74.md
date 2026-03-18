# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "anymatch" (range: 1.2.0 - 2.0.0) | via: micromatch

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"anymatch","severity":"moderate","isDirect":false,"via":["micromatch"],"effects":["chokidar"],"range":"1.2.0 - 2.0.0","nodes":["node_modules\/anymatch"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
