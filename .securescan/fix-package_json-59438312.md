# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "grunt-legacy-util" (range: <=2.0.0) | via: getobject

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"grunt-legacy-util","severity":"critical","isDirect":false,"via":["getobject"],"effects":["grunt"],"range":"<=2.0.0","nodes":["node_modules\/grunt-legacy-util"],"fixAvailable":true}
```
