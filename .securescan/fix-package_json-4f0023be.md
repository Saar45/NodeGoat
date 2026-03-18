# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "grunt-if" (range: >=0.1.1) | via: grunt-contrib-jshint

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"grunt-if","severity":"high","isDirect":true,"via":["grunt-contrib-jshint"],"effects":[],"range":">=0.1.1","nodes":["node_modules\/grunt-if"],"fixAvailable":false}
```
