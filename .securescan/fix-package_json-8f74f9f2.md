# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "zaproxy" (range: <=1.0.1) | via: lodash, request

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"zaproxy","severity":"moderate","isDirect":true,"via":["lodash","request"],"effects":[],"range":"<=1.0.1","nodes":["node_modules\/zaproxy"],"fixAvailable":{"name":"zaproxy","version":"2.0.0-rc.7","isSemVerMajor":true}}
```
