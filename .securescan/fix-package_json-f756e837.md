# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "undefsafe" (range: <2.0.3) | via: Prototype Pollution in undefsafe

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"undefsafe","severity":"moderate","isDirect":false,"via":[{"source":1089922,"name":"undefsafe","dependency":"undefsafe","title":"Prototype Pollution in undefsafe","url":"https:\/\/github.com\/advisories\/GHSA-332q-7ff2-57h2","severity":"moderate","cwe":["CWE-74"],"cvss":{"score":6.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:L\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":"<2.0.3"}],"effects":[],"range":"<2.0.3","nodes":["node_modules\/undefsafe"],"fixAvailable":true}
```
