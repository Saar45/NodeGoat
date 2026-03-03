# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "mocha" (range: 0.6.0 - 6.2.2 || 7.0.0-esm1 - 7.1.0) | via: debug, diff, glob, growl, mkdirp

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"mocha","severity":"critical","isDirect":true,"via":["debug","diff","glob","growl","mkdirp"],"effects":[],"range":"0.6.0 - 6.2.2 || 7.0.0-esm1 - 7.1.0","nodes":["node_modules\/mocha"],"fixAvailable":{"name":"mocha","version":"11.7.5","isSemVerMajor":true}}
```
