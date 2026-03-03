# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "cypress" (range: 0.1.0 - 4.12.1) | via: debug, extract-zip, getos, lodash, minimist, moment, request, tmp

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"cypress","severity":"critical","isDirect":true,"via":["debug","extract-zip","getos","lodash","minimist","moment","request","tmp"],"effects":[],"range":"0.1.0 - 4.12.1","nodes":["node_modules\/cypress"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
