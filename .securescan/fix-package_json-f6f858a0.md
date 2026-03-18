# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "cross-spawn" (range: <6.0.6 || >=7.0.0 <7.0.5) | via: Regular Expression Denial of Service (ReDoS) in cross-spawn, Regular Expression Denial of Service (ReDoS) in cross-spawn

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"cross-spawn","severity":"high","isDirect":false,"via":[{"source":1104663,"name":"cross-spawn","dependency":"cross-spawn","title":"Regular Expression Denial of Service (ReDoS) in cross-spawn","url":"https:\/\/github.com\/advisories\/GHSA-3xgq-45jj-v275","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<6.0.6"},{"source":1104664,"name":"cross-spawn","dependency":"cross-spawn","title":"Regular Expression Denial of Service (ReDoS) in cross-spawn","url":"https:\/\/github.com\/advisories\/GHSA-3xgq-45jj-v275","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":">=7.0.0 <7.0.5"}],"effects":["execa","foreground-child"],"range":"<6.0.6 || >=7.0.0 <7.0.5","nodes":["node_modules\/cross-env\/node_modules\/cross-spawn","node_modules\/cross-spawn","node_modules\/cypress\/node_modules\/cross-spawn","node_modules\/execa\/node_modules\/cross-spawn","node_modules\/nyc\/node_modules\/cross-spawn"],"fixAvailable":{"name":"nodemon","version":"3.1.14","isSemVerMajor":true}}
```
