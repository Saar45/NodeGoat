# SecureScan Remediation

**Severity:** LOW
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "es5-ext" (range: 0.10.1 - 0.10.62) | via: es5-ext vulnerable to Regular Expression Denial of Service in `function#copy` and `function#toStringTokens`

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité LOW). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"es5-ext","severity":"low","isDirect":false,"via":[{"source":1096592,"name":"es5-ext","dependency":"es5-ext","title":"es5-ext vulnerable to Regular Expression Denial of Service in `function#copy` and `function#toStringTokens`","url":"https:\/\/github.com\/advisories\/GHSA-4gmj-3p3h-gm8h","severity":"low","cwe":["CWE-1333"],"cvss":{"score":0,"vectorString":null},"range":">=0.10.0 <0.10.63"}],"effects":[],"range":"0.10.1 - 0.10.62","nodes":["node_modules\/npm\/node_modules\/node-gyp\/node_modules\/path-array\/node_modules\/array-index\/node_modules\/es6-symbol\/node_modules\/es5-ext"],"fixAvailable":true}
```
