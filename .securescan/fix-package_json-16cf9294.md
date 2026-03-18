# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "grunt-contrib-jshint" (range: *) | via: jshint

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"grunt-contrib-jshint","severity":"high","isDirect":true,"via":["jshint"],"effects":["grunt-if"],"range":"*","nodes":["node_modules\/grunt-contrib-jshint","node_modules\/grunt-if\/node_modules\/grunt-contrib-jshint"],"fixAvailable":false}
```
