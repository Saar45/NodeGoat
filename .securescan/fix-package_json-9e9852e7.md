# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "uglify-js" (range: <2.6.0) | via: Regular Expression Denial of Service in uglify-js

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"uglify-js","severity":"high","isDirect":false,"via":[{"source":1091686,"name":"uglify-js","dependency":"uglify-js","title":"Regular Expression Denial of Service in uglify-js","url":"https:\/\/github.com\/advisories\/GHSA-c9f4-xj24-8jqx","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.0\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<2.6.0"}],"effects":["swig"],"range":"<2.6.0","nodes":["node_modules\/uglify-js"],"fixAvailable":false}
```
