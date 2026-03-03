# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "glob" (range: 3.0.0 - 5.0.14) | via: minimatch

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"glob","severity":"high","isDirect":false,"via":["minimatch"],"effects":["mocha"],"range":"3.0.0 - 5.0.14","nodes":["node_modules\/mocha\/node_modules\/glob"],"fixAvailable":{"name":"mocha","version":"11.7.5","isSemVerMajor":true}}
```
