# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "braces" (range: <3.0.3) | via: Uncontrolled resource consumption in braces

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"braces","severity":"high","isDirect":false,"via":[{"source":1098094,"name":"braces","dependency":"braces","title":"Uncontrolled resource consumption in braces","url":"https:\/\/github.com\/advisories\/GHSA-grv7-fg5c-xmjg","severity":"high","cwe":["CWE-400","CWE-1050"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<3.0.3"}],"effects":["chokidar","micromatch"],"range":"<3.0.3","nodes":["node_modules\/braces","node_modules\/liftoff\/node_modules\/braces","node_modules\/nyc\/node_modules\/braces"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
