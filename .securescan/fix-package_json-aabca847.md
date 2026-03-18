# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "nodemon" (range: 1.3.5 - 2.0.16 || 2.0.18) | via: chokidar, update-notifier

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"nodemon","severity":"high","isDirect":true,"via":["chokidar","update-notifier"],"effects":[],"range":"1.3.5 - 2.0.16 || 2.0.18","nodes":["node_modules\/nodemon"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
