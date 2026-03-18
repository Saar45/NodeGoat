# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "i" (range: <0.3.7) | via: inflect vulnerable to Inefficient Regular Expression Complexity

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"i","severity":"high","isDirect":false,"via":[{"source":1089188,"name":"i","dependency":"i","title":"inflect vulnerable to Inefficient Regular Expression Complexity","url":"https:\/\/github.com\/advisories\/GHSA-x55w-vjjp-222r","severity":"high","cwe":["CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<0.3.7"}],"effects":[],"range":"<0.3.7","nodes":["node_modules\/i"],"fixAvailable":true}
```
