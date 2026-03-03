# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "chokidar" (range: 1.3.0 - 2.1.8) | via: anymatch, braces, readdirp

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"chokidar","severity":"high","isDirect":false,"via":["anymatch","braces","readdirp"],"effects":["forever-monitor","nodemon"],"range":"1.3.0 - 2.1.8","nodes":["node_modules\/chokidar","node_modules\/forever-monitor\/node_modules\/chokidar"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
