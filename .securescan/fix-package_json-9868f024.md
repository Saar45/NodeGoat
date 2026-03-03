# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "adm-zip" (range: <0.4.11) | via: Arbitrary File Write in adm-zip

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"adm-zip","severity":"moderate","isDirect":false,"via":[{"source":1093814,"name":"adm-zip","dependency":"adm-zip","title":"Arbitrary File Write in adm-zip","url":"https:\/\/github.com\/advisories\/GHSA-3v6h-hqm4-2rg6","severity":"moderate","cwe":["CWE-22"],"cvss":{"score":5.5,"vectorString":"CVSS:3.1\/AV:L\/AC:L\/PR:N\/UI:R\/S:U\/C:N\/I:H\/A:N"},"range":"<0.4.11"}],"effects":["selenium-webdriver"],"range":"<0.4.11","nodes":["node_modules\/adm-zip"],"fixAvailable":{"name":"selenium-webdriver","version":"4.41.0","isSemVerMajor":true}}
```
