# SecureScan Remediation

**Severity:** LOW
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "tmp" (range: <=0.2.3) | via: tmp allows arbitrary temporary file / directory write via symbolic link `dir` parameter

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité LOW). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"tmp","severity":"low","isDirect":false,"via":[{"source":1109537,"name":"tmp","dependency":"tmp","title":"tmp allows arbitrary temporary file \/ directory write via symbolic link `dir` parameter","url":"https:\/\/github.com\/advisories\/GHSA-52f5-9888-hmc6","severity":"low","cwe":["CWE-59"],"cvss":{"score":2.5,"vectorString":"CVSS:3.1\/AV:L\/AC:H\/PR:L\/UI:N\/S:U\/C:N\/I:L\/A:N"},"range":"<=0.2.3"}],"effects":["cypress","selenium-webdriver"],"range":"<=0.2.3","nodes":["node_modules\/cypress\/node_modules\/tmp","node_modules\/tmp"],"fixAvailable":{"name":"cypress","version":"15.11.0","isSemVerMajor":true}}
```
