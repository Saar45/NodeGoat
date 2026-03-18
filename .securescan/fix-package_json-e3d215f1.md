# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "readdirp" (range: 2.2.0 - 2.2.1) | via: micromatch

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"readdirp","severity":"moderate","isDirect":false,"via":["micromatch"],"effects":["chokidar"],"range":"2.2.0 - 2.2.1","nodes":["node_modules\/readdirp"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
