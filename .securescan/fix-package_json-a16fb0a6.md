# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "package-json" (range: <=6.5.0) | via: got

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"package-json","severity":"moderate","isDirect":false,"via":["got"],"effects":["latest-version"],"range":"<=6.5.0","nodes":["node_modules\/package-json"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
