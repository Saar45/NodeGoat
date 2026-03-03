# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "meow" (range: 3.4.0 - 5.0.0) | via: trim-newlines

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"meow","severity":"high","isDirect":false,"via":["trim-newlines"],"effects":[],"range":"3.4.0 - 5.0.0","nodes":["node_modules\/meow"],"fixAvailable":true}
```
