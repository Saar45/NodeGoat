# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "gaze" (range: >=0.4.0) | via: globule

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"gaze","severity":"high","isDirect":false,"via":["globule"],"effects":["grunt-contrib-watch"],"range":">=0.4.0","nodes":["node_modules\/gaze"],"fixAvailable":{"name":"grunt-contrib-watch","version":"0.4.4","isSemVerMajor":true}}
```
