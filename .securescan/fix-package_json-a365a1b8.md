# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "yargs" (range: 4.0.0-alpha1 - 7.0.0-alpha.3 || 7.1.1) | via: yargs-parser

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"yargs","severity":"moderate","isDirect":false,"via":["yargs-parser"],"effects":["nyc"],"range":"4.0.0-alpha1 - 7.0.0-alpha.3 || 7.1.1","nodes":["node_modules\/nyc\/node_modules\/yargs"],"fixAvailable":true}
```
