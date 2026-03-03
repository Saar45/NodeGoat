# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "ansi-regex" (range: 3.0.0) | via: Inefficient Regular Expression Complexity in chalk/ansi-regex

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"ansi-regex","severity":"high","isDirect":false,"via":[{"source":1094090,"name":"ansi-regex","dependency":"ansi-regex","title":"Inefficient Regular Expression Complexity in chalk\/ansi-regex","url":"https:\/\/github.com\/advisories\/GHSA-93q8-gq69-wqmw","severity":"high","cwe":["CWE-697","CWE-1333"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":">=3.0.0 <3.0.1"}],"effects":[],"range":"3.0.0","nodes":["node_modules\/ansi-align\/node_modules\/ansi-regex","node_modules\/boxen\/node_modules\/ansi-regex","node_modules\/widest-line\/node_modules\/ansi-regex"],"fixAvailable":true}
```
