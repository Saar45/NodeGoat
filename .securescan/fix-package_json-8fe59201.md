# SecureScan Remediation

**Severity:** MEDIUM
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "ms" (range: <2.0.0) | via: Vercel ms Inefficient Regular Expression Complexity vulnerability

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité MEDIUM). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"ms","severity":"moderate","isDirect":false,"via":[{"source":1109573,"name":"ms","dependency":"ms","title":"Vercel ms Inefficient Regular Expression Complexity vulnerability","url":"https:\/\/github.com\/advisories\/GHSA-w9mr-4mfr-499f","severity":"moderate","cwe":["CWE-1333"],"cvss":{"score":5.3,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:L"},"range":"<2.0.0"}],"effects":["debug"],"range":"<2.0.0","nodes":["node_modules\/connect\/node_modules\/ms","node_modules\/mocha\/node_modules\/ms","node_modules\/npm\/node_modules\/node-gyp\/node_modules\/path-array\/node_modules\/array-index\/node_modules\/debug\/node_modules\/ms","node_modules\/nyc\/node_modules\/ms"],"fixAvailable":{"name":"mocha","version":"11.7.5","isSemVerMajor":true}}
```
