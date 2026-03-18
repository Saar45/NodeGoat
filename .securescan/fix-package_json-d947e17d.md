# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "boom" (range: *) | via: hoek

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"boom","severity":"high","isDirect":false,"via":["hoek"],"effects":["cryptiles","hawk"],"range":"*","nodes":["node_modules\/boom","node_modules\/npm\/node_modules\/request\/node_modules\/hawk\/node_modules\/boom","node_modules\/zaproxy\/node_modules\/boom"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
