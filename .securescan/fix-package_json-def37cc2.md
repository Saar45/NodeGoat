# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "yargs-parser" (range: <=5.0.0) | via: yargs-parser Vulnerable to Prototype Pollution

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"yargs-parser","severity":"moderate","isDirect":false,"via":[{"source":1088783,"name":"yargs-parser","dependency":"yargs-parser","title":"yargs-parser Vulnerable to Prototype Pollution","url":"https:\/\/github.com\/advisories\/GHSA-p9pc-299p-vxgp","severity":"moderate","cwe":["CWE-915","CWE-1321"],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:L\/AC:L\/PR:L\/UI:N\/S:U\/C:L\/I:L\/A:L"},"range":"<=5.0.0"}],"effects":["nyc","yargs"],"range":"<=5.0.0","nodes":["node_modules\/nyc\/node_modules\/yargs-parser"],"fixAvailable":true}
```
