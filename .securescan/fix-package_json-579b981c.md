# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "helmet" (range: 0.3.0 - 3.20.1) | via: connect, helmet-csp

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"helmet","severity":"high","isDirect":true,"via":["connect","helmet-csp"],"effects":[],"range":"0.3.0 - 3.20.1","nodes":["node_modules\/helmet"],"fixAvailable":true}
```
