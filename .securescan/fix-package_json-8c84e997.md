# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "latest-version" (range: 0.2.0 - 5.1.0) | via: package-json

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"latest-version","severity":"moderate","isDirect":false,"via":["package-json"],"effects":["update-notifier"],"range":"0.2.0 - 5.1.0","nodes":["node_modules\/latest-version"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
