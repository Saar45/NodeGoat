# SecureScan Remediation

**Severity:** CRITICAL
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "mixin-deep" (range: <1.3.2) | via: Prototype Pollution in mixin-deep

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité CRITICAL). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"mixin-deep","severity":"critical","isDirect":false,"via":[{"source":1095047,"name":"mixin-deep","dependency":"mixin-deep","title":"Prototype Pollution in mixin-deep","url":"https:\/\/github.com\/advisories\/GHSA-fhjf-83wg-r2j9","severity":"critical","cwe":["CWE-88"],"cvss":{"score":9.8,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:H\/I:H\/A:H"},"range":"<1.3.2"}],"effects":[],"range":"<1.3.2","nodes":["node_modules\/mixin-deep"],"fixAvailable":true}
```
