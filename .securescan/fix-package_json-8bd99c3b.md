# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "boxen" (range: 1.2.0 - 3.2.0) | via: term-size

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"boxen","severity":"high","isDirect":false,"via":["term-size"],"effects":["update-notifier"],"range":"1.2.0 - 3.2.0","nodes":["node_modules\/boxen"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
