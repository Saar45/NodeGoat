# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "getos" (range: 2.8.2 - 3.1.1) | via: async

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"getos","severity":"high","isDirect":false,"via":["async"],"effects":["cypress"],"range":"2.8.2 - 3.1.1","nodes":["node_modules\/getos"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
