# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "jshint" (range: 0.5.0 || >=0.6.0) | via: minimatch, shelljs

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"jshint","severity":"high","isDirect":true,"via":["minimatch","shelljs"],"effects":["grunt-contrib-jshint"],"range":"0.5.0 || >=0.6.0","nodes":["node_modules\/grunt-contrib-jshint\/node_modules\/jshint","node_modules\/grunt-if\/node_modules\/jshint","node_modules\/jshint"],"fixAvailable":false}
```
