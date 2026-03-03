# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "union-value" (range: <=1.0.0 || 2.0.0) | via: set-value

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"union-value","severity":"critical","isDirect":false,"via":["set-value"],"effects":[],"range":"<=1.0.0 || 2.0.0","nodes":["node_modules\/union-value"],"fixAvailable":true}
```
