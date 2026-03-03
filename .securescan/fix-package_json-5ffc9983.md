# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "node-pre-gyp" (range: *) | via: tar

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"node-pre-gyp","severity":"high","isDirect":false,"via":["tar"],"effects":["fsevents"],"range":"*","nodes":["node_modules\/fsevents\/node_modules\/node-pre-gyp"],"fixAvailable":true}
```
