# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "cryptiles" (range: *) | via: boom

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"cryptiles","severity":"high","isDirect":false,"via":["boom"],"effects":["hawk"],"range":"*","nodes":["node_modules\/cryptiles","node_modules\/npm\/node_modules\/request\/node_modules\/hawk\/node_modules\/cryptiles","node_modules\/zaproxy\/node_modules\/cryptiles"],"fixAvailable":{"name":"grunt-retire","version":"0.1.0","isSemVerMajor":true}}
```
