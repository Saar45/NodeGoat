# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "selenium-webdriver" (range: 2.43.1 - 4.0.0-rc-2) | via: adm-zip, tmp, xml2js

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"selenium-webdriver","severity":"moderate","isDirect":true,"via":["adm-zip","tmp","xml2js"],"effects":[],"range":"2.43.1 - 4.0.0-rc-2","nodes":["node_modules\/selenium-webdriver"],"fixAvailable":{"name":"selenium-webdriver","version":"4.41.0","isSemVerMajor":true}}
```
