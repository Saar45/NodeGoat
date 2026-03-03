# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "test-exclude" (range: <=4.2.3) | via: micromatch

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"test-exclude","severity":"moderate","isDirect":false,"via":["micromatch"],"effects":["nyc"],"range":"<=4.2.3","nodes":["node_modules\/nyc\/node_modules\/test-exclude"],"fixAvailable":true}
```
