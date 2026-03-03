# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "jsprim" (range: 0.3.0 - 1.4.1 || 2.0.0 - 2.0.1) | via: json-schema

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"jsprim","severity":"critical","isDirect":false,"via":["json-schema"],"effects":[],"range":"0.3.0 - 1.4.1 || 2.0.0 - 2.0.1","nodes":["node_modules\/jsprim","node_modules\/npm\/node_modules\/request\/node_modules\/http-signature\/node_modules\/jsprim"],"fixAvailable":true}
```
