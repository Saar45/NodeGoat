# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "jsonpointer" (range: <5.0.0) | via: Prototype Pollution in node-jsonpointer

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"jsonpointer","severity":"moderate","isDirect":false,"via":[{"source":1102906,"name":"jsonpointer","dependency":"jsonpointer","title":"Prototype Pollution in node-jsonpointer","url":"https:\/\/github.com\/advisories\/GHSA-282f-qqgm-c34q","severity":"moderate","cwe":["CWE-843","CWE-1321"],"cvss":{"score":5.6,"vectorString":"CVSS:3.1\/AV:N\/AC:H\/PR:N\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":"<5.0.0"}],"effects":["is-my-json-valid"],"range":"<5.0.0","nodes":["node_modules\/jsonpointer","node_modules\/npm\/node_modules\/request\/node_modules\/har-validator\/node_modules\/is-my-json-valid\/node_modules\/jsonpointer"],"fixAvailable":true}
```
