# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "babel-template" (range: *) | via: babel-traverse

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"babel-template","severity":"critical","isDirect":false,"via":["babel-traverse"],"effects":[],"range":"*","nodes":["node_modules\/nyc\/node_modules\/babel-template"],"fixAvailable":true}
```
