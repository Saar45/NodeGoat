# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "extract-zip" (range: <=1.6.7) | via: mkdirp

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"extract-zip","severity":"critical","isDirect":false,"via":["mkdirp"],"effects":["cypress"],"range":"<=1.6.7","nodes":["node_modules\/extract-zip"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
