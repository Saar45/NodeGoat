# SecureScan Remediation

**Severity:** HIGH
**Tool:** npm-audit
**File:** `package.json`

## Description

NPM dependency vulnerability in "trim-newlines" (range: <3.0.1) | via: Uncontrolled Resource Consumption in trim-newlines

## Proposed Fix

Vulnérabilité détectée (npm-audit, sévérité HIGH). Examinez le code concerné dans package.json et appliquez les bonnes pratiques de sécurité OWASP.

## Raw Code

```
{"name":"trim-newlines","severity":"high","isDirect":false,"via":[{"source":1095100,"name":"trim-newlines","dependency":"trim-newlines","title":"Uncontrolled Resource Consumption in trim-newlines","url":"https:\/\/github.com\/advisories\/GHSA-7p7h-4mm5-852v","severity":"high","cwe":["CWE-400"],"cvss":{"score":7.5,"vectorString":"CVSS:3.1\/AV:N\/AC:L\/PR:N\/UI:N\/S:U\/C:N\/I:N\/A:H"},"range":"<3.0.1"}],"effects":["meow"],"range":"<3.0.1","nodes":["node_modules\/trim-newlines"],"fixAvailable":true}
```
