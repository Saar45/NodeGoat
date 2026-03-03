# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "node-gyp" (range: <=10.3.1) | via: request, tar

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"node-gyp","severity":"high","isDirect":false,"via":["request","tar"],"effects":["npm"],"range":"<=10.3.1","nodes":["node_modules\/npm\/node_modules\/node-gyp"],"fixAvailable":false}
```
