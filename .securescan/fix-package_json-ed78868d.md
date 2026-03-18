# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "body-parser" (range: <=1.20.2) | via: body-parser vulnerable to denial of service when url encoding is enabled, qs

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"body-parser","severity":"high","isDirect":true,"via":[{"source":1099520,"name":"body-parser","dependency":"body-parser","title":"body-parser vulnerable to denial of service when url encoding is enabled","url":"https:\/\/github.com\/advisories\/GHSA-qwcr-r2fm-qrc7","severity":"high","cwe":["CWE-405"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<1.20.3"},"qs"],"effects":["express"],"range":"<=1.20.2","nodes":["node_modules\/body-parser"],"fixAvailable":true}
```
