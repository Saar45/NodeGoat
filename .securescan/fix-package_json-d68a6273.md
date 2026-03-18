# SecureScan Remediation

**Severity:** LOW
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "express-session" (range: 1.0.1 - 1.18.1) | via: cookie, on-headers

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité LOW). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"express-session","severity":"low","isDirect":true,"via":["cookie","on-headers"],"effects":[],"range":"1.0.1 - 1.18.1","nodes":["node_modules\/express-session"],"fixAvailable":true}
```
