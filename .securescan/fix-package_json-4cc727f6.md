# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "globule" (range: *) | via: minimatch

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"globule","severity":"high","isDirect":false,"via":["minimatch"],"effects":["gaze"],"range":"*","nodes":["node_modules\/globule"],"fixAvailable":{"name":"grunt-contrib-watch","version":"0.4.4","isSemVerMajor":true}}
```
