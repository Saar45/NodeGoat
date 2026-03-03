# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "tap" (range: 1.1.0 - 14.6.7 || 14.10.2-totally-bundled - 14.10.2-unbundled) | via: coveralls, nyc, tap-mocha-reporter

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"tap","severity":"high","isDirect":false,"via":["coveralls","nyc","tap-mocha-reporter"],"effects":["nodeunit"],"range":"1.1.0 - 14.6.7 || 14.10.2-totally-bundled - 14.10.2-unbundled","nodes":["node_modules\/tap"],"fixAvailable":true}
```
