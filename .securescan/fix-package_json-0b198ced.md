# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "term-size" (range: 1.0.0 - 1.2.0) | via: execa

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"term-size","severity":"high","isDirect":false,"via":["execa"],"effects":["boxen"],"range":"1.0.0 - 1.2.0","nodes":["node_modules\/term-size"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
