# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "babel-types" (range: <=6.14.0) | via: babel-traverse

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"babel-types","severity":"critical","isDirect":false,"via":["babel-traverse"],"effects":[],"range":"<=6.14.0","nodes":["node_modules\/nyc\/node_modules\/babel-types"],"fixAvailable":true}
```
