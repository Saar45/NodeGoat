# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "nyc" (range: 5.0.0 - 14.1.1) | via: foreground-child, istanbul-lib-instrument, micromatch, mkdirp, test-exclude, yargs, yargs-parser

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"nyc","severity":"critical","isDirect":false,"via":["foreground-child","istanbul-lib-instrument","micromatch","mkdirp","test-exclude","yargs","yargs-parser"],"effects":["tap"],"range":"5.0.0 - 14.1.1","nodes":["node_modules\/nyc"],"fixAvailable":true}
```
