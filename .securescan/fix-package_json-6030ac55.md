# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "helmet-csp" (range: 1.2.2 - 2.9.0) | via: Configuration Override in helmet-csp

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"helmet-csp","severity":"moderate","isDirect":false,"via":[{"source":1086769,"name":"helmet-csp","dependency":"helmet-csp","title":"Configuration Override in helmet-csp","url":"https:\/\/github.com\/advisories\/GHSA-c3m8-x3cg-qm2c","severity":"moderate","cwe":[],"cvss":{"score":6.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:N"},"range":">=1.2.2 <2.9.1"}],"effects":["helmet"],"range":"1.2.2 - 2.9.0","nodes":["node_modules\/helmet-csp"],"fixAvailable":true}
```
