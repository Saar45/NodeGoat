# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "istanbul-lib-instrument" (range: <=1.10.2) | via: babel-template, babel-traverse

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"istanbul-lib-instrument","severity":"critical","isDirect":false,"via":["babel-template","babel-traverse"],"effects":["nyc"],"range":"<=1.10.2","nodes":["node_modules\/nyc\/node_modules\/istanbul-lib-instrument"],"fixAvailable":true}
```
