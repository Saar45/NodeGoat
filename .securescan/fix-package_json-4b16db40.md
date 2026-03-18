# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "sntp" (range: 0.0.0 || >=0.1.1) | via: hoek

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"sntp","severity":"high","isDirect":false,"via":["hoek"],"effects":["hawk"],"range":"0.0.0 || >=0.1.1","nodes":["node_modules\/npm\/node_modules\/request\/node_modules\/hawk\/node_modules\/sntp","node_modules\/sntp","node_modules\/zaproxy\/node_modules\/sntp"],"fixAvailable":{"name":"grunt-retire","version":"0.1.0","isSemVerMajor":true}}
```
