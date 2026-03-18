# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "coveralls" (range: *) | via: js-yaml, minimist, request

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"coveralls","severity":"critical","isDirect":false,"via":["js-yaml","minimist","request"],"effects":["tap"],"range":"*","nodes":["node_modules\/coveralls"],"fixAvailable":true}
```
