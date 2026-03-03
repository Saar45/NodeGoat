# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "update-notifier" (range: 0.2.0 - 5.1.0) | via: boxen, latest-version

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"update-notifier","severity":"high","isDirect":false,"via":["boxen","latest-version"],"effects":["nodemon"],"range":"0.2.0 - 5.1.0","nodes":["node_modules\/update-notifier"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
