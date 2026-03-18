# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "liftoff" (range: 2.2.3 - 3.1.0) | via: findup-sync

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"liftoff","severity":"moderate","isDirect":false,"via":["findup-sync"],"effects":["grunt-cli"],"range":"2.2.3 - 3.1.0","nodes":["node_modules\/liftoff"],"fixAvailable":true}
```
