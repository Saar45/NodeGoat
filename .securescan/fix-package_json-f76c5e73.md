# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "async" (range: 2.0.0 - 2.6.3) | via: Prototype Pollution in async

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"async","severity":"high","isDirect":true,"via":[{"source":1097691,"name":"async","dependency":"async","title":"Prototype Pollution in async","url":"https:\/\/github.com\/advisories\/GHSA-fwr7-v2mv-hh25","severity":"high","cwe":["CWE-1321"],"cvss":{"score":7.8,"vectorString":"CVSS:3.1\/AV:L\/AC:L\/PR:N\/UI:R\/S:U\/C:H\/I:H\/A:H"},"range":">=2.0.0 <2.6.4"}],"effects":["getos"],"range":"2.0.0 - 2.6.3","nodes":["node_modules\/async","node_modules\/grunt-retire\/node_modules\/form-data\/node_modules\/async"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
