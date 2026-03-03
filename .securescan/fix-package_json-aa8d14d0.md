# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "foreground-child" (range: 1.5.2 - 1.5.6) | via: cross-spawn

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"foreground-child","severity":"high","isDirect":false,"via":["cross-spawn"],"effects":["nyc"],"range":"1.5.2 - 1.5.6","nodes":["node_modules\/foreground-child","node_modules\/nyc\/node_modules\/foreground-child"],"fixAvailable":true}
```
