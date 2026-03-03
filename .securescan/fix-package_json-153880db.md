# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "mkdirp" (range: 0.4.1 - 0.5.1) | via: minimist

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"mkdirp","severity":"critical","isDirect":false,"via":["minimist"],"effects":["extract-zip","mocha","npm","nyc"],"range":"0.4.1 - 0.5.1","nodes":["node_modules\/fsevents\/node_modules\/mkdirp","node_modules\/mkdirp","node_modules\/npm\/node_modules\/mkdirp","node_modules\/nyc\/node_modules\/mkdirp"],"fixAvailable":{"name":"mocha","version":"11.7.5","isSemVerMajor":true}}
```
